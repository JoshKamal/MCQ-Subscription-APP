import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { z } from "zod";

// We'll need to ask the user to set these environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
let stripe: Stripe | undefined;

if (stripeSecretKey) {
  stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2023-10-16",
  });
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // User profile routes
  app.patch('/api/user/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const updateSchema = z.object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        specialization: z.string().optional(),
      });
      
      const validData = updateSchema.parse(req.body);
      const updatedUser = await storage.updateUserProfile(userId, validData);
      
      res.json(updatedUser);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  });

  // Question routes
  app.get('/api/questions', isAuthenticated, async (req, res) => {
    try {
      const moduleId = req.query.moduleId as string | undefined;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      
      const questions = await storage.getQuestions(moduleId, limit);
      
      // Remove isCorrect from options for frontend display
      const sanitizedQuestions = questions.map(q => ({
        ...q,
        options: q.options.map(o => ({
          id: o.id,
          text: o.text
        }))
      }));
      
      res.json(sanitizedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).json({ message: "Failed to fetch questions" });
    }
  });

  app.get('/api/questions/:id', isAuthenticated, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const question = await storage.getQuestionById(id);
      
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
      
      // Remove isCorrect from options for frontend display
      const sanitizedQuestion = {
        ...question,
        options: question.options.map(o => ({
          id: o.id,
          text: o.text
        }))
      };
      
      res.json(sanitizedQuestion);
    } catch (error) {
      console.error("Error fetching question:", error);
      res.status(500).json({ message: "Failed to fetch question" });
    }
  });

  // Answer submission route
  app.post('/api/submit-answer', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      const answerSchema = z.object({
        questionId: z.number(),
        selectedOptionId: z.number(),
        sessionId: z.string().optional(),
      });
      
      const { questionId, selectedOptionId, sessionId } = answerSchema.parse(req.body);
      
      // Get the question to check if answer is correct
      const question = await storage.getQuestionById(questionId);
      
      if (!question) {
        return res.status(404).json({ message: "Question not found" });
      }
      
      const correctOption = question.options.find(o => o.isCorrect);
      const isCorrect = correctOption?.id === selectedOptionId;
      
      // Record the attempt
      const attempt = await storage.recordAttempt({
        userId,
        questionId,
        selectedOptionId,
        isCorrect,
        sessionId,
      });
      
      // If part of a session, update the session stats
      if (sessionId) {
        const [currentSession] = await storage.getUserSessions(userId, 1);
        
        if (currentSession && currentSession.id === sessionId) {
          await storage.updateStudySession(sessionId, {
            questionsAttempted: (currentSession.questionsAttempted || 0) + 1,
            correctAnswers: (currentSession.correctAnswers || 0) + (isCorrect ? 1 : 0),
          });
        }
      }
      
      res.json({
        attempt,
        isCorrect,
        correctOptionId: correctOption?.id,
        explanation: question.question.explanation,
        slideReference: question.question.slideReference,
      });
    } catch (error) {
      console.error("Error submitting answer:", error);
      res.status(500).json({ message: "Failed to submit answer" });
    }
  });

  // Module routes
  app.get('/api/modules', isAuthenticated, async (req, res) => {
    try {
      const modules = await storage.getModules();
      res.json(modules);
    } catch (error) {
      console.error("Error fetching modules:", error);
      res.status(500).json({ message: "Failed to fetch modules" });
    }
  });

  // Study session routes
  app.post('/api/sessions', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      const sessionSchema = z.object({
        moduleId: z.string().optional(),
      });
      
      const { moduleId } = sessionSchema.parse(req.body);
      
      const session = await storage.createStudySession(userId, moduleId);
      
      res.json(session);
    } catch (error) {
      console.error("Error creating session:", error);
      res.status(500).json({ message: "Failed to create session" });
    }
  });

  app.patch('/api/sessions/:id', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const sessionId = req.params.id;
      
      const updateSchema = z.object({
        endedAt: z.date().optional(),
        questionsAttempted: z.number().optional(),
        correctAnswers: z.number().optional(),
      });
      
      const validData = updateSchema.parse(req.body);
      
      // Only allow users to update their own sessions
      const [userSession] = await storage.getUserSessions(userId, 1);
      
      if (!userSession || userSession.id !== sessionId) {
        return res.status(403).json({ message: "Not authorized to update this session" });
      }
      
      const updatedSession = await storage.updateStudySession(sessionId, validData);
      
      res.json(updatedSession);
    } catch (error) {
      console.error("Error updating session:", error);
      res.status(500).json({ message: "Failed to update session" });
    }
  });

  app.get('/api/user/sessions', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      
      const sessions = await storage.getUserSessions(userId, limit);
      
      res.json(sessions);
    } catch (error) {
      console.error("Error fetching user sessions:", error);
      res.status(500).json({ message: "Failed to fetch user sessions" });
    }
  });

  // User stats routes
  app.get('/api/user/stats', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      const stats = await storage.getUserStats(userId);
      const recentAttempts = await storage.getUserAttempts(userId, 5);
      const recentSessions = await storage.getUserSessions(userId, 3);
      
      res.json({
        stats,
        recentAttempts,
        recentSessions,
      });
    } catch (error) {
      console.error("Error fetching user stats:", error);
      res.status(500).json({ message: "Failed to fetch user stats" });
    }
  });

  // Subscription plan routes
  app.get('/api/plans', async (req, res) => {
    try {
      const plans = await storage.getPlans();
      res.json(plans);
    } catch (error) {
      console.error("Error fetching plans:", error);
      res.status(500).json({ message: "Failed to fetch subscription plans" });
    }
  });

  // Payment routes
  if (stripe) {
    // Create one-time payment
    app.post('/api/create-payment-intent', isAuthenticated, async (req: any, res) => {
      try {
        const userId = req.user.claims.sub;
        const user = await storage.getUser(userId);
        
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        
        const paymentSchema = z.object({
          planId: z.string(),
        });
        
        const { planId } = paymentSchema.parse(req.body);
        
        const plan = await storage.getPlanById(planId);
        
        if (!plan) {
          return res.status(404).json({ message: "Payment plan not found" });
        }
        
        // Create or retrieve Stripe customer
        let customerId = user.stripeCustomerId;
        
        if (!customerId) {
          const customer = await stripe.customers.create({
            email: user.email || undefined,
            name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || undefined,
            metadata: {
              userId: user.id,
            },
          });
          
          customerId = customer.id;
          await storage.updateUserStripeInfo(user.id, { customerId });
        }
        
        // Create a payment intent for one-time payment
        const paymentIntent = await stripe.paymentIntents.create({
          amount: Math.round(plan.price * 100), // Convert to pence
          currency: 'gbp',
          customer: customerId,
          metadata: {
            userId: user.id,
            planId: plan.id
          },
          payment_method_types: ['card'],
        });
        
        res.json({
          clientSecret: paymentIntent.client_secret,
        });
      } catch (error: any) {
        console.error("Error creating payment intent:", error);
        res.status(500).json({ message: error.message || "Failed to create payment" });
      }
    });

    // Webhook for Stripe events
    app.post('/api/webhook', async (req, res) => {
      const sig = req.headers['stripe-signature'] as string;
      
      // Note: In production, you'd want to use the Stripe webhook secret
      // to verify the signature, but for this example, we'll skip that
      
      try {
        const event = req.body;
        
        // Handle the event
        switch (event.type) {
          case 'invoice.paid':
            // Update subscription status
            const invoice = event.data.object as Stripe.Invoice;
            if (invoice.subscription) {
              const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
              const customer = await stripe.customers.retrieve(subscription.customer as string);
              
              // If we have metadata with userId
              if (typeof customer !== 'string' && customer.metadata?.userId) {
                const userId = customer.metadata.userId;
                
                // Get the plan from line items
                const lineItem = invoice.lines.data[0];
                const price = lineItem?.price;
                const productId = price?.product as string;
                
                // Get the product to determine the plan
                const product = await stripe.products.retrieve(productId);
                const planId = product.metadata?.planId;
                
                if (planId) {
                  // Update user subscription
                  await storage.updateUserSubscription(
                    userId,
                    planId,
                    subscription.status,
                    new Date(subscription.current_period_end * 1000) // Convert from Unix timestamp
                  );
                  
                  // Record payment
                  await storage.recordPayment({
                    userId: userId,
                    stripePaymentId: invoice.id,
                    amount: invoice.amount_paid / 100, // Convert from cents
                    currency: invoice.currency,
                    status: 'paid',
                    paymentMethod: invoice.collection_method,
                    description: `Payment for ${product.name}`,
                  });
                }
              }
            }
            break;
            
          case 'customer.subscription.updated':
            // Update subscription status
            const subscription = event.data.object as Stripe.Subscription;
            const customer = await stripe.customers.retrieve(subscription.customer as string);
            
            if (typeof customer !== 'string' && customer.metadata?.userId) {
              const userId = customer.metadata.userId;
              
              // Get the first product in the subscription
              const item = subscription.items.data[0];
              const price = item?.price;
              const productId = price?.product as string;
              
              // Get the product to determine the plan
              const product = await stripe.products.retrieve(productId);
              const planId = product.metadata?.planId;
              
              if (planId) {
                // Update user subscription status
                await storage.updateUserSubscription(
                  userId,
                  planId,
                  subscription.status,
                  new Date(subscription.current_period_end * 1000)
                );
              }
            }
            break;
            
          case 'customer.subscription.deleted':
            // Handle subscription cancelation
            const canceledSub = event.data.object as Stripe.Subscription;
            const canceledCustomer = await stripe.customers.retrieve(canceledSub.customer as string);
            
            if (typeof canceledCustomer !== 'string' && canceledCustomer.metadata?.userId) {
              const userId = canceledCustomer.metadata.userId;
              
              // Update user subscription to canceled
              await storage.updateUserSubscription(
                userId,
                "", // Empty plan
                "canceled"
              );
            }
            break;
        }
        
        res.json({ received: true });
      } catch (error) {
        console.error("Error handling webhook:", error);
        res.status(400).json({ received: false });
      }
    });
  }

  // Payment history routes
  app.get('/api/user/payments', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      
      const payments = await storage.getUserPayments(userId, limit);
      
      res.json(payments);
    } catch (error) {
      console.error("Error fetching payment history:", error);
      res.status(500).json({ message: "Failed to fetch payment history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

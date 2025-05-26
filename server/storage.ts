import {
  users,
  questions,
  options,
  modules,
  attempts,
  sessions_study,
  plans,
  payments,
  type User,
  type UpsertUser,
  type Question,
  type Option,
  type Module,
  type Attempt,
  type StudySession,
  type Plan,
  type Payment,
  type QuestionWithOptions,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, desc, asc, count, avg, sql, inArray, isNull, not } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  updateUserProfile(id: string, data: Partial<UpsertUser>): Promise<User | undefined>;
  updateUserStripeInfo(id: string, customerInfo: { customerId: string, subscriptionId?: string }): Promise<User | undefined>;
  updateUserSubscription(id: string, plan: string, status: string, expiresAt?: Date): Promise<User | undefined>;
  
  // Question operations
  getQuestions(moduleId?: string, limit?: number): Promise<QuestionWithOptions[]>;
  getQuestionById(id: number): Promise<QuestionWithOptions | undefined>;
  
  // Module operations
  getModules(): Promise<Module[]>;
  getModuleById(id: string): Promise<Module | undefined>;
  
  // Attempt operations
  recordAttempt(attempt: {
    userId: string;
    questionId: number;
    selectedOptionId?: number;
    isCorrect: boolean;
    sessionId?: string;
  }): Promise<Attempt>;
  getUserAttempts(userId: string, limit?: number): Promise<Attempt[]>;
  getUserStats(userId: string): Promise<{
    totalAttempted: number;
    totalCorrect: number;
    accuracy: number;
  }>;
  
  // Session operations
  createStudySession(userId: string, moduleId?: string): Promise<StudySession>;
  updateStudySession(id: string, data: Partial<StudySession>): Promise<StudySession | undefined>;
  getUserSessions(userId: string, limit?: number): Promise<StudySession[]>;
  
  // Plan operations
  getPlans(): Promise<Plan[]>;
  getPlanById(id: string): Promise<Plan | undefined>;
  
  // Payment operations
  recordPayment(payment: {
    userId: string;
    stripePaymentId?: string;
    amount: number;
    currency: string;
    status: string;
    paymentMethod?: string;
    description?: string;
  }): Promise<Payment>;
  getUserPayments(userId: string, limit?: number): Promise<Payment[]>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async updateUserProfile(id: string, data: Partial<UpsertUser>): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({
        ...data,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  async updateUserStripeInfo(id: string, customerInfo: { customerId: string, subscriptionId?: string }): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({
        stripeCustomerId: customerInfo.customerId,
        stripeSubscriptionId: customerInfo.subscriptionId,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  async updateUserSubscription(id: string, plan: string, status: string, expiresAt?: Date): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({
        subscriptionPlan: plan,
        subscriptionStatus: status,
        subscriptionExpiresAt: expiresAt,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
      .returning();
    return user;
  }

  // Question operations
  async getQuestions(moduleId?: string, limit?: number): Promise<QuestionWithOptions[]> {
    let questionQuery = db.select().from(questions);
    
    if (moduleId && moduleId !== 'all') {
      questionQuery = questionQuery.where(eq(questions.moduleId, moduleId));
    }
    
    if (limit) {
      questionQuery = questionQuery.limit(limit);
    }
    
    const questionResults = await questionQuery;
    
    const questionsWithOptions: QuestionWithOptions[] = [];
    
    for (const question of questionResults) {
      const optionResults = await db
        .select()
        .from(options)
        .where(eq(options.questionId, question.id));
      
      questionsWithOptions.push({
        question,
        options: optionResults,
      });
    }
    
    return questionsWithOptions;
  }

  async getQuestionById(id: number): Promise<QuestionWithOptions | undefined> {
    const [question] = await db
      .select()
      .from(questions)
      .where(eq(questions.id, id));
    
    if (!question) return undefined;
    
    const optionResults = await db
      .select()
      .from(options)
      .where(eq(options.questionId, id));
    
    return {
      question,
      options: optionResults,
    };
  }

  // Module operations
  async getModules(): Promise<Module[]> {
    return db.select().from(modules);
  }

  async getModuleById(id: string): Promise<Module | undefined> {
    const [module] = await db
      .select()
      .from(modules)
      .where(eq(modules.id, id));
    return module;
  }

  // Attempt operations
  async recordAttempt(attempt: {
    userId: string;
    questionId: number;
    selectedOptionId?: number;
    isCorrect: boolean;
    sessionId?: string;
  }): Promise<Attempt> {
    const [savedAttempt] = await db
      .insert(attempts)
      .values(attempt)
      .returning();
    return savedAttempt;
  }

  async getUserAttempts(userId: string, limit?: number): Promise<Attempt[]> {
    let query = db
      .select()
      .from(attempts)
      .where(eq(attempts.userId, userId))
      .orderBy(desc(attempts.attemptedAt));
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return query;
  }

  async getUserStats(userId: string): Promise<{
    totalAttempted: number;
    totalCorrect: number;
    accuracy: number;
  }> {
    // First, get total attempts count
    const [totalResult] = await db
      .select({
        total: count(),
      })
      .from(attempts)
      .where(eq(attempts.userId, userId));
    
    // Then, get correct attempts count
    const [correctResult] = await db
      .select({
        total: count(),
      })
      .from(attempts)
      .where(and(
        eq(attempts.userId, userId),
        eq(attempts.isCorrect, true)
      ));
    
    const totalAttempted = totalResult?.total || 0;
    const totalCorrect = correctResult?.total || 0;
    const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;
    
    return {
      totalAttempted,
      totalCorrect,
      accuracy,
    };
  }

  // Session operations
  async createStudySession(userId: string, moduleId?: string): Promise<StudySession> {
    const [session] = await db
      .insert(sessions_study)
      .values({
        userId,
        moduleId,
      })
      .returning();
    return session;
  }

  async updateStudySession(id: string, data: Partial<StudySession>): Promise<StudySession | undefined> {
    const [session] = await db
      .update(sessions_study)
      .set(data)
      .where(eq(sessions_study.id, id))
      .returning();
    return session;
  }

  async getUserSessions(userId: string, limit?: number): Promise<StudySession[]> {
    let query = db
      .select()
      .from(sessions_study)
      .where(eq(sessions_study.userId, userId))
      .orderBy(desc(sessions_study.startedAt));
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return query;
  }

  // Plan operations
  async getPlans(): Promise<Plan[]> {
    return db.select().from(plans);
  }

  async getPlanById(id: string): Promise<Plan | undefined> {
    const [plan] = await db
      .select()
      .from(plans)
      .where(eq(plans.id, id));
    return plan;
  }

  // Payment operations
  async recordPayment(payment: {
    userId: string;
    stripePaymentId?: string;
    amount: number;
    currency: string;
    status: string;
    paymentMethod?: string;
    description?: string;
  }): Promise<Payment> {
    const [savedPayment] = await db
      .insert(payments)
      .values(payment)
      .returning();
    return savedPayment;
  }

  async getUserPayments(userId: string, limit?: number): Promise<Payment[]> {
    let query = db
      .select()
      .from(payments)
      .where(eq(payments.userId, userId))
      .orderBy(desc(payments.createdAt));
    
    if (limit) {
      query = query.limit(limit);
    }
    
    return query;
  }
}

export const storage = new DatabaseStorage();

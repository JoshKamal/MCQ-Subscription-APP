import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  integer,
  boolean,
  serial,
  uniqueIndex,
  uuid,
  doublePrecision,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User table with Replit Auth fields plus subscription info
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  specialization: varchar("specialization"),
  stripeCustomerId: varchar("stripe_customer_id").unique(),
  stripeSubscriptionId: varchar("stripe_subscription_id"),
  subscriptionPlan: varchar("subscription_plan"),
  subscriptionStatus: varchar("subscription_status"),
  subscriptionExpiresAt: timestamp("subscription_expires_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Quiz questions
export const questions = pgTable(
  "questions",
  {
    id: serial("id").primaryKey(),
    text: text("text").notNull(),
    moduleId: varchar("module_id").notNull(),
    topic: varchar("topic"),
    explanation: text("explanation"),
    slideReference: varchar("slide_reference"),
    difficulty: integer("difficulty"),
  },
  (table) => [
    index("question_module_idx").on(table.moduleId),
    index("question_topic_idx").on(table.topic),
  ]
);

// Options for each question
export const options = pgTable(
  "options",
  {
    id: serial("id").primaryKey(),
    questionId: integer("question_id")
      .notNull()
      .references(() => questions.id),
    text: text("text").notNull(),
    isCorrect: boolean("is_correct").notNull(),
  },
  (table) => [index("option_question_idx").on(table.questionId)]
);

// Modules (categories of questions)
export const modules = pgTable("modules", {
  id: varchar("id").primaryKey(),
  name: varchar("name").notNull(),
  description: text("description"),
  isPremium: boolean("is_premium").default(false),
});

// User attempts at questions
export const attempts = pgTable(
  "attempts",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id")
      .notNull()
      .references(() => users.id),
    questionId: integer("question_id")
      .notNull()
      .references(() => questions.id),
    selectedOptionId: integer("selected_option_id").references(() => options.id),
    isCorrect: boolean("is_correct"),
    attemptedAt: timestamp("attempted_at").defaultNow(),
    sessionId: uuid("session_id"),
  },
  (table) => [
    index("attempt_user_idx").on(table.userId),
    index("attempt_question_idx").on(table.questionId),
    index("attempt_session_idx").on(table.sessionId),
  ]
);

// Study sessions
export const sessions_study = pgTable(
  "sessions_study",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: varchar("user_id")
      .notNull()
      .references(() => users.id),
    moduleId: varchar("module_id").references(() => modules.id),
    startedAt: timestamp("started_at").defaultNow(),
    endedAt: timestamp("ended_at"),
    questionsAttempted: integer("questions_attempted").default(0),
    correctAnswers: integer("correct_answers").default(0),
  },
  (table) => [
    index("session_user_idx").on(table.userId),
    index("session_module_idx").on(table.moduleId),
  ]
);

// Subscription plans
export const plans = pgTable("plans", {
  id: varchar("id").primaryKey(),
  name: varchar("name").notNull(),
  description: text("description"),
  price: doublePrecision("price").notNull(),
  annualPrice: doublePrecision("annual_price"),
  features: jsonb("features"),
  stripePriceId: varchar("stripe_price_id"),
  stripeAnnualPriceId: varchar("stripe_annual_price_id"),
});

// Payment history
export const payments = pgTable(
  "payments",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id")
      .notNull()
      .references(() => users.id),
    stripePaymentId: varchar("stripe_payment_id").unique(),
    amount: doublePrecision("amount").notNull(),
    currency: varchar("currency").notNull().default("usd"),
    status: varchar("status").notNull(),
    paymentMethod: varchar("payment_method"),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => [index("payment_user_idx").on(table.userId)]
);

// Insert schemas
export const upsertUserSchema = createInsertSchema(users);
export const insertQuestionSchema = createInsertSchema(questions);
export const insertOptionSchema = createInsertSchema(options);
export const insertModuleSchema = createInsertSchema(modules);
export const insertAttemptSchema = createInsertSchema(attempts);
export const insertSessionSchema = createInsertSchema(sessions_study);
export const insertPlanSchema = createInsertSchema(plans);
export const insertPaymentSchema = createInsertSchema(payments);

// Types
export type UpsertUser = z.infer<typeof upsertUserSchema>;
export type User = typeof users.$inferSelect;
export type Question = typeof questions.$inferSelect;
export type Option = typeof options.$inferSelect;
export type Module = typeof modules.$inferSelect;
export type Attempt = typeof attempts.$inferSelect;
export type StudySession = typeof sessions_study.$inferSelect;
export type Plan = typeof plans.$inferSelect;
export type Payment = typeof payments.$inferSelect;

// Extended schemas for API use
export const QuestionWithOptionsSchema = z.object({
  question: z.object({
    id: z.number(),
    text: z.string(),
    moduleId: z.string(),
    topic: z.string().optional(),
    explanation: z.string().optional(),
    slideReference: z.string().optional(),
    difficulty: z.number().optional(),
  }),
  options: z.array(
    z.object({
      id: z.number(),
      text: z.string(),
      isCorrect: z.boolean().optional(),
    })
  ),
});

export type QuestionWithOptions = z.infer<typeof QuestionWithOptionsSchema>;

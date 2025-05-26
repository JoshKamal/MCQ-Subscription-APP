/**
 * Database Cleanup Script
 * 
 * This script removes all sample questions from the database
 * and ensures only questions from valid modules and topics remain.
 * 
 * Usage: npx tsx scripts/cleanupDatabase.ts
 */

import { db } from "../server/db";
import { questions, options, attempts } from "../shared/schema";
import { eq, inArray } from "drizzle-orm";

async function main() {
  console.log("Cleaning up database - removing sample questions...");
  
  // Valid modules and topics from attached files
  const validModules = ["focs", "bcr", "msk", "anatomy"];
  const validTopics = ["FOCS1", "FOCS2", "FOCS3", "FOCS4", "FOCS5", 
                       "BCR1", "BCR2", "BCR3", "BCR4", 
                       "MSK1", "MSK2", 
                       "Anatomy"];
  
  console.log("Fetching all questions in the database...");
  const allQuestions = await db.select().from(questions);
  console.log(`Total questions in database: ${allQuestions.length}`);
  
  // Filter out questions that don't match our valid modules/topics
  const invalidQuestions = allQuestions.filter(q => 
    !validModules.includes(q.moduleId) || 
    !validTopics.includes(q.topic || '') || 
    (q.text || '').toLowerCase().includes('sample')
  );
  
  if (invalidQuestions.length === 0) {
    console.log("No invalid or sample questions found. Database is clean.");
    return;
  }
  
  console.log(`Found ${invalidQuestions.length} invalid/sample questions to remove`);
  
  // Get IDs of invalid questions
  const invalidQuestionIds = invalidQuestions.map(q => q.id);
  
  // Get all options for invalid questions
  const invalidOptions = await db
    .select()
    .from(options)
    .where(inArray(options.questionId, invalidQuestionIds));
  
  const invalidOptionIds = invalidOptions.map(o => o.id);
  console.log(`Found ${invalidOptions.length} options belonging to invalid questions`);
  
  // Delete associated attempts
  if (invalidOptionIds.length > 0) {
    console.log("Removing attempts linked to invalid options...");
    const deletedAttemptsCount = await db
      .delete(attempts)
      .where(inArray(attempts.selectedOptionId, invalidOptionIds));
    
    console.log(`Deleted ${deletedAttemptsCount} attempts`);
  }
  
  // Delete attempts linked directly to invalid questions
  console.log("Removing attempts linked to invalid questions...");
  const deletedQuestionAttemptsCount = await db
    .delete(attempts)
    .where(inArray(attempts.questionId, invalidQuestionIds));
  
  console.log(`Deleted ${deletedQuestionAttemptsCount} question attempts`);
  
  // Delete options
  console.log("Removing options for invalid questions...");
  for (const questionId of invalidQuestionIds) {
    await db
      .delete(options)
      .where(eq(options.questionId, questionId));
  }
  
  // Delete questions
  console.log("Removing invalid questions...");
  for (const questionId of invalidQuestionIds) {
    await db
      .delete(questions)
      .where(eq(questions.id, questionId));
  }
  
  console.log(`Successfully removed ${invalidQuestions.length} invalid questions from the database`);
  
  // Final check
  const remainingQuestions = await db.select().from(questions);
  console.log(`Remaining questions in database: ${remainingQuestions.length}`);
  
  console.log("Database cleanup complete!");
}

main()
  .catch(error => {
    console.error("Error during database cleanup:", error);
    process.exit(1);
  })
  .finally(() => {
    console.log("Cleanup process finished");
  });
import { db } from "../db";
import { questions, options } from "@shared/schema";
import { eq } from "drizzle-orm";

// Function to import questions from a JavaScript array format
export async function importQuestions(
  moduleId: string,
  questionsData: any[]
) {
  console.log(`Importing ${questionsData.length} questions for module ${moduleId}...`);
  
  for (const questionData of questionsData) {
    try {
      // Insert question
      const [insertedQuestion] = await db
        .insert(questions)
        .values({
          text: questionData.question,
          moduleId: moduleId,
          difficulty: 2, // Medium difficulty (1-easy, 2-medium, 3-hard)
          topic: questionData.slideLink ? questionData.slideLink.split('_').pop()?.replace('.pdf', '') || 'General' : 'General',
          slideReference: questionData.slideLink || '',
          explanation: '', // Main explanation will be in the correct option
        })
        .returning();
      
      // Insert options for the question
      for (let i = 0; i < questionData.options.length; i++) {
        await db.insert(options).values({
          questionId: insertedQuestion.id,
          text: questionData.options[i],
          isCorrect: i === questionData.correctIndex,
        });
      }
      
      console.log(`Successfully imported question: "${questionData.question.substring(0, 30)}..."`);
    } catch (error) {
      console.error(`Error importing question: "${questionData.question.substring(0, 30)}..."`, error);
    }
  }
  
  console.log(`Import completed for module ${moduleId}.`);
}

// Function to clear existing questions for a module
export async function clearModuleQuestions(moduleId: string) {
  console.log(`Clearing existing questions for module ${moduleId}...`);
  
  // First get all questions for the module
  const moduleQuestions = await db
    .select()
    .from(questions)
    .where(eq(questions.moduleId, moduleId));
  
  // Delete options for each question
  for (const question of moduleQuestions) {
    await db
      .delete(options)
      .where(eq(options.questionId, question.id));
  }
  
  // Then delete the questions
  await db
    .delete(questions)
    .where(eq(questions.moduleId, moduleId));
  
  console.log(`Cleared ${moduleQuestions.length} questions for module ${moduleId}.`);
}
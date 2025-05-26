/**
 * MCQ Data Import Script
 * 
 * This script imports MCQ data from the JavaScript files in the attached_assets folder.
 * 
 * Usage:
 *   - Import all modules: npx tsx scripts/importModuleData.ts
 *   - Import specific module: npx tsx scripts/importModuleData.ts focs2
 */

import { db } from "../server/db";
import { questions, options } from "../shared/schema";
import { eq, and } from "drizzle-orm";
import fs from "fs";
import path from "path";

// Define all available modules and topics
const moduleTopics = [
  { moduleId: "focs", topic: "FOCS2", filename: "focs2.js" },
  { moduleId: "focs", topic: "FOCS3", filename: "focs3.js" },
  { moduleId: "focs", topic: "FOCS4", filename: "focs4.js" },
  { moduleId: "focs", topic: "FOCS5", filename: "focs5.js" },
  { moduleId: "bcr", topic: "BCR1", filename: "bcr1.js" },
  { moduleId: "bcr", topic: "BCR2", filename: "bcr2.js" },
  { moduleId: "bcr", topic: "BCR3", filename: "bcr3.js" },
  { moduleId: "bcr", topic: "BCR4", filename: "bcr4.js" },
  { moduleId: "msk", topic: "MSK1", filename: "msk1.js" },
  { moduleId: "msk", topic: "MSK2", filename: "msk2.js" },
  { moduleId: "anatomy", topic: "Anatomy", filename: "anatomy.js" }
];

// Check current database state
async function checkDatabase() {
  // Get counts of questions by module
  const existingModules = await db.query.questions.findMany({
    columns: {
      module_id: true,
      topic: true
    }
  });

  // Group by module and topic
  const counts: Record<string, Record<string, number>> = {};
  for (const q of existingModules) {
    if (!counts[q.module_id]) {
      counts[q.module_id] = {};
    }
    
    const topic = q.topic || 'unknown';
    counts[q.module_id][topic] = (counts[q.module_id][topic] || 0) + 1;
  }

  console.log("Current questions in database:");
  for (const moduleId in counts) {
    console.log(`- ${moduleId}:`);
    for (const topic in counts[moduleId]) {
      console.log(`  - ${topic}: ${counts[moduleId][topic]} questions`);
    }
  }
}

// Extract questions from a JS file
async function extractQuestionsFromFile(filePath: string): Promise<any[]> {
  try {
    console.log(`Reading file: ${filePath}`);
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return [];
    }
    
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    // Extract the variable name
    const match = fileContent.match(/const\s+(\w+Data)\s*=\s*/);
    if (!match) {
      console.error("Could not find variable name in the file");
      return [];
    }
    
    const varName = match[1];
    console.log(`Found variable name: ${varName}`);
    
    // Create a temporary file that we can import
    const tempDir = path.join(process.cwd(), "tmp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    const tempFilePath = path.join(tempDir, `temp-${Date.now()}.js`);
    fs.writeFileSync(tempFilePath, `${fileContent}\nexport default ${varName};`);
    
    // Import the data
    try {
      const { default: data } = await import(tempFilePath);
      fs.unlinkSync(tempFilePath); // Clean up

      if (!Array.isArray(data)) {
        console.error("Data is not in the expected array format");
        return [];
      }
      
      return data;
    } catch (importError) {
      console.error("Error importing data:", importError);
      if (fs.existsSync(tempFilePath)) {
        fs.unlinkSync(tempFilePath); // Clean up on error
      }
      return [];
    }
  } catch (error) {
    console.error(`Error reading file: ${error}`);
    return [];
  }
}

// Clear existing questions for a module/topic
async function clearExistingQuestions(moduleId: string, topic: string) {
  console.log(`Clearing existing questions for ${moduleId} (${topic})...`);
  
  // Find questions to delete
  const questionsToDelete = await db
    .select()
    .from(questions)
    .where(and(
      eq(questions.module_id, moduleId),
      eq(questions.topic, topic)
    ));
  
  if (questionsToDelete.length === 0) {
    console.log("No existing questions found to clear");
    return;
  }
  
  console.log(`Found ${questionsToDelete.length} questions to remove`);
  
  // For each question, delete its options first
  for (const question of questionsToDelete) {
    await db
      .delete(options)
      .where(eq(options.question_id, question.id));
  }
  
  // Then delete the questions
  await db
    .delete(questions)
    .where(and(
      eq(questions.module_id, moduleId),
      eq(questions.topic, topic)
    ));
  
  console.log(`Cleared ${questionsToDelete.length} questions`);
}

// Import questions for a module/topic
async function importQuestions(moduleId: string, topic: string, questionsData: any[]) {
  console.log(`Importing ${questionsData.length} questions for ${moduleId} (${topic})...`);
  
  let successCount = 0;
  let errorCount = 0;
  
  // Process in small batches to prevent timeouts
  const batchSize = 5;
  for (let i = 0; i < questionsData.length; i += batchSize) {
    const batch = questionsData.slice(i, Math.min(i + batchSize, questionsData.length));
    
    for (const questionData of batch) {
      try {
        // Validate question data
        if (!questionData.question || !Array.isArray(questionData.options) || 
            questionData.correctIndex === undefined) {
          console.warn("Invalid question data, skipping");
          errorCount++;
          continue;
        }
        
        // Insert the question
        const [insertedQuestion] = await db
          .insert(questions)
          .values({
            text: questionData.question,
            module_id: moduleId,
            topic: topic,
            difficulty: 2, // Default medium difficulty
            explanation: null,
            slide_reference: questionData.slideLink || null
          })
          .returning();
        
        // Insert the options
        for (let j = 0; j < questionData.options.length; j++) {
          await db
            .insert(options)
            .values({
              question_id: insertedQuestion.id,
              text: questionData.options[j],
              is_correct: j === questionData.correctIndex
            });
        }
        
        successCount++;
        
        // Log progress every 20 questions
        if (successCount % 20 === 0) {
          console.log(`Imported ${successCount}/${questionsData.length} questions...`);
        }
      } catch (error) {
        console.error(`Error importing question:`, error);
        errorCount++;
      }
    }
  }
  
  console.log(`Import complete: ${successCount} questions imported successfully, ${errorCount} errors`);
  return successCount;
}

// Process a single module/topic
async function processModuleTopic(moduleId: string, topic: string, filename: string) {
  console.log(`\n=== Processing ${moduleId} (${topic}) ===`);
  
  // Get the file path
  const filePath = path.join(process.cwd(), "attached_assets", filename);
  
  // Extract questions from file
  const questionsData = await extractQuestionsFromFile(filePath);
  
  if (questionsData.length === 0) {
    console.error(`No valid questions found in ${filename}`);
    return;
  }
  
  console.log(`Found ${questionsData.length} questions in ${filename}`);
  
  // Clear existing questions
  await clearExistingQuestions(moduleId, topic);
  
  // Import questions
  await importQuestions(moduleId, topic, questionsData);
}

// Main function
async function main() {
  const args = process.argv.slice(2);
  const moduleToProcess = args[0]?.toLowerCase();
  
  console.log("MCQ Data Import Script");
  
  // Check current database state
  await checkDatabase();
  
  if (moduleToProcess) {
    // Find matching module/topic
    const matchingTopic = moduleTopics.find(m => 
      m.moduleId === moduleToProcess || 
      m.topic.toLowerCase() === moduleToProcess || 
      m.filename.toLowerCase().includes(moduleToProcess)
    );
    
    if (matchingTopic) {
      await processModuleTopic(
        matchingTopic.moduleId, 
        matchingTopic.topic, 
        matchingTopic.filename
      );
    } else {
      console.error(`No matching module found for: ${moduleToProcess}`);
      console.log("Available modules:");
      for (const { moduleId, topic, filename } of moduleTopics) {
        console.log(`- ${moduleId} (${topic}): ${filename}`);
      }
    }
  } else {
    // Process all modules
    console.log("\nProcessing all modules...");
    
    for (const { moduleId, topic, filename } of moduleTopics) {
      await processModuleTopic(moduleId, topic, filename);
    }
  }
  
  // Final check
  await checkDatabase();
}

// Run the script
main()
  .catch(error => {
    console.error("Error:", error);
    process.exit(1);
  })
  .finally(() => {
    console.log("Import script finished");
  });
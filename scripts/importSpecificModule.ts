/**
 * Import specific module questions
 * 
 * This script imports MCQs from a specific module and topic.
 * It provides a simpler interface than the main import script.
 * 
 * Usage: npx tsx scripts/importSpecificModule.ts <moduleId> <topic>
 * Example: npx tsx scripts/importSpecificModule.ts focs FOCS2
 */

import { db } from "../server/db";
import { questions, options } from "../shared/schema";
import { eq, and } from "drizzle-orm";
import fs from "fs";
import path from "path";

// Define module mappings
const moduleMapping = {
  "focs": {
    "FOCS2": { filename: "focs2.js", variableName: "focs2Data" },
    "FOCS3": { filename: "focs3.js", variableName: "focs3Data" },
    "FOCS4": { filename: "focs4.js", variableName: "focs4Data" },
    "FOCS5": { filename: "focs5.js", variableName: "focs5Data" }
  },
  "bcr": {
    "BCR1": { filename: "bcr1.js", variableName: "bcr1Data" },
    "BCR2": { filename: "bcr2.js", variableName: "bcr2Data" },
    "BCR3": { filename: "bcr3.js", variableName: "bcr3Data" },
    "BCR4": { filename: "bcr4.js", variableName: "bcr4Data" }
  },
  "msk": {
    "MSK1": { filename: "msk1.js", variableName: "msk1Data" },
    "MSK2": { filename: "msk2.js", variableName: "msk2Data" }
  },
  "anatomy": {
    "Anatomy": { filename: "anatomy.js", variableName: "anatomyData" }
  }
};

// Extract questions from a JavaScript file
async function extractQuestionsFromFile(filePath: string, varName: string): Promise<any[]> {
  try {
    console.log(`Reading file: ${filePath}`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Create temp directory if it doesn't exist
    const tempDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    // Create a temporary JS file with export
    const tempFile = path.join(tempDir, `temp-${Date.now()}.js`);
    fs.writeFileSync(tempFile, `${fileContent}\nexport default ${varName};`);
    
    // Import the data
    const { default: questionsData } = await import(tempFile);
    
    // Clean up temp file
    fs.unlinkSync(tempFile);
    
    if (!Array.isArray(questionsData)) {
      throw new Error(`Data in ${filePath} is not a valid array of questions`);
    }
    
    return questionsData;
  } catch (error) {
    console.error(`Error extracting questions from file: ${error}`);
    return [];
  }
}

// Clear existing questions for a topic
async function clearExistingQuestions(moduleId: string, topic: string): Promise<void> {
  console.log(`Clearing existing questions for ${moduleId} (${topic})...`);
  
  // Find questions to delete
  const existingQuestions = await db
    .select()
    .from(questions)
    .where(and(
      eq(questions.moduleId, moduleId),
      eq(questions.topic, topic)
    ));
  
  console.log(`Found ${existingQuestions.length} existing questions to remove`);
  
  // Delete options first
  for (const question of existingQuestions) {
    await db
      .delete(options)
      .where(eq(options.questionId, question.id));
  }
  
  // Then delete questions
  await db
    .delete(questions)
    .where(and(
      eq(questions.moduleId, moduleId),
      eq(questions.topic, topic)
    ));
}

// Import questions
async function importQuestions(
  moduleId: string, 
  topic: string, 
  questionsData: any[]
): Promise<number> {
  console.log(`Importing ${questionsData.length} questions for ${moduleId} (${topic})...`);
  
  let importedCount = 0;
  let batchSize = 5;
  
  // Process in small batches
  for (let i = 0; i < questionsData.length; i += batchSize) {
    const batch = questionsData.slice(i, i + batchSize);
    
    for (const questionData of batch) {
      if (!questionData.question || !Array.isArray(questionData.options)) {
        console.warn("Invalid question data, skipping...");
        continue;
      }
      
      try {
        // Insert the question
        const [insertedQuestion] = await db
          .insert(questions)
          .values({
            text: questionData.question,
            moduleId,
            topic,
            difficulty: 2,
            slideReference: questionData.slideLink || null,
            explanation: null
          })
          .returning();
        
        // Insert all options
        for (let j = 0; j < questionData.options.length; j++) {
          await db
            .insert(options)
            .values({
              questionId: insertedQuestion.id,
              text: questionData.options[j],
              isCorrect: j === questionData.correctIndex
            });
        }
        
        importedCount++;
      } catch (error) {
        console.error(`Error importing question: ${error}`);
      }
    }
    
    if (importedCount % 20 === 0 || importedCount === questionsData.length) {
      console.log(`Imported ${importedCount}/${questionsData.length} questions`);
    }
  }
  
  return importedCount;
}

async function main() {
  // Get command-line arguments
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error("Please provide both moduleId and topic");
    console.error("Usage: npx tsx scripts/importSpecificModule.ts <moduleId> <topic>");
    console.error("Example: npx tsx scripts/importSpecificModule.ts focs FOCS2");
    
    // Show available options
    console.log("\nAvailable modules and topics:");
    for (const [moduleId, topics] of Object.entries(moduleMapping)) {
      console.log(`- ${moduleId}: ${Object.keys(topics).join(", ")}`);
    }
    
    process.exit(1);
  }
  
  const moduleId = args[0].toLowerCase();
  const topic = args[1].toUpperCase();
  
  // Validate module and topic
  if (!moduleMapping[moduleId]) {
    console.error(`Invalid module: ${moduleId}`);
    console.error(`Available modules: ${Object.keys(moduleMapping).join(", ")}`);
    process.exit(1);
  }
  
  if (!moduleMapping[moduleId][topic]) {
    console.error(`Invalid topic: ${topic} for module: ${moduleId}`);
    console.error(`Available topics for ${moduleId}: ${Object.keys(moduleMapping[moduleId]).join(", ")}`);
    process.exit(1);
  }
  
  // Get file info
  const { filename, variableName } = moduleMapping[moduleId][topic];
  const filePath = path.join(process.cwd(), 'attached_assets', filename);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }
  
  console.log(`Processing ${moduleId} (${topic}) from ${filename}...`);
  
  // Extract questions from file
  const questions = await extractQuestionsFromFile(filePath, variableName);
  
  if (questions.length === 0) {
    console.error("No valid questions found in file");
    process.exit(1);
  }
  
  console.log(`Found ${questions.length} questions to import`);
  
  // Clear existing questions
  await clearExistingQuestions(moduleId, topic);
  
  // Import questions
  const importedCount = await importQuestions(moduleId, topic, questions);
  
  console.log(`Successfully imported ${importedCount} questions for ${moduleId} (${topic})`);
}

main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
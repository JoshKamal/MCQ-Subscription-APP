/**
 * Main MCQ Import Script
 * 
 * This script imports Multiple-Choice Questions from the attached JavaScript files
 * into the database. Each file contains questions for a specific medical topic.
 * 
 * Usage:
 *   - To import a specific topic: npx tsx scripts/importMCQ.ts focs2
 *   - To import all topics: npx tsx scripts/importMCQ.ts
 * 
 * Available topics:
 *   - FOCS2, FOCS3, FOCS4, FOCS5
 *   - BCR1, BCR2, BCR3, BCR4
 *   - MSK1, MSK2
 *   - Anatomy
 */

import { db } from "../server/db";
import { questions, options } from "../shared/schema";
import { eq, and } from "drizzle-orm";
import fs from "fs";
import path from "path";

// Define all module and topic mappings
const moduleConfig = [
  { moduleId: "focs", topic: "FOCS2", filename: "focs2.js", variableName: "focs2Data" },
  { moduleId: "focs", topic: "FOCS3", filename: "focs3.js", variableName: "focs3Data" },
  { moduleId: "focs", topic: "FOCS4", filename: "focs4.js", variableName: "focs4Data" },
  { moduleId: "focs", topic: "FOCS5", filename: "focs5.js", variableName: "focs5Data" },
  { moduleId: "bcr", topic: "BCR1", filename: "bcr1.js", variableName: "bcr1Data" },
  { moduleId: "bcr", topic: "BCR2", filename: "bcr2.js", variableName: "bcr2Data" },
  { moduleId: "bcr", topic: "BCR3", filename: "bcr3.js", variableName: "bcr3Data" },
  { moduleId: "bcr", topic: "BCR4", filename: "bcr4.js", variableName: "bcr4Data" },
  { moduleId: "msk", topic: "MSK1", filename: "msk1.js", variableName: "msk1Data" },
  { moduleId: "msk", topic: "MSK2", filename: "msk2.js", variableName: "msk2Data" },
  { moduleId: "anatomy", topic: "Anatomy", filename: "anatomy.js", variableName: "anatomyData" }
];

// Function to extract questions from a JS file
async function extractQuestionsFromFile(filePath: string): Promise<any[]> {
  try {
    console.log(`Reading file: ${filePath}`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Create a new temporary file that exports the data
    const tempDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    const tempFile = path.join(tempDir, `temp-${Date.now()}.js`);
    
    // Try to extract the variable name and data
    const variableMatch = fileContent.match(/const\s+(\w+)\s*=\s*/);
    
    if (!variableMatch) {
      console.error("Could not find variable declaration in file");
      return [];
    }
    
    const varName = variableMatch[1];
    console.log(`Found variable name: ${varName}`);
    
    // Create a temporary file with the data and an export
    fs.writeFileSync(tempFile, `${fileContent}\nexport default ${varName};`);
    
    // Import the data
    const { default: questionsData } = await import(tempFile);
    
    // Clean up
    fs.unlinkSync(tempFile);
    
    if (!Array.isArray(questionsData)) {
      console.error("Extracted data is not an array");
      return [];
    }
    
    return questionsData;
  } catch (error) {
    console.error(`Error extracting questions from file: ${error}`);
    return [];
  }
}

// Function to clear existing questions for a module/topic
async function clearQuestionsForTopic(moduleId: string, topic: string): Promise<number> {
  console.log(`Clearing existing questions for ${moduleId} (${topic})...`);
  
  // Find existing questions
  const existingQuestions = await db
    .select()
    .from(questions)
    .where(and(
      eq(questions.moduleId, moduleId),
      eq(questions.topic, topic)
    ));
  
  if (existingQuestions.length === 0) {
    console.log(`No existing questions found for ${moduleId} (${topic})`);
    return 0;
  }
  
  console.log(`Found ${existingQuestions.length} existing questions to clear`);
  
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
  
  return existingQuestions.length;
}

// Function to import questions for a module/topic
async function importQuestionsForTopic(
  moduleId: string, 
  topic: string, 
  questionsData: any[]
): Promise<number> {
  console.log(`Importing ${questionsData.length} questions for ${moduleId} (${topic})...`);
  
  let importedCount = 0;
  const batchSize = 5;  // Process in small batches
  
  for (let i = 0; i < questionsData.length; i += batchSize) {
    const batch = questionsData.slice(i, Math.min(i + batchSize, questionsData.length));
    
    for (const questionData of batch) {
      try {
        // Check for required fields
        if (!questionData.question || !Array.isArray(questionData.options) || 
            questionData.correctIndex === undefined) {
          console.warn("Invalid question data - skipping");
          continue;
        }
        
        // Insert question
        const [insertedQuestion] = await db
          .insert(questions)
          .values({
            text: questionData.question,
            moduleId: moduleId,
            topic: topic,
            difficulty: 2,  // Medium difficulty by default
            slideReference: questionData.slideLink || null,
            explanation: null  // We could store explanations here if available
          })
          .returning();
        
        // Insert options
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
        
        // Log progress every 20 questions
        if (importedCount % 20 === 0) {
          console.log(`Imported ${importedCount}/${questionsData.length} questions...`);
        }
      } catch (error) {
        console.error(`Error importing question: ${error}`);
      }
    }
  }
  
  console.log(`Successfully imported ${importedCount}/${questionsData.length} questions for ${moduleId} (${topic})`);
  return importedCount;
}

// Process a single module/topic
async function processModuleTopic(config: typeof moduleConfig[0]): Promise<void> {
  const { moduleId, topic, filename, variableName } = config;
  console.log(`\n========== Processing ${moduleId} - ${topic} ==========`);
  
  // Find the JS file
  const filePath = path.join(process.cwd(), 'attached_assets', filename);
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return;
  }
  
  // Extract questions from file
  const questionsData = await extractQuestionsFromFile(filePath);
  
  if (questionsData.length === 0) {
    console.error(`No valid questions found in ${filePath}`);
    return;
  }
  
  console.log(`Found ${questionsData.length} questions in ${filePath}`);
  
  // Clear existing questions
  await clearQuestionsForTopic(moduleId, topic);
  
  // Import new questions
  await importQuestionsForTopic(moduleId, topic, questionsData);
  
  console.log(`Completed processing of ${moduleId} - ${topic}`);
}

// Main function to import all modules
async function main() {
  console.log("Starting import of all MCQ data...");
  
  // Get command line arguments
  const args = process.argv.slice(2);
  const specificTopic = args[0]?.toLowerCase();
  
  if (specificTopic) {
    // Import specific topic
    const matchingConfig = moduleConfig.find(
      c => c.topic.toLowerCase() === specificTopic || 
           c.filename.toLowerCase().includes(specificTopic) ||
           c.moduleId.toLowerCase() === specificTopic
    );
    
    if (matchingConfig) {
      await processModuleTopic(matchingConfig);
    } else {
      console.error(`No configuration found for topic: ${specificTopic}`);
      console.log(`Available topics: ${moduleConfig.map(c => c.topic).join(', ')}`);
    }
  } else {
    // Import all topics
    console.log(`Will import all ${moduleConfig.length} topics`);
    
    for (const config of moduleConfig) {
      await processModuleTopic(config);
    }
  }
  
  // Final count
  const finalCount = await db.select().from(questions);
  console.log(`\nImport complete. Total questions in database: ${finalCount.length}`);
}

// Run the import
main().catch(error => {
  console.error("Error in import process:", error);
});
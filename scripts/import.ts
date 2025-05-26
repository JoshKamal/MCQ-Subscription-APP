/**
 * Simple MCQ Import Script
 * 
 * This script imports MCQ data from the attached JavaScript files.
 * 
 * Usage:
 *   - Import all modules: npx tsx scripts/import.ts
 *   - Import specific topic: npx tsx scripts/import.ts focs2
 */

import { db } from "../server/db";
import { questions, options } from "../shared/schema";
import { eq, and } from "drizzle-orm";
import fs from "fs";
import path from "path";

// Define the modules we want to import
const moduleData = [
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

// Extract questions from a file
async function extractQuestionsFromFile(filePath: string): Promise<any[]> {
  console.log(`Reading file: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return [];
  }
  
  try {
    // Read the file
    const fileContent = fs.readFileSync(filePath, "utf8");
    
    // Find the variable name
    const match = fileContent.match(/const\s+(\w+)\s*=/);
    if (!match) {
      console.error("Could not find variable name in file");
      return [];
    }
    
    const varName = match[1];
    console.log(`Found variable name: ${varName}`);
    
    // Create a temporary JavaScript file to import
    const tempDir = path.join(process.cwd(), "tmp");
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    const tempFile = path.join(tempDir, `temp-${Date.now()}.js`);
    fs.writeFileSync(tempFile, `${fileContent}\nexport default ${varName};`);
    
    // Import the data
    try {
      const { default: data } = await import(tempFile);
      fs.unlinkSync(tempFile); // Clean up
      
      if (!Array.isArray(data)) {
        console.error("Data is not an array");
        return [];
      }
      
      return data;
    } catch (err) {
      console.error("Error importing data:", err);
      fs.unlinkSync(tempFile); // Clean up
      return [];
    }
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}

// Delete existing questions for a module/topic
async function deleteExistingQuestions(moduleId: string, topic: string): Promise<number> {
  console.log(`Deleting existing questions for ${moduleId} (${topic})...`);
  
  // First find all questions to delete
  const questionsToDelete = await db
    .select()
    .from(questions)
    .where(and(
      eq(questions.module_id, moduleId),
      eq(questions.topic, topic)
    ));
  
  if (questionsToDelete.length === 0) {
    console.log("No existing questions found to delete");
    return 0;
  }
  
  console.log(`Found ${questionsToDelete.length} questions to delete`);
  
  // Delete options for each question
  for (const question of questionsToDelete) {
    await db
      .delete(options)
      .where(eq(options.question_id, question.id));
  }
  
  // Delete the questions
  await db
    .delete(questions)
    .where(and(
      eq(questions.module_id, moduleId),
      eq(questions.topic, topic)
    ));
  
  return questionsToDelete.length;
}

// Import questions for a module/topic
async function importQuestions(moduleId: string, topic: string, questionsData: any[]): Promise<number> {
  console.log(`Importing ${questionsData.length} questions for ${moduleId} (${topic})...`);
  
  let imported = 0;
  const batchSize = 5; // Small batches to avoid timeouts
  
  for (let i = 0; i < questionsData.length; i += batchSize) {
    const batch = questionsData.slice(i, Math.min(i + batchSize, questionsData.length));
    
    for (const item of batch) {
      try {
        // Validate question data
        if (!item.question || !Array.isArray(item.options) || item.correctIndex === undefined) {
          console.warn("Skipping invalid question");
          continue;
        }
        
        // Insert question
        const [question] = await db
          .insert(questions)
          .values({
            module_id: moduleId,
            topic: topic,
            text: item.question,
            difficulty: 2,
            slide_reference: item.slideLink || null,
            explanation: null
          })
          .returning();
        
        // Insert options
        for (let j = 0; j < item.options.length; j++) {
          await db
            .insert(options)
            .values({
              question_id: question.id,
              text: item.options[j],
              is_correct: j === item.correctIndex
            });
        }
        
        imported++;
        
        // Log progress
        if (imported % 20 === 0) {
          console.log(`Imported ${imported}/${questionsData.length} questions...`);
        }
      } catch (err) {
        console.error("Error importing question:", err);
      }
    }
  }
  
  console.log(`Successfully imported ${imported} questions`);
  return imported;
}

// Process a single module
async function processModule(moduleId: string, topic: string, filename: string): Promise<void> {
  console.log(`\n=== Processing ${moduleId} (${topic}) ===`);
  
  // Get the file path
  const filePath = path.join(process.cwd(), "attached_assets", filename);
  
  // Extract questions
  const questions = await extractQuestionsFromFile(filePath);
  
  if (questions.length === 0) {
    console.error(`No questions found in ${filename}`);
    return;
  }
  
  // Delete existing questions
  await deleteExistingQuestions(moduleId, topic);
  
  // Import questions
  await importQuestions(moduleId, topic, questions);
  
  console.log(`Completed processing ${moduleId} (${topic})`);
}

// Main function
async function main(): Promise<void> {
  console.log("MCQ Import Script");
  
  // Check for specific module to import
  const args = process.argv.slice(2);
  const specificModule = args[0]?.toLowerCase();
  
  if (specificModule) {
    // Find matching module
    const module = moduleData.find(m => 
      m.moduleId.toLowerCase() === specificModule || 
      m.topic.toLowerCase() === specificModule.toUpperCase() ||
      m.filename.toLowerCase().includes(specificModule)
    );
    
    if (!module) {
      console.error(`No matching module found for: ${specificModule}`);
      console.log("Available modules:");
      moduleData.forEach(m => console.log(`- ${m.moduleId} (${m.topic}): ${m.filename}`));
      return;
    }
    
    // Process the specific module
    await processModule(module.moduleId, module.topic, module.filename);
  } else {
    // Process all modules
    console.log("Processing all modules...");
    
    for (const module of moduleData) {
      await processModule(module.moduleId, module.topic, module.filename);
    }
  }
  
  console.log("\nImport completed successfully");
}

// Run the script
main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
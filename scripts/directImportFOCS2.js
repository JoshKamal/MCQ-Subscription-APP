// Direct import of FOCS2 data using direct database access
import { db } from "../server/db";
import { questions, options } from "../shared/schema";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { eq, and } from "drizzle-orm";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the FOCS2 data file
const filePath = path.join(__dirname, "../attached_assets/focs2.js");

async function main() {
  console.log("Starting direct import of FOCS2 data...");
  
  // Read the file
  console.log(`Reading file: ${filePath}`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  
  // Extract the variable name
  const match = fileContent.match(/const\s+(\w+Data)\s*=\s*/);
  if (!match) {
    console.error("Could not find variable name in file");
    process.exit(1);
  }
  
  const varName = match[1];
  console.log(`Found variable name: ${varName}`);
  
  // Create a temporary directory if it doesn't exist
  const tempDir = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  
  // Create a temporary JavaScript module
  const tempFilePath = path.join(tempDir, `temp-${Date.now()}.js`);
  fs.writeFileSync(tempFilePath, `${fileContent}\nexport default ${varName};`);
  
  // Import the data
  console.log("Importing data...");
  const { default: questionsData } = await import(tempFilePath);
  
  // Clean up temporary file
  fs.unlinkSync(tempFilePath);
  
  if (!Array.isArray(questionsData) || questionsData.length === 0) {
    console.error("No valid questions found in file");
    process.exit(1);
  }
  
  console.log(`Found ${questionsData.length} questions to import`);
  
  // First clear any existing FOCS2 questions
  console.log("Clearing existing FOCS2 questions...");
  
  // Find existing FOCS2 questions
  const existingQuestions = await db
    .select()
    .from(questions)
    .where(and(
      eq(questions.moduleId, "focs"),
      eq(questions.topic, "FOCS2")
    ));
  
  // Delete options for existing questions
  for (const question of existingQuestions) {
    await db
      .delete(options)
      .where(eq(options.questionId, question.id));
  }
  
  // Delete the questions
  await db
    .delete(questions)
    .where(and(
      eq(questions.moduleId, "focs"),
      eq(questions.topic, "FOCS2")
    ));
  
  console.log(`Cleared ${existingQuestions.length} existing questions`);
  
  // Now import the questions
  console.log("Importing new questions...");
  
  let importedCount = 0;
  const batchSize = 5; // Process in small batches
  
  for (let i = 0; i < questionsData.length; i += batchSize) {
    const batch = questionsData.slice(i, Math.min(i + batchSize, questionsData.length));
    
    for (const questionData of batch) {
      try {
        // Validate question data
        if (!questionData.question || !Array.isArray(questionData.options) || 
            questionData.correctIndex === undefined) {
          console.warn("Invalid question data, skipping");
          continue;
        }
        
        // Insert the question
        const [insertedQuestion] = await db
          .insert(questions)
          .values({
            moduleId: "focs",
            topic: "FOCS2",
            text: questionData.question,
            difficulty: 2,
            slideReference: questionData.slideLink || null,
            explanation: null
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
        
        // Log progress
        if (importedCount % 10 === 0 || importedCount === questionsData.length) {
          console.log(`Imported ${importedCount}/${questionsData.length} questions`);
        }
      } catch (error) {
        console.error(`Error importing question: ${error}`);
      }
    }
  }
  
  console.log(`Import complete. Successfully imported ${importedCount} questions.`);
}

main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
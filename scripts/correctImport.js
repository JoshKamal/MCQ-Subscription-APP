// This script correctly imports MCQ data with the proper database schema column names
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool, db } from '../server/db.js';
import { sql } from 'drizzle-orm';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the MCQ data file
const filePath = path.join(__dirname, '../attached_assets/focs2.js');

async function main() {
  console.log("Starting direct import of FOCS2 data...");
  
  try {
    // Read the file
    console.log(`Reading file: ${filePath}`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract the variable name
    const match = fileContent.match(/const\s+(\w+Data)\s*=\s*/);
    if (!match) {
      console.error("Could not find variable name in file");
      process.exit(1);
    }
    
    const varName = match[1];
    console.log(`Found variable name: ${varName}`);
    
    // Create a temporary file
    const tempDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    const tempFilePath = path.join(tempDir, `temp-${Date.now()}.js`);
    fs.writeFileSync(tempFilePath, `${fileContent}\nexport default ${varName};`);
    
    // Import the data
    const { default: questionsData } = await import(tempFilePath);
    fs.unlinkSync(tempFilePath);
    
    if (!Array.isArray(questionsData) || questionsData.length === 0) {
      console.error("No valid questions found in file");
      process.exit(1);
    }
    
    console.log(`Found ${questionsData.length} questions to import`);
    
    // Use direct SQL queries through the pool
    const client = await pool.connect();
    
    try {
      // Begin transaction
      await client.query('BEGIN');
      
      // Delete existing questions and options
      console.log("Deleting existing FOCS2 questions...");
      
      // Delete options first
      await client.query(`
        DELETE FROM options 
        WHERE question_id IN (
          SELECT id FROM questions 
          WHERE module_id = 'focs' AND topic = 'FOCS2'
        );
      `);
      
      // Then delete questions
      await client.query(`
        DELETE FROM questions 
        WHERE module_id = 'focs' AND topic = 'FOCS2';
      `);
      
      console.log("Existing FOCS2 questions deleted");
      
      // Import new questions
      console.log("Importing new questions...");
      
      let importedCount = 0;
      const batchSize = 10;
      
      for (let i = 0; i < questionsData.length; i += batchSize) {
        const batch = questionsData.slice(i, Math.min(i + batchSize, questionsData.length));
        
        for (const questionData of batch) {
          if (!questionData.question || !Array.isArray(questionData.options) || 
              questionData.correctIndex === undefined) {
            console.warn("Invalid question data, skipping");
            continue;
          }
          
          // Insert question
          const questionResult = await client.query(`
            INSERT INTO questions (module_id, topic, text, difficulty, slide_reference)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id;
          `, [
            'focs', 
            'FOCS2', 
            questionData.question, 
            2, 
            questionData.slideLink || null
          ]);
          
          const questionId = questionResult.rows[0].id;
          
          // Insert options
          for (let j = 0; j < questionData.options.length; j++) {
            await client.query(`
              INSERT INTO options (question_id, text, is_correct)
              VALUES ($1, $2, $3);
            `, [
              questionId,
              questionData.options[j],
              j === questionData.correctIndex
            ]);
          }
          
          importedCount++;
          
          if (importedCount % 10 === 0) {
            console.log(`Imported ${importedCount}/${questionsData.length} questions...`);
          }
        }
      }
      
      // Commit transaction
      await client.query('COMMIT');
      
      console.log(`Successfully imported ${importedCount} questions`);
    } catch (error) {
      await client.query('ROLLBACK');
      console.error("Error during import:", error);
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main().catch(error => {
  console.error("Error:", error);
  process.exit(1);
});
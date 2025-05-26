/**
 * Medical MCQ Module Importer
 * 
 * This script allows you to import questions from any of the medical module files
 * in the attached_assets folder into the database.
 * 
 * Usage: node scripts/import-module.js <module_id> <topic>
 * Example: node scripts/import-module.js focs FOCS2
 * 
 * Available modules:
 * - focs: FOCS2, FOCS3, FOCS4, FOCS5
 * - bcr: BCR1, BCR2, BCR3, BCR4
 * - msk: MSK1, MSK2
 * - anatomy: Anatomy
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from '@neondatabase/serverless';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a PostgreSQL pool with the database connection
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Function to escape single quotes for SQL
function escapeSql(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

async function extractModuleData(moduleId, topic) {
  // Map the module and topic to the appropriate file
  let fileName = '';
  let varName = '';
  
  switch (topic.toLowerCase()) {
    case 'focs2':
      fileName = 'focs2.js';
      varName = 'focs2Data';
      break;
    case 'focs3':
      fileName = 'focs3.js';
      varName = 'focs3Data';
      break;
    case 'focs4':
      fileName = 'focs4.js';
      varName = 'focs4Data';
      break;
    case 'focs5':
      fileName = 'focs5.js';
      varName = 'focs5Data';
      break;
    case 'bcr1':
      fileName = 'bcr1.js';
      varName = 'bcr1Data';
      break;
    case 'bcr2':
      fileName = 'bcr2.js';
      varName = 'bcr2Data';
      break;
    case 'bcr3':
      fileName = 'bcr3.js';
      varName = 'bcr3Data';
      break;
    case 'bcr4':
      fileName = 'bcr4.js';
      varName = 'bcr4Data';
      break;
    case 'msk1':
      fileName = 'msk1.js';
      varName = 'msk1Data';
      break;
    case 'msk2':
      fileName = 'msk2.js';
      varName = 'msk2Data';
      break;
    case 'anatomy':
      fileName = 'anatomy.js';
      varName = 'anatomyData';
      break;
    default:
      throw new Error(`Unsupported topic: ${topic}`);
  }
  
  const filePath = path.join(__dirname, '../attached_assets/', fileName);
  
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  
  console.log(`Reading file: ${filePath}`);
  
  try {
    // Read the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract the variable
    const match = fileContent.match(new RegExp(`const\\s+${varName}\\s*=\\s*(\\[\\s\\S]*?\\]);`));
    if (!match) {
      throw new Error(`Could not find variable ${varName} in file ${fileName}`);
    }
    
    // Evaluate the array string
    const arrayString = match[1];
    const data = eval(arrayString);
    
    if (!Array.isArray(data)) {
      throw new Error('Extracted data is not an array');
    }
    
    return data;
  } catch (error) {
    console.error('Error extracting data:', error);
    return [];
  }
}

async function importQuestions(moduleId, topic, questionsData, batchSize = 10) {
  // Format the topic with proper capitalization
  const formattedTopic = topic.toUpperCase();
  
  try {
    // Get a client from the pool
    const client = await pool.connect();
    
    try {
      // First clear existing questions and options for this module+topic
      console.log(`Clearing existing questions for ${moduleId}/${formattedTopic}...`);
      
      await client.query('BEGIN');
      
      // Delete options first (foreign key constraint)
      await client.query(`
        DELETE FROM options 
        WHERE question_id IN (
          SELECT id FROM questions 
          WHERE module_id = $1 AND topic = $2
        );
      `, [moduleId, formattedTopic]);
      
      // Then delete questions
      await client.query(`
        DELETE FROM questions 
        WHERE module_id = $1 AND topic = $2;
      `, [moduleId, formattedTopic]);
      
      await client.query('COMMIT');
      
      console.log(`Existing questions cleared. Starting import of ${questionsData.length} questions...`);
      
      // Import questions in batches
      const totalBatches = Math.ceil(questionsData.length / batchSize);
      
      for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
        const start = batchIndex * batchSize;
        const end = Math.min(start + batchSize, questionsData.length);
        const batch = questionsData.slice(start, end);
        
        console.log(`Importing batch ${batchIndex + 1}/${totalBatches} (questions ${start + 1}-${end})...`);
        
        // Start a transaction for this batch
        await client.query('BEGIN');
        
        for (let i = 0; i < batch.length; i++) {
          const question = batch[i];
          
          // Skip invalid questions
          if (!question.question || !Array.isArray(question.options) || question.correctIndex === undefined) {
            console.warn(`Skipping invalid question at index ${start + i}`);
            continue;
          }
          
          // Insert question
          const result = await client.query(`
            INSERT INTO questions (module_id, topic, text, difficulty, slide_reference)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id;
          `, [
            moduleId, 
            formattedTopic, 
            question.question, 
            2, // Default difficulty 
            question.slideLink || null
          ]);
          
          const questionId = result.rows[0].id;
          
          // Insert options
          for (let j = 0; j < question.options.length; j++) {
            await client.query(`
              INSERT INTO options (question_id, text, is_correct)
              VALUES ($1, $2, $3);
            `, [
              questionId,
              question.options[j],
              j === question.correctIndex
            ]);
          }
        }
        
        // Commit this batch
        await client.query('COMMIT');
        console.log(`Batch ${batchIndex + 1} imported successfully.`);
      }
      
      console.log(`Import of ${questionsData.length} questions completed successfully!`);
      return questionsData.length;
      
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error during import:', error);
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

async function main() {
  try {
    // Parse command line arguments
    const [,, moduleId, topic] = process.argv;
    
    if (!moduleId || !topic) {
      console.error('Usage: node scripts/import-module.js <module_id> <topic>');
      console.error('Example: node scripts/import-module.js focs FOCS2');
      console.error('\nAvailable modules:');
      console.error('- focs: FOCS2, FOCS3, FOCS4, FOCS5');
      console.error('- bcr: BCR1, BCR2, BCR3, BCR4');
      console.error('- msk: MSK1, MSK2');
      console.error('- anatomy: Anatomy');
      process.exit(1);
    }
    
    // Extract data
    console.log(`Starting import for module: ${moduleId}, topic: ${topic}`);
    const questionsData = await extractModuleData(moduleId, topic);
    
    if (questionsData.length === 0) {
      console.error('No questions found to import.');
      process.exit(1);
    }
    
    console.log(`Found ${questionsData.length} questions to import.`);
    
    // Import questions
    const importedCount = await importQuestions(moduleId, topic, questionsData);
    
    console.log(`Successfully imported ${importedCount} questions for ${moduleId}/${topic}.`);
    
    // Print verification query
    console.log('\nTo verify the import, run:');
    console.log(`SELECT COUNT(*) FROM questions WHERE module_id = '${moduleId}' AND topic = '${topic.toUpperCase()}';`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  } finally {
    // Close the pool
    await pool.end();
  }
}

// Run the main function
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
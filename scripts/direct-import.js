// Direct SQL import script for FOCS2 data
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Pool } from '@neondatabase/serverless';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a PostgreSQL pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Path to the FOCS2 data file
const filePath = path.join(__dirname, '../attached_assets/focs2.js');

async function extractQuestionsData() {
  console.log(`Reading file: ${filePath}`);
  
  try {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Create a temporary directory if needed
    const tempDir = path.join(__dirname, '../tmp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    
    // Write to a temporary file that exports the data
    const tempFile = path.join(tempDir, `temp-focs2-${Date.now()}.js`);
    fs.writeFileSync(tempFile, `${fileContent}\nexport default focs2Data;`);
    
    // Import the data
    const { default: data } = await import(tempFile);
    
    // Clean up
    fs.unlinkSync(tempFile);
    
    return data;
  } catch (error) {
    console.error('Error extracting data:', error);
    return [];
  }
}

async function main() {
  try {
    console.log('Starting FOCS2 data import...');
    
    // Extract questions data
    const questionsData = await extractQuestionsData();
    
    if (!Array.isArray(questionsData) || questionsData.length === 0) {
      console.error('No valid questions data found');
      process.exit(1);
    }
    
    console.log(`Found ${questionsData.length} questions to import`);
    
    // Get a client from the pool
    const client = await pool.connect();
    
    try {
      // Start transaction
      await client.query('BEGIN');
      
      // First delete existing FOCS2 questions and options
      console.log('Deleting existing FOCS2 data...');
      
      await client.query(`
        DELETE FROM options 
        WHERE question_id IN (
          SELECT id FROM questions 
          WHERE module_id = 'focs' AND topic = 'FOCS2'
        );
      `);
      
      await client.query(`
        DELETE FROM questions 
        WHERE module_id = 'focs' AND topic = 'FOCS2';
      `);
      
      console.log('Existing data cleared. Importing new questions...');
      
      // Import questions
      let importedCount = 0;
      
      for (const questionData of questionsData) {
        // Validate question data
        if (!questionData.question || !Array.isArray(questionData.options) || 
            questionData.correctIndex === undefined) {
          console.warn('Invalid question data, skipping');
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
        for (let i = 0; i < questionData.options.length; i++) {
          await client.query(`
            INSERT INTO options (question_id, text, is_correct)
            VALUES ($1, $2, $3);
          `, [
            questionId,
            questionData.options[i],
            i === questionData.correctIndex
          ]);
        }
        
        importedCount++;
        
        if (importedCount % 10 === 0 || importedCount === questionsData.length) {
          console.log(`Imported ${importedCount}/${questionsData.length} questions`);
        }
      }
      
      // Commit transaction
      await client.query('COMMIT');
      console.log(`Successfully imported ${importedCount} FOCS2 questions`);
      
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error during import:', error);
    } finally {
      client.release();
    }
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close pool
    await pool.end();
  }
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
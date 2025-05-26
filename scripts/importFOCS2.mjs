// Import FOCS2 MCQs from attached assets
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { createPool } from '@neondatabase/serverless';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the tmp directory if it doesn't exist
const tmpDir = path.join(__dirname, '../tmp');
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

// Path to the FOCS2 data file
const filePath = path.join(__dirname, '../attached_assets/focs2.js');

// Read and parse the FOCS2 data
async function extractFOCS2Data() {
  try {
    console.log(`Reading file: ${filePath}`);
    
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Create a temporary file that exports the data
    const tempFilePath = path.join(tmpDir, 'temp-focs2.js');
    fs.writeFileSync(tempFilePath, `${fileContent}\nexport default focs2Data;`);
    
    // Import the data
    const { default: data } = await import(tempFilePath);
    
    // Clean up
    fs.unlinkSync(tempFilePath);
    
    return data;
  } catch (error) {
    console.error('Error extracting FOCS2 data:', error);
    return [];
  }
}

// Function to escape SQL values
function escapeSql(value) {
  if (value === null || value === undefined) {
    return 'NULL';
  }
  
  return `'${String(value).replace(/'/g, "''")}'`;
}

// Main function
async function main() {
  // Extract the data
  const focs2Data = await extractFOCS2Data();
  
  if (!Array.isArray(focs2Data) || focs2Data.length === 0) {
    console.error('No valid FOCS2 data found');
    process.exit(1);
  }
  
  console.log(`Found ${focs2Data.length} questions in FOCS2 data`);
  
  // Create direct SQL query to clear existing FOCS2 questions
  const sqlQueries = [];
  
  // Start transaction
  sqlQueries.push('BEGIN;');
  
  // Find existing FOCS2 questions
  sqlQueries.push(`
-- Get IDs of existing FOCS2 questions
CREATE TEMPORARY TABLE temp_focs2_questions AS
SELECT id FROM questions WHERE module_id = 'focs' AND topic = 'FOCS2';
  `);
  
  // Delete existing options
  sqlQueries.push(`
-- Delete options for existing FOCS2 questions
DELETE FROM options WHERE question_id IN (SELECT id FROM temp_focs2_questions);
  `);
  
  // Delete existing questions
  sqlQueries.push(`
-- Delete existing FOCS2 questions
DELETE FROM questions WHERE id IN (SELECT id FROM temp_focs2_questions);

-- Drop temporary table
DROP TABLE temp_focs2_questions;
  `);
  
  // Insert new questions and options
  focs2Data.forEach((question, index) => {
    if (!question.question || !Array.isArray(question.options)) {
      console.warn(`Question ${index} is invalid, skipping`);
      return;
    }
    
    // Insert question
    const questionQuery = `
-- Insert question ${index + 1}
WITH inserted_question AS (
  INSERT INTO questions (module_id, topic, text, difficulty, slide_reference)
  VALUES ('focs', 'FOCS2', ${escapeSql(question.question)}, 2, ${question.slideLink ? escapeSql(question.slideLink) : 'NULL'})
  RETURNING id
)
`;
    
    // Insert options
    const optionsQueries = question.options.map((option, optIndex) => `
-- Insert option ${optIndex + 1} for question ${index + 1}
INSERT INTO options (question_id, text, is_correct)
SELECT id, ${escapeSql(option)}, ${optIndex === question.correctIndex ? 'TRUE' : 'FALSE'} 
FROM inserted_question;
`).join('\n');
    
    sqlQueries.push(questionQuery + optionsQueries);
  });
  
  // Commit transaction
  sqlQueries.push('COMMIT;');
  
  // Combine all queries
  const fullSqlQuery = sqlQueries.join('\n');
  
  // Write the SQL to a file
  const sqlFilePath = path.join(tmpDir, 'import-focs2.sql');
  fs.writeFileSync(sqlFilePath, fullSqlQuery);
  
  console.log(`SQL file created at: ${sqlFilePath}`);
  
  // Create a PostgreSQL pool
  // Note: DATABASE_URL is available as environment variable
  const pool = createPool({
    connectionString: process.env.DATABASE_URL,
  });
  
  try {
    console.log('Running SQL import...');
    
    await pool.query(fullSqlQuery);
    
    console.log('Successfully imported FOCS2 data!');
  } catch (error) {
    console.error('Error executing SQL:', error);
  }
}

// Run the main function
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
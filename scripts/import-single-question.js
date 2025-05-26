// Import one question at a time from the FOCS2 data
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the JSON data
const jsonFilePath = path.join(__dirname, '../tmp/focs2-data.json');

// Function to escape single quotes for SQL
function escapeSql(str) {
  if (!str) return '';
  return str.replace(/'/g, "''");
}

async function main() {
  // Check if the JSON file exists
  if (!fs.existsSync(jsonFilePath)) {
    console.error(`JSON file not found: ${jsonFilePath}`);
    console.error('Please run the focs2-extractor.js script first');
    process.exit(1);
  }

  // Read the JSON data
  const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
  
  console.log(`Found ${jsonData.length} questions in JSON file`);
  
  // Create a SQL file for each question (useful if we need to retry individually)
  const sqlDir = path.join(__dirname, '../tmp/questions');
  if (!fs.existsSync(sqlDir)) {
    fs.mkdirSync(sqlDir, { recursive: true });
  }
  
  // Create an index file to combine all the questions
  const indexFilePath = path.join(sqlDir, 'index.sql');
  let indexContent = `
-- FOCS2 Questions Import Script
-- Generated on ${new Date().toISOString()}
-- Total Questions: ${jsonData.length}

BEGIN;

-- First, clear existing FOCS2 questions
DELETE FROM options 
WHERE question_id IN (
  SELECT id FROM questions 
  WHERE module_id = 'focs' AND topic = 'FOCS2'
);

DELETE FROM questions 
WHERE module_id = 'focs' AND topic = 'FOCS2';

`;
  
  // Process each question
  for (let i = 0; i < jsonData.length; i++) {
    const question = jsonData[i];
    
    // Skip invalid questions
    if (!question.question || !Array.isArray(question.options) || question.correctIndex === undefined) {
      console.warn(`Skipping invalid question at index ${i}`);
      continue;
    }
    
    // Create a SQL file for this question
    const questionSql = `
-- Question ${i + 1}
DO $$
DECLARE
  question_id integer;
BEGIN
  -- Insert the question
  INSERT INTO questions (module_id, topic, text, difficulty, slide_reference)
  VALUES (
    'focs', 
    'FOCS2', 
    '${escapeSql(question.question)}', 
    2, 
    ${question.slideLink ? `'${escapeSql(question.slideLink)}'` : 'NULL'}
  )
  RETURNING id INTO question_id;

  -- Insert options
${question.options.map((option, index) => {
  return `  INSERT INTO options (question_id, text, is_correct)
  VALUES (question_id, '${escapeSql(option)}', ${index === question.correctIndex});`;
}).join('\n\n')}
END $$;
`;
    
    // Save to individual file
    const questionFilePath = path.join(sqlDir, `question-${i + 1}.sql`);
    fs.writeFileSync(questionFilePath, questionSql);
    
    // Append to index file
    indexContent += `\n${questionSql}\n`;
  }
  
  // Finish the index file
  indexContent += `\nCOMMIT;\n`;
  fs.writeFileSync(indexFilePath, indexContent);
  
  console.log(`Created SQL import files in ${sqlDir}`);
  console.log(`To run the import, execute: cat ${indexFilePath} | psql $DATABASE_URL`);
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
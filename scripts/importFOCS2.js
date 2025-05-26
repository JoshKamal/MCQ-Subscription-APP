// Import FOCS2 MCQs from attached assets
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Read the FOCS2 data
const filePath = path.join(__dirname, '../attached_assets/focs2.js');
let focs2Data = [];

try {
  // Read the file
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract the variable declaration
  const match = fileContent.match(/const\s+focs2Data\s*=\s*(.*?);\s*$/s);
  if (match) {
    // Parse the data
    const dataStr = match[1];
    eval(`focs2Data = ${dataStr}`);
    
    if (!Array.isArray(focs2Data)) {
      console.error("Data is not an array");
      process.exit(1);
    }
  } else {
    console.error("Could not find focs2Data variable in file");
    process.exit(1);
  }
} catch (err) {
  console.error("Error reading or parsing file:", err);
  process.exit(1);
}

console.log(`Found ${focs2Data.length} questions in FOCS2 data`);

// Create SQL script to insert the questions
const sqlScriptPath = path.join(__dirname, '../tmp/import_focs2.sql');
let sqlScript = '';

// First clear existing FOCS2 questions
sqlScript += 'BEGIN;\n';
sqlScript += '-- Delete existing options for FOCS2 questions\n';
sqlScript += 'DELETE FROM options WHERE question_id IN (SELECT id FROM questions WHERE module_id = \'focs\' AND topic = \'FOCS2\');\n';
sqlScript += '-- Delete existing FOCS2 questions\n';
sqlScript += 'DELETE FROM questions WHERE module_id = \'focs\' AND topic = \'FOCS2\';\n\n';

// Insert questions and options
focs2Data.forEach((question, index) => {
  // Validate question format
  if (!question.question || !Array.isArray(question.options) || question.correctIndex === undefined) {
    console.warn(`Question ${index} is invalid, skipping`);
    return;
  }

  // Insert question
  sqlScript += `-- Question ${index + 1}\n`;
  sqlScript += `INSERT INTO questions (module_id, topic, text, difficulty, explanation, slide_reference)\n`;
  sqlScript += `VALUES ('focs', 'FOCS2', $question_${index}, 2, NULL, ${question.slideLink ? `$slide_${index}` : 'NULL'})\n`;
  sqlScript += `RETURNING id AS q${index};\n\n`;
  
  // Insert options
  question.options.forEach((option, optIndex) => {
    sqlScript += `-- Option ${optIndex + 1} for Question ${index + 1}\n`;
    sqlScript += `INSERT INTO options (question_id, text, is_correct)\n`;
    sqlScript += `VALUES (q${index}, $option_${index}_${optIndex}, ${optIndex === question.correctIndex}); -- ${optIndex === question.correctIndex ? 'CORRECT' : 'INCORRECT'}\n`;
  });
  
  sqlScript += '\n';
});

sqlScript += 'COMMIT;\n';

// Write SQL script to file
fs.writeFileSync(sqlScriptPath, sqlScript);
console.log(`Generated SQL script at ${sqlScriptPath}`);

// Generate parameters file
const paramsPath = path.join(__dirname, '../tmp/import_focs2_params.js');
let paramsScript = 'module.exports = {\n';

focs2Data.forEach((question, index) => {
  // Escape question text for safety
  paramsScript += `  question_${index}: ${JSON.stringify(question.question)},\n`;
  
  if (question.slideLink) {
    paramsScript += `  slide_${index}: ${JSON.stringify(question.slideLink)},\n`;
  }
  
  // Escape option texts
  question.options.forEach((option, optIndex) => {
    paramsScript += `  option_${index}_${optIndex}: ${JSON.stringify(option)},\n`;
  });
});

paramsScript += '};\n';

fs.writeFileSync(paramsPath, paramsScript);
console.log(`Generated parameters file at ${paramsPath}`);

// Create a simple import script
const importScriptPath = path.join(__dirname, '../tmp/run_import_focs2.js');
const importScript = `
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Connect to the database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

async function importData() {
  try {
    // Read the SQL script
    const sqlScript = fs.readFileSync(path.join(__dirname, 'import_focs2.sql'), 'utf8');
    
    // Split into individual statements
    const statements = sqlScript.split(';').filter(stmt => stmt.trim().length > 0);
    
    console.log(\`Found \${statements.length} SQL statements to execute\`);
    
    // Start a transaction
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      // Execute the statements
      for (let i = 0; i < statements.length; i++) {
        const stmt = statements[i];
        if (stmt.trim()) {
          await client.query(stmt);
          if (i % 10 === 0) {
            console.log(\`Executed \${i + 1}/\${statements.length} statements\`);
          }
        }
      }
      
      await client.query('COMMIT');
      console.log('Import completed successfully');
    } catch (err) {
      await client.query('ROLLBACK');
      console.error('Error during import:', err);
    } finally {
      client.release();
    }
  } catch (err) {
    console.error('Error:', err);
  } finally {
    pool.end();
  }
}

importData();
`;

fs.writeFileSync(importScriptPath, importScript);
console.log(`Generated import script at ${importScriptPath}`);

// Create a simple shell script to run the import
const shellScriptPath = path.join(__dirname, '../tmp/run_import_focs2.sh');
const shellScript = `#!/bin/bash
cd "$(dirname "$0")"
node run_import_focs2.js
`;

fs.writeFileSync(shellScriptPath, shellScript);
fs.chmodSync(shellScriptPath, '755');
console.log(`Generated shell script at ${shellScriptPath}`);

console.log("\nTo run the import, execute:");
console.log("cd tmp && ./run_import_focs2.sh");
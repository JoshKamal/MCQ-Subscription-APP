// Extract FOCS2 data to JSON format for SQL import
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create tmp directory if it doesn't exist
const tmpDir = path.join(__dirname, '../tmp');
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir, { recursive: true });
}

// Path to FOCS2 data file
const filePath = path.join(__dirname, '../attached_assets/focs2.js');

// Read the file content
console.log(`Reading file: ${filePath}`);
const fileContent = fs.readFileSync(filePath, 'utf8');

// Extract the JavaScript array using regex
const match = fileContent.match(/const\s+focs2Data\s*=\s*(\[[\s\S]*?\]);/);
if (!match) {
  console.error('Could not find FOCS2 data in the file');
  process.exit(1);
}

// Extract the array string and evaluate it
const arrayString = match[1];
let data;
try {
  data = eval(arrayString);
  if (!Array.isArray(data)) {
    console.error('Extracted data is not an array');
    process.exit(1);
  }
} catch (error) {
  console.error('Error evaluating data:', error);
  process.exit(1);
}

console.log(`Successfully extracted ${data.length} questions`);

// Convert to JSON and save to file
const jsonFilePath = path.join(tmpDir, 'focs2-data.json');
fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));
console.log(`Saved JSON data to: ${jsonFilePath}`);

// Create SQL batch files for import
const BATCH_SIZE = 10;
const totalBatches = Math.ceil(data.length / BATCH_SIZE);

for (let batchIndex = 0; batchIndex < totalBatches; batchIndex++) {
  const start = batchIndex * BATCH_SIZE;
  const end = Math.min(start + BATCH_SIZE, data.length);
  const batch = data.slice(start, end);
  
  let sqlContent = '-- FOCS2 Import Batch ' + (batchIndex + 1) + '/' + totalBatches + '\n';
  sqlContent += 'BEGIN;\n\n';
  
  batch.forEach((item, index) => {
    // Validate question data
    if (!item.question || !Array.isArray(item.options) || item.correctIndex === undefined) {
      sqlContent += `-- Skipping invalid question at index ${start + index}\n\n`;
      return;
    }
    
    // Escape single quotes in text
    const questionText = item.question.replace(/'/g, "''");
    const slideRef = item.slideLink ? item.slideLink.replace(/'/g, "''") : null;
    
    sqlContent += `-- Question ${start + index + 1}\n`;
    sqlContent += `WITH q${index} AS (\n`;
    sqlContent += `  INSERT INTO questions (module_id, topic, text, difficulty, slide_reference)\n`;
    sqlContent += `  VALUES ('focs', 'FOCS2', '${questionText}', 2, ${slideRef ? `'${slideRef}'` : 'NULL'})\n`;
    sqlContent += `  RETURNING id\n`;
    sqlContent += `)\n`;
    
    // Add options
    item.options.forEach((option, optIndex) => {
      const optionText = option.replace(/'/g, "''");
      const isCorrect = optIndex === item.correctIndex;
      
      sqlContent += `INSERT INTO options (question_id, text, is_correct)\n`;
      sqlContent += `SELECT id, '${optionText}', ${isCorrect} FROM q${index};\n\n`;
    });
    
    sqlContent += '\n';
  });
  
  sqlContent += 'COMMIT;\n';
  
  const sqlFilePath = path.join(tmpDir, `focs2-batch-${batchIndex + 1}.sql`);
  fs.writeFileSync(sqlFilePath, sqlContent);
  console.log(`Created SQL batch file: ${sqlFilePath}`);
}

console.log('Done. Now you can run each SQL batch file to import the data in manageable chunks.');
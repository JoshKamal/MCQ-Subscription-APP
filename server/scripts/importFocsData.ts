import { importQuestions, clearModuleQuestions } from './importQuestions';
import fs from 'fs';
import path from 'path';

// Function to run the import
async function run() {
  try {
    // Read the file containing the MCQ data
    const filePath = path.join(process.cwd(), 'attached_assets', 'focs-data3.js');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Extract the data array from the file
    // The file format is expected to be: const focsData3 = [ ... ];
    fileContent = fileContent.replace('const focsData3 = ', '');
    fileContent = fileContent.replace(/;$/, '');
    
    // Parse the data
    const questionsData = JSON.parse(fileContent);
    
    // Clear existing questions for the module
    await clearModuleQuestions('focs');
    
    // Import the questions
    await importQuestions('focs', questionsData);
    
    console.log('Import completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error during import:', error);
    process.exit(1);
  }
}

// Execute the import
run();
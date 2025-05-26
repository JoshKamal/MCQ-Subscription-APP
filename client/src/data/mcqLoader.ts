// MCQ Data Loader
import { ModuleId, TopicId } from './moduleLoader';

// Define MCQ question interface
export interface MCQQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  slideLink?: string;
  explanations?: string[];
}

// This is a simplified interface just for importing data
export interface MCQData {
  [key: string]: MCQQuestion[];
}

// Create reference to all MCQ data files with dynamic imports
// This allows us to load only the data files we need, when we need them
const mcqFiles = {
  'FOCS2': () => import('@assets/focs2.js'),
  'FOCS3': () => import('@assets/focs3.js'),
  'FOCS4': () => import('@assets/focs4.js'),
  'FOCS5': () => import('@assets/focs5.js'),
  'BCR1': () => import('@assets/bcr1.js'),
  'BCR2': () => import('@assets/bcr2.js'),
  'BCR3': () => import('@assets/bcr3.js'),
  'BCR4': () => import('@assets/bcr4.js'),
  'MSK1': () => import('@assets/msk1.js'),
  'MSK2': () => import('@assets/msk2.js'),
  'Anatomy': () => import('@assets/anatomy.js')
};

// Cache for loaded data to avoid reloading
const dataCache: MCQData = {};

// Function to load MCQ data for a specific topic
export async function loadTopicData(topic: TopicId): Promise<MCQQuestion[]> {
  // Check if we've already loaded this data
  if (dataCache[topic]) {
    return dataCache[topic];
  }
  
  try {
    // Import the module with dynamic import
    const moduleLoader = mcqFiles[topic];
    if (!moduleLoader) {
      console.error(`No data file found for topic: ${topic}`);
      return [];
    }
    
    // Load the data
    const module = await moduleLoader();
    
    // Extract the data from the module
    // Each JS file exports a variable like focs2Data, bcr1Data, etc.
    const dataName = `${topic.toLowerCase()}Data`;
    const questions = module[dataName] || [];
    
    // Cache the data
    dataCache[topic] = questions;
    
    return questions;
  } catch (error) {
    console.error(`Error loading data for topic ${topic}:`, error);
    return [];
  }
}

// Function to load all data for a module
export async function loadModuleData(moduleId: ModuleId): Promise<MCQData> {
  const result: MCQData = {};
  
  // Determine which topics belong to this module
  const topicsToLoad: TopicId[] = [];
  
  switch (moduleId) {
    case 'focs':
      topicsToLoad.push('FOCS2', 'FOCS3', 'FOCS4', 'FOCS5');
      break;
    case 'bcr':
      topicsToLoad.push('BCR1', 'BCR2', 'BCR3', 'BCR4');
      break;
    case 'msk':
      topicsToLoad.push('MSK1', 'MSK2');
      break;
    case 'anatomy':
      topicsToLoad.push('Anatomy');
      break;
  }
  
  // Load all topics for this module
  for (const topic of topicsToLoad) {
    result[topic] = await loadTopicData(topic);
  }
  
  return result;
}

// Get a specific number of questions from a topic
export async function getSampleQuestions(topic: TopicId, count: number = 10): Promise<MCQQuestion[]> {
  const allQuestions = await loadTopicData(topic);
  
  // If we have fewer questions than requested, return all of them
  if (allQuestions.length <= count) {
    return allQuestions;
  }
  
  // Otherwise, select a random subset
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
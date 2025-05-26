// Module Loader for Medical MCQs
import { Question } from "@shared/schema";

// Define module types
export type ModuleId = 'focs' | 'bcr' | 'msk' | 'anatomy';

// Define topic types
export type TopicId = 'FOCS2' | 'FOCS3' | 'FOCS4' | 'FOCS5' | 'BCR1' | 'BCR2' | 'BCR3' | 'BCR4' | 'MSK1' | 'MSK2' | 'Anatomy';

// Define module structure
export interface Module {
  id: ModuleId;
  name: string;
  description: string;
  isPremium: boolean;
  topics: Topic[];
}

// Define topic structure
export interface Topic {
  id: TopicId;
  name: string;
  description: string;
  count: number; // number of questions in this topic
}

// Define all modules
export const modules: Module[] = [
  {
    id: 'focs',
    name: 'Fundamentals',
    description: 'Fundamental concepts in medical sciences',
    isPremium: false, // Free module
    topics: [
      { 
        id: 'FOCS2', 
        name: 'Fundamentals 2', 
        description: 'Core concepts in pharmacology and drug actions',
        count: 388 
      },
      { 
        id: 'FOCS3', 
        name: 'Fundamentals 3',
        description: 'Advanced pharmacological principles',
        count: 380
      },
      { 
        id: 'FOCS4', 
        name: 'Fundamentals 4',
        description: 'Clinical applications of drug therapy',
        count: 390
      },
      { 
        id: 'FOCS5', 
        name: 'Fundamentals 5',
        description: 'Modern approaches to pharmacotherapy',
        count: 410
      }
    ]
  },
  {
    id: 'bcr',
    name: 'BCR',
    description: 'Biochemistry and related topics',
    isPremium: true,
    topics: [
      { 
        id: 'BCR1', 
        name: 'BCR 1',
        description: 'Introduction to biochemistry concepts',
        count: 150
      },
      { 
        id: 'BCR2', 
        name: 'BCR 2',
        description: 'Advanced biochemical pathways',
        count: 120
      },
      { 
        id: 'BCR3', 
        name: 'BCR 3',
        description: 'Metabolic processes and regulation',
        count: 130
      },
      { 
        id: 'BCR4', 
        name: 'BCR 4',
        description: 'Clinical biochemistry applications',
        count: 140
      }
    ]
  },
  {
    id: 'msk',
    name: 'MSK',
    description: 'Musculoskeletal system',
    isPremium: true,
    topics: [
      { 
        id: 'MSK1', 
        name: 'MSK 1',
        description: 'Fundamentals of musculoskeletal anatomy',
        count: 180
      },
      { 
        id: 'MSK2', 
        name: 'MSK 2',
        description: 'Clinical musculoskeletal conditions',
        count: 160
      }
    ]
  },
  {
    id: 'anatomy',
    name: 'Anatomy',
    description: 'Human anatomical structures and systems',
    isPremium: true,
    topics: [
      { 
        id: 'Anatomy', 
        name: 'General Anatomy',
        description: 'Comprehensive review of human anatomy',
        count: 200
      }
    ]
  }
];

// Function to get a module by ID
export function getModule(moduleId: ModuleId): Module | undefined {
  return modules.find(module => module.id === moduleId);
}

// Function to get a topic by ID
export function getTopic(topicId: TopicId): Topic | undefined {
  for (const module of modules) {
    const topic = module.topics.find(topic => topic.id === topicId);
    if (topic) return topic;
  }
  return undefined;
}

// Function to check if a module is premium
export function isModulePremium(moduleId: ModuleId): boolean {
  const module = getModule(moduleId);
  return module ? module.isPremium : true;
}

// Function to get all topics
export function getAllTopics(): Topic[] {
  return modules.flatMap(module => module.topics);
}
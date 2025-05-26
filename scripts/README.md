# MCQ Import Scripts

This folder contains scripts for importing Medical MCQ data from JavaScript files into the database.

## Available Scripts

### 1. `importMCQ.ts` - Main Import Script
The primary script for importing MCQ data from attached files.

**Usage:**
```
# Import all MCQs from all attached files
npx tsx scripts/importMCQ.ts

# Import MCQs from a specific topic
npx tsx scripts/importMCQ.ts focs2
```

### 2. `importSpecificModule.ts` - Import a Single Module
Import MCQs from a specific module and topic with more precise control.

**Usage:**
```
# Format
npx tsx scripts/importSpecificModule.ts <moduleId> <topic>

# Example: Import FOCS2 questions
npx tsx scripts/importSpecificModule.ts focs FOCS2
```

### 3. `cleanupDatabase.ts` - Remove Sample Questions
Cleans the database by removing any sample or invalid questions.

**Usage:**
```
npx tsx scripts/cleanupDatabase.ts
```

## Available Modules and Topics

1. **FOCS** (Fundamentals of Clinical Science)
   - FOCS2, FOCS3, FOCS4, FOCS5

2. **BCR** (Body's Control & Response)
   - BCR1, BCR2, BCR3, BCR4

3. **MSK** (Musculoskeletal)
   - MSK1, MSK2

4. **Anatomy**
   - Anatomy

## Importing All Data in One Command

To import all MCQs from all your attached JavaScript files:

```
npx tsx scripts/importMCQ.ts
```

This will process each file one by one and import all questions into the appropriate modules and topics in the database.
import { generateClient } from 'aws-amplify/api';
import { Schema } from '../../amplify/data/resource';

// Create a client to interact with the AppSync GraphQL API
export const client = generateClient<Schema>();

// Function to call the Lambda function for generating questions
export async function generateExamQuestions(topic: string, count: number = 5, difficulty: string = 'medium') {
  try {
    // In development, use the local sandbox endpoint
    const apiName = 'generateQuestions';
    const path = '/generate';
    const options = {
      body: {
        topic,
        count,
        difficulty
      }
    };
    
    const response = await client.functions.post(apiName, path, options);
    return response.questions;
  } catch (error) {
    console.error('Error generating questions:', error);
    throw error;
  }
}
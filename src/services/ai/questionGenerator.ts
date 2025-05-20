import { API } from 'aws-amplify';

export interface QuestionGenerationParams {
  examId: string;
  topic?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface GeneratedQuestion {
  id: string;
  text: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
}

/**
 * Generates a new question using Amazon Bedrock via Lambda
 * 
 * @param params Question generation parameters
 * @returns Generated question
 */
export async function generateQuestion(params: QuestionGenerationParams): Promise<GeneratedQuestion> {
  try {
    // Call the Lambda function through API Gateway
    const response = await API.post('generateQuestionApi', '/generateQuestion', {
      body: params
    });
    
    return response;
  } catch (error) {
    console.error('Error generating question:', error);
    throw error;
  }
}
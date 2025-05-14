import { API } from 'aws-amplify';

export interface QuestionGenerationParams {
  examType: string;
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
    // In a real implementation, this would call the API Gateway endpoint
    // that triggers the Lambda function
    // const response = await API.post('examReadyApi', '/questions/generate', {
    //   body: params
    // });
    // return response;
    
    // For demo purposes, we'll return a mock response
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
      id: Math.random().toString(36).substring(2, 11),
      text: `What is the primary benefit of using ${params.topic || 'serverless architecture'} in a ${params.examType} environment?`,
      options: [
        { id: 'a', text: 'Reduced operational complexity and management overhead' },
        { id: 'b', text: 'Unlimited free compute resources' },
        { id: 'c', text: 'Guaranteed 100% uptime' },
        { id: 'd', text: 'Elimination of all security concerns' }
      ],
      correctAnswer: 'a',
      explanation: 'Serverless architectures reduce operational complexity by eliminating the need to provision, scale, and manage servers. This allows developers to focus on code rather than infrastructure management. The other options are not accurate: cloud resources are not free (though you pay only for what you use), no service guarantees 100% uptime, and security remains a shared responsibility.'
    };
  } catch (error) {
    console.error('Error generating question:', error);
    throw error;
  }
}
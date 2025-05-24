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
  difficulty: string;
  examID: string;
  isAIGenerated: boolean;
  topic: string;
}

export const generateQuestion = async (params: QuestionGenerationParams): Promise<GeneratedQuestion> => {
  try {
    const response = await API.post('generateQuestions', '/', {
      body: params
    });
    
    return response;
  } catch (error) {
    console.error('Error generating question:', error);
    throw error;
  }
};
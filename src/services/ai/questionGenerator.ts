// Re-export from the main services index
import { generateQuestion } from '../index';

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

export { generateQuestion };
import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { listExamResults } from '../../graphql/queries';
import { createExamResult } from '../../graphql/mutations';

// Define types for exam results
export interface ExamResult {
  id: string;
  userId: string;
  examId: string;
  examName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // in seconds
  date: string;
  questionResults?: Array<{
    questionId: string;
    correct: boolean;
    userAnswer: string;
    correctAnswer: string;
  }>;
}

// Get user's exam history
export async function getUserExamHistory(userId: string): Promise<ExamResult[]> {
  try {
    // For now, return mock data
    // In a real implementation, this would query the database
    return [
      {
        id: '1',
        userId,
        examId: 'aws-sa',
        examName: 'AWS Solutions Architect Associate',
        score: 85,
        totalQuestions: 20,
        correctAnswers: 17,
        timeSpent: 1800, // 30 minutes
        date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
      },
      {
        id: '2',
        userId,
        examId: 'aws-sa',
        examName: 'AWS Solutions Architect Associate',
        score: 70,
        totalQuestions: 10,
        correctAnswers: 7,
        timeSpent: 900, // 15 minutes
        date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days ago
      },
      {
        id: '3',
        userId,
        examId: 'azure-admin',
        examName: 'Microsoft Azure Administrator',
        score: 90,
        totalQuestions: 10,
        correctAnswers: 9,
        timeSpent: 600, // 10 minutes
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      }
    ];
  } catch (error) {
    console.error('Error fetching user exam history:', error);
    throw error;
  }
}

// Save exam result
export async function saveExamResult(result: Omit<ExamResult, 'id'>): Promise<ExamResult | null> {
  try {
    // In a real implementation, this would save to the database
    console.log('Saving exam result:', result);
    return {
      ...result,
      id: Date.now().toString()
    };
  } catch (error) {
    console.error('Error saving exam result:', error);
    return null;
  }
}
// src/services/exams/examService.ts

import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { listExamTypes, getExamType, listQuestions, getQuestion, questionsByExamTypeID } from '../../graphql/queries';
import { createQuestion } from '../../graphql/mutations';
import { 
  ListExamTypesQuery, 
  GetExamTypeQuery,
  ListQuestionsQuery,
  CreateQuestionMutation
} from '../../API';

export async function getExams() {
  try {
    const response = await API.graphql<GraphQLQuery<ListExamTypesQuery>>(
      graphqlOperation(listExamTypes)
    );
    
    const exams = response.data?.listExamTypes?.items || [];
    
    // Fetch question counts for each exam
    const examsWithQuestionCounts = await Promise.all(
      exams.map(async (exam) => {
        try {
          const questionsResponse = await API.graphql<GraphQLQuery<ListQuestionsQuery>>(
            graphqlOperation(listQuestions, {
              filter: { examTypeID: { eq: exam.id } }
            })
          );
          
          const questionCount = questionsResponse.data?.listQuestions?.items?.length || 0;
          
          return {
            ...exam,
            questions: {
              items: questionsResponse.data?.listQuestions?.items || [],
              nextToken: questionsResponse.data?.listQuestions?.nextToken
            }
          };
        } catch (err) {
          console.error(`Error fetching questions for exam ${exam.id}:`, err);
          return exam;
        }
      })
    );
    
    return examsWithQuestionCounts;
  } catch (error) {
    console.error('Error fetching exams:', error);
    throw error;
  }
}

export async function getExamById(id: string) {
  try {
    const response = await API.graphql<GraphQLQuery<GetExamTypeQuery>>(
      graphqlOperation(getExamType, { id })
    );
    return response.data?.getExamType;
  } catch (error) {
    console.error('Error fetching exam:', error);
    throw error;
  }
}

export async function getQuestionsByExamId(examTypeID: string) {
  try {
    // Get all question IDs for this exam
    const listResponse = await API.graphql<GraphQLQuery<ListQuestionsQuery>>(
      graphqlOperation(listQuestions, {
        filter: { examTypeID: { eq: examTypeID } }
      })
    );
    
    const questionIds = (listResponse.data?.listQuestions?.items || [])
      .filter(q => q !== null)
      .map(q => q!.id);
    
    // Fetch each question individually to get options
    const fullQuestions = await Promise.all(
      questionIds.map(async (id) => {
        try {
          const detailResponse = await API.graphql<GraphQLQuery<any>>(
            graphqlOperation(getQuestion, { id })
          ) as GraphQLResult<any>;
          return detailResponse.data?.getQuestion;
        } catch (err) {
          console.error(`Error fetching question ${id}:`, err);
          return null;
        }
      })
    );
    
    // Filter out nulls and ensure options exist
    return fullQuestions
      .filter(q => q !== null)
      .map(q => ({
        ...q,
        options: q.options || [
          { id: 'a', text: 'Option A' },
          { id: 'b', text: 'Option B' },
          { id: 'c', text: 'Option C' },
          { id: 'd', text: 'Option D' }
        ]
      }));
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}

// Define a type for the question input
interface QuestionInput {
  text: string;
  options: Array<{id: string; text: string}>;
  correctAnswer: string;
  explanation?: string;
  difficulty?: string;
  examTypeID: string;
  isAIGenerated?: boolean;
  topic?: string;
}

export async function saveQuestion(question: QuestionInput) {
  try {
    // Ensure question has options array with 4 items
    if (!question.options || !Array.isArray(question.options) || question.options.length !== 4) {
      throw new Error('Questions must have exactly 4 options');
    }
    
    const response = await API.graphql<GraphQLQuery<CreateQuestionMutation>>({
      query: createQuestion,
      variables: { input: question },
      authMode: 'API_KEY' // Allow unauthenticated users to save questions
    }) as GraphQLResult<CreateQuestionMutation>;
    
    return response.data?.createQuestion;
  } catch (error) {
    console.error('Error saving question:', error);
    throw error;
  }
}

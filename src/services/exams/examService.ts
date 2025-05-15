// src/services/exams/examService.ts

import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { listExamTypes, getExamType, listQuestions } from '../../graphql/queries';
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
    return response.data?.listExamTypes?.items || [];
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
    const response = await API.graphql<GraphQLQuery<ListQuestionsQuery>>(
      graphqlOperation(listQuestions, {
        filter: { examTypeID: { eq: examTypeID } }
      })
    );
    return response.data?.listQuestions?.items || [];
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}

export async function saveQuestion(question: any) {
  try {
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

import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { listExamTypes, getExamType } from '../../graphql/queries';
import { createExamType, createQuestion } from '../../graphql/mutations';
import { 
  ListExamTypesQuery, 
  GetExamTypeQuery,
  CreateExamTypeMutation,
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

export async function createExam(exam: any) {
  try {
    // Define a custom mutation that doesn't request the questions field
    const createExamTypeCustom = /* GraphQL */ `
      mutation CreateExamType($input: CreateExamTypeInput!) {
        createExamType(input: $input) {
          id
          name
          description
          createdAt
          updatedAt
          owner
        }
      }
    `;

    // Use AMAZON_COGNITO_USER_POOLS as the authentication type
    const response = await API.graphql({
      query: createExamTypeCustom, // Use the custom mutation here
      variables: { input: exam },
      authMode: 'AMAZON_COGNITO_USER_POOLS'
    }) as GraphQLResult<CreateExamTypeMutation>;
    
    return response.data?.createExamType;
  } catch (error) {
    console.error('Error creating exam:', error);
    throw error;
  }
}

export async function saveQuestion(question: any) {
  try {
    const response = await API.graphql<GraphQLQuery<CreateQuestionMutation>>(
      graphqlOperation(createQuestion, { input: question })
    ) as GraphQLResult<CreateQuestionMutation>;
    
    return response.data?.createQuestion;
  } catch (error) {
    console.error('Error saving question:', error);
    throw error;
  }
}

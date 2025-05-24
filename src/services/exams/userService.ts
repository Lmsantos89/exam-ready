import { API, graphqlOperation, Auth } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

// Get current authenticated user
export const getCurrentUser = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    
    // Get user data from the database
    const response = await API.graphql(graphqlOperation(
      queries.getUser,
      { id: user.username }
    ));
    
    return response.data.getUser;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Get exam attempts by user
export const getExamAttemptsByUser = async (userID: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      queries.listExamAttempts,
      { filter: { userID: { eq: userID } } }
    ));
    return response.data.listExamAttempts.items;
  } catch (error) {
    console.error('Error fetching exam attempts:', error);
    throw error;
  }
};

// Save exam attempt
export const saveExamAttempt = async (examAttempt: any) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.createExamAttempt,
      { input: examAttempt }
    ));
    return response.data.createExamAttempt;
  } catch (error) {
    console.error('Error saving exam attempt:', error);
    throw error;
  }
};
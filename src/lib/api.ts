import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

// Generic function to fetch data using GraphQL queries
export async function fetchData(query: any, variables?: any) {
  try {
    const response = await API.graphql(graphqlOperation(query, variables));
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Generic function to create data using GraphQL mutations
export async function createData(mutation: any, input: any) {
  try {
    const response = await API.graphql(
      graphqlOperation(mutation, { input })
    );
    return response.data;
  } catch (error) {
    console.error('Error creating data:', error);
    throw error;
  }
}

// Generic function to update data using GraphQL mutations
export async function updateData(mutation: any, input: any) {
  try {
    const response = await API.graphql(
      graphqlOperation(mutation, { input })
    );
    return response.data;
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
}

// Generic function to delete data using GraphQL mutations
export async function deleteData(mutation: any, id: string) {
  try {
    const response = await API.graphql(
      graphqlOperation(mutation, { input: { id } })
    );
    return response.data;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
}
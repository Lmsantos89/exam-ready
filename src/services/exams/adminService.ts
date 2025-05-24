import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';

// Provider functions
export const getProviders = async () => {
  try {
    const response = await API.graphql(graphqlOperation(queries.listProviders));
    return response.data.listProviders.items;
  } catch (error) {
    console.error('Error fetching providers:', error);
    throw error;
  }
};

export const createNewProvider = async (provider: any) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.createProvider,
      { input: provider }
    ));
    return response.data.createProvider;
  } catch (error) {
    console.error('Error creating provider:', error);
    throw error;
  }
};

export const updateExistingProvider = async (provider: any) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.updateProvider,
      { input: provider }
    ));
    return response.data.updateProvider;
  } catch (error) {
    console.error('Error updating provider:', error);
    throw error;
  }
};

export const deleteExistingProvider = async (id: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.deleteProvider,
      { input: { id } }
    ));
    return response.data.deleteProvider;
  } catch (error) {
    console.error('Error deleting provider:', error);
    throw error;
  }
};

// Certification functions
export const getCertifications = async () => {
  try {
    const response = await API.graphql(graphqlOperation(queries.listCertifications));
    return response.data.listCertifications.items;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    throw error;
  }
};

export const createNewCertification = async (certification: any) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.createCertification,
      { input: certification }
    ));
    return response.data.createCertification;
  } catch (error) {
    console.error('Error creating certification:', error);
    throw error;
  }
};

export const updateExistingCertification = async (certification: any) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.updateCertification,
      { input: certification }
    ));
    return response.data.updateCertification;
  } catch (error) {
    console.error('Error updating certification:', error);
    throw error;
  }
};

export const deleteExistingCertification = async (id: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.deleteCertification,
      { input: { id } }
    ));
    return response.data.deleteCertification;
  } catch (error) {
    console.error('Error deleting certification:', error);
    throw error;
  }
};

// Exam functions
export const getExams = async () => {
  try {
    const response = await API.graphql(graphqlOperation(queries.listExams));
    return response.data.listExams.items;
  } catch (error) {
    console.error('Error fetching exams:', error);
    throw error;
  }
};

export const createNewExam = async (exam: any) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.createExam,
      { input: exam }
    ));
    return response.data.createExam;
  } catch (error) {
    console.error('Error creating exam:', error);
    throw error;
  }
};

export const updateExistingExam = async (exam: any) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.updateExam,
      { input: exam }
    ));
    return response.data.updateExam;
  } catch (error) {
    console.error('Error updating exam:', error);
    throw error;
  }
};

export const deleteExistingExam = async (id: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      mutations.deleteExam,
      { input: { id } }
    ));
    return response.data.deleteExam;
  } catch (error) {
    console.error('Error deleting exam:', error);
    throw error;
  }
};
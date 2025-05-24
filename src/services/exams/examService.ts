import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';

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

export const getProviderById = async (id: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      queries.getProvider,
      { id }
    ));
    return response.data.getProvider;
  } catch (error) {
    console.error('Error fetching provider:', error);
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

export const getCertificationById = async (id: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      queries.getCertification,
      { id }
    ));
    return response.data.getCertification;
  } catch (error) {
    console.error('Error fetching certification:', error);
    throw error;
  }
};

export const getCertificationsByProvider = async (providerID: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      queries.listCertifications,
      { filter: { providerID: { eq: providerID } } }
    ));
    return response.data.listCertifications.items;
  } catch (error) {
    console.error('Error fetching certifications by provider:', error);
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

export const getExamById = async (id: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      queries.getExam,
      { id }
    ));
    return response.data.getExam;
  } catch (error) {
    console.error('Error fetching exam:', error);
    throw error;
  }
};

export const getExamsByCertification = async (certificationID: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      queries.listExams,
      { filter: { certificationID: { eq: certificationID } } }
    ));
    return response.data.listExams.items;
  } catch (error) {
    console.error('Error fetching exams by certification:', error);
    throw error;
  }
};

// Question functions
export const getQuestionsByExamId = async (examID: string) => {
  try {
    const response = await API.graphql(graphqlOperation(
      queries.listQuestions,
      { filter: { examID: { eq: examID } } }
    ));
    return response.data.listQuestions.items || [];
  } catch (error) {
    console.error(`Error fetching questions for exam ${examID}:`, error);
    throw error;
  }
};
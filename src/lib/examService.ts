import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';

// Get all exams
export async function getAllExams() {
  try {
    const response = await API.graphql(graphqlOperation(queries.listExams));
    return response.data.listExams.items || [];
  } catch (error) {
    console.error('Error fetching exams:', error);
    throw error;
  }
}

// Get exam by ID
export async function getExamById(examId: string) {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.getExam, { id: examId })
    );
    return response.data.getExam;
  } catch (error) {
    console.error(`Error fetching exam ${examId}:`, error);
    throw error;
  }
}

// Get questions for an exam
export async function getQuestionsByExamId(examId: string) {
  try {
    const response = await API.graphql(
      graphqlOperation(queries.listQuestions, {
        filter: { examID: { eq: examId } }
      })
    );
    return response.data.listQuestions.items || [];
  } catch (error) {
    console.error(`Error fetching questions for exam ${examId}:`, error);
    throw error;
  }
}
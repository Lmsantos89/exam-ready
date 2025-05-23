import { getDynamoClient } from './dynamoConfig';
import { GetCommand, ScanCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';

const dynamoClient = getDynamoClient();

// Get all exams
export async function getAllExams() {
  try {
    const command = new ScanCommand({
      TableName: 'Exam'
    });
    
    const response = await dynamoClient.send(command);
    return response.Items || [];
  } catch (error) {
    console.error('Error fetching exams:', error);
    throw error;
  }
}

// Get exam by ID
export async function getExamById(examId: string) {
  try {
    const command = new GetCommand({
      TableName: 'Exam',
      Key: { id: examId }
    });
    
    const response = await dynamoClient.send(command);
    return response.Item;
  } catch (error) {
    console.error(`Error fetching exam ${examId}:`, error);
    throw error;
  }
}

// Get questions for an exam
export async function getQuestionsByExamId(examId: string) {
  try {
    const command = new QueryCommand({
      TableName: 'Question',
      IndexName: 'byExam',
      KeyConditionExpression: 'examId = :examId',
      ExpressionAttributeValues: {
        ':examId': examId
      }
    });
    
    const response = await dynamoClient.send(command);
    return response.Items || [];
  } catch (error) {
    console.error(`Error fetching questions for exam ${examId}:`, error);
    throw error;
  }
}
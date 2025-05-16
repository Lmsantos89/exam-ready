import { API, graphqlOperation } from 'aws-amplify';
import { GraphQLQuery, GraphQLResult } from '@aws-amplify/api';
import { createExamType, createCertificationType, createQuestion, deleteQuestion } from '../../graphql/mutations';
import { listCertificationTypes, getExamType, listQuestions, questionsByExamTypeID } from '../../graphql/queries';

// Types
interface ExamInput {
  name: string;
  description?: string;
  certificationId: string;
  passingScore: number;
  timeLimit: number;
}

interface CertificationInput {
  name: string;
  description?: string;
  provider: string;
}

interface Certification {
  id: string;
  name: string;
  description?: string;
  provider: string;
}

interface Question {
  id: string;
  text: string;
  options: Array<{id: string; text: string}>;
  correctAnswer: string;
  explanation?: string;
}

interface QuestionInput {
  text: string;
  options: Array<{id: string; text: string}>;
  correctAnswer: string;
  explanation?: string;
}

// Create a new exam
export async function createExam(examData: ExamInput): Promise<any> {
  try {
    const input = {
      name: examData.name,
      description: examData.description || null,
      certificationTypeID: examData.certificationId,
      passingScore: examData.passingScore,
      timeLimit: examData.timeLimit,
    };

    const response = await API.graphql({
      query: createExamType,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS', // Requires authenticated user
    }) as GraphQLResult<any>;

    return response.data?.createExamType;
  } catch (error) {
    console.error('Error creating exam:', error);
    throw new Error('Failed to create exam. Please try again.');
  }
}

// Create a new certification
export async function createCertification(certData: CertificationInput): Promise<any> {
  try {
    const input = {
      name: certData.name,
      description: certData.description || null,
      provider: certData.provider,
    };

    const response = await API.graphql({
      query: createCertificationType,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS', // Requires authenticated user
    }) as GraphQLResult<any>;

    return response.data?.createCertificationType;
  } catch (error) {
    console.error('Error creating certification:', error);
    throw new Error('Failed to create certification. Please try again.');
  }
}

// Get all certifications
export async function getCertifications(): Promise<Certification[]> {
  try {
    // For now, return mock data until the schema is properly deployed
    return [
      {
        id: 'aws-sa',
        name: 'AWS Solutions Architect Associate',
        description: 'Certification for AWS Solutions Architect Associate',
        provider: 'Amazon Web Services'
      },
      {
        id: 'azure-admin',
        name: 'Microsoft Azure Administrator',
        description: 'Certification for Microsoft Azure Administrator',
        provider: 'Microsoft'
      }
    ];
    
    // Uncomment this when the schema is properly deployed
    /*
    const response = await API.graphql({
      query: listCertificationTypes,
      authMode: 'AMAZON_COGNITO_USER_POOLS', // Requires authenticated user
    }) as GraphQLResult<any>;

    return response.data?.listCertificationTypes?.items || [];
    */
  } catch (error) {
    console.error('Error fetching certifications:', error);
    throw new Error('Failed to fetch certifications. Please try again.');
  }
}

// Get all exams
export async function getExams(): Promise<any[]> {
  try {
    // For now, return mock data
    return [
      {
        id: 'aws-sa-exam',
        name: 'AWS Solutions Architect Associate',
        description: 'Practice exam for AWS Solutions Architect Associate',
        certificationId: 'aws-sa',
        passingScore: 70,
        timeLimit: 130
      },
      {
        id: 'azure-admin-exam',
        name: 'Microsoft Azure Administrator',
        description: 'Practice exam for Microsoft Azure Administrator',
        certificationId: 'azure-admin',
        passingScore: 70,
        timeLimit: 120
      }
    ];
    
    // Uncomment this when the schema is properly deployed
    /*
    const response = await API.graphql({
      query: listExamTypes,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    return response.data?.listExamTypes?.items || [];
    */
  } catch (error) {
    console.error('Error fetching exams:', error);
    throw new Error('Failed to fetch exams. Please try again.');
  }
}

// Get questions for a specific exam
export async function getExamQuestions(examId: string): Promise<Question[]> {
  try {
    // For now, return mock data
    if (examId === 'aws-sa-exam') {
      return [
        {
          id: 'q1',
          text: 'Which AWS service would you use to run containers without managing servers or clusters?',
          options: [
            { id: 'a', text: 'Amazon ECS' },
            { id: 'b', text: 'Amazon EKS' },
            { id: 'c', text: 'AWS Fargate' },
            { id: 'd', text: 'AWS Lambda' }
          ],
          correctAnswer: 'c',
          explanation: 'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS.'
        },
        {
          id: 'q2',
          text: 'A company needs to store sensitive data with strict compliance requirements. Which AWS service provides a managed hardware security module (HSM)?',
          options: [
            { id: 'a', text: 'AWS KMS' },
            { id: 'b', text: 'AWS CloudHSM' },
            { id: 'c', text: 'AWS Secrets Manager' },
            { id: 'd', text: 'AWS Certificate Manager' }
          ],
          correctAnswer: 'b',
          explanation: 'AWS CloudHSM provides managed hardware security modules in the AWS Cloud.'
        }
      ];
    } else if (examId === 'azure-admin-exam') {
      return [
        {
          id: 'q3',
          text: 'Which Azure service should you use to store unstructured data such as documents and media files?',
          options: [
            { id: 'a', text: 'Azure SQL Database' },
            { id: 'b', text: 'Azure Cosmos DB' },
            { id: 'c', text: 'Azure Blob Storage' },
            { id: 'd', text: 'Azure Table Storage' }
          ],
          correctAnswer: 'c',
          explanation: 'Azure Blob Storage is optimized for storing massive amounts of unstructured data.'
        }
      ];
    }
    
    return [];
    
    // Uncomment this when the schema is properly deployed
    /*
    const response = await API.graphql({
      query: questionsByExamTypeID,
      variables: { examTypeID: examId },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    const questions = response.data?.questionsByExamTypeID?.items || [];
    
    return questions.map(q => ({
      id: q.id,
      text: q.text,
      options: q.options || [],
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }));
    */
  } catch (error) {
    console.error('Error fetching exam questions:', error);
    throw new Error('Failed to fetch exam questions. Please try again.');
  }
}

// Add a question to an exam
export async function addQuestionToExam(examId: string, question: QuestionInput): Promise<any> {
  try {
    const input = {
      text: question.text,
      options: question.options,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation || null,
      examTypeID: examId,
    };

    // For now, just log the question that would be added
    console.log('Adding question to exam:', examId, input);
    return { id: 'new-question-id', ...input };
    
    // Uncomment this when the schema is properly deployed
    /*
    const response = await API.graphql({
      query: createQuestion,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    return response.data?.createQuestion;
    */
  } catch (error) {
    console.error('Error adding question to exam:', error);
    throw new Error('Failed to add question. Please try again.');
  }
}

// Remove a question from an exam
export async function removeQuestionFromExam(examId: string, questionId: string): Promise<void> {
  try {
    // For now, just log the question that would be removed
    console.log('Removing question from exam:', examId, questionId);
    
    // Uncomment this when the schema is properly deployed
    /*
    const response = await API.graphql({
      query: deleteQuestion,
      variables: { input: { id: questionId } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;
    */
  } catch (error) {
    console.error('Error removing question from exam:', error);
    throw new Error('Failed to remove question. Please try again.');
  }
}
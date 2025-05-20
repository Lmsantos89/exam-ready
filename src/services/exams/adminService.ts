import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api';
import { 
  createExam, 
  createCertification,
  createQuestion, 
  deleteQuestion, 
  updateExam, 
  updateCertification,
  deleteExam,
  deleteCertification
} from '../../graphql/mutations';
import { 
  listExams,
  listCertifications,
  questionsByExamID 
} from '../../graphql/queries';

// Types
interface ExamInput {
  name: string;
  description?: string;
  certificationID: string;
  passingScore?: number;
  timeLimit?: number;
}

interface ExamUpdateInput {
  id: string;
  name?: string;
  description?: string;
  passingScore?: number;
  timeLimit?: number;
}

interface CertificationInput {
  name: string;
  description?: string;
  provider: string;
}

interface CertificationUpdateInput {
  id: string;
  name?: string;
  description?: string;
  provider?: string;
}

interface Certification {
  id: string;
  name: string;
  description?: string;
  provider: string;
}

interface Exam {
  id: string;
  name: string;
  description?: string;
  certificationID: string;
  passingScore?: number;
  timeLimit?: number;
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
  examID: string;
}

// Create a new exam
export async function createNewExam(examData: ExamInput): Promise<any> {
  try {
    const input = {
      name: examData.name,
      description: examData.description || null,
      certificationID: examData.certificationID,
      passingScore: examData.passingScore || 70,
      timeLimit: examData.timeLimit || 120,
    };

    const response = await API.graphql({
      query: createExam,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS', // Requires authenticated user
    }) as GraphQLResult<any>;

    return response.data?.createExam;
  } catch (error) {
    console.error('Error creating exam:', error);
    throw new Error('Failed to create exam. Please try again.');
  }
}

// Update an existing exam
export async function updateExistingExam(examData: ExamUpdateInput): Promise<any> {
  try {
    // First, get the current version of the exam
    const getExamResponse = await API.graphql({
      query: `query GetExam($id: ID!) {
        getExam(id: $id) {
          id
          _version
        }
      }`,
      variables: { id: examData.id },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;
    
    const currentVersion = getExamResponse.data?.getExam?._version;
    
    if (!currentVersion) {
      throw new Error('Could not retrieve current exam version');
    }
    
    const input = {
      id: examData.id,
      name: examData.name,
      description: examData.description,
      passingScore: examData.passingScore,
      timeLimit: examData.timeLimit,
      _version: currentVersion
    };

    const response = await API.graphql({
      query: updateExam,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    return response.data?.updateExam;
  } catch (error) {
    console.error('Error updating exam:', error);
    throw new Error('Failed to update exam. Please try again.');
  }
}

// Delete an exam
export async function deleteExistingExam(examId: string): Promise<any> {
  try {
    // First, get the current version of the exam
    const getExamResponse = await API.graphql({
      query: `query GetExam($id: ID!) {
        getExam(id: $id) {
          id
          _version
        }
      }`,
      variables: { id: examId },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;
    
    const exam = getExamResponse.data?.getExam;
    
    if (!exam) {
      throw new Error('Could not retrieve exam');
    }
    
    // Get all questions for this exam
    const questionsResponse = await API.graphql({
      query: questionsByExamID,
      variables: { examID: examId },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;
    
    const questions = questionsResponse.data?.questionsByExamID?.items || [];
    
    // Delete all questions for this exam
    for (const question of questions) {
      await API.graphql({
        query: deleteQuestion,
        variables: { 
          input: { 
            id: question.id,
            _version: question._version 
          } 
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
    }
    
    // Now delete the exam
    const response = await API.graphql({
      query: deleteExam,
      variables: { 
        input: { 
          id: examId,
          _version: exam._version 
        } 
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    return response.data?.deleteExam;
  } catch (error) {
    console.error('Error deleting exam:', error);
    throw new Error('Failed to delete exam. Please try again.');
  }
}

// Create a new certification
export async function createNewCertification(certData: CertificationInput): Promise<any> {
  try {
    const input = {
      name: certData.name,
      description: certData.description || null,
      provider: certData.provider,
    };

    const response = await API.graphql({
      query: createCertification,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS', // Requires authenticated user
    }) as GraphQLResult<any>;

    return response.data?.createCertification;
  } catch (error) {
    console.error('Error creating certification:', error);
    throw new Error('Failed to create certification. Please try again.');
  }
}

// Update an existing certification
export async function updateExistingCertification(certData: CertificationUpdateInput): Promise<any> {
  try {
    // First, get the current version of the certification
    const getCertResponse = await API.graphql({
      query: `query GetCertification($id: ID!) {
        getCertification(id: $id) {
          id
          _version
        }
      }`,
      variables: { id: certData.id },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;
    
    const currentVersion = getCertResponse.data?.getCertification?._version;
    
    if (!currentVersion) {
      throw new Error('Could not retrieve current certification version');
    }
    
    const input = {
      id: certData.id,
      name: certData.name,
      description: certData.description,
      provider: certData.provider,
      _version: currentVersion
    };

    const response = await API.graphql({
      query: updateCertification,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    return response.data?.updateCertification;
  } catch (error) {
    console.error('Error updating certification:', error);
    throw new Error('Failed to update certification. Please try again.');
  }
}

// Delete a certification
export async function deleteExistingCertification(certId: string): Promise<any> {
  try {
    // First, get the current version of the certification
    const getCertResponse = await API.graphql({
      query: `query GetCertification($id: ID!) {
        getCertification(id: $id) {
          id
          _version
          exams {
            items {
              id
              _version
            }
          }
        }
      }`,
      variables: { id: certId },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;
    
    const certification = getCertResponse.data?.getCertification;
    
    if (!certification) {
      throw new Error('Could not retrieve certification');
    }
    
    // Delete all associated exams first
    const exams = certification.exams?.items || [];
    for (const exam of exams) {
      // Get all questions for this exam
      const questionsResponse = await API.graphql({
        query: questionsByExamID,
        variables: { examID: exam.id },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      }) as GraphQLResult<any>;
      
      const questions = questionsResponse.data?.questionsByExamID?.items || [];
      
      // Delete all questions for this exam
      for (const question of questions) {
        await API.graphql({
          query: deleteQuestion,
          variables: { 
            input: { 
              id: question.id,
              _version: question._version 
            } 
          },
          authMode: 'AMAZON_COGNITO_USER_POOLS',
        });
      }
      
      // Now delete the exam
      await API.graphql({
        query: deleteExam,
        variables: { 
          input: { 
            id: exam.id,
            _version: exam._version 
          } 
        },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
    }
    
    // Finally, delete the certification
    const response = await API.graphql({
      query: deleteCertification,
      variables: { 
        input: { 
          id: certId,
          _version: certification._version 
        } 
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    return response.data?.deleteCertification;
  } catch (error) {
    console.error('Error deleting certification:', error);
    throw new Error('Failed to delete certification. Please try again.');
  }
}

// Get all certifications
export async function getCertifications(): Promise<Certification[]> {
  try {
    const response = await API.graphql({
      query: listCertifications,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    const items = response.data?.listCertifications?.items || [];
    
    return items.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description || '',
      provider: item.provider || 'Unknown'
    }));
  } catch (error) {
    console.error('Error fetching certifications:', error);
    // Fallback to mock data if API call fails
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
  }
}

// Get all exams
export async function getExams(): Promise<Exam[]> {
  try {
    const response = await API.graphql({
      query: listExams,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    const items = response.data?.listExams?.items || [];
    
    return items.map((item: any) => ({
      id: item.id,
      name: item.name,
      description: item.description || '',
      certificationID: item.certificationID,
      passingScore: item.passingScore || 70,
      timeLimit: item.timeLimit || 120
    }));
  } catch (error) {
    console.error('Error fetching exams:', error);
    // Fallback to mock data if API call fails
    return [
      {
        id: 'aws-sa-exam',
        name: 'AWS Solutions Architect Associate',
        description: 'Practice exam for AWS Solutions Architect Associate',
        certificationID: 'aws-sa',
        passingScore: 70,
        timeLimit: 130
      },
      {
        id: 'azure-admin-exam',
        name: 'Microsoft Azure Administrator',
        description: 'Practice exam for Microsoft Azure Administrator',
        certificationID: 'azure-admin',
        passingScore: 70,
        timeLimit: 120
      }
    ];
  }
}

// Get questions for a specific exam
export async function getExamQuestions(examId: string): Promise<Question[]> {
  try {
    const response = await API.graphql({
      query: questionsByExamID,
      variables: { examID: examId },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    const questions = response.data?.questionsByExamID?.items || [];
    
    return questions.map((q: any) => ({
      id: q.id,
      text: q.text,
      options: q.options || [],
      correctAnswer: q.correctAnswer,
      explanation: q.explanation
    }));
  } catch (error) {
    console.error('Error fetching exam questions:', error);
    // Fallback to mock data if API call fails
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
      examID: examId,
    };

    const response = await API.graphql({
      query: createQuestion,
      variables: { input },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;

    return response.data?.createQuestion;
  } catch (error) {
    console.error('Error adding question to exam:', error);
    throw new Error('Failed to add question. Please try again.');
  }
}

// Remove a question from an exam
export async function removeQuestionFromExam(examId: string, questionId: string): Promise<void> {
  try {
    const response = await API.graphql({
      query: deleteQuestion,
      variables: { input: { id: questionId } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    }) as GraphQLResult<any>;
    
    return response.data?.deleteQuestion;
  } catch (error) {
    console.error('Error removing question from exam:', error);
    throw new Error('Failed to remove question. Please try again.');
  }
}
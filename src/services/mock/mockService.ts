import { 
  mockProviders, 
  mockCertifications, 
  mockExams, 
  mockQuestions, 
  mockUsers, 
  mockExamAttempts 
} from '../../mocks/mockData';

// Mock service functions for local development

// Provider functions
export const getProviders = async () => {
  return mockProviders;
};

export const getProviderById = async (id: string) => {
  return mockProviders.find(provider => provider.id === id);
};

// Certification functions
export const getCertifications = async () => {
  return mockCertifications;
};

export const getCertificationById = async (id: string) => {
  return mockCertifications.find(cert => cert.id === id);
};

export const getCertificationsByProvider = async (providerId: string) => {
  return mockCertifications.filter(cert => cert.providerID === providerId);
};

// Exam functions
export const getExams = async () => {
  return mockExams.map(exam => {
    const certification = mockCertifications.find(cert => cert.id === exam.certificationID);
    return {
      ...exam,
      certification,
      questions: {
        items: mockQuestions.filter(q => q.examID === exam.id)
      }
    };
  });
};

export const getExamById = async (id: string) => {
  const exam = mockExams.find(exam => exam.id === id);
  if (!exam) return null;
  
  return {
    ...exam,
    certification: mockCertifications.find(cert => cert.id === exam.certificationID),
    questions: {
      items: mockQuestions.filter(q => q.examID === exam.id)
    }
  };
};

export const getExamsByCertification = async (certificationId: string) => {
  return mockExams.filter(exam => exam.certificationID === certificationId);
};

// Question functions
export const getQuestionsByExamId = async (examId: string) => {
  return mockQuestions.filter(question => question.examID === examId);
};

// User functions
export const getCurrentUser = async () => {
  return mockUsers[0];
};

// Exam attempt functions
export const getExamAttemptsByUser = async (userId: string) => {
  return mockExamAttempts.filter(attempt => attempt.userID === userId);
};

export const saveExamAttempt = async (attempt: any) => {
  return {
    ...attempt,
    id: `attempt-${Date.now()}`,
    createdAt: new Date().toISOString()
  };
};

// AI Question generation
export const generateQuestion = async (params: any) => {
  const { examId, topic, difficulty } = params;
  
  return {
    id: `ai-question-${Date.now()}`,
    text: `Sample AI-generated question about ${topic || 'general knowledge'} with ${difficulty || 'intermediate'} difficulty`,
    options: [
      { id: 'a', text: 'First option' },
      { id: 'b', text: 'Second option' },
      { id: 'c', text: 'Third option' },
      { id: 'd', text: 'Fourth option' }
    ],
    correctAnswer: 'b',
    explanation: 'This is a sample explanation for the AI-generated question.',
    difficulty: difficulty || 'intermediate',
    examID: examId,
    isAIGenerated: true,
    topic: topic || 'General'
  };
};
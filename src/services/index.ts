// Service exports based on environment
import * as mockServices from './mock/mockService';

// For local development, always use mock services
export const {
  // Provider services
  getProviders,
  getProviderById,
  
  // Certification services
  getCertifications,
  getCertificationById,
  getCertificationsByProvider,
  
  // Exam services
  getExams,
  getExamById,
  getExamsByCertification,
  
  // Question services
  getQuestionsByExamId,
  
  // User services
  getCurrentUser,
  
  // Exam attempt services
  getExamAttemptsByUser,
  saveExamAttempt,
  
  // AI services
  generateQuestion
} = mockServices;
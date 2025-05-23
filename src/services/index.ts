// Service exports using real API services
import * as apiServices from './exams/examService';
import * as userServices from './exams/userService';
import * as adminServices from './exams/adminService';
import * as aiServices from './ai/questionGenerator';

// Export all services
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
} = apiServices;

export const {
  // User services
  getCurrentUser,
  
  // Exam attempt services
  getExamAttemptsByUser,
  saveExamAttempt,
} = userServices;

export const {
  // Admin services
  createNewProvider,
  updateExistingProvider,
  deleteExistingProvider,
  createNewCertification,
  updateExistingCertification,
  deleteExistingCertification,
  createNewExam,
  updateExistingExam,
  deleteExistingExam,
} = adminServices;

export const {
  // AI services
  generateQuestion
} = aiServices;
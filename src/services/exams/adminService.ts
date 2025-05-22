// Mock admin service for local development
import { mockProviders, mockCertifications, mockExams } from '../../mocks/mockData';

// Provider functions
export const getProviders = async () => {
  return mockProviders;
};

export const createNewProvider = async (provider: any) => {
  return {
    ...provider,
    id: `provider-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

export const updateExistingProvider = async (provider: any) => {
  return {
    ...provider,
    updatedAt: new Date().toISOString()
  };
};

export const deleteExistingProvider = async (id: string) => {
  return { success: true };
};

// Certification functions
export const getCertifications = async () => {
  return mockCertifications;
};

export const createNewCertification = async (certification: any) => {
  return {
    ...certification,
    id: `cert-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

export const updateExistingCertification = async (certification: any) => {
  return {
    ...certification,
    updatedAt: new Date().toISOString()
  };
};

export const deleteExistingCertification = async (id: string) => {
  return { success: true };
};

// Exam functions
export const getExams = async () => {
  return mockExams;
};

export const createNewExam = async (exam: any) => {
  return {
    ...exam,
    id: `exam-${Date.now()}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
};

export const updateExistingExam = async (exam: any) => {
  return {
    ...exam,
    updatedAt: new Date().toISOString()
  };
};

export const deleteExistingExam = async (id: string) => {
  return { success: true };
};
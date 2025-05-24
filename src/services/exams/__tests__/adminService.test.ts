import { client } from '../../../lib/amplifyConfig';
import { 
  updateExistingCertification, 
  deleteExistingCertification,
  updateExistingExam,
  deleteExistingExam
} from '../adminService';

// Mock the Amplify client
jest.mock('../../../lib/amplifyConfig', () => ({
  client: {
    graphql: jest.fn()
  }
}));

describe('Admin Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('updateExistingCertification', () => {
    it('should fetch the current version and update the certification', async () => {
      // Mock the client.graphql responses
      (client.graphql as jest.Mock).mockImplementation((params) => {
        if (params.query.includes('GetCertification')) {
          return Promise.resolve({
            data: {
              getCertification: {
                id: 'test-cert-id',
                _version: 1
              }
            }
          });
        } else {
          return Promise.resolve({
            data: {
              updateCertification: {
                id: 'test-cert-id',
                name: 'Updated Cert',
                description: 'Updated Description',
                provider: 'Updated Provider',
                _version: 2
              }
            }
          });
        }
      });

      const certData = {
        id: 'test-cert-id',
        name: 'Updated Cert',
        description: 'Updated Description',
        provider: 'Updated Provider'
      };

      const result = await updateExistingCertification(certData);

      // Verify API was called with correct parameters
      expect(client.graphql).toHaveBeenCalledTimes(2);
      
      // Check the second call (update call)
      const updateCall = (client.graphql as jest.Mock).mock.calls[1];
      expect(updateCall[0].variables.input).toEqual({
        id: 'test-cert-id',
        name: 'Updated Cert',
        description: 'Updated Description',
        provider: 'Updated Provider',
        _version: 1
      });

      // Check the result
      expect(result).toEqual({
        id: 'test-cert-id',
        name: 'Updated Cert',
        description: 'Updated Description',
        provider: 'Updated Provider',
        _version: 2
      });
    });

    it('should throw an error if certification version cannot be retrieved', async () => {
      // Mock the client.graphql response for a failed version retrieval
      (client.graphql as jest.Mock).mockResolvedValueOnce({
        data: {
          getCertification: null
        }
      });

      const certData = {
        id: 'test-cert-id',
        name: 'Updated Cert',
        description: 'Updated Description',
        provider: 'Updated Provider'
      };

      await expect(updateExistingCertification(certData)).rejects.toThrow(
        'Could not retrieve current certification version'
      );
    });
  });

  describe('deleteExistingCertification', () => {
    it('should delete associated exams and questions before deleting the certification', async () => {
      // Mock the client.graphql responses
      (client.graphql as jest.Mock).mockImplementation((params) => {
        if (params.query.includes('GetCertification')) {
          return Promise.resolve({
            data: {
              getCertification: {
                id: 'test-cert-id',
                _version: 1,
                exams: {
                  items: [
                    { id: 'exam-1', _version: 1 },
                    { id: 'exam-2', _version: 1 }
                  ]
                }
              }
            }
          });
        } else if (params.query.includes('questionsByExamID')) {
          return Promise.resolve({
            data: {
              questionsByExamID: {
                items: [
                  { id: 'question-1', _version: 1 },
                  { id: 'question-2', _version: 1 }
                ]
              }
            }
          });
        } else if (params.query.includes('deleteQuestion')) {
          return Promise.resolve({
            data: {
              deleteQuestion: { id: params.variables.input.id }
            }
          });
        } else if (params.query.includes('deleteExam')) {
          return Promise.resolve({
            data: {
              deleteExam: { id: params.variables.input.id }
            }
          });
        } else if (params.query.includes('deleteCertification')) {
          return Promise.resolve({
            data: {
              deleteCertification: { id: 'test-cert-id' }
            }
          });
        }
      });

      const result = await deleteExistingCertification('test-cert-id');

      // Verify API was called the correct number of times
      // 1 for getCertification + 2 for questionsByExamID + 4 for deleteQuestion + 2 for deleteExam + 1 for deleteCertification
      expect(client.graphql).toHaveBeenCalledTimes(10);

      // Check the final call (delete certification)
      const deleteCall = (client.graphql as jest.Mock).mock.calls[9];
      expect(deleteCall[0].variables.input).toEqual({
        id: 'test-cert-id',
        _version: 1
      });

      // Check the result
      expect(result).toEqual({ id: 'test-cert-id' });
    });
  });

  describe('updateExistingExam', () => {
    it('should fetch the current version and update the exam', async () => {
      // Mock the client.graphql responses
      (client.graphql as jest.Mock).mockImplementation((params) => {
        if (params.query.includes('GetExam')) {
          return Promise.resolve({
            data: {
              getExam: {
                id: 'test-exam-id',
                _version: 1
              }
            }
          });
        } else {
          return Promise.resolve({
            data: {
              updateExam: {
                id: 'test-exam-id',
                name: 'Updated Exam',
                description: 'Updated Description',
                passingScore: 80,
                timeLimit: 90,
                _version: 2
              }
            }
          });
        }
      });

      const examData = {
        id: 'test-exam-id',
        name: 'Updated Exam',
        description: 'Updated Description',
        passingScore: 80,
        timeLimit: 90
      };

      const result = await updateExistingExam(examData);

      // Verify API was called with correct parameters
      expect(client.graphql).toHaveBeenCalledTimes(2);
      
      // Check the second call (update call)
      const updateCall = (client.graphql as jest.Mock).mock.calls[1];
      expect(updateCall[0].variables.input).toEqual({
        id: 'test-exam-id',
        name: 'Updated Exam',
        description: 'Updated Description',
        passingScore: 80,
        timeLimit: 90,
        _version: 1
      });

      // Check the result
      expect(result).toEqual({
        id: 'test-exam-id',
        name: 'Updated Exam',
        description: 'Updated Description',
        passingScore: 80,
        timeLimit: 90,
        _version: 2
      });
    });
  });

  describe('deleteExistingExam', () => {
    it('should delete associated questions before deleting the exam', async () => {
      // Mock the client.graphql responses
      (client.graphql as jest.Mock).mockImplementation((params) => {
        if (params.query.includes('GetExam')) {
          return Promise.resolve({
            data: {
              getExam: {
                id: 'test-exam-id',
                _version: 1
              }
            }
          });
        } else if (params.query.includes('questionsByExamID')) {
          return Promise.resolve({
            data: {
              questionsByExamID: {
                items: [
                  { id: 'question-1', _version: 1 },
                  { id: 'question-2', _version: 1 }
                ]
              }
            }
          });
        } else if (params.query.includes('deleteQuestion')) {
          return Promise.resolve({
            data: {
              deleteQuestion: { id: params.variables.input.id }
            }
          });
        } else if (params.query.includes('deleteExam')) {
          return Promise.resolve({
            data: {
              deleteExam: { id: 'test-exam-id' }
            }
          });
        }
      });

      const result = await deleteExistingExam('test-exam-id');

      // Verify API was called the correct number of times
      // 1 for getExam + 1 for questionsByExamID + 2 for deleteQuestion + 1 for deleteExam
      expect(client.graphql).toHaveBeenCalledTimes(5);

      // Check the final call (delete exam)
      const deleteCall = (client.graphql as jest.Mock).mock.calls[4];
      expect(deleteCall[0].variables.input).toEqual({
        id: 'test-exam-id',
        _version: 1
      });

      // Check the result
      expect(result).toEqual({ id: 'test-exam-id' });
    });
  });
});
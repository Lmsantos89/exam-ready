// Mock data for local development

export const mockProviders = [
  {
    id: 'provider-1',
    name: 'AWS',
    website: 'https://aws.amazon.com/certification/'
  },
  {
    id: 'provider-2',
    name: 'Microsoft',
    website: 'https://learn.microsoft.com/en-us/certifications/'
  }
];

export const mockCertifications = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect',
    description: 'Validate technical expertise in designing and deploying scalable systems on AWS',
    code: 'SAA-C03',
    providerID: 'provider-1'
  },
  {
    id: 'cert-2',
    name: 'Microsoft Azure Administrator',
    description: 'Validate the skills and knowledge to implement, manage, and monitor an organization\'s Microsoft Azure environment',
    code: 'AZ-104',
    providerID: 'provider-2'
  }
];

export const mockExams = [
  {
    id: 'exam-1',
    name: 'AWS Solutions Architect Practice Exam',
    description: 'Practice exam for AWS Solutions Architect certification',
    passingScore: 72,
    timeLimit: 130,
    certificationID: 'cert-1'
  },
  {
    id: 'exam-2',
    name: 'Azure Administrator Practice Exam',
    description: 'Practice exam for Azure Administrator certification',
    passingScore: 70,
    timeLimit: 120,
    certificationID: 'cert-2'
  }
];

export const mockQuestions = [
  {
    id: 'question-1',
    text: 'Which AWS service would you use to run containers without managing servers or clusters?',
    options: [
      { id: 'a', text: 'Amazon ECS' },
      { id: 'b', text: 'Amazon EKS' },
      { id: 'c', text: 'AWS Fargate' },
      { id: 'd', text: 'AWS Lambda' }
    ],
    correctAnswer: 'c',
    explanation: 'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS.',
    difficulty: 'intermediate',
    examID: 'exam-1',
    isAIGenerated: false,
    topic: 'Compute'
  },
  {
    id: 'question-2',
    text: 'Which Azure service provides a global, high-availability DNS service?',
    options: [
      { id: 'a', text: 'Azure DNS' },
      { id: 'b', text: 'Azure Traffic Manager' },
      { id: 'c', text: 'Azure Front Door' },
      { id: 'd', text: 'Azure CDN' }
    ],
    correctAnswer: 'a',
    explanation: 'Azure DNS is a hosting service for DNS domains that provides name resolution using Microsoft Azure infrastructure.',
    difficulty: 'beginner',
    examID: 'exam-2',
    isAIGenerated: false,
    topic: 'Networking'
  }
];

export const mockUsers = [
  {
    id: 'user-1',
    email: 'test@example.com',
    name: 'Test User'
  }
];

export const mockExamAttempts = [
  {
    id: 'attempt-1',
    userID: 'user-1',
    examID: 'exam-1',
    score: 80,
    completedAt: '2023-05-15T14:30:00Z',
    answers: [
      {
        questionID: 'question-1',
        selectedOption: 'c',
        isCorrect: true
      }
    ]
  }
];
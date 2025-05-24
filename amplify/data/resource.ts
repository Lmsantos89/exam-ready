import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Provider: a
    .model({
      id: a.id(),
      name: a.string().required(),
      website: a.string(),
      certifications: a.hasMany('Certification', { indexName: 'byProvider', fields: ['id'] })
    })
    .authorization([
      a.allow.public().to(['read']),
      a.allow.group('admin').to(['create', 'update', 'delete', 'read'])
    ]),

  Certification: a
    .model({
      id: a.id(),
      name: a.string().required(),
      description: a.string(),
      code: a.string(),
      providerID: a.string().required(),
      provider: a.belongsTo('Provider', { fields: ['providerID'] }),
      exams: a.hasMany('Exam', { indexName: 'byCertification', fields: ['id'] })
    })
    .authorization([
      a.allow.public().to(['read']),
      a.allow.group('admin').to(['create', 'update', 'delete', 'read'])
    ]),

  Exam: a
    .model({
      id: a.id(),
      name: a.string().required(),
      description: a.string(),
      passingScore: a.float(),
      timeLimit: a.integer(),
      certificationID: a.string().required(),
      questions: a.hasMany('Question', { indexName: 'byExam', fields: ['id'] })
    })
    .authorization([
      a.allow.public().to(['read']),
      a.allow.group('admin').to(['create', 'update', 'delete', 'read'])
    ]),

  Question: a
    .model({
      id: a.id(),
      text: a.string().required(),
      options: a.array(
        a.object({
          id: a.string().required(),
          text: a.string().required()
        })
      ),
      correctAnswer: a.string().required(),
      explanation: a.string(),
      difficulty: a.string(),
      examID: a.string().required(),
      isAIGenerated: a.boolean(),
      topic: a.string()
    })
    .authorization([
      a.allow.public().to(['read']),
      a.allow.group('admin').to(['create', 'update', 'delete', 'read'])
    ]),

  User: a
    .model({
      id: a.id(),
      email: a.string().required(),
      name: a.string(),
      examAttempts: a.hasMany('ExamAttempt')
    })
    .authorization([a.allow.owner()]),

  ExamAttempt: a
    .model({
      id: a.id(),
      userID: a.string().required(),
      examID: a.string().required(),
      score: a.float(),
      completedAt: a.datetime(),
      answers: a.array(
        a.object({
          questionID: a.string().required(),
          selectedOption: a.string(),
          isCorrect: a.boolean()
        })
      )
    })
    .authorization([a.allow.owner()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30
    }
  },
  resourceName: {
    dynamoDbTable: 'examready-staging-table',
    apiName: 'examready-staging-api'
  }
});
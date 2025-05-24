import { defineData } from '@aws-amplify/backend';

export const data = defineData({
  schema: `
    # Provider model
    type Provider @model 
      @auth(rules: [
        { allow: public, operations: [read] },
        { allow: groups, groups: ["admin"], operations: [create, update, delete, read] }
      ]) {
      id: ID!
      name: String!
      website: String
      certifications: [Certification] @hasMany(indexName: "byProvider", fields: ["id"])
    }

    # Certification model
    type Certification @model 
      @auth(rules: [
        { allow: public, operations: [read] },
        { allow: groups, groups: ["admin"], operations: [create, update, delete, read] }
      ]) {
      id: ID!
      name: String!
      description: String
      code: String
      providerID: ID! @index(name: "byProvider")
      provider: Provider @belongsTo(fields: ["providerID"])
      exams: [Exam] @hasMany(indexName: "byCertification", fields: ["id"])
    }

    # Exam model
    type Exam @model 
      @auth(rules: [
        { allow: public, operations: [read] },
        { allow: groups, groups: ["admin"], operations: [create, update, delete, read] }
      ]) {
      id: ID!
      name: String!
      description: String
      passingScore: Float
      timeLimit: Int
      certificationID: ID! @index(name: "byCertification")
      certification: Certification @belongsTo(fields: ["certificationID"])
      questions: [Question] @hasMany(indexName: "byExam", fields: ["id"])
    }

    # Question model
    type Question @model 
      @auth(rules: [
        { allow: public, operations: [read] },
        { allow: groups, groups: ["admin"], operations: [create, update, delete, read] }
      ]) {
      id: ID!
      text: String!
      options: [Option]
      correctAnswer: String!
      explanation: String
      difficulty: String
      examID: ID! @index(name: "byExam")
      exam: Exam @belongsTo(fields: ["examID"])
      isAIGenerated: Boolean
      topic: String
    }

    # Option type (not a model)
    type Option {
      id: String!
      text: String!
    }

    # User model
    type User @model @auth(rules: [{ allow: owner }]) {
      id: ID!
      email: String!
      name: String
      examAttempts: [ExamAttempt] @hasMany(indexName: "byUser", fields: ["id"])
    }

    # ExamAttempt model
    type ExamAttempt @model 
      @auth(rules: [{ allow: owner }]) {
      id: ID!
      userID: ID! @index(name: "byUser")
      user: User @belongsTo(fields: ["userID"])
      examID: ID! @index(name: "byExam")
      exam: Exam @belongsTo(fields: ["examID"])
      score: Float
      completedAt: AWSDateTime
      answers: [Answer]
    }

    # Answer type (not a model)
    type Answer {
      questionID: ID!
      selectedOption: String
      isCorrect: Boolean
    }
  `,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30
    }
  }
});
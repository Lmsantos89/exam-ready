/* eslint-disable */
// This file was automatically generated and should not be edited.

export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
      id
      name
      website
      certifications {
        items {
          id
          name
          description
          code
          providerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        website
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getCertification = /* GraphQL */ `
  query GetCertification($id: ID!) {
    getCertification(id: $id) {
      id
      name
      description
      code
      providerID
      provider {
        id
        name
        website
        createdAt
        updatedAt
      }
      exams {
        items {
          id
          name
          description
          passingScore
          timeLimit
          certificationID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listCertifications = /* GraphQL */ `
  query ListCertifications(
    $filter: ModelCertificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        code
        providerID
        provider {
          id
          name
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getExam = /* GraphQL */ `
  query GetExam($id: ID!) {
    getExam(id: $id) {
      id
      name
      description
      passingScore
      timeLimit
      certificationID
      questions {
        items {
          id
          text
          options {
            id
            text
          }
          correctAnswer
          explanation
          difficulty
          examID
          isAIGenerated
          topic
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listExams = /* GraphQL */ `
  query ListExams(
    $filter: ModelExamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        passingScore
        timeLimit
        certificationID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      text
      options {
        id
        text
      }
      correctAnswer
      explanation
      difficulty
      examID
      isAIGenerated
      topic
      createdAt
      updatedAt
    }
  }
`;

export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        options {
          id
          text
        }
        correctAnswer
        explanation
        difficulty
        examID
        isAIGenerated
        topic
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      examAttempts {
        items {
          id
          userID
          examID
          score
          completedAt
          answers {
            questionID
            selectedOption
            isCorrect
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const getExamAttempt = /* GraphQL */ `
  query GetExamAttempt($id: ID!) {
    getExamAttempt(id: $id) {
      id
      userID
      examID
      score
      completedAt
      answers {
        questionID
        selectedOption
        isCorrect
      }
      createdAt
      updatedAt
    }
  }
`;

export const listExamAttempts = /* GraphQL */ `
  query ListExamAttempts(
    $filter: ModelExamAttemptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExamAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        examID
        score
        completedAt
        answers {
          questionID
          selectedOption
          isCorrect
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
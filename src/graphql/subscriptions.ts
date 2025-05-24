/* eslint-disable */
// This file was automatically generated and should not be edited.

export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onCreateProvider(filter: $filter) {
      id
      name
      website
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider($filter: ModelSubscriptionProviderFilterInput) {
    onUpdateProvider(filter: $filter) {
      id
      name
      website
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider($filter: ModelSubscriptionProviderFilterInput) {
    onDeleteProvider(filter: $filter) {
      id
      name
      website
      createdAt
      updatedAt
    }
  }
`;

export const onCreateCertification = /* GraphQL */ `
  subscription OnCreateCertification(
    $filter: ModelSubscriptionCertificationFilterInput
  ) {
    onCreateCertification(filter: $filter) {
      id
      name
      description
      code
      providerID
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateCertification = /* GraphQL */ `
  subscription OnUpdateCertification(
    $filter: ModelSubscriptionCertificationFilterInput
  ) {
    onUpdateCertification(filter: $filter) {
      id
      name
      description
      code
      providerID
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteCertification = /* GraphQL */ `
  subscription OnDeleteCertification(
    $filter: ModelSubscriptionCertificationFilterInput
  ) {
    onDeleteCertification(filter: $filter) {
      id
      name
      description
      code
      providerID
      createdAt
      updatedAt
    }
  }
`;

export const onCreateExam = /* GraphQL */ `
  subscription OnCreateExam($filter: ModelSubscriptionExamFilterInput) {
    onCreateExam(filter: $filter) {
      id
      name
      description
      passingScore
      timeLimit
      certificationID
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateExam = /* GraphQL */ `
  subscription OnUpdateExam($filter: ModelSubscriptionExamFilterInput) {
    onUpdateExam(filter: $filter) {
      id
      name
      description
      passingScore
      timeLimit
      certificationID
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteExam = /* GraphQL */ `
  subscription OnDeleteExam($filter: ModelSubscriptionExamFilterInput) {
    onDeleteExam(filter: $filter) {
      id
      name
      description
      passingScore
      timeLimit
      certificationID
      createdAt
      updatedAt
    }
  }
`;

export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
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

export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
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

export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
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

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

export const onCreateExamAttempt = /* GraphQL */ `
  subscription OnCreateExamAttempt(
    $filter: ModelSubscriptionExamAttemptFilterInput
    $owner: String
  ) {
    onCreateExamAttempt(filter: $filter, owner: $owner) {
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

export const onUpdateExamAttempt = /* GraphQL */ `
  subscription OnUpdateExamAttempt(
    $filter: ModelSubscriptionExamAttemptFilterInput
    $owner: String
  ) {
    onUpdateExamAttempt(filter: $filter, owner: $owner) {
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

export const onDeleteExamAttempt = /* GraphQL */ `
  subscription OnDeleteExamAttempt(
    $filter: ModelSubscriptionExamAttemptFilterInput
    $owner: String
  ) {
    onDeleteExamAttempt(filter: $filter, owner: $owner) {
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
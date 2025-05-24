/* eslint-disable */
// This file was automatically generated and should not be edited.

export const createProvider = /* GraphQL */ `
  mutation CreateProvider(
    $input: CreateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    createProvider(input: $input, condition: $condition) {
      id
      name
      website
      createdAt
      updatedAt
    }
  }
`;

export const updateProvider = /* GraphQL */ `
  mutation UpdateProvider(
    $input: UpdateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    updateProvider(input: $input, condition: $condition) {
      id
      name
      website
      createdAt
      updatedAt
    }
  }
`;

export const deleteProvider = /* GraphQL */ `
  mutation DeleteProvider(
    $input: DeleteProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    deleteProvider(input: $input, condition: $condition) {
      id
      name
      website
      createdAt
      updatedAt
    }
  }
`;

export const createCertification = /* GraphQL */ `
  mutation CreateCertification(
    $input: CreateCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    createCertification(input: $input, condition: $condition) {
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

export const updateCertification = /* GraphQL */ `
  mutation UpdateCertification(
    $input: UpdateCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    updateCertification(input: $input, condition: $condition) {
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

export const deleteCertification = /* GraphQL */ `
  mutation DeleteCertification(
    $input: DeleteCertificationInput!
    $condition: ModelCertificationConditionInput
  ) {
    deleteCertification(input: $input, condition: $condition) {
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

export const createExam = /* GraphQL */ `
  mutation CreateExam(
    $input: CreateExamInput!
    $condition: ModelExamConditionInput
  ) {
    createExam(input: $input, condition: $condition) {
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

export const updateExam = /* GraphQL */ `
  mutation UpdateExam(
    $input: UpdateExamInput!
    $condition: ModelExamConditionInput
  ) {
    updateExam(input: $input, condition: $condition) {
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

export const deleteExam = /* GraphQL */ `
  mutation DeleteExam(
    $input: DeleteExamInput!
    $condition: ModelExamConditionInput
  ) {
    deleteExam(input: $input, condition: $condition) {
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

export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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

export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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

export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      name
      createdAt
      updatedAt
    }
  }
`;

export const createExamAttempt = /* GraphQL */ `
  mutation CreateExamAttempt(
    $input: CreateExamAttemptInput!
    $condition: ModelExamAttemptConditionInput
  ) {
    createExamAttempt(input: $input, condition: $condition) {
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

export const updateExamAttempt = /* GraphQL */ `
  mutation UpdateExamAttempt(
    $input: UpdateExamAttemptInput!
    $condition: ModelExamAttemptConditionInput
  ) {
    updateExamAttempt(input: $input, condition: $condition) {
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

export const deleteExamAttempt = /* GraphQL */ `
  mutation DeleteExamAttempt(
    $input: DeleteExamAttemptInput!
    $condition: ModelExamAttemptConditionInput
  ) {
    deleteExamAttempt(input: $input, condition: $condition) {
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
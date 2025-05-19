/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCertificationType = /* GraphQL */ `mutation CreateCertificationType(
  $input: CreateCertificationTypeInput!
  $condition: ModelCertificationTypeConditionInput
) {
  createCertificationType(input: $input, condition: $condition) {
    id
    name
    description
    provider
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCertificationTypeInput,
  APITypes.CreateCertificationTypeMutation
>;

export const createExamType = /* GraphQL */ `mutation CreateExamType(
  $input: CreateExamTypeInput!
  $condition: ModelExamTypeConditionInput
) {
  createExamType(input: $input, condition: $condition) {
    id
    name
    description
    questions {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExamTypeMutationVariables,
  APITypes.CreateExamTypeMutation
>;
export const updateExamType = /* GraphQL */ `mutation UpdateExamType(
  $input: UpdateExamTypeInput!
  $condition: ModelExamTypeConditionInput
) {
  updateExamType(input: $input, condition: $condition) {
    id
    name
    description
    questions {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExamTypeMutationVariables,
  APITypes.UpdateExamTypeMutation
>;
export const deleteExamType = /* GraphQL */ `mutation DeleteExamType(
  $input: DeleteExamTypeInput!
  $condition: ModelExamTypeConditionInput
) {
  deleteExamType(input: $input, condition: $condition) {
    id
    name
    description
    questions {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExamTypeMutationVariables,
  APITypes.DeleteExamTypeMutation
>;
export const createQuestion = /* GraphQL */ `mutation CreateQuestion(
  $input: CreateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  createQuestion(input: $input, condition: $condition) {
    id
    text
    options {
      id
      text
      __typename
    }
    correctAnswer
    explanation
    difficulty
    examTypeID
    isAIGenerated
    topic
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    examTypeQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQuestionMutationVariables,
  APITypes.CreateQuestionMutation
>;
export const updateQuestion = /* GraphQL */ `mutation UpdateQuestion(
  $input: UpdateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  updateQuestion(input: $input, condition: $condition) {
    id
    text
    options {
      id
      text
      __typename
    }
    correctAnswer
    explanation
    difficulty
    examTypeID
    isAIGenerated
    topic
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    examTypeQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQuestionMutationVariables,
  APITypes.UpdateQuestionMutation
>;
export const deleteQuestion = /* GraphQL */ `mutation DeleteQuestion(
  $input: DeleteQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  deleteQuestion(input: $input, condition: $condition) {
    id
    text
    options {
      id
      text
      __typename
    }
    correctAnswer
    explanation
    difficulty
    examTypeID
    isAIGenerated
    topic
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    examTypeQuestionsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQuestionMutationVariables,
  APITypes.DeleteQuestionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    email
    name
    examAttempts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    email
    name
    examAttempts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    email
    name
    examAttempts {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createExamAttempt = /* GraphQL */ `mutation CreateExamAttempt(
  $input: CreateExamAttemptInput!
  $condition: ModelExamAttemptConditionInput
) {
  createExamAttempt(input: $input, condition: $condition) {
    id
    userID
    examTypeID
    score
    completedAt
    answers {
      questionID
      selectedOption
      isCorrect
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userExamAttemptsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExamAttemptMutationVariables,
  APITypes.CreateExamAttemptMutation
>;
export const updateExamAttempt = /* GraphQL */ `mutation UpdateExamAttempt(
  $input: UpdateExamAttemptInput!
  $condition: ModelExamAttemptConditionInput
) {
  updateExamAttempt(input: $input, condition: $condition) {
    id
    userID
    examTypeID
    score
    completedAt
    answers {
      questionID
      selectedOption
      isCorrect
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userExamAttemptsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateExamAttemptMutationVariables,
  APITypes.UpdateExamAttemptMutation
>;
export const deleteExamAttempt = /* GraphQL */ `mutation DeleteExamAttempt(
  $input: DeleteExamAttemptInput!
  $condition: ModelExamAttemptConditionInput
) {
  deleteExamAttempt(input: $input, condition: $condition) {
    id
    userID
    examTypeID
    score
    completedAt
    answers {
      questionID
      selectedOption
      isCorrect
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userExamAttemptsId
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteExamAttemptMutationVariables,
  APITypes.DeleteExamAttemptMutation
>;

export const createExamResult = /* GraphQL */ `mutation CreateExamResult(
  $input: CreateExamResultInput!
) {
  createExamResult(input: $input) {
    id
    userId
    examId
    examName
    score
    totalQuestions
    correctAnswers
    timeSpent
    date
    questionResults {
      questionId
      correct
      userAnswer
      correctAnswer
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateExamResultInput,
  APITypes.CreateExamResultMutation
>;

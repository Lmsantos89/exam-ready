/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProvider = /* GraphQL */ `mutation CreateProvider(
  $input: CreateProviderInput!
  $condition: ModelProviderConditionInput
) {
  createProvider(input: $input, condition: $condition) {
    id
    name
    website
    certifications {
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
  APITypes.CreateProviderMutationVariables,
  APITypes.CreateProviderMutation
>;
export const updateProvider = /* GraphQL */ `mutation UpdateProvider(
  $input: UpdateProviderInput!
  $condition: ModelProviderConditionInput
) {
  updateProvider(input: $input, condition: $condition) {
    id
    name
    website
    certifications {
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
  APITypes.UpdateProviderMutationVariables,
  APITypes.UpdateProviderMutation
>;
export const deleteProvider = /* GraphQL */ `mutation DeleteProvider(
  $input: DeleteProviderInput!
  $condition: ModelProviderConditionInput
) {
  deleteProvider(input: $input, condition: $condition) {
    id
    name
    website
    certifications {
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
  APITypes.DeleteProviderMutationVariables,
  APITypes.DeleteProviderMutation
>;
export const createCertification = /* GraphQL */ `mutation CreateCertification(
  $input: CreateCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  createCertification(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exams {
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
  APITypes.CreateCertificationMutationVariables,
  APITypes.CreateCertificationMutation
>;
export const updateCertification = /* GraphQL */ `mutation UpdateCertification(
  $input: UpdateCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  updateCertification(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exams {
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
  APITypes.UpdateCertificationMutationVariables,
  APITypes.UpdateCertificationMutation
>;
export const deleteCertification = /* GraphQL */ `mutation DeleteCertification(
  $input: DeleteCertificationInput!
  $condition: ModelCertificationConditionInput
) {
  deleteCertification(input: $input, condition: $condition) {
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
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    exams {
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
  APITypes.DeleteCertificationMutationVariables,
  APITypes.DeleteCertificationMutation
>;
export const createExam = /* GraphQL */ `mutation CreateExam(
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
  APITypes.CreateExamMutationVariables,
  APITypes.CreateExamMutation
>;
export const updateExam = /* GraphQL */ `mutation UpdateExam(
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
  APITypes.UpdateExamMutationVariables,
  APITypes.UpdateExamMutation
>;
export const deleteExam = /* GraphQL */ `mutation DeleteExam(
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
  APITypes.DeleteExamMutationVariables,
  APITypes.DeleteExamMutation
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
    examID
    isAIGenerated
    topic
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    examID
    isAIGenerated
    topic
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    examID
    isAIGenerated
    topic
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
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
    examID
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
    examID
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
    examID
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

/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateExamType = /* GraphQL */ `subscription OnCreateExamType($filter: ModelSubscriptionExamTypeFilterInput) {
  onCreateExamType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExamTypeSubscriptionVariables,
  APITypes.OnCreateExamTypeSubscription
>;
export const onUpdateExamType = /* GraphQL */ `subscription OnUpdateExamType($filter: ModelSubscriptionExamTypeFilterInput) {
  onUpdateExamType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExamTypeSubscriptionVariables,
  APITypes.OnUpdateExamTypeSubscription
>;
export const onDeleteExamType = /* GraphQL */ `subscription OnDeleteExamType($filter: ModelSubscriptionExamTypeFilterInput) {
  onDeleteExamType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExamTypeSubscriptionVariables,
  APITypes.OnDeleteExamTypeSubscription
>;
export const onCreateQuestion = /* GraphQL */ `subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onCreateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQuestionSubscriptionVariables,
  APITypes.OnCreateQuestionSubscription
>;
export const onUpdateQuestion = /* GraphQL */ `subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onUpdateQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQuestionSubscriptionVariables,
  APITypes.OnUpdateQuestionSubscription
>;
export const onDeleteQuestion = /* GraphQL */ `subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
  onDeleteQuestion(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQuestionSubscriptionVariables,
  APITypes.OnDeleteQuestionSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateExamAttempt = /* GraphQL */ `subscription OnCreateExamAttempt(
  $filter: ModelSubscriptionExamAttemptFilterInput
  $owner: String
) {
  onCreateExamAttempt(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExamAttemptSubscriptionVariables,
  APITypes.OnCreateExamAttemptSubscription
>;
export const onUpdateExamAttempt = /* GraphQL */ `subscription OnUpdateExamAttempt(
  $filter: ModelSubscriptionExamAttemptFilterInput
  $owner: String
) {
  onUpdateExamAttempt(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExamAttemptSubscriptionVariables,
  APITypes.OnUpdateExamAttemptSubscription
>;
export const onDeleteExamAttempt = /* GraphQL */ `subscription OnDeleteExamAttempt(
  $filter: ModelSubscriptionExamAttemptFilterInput
  $owner: String
) {
  onDeleteExamAttempt(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExamAttemptSubscriptionVariables,
  APITypes.OnDeleteExamAttemptSubscription
>;

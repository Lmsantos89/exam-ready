/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listExamResults = /* GraphQL */ `query ListExamResults(
  $filter: ModelExamResultFilterInput
  $limit: Int
  $nextToken: String
) {
  listExamResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userId
      examId
      examName
      score
      totalQuestions
      correctAnswers
      timeSpent
      date
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExamResultsQueryVariables,
  APITypes.ListExamResultsQuery
>;

export const getExamType = /* GraphQL */ `query GetExamType($id: ID!) {
  getExamType(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExamTypeQueryVariables,
  APITypes.GetExamTypeQuery
>;
export const listExamTypes = /* GraphQL */ `query ListExamTypes(
  $filter: ModelExamTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listExamTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExamTypesQueryVariables,
  APITypes.ListExamTypesQuery
>;
export const syncExamTypes = /* GraphQL */ `query SyncExamTypes(
  $filter: ModelExamTypeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExamTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExamTypesQueryVariables,
  APITypes.SyncExamTypesQuery
>;
export const getQuestion = /* GraphQL */ `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetQuestionQueryVariables,
  APITypes.GetQuestionQuery
>;
export const listQuestions = /* GraphQL */ `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
>;
export const syncQuestions = /* GraphQL */ `query SyncQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncQuestions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      text
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncQuestionsQueryVariables,
  APITypes.SyncQuestionsQuery
>;
export const questionsByExamTypeID = /* GraphQL */ `query QuestionsByExamTypeID(
  $examTypeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  questionsByExamTypeID(
    examTypeID: $examTypeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      text
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuestionsByExamTypeIDQueryVariables,
  APITypes.QuestionsByExamTypeIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
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
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      email
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getExamAttempt = /* GraphQL */ `query GetExamAttempt($id: ID!) {
  getExamAttempt(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetExamAttemptQueryVariables,
  APITypes.GetExamAttemptQuery
>;
export const listExamAttempts = /* GraphQL */ `query ListExamAttempts(
  $filter: ModelExamAttemptFilterInput
  $limit: Int
  $nextToken: String
) {
  listExamAttempts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      examTypeID
      score
      completedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userExamAttemptsId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExamAttemptsQueryVariables,
  APITypes.ListExamAttemptsQuery
>;
export const syncExamAttempts = /* GraphQL */ `query SyncExamAttempts(
  $filter: ModelExamAttemptFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExamAttempts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      examTypeID
      score
      completedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userExamAttemptsId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncExamAttemptsQueryVariables,
  APITypes.SyncExamAttemptsQuery
>;
export const examAttemptsByUserID = /* GraphQL */ `query ExamAttemptsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExamAttemptFilterInput
  $limit: Int
  $nextToken: String
) {
  examAttemptsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      examTypeID
      score
      completedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userExamAttemptsId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ExamAttemptsByUserIDQueryVariables,
  APITypes.ExamAttemptsByUserIDQuery
>;
export const examAttemptsByExamTypeID = /* GraphQL */ `query ExamAttemptsByExamTypeID(
  $examTypeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExamAttemptFilterInput
  $limit: Int
  $nextToken: String
) {
  examAttemptsByExamTypeID(
    examTypeID: $examTypeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      examTypeID
      score
      completedAt
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userExamAttemptsId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ExamAttemptsByExamTypeIDQueryVariables,
  APITypes.ExamAttemptsByExamTypeIDQuery
>;

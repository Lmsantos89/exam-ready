/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProvider = /* GraphQL */ `query GetProvider($id: ID!) {
  getProvider(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProviderQueryVariables,
  APITypes.GetProviderQuery
>;
export const listProviders = /* GraphQL */ `query ListProviders(
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
  APITypes.ListProvidersQueryVariables,
  APITypes.ListProvidersQuery
>;
export const syncProviders = /* GraphQL */ `query SyncProviders(
  $filter: ModelProviderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProviders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProvidersQueryVariables,
  APITypes.SyncProvidersQuery
>;
export const getCertification = /* GraphQL */ `query GetCertification($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetCertificationQueryVariables,
  APITypes.GetCertificationQuery
>;
export const listCertifications = /* GraphQL */ `query ListCertifications(
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
  APITypes.ListCertificationsQueryVariables,
  APITypes.ListCertificationsQuery
>;
export const syncCertifications = /* GraphQL */ `query SyncCertifications(
  $filter: ModelCertificationFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCertifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      code
      providerID
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
  APITypes.SyncCertificationsQueryVariables,
  APITypes.SyncCertificationsQuery
>;
export const certificationsByProviderID = /* GraphQL */ `query CertificationsByProviderID(
  $providerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCertificationFilterInput
  $limit: Int
  $nextToken: String
) {
  certificationsByProviderID(
    providerID: $providerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      code
      providerID
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
  APITypes.CertificationsByProviderIDQueryVariables,
  APITypes.CertificationsByProviderIDQuery
>;
export const getExam = /* GraphQL */ `query GetExam($id: ID!) {
  getExam(id: $id) {
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
` as GeneratedQuery<APITypes.GetExamQueryVariables, APITypes.GetExamQuery>;
export const listExams = /* GraphQL */ `query ListExams(
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
` as GeneratedQuery<APITypes.ListExamsQueryVariables, APITypes.ListExamsQuery>;
export const syncExams = /* GraphQL */ `query SyncExams(
  $filter: ModelExamFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncExams(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      passingScore
      timeLimit
      certificationID
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
` as GeneratedQuery<APITypes.SyncExamsQueryVariables, APITypes.SyncExamsQuery>;
export const examsByCertificationID = /* GraphQL */ `query ExamsByCertificationID(
  $certificationID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExamFilterInput
  $limit: Int
  $nextToken: String
) {
  examsByCertificationID(
    certificationID: $certificationID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      passingScore
      timeLimit
      certificationID
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
  APITypes.ExamsByCertificationIDQueryVariables,
  APITypes.ExamsByCertificationIDQuery
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncQuestionsQueryVariables,
  APITypes.SyncQuestionsQuery
>;
export const questionsByExamID = /* GraphQL */ `query QuestionsByExamID(
  $examID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  questionsByExamID(
    examID: $examID
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.QuestionsByExamIDQueryVariables,
  APITypes.QuestionsByExamIDQuery
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
      examID
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
      examID
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
      examID
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
export const examAttemptsByExamID = /* GraphQL */ `query ExamAttemptsByExamID(
  $examID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelExamAttemptFilterInput
  $limit: Int
  $nextToken: String
) {
  examAttemptsByExamID(
    examID: $examID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      examID
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
  APITypes.ExamAttemptsByExamIDQueryVariables,
  APITypes.ExamAttemptsByExamIDQuery
>;

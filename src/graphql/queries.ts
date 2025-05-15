/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getExamType = /* GraphQL */ `query GetExamType($id: ID!) {
  getExamType(id: $id) {
    id
    name
    description
    questions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExamTypesQueryVariables,
  APITypes.ListExamTypesQuery
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
    examTypeQuestionsId
    owner
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
      examTypeQuestionsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQuestionsQueryVariables,
  APITypes.ListQuestionsQuery
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
      examTypeQuestionsId
      owner
      __typename
    }
    nextToken
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
      __typename
    }
    createdAt
    updatedAt
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
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
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
      userExamAttemptsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExamAttemptsQueryVariables,
  APITypes.ListExamAttemptsQuery
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
      userExamAttemptsId
      owner
      __typename
    }
    nextToken
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
      userExamAttemptsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ExamAttemptsByExamTypeIDQueryVariables,
  APITypes.ExamAttemptsByExamTypeIDQuery
>;

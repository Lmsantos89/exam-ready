/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateExamTypeInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelExamTypeConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelExamTypeConditionInput | null > | null,
  or?: Array< ModelExamTypeConditionInput | null > | null,
  not?: ModelExamTypeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ExamType = {
  __typename: "ExamType",
  id: string,
  name: string,
  description?: string | null,
  questions?: ModelQuestionConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  text: string,
  options?:  Array<Option | null > | null,
  correctAnswer: string,
  explanation?: string | null,
  difficulty?: string | null,
  examTypeID: string,
  isAIGenerated?: boolean | null,
  topic?: string | null,
  createdAt: string,
  updatedAt: string,
  examTypeQuestionsId?: string | null,
};

export type Option = {
  __typename: "Option",
  id: string,
  text: string,
};

export type UpdateExamTypeInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteExamTypeInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  text: string,
  options?: Array< OptionInput | null > | null,
  correctAnswer: string,
  explanation?: string | null,
  difficulty?: string | null,
  examTypeID: string,
  isAIGenerated?: boolean | null,
  topic?: string | null,
  examTypeQuestionsId?: string | null,
};

export type OptionInput = {
  id: string,
  text: string,
};

export type ModelQuestionConditionInput = {
  text?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  explanation?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  examTypeID?: ModelIDInput | null,
  isAIGenerated?: ModelBooleanInput | null,
  topic?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  examTypeQuestionsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateQuestionInput = {
  id: string,
  text?: string | null,
  options?: Array< OptionInput | null > | null,
  correctAnswer?: string | null,
  explanation?: string | null,
  difficulty?: string | null,
  examTypeID?: string | null,
  isAIGenerated?: boolean | null,
  topic?: string | null,
  examTypeQuestionsId?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  name?: string | null,
  examAttempts?: ModelExamAttemptConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelExamAttemptConnection = {
  __typename: "ModelExamAttemptConnection",
  items:  Array<ExamAttempt | null >,
  nextToken?: string | null,
};

export type ExamAttempt = {
  __typename: "ExamAttempt",
  id: string,
  userID: string,
  examTypeID: string,
  score?: number | null,
  completedAt?: string | null,
  answers?:  Array<Answer | null > | null,
  createdAt: string,
  updatedAt: string,
  userExamAttemptsId?: string | null,
  owner?: string | null,
};

export type Answer = {
  __typename: "Answer",
  questionID: string,
  selectedOption?: string | null,
  isCorrect?: boolean | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  name?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateExamAttemptInput = {
  id?: string | null,
  userID: string,
  examTypeID: string,
  score?: number | null,
  completedAt?: string | null,
  answers?: Array< AnswerInput | null > | null,
  userExamAttemptsId?: string | null,
};

export type AnswerInput = {
  questionID: string,
  selectedOption?: string | null,
  isCorrect?: boolean | null,
};

export type ModelExamAttemptConditionInput = {
  userID?: ModelIDInput | null,
  examTypeID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  completedAt?: ModelStringInput | null,
  and?: Array< ModelExamAttemptConditionInput | null > | null,
  or?: Array< ModelExamAttemptConditionInput | null > | null,
  not?: ModelExamAttemptConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userExamAttemptsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateExamAttemptInput = {
  id: string,
  userID?: string | null,
  examTypeID?: string | null,
  score?: number | null,
  completedAt?: string | null,
  answers?: Array< AnswerInput | null > | null,
  userExamAttemptsId?: string | null,
};

export type DeleteExamAttemptInput = {
  id: string,
};

export type ModelExamTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExamTypeFilterInput | null > | null,
  or?: Array< ModelExamTypeFilterInput | null > | null,
  not?: ModelExamTypeFilterInput | null,
};

export type ModelExamTypeConnection = {
  __typename: "ModelExamTypeConnection",
  items:  Array<ExamType | null >,
  nextToken?: string | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  explanation?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  examTypeID?: ModelIDInput | null,
  isAIGenerated?: ModelBooleanInput | null,
  topic?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
  examTypeQuestionsId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelExamAttemptFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  examTypeID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  completedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExamAttemptFilterInput | null > | null,
  or?: Array< ModelExamAttemptFilterInput | null > | null,
  not?: ModelExamAttemptFilterInput | null,
  userExamAttemptsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionExamTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExamTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionExamTypeFilterInput | null > | null,
  examTypeQuestionsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  correctAnswer?: ModelSubscriptionStringInput | null,
  explanation?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  examTypeID?: ModelSubscriptionIDInput | null,
  isAIGenerated?: ModelSubscriptionBooleanInput | null,
  topic?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userExamAttemptsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionExamAttemptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  examTypeID?: ModelSubscriptionIDInput | null,
  score?: ModelSubscriptionFloatInput | null,
  completedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExamAttemptFilterInput | null > | null,
  or?: Array< ModelSubscriptionExamAttemptFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateExamTypeMutationVariables = {
  input: CreateExamTypeInput,
  condition?: ModelExamTypeConditionInput | null,
};

export type CreateExamTypeMutation = {
  createExamType?:  {
    __typename: "ExamType",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExamTypeMutationVariables = {
  input: UpdateExamTypeInput,
  condition?: ModelExamTypeConditionInput | null,
};

export type UpdateExamTypeMutation = {
  updateExamType?:  {
    __typename: "ExamType",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExamTypeMutationVariables = {
  input: DeleteExamTypeInput,
  condition?: ModelExamTypeConditionInput | null,
};

export type DeleteExamTypeMutation = {
  deleteExamType?:  {
    __typename: "ExamType",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      text: string,
    } | null > | null,
    correctAnswer: string,
    explanation?: string | null,
    difficulty?: string | null,
    examTypeID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    examTypeQuestionsId?: string | null,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      text: string,
    } | null > | null,
    correctAnswer: string,
    explanation?: string | null,
    difficulty?: string | null,
    examTypeID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    examTypeQuestionsId?: string | null,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      text: string,
    } | null > | null,
    correctAnswer: string,
    explanation?: string | null,
    difficulty?: string | null,
    examTypeID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    examTypeQuestionsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    examAttempts?:  {
      __typename: "ModelExamAttemptConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    examAttempts?:  {
      __typename: "ModelExamAttemptConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    examAttempts?:  {
      __typename: "ModelExamAttemptConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateExamAttemptMutationVariables = {
  input: CreateExamAttemptInput,
  condition?: ModelExamAttemptConditionInput | null,
};

export type CreateExamAttemptMutation = {
  createExamAttempt?:  {
    __typename: "ExamAttempt",
    id: string,
    userID: string,
    examTypeID: string,
    score?: number | null,
    completedAt?: string | null,
    answers?:  Array< {
      __typename: "Answer",
      questionID: string,
      selectedOption?: string | null,
      isCorrect?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateExamAttemptMutationVariables = {
  input: UpdateExamAttemptInput,
  condition?: ModelExamAttemptConditionInput | null,
};

export type UpdateExamAttemptMutation = {
  updateExamAttempt?:  {
    __typename: "ExamAttempt",
    id: string,
    userID: string,
    examTypeID: string,
    score?: number | null,
    completedAt?: string | null,
    answers?:  Array< {
      __typename: "Answer",
      questionID: string,
      selectedOption?: string | null,
      isCorrect?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteExamAttemptMutationVariables = {
  input: DeleteExamAttemptInput,
  condition?: ModelExamAttemptConditionInput | null,
};

export type DeleteExamAttemptMutation = {
  deleteExamAttempt?:  {
    __typename: "ExamAttempt",
    id: string,
    userID: string,
    examTypeID: string,
    score?: number | null,
    completedAt?: string | null,
    answers?:  Array< {
      __typename: "Answer",
      questionID: string,
      selectedOption?: string | null,
      isCorrect?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetExamTypeQueryVariables = {
  id: string,
};

export type GetExamTypeQuery = {
  getExamType?:  {
    __typename: "ExamType",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExamTypesQueryVariables = {
  filter?: ModelExamTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExamTypesQuery = {
  listExamTypes?:  {
    __typename: "ModelExamTypeConnection",
    items:  Array< {
      __typename: "ExamType",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      text: string,
    } | null > | null,
    correctAnswer: string,
    explanation?: string | null,
    difficulty?: string | null,
    examTypeID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    examTypeQuestionsId?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      correctAnswer: string,
      explanation?: string | null,
      difficulty?: string | null,
      examTypeID: string,
      isAIGenerated?: boolean | null,
      topic?: string | null,
      createdAt: string,
      updatedAt: string,
      examTypeQuestionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type QuestionsByExamTypeIDQueryVariables = {
  examTypeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionsByExamTypeIDQuery = {
  questionsByExamTypeID?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      correctAnswer: string,
      explanation?: string | null,
      difficulty?: string | null,
      examTypeID: string,
      isAIGenerated?: boolean | null,
      topic?: string | null,
      createdAt: string,
      updatedAt: string,
      examTypeQuestionsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    examAttempts?:  {
      __typename: "ModelExamAttemptConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExamAttemptQueryVariables = {
  id: string,
};

export type GetExamAttemptQuery = {
  getExamAttempt?:  {
    __typename: "ExamAttempt",
    id: string,
    userID: string,
    examTypeID: string,
    score?: number | null,
    completedAt?: string | null,
    answers?:  Array< {
      __typename: "Answer",
      questionID: string,
      selectedOption?: string | null,
      isCorrect?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListExamAttemptsQueryVariables = {
  filter?: ModelExamAttemptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExamAttemptsQuery = {
  listExamAttempts?:  {
    __typename: "ModelExamAttemptConnection",
    items:  Array< {
      __typename: "ExamAttempt",
      id: string,
      userID: string,
      examTypeID: string,
      score?: number | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      userExamAttemptsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ExamAttemptsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExamAttemptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExamAttemptsByUserIDQuery = {
  examAttemptsByUserID?:  {
    __typename: "ModelExamAttemptConnection",
    items:  Array< {
      __typename: "ExamAttempt",
      id: string,
      userID: string,
      examTypeID: string,
      score?: number | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      userExamAttemptsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ExamAttemptsByExamTypeIDQueryVariables = {
  examTypeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExamAttemptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExamAttemptsByExamTypeIDQuery = {
  examAttemptsByExamTypeID?:  {
    __typename: "ModelExamAttemptConnection",
    items:  Array< {
      __typename: "ExamAttempt",
      id: string,
      userID: string,
      examTypeID: string,
      score?: number | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      userExamAttemptsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateExamTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExamTypeFilterInput | null,
};

export type OnCreateExamTypeSubscription = {
  onCreateExamType?:  {
    __typename: "ExamType",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExamTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExamTypeFilterInput | null,
};

export type OnUpdateExamTypeSubscription = {
  onUpdateExamType?:  {
    __typename: "ExamType",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExamTypeSubscriptionVariables = {
  filter?: ModelSubscriptionExamTypeFilterInput | null,
};

export type OnDeleteExamTypeSubscription = {
  onDeleteExamType?:  {
    __typename: "ExamType",
    id: string,
    name: string,
    description?: string | null,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      text: string,
    } | null > | null,
    correctAnswer: string,
    explanation?: string | null,
    difficulty?: string | null,
    examTypeID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    examTypeQuestionsId?: string | null,
  } | null,
};

export type OnUpdateQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      text: string,
    } | null > | null,
    correctAnswer: string,
    explanation?: string | null,
    difficulty?: string | null,
    examTypeID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    examTypeQuestionsId?: string | null,
  } | null,
};

export type OnDeleteQuestionSubscriptionVariables = {
  filter?: ModelSubscriptionQuestionFilterInput | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    text: string,
    options?:  Array< {
      __typename: "Option",
      id: string,
      text: string,
    } | null > | null,
    correctAnswer: string,
    explanation?: string | null,
    difficulty?: string | null,
    examTypeID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    examTypeQuestionsId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    examAttempts?:  {
      __typename: "ModelExamAttemptConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    examAttempts?:  {
      __typename: "ModelExamAttemptConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    name?: string | null,
    examAttempts?:  {
      __typename: "ModelExamAttemptConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateExamAttemptSubscriptionVariables = {
  filter?: ModelSubscriptionExamAttemptFilterInput | null,
  owner?: string | null,
};

export type OnCreateExamAttemptSubscription = {
  onCreateExamAttempt?:  {
    __typename: "ExamAttempt",
    id: string,
    userID: string,
    examTypeID: string,
    score?: number | null,
    completedAt?: string | null,
    answers?:  Array< {
      __typename: "Answer",
      questionID: string,
      selectedOption?: string | null,
      isCorrect?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateExamAttemptSubscriptionVariables = {
  filter?: ModelSubscriptionExamAttemptFilterInput | null,
  owner?: string | null,
};

export type OnUpdateExamAttemptSubscription = {
  onUpdateExamAttempt?:  {
    __typename: "ExamAttempt",
    id: string,
    userID: string,
    examTypeID: string,
    score?: number | null,
    completedAt?: string | null,
    answers?:  Array< {
      __typename: "Answer",
      questionID: string,
      selectedOption?: string | null,
      isCorrect?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteExamAttemptSubscriptionVariables = {
  filter?: ModelSubscriptionExamAttemptFilterInput | null,
  owner?: string | null,
};

export type OnDeleteExamAttemptSubscription = {
  onDeleteExamAttempt?:  {
    __typename: "ExamAttempt",
    id: string,
    userID: string,
    examTypeID: string,
    score?: number | null,
    completedAt?: string | null,
    answers?:  Array< {
      __typename: "Answer",
      questionID: string,
      selectedOption?: string | null,
      isCorrect?: boolean | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCertificationInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  provider?: string | null,
  _version?: number | null,
};

export type ModelCertificationConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  and?: Array< ModelCertificationConditionInput | null > | null,
  or?: Array< ModelCertificationConditionInput | null > | null,
  not?: ModelCertificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Certification = {
  __typename: "Certification",
  id: string,
  name: string,
  description?: string | null,
  provider?: string | null,
  exams?: ModelExamConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelExamConnection = {
  __typename: "ModelExamConnection",
  items:  Array<Exam | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Exam = {
  __typename: "Exam",
  id: string,
  name: string,
  description?: string | null,
  passingScore?: number | null,
  timeLimit?: number | null,
  certificationID: string,
  questions?: ModelQuestionConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  text: string,
  options?:  Array<Option | null > | null,
  correctAnswer: string,
  explanation?: string | null,
  difficulty?: string | null,
  examID: string,
  isAIGenerated?: boolean | null,
  topic?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Option = {
  __typename: "Option",
  id: string,
  text: string,
};

export type UpdateCertificationInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  provider?: string | null,
  _version?: number | null,
};

export type DeleteCertificationInput = {
  id: string,
  _version?: number | null,
};

export type CreateExamInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  passingScore?: number | null,
  timeLimit?: number | null,
  certificationID: string,
  _version?: number | null,
};

export type ModelExamConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  passingScore?: ModelFloatInput | null,
  timeLimit?: ModelIntInput | null,
  certificationID?: ModelIDInput | null,
  and?: Array< ModelExamConditionInput | null > | null,
  or?: Array< ModelExamConditionInput | null > | null,
  not?: ModelExamConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type ModelIntInput = {
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

export type UpdateExamInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  passingScore?: number | null,
  timeLimit?: number | null,
  certificationID?: string | null,
  _version?: number | null,
};

export type DeleteExamInput = {
  id: string,
  _version?: number | null,
};

export type CreateQuestionInput = {
  id?: string | null,
  text: string,
  options?: Array< OptionInput | null > | null,
  correctAnswer: string,
  explanation?: string | null,
  difficulty?: string | null,
  examID: string,
  isAIGenerated?: boolean | null,
  topic?: string | null,
  _version?: number | null,
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
  examID?: ModelIDInput | null,
  isAIGenerated?: ModelBooleanInput | null,
  topic?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateQuestionInput = {
  id: string,
  text?: string | null,
  options?: Array< OptionInput | null > | null,
  correctAnswer?: string | null,
  explanation?: string | null,
  difficulty?: string | null,
  examID?: string | null,
  isAIGenerated?: boolean | null,
  topic?: string | null,
  _version?: number | null,
};

export type DeleteQuestionInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  email: string,
  name?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
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
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelExamAttemptConnection = {
  __typename: "ModelExamAttemptConnection",
  items:  Array<ExamAttempt | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ExamAttempt = {
  __typename: "ExamAttempt",
  id: string,
  userID: string,
  examID: string,
  score?: number | null,
  completedAt?: string | null,
  answers?:  Array<Answer | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
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
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateExamAttemptInput = {
  id?: string | null,
  userID: string,
  examID: string,
  score?: number | null,
  completedAt?: string | null,
  answers?: Array< AnswerInput | null > | null,
  _version?: number | null,
  userExamAttemptsId?: string | null,
};

export type AnswerInput = {
  questionID: string,
  selectedOption?: string | null,
  isCorrect?: boolean | null,
};

export type ModelExamAttemptConditionInput = {
  userID?: ModelIDInput | null,
  examID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  completedAt?: ModelStringInput | null,
  and?: Array< ModelExamAttemptConditionInput | null > | null,
  or?: Array< ModelExamAttemptConditionInput | null > | null,
  not?: ModelExamAttemptConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userExamAttemptsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateExamAttemptInput = {
  id: string,
  userID?: string | null,
  examID?: string | null,
  score?: number | null,
  completedAt?: string | null,
  answers?: Array< AnswerInput | null > | null,
  _version?: number | null,
  userExamAttemptsId?: string | null,
};

export type DeleteExamAttemptInput = {
  id: string,
  _version?: number | null,
};

export type ModelCertificationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  provider?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCertificationFilterInput | null > | null,
  or?: Array< ModelCertificationFilterInput | null > | null,
  not?: ModelCertificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCertificationConnection = {
  __typename: "ModelCertificationConnection",
  items:  Array<Certification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExamFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  passingScore?: ModelFloatInput | null,
  timeLimit?: ModelIntInput | null,
  certificationID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExamFilterInput | null > | null,
  or?: Array< ModelExamFilterInput | null > | null,
  not?: ModelExamFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  correctAnswer?: ModelStringInput | null,
  explanation?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  examID?: ModelIDInput | null,
  isAIGenerated?: ModelBooleanInput | null,
  topic?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExamAttemptFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  examID?: ModelIDInput | null,
  score?: ModelFloatInput | null,
  completedAt?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExamAttemptFilterInput | null > | null,
  or?: Array< ModelExamAttemptFilterInput | null > | null,
  not?: ModelExamAttemptFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userExamAttemptsId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionCertificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  provider?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCertificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionCertificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSubscriptionExamFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  passingScore?: ModelSubscriptionFloatInput | null,
  timeLimit?: ModelSubscriptionIntInput | null,
  certificationID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExamFilterInput | null > | null,
  or?: Array< ModelSubscriptionExamFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSubscriptionIntInput = {
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

export type ModelSubscriptionQuestionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  correctAnswer?: ModelSubscriptionStringInput | null,
  explanation?: ModelSubscriptionStringInput | null,
  difficulty?: ModelSubscriptionStringInput | null,
  examID?: ModelSubscriptionIDInput | null,
  isAIGenerated?: ModelSubscriptionBooleanInput | null,
  topic?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  or?: Array< ModelSubscriptionQuestionFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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
  _deleted?: ModelBooleanInput | null,
  userExamAttemptsId?: ModelSubscriptionIDInput | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionExamAttemptFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  examID?: ModelSubscriptionIDInput | null,
  score?: ModelSubscriptionFloatInput | null,
  completedAt?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExamAttemptFilterInput | null > | null,
  or?: Array< ModelSubscriptionExamAttemptFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
};

export type CreateCertificationMutationVariables = {
  input: CreateCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type CreateCertificationMutation = {
  createCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    description?: string | null,
    provider?: string | null,
    exams?:  {
      __typename: "ModelExamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCertificationMutationVariables = {
  input: UpdateCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type UpdateCertificationMutation = {
  updateCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    description?: string | null,
    provider?: string | null,
    exams?:  {
      __typename: "ModelExamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCertificationMutationVariables = {
  input: DeleteCertificationInput,
  condition?: ModelCertificationConditionInput | null,
};

export type DeleteCertificationMutation = {
  deleteCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    description?: string | null,
    provider?: string | null,
    exams?:  {
      __typename: "ModelExamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateExamMutationVariables = {
  input: CreateExamInput,
  condition?: ModelExamConditionInput | null,
};

export type CreateExamMutation = {
  createExam?:  {
    __typename: "Exam",
    id: string,
    name: string,
    description?: string | null,
    passingScore?: number | null,
    timeLimit?: number | null,
    certificationID: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateExamMutationVariables = {
  input: UpdateExamInput,
  condition?: ModelExamConditionInput | null,
};

export type UpdateExamMutation = {
  updateExam?:  {
    __typename: "Exam",
    id: string,
    name: string,
    description?: string | null,
    passingScore?: number | null,
    timeLimit?: number | null,
    certificationID: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteExamMutationVariables = {
  input: DeleteExamInput,
  condition?: ModelExamConditionInput | null,
};

export type DeleteExamMutation = {
  deleteExam?:  {
    __typename: "Exam",
    id: string,
    name: string,
    description?: string | null,
    passingScore?: number | null,
    timeLimit?: number | null,
    certificationID: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

export type GetCertificationQueryVariables = {
  id: string,
};

export type GetCertificationQuery = {
  getCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    description?: string | null,
    provider?: string | null,
    exams?:  {
      __typename: "ModelExamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCertificationsQueryVariables = {
  filter?: ModelCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCertificationsQuery = {
  listCertifications?:  {
    __typename: "ModelCertificationConnection",
    items:  Array< {
      __typename: "Certification",
      id: string,
      name: string,
      description?: string | null,
      provider?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCertificationsQueryVariables = {
  filter?: ModelCertificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCertificationsQuery = {
  syncCertifications?:  {
    __typename: "ModelCertificationConnection",
    items:  Array< {
      __typename: "Certification",
      id: string,
      name: string,
      description?: string | null,
      provider?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExamQueryVariables = {
  id: string,
};

export type GetExamQuery = {
  getExam?:  {
    __typename: "Exam",
    id: string,
    name: string,
    description?: string | null,
    passingScore?: number | null,
    timeLimit?: number | null,
    certificationID: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListExamsQueryVariables = {
  filter?: ModelExamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExamsQuery = {
  listExams?:  {
    __typename: "ModelExamConnection",
    items:  Array< {
      __typename: "Exam",
      id: string,
      name: string,
      description?: string | null,
      passingScore?: number | null,
      timeLimit?: number | null,
      certificationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExamsQueryVariables = {
  filter?: ModelExamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExamsQuery = {
  syncExams?:  {
    __typename: "ModelExamConnection",
    items:  Array< {
      __typename: "Exam",
      id: string,
      name: string,
      description?: string | null,
      passingScore?: number | null,
      timeLimit?: number | null,
      certificationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExamsByCertificationIDQueryVariables = {
  certificationID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExamsByCertificationIDQuery = {
  examsByCertificationID?:  {
    __typename: "ModelExamConnection",
    items:  Array< {
      __typename: "Exam",
      id: string,
      name: string,
      description?: string | null,
      passingScore?: number | null,
      timeLimit?: number | null,
      certificationID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    examID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      examID: string,
      isAIGenerated?: boolean | null,
      topic?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestionsQuery = {
  syncQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      correctAnswer: string,
      explanation?: string | null,
      difficulty?: string | null,
      examID: string,
      isAIGenerated?: boolean | null,
      topic?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type QuestionsByExamIDQueryVariables = {
  examID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type QuestionsByExamIDQuery = {
  questionsByExamID?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      text: string,
      correctAnswer: string,
      explanation?: string | null,
      difficulty?: string | null,
      examID: string,
      isAIGenerated?: boolean | null,
      topic?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
    examID: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      examID: string,
      score?: number | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userExamAttemptsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExamAttemptsQueryVariables = {
  filter?: ModelExamAttemptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExamAttemptsQuery = {
  syncExamAttempts?:  {
    __typename: "ModelExamAttemptConnection",
    items:  Array< {
      __typename: "ExamAttempt",
      id: string,
      userID: string,
      examID: string,
      score?: number | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userExamAttemptsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
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
      examID: string,
      score?: number | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userExamAttemptsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ExamAttemptsByExamIDQueryVariables = {
  examID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExamAttemptFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExamAttemptsByExamIDQuery = {
  examAttemptsByExamID?:  {
    __typename: "ModelExamAttemptConnection",
    items:  Array< {
      __typename: "ExamAttempt",
      id: string,
      userID: string,
      examID: string,
      score?: number | null,
      completedAt?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userExamAttemptsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnCreateCertificationSubscription = {
  onCreateCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    description?: string | null,
    provider?: string | null,
    exams?:  {
      __typename: "ModelExamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnUpdateCertificationSubscription = {
  onUpdateCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    description?: string | null,
    provider?: string | null,
    exams?:  {
      __typename: "ModelExamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCertificationSubscriptionVariables = {
  filter?: ModelSubscriptionCertificationFilterInput | null,
};

export type OnDeleteCertificationSubscription = {
  onDeleteCertification?:  {
    __typename: "Certification",
    id: string,
    name: string,
    description?: string | null,
    provider?: string | null,
    exams?:  {
      __typename: "ModelExamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateExamSubscriptionVariables = {
  filter?: ModelSubscriptionExamFilterInput | null,
};

export type OnCreateExamSubscription = {
  onCreateExam?:  {
    __typename: "Exam",
    id: string,
    name: string,
    description?: string | null,
    passingScore?: number | null,
    timeLimit?: number | null,
    certificationID: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateExamSubscriptionVariables = {
  filter?: ModelSubscriptionExamFilterInput | null,
};

export type OnUpdateExamSubscription = {
  onUpdateExam?:  {
    __typename: "Exam",
    id: string,
    name: string,
    description?: string | null,
    passingScore?: number | null,
    timeLimit?: number | null,
    certificationID: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteExamSubscriptionVariables = {
  filter?: ModelSubscriptionExamFilterInput | null,
};

export type OnDeleteExamSubscription = {
  onDeleteExam?:  {
    __typename: "Exam",
    id: string,
    name: string,
    description?: string | null,
    passingScore?: number | null,
    timeLimit?: number | null,
    certificationID: string,
    questions?:  {
      __typename: "ModelQuestionConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
    isAIGenerated?: boolean | null,
    topic?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    examID: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userExamAttemptsId?: string | null,
    owner?: string | null,
  } | null,
};

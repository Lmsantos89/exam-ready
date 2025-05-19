import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";



type EagerOption = {
  readonly id: string;
  readonly text: string;
}

type LazyOption = {
  readonly id: string;
  readonly text: string;
}

export declare type Option = LazyLoading extends LazyLoadingDisabled ? EagerOption : LazyOption

export declare const Option: (new (init: ModelInit<Option>) => Option)

type EagerAnswer = {
  readonly questionID: string;
  readonly selectedOption?: string | null;
  readonly isCorrect?: boolean | null;
}

type LazyAnswer = {
  readonly questionID: string;
  readonly selectedOption?: string | null;
  readonly isCorrect?: boolean | null;
}

export declare type Answer = LazyLoading extends LazyLoadingDisabled ? EagerAnswer : LazyAnswer

export declare const Answer: (new (init: ModelInit<Answer>) => Answer)

type EagerExamType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExamType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly questions?: (Question | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExamType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExamType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly questions: AsyncCollection<Question>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ExamType = LazyLoading extends LazyLoadingDisabled ? EagerExamType : LazyExamType

export declare const ExamType: (new (init: ModelInit<ExamType>) => ExamType) & {
  copyOf(source: ExamType, mutator: (draft: MutableModel<ExamType>) => MutableModel<ExamType> | void): ExamType;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly options?: (Option | null)[] | null;
  readonly correctAnswer: string;
  readonly explanation?: string | null;
  readonly difficulty?: string | null;
  readonly examTypeID: string;
  readonly isAIGenerated?: boolean | null;
  readonly topic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly examTypeQuestionsId?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text: string;
  readonly options?: (Option | null)[] | null;
  readonly correctAnswer: string;
  readonly explanation?: string | null;
  readonly difficulty?: string | null;
  readonly examTypeID: string;
  readonly isAIGenerated?: boolean | null;
  readonly topic?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly examTypeQuestionsId?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly examAttempts?: (ExamAttempt | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly examAttempts: AsyncCollection<ExamAttempt>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerExamAttempt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExamAttempt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly examTypeID: string;
  readonly score?: number | null;
  readonly completedAt?: string | null;
  readonly answers?: (Answer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userExamAttemptsId?: string | null;
}

type LazyExamAttempt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExamAttempt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userID: string;
  readonly examTypeID: string;
  readonly score?: number | null;
  readonly completedAt?: string | null;
  readonly answers?: (Answer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userExamAttemptsId?: string | null;
}

export declare type ExamAttempt = LazyLoading extends LazyLoadingDisabled ? EagerExamAttempt : LazyExamAttempt

export declare const ExamAttempt: (new (init: ModelInit<ExamAttempt>) => ExamAttempt) & {
  copyOf(source: ExamAttempt, mutator: (draft: MutableModel<ExamAttempt>) => MutableModel<ExamAttempt> | void): ExamAttempt;
}
// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ExamType, Question, User, ExamAttempt, Option, Answer } = initSchema(schema);

export {
  ExamType,
  Question,
  User,
  ExamAttempt,
  Option,
  Answer
};
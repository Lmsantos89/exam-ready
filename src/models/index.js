// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Certification, Exam, Question, User, ExamAttempt, Option, Answer } = initSchema(schema);

export {
  Certification,
  Exam,
  Question,
  User,
  ExamAttempt,
  Option,
  Answer
};
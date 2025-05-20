// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Provider, Certification, Exam, Question, User, ExamAttempt, Option, Answer } = initSchema(schema);

export {
  Provider,
  Certification,
  Exam,
  Question,
  User,
  ExamAttempt,
  Option,
  Answer
};
import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { generateQuestions } from './functions/generateQuestions/resource';

/**
 * Define your backend
 */
export const backend = defineBackend({
  auth,
  data,
  generateQuestions
});
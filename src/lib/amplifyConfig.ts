import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

// Configure Amplify
export const configureAmplify = () => {
  // Only configure if aws-exports.js exists
  if (awsconfig) {
    Amplify.configure(awsconfig);
  }
};

// Initialize Amplify configuration
configureAmplify();
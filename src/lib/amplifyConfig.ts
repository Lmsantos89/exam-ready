import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';

// Configure Amplify
export const configureAmplify = () => {
  try {
    Amplify.configure(config);
    console.log('Amplify configured successfully');
  } catch (error) {
    console.error('Error configuring Amplify:', error);
  }
};

// Initialize Amplify configuration
configureAmplify();
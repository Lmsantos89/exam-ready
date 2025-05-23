// src/lib/amplifyConfig.ts
import { Amplify } from 'aws-amplify';

// Load environment-specific configuration
const getConfig = () => {
  // For deployed environments, use the generated configuration
  try {
    return require('../amplifyconfiguration.json');
  } catch (e) {
    console.warn('Amplify configuration not found, using default config');
    return {
      Auth: {
        Cognito: {
          userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || 'YOUR_USER_POOL_ID',
          userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || 'YOUR_USER_POOL_CLIENT_ID',
        }
      }
    };
  }
};

// Configure Amplify
Amplify.configure(getConfig());
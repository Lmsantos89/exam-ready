import { Amplify } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from 'aws-amplify/auth/cognito';
import { createGenericResolver } from 'aws-amplify/api';
import { generateClient } from 'aws-amplify/api';

// Load environment-specific configuration
const getConfig = () => {
  const env = process.env.NEXT_PUBLIC_ENV || 'staging';
  
  // For deployed environments, use the generated configuration
  try {
    // Try to load from the root directory first
    return require('../../amplifyconfiguration.json');
  } catch (e) {
    try {
      // Try to load from the src directory as fallback
      return require('../amplifyconfiguration.json');
    } catch (e) {
      console.warn('Amplify configuration not found, using default config');
      return {
        Auth: {
          Cognito: {
            userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || 'YOUR_USER_POOL_ID',
            userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || 'YOUR_USER_POOL_CLIENT_ID',
            region: process.env.NEXT_PUBLIC_REGION || 'eu-central-1'
          }
        },
        API: {
          GraphQL: {
            endpoint: process.env.NEXT_PUBLIC_APPSYNC_ENDPOINT || 'YOUR_APPSYNC_ENDPOINT',
            region: process.env.NEXT_PUBLIC_REGION || 'eu-central-1',
            defaultAuthMode: 'apiKey',
            apiKey: process.env.NEXT_PUBLIC_APPSYNC_API_KEY || 'YOUR_API_KEY'
          },
          REST: {
            generateQuestions: {
              endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || 'YOUR_API_ENDPOINT',
              region: process.env.NEXT_PUBLIC_REGION || 'eu-central-1'
            }
          }
        }
      };
    }
  }
};

// Configure Amplify
Amplify.configure(getConfig());

// Create a GraphQL client that can be used throughout the app
export const client = generateClient();

// Configure REST API
const restConfig = getConfig().API?.REST;
if (restConfig?.generateQuestions) {
  createGenericResolver(
    'generateQuestions',
    {
      endpoint: restConfig.generateQuestions.endpoint,
      region: restConfig.generateQuestions.region
    }
  );
}
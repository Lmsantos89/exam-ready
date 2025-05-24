import { Amplify } from 'aws-amplify';

// Load environment-specific configuration
const getConfig = () => {
  const env = process.env.NEXT_PUBLIC_ENV || 'staging';
  
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
};

// Configure Amplify
Amplify.configure(getConfig());
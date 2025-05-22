import { Amplify } from 'aws-amplify';

// Configure Amplify to use your real Cognito User Pool
Amplify.configure({
  Auth: {
    Cognito: {
      // Replace these with your actual Cognito User Pool values
      userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID || 'YOUR_USER_POOL_ID',
      userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID || 'YOUR_USER_POOL_CLIENT_ID',
    }
  },
  // If you're still using the sandbox for data, keep this
  API: {
    GraphQL: {
      endpoint: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:20002/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
    }
  }
});
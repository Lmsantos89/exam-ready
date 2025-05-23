import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

// Configure DynamoDB client for local development
export function getDynamoClient() {
  if (process.env.NEXT_PUBLIC_USE_LOCAL_DB === 'true') {
    console.log('Using local DynamoDB');
    
    // Create a DynamoDB client configured for local use
    const client = new DynamoDBClient({
      region: 'local',
      endpoint: 'http://localhost:8000',
      credentials: {
        accessKeyId: 'local',
        secretAccessKey: 'local'
      }
    });
    
    return DynamoDBDocumentClient.from(client);
  }
  
  // For production, use the default AWS configuration
  const client = new DynamoDBClient({
    region: process.env.NEXT_PUBLIC_REGION || 'us-east-1'
  });
  
  return DynamoDBDocumentClient.from(client);
}
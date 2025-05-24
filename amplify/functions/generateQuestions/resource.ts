import { defineFunction } from '@aws-amplify/backend';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

export const generateQuestions = defineFunction({
  entry: './handler.ts',
  environment: {
    REGION: 'eu-central-1',
    MODEL_ID: 'anthropic.claude-3-sonnet-20240229-v1:0'
  },
  timeoutSeconds: 30,
  memoryMB: 512
  // REST API endpoint configuration should be handled in your Amplify API resource, not here.
});
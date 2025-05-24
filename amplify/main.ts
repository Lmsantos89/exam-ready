import { App } from 'aws-cdk-lib';
import { backend } from './backend';

const app = new App({
  context: {
    'amplify-backend-namespace': 'examready-staging',
    'amplify-backend-name': 'examready',
    'environment': 'staging'
  }
});

// Deploy the backend
backend.createStack(app, {
  stackName: 'amplify-examready-staging'
});

app.synth();
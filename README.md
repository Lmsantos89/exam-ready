# ExamReady

A platform for exam preparation and certification training.

## Environments

This application supports multiple environments:

- **Staging**: For testing and QA
- **Production**: For live deployment

## Deployment

### Prerequisites

1. Install the AWS Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Configure AWS credentials:
   ```bash
   amplify configure
   ```

### Deploying to Staging

```bash
npx ampx deploy --environment staging
```

### Deploying to Production

```bash
npx ampx deploy --environment production
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Access the application at http://localhost:3000

## Backend Resources

The application uses the following AWS resources:

- **Authentication**: Amazon Cognito User Pool
- **Database**: Amazon DynamoDB with AppSync GraphQL API
- **AI Question Generation**: AWS Lambda function with Amazon Bedrock (Claude 3)

## Data Schema

The application uses the following data models:

- **Provider**: Certification providers (e.g., AWS, Microsoft)
- **Certification**: Certification programs offered by providers
- **Exam**: Practice exams for certifications
- **Question**: Questions within exams
- **User**: Application users
- **ExamAttempt**: User attempts at exams

## Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build the application
- `npm run start` - Start the production server
- `npm run lint` - Run linting checks
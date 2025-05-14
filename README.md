# ExamReady - AI-Powered Certification Exam Preparation

ExamReady is a web application that provides mock certification exams with AI-generated practice questions to help users prepare for technical certification exams.

## Features

- Practice exams for various technical certifications (AWS, Azure, GCP, CompTIA)
- AI-generated practice questions using Amazon Bedrock
- Exam simulation mode with timed tests
- Practice mode with explanations and unlimited attempts
- Performance tracking and analytics

## Tech Stack

### Frontend
- Next.js (React framework)
- Tailwind CSS for styling
- AWS Amplify for authentication and API integration

### Backend
- AWS Lambda for serverless functions
- Amazon DynamoDB for database
- AWS AppSync for GraphQL API
- Amazon Bedrock for AI question generation
- Amazon Cognito for user authentication

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- AWS account
- AWS CLI configured locally

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/exam-ready.git
cd exam-ready
```

2. Install dependencies
```bash
npm install
```

3. Initialize Amplify (if not already done)
```bash
npm install -g @aws-amplify/cli
amplify init
```

4. Add authentication
```bash
amplify add auth
```

5. Add API
```bash
amplify add api
```

6. Push to AWS
```bash
amplify push
```

7. Start the development server
```bash
npm run dev
```

## Deployment

The application can be deployed using AWS Amplify:

```bash
amplify publish
```

## AWS Services Used

- **AWS Amplify**: Hosting the frontend application with CI/CD
- **Amazon Cognito**: User authentication and management
- **AWS AppSync**: GraphQL API for data operations
- **Amazon DynamoDB**: NoSQL database for storing exam data
- **AWS Lambda**: Serverless functions for backend logic
- **Amazon Bedrock**: AI model for generating exam questions
- **Amazon S3**: Storage for static assets

## Cost Optimization

For an MVP/demo, this architecture leverages several AWS free tier services:
- AWS Lambda: 1M free requests per month
- Amazon DynamoDB: 25GB free storage
- Amazon Cognito: 50,000 monthly active users in the free tier
- AWS Amplify: Free tier hosting for 12 months
- Amazon Bedrock: Pay only for the tokens you use

## Future Enhancements

- Add more certification types
- Implement spaced repetition learning
- Add study materials and resources
- Develop mobile applications
- Integrate with learning management systems
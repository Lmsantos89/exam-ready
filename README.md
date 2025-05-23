# ExamReady

A platform for exam preparation and certification training.

## Local Development with DynamoDB Local

This project can use a local DynamoDB instance to replicate the production database for development.

### Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development environment with DynamoDB:
   ```bash
   npm run dev:local-db
   ```

   This will:
   - Start a local DynamoDB instance on port 8000
   - Create tables matching the production schema
   - Import sample data from the sample-data directory
   - Start the Next.js development server with local DB configuration

3. Access the application at http://localhost:3000

### Importing Production Data

To import real production data:

1. Export data from your production DynamoDB tables:
   ```bash
   aws dynamodb scan --table-name Exam > sample-data/exams.json
   aws dynamodb scan --table-name Question > sample-data/questions.json
   # Export other tables as needed
   ```

2. Format the exported data if necessary (remove AWS-specific attributes)

3. Run the setup script:
   ```bash
   npm run dynamodb:setup
   ```

### Available Scripts

- `npm run dev` - Start Next.js development server
- `npm run dev:local-db` - Start development with local DynamoDB
- `npm run dynamodb:start` - Start just the DynamoDB Local instance
- `npm run dynamodb:setup` - Create tables and import data
- `npm run build` - Build the application
- `npm run start` - Start the production server
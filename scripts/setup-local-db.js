const { DynamoDB } = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure the DynamoDB client to use the local endpoint
const dynamoDb = new DynamoDB({
  region: 'local',
  endpoint: 'http://localhost:8000',
  accessKeyId: 'local',
  secretAccessKey: 'local'
});

// Create tables matching your production schema
async function createTables() {
  try {
    // Create Exam table
    await dynamoDb.createTable({
      TableName: 'Exam',
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
    }).promise();
    console.log('Exam table created');
    
    // Create Question table
    await dynamoDb.createTable({
      TableName: 'Question',
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },
        { AttributeName: 'examId', AttributeType: 'S' }
      ],
      GlobalSecondaryIndexes: [{
        IndexName: 'byExam',
        KeySchema: [{ AttributeName: 'examId', KeyType: 'HASH' }],
        Projection: { ProjectionType: 'ALL' },
        ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
      }],
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
    }).promise();
    console.log('Question table created');
    
    // Create ExamAttempt table
    await dynamoDb.createTable({
      TableName: 'ExamAttempt',
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },
        { AttributeName: 'userId', AttributeType: 'S' }
      ],
      GlobalSecondaryIndexes: [{
        IndexName: 'byUser',
        KeySchema: [{ AttributeName: 'userId', KeyType: 'HASH' }],
        Projection: { ProjectionType: 'ALL' },
        ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
      }],
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
    }).promise();
    console.log('ExamAttempt table created');
    
    // Create Certification table
    await dynamoDb.createTable({
      TableName: 'Certification',
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
    }).promise();
    console.log('Certification table created');
    
    // Create Provider table
    await dynamoDb.createTable({
      TableName: 'Provider',
      KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
      AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
      ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 }
    }).promise();
    console.log('Provider table created');
    
    console.log('All tables created successfully');
  } catch (error) {
    if (error.code === 'ResourceInUseException') {
      console.log('Tables already exist, skipping creation');
    } else {
      console.error('Error creating tables:', error);
    }
  }
}

// Import sample data or production data
async function importData() {
  try {
    const dataDir = path.join(__dirname, '../sample-data');
    
    // Check if sample data directory exists
    if (!fs.existsSync(dataDir)) {
      console.log('No sample data found. Creating directory...');
      fs.mkdirSync(dataDir, { recursive: true });
      return;
    }
    
    const documentClient = new DynamoDB.DocumentClient({ 
      region: 'local',
      endpoint: 'http://localhost:8000'
    });
    
    // Import Exam data if available
    const examDataPath = path.join(dataDir, 'exams.json');
    if (fs.existsSync(examDataPath)) {
      const examData = JSON.parse(fs.readFileSync(examDataPath, 'utf8'));
      console.log(`Importing ${examData.length} exams...`);
      
      for (const item of examData) {
        await documentClient.put({
          TableName: 'Exam',
          Item: item
        }).promise();
      }
      console.log('Exam data imported successfully');
    }
    
    // Import Question data if available
    const questionDataPath = path.join(dataDir, 'questions.json');
    if (fs.existsSync(questionDataPath)) {
      const questionData = JSON.parse(fs.readFileSync(questionDataPath, 'utf8'));
      console.log(`Importing ${questionData.length} questions...`);
      
      for (const item of questionData) {
        await documentClient.put({
          TableName: 'Question',
          Item: item
        }).promise();
      }
      console.log('Question data imported successfully');
    }
    
    // Import other data as needed...
    
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Run the setup
async function setup() {
  await createTables();
  await importData();
  console.log('Local DynamoDB setup complete');
}

setup();
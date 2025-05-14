// This would be deployed as an AWS Lambda function

const AWS = require('aws-sdk');

// Initialize the Bedrock client
const bedrockRuntime = new AWS.BedrockRuntime({
  region: 'us-east-1', // Use the region where Bedrock is available
});

/**
 * Generates a certification exam question using Amazon Bedrock
 * 
 * @param {Object} event - API Gateway event
 * @param {Object} context - Lambda context
 * @returns {Object} - Generated question
 */
exports.handler = async (event, context) => {
  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}');
    const { examType, topic, difficulty } = body;
    
    if (!examType) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'examType is required' })
      };
    }
    
    // Construct the prompt for the AI model
    const prompt = `Generate a multiple-choice question for a ${examType} certification exam.
${topic ? `The question should be about ${topic}.` : ''}
The question should be at ${difficulty || 'intermediate'} difficulty level.
Format the response as a JSON object with the following structure:
{
  "question": "The full text of the question",
  "options": [
    {"id": "a", "text": "First option"},
    {"id": "b", "text": "Second option"},
    {"id": "c", "text": "Third option"},
    {"id": "d", "text": "Fourth option"}
  ],
  "correctAnswer": "a", // The ID of the correct option
  "explanation": "A detailed explanation of why the correct answer is correct and why the others are incorrect"
}`;

    // Call Amazon Bedrock with Claude model
    const bedrockParams = {
      modelId: 'anthropic.claude-v2', // Use appropriate model ID
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        prompt: `Human: ${prompt}\n\nAssistant:`,
        max_tokens_to_sample: 2000,
        temperature: 0.7,
        top_p: 0.9,
      })
    };

    // In a real implementation, we would call Bedrock
    // const response = await bedrockRuntime.invokeModel(bedrockParams).promise();
    // const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    // const generatedContent = responseBody.completion;
    
    // For demo purposes, we'll return a mock response
    const mockQuestion = {
      question: `What is the primary benefit of using ${topic || 'serverless architecture'} in a cloud environment?`,
      options: [
        { id: 'a', text: 'Reduced operational complexity and management overhead' },
        { id: 'b', text: 'Unlimited free compute resources' },
        { id: 'c', text: 'Guaranteed 100% uptime' },
        { id: 'd', text: 'Elimination of all security concerns' }
      ],
      correctAnswer: 'a',
      explanation: 'Serverless architectures reduce operational complexity by eliminating the need to provision, scale, and manage servers. This allows developers to focus on code rather than infrastructure management. The other options are not accurate: cloud resources are not free (though you pay only for what you use), no service guarantees 100% uptime, and security remains a shared responsibility.'
    };
    
    // Generate a unique ID for the question
    const questionId = Date.now().toString();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        id: questionId,
        text: mockQuestion.question,
        options: mockQuestion.options,
        correctAnswer: mockQuestion.correctAnswer,
        explanation: mockQuestion.explanation
      })
    };
  } catch (error) {
    console.error('Error generating question:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Failed to generate question' })
    };
  }
};
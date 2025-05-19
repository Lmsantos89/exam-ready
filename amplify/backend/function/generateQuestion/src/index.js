const AWS = require('aws-sdk');

// Initialize the Bedrock client
const bedrockRuntime = new AWS.BedrockRuntime({
  region: process.env.REGION, // Use the region from environment variables
});

/**
 * Generates a certification exam question using Amazon Bedrock
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

    // Call Amazon Bedrock with Claude 3 Sonnet model
    const bedrockParams = {
      modelId: 'anthropic.claude-3-sonnet-20240229-v1:0',
      contentType: 'application/json',
      accept: 'application/json',
      body: JSON.stringify({
        anthropic_version: "bedrock-2023-05-31",
        max_tokens: 2000,
        temperature: 0.7,
        top_p: 0.9,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    };

    // Call Bedrock
    const response = await bedrockRuntime.invokeModel(bedrockParams).promise();
    const responseBody = JSON.parse(Buffer.from(response.body).toString());
    const generatedContent = responseBody.content[0].text;
    
    // Parse the generated content to extract the JSON
    const jsonMatch = generatedContent.match(/\{[\s\S]*\}/);
    let questionData;
    
    if (jsonMatch) {
      questionData = JSON.parse(jsonMatch[0]);
    } else {
      // Fallback to mock if parsing fails
      questionData = {
        question: `What is the primary benefit of using ${topic || 'serverless architecture'} in a cloud environment?`,
        options: [
          { id: 'a', text: 'Reduced operational complexity and management overhead' },
          { id: 'b', text: 'Unlimited free compute resources' },
          { id: 'c', text: 'Guaranteed 100% uptime' },
          { id: 'd', text: 'Elimination of all security concerns' }
        ],
        correctAnswer: 'a',
        explanation: 'Serverless architectures reduce operational complexity by eliminating the need to provision, scale, and manage servers.'
      };
    }
    
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
        text: questionData.question,
        options: questionData.options,
        correctAnswer: questionData.correctAnswer,
        explanation: questionData.explanation
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
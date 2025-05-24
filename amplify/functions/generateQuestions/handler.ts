import { BedrockRuntimeClient, InvokeModelCommand } from '@aws-sdk/client-bedrock-runtime';

// Initialize the Bedrock client
const bedrockRuntime = new BedrockRuntimeClient({
  region: process.env.REGION || 'eu-central-1',
});

/**
 * Generates a certification exam question using Amazon Bedrock
 */
export const handler = async (event: any) => {
  try {
    // Parse request body
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : (event.body || {});
    const { examId, topic, difficulty = 'intermediate' } = body;
    
    if (!examId) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ error: 'examId is required' })
      };
    }
    
    // Construct the prompt for the AI model
    const prompt = `Generate a multiple-choice question for a certification exam.
${topic ? `The question should be about ${topic}.` : ''}
The question should be at ${difficulty} difficulty level.
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
    const modelId = process.env.MODEL_ID || 'anthropic.claude-3-sonnet-20240229-v1:0';
    
    const bedrockParams = {
      modelId,
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

    const command = new InvokeModelCommand(bedrockParams);
    const response = await bedrockRuntime.send(command);
    
    // Parse the response
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    const generatedContent = responseBody.content[0].text;
    
    // Extract the JSON from the response
    const jsonMatch = generatedContent.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Could not extract JSON from response');
    }
    
    const questionData = JSON.parse(jsonMatch[0]);
    
    // Generate a unique ID for the question
    const questionId = `question-${Date.now()}`;
    
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
        explanation: questionData.explanation,
        difficulty,
        examID: examId,
        isAIGenerated: true,
        topic: topic || 'General'
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
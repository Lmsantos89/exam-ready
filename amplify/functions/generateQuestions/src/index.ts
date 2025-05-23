export const handler = async (event: any) => {
  console.log('Received event:', JSON.stringify(event, null, 2));
  
  // Parse the body if it's a string (from API Gateway)
  const body = typeof event.body === 'string' ? JSON.parse(event.body) : (event.body || event);
  const { examId, topic = 'General', difficulty = 'intermediate' } = body;
  
  // Mock response for dev environment
  const question = {
    id: `question-${Date.now()}`,
    text: `Sample question about ${topic} with ${difficulty} difficulty`,
    options: [
      { id: 'a', text: 'First option' },
      { id: 'b', text: 'Second option' },
      { id: 'c', text: 'Third option' },
      { id: 'd', text: 'Fourth option' }
    ],
    correctAnswer: 'b',
    explanation: 'This is a sample explanation for the generated question.',
    difficulty,
    examID: examId,
    isAIGenerated: true,
    topic
  };
  
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(question)
  };
};
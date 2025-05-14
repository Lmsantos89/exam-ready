import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AIQuestionGenerator from '../../../components/AIQuestionGenerator';

// Mock exam data (same as in index.tsx)
const MOCK_EXAMS = {
  'aws-sa': {
    title: 'AWS Solutions Architect Associate',
    questions: [
      {
        id: 1,
        text: 'Which AWS service would you use to run containers without managing servers or clusters?',
        options: [
          { id: 'a', text: 'Amazon ECS' },
          { id: 'b', text: 'Amazon EKS' },
          { id: 'c', text: 'AWS Fargate' },
          { id: 'd', text: 'AWS Lambda' }
        ],
        correctAnswer: 'c',
        explanation: 'AWS Fargate is a serverless compute engine for containers that works with both Amazon ECS and Amazon EKS. It allows you to run containers without having to manage servers or clusters.'
      }
    ]
  },
  'azure-admin': {
    title: 'Microsoft Azure Administrator',
    questions: [
      {
        id: 1,
        text: 'Which Azure service should you use to store unstructured data such as documents and media files?',
        options: [
          { id: 'a', text: 'Azure SQL Database' },
          { id: 'b', text: 'Azure Cosmos DB' },
          { id: 'c', text: 'Azure Blob Storage' },
          { id: 'd', text: 'Azure Table Storage' }
        ],
        correctAnswer: 'c',
        explanation: 'Azure Blob Storage is optimized for storing massive amounts of unstructured data, such as text or binary data like documents, media files, and application installers.'
      }
    ]
  }
};

export default function PracticeMode() {
  const router = useRouter();
  const { examId } = router.query;
  
  const [currentExam, setCurrentExam] = useState(null);
  const [practiceQuestions, setPracticeQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  useEffect(() => {
    if (examId && typeof examId === 'string' && MOCK_EXAMS[examId]) {
      setCurrentExam(MOCK_EXAMS[examId]);
      setPracticeQuestions([...MOCK_EXAMS[examId].questions]);
    }
  }, [examId]);
  
  if (!currentExam || practiceQuestions.length === 0) {
    return <div className="p-8 text-center">Loading practice mode...</div>;
  }
  
  const currentQuestion = practiceQuestions[currentQuestionIndex];
  
  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
  };
  
  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    if (currentQuestionIndex < practiceQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If we're at the end, go back to the first question
      setCurrentQuestionIndex(0);
    }
  };
  
  const handleAddQuestion = (newQuestion) => {
    setPracticeQuestions([...practiceQuestions, newQuestion]);
    // Optionally move to the new question
    setCurrentQuestionIndex(practiceQuestions.length);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Practice Mode: {currentExam.title} | ExamReady</title>
      </Head>
      
      <div className="p-4 bg-white shadow fixed top-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{currentExam.title} - Practice Mode</h1>
            <div className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {practiceQuestions.length}
            </div>
          </div>
          <button
            onClick={() => router.push('/exams')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded text-sm"
          >
            Exit Practice
          </button>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow mb-8">
              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Question {currentQuestionIndex + 1}</h2>
                <p className="text-lg">{currentQuestion.text}</p>
              </div>
              
              <div className="mb-8">
                {currentQuestion.options.map(option => (
                  <div 
                    key={option.id}
                    className={`p-4 border rounded mb-3 cursor-pointer ${
                      selectedAnswer === option.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : showExplanation && option.id === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50'
                          : showExplanation && selectedAnswer === option.id
                            ? 'border-red-500 bg-red-50'
                            : 'hover:bg-gray-50'
                    }`}
                    onClick={() => !showExplanation && handleAnswerSelect(option.id)}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                        selectedAnswer === option.id 
                          ? 'border-blue-500 bg-blue-500 text-white' 
                          : showExplanation && option.id === currentQuestion.correctAnswer
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-gray-300'
                      }`}>
                        {option.id.toUpperCase()}
                      </div>
                      <div>{option.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {showExplanation ? (
                <div className="mb-8">
                  <h3 className="font-medium mb-2">Explanation:</h3>
                  <div className="p-4 bg-blue-50 rounded">
                    {currentQuestion.explanation}
                  </div>
                </div>
              ) : null}
              
              <div className="flex justify-between">
                {!showExplanation ? (
                  <button 
                    onClick={handleCheckAnswer}
                    disabled={!selectedAnswer}
                    className={`px-4 py-2 rounded ${
                      !selectedAnswer 
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Check Answer
                  </button>
                ) : (
                  <button 
                    onClick={handleNextQuestion}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                  >
                    Next Question
                  </button>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <AIQuestionGenerator 
              examType={currentExam.title}
              onQuestionGenerated={handleAddQuestion}
            />
            
            <div className="bg-white p-6 rounded-lg shadow mt-6">
              <h2 className="text-xl font-semibold mb-4">Question Navigator</h2>
              <div className="flex flex-wrap gap-2">
                {practiceQuestions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentQuestionIndex(index);
                      setSelectedAnswer(null);
                      setShowExplanation(false);
                    }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentQuestionIndex === index 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
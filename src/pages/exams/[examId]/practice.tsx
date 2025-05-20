import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AIQuestionGenerator from '../../../components/AIQuestionGenerator';
import { getExamById, getQuestionsByExamId, saveQuestion } from '../../../services/exams/examService';
import Link from 'next/link';
import AuthRequired from '../../../components/AuthRequired';

export default function PracticeMode() {
  const router = useRouter();
  const { examId } = router.query;
  
  const [currentExam, setCurrentExam] = useState(null);
  const [practiceQuestions, setPracticeQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    async function fetchExamData() {
      if (!examId || typeof examId !== 'string') return;
      
      try {
        setLoading(true);
        
        // Fetch exam details
        const examData = await getExamById(examId);
        if (!examData) {
          setError('Exam not found');
          return;
        }
        
        setCurrentExam(examData);
        
        // Fetch questions for this exam
        const questionsData = await getQuestionsByExamId(examId);
        if (questionsData && questionsData.length > 0) {
          setPracticeQuestions(questionsData);
        } else {
          setError('No questions found for this exam');
        }
      } catch (err) {
        console.error('Error fetching exam data:', err);
        setError('Failed to load exam data');
      } finally {
        setLoading(false);
      }
    }
    
    fetchExamData();
  }, [examId]);
  
  if (loading) {
    return <div className="p-8 text-center">Loading practice mode...</div>;
  }
  
  if (error || !currentExam || practiceQuestions.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 mb-4">{error || 'No questions available'}</p>
        <Link href="/exams" className="text-blue-600 hover:underline">
          Return to exams
        </Link>
      </div>
    );
  }
  
  // Filter out questions without options to prevent errors
  const validQuestions = practiceQuestions.filter(q => q.options && Array.isArray(q.options) && q.options.length > 0);
  
  // If no valid questions remain after filtering, show an error
  if (validQuestions.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-500 mb-4">No valid questions found. Questions must have answer options.</p>
        <Link href="/exams" className="text-blue-600 hover:underline">
          Return to exams
        </Link>
      </div>
    );
  }
  
  // Adjust currentQuestionIndex if it's out of bounds after filtering
  const safeIndex = Math.min(currentQuestionIndex, validQuestions.length - 1);
  const currentQuestion = validQuestions[safeIndex];
  
  const handleAnswerSelect = (optionId) => {
    setSelectedAnswer(optionId);
  };
  
  const handleCheckAnswer = () => {
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    if (currentQuestionIndex < validQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If we're at the end, go back to the first question
      setCurrentQuestionIndex(0);
    }
  };
  
  const handleAddQuestion = async (newQuestion) => {
    try {
      // Save the generated question to the database
      const questionToSave = {
        ...newQuestion,
        examID: examId,
        isAIGenerated: true
      };
      
      // Save to database
      await saveQuestion(questionToSave);
      
      // Add to local state
      setPracticeQuestions([...practiceQuestions, newQuestion]);
      
      // Move to the new question - it will be added to validQuestions if it has options
      if (newQuestion.options && Array.isArray(newQuestion.options) && newQuestion.options.length > 0) {
        setCurrentQuestionIndex(validQuestions.length);
      }
      setSelectedAnswer(null);
      setShowExplanation(false);
    } catch (err) {
      console.error('Error saving generated question:', err);
    }
  };
  
  // Rest of the component remains the same...
  
  return (
    <AuthRequired>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Practice Mode: {currentExam.name} | ExamReady</title>
        </Head>
      
      <div>
        <div className="p-4 bg-white shadow fixed top-16 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">{currentExam.name} - Practice Mode</h1>
              <div className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {validQuestions.length}
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
      </div>
      
      <main className="container mx-auto px-4 py-32">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow mb-8">
              <div className="mb-8">
                <h2 className="text-xl font-medium mb-4">Question {currentQuestionIndex + 1}</h2>
                <p className="text-lg">{currentQuestion.text}</p>
              </div>
              
              <div className="mb-8">
                {currentQuestion.options && currentQuestion.options.length > 0 ? (
                  currentQuestion.options.map(option => (
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
                  ))
                ) : (
                  <div className="p-4 border rounded mb-3 bg-yellow-50 text-yellow-700">
                    This question is missing answer options. Please contact an administrator.
                  </div>
                )}
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
              examId={currentExam.name}
              onQuestionGenerated={handleAddQuestion}
            />
            
            <div className="bg-white p-6 rounded-lg shadow mt-6">
              <h2 className="text-xl font-semibold mb-4">Question Navigator</h2>
              <div className="flex flex-wrap gap-2">
                {validQuestions.map((q, index) => (
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
                        : q.isAIGenerated
                          ? 'bg-purple-100 text-purple-800 hover:bg-purple-200'
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
    </AuthRequired>
  );
}

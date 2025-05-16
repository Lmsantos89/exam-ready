import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AuthRequired from '../../../components/AuthRequired';
import { getFullExamWithQuestions, ExamWithQuestions } from '../../../services/exams/examService';

export default function Exam() {
  const router = useRouter();
  const { examId } = router.query;
  
  const [currentExam, setCurrentExam] = useState<ExamWithQuestions | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [examCompleted, setExamCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(130 * 60); // 130 minutes in seconds
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    async function fetchExamData() {
      if (!examId || typeof examId !== 'string') return;
      
      try {
        setLoading(true);
        const examData = await getFullExamWithQuestions(examId);
        
        if (!examData) {
          setError('Exam not found');
          return;
        }
        
        if (!examData.questions || examData.questions.length === 0) {
          setError('No questions found for this exam');
          return;
        }
        
        setCurrentExam(examData);
      } catch (err) {
        console.error('Error fetching exam data:', err);
        setError('Failed to load exam data');
      } finally {
        setLoading(false);
      }
    }
    
    fetchExamData();
  }, [examId]);
  
  useEffect(() => {
    if (!examCompleted && currentExam) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setExamCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [currentExam, examCompleted]);
  
  if (loading) {
    return (
      <AuthRequired>
        <div className="p-8 text-center">Loading exam...</div>
      </AuthRequired>
    );
  }
  
  if (error || !currentExam) {
    return (
      <AuthRequired>
        <div className="p-8 text-center">
          <p className="text-red-500 mb-4">{error || 'Failed to load exam'}</p>
          <button 
            onClick={() => router.push('/exams')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Back to Exams
          </button>
        </div>
      </AuthRequired>
    );
  }
  
  const currentQuestion = currentExam.questions[currentQuestionIndex];
  
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleAnswerSelect = (optionId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optionId
    });
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < currentExam.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleSubmitExam = () => {
    setExamCompleted(true);
  };
  
  const calculateScore = () => {
    let correctCount = 0;
    currentExam.questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });
    return {
      correct: correctCount,
      total: currentExam.questions.length,
      percentage: Math.round((correctCount / currentExam.questions.length) * 100)
    };
  };
  
  if (examCompleted) {
    const score = calculateScore();
    return (
      <AuthRequired>
        <div className="min-h-screen bg-gray-50 p-8">
          <Head>
            <title>Exam Results | ExamReady</title>
          </Head>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-2xl font-bold mb-6">Exam Results: {currentExam.name}</h1>
          
          <div className="text-center mb-8">
            <div className="text-5xl font-bold mb-2">{score.percentage}%</div>
            <div className="text-xl text-gray-600">
              {score.correct} correct out of {score.total} questions
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Question Review</h2>
            {currentExam.questions.map((question, index) => (
              <div key={question.id} className="mb-6 p-4 border rounded">
                <div className="flex items-start">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    selectedAnswers[question.id] === question.correctAnswer 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedAnswers[question.id] === question.correctAnswer ? '✓' : '✗'}
                  </div>
                  <div>
                    <div className="font-medium mb-2">Question {index + 1}: {question.text}</div>
                    <div className="ml-4 mb-2">
                      <div>Your answer: {question.options.find(o => o.id === selectedAnswers[question.id])?.text || 'Not answered'}</div>
                      <div>Correct answer: {question.options.find(o => o.id === question.correctAnswer)?.text}</div>
                    </div>
                    {question.explanation && (
                      <div className="mt-2 p-3 bg-blue-50 text-sm">{question.explanation}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={() => router.push('/exams')}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
              Back to Exams
            </button>
            <button 
              onClick={() => {
                setExamCompleted(false);
                setCurrentQuestionIndex(0);
                setSelectedAnswers({});
                setTimeRemaining(130 * 60);
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Retake Exam
            </button>
          </div>
        </div>
      </div>
      </AuthRequired>
    );
  }
  
  return (
    <AuthRequired>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>{currentExam.name} | ExamReady</title>
        </Head>
      
      <div>
        <div className="p-4 bg-white shadow fixed top-16 left-0 right-0 z-10">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">{currentExam.name}</h1>
              <div className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {currentExam.questions.length}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-mono">{formatTime(timeRemaining)}</div>
              <div className="text-sm text-gray-500">Time Remaining</div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
          <div className="mb-8">
            <h2 className="text-xl font-medium mb-4">Question {currentQuestionIndex + 1}</h2>
            <p className="text-lg">{currentQuestion.text}</p>
          </div>
          
          <div className="mb-8">
            {currentQuestion.options.map(option => (
              <div 
                key={option.id}
                className={`p-4 border rounded mb-3 cursor-pointer ${
                  selectedAnswers[currentQuestion.id] === option.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => handleAnswerSelect(option.id)}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                    selectedAnswers[currentQuestion.id] === option.id 
                      ? 'border-blue-500 bg-blue-500 text-white' 
                      : 'border-gray-300'
                  }`}>
                    {option.id.toUpperCase()}
                  </div>
                  <div>{option.text}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between">
            <button 
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded ${
                currentQuestionIndex === 0 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              Previous
            </button>
            
            {currentQuestionIndex < currentExam.questions.length - 1 ? (
              <button 
                onClick={handleNextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            ) : (
              <button 
                onClick={handleSubmitExam}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                Submit Exam
              </button>
            )}
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto mt-8">
          <div className="flex flex-wrap gap-2">
            {currentExam.questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentQuestionIndex === index 
                    ? 'bg-blue-600 text-white' 
                    : selectedAnswers[q.id] 
                      ? 'bg-green-100 text-green-800 border border-green-300' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
    </AuthRequired>
  );
}
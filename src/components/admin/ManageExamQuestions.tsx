import React, { useState, useEffect } from 'react';
import { getExamQuestions, addQuestionToExam, removeQuestionFromExam } from '../../services/exams/adminService';

interface Question {
  id: string;
  text: string;
  options: Array<{id: string; text: string}>;
  correctAnswer: string;
  explanation?: string;
}

interface ManageExamQuestionsProps {
  examId: string;
  examName: string;
}

export default function ManageExamQuestions({ examId, examName }: ManageExamQuestionsProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  
  // New question form state
  const [newQuestion, setNewQuestion] = useState({
    text: '',
    options: [
      { id: 'a', text: '' },
      { id: 'b', text: '' },
      { id: 'c', text: '' },
      { id: 'd', text: '' }
    ],
    correctAnswer: 'a',
    explanation: ''
  });

  useEffect(() => {
    fetchQuestions();
  }, [examId]);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const examQuestions = await getExamQuestions(examId);
      setQuestions(examQuestions);
    } catch (err) {
      console.error('Error fetching questions:', err);
      setError('Failed to load questions');
    } finally {
      setLoading(false);
    }
  };

  const handleAddQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // Validate question
      if (!newQuestion.text.trim()) {
        setError('Question text is required');
        return;
      }
      
      // Validate options
      for (const option of newQuestion.options) {
        if (!option.text.trim()) {
          setError(`Option ${option.id.toUpperCase()} text is required`);
          return;
        }
      }
      
      await addQuestionToExam(examId, newQuestion);
      setSuccess('Question added successfully');
      setNewQuestion({
        text: '',
        options: [
          { id: 'a', text: '' },
          { id: 'b', text: '' },
          { id: 'c', text: '' },
          { id: 'd', text: '' }
        ],
        correctAnswer: 'a',
        explanation: ''
      });
      setShowAddQuestion(false);
      fetchQuestions();
    } catch (err: any) {
      setError(err.message || 'Failed to add question');
    }
  };

  const handleRemoveQuestion = async (questionId: string) => {
    if (!confirm('Are you sure you want to remove this question?')) {
      return;
    }
    
    try {
      await removeQuestionFromExam(examId, questionId);
      setSuccess('Question removed successfully');
      fetchQuestions();
    } catch (err: any) {
      setError(err.message || 'Failed to remove question');
    }
  };

  const handleOptionChange = (optionId: string, value: string) => {
    setNewQuestion({
      ...newQuestion,
      options: newQuestion.options.map(option => 
        option.id === optionId ? { ...option, text: value } : option
      )
    });
  };

  if (loading) {
    return <div className="text-center py-8">Loading questions...</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Questions for {examName}</h2>
        <button
          onClick={() => setShowAddQuestion(!showAddQuestion)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          {showAddQuestion ? 'Cancel' : 'Add Question'}
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      {showAddQuestion && (
        <div className="mb-8 border-b pb-8">
          <h3 className="text-lg font-medium mb-4">Add New Question</h3>
          <form onSubmit={handleAddQuestion}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Question Text
              </label>
              <textarea
                value={newQuestion.text}
                onChange={(e) => setNewQuestion({...newQuestion, text: e.target.value})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={2}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Options
              </label>
              {newQuestion.options.map(option => (
                <div key={option.id} className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full border flex items-center justify-center mr-3">
                    {option.id.toUpperCase()}
                  </div>
                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(option.id, e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={`Option ${option.id.toUpperCase()}`}
                    required
                  />
                </div>
              ))}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Correct Answer
              </label>
              <select
                value={newQuestion.correctAnswer}
                onChange={(e) => setNewQuestion({...newQuestion, correctAnswer: e.target.value})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                {newQuestion.options.map(option => (
                  <option key={option.id} value={option.id}>
                    Option {option.id.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Explanation (Optional)
              </label>
              <textarea
                value={newQuestion.explanation}
                onChange={(e) => setNewQuestion({...newQuestion, explanation: e.target.value})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows={2}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Question
              </button>
            </div>
          </form>
        </div>
      )}

      <div>
        <h3 className="text-lg font-medium mb-4">Current Questions ({questions.length})</h3>
        
        {questions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No questions added yet. Click "Add Question" to create one.
          </div>
        ) : (
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={question.id} className="border rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">Question {index + 1}</h4>
                  <button
                    onClick={() => handleRemoveQuestion(question.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
                <p className="my-2">{question.text}</p>
                
                <div className="ml-4 space-y-1 mt-2">
                  {question.options.map(option => (
                    <div key={option.id} className="flex items-start">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-2 ${
                        option.id === question.correctAnswer ? 'bg-green-100 border-green-500' : ''
                      }`}>
                        {option.id.toUpperCase()}
                      </div>
                      <div>{option.text}</div>
                    </div>
                  ))}
                </div>
                
                {question.explanation && (
                  <div className="mt-2 text-sm text-gray-600 bg-gray-50 p-2 rounded">
                    <span className="font-medium">Explanation:</span> {question.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
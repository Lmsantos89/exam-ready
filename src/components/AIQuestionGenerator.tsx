import { useState } from 'react';
import { generateQuestion, QuestionGenerationParams } from '../services/ai/questionGenerator';

interface AIQuestionGeneratorProps {
  examType: string;
  onQuestionGenerated: (question: any) => void;
}

export default function AIQuestionGenerator({ examType, onQuestionGenerated }: AIQuestionGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [error, setError] = useState('');
  
  const handleGenerateQuestion = async () => {
    setIsGenerating(true);
    setError('');
    
    try {
      const params: QuestionGenerationParams = {
        examType,
        topic: topic || undefined,
        difficulty
      };
      
      const question = await generateQuestion(params);
      onQuestionGenerated(question);
    } catch (err) {
      console.error('Failed to generate question:', err);
      setError('Failed to generate question. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Generate AI Question</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Topic (optional)
        </label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., Networking, Security, Storage"
          className="w-full p-2 border rounded"
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Difficulty
        </label>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value as any)}
          className="w-full p-2 border rounded"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      
      <button
        onClick={handleGenerateQuestion}
        disabled={isGenerating}
        className={`w-full py-2 px-4 rounded font-medium ${
          isGenerating
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isGenerating ? 'Generating...' : 'Generate Question'}
      </button>
    </div>
  );
}

import React from 'react';
import { ExamResult } from '../../services/exams/userService';

interface PerformanceMetricsProps {
  examHistory: ExamResult[];
}

export default function PerformanceMetrics({ examHistory }: PerformanceMetricsProps) {
  // Calculate metrics
  const totalExams = examHistory.length;
  
  if (totalExams === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No exam data available yet. Take an exam to see your performance metrics.</p>
      </div>
    );
  }
  
  const averageScore = examHistory.reduce((sum, exam) => sum + exam.score, 0) / totalExams;
  const totalQuestions = examHistory.reduce((sum, exam) => sum + exam.totalQuestions, 0);
  const totalCorrect = examHistory.reduce((sum, exam) => sum + exam.correctAnswers, 0);
  const overallAccuracy = (totalCorrect / totalQuestions) * 100;
  
  // Get best and worst exam
  const bestExam = [...examHistory].sort((a, b) => b.score - a.score)[0];
  const worstExam = [...examHistory].sort((a, b) => a.score - b.score)[0];
  
  // Group by exam type to find strongest/weakest areas
  const examTypeScores = examHistory.reduce((acc, exam) => {
    if (!acc[exam.examId]) {
      acc[exam.examId] = {
        name: exam.examName,
        totalScore: 0,
        count: 0
      };
    }
    acc[exam.examId].totalScore += exam.score;
    acc[exam.examId].count += 1;
    return acc;
  }, {} as Record<string, { name: string; totalScore: number; count: number }>);
  
  const examTypeAverages = Object.entries(examTypeScores).map(([id, data]) => ({
    id,
    name: data.name,
    averageScore: data.totalScore / data.count
  }));
  
  const strongestArea = examTypeAverages.sort((a, b) => b.averageScore - a.averageScore)[0];
  const weakestArea = examTypeAverages.sort((a, b) => a.averageScore - b.averageScore)[0];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-blue-600 font-medium">Exams Taken</div>
          <div className="text-2xl font-bold">{totalExams}</div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-green-600 font-medium">Average Score</div>
          <div className="text-2xl font-bold">{averageScore.toFixed(1)}%</div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm text-purple-600 font-medium">Questions Answered</div>
          <div className="text-2xl font-bold">{totalQuestions}</div>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm text-yellow-600 font-medium">Overall Accuracy</div>
          <div className="text-2xl font-bold">{overallAccuracy.toFixed(1)}%</div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2">Strongest Area</h3>
          {strongestArea ? (
            <>
              <div className="text-green-600 font-medium">{strongestArea.name}</div>
              <div className="text-sm text-gray-500">Average Score: {strongestArea.averageScore.toFixed(1)}%</div>
            </>
          ) : (
            <div className="text-sm text-gray-500">Not enough data</div>
          )}
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2">Area to Improve</h3>
          {weakestArea && examTypeAverages.length > 1 ? (
            <>
              <div className="text-red-600 font-medium">{weakestArea.name}</div>
              <div className="text-sm text-gray-500">Average Score: {weakestArea.averageScore.toFixed(1)}%</div>
            </>
          ) : (
            <div className="text-sm text-gray-500">Not enough data</div>
          )}
        </div>
      </div>
    </div>
  );
}
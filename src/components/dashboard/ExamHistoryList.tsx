import React from 'react';
import { ExamResult } from '../../services/exams/userService';
import Link from 'next/link';

interface ExamHistoryListProps {
  examHistory: ExamResult[];
}

export default function ExamHistoryList({ examHistory }: ExamHistoryListProps) {
  if (examHistory.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>You haven't taken any exams yet.</p>
        <Link href="/exams" className="text-blue-600 hover:underline mt-2 inline-block">
          Browse available exams
        </Link>
      </div>
    );
  }

  // Sort by date (newest first)
  const sortedHistory = [...examHistory].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Exam
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Score
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedHistory.map((result) => (
            <tr key={result.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{result.examName}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {new Date(result.date).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className={`text-sm font-medium ${
                  result.score >= 80 ? 'text-green-600' : 
                  result.score >= 70 ? 'text-yellow-600' : 
                  'text-red-600'
                }`}>
                  {result.score}% ({result.correctAnswers}/{result.totalQuestions})
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {Math.floor(result.timeSpent / 60)} min
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <Link href={`/exams/${result.examId}/results/${result.id}`} className="text-blue-600 hover:text-blue-900">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
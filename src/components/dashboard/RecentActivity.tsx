import React from 'react';
import { ExamResult } from '../../services/exams/userService';

interface RecentActivityProps {
  examHistory: ExamResult[];
}

export default function RecentActivity({ examHistory }: RecentActivityProps) {
  if (examHistory.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        <p>No recent activity</p>
      </div>
    );
  }

  // Sort by date (newest first) and take the 5 most recent
  const recentActivity = [...examHistory]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-4">
      {recentActivity.map((activity) => {
        const date = new Date(activity.date);
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        let dateDisplay;
        if (date.toDateString() === today.toDateString()) {
          dateDisplay = 'Today';
        } else if (date.toDateString() === yesterday.toDateString()) {
          dateDisplay = 'Yesterday';
        } else {
          dateDisplay = date.toLocaleDateString();
        }
        
        return (
          <div key={activity.id} className="flex items-start">
            <div className={`w-2 h-2 mt-2 rounded-full mr-3 ${
              activity.score >= 80 ? 'bg-green-500' : 
              activity.score >= 70 ? 'bg-yellow-500' : 
              'bg-red-500'
            }`}></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="text-sm font-medium">Completed {activity.examName}</p>
                <span className="text-xs text-gray-500">{dateDisplay}</span>
              </div>
              <p className="text-xs text-gray-500">
                Score: {activity.score}% ({activity.correctAnswers}/{activity.totalQuestions})
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
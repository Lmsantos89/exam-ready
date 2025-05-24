import { useState, useEffect } from 'react';
import Head from 'next/head';
import { getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
import AuthRequired from '../components/AuthRequired';
import { getUserExamHistory } from '../services/exams/userService';
import ExamHistoryList from '../components/dashboard/ExamHistoryList';
import PerformanceMetrics from '../components/dashboard/PerformanceMetrics';
import RecentActivity from '../components/dashboard/RecentActivity';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [examHistory, setExamHistory] = useState([]);
  const [error, setError] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await getCurrentUser();
        const attributes = await fetchUserAttributes();
        setUser({ ...userData, attributes });
        
        const history = await getUserExamHistory(userData.userId);
        setExamHistory(history);
      } catch (err) {
        console.error('Error fetching user data:', err);
        setError('Failed to load your dashboard data');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchUserData();
  }, []);

  return (
    <AuthRequired>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Dashboard | ExamReady</title>
        </Head>
        
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                  <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
                  <PerformanceMetrics examHistory={examHistory} />
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Exam History</h2>
                  <ExamHistoryList examHistory={examHistory} />
                </div>
              </div>
              
              <div>
                <div className="bg-white p-6 rounded-lg shadow mb-6">
                  <h2 className="text-xl font-semibold mb-4">Profile</h2>
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        {user?.attributes?.preferred_username?.charAt(0).toUpperCase() || user?.attributes?.email?.charAt(0).toUpperCase() || '?'}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium">
                      {user?.attributes?.preferred_username || user?.attributes?.email || 'User'}
                    </h3>
                    <p className="text-gray-500 text-sm">{user?.attributes?.email}</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                  <RecentActivity examHistory={examHistory} />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </AuthRequired>
  );
}
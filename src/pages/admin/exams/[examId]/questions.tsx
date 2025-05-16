import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AdminRequired from '../../../../components/AdminRequired';
import ManageExamQuestions from '../../../../components/admin/ManageExamQuestions';
import { getExams } from '../../../../services/exams/adminService';

export default function ExamQuestionsPage() {
  const router = useRouter();
  const { examId } = router.query;
  
  const [exam, setExam] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchExamData() {
      if (!examId || typeof examId !== 'string') return;
      
      try {
        setLoading(true);
        const exams = await getExams();
        const currentExam = exams.find(e => e.id === examId);
        
        if (!currentExam) {
          setError('Exam not found');
          return;
        }
        
        setExam(currentExam);
      } catch (err) {
        console.error('Error fetching exam data:', err);
        setError('Failed to load exam data');
      } finally {
        setLoading(false);
      }
    }
    
    fetchExamData();
  }, [examId]);

  return (
    <AdminRequired>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Manage Exam Questions | ExamReady Admin</title>
        </Head>

        <main className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <button
              onClick={() => router.push('/admin')}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Admin Dashboard
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          ) : exam ? (
            <ManageExamQuestions examId={exam.id} examName={exam.name} />
          ) : null}
        </main>
      </div>
    </AdminRequired>
  );
}
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminRequired from '../../components/AdminRequired';
import CreateExamForm from '../../components/admin/CreateExamForm';
import CreateCertificationForm from '../../components/admin/CreateCertificationForm';
import { getCertifications, getExams } from '../../services/exams/adminService';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('exams');
  const [certifications, setCertifications] = useState<Array<{ id: string; name: string }>>([]);
  const [exams, setExams] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const [certsData, examsData] = await Promise.all([
          getCertifications(),
          getExams()
        ]);
        
        setCertifications(certsData);
        setExams(examsData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleCertificationCreated = async () => {
    try {
      const certsData = await getCertifications();
      setCertifications(certsData);
    } catch (err) {
      console.error('Error refreshing certifications:', err);
    }
  };

  const handleExamCreated = async () => {
    try {
      const examsData = await getExams();
      setExams(examsData);
    } catch (err) {
      console.error('Error refreshing exams:', err);
    }
  };

  return (
    <AdminRequired>
      <div className="min-h-screen bg-gray-50">
        <Head>
          <title>Admin Dashboard | ExamReady</title>
        </Head>

        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>

          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('exams')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'exams'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Manage Exams
                </button>
                <button
                  onClick={() => setActiveTab('certifications')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'certifications'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Manage Certifications
                </button>
              </nav>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          ) : (
            <div>
              {activeTab === 'exams' && (
                <div>
                  <CreateExamForm 
                    certifications={certifications} 
                    onExamCreated={handleExamCreated} 
                  />
                  
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Existing Exams</h2>
                    {exams.length === 0 ? (
                      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
                        No exams created yet. Use the form above to create your first exam.
                      </div>
                    ) : (
                      <div className="bg-white p-6 rounded-lg shadow">
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Exam Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Passing Score
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Time Limit
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {exams.map((exam) => (
                                <tr key={exam.id}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{exam.name}</div>
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="text-sm text-gray-500">{exam.description || 'No description'}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{exam.passingScore}%</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{exam.timeLimit} min</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <Link href={`/admin/exams/${exam.id}/questions`} className="text-blue-600 hover:text-blue-900">
                                      Manage Questions
                                    </Link>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {activeTab === 'certifications' && (
                <CreateCertificationForm 
                  onCertificationCreated={handleCertificationCreated} 
                />
              )}
            </div>
          )}
        </main>
      </div>
    </AdminRequired>
  );
}
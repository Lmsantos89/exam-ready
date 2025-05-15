import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getExams } from '../../services/exams/examService';

export default function Exams() {
  const [searchTerm, setSearchTerm] = useState('');
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    async function fetchExams() {
      try {
        const examData = await getExams();
        setExams(examData);
      } catch (err) {
        console.error('Error fetching exams:', err);
        setError('Failed to load exams. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    
    fetchExams();
  }, []);
  
  const filteredExams = exams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Available Exams | ExamReady</title>
        <meta name="description" content="Browse available certification practice exams" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Available Practice Exams</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search exams..."
            className="w-full md:w-1/2 p-3 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredExams.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredExams.map(exam => (
              <div key={exam.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{exam.name}</h2>
                  <p className="text-gray-600 mb-4">{exam.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <div>
                      <span className="font-medium">Questions:</span> {exam.questions?.items?.length || 0}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/exams/${exam.id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">
                      Start Exam
                    </Link>
                    <Link href={`/exams/${exam.id}/practice`} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium">
                      Practice Mode
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No exams found matching your search.</p>
            <p className="mt-4">
              <Link href="/admin/exams/new" className="text-blue-600 hover:underline">
                Create a new exam
              </Link>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

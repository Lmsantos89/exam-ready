import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for available exams
const AVAILABLE_EXAMS = [
  {
    id: 'aws-sa',
    title: 'AWS Solutions Architect Associate',
    description: 'Practice for the AWS Certified Solutions Architect - Associate exam',
    questionCount: 65,
    timeMinutes: 130,
    difficulty: 'Intermediate'
  },
  {
    id: 'azure-admin',
    title: 'Microsoft Azure Administrator',
    description: 'Practice for the AZ-104 Microsoft Azure Administrator exam',
    questionCount: 50,
    timeMinutes: 120,
    difficulty: 'Intermediate'
  },
  {
    id: 'gcp-cloud',
    title: 'Google Cloud Professional',
    description: 'Practice for the Google Cloud Professional Cloud Architect exam',
    questionCount: 60,
    timeMinutes: 120,
    difficulty: 'Advanced'
  },
  {
    id: 'comptia-sec',
    title: 'CompTIA Security+',
    description: 'Practice for the CompTIA Security+ certification exam',
    questionCount: 90,
    timeMinutes: 90,
    difficulty: 'Beginner to Intermediate'
  }
];

export default function Exams() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredExams = AVAILABLE_EXAMS.filter(exam => 
    exam.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

        <div className="grid md:grid-cols-2 gap-6">
          {filteredExams.map(exam => (
            <div key={exam.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{exam.title}</h2>
                <p className="text-gray-600 mb-4">{exam.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                  <div>
                    <span className="font-medium">Questions:</span> {exam.questionCount}
                  </div>
                  <div>
                    <span className="font-medium">Time:</span> {exam.timeMinutes} minutes
                  </div>
                  <div>
                    <span className="font-medium">Difficulty:</span> {exam.difficulty}
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
        
        {filteredExams.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No exams found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}
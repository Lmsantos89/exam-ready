import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminRequired from '../../components/AdminRequired';
import CreateExamForm from '../../components/admin/CreateExamForm';
import CreateCertificationForm from '../../components/admin/CreateCertificationForm';
import EditExamModal from '../../components/admin/EditExamModal';
import EditCertificationModal from '../../components/admin/EditCertificationModal';
import ConfirmationModal from '../../components/admin/ConfirmationModal';
import { 
  getCertifications, 
  getExams, 
  updateExistingExam, 
  deleteExistingExam,
  updateExistingCertification,
  deleteExistingCertification
} from '../../services/exams/adminService';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('certifications');
  const [certifications, setCertifications] = useState<Array<{ id: string; name: string; description?: string; provider: string }>>([]);
  const [exams, setExams] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState('');
  const [actionSuccess, setActionSuccess] = useState('');
  
  // Edit modal states
  const [isEditExamModalOpen, setIsEditExamModalOpen] = useState(false);
  const [isEditCertModalOpen, setIsEditCertModalOpen] = useState(false);
  const [selectedExam, setSelectedExam] = useState<any>(null);
  const [selectedCertification, setSelectedCertification] = useState<any>(null);
  
  // Delete confirmation modal states
  const [isDeleteExamModalOpen, setIsDeleteExamModalOpen] = useState(false);
  const [isDeleteCertModalOpen, setIsDeleteCertModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
  
  // Edit exam handlers
  const handleEditExam = (exam: any) => {
    setSelectedExam(exam);
    setIsEditExamModalOpen(true);
    setActionError('');
    setActionSuccess('');
  };
  
  const handleSaveExam = async (examData: any) => {
    try {
      setActionError('');
      setActionSuccess('');
      await updateExistingExam(examData);
      setIsEditExamModalOpen(false);
      // Refresh exams list
      const examsData = await getExams();
      setExams(examsData);
      setActionSuccess(`Exam "${examData.name}" updated successfully.`);
    } catch (err) {
      console.error('Error updating exam:', err);
      setActionError('Failed to update exam. Please try again.');
    }
  };
  
  // Delete exam handlers
  const handleDeleteExamClick = (exam: any) => {
    setSelectedExam(exam);
    setIsDeleteExamModalOpen(true);
    setActionError('');
    setActionSuccess('');
  };
  
  const handleConfirmDeleteExam = async () => {
    if (!selectedExam) return;
    
    setIsDeleting(true);
    setActionError('');
    setActionSuccess('');
    try {
      await deleteExistingExam(selectedExam.id);
      // Refresh exams list
      const examsData = await getExams();
      setExams(examsData);
      setActionSuccess(`Exam "${selectedExam.name}" deleted successfully.`);
    } catch (err) {
      console.error('Error deleting exam:', err);
      setActionError('Failed to delete exam. Please try again.');
    } finally {
      setIsDeleting(false);
      setIsDeleteExamModalOpen(false);
    }
  };
  
  // Edit certification handlers
  const handleEditCertification = (cert: any) => {
    setSelectedCertification(cert);
    setIsEditCertModalOpen(true);
    setActionError('');
    setActionSuccess('');
  };
  
  const handleSaveCertification = async (certData: any) => {
    try {
      setActionError('');
      setActionSuccess('');
      await updateExistingCertification(certData);
      setIsEditCertModalOpen(false);
      // Refresh certifications list
      const certsData = await getCertifications();
      setCertifications(certsData);
      setActionSuccess(`Certification "${certData.name}" updated successfully.`);
    } catch (err) {
      console.error('Error updating certification:', err);
      setActionError('Failed to update certification. Please try again.');
    }
  };
  
  // Delete certification handlers
  const handleDeleteCertificationClick = (cert: any) => {
    setSelectedCertification(cert);
    setIsDeleteCertModalOpen(true);
    setActionError('');
    setActionSuccess('');
  };
  
  const handleConfirmDeleteCertification = async () => {
    if (!selectedCertification) return;
    
    setIsDeleting(true);
    setActionError('');
    setActionSuccess('');
    try {
      await deleteExistingCertification(selectedCertification.id);
      // Refresh certifications list
      const certsData = await getCertifications();
      setCertifications(certsData);
      setActionSuccess(`Certification "${selectedCertification.name}" deleted successfully.`);
    } catch (err) {
      console.error('Error deleting certification:', err);
      setActionError('Failed to delete certification. Please try again.');
    } finally {
      setIsDeleting(false);
      setIsDeleteCertModalOpen(false);
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

          {actionError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex justify-between">
              <span>{actionError}</span>
              <button onClick={() => setActionError('')} className="text-red-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}

          {actionSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 flex justify-between">
              <span>{actionSuccess}</span>
              <button onClick={() => setActionSuccess('')} className="text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          )}

          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
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
                                    <div className="flex space-x-3">
                                      <Link href={`/admin/exams/${exam.id}/questions`} className="text-blue-600 hover:text-blue-900">
                                        Manage Questions
                                      </Link>
                                      <button 
                                        onClick={() => handleEditExam(exam)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        Edit
                                      </button>
                                      <button 
                                        onClick={() => handleDeleteExamClick(exam)}
                                        className="text-red-600 hover:text-red-900"
                                      >
                                        Delete
                                      </button>
                                    </div>
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
                <div>
                  <CreateCertificationForm 
                    onCertificationCreated={handleCertificationCreated} 
                  />
                  
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Existing Certifications</h2>
                    {certifications.length === 0 ? (
                      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
                        No certifications created yet. Use the form above to create your first certification.
                      </div>
                    ) : (
                      <div className="bg-white p-6 rounded-lg shadow">
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Certification Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Provider
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {certifications.map((cert) => (
                                <tr key={cert.id}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">{cert.name}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">{cert.provider || 'Unknown'}</div>
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="text-sm text-gray-500">{cert.description || 'No description'}</div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <div className="flex space-x-3">
                                      <button 
                                        onClick={() => handleEditCertification(cert)}
                                        className="text-indigo-600 hover:text-indigo-900"
                                      >
                                        Edit
                                      </button>
                                      <button 
                                        onClick={() => handleDeleteCertificationClick(cert)}
                                        className="text-red-600 hover:text-red-900"
                                      >
                                        Delete
                                      </button>
                                    </div>
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
            </div>
          )}
        </main>
      </div>
      
      {/* Edit Exam Modal */}
      <EditExamModal
        exam={selectedExam}
        certifications={certifications}
        isOpen={isEditExamModalOpen}
        onClose={() => setIsEditExamModalOpen(false)}
        onSave={handleSaveExam}
      />
      
      {/* Edit Certification Modal */}
      <EditCertificationModal
        certification={selectedCertification}
        isOpen={isEditCertModalOpen}
        onClose={() => setIsEditCertModalOpen(false)}
        onSave={handleSaveCertification}
      />
      
      {/* Delete Exam Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteExamModalOpen}
        title="Delete Exam"
        message={`Are you sure you want to delete the exam "${selectedExam?.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDeleteExam}
        onCancel={() => setIsDeleteExamModalOpen(false)}
        isDeleting={isDeleting}
      />
      
      {/* Delete Certification Confirmation Modal */}
      <ConfirmationModal
        isOpen={isDeleteCertModalOpen}
        title="Delete Certification"
        message={`Are you sure you want to delete the certification "${selectedCertification?.name}"? This action cannot be undone.`}
        onConfirm={handleConfirmDeleteCertification}
        onCancel={() => setIsDeleteCertModalOpen(false)}
        isDeleting={isDeleting}
      />
    </AdminRequired>
  );
}
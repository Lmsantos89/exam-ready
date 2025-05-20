import React, { useState } from 'react';
import { createNewExam } from '../../services/exams/adminService';

interface CreateExamFormProps {
  certifications: Array<{ id: string; name: string }>;
  onExamCreated: () => void;
}

export default function CreateExamForm({ certifications, onExamCreated }: CreateExamFormProps) {
  const [description, setDescription] = useState('');
  const [certificationId, setCertificationId] = useState('');
  const [passingScore, setPassingScore] = useState(70);
  const [timeLimit, setTimeLimit] = useState(90); // minutes
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      if (!certificationId) {
        throw new Error('Please select a certification');
      }

      // Get the certification name to use as the exam name
      const selectedCert = certifications.find(cert => cert.id === certificationId);
      if (!selectedCert) {
        throw new Error('Invalid certification selected');
      }

      await createNewExam({
        name: selectedCert.name,
        description,
        certificationID: certificationId,
        passingScore,
        timeLimit,
      });

      setSuccess('Exam created successfully!');
      setDescription('');
      setCertificationId('');
      setPassingScore(70);
      setTimeLimit(90);
      onExamCreated();
    } catch (err: any) {
      setError(err.message || 'Failed to create exam');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Create New Exam</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="certification">
            Certification *
          </label>
          <select
            id="certification"
            value={certificationId}
            onChange={(e) => setCertificationId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            disabled={isSubmitting}
          >
            <option value="">Select a certification</option>
            {certifications.map((cert) => (
              <option key={cert.id} value={cert.id}>
                {cert.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500 mt-1">The certification name will be used as the exam name</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={3}
            disabled={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passingScore">
              Passing Score (%)
            </label>
            <input
              id="passingScore"
              type="number"
              min="1"
              max="100"
              value={passingScore}
              onChange={(e) => setPassingScore(parseInt(e.target.value))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="timeLimit">
              Time Limit (minutes)
            </label>
            <input
              id="timeLimit"
              type="number"
              min="1"
              value={timeLimit}
              onChange={(e) => setTimeLimit(parseInt(e.target.value))}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Exam'}
          </button>
        </div>
      </form>
    </div>
  );
}
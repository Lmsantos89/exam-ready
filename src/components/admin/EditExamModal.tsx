import { useState, useEffect } from 'react';

interface EditExamModalProps {
  exam: {
    id: string;
    name: string;
    description?: string;
    passingScore: number;
    timeLimit: number;
    certificationId?: string;
  } | null;
  certifications: Array<{ id: string; name: string }>;
  isOpen: boolean;
  onClose: () => void;
  onSave: (examData: any) => void;
}

export default function EditExamModal({ 
  exam, 
  certifications, 
  isOpen, 
  onClose, 
  onSave 
}: EditExamModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [certificationId, setCertificationId] = useState('');
  const [passingScore, setPassingScore] = useState(70);
  const [timeLimit, setTimeLimit] = useState(120);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (exam) {
      setName(exam.name || '');
      setDescription(exam.description || '');
      setCertificationId(exam.certificationId || '');
      setPassingScore(exam.passingScore || 70);
      setTimeLimit(exam.timeLimit || 120);
      setErrors({});
    }
  }, [exam]);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) {
      newErrors.name = 'Exam name is required';
    }
    
    if (!certificationId) {
      newErrors.certificationId = 'Please select a certification';
    }
    
    if (passingScore < 1 || passingScore > 100) {
      newErrors.passingScore = 'Passing score must be between 1 and 100';
    }
    
    if (timeLimit < 1) {
      newErrors.timeLimit = 'Time limit must be at least 1 minute';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave({
        id: exam?.id,
        name,
        description,
        certificationId,
        passingScore,
        timeLimit
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Exam</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Exam Name*
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter exam name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              placeholder="Enter exam description"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="certification" className="block text-sm font-medium text-gray-700 mb-1">
              Certification*
            </label>
            <select
              id="certification"
              value={certificationId}
              onChange={(e) => setCertificationId(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.certificationId ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select a certification</option>
              {certifications.map((cert) => (
                <option key={cert.id} value={cert.id}>
                  {cert.name}
                </option>
              ))}
            </select>
            {errors.certificationId && <p className="mt-1 text-sm text-red-500">{errors.certificationId}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="passingScore" className="block text-sm font-medium text-gray-700 mb-1">
                Passing Score (%)*
              </label>
              <input
                type="number"
                id="passingScore"
                value={passingScore}
                onChange={(e) => setPassingScore(parseInt(e.target.value))}
                min="1"
                max="100"
                className={`w-full px-3 py-2 border rounded-md ${errors.passingScore ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.passingScore && <p className="mt-1 text-sm text-red-500">{errors.passingScore}</p>}
            </div>

            <div>
              <label htmlFor="timeLimit" className="block text-sm font-medium text-gray-700 mb-1">
                Time Limit (minutes)*
              </label>
              <input
                type="number"
                id="timeLimit"
                value={timeLimit}
                onChange={(e) => setTimeLimit(parseInt(e.target.value))}
                min="1"
                className={`w-full px-3 py-2 border rounded-md ${errors.timeLimit ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.timeLimit && <p className="mt-1 text-sm text-red-500">{errors.timeLimit}</p>}
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
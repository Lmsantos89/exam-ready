import { useState, useEffect } from 'react';

interface EditCertificationModalProps {
  certification: {
    id: string;
    name: string;
    description?: string;
    provider: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (certData: any) => void;
}

export default function EditCertificationModal({ 
  certification, 
  isOpen, 
  onClose, 
  onSave 
}: EditCertificationModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [provider, setProvider] = useState('');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (certification) {
      setName(certification.name || '');
      setDescription(certification.description || '');
      setProvider(certification.provider || '');
      setErrors({});
    }
  }, [certification]);

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!name.trim()) {
      newErrors.name = 'Certification name is required';
    }
    
    if (!provider.trim()) {
      newErrors.provider = 'Provider name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSave({
        id: certification?.id,
        name,
        description,
        provider
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit Certification</h2>
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
              Certification Name*
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter certification name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="provider" className="block text-sm font-medium text-gray-700 mb-1">
              Provider*
            </label>
            <input
              type="text"
              id="provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.provider ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Enter provider name (e.g., AWS, Microsoft)"
            />
            {errors.provider && <p className="mt-1 text-sm text-red-500">{errors.provider}</p>}
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
              placeholder="Enter certification description"
            />
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
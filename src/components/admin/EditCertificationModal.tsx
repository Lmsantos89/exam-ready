import { useState, useEffect } from 'react';
import { updateExistingCertification, getProviders } from '../../services/exams/adminService';

interface Provider {
  id: string;
  name: string;
}

interface Certification {
  id: string;
  name: string;
  description?: string;
  code?: string;
  providerID: string;
  _version?: number;
}

interface EditCertificationModalProps {
  certification: Certification | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (certification: Certification) => void;
}

export default function EditCertificationModal({ certification, isOpen, onClose, onSave }: EditCertificationModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [providerID, setProviderID] = useState('');
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProviders() {
      try {
        const providersData = await getProviders();
        setProviders(providersData);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching providers:', err);
        setError('Failed to load providers');
        setIsLoading(false);
      }
    }

    if (isOpen) {
      fetchProviders();
    }
  }, [isOpen]);

  useEffect(() => {
    if (certification) {
      setName(certification.name);
      setDescription(certification.description || '');
      setCode(certification.code || '');
      setProviderID(certification.providerID);
    }
  }, [certification]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certification) return;
    
    if (!name || !providerID) {
      setError('Name and Provider are required');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const updatedCertification = await updateExistingCertification({
        id: certification.id,
        name,
        description: description || undefined,
        code: code || undefined,
        providerID,
        _version: certification._version
      });
      
      onSave(updatedCertification);
    } catch (err) {
      console.error('Error updating certification:', err);
      setError('Failed to update certification. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Edit Certification</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center items-center h-24">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 mb-1">
                Certification Name *
              </label>
              <input
                type="text"
                id="edit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="edit-code" className="block text-sm font-medium text-gray-700 mb-1">
                Certification Code
              </label>
              <input
                type="text"
                id="edit-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="edit-provider" className="block text-sm font-medium text-gray-700 mb-1">
                Provider *
              </label>
              <select
                id="edit-provider"
                value={providerID}
                onChange={(e) => setProviderID(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select a provider</option>
                {providers.map((provider) => (
                  <option key={provider.id} value={provider.id}>
                    {provider.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="edit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
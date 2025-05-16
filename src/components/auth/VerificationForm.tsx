import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

interface VerificationFormProps {
  email: string;
  onSuccess: () => void;
  onBack: () => void;
  onClose: () => void;
}

export default function VerificationForm({ email, onSuccess, onBack, onClose }: VerificationFormProps) {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      await Auth.confirmSignUp(email, verificationCode);
      onSuccess();
    } catch (error: any) {
      setError('Failed to verify account: ' + error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleResendCode() {
    setError('');
    
    try {
      await Auth.resendSignUp(email);
      alert('Verification code has been resent to your email.');
    } catch (error: any) {
      setError('Failed to resend code: ' + error.message);
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Account</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <p className="mb-4 text-gray-600">
        We've sent a verification code to <span className="font-semibold">{email}</span>. 
        Please enter it below to verify your account.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
            Verification Code
          </label>
          <input
            id="code"
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-6">
          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </button>
        </div>
        
        <div className="flex justify-between text-sm">
          <button
            type="button"
            onClick={handleResendCode}
            className="text-blue-600 hover:text-blue-800"
            disabled={isSubmitting}
          >
            Resend Code
          </button>
          
          <button
            type="button"
            onClick={onBack}
            className="text-blue-600 hover:text-blue-800"
            disabled={isSubmitting}
          >
            Back to Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
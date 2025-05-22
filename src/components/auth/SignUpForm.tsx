import React, { useState } from 'react';
import { signUp } from 'aws-amplify/auth';

interface SignUpFormProps {
  onSuccess: (email: string) => void;
  onSignInClick: () => void;
  onClose: () => void;
}

export default function SignUpForm({ onSuccess, onSignInClick, onClose }: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await signUp({
        username: email, // Cognito uses email as the username
        password,
        options: {
          userAttributes: {
            email,
            preferred_username: username // Store the display username as an attribute
          }
        }
      });
      onSuccess(email);
    } catch (error: any) {
      setError('Failed to sign up: ' + (error.message || 'Unknown error'));
    } finally {
      setIsSubmitting(false);
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
      
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            disabled={isSubmitting}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            minLength={8}
            disabled={isSubmitting}
          />
          <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters</p>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
          </p>
          <button
            type="button"
            onClick={onSignInClick}
            className="text-blue-600 hover:text-blue-800 text-sm mt-1"
            disabled={isSubmitting}
          >
            Click here to sign in
          </button>
        </div>
      </form>
    </div>
  );
}
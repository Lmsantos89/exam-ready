import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Add verification state
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  
  useEffect(() => {
    checkAuthState();
  }, []);
  
  async function checkAuthState() {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      setIsAuthenticated(true);
      setUser(userData);
    } catch (error) {
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }
  
  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    
    try {
      const user = await Auth.signIn(email, password);
      setIsAuthenticated(true);
      setUser(user);
      setShowLogin(false);
    } catch (error) {
      setError('Failed to sign in: ' + error.message);
    }
  }
  
  async function handleSignUp(e) {
    e.preventDefault();
    setError('');
    
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email
        }
      });
      setShowVerification(true);
    } catch (error) {
      setError('Failed to sign up: ' + error.message);
    }
  }
  
  async function handleVerification(e) {
    e.preventDefault();
    setError('');
    
    try {
      await Auth.confirmSignUp(email, verificationCode);
      alert('Account verified successfully! Please sign in.');
      setShowVerification(false);
    } catch (error) {
      setError('Failed to verify account: ' + error.message);
    }
  }
  
  async function handleSignOut() {
    try {
      await Auth.signOut();
      setIsAuthenticated(false);
      setUser(null);
      // Redirect to home page after signing out
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
  
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  if (showVerification) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Account</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <p className="mb-4 text-gray-600">
            We've sent a verification code to your email. Please enter it below to verify your account.
          </p>
          
          <form onSubmit={handleVerification}>
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
              />
            </div>
            
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Verify
              </button>
              <button
                type="button"
                onClick={() => setShowVerification(false)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Back to Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  if (showLogin) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In to ExamReady</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleLogin}>
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
              />
            </div>
            
            <div className="mb-6">
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
              />
            </div>
            
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={handleSignUp}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={() => setShowLogin(false)}
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Continue as Guest
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      {isAuthenticated ? (
        <div className="bg-gray-800 text-white p-2">
          <div className="container mx-auto flex justify-between items-center">
            <div>Welcome, {user?.attributes?.email || 'User'}</div>
            <button
              onClick={handleSignOut}
              className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-gray-800 text-white p-2">
          <div className="container mx-auto flex justify-end">
            <button
              onClick={() => setShowLogin(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Navbar from './Navbar';
import Footer from './Footer';
import AuthModal from './auth/AuthModal';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
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
  
  const handleAuthenticated = (user: any) => {
    setIsAuthenticated(true);
    setUser(user);
    setShowAuthModal(false);
  };
  
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        isAuthenticated={isAuthenticated}
        user={user}
        onSignIn={() => setShowAuthModal(true)}
        onSignOut={handleSignOut}
      />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
      
      {showAuthModal && (
        <AuthModal 
          onAuthenticated={handleAuthenticated}
          onCancel={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
}
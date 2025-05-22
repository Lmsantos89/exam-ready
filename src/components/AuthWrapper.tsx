import React, { useState, useEffect } from 'react';
import { signOut, fetchAuthSession, getCurrentUser, fetchUserAttributes } from 'aws-amplify/auth';
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
      // First check if we have a valid session
      const { tokens } = await fetchAuthSession();
      
      if (tokens) {
        // If we have tokens, get the current user with attributes
        const currentUser = await getCurrentUser();
        
        try {
          // Fetch user attributes directly from Cognito
          const userAttributes = await fetchUserAttributes();
          
          // Create a user object with attributes in the format expected by Navbar
          const userWithAttributes = {
            username: currentUser.username,
            attributes: {
              email: userAttributes.email,
              preferred_username: userAttributes.preferred_username || userAttributes.email?.split('@')[0] || currentUser.username
            }
          };
          
          setIsAuthenticated(true);
          setUser(userWithAttributes);
        } catch (attrError) {
          console.error('Error fetching user attributes:', attrError);
          // Fallback to basic user object
          setIsAuthenticated(true);
          setUser({ 
            username: currentUser.username,
            attributes: {
              email: currentUser.signInDetails?.loginId,
              preferred_username: currentUser.username
            }
          });
        }
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      // This is expected for unauthenticated users
      console.log('Not authenticated yet');
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }
  
  async function handleSignOut() {
    try {
      await signOut();
      setIsAuthenticated(false);
      setUser(null);
      // Redirect to home page after signing out
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
  
  const handleAuthenticated = async (user: any) => {
    // Refresh auth state after authentication
    try {
      await checkAuthState();
    } catch (error) {
      // Fallback to the provided user object if there's an error
      setIsAuthenticated(true);
      setUser(user);
    }
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
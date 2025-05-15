import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Sign out the user and redirect to home page
export const signOut = async () => {
  try {
    await Auth.signOut();
    window.location.href = '/'; // Redirect to home page
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    return false;
  }
};

// Check if user is authenticated
export const isAuthenticated = async () => {
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch (error) {
    return false;
  }
};

// Custom hook for handling auth-related redirects
export const useAuthRedirect = () => {
  const router = useRouter();
  
  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      router.push('/');
    }
  };
  
  return { handleSignOut };
};

// Auth protection hook for protected routes
export const useAuthProtection = (redirectPath = '/') => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated();
      setAuthenticated(isAuth);
      setLoading(false);
      
      if (!isAuth) {
        router.push(redirectPath);
      }
    };
    
    checkAuth();
  }, [router, redirectPath]);

  return { loading, authenticated };
};
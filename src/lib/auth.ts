import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';

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
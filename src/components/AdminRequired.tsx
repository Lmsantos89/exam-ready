import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isUserAdmin } from '../services/auth/authService';
import Link from 'next/link';

interface AdminRequiredProps {
  children: React.ReactNode;
}

export default function AdminRequired({ children }: AdminRequiredProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const adminStatus = await isUserAdmin();
      setIsAdmin(adminStatus);
      setLoading(false);
      
      if (!adminStatus) {
        // Optional: Log access attempt
        console.log('Unauthorized access attempt to admin page');
      }
    };
    
    checkAdminStatus();
  }, [router.asPath]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="text-red-500 text-5xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-gray-600 mb-6">
            You don't have permission to access this page. This area is restricted to administrators only.
          </p>
          <div className="flex flex-col space-y-4">
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded block text-center">
              Go to Home Page
            </Link>
            <Link href="/dashboard" className="text-blue-600 hover:underline block">
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
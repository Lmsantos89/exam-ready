import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated } from '../lib/auth';
import Link from 'next/link';

interface AuthRequiredProps {
  children: React.ReactNode;
}

export default function AuthRequired({ children }: AuthRequiredProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      setIsAuth(auth);
      setLoading(false);
    };
    
    checkAuth();
  }, [router.asPath]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Authentication Required</h2>
          <p className="text-gray-600 mb-6">
            You need to be signed in to access this content.
          </p>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => router.push('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Go to Home Page
            </button>
            <Link href="/exams" className="text-blue-600 hover:underline">
              Back to Exams List
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
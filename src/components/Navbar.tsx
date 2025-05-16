import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavbarProps {
  isAuthenticated: boolean;
  user: any;
  onSignIn: () => void;
  onSignOut: () => void;
}

export default function Navbar({ isAuthenticated, user, onSignIn, onSignOut }: NavbarProps) {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  
  return (
    <nav className="bg-gray-800 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-2xl text-white">
            ExamReady
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          {!isHomePage && (
            <button 
              onClick={() => router.back()}
              className="flex items-center text-white hover:text-blue-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </button>
          )}
          
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-white">Welcome, {user?.attributes?.email || 'User'}</span>
              <button
                onClick={onSignOut}
                className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={onSignIn}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
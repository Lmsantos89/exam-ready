import { useRouter } from 'next/router';
import { isAuthenticated } from '../lib/auth';

interface ExamLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

export default function ExamLink({ href, className, children }: ExamLinkProps) {
  const router = useRouter();
  
  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    const auth = await isAuthenticated();
    
    if (auth) {
      // User is authenticated, navigate to the exam
      router.push(href);
    } else {
      // User is not authenticated, show auth required screen
      router.push({
        pathname: href,
        query: { requireAuth: 'true' }
      });
    }
  };
  
  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import VerificationForm from './VerificationForm';

type AuthView = 'signin' | 'signup' | 'verification';

interface AuthModalProps {
  onAuthenticated: (user: any) => void;
  onCancel: () => void;
}

export default function AuthModal({ onAuthenticated, onCancel }: AuthModalProps) {
  const [currentView, setCurrentView] = useState<AuthView>('signin');
  const [pendingEmail, setPendingEmail] = useState('');

  const handleSignInSuccess = (user: any) => {
    onAuthenticated(user);
  };

  const handleSignUpSuccess = (email: string) => {
    setPendingEmail(email);
    setCurrentView('verification');
  };

  const handleVerificationSuccess = () => {
    alert('Account verified successfully! Please sign in.');
    setCurrentView('signin');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="max-w-md w-full mx-4">
        {currentView === 'signin' && (
          <SignInForm 
            onSuccess={handleSignInSuccess}
            onSignUpClick={() => setCurrentView('signup')}
            onClose={onCancel}
          />
        )}
        
        {currentView === 'signup' && (
          <SignUpForm 
            onSuccess={handleSignUpSuccess}
            onSignInClick={() => setCurrentView('signin')}
            onClose={onCancel}
          />
        )}
        
        {currentView === 'verification' && (
          <VerificationForm 
            email={pendingEmail}
            onSuccess={handleVerificationSuccess}
            onBack={() => setCurrentView('signin')}
            onClose={onCancel}
          />
        )}
      </div>
    </div>
  );
}
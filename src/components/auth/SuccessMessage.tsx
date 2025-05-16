import React from 'react';

interface SuccessMessageProps {
  message: string;
  subMessage?: string;
  onContinue: () => void;
  continueText?: string;
}

export default function SuccessMessage({ 
  message, 
  subMessage, 
  onContinue, 
  continueText = 'Continue' 
}: SuccessMessageProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
      <div className="flex justify-center mb-4">
        <div className="rounded-full bg-green-100 p-3">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-2">{message}</h2>
      
      {subMessage && (
        <p className="text-gray-600 mb-6">{subMessage}</p>
      )}
      
      <button
        onClick={onContinue}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
      >
        {continueText}
      </button>
    </div>
  );
}
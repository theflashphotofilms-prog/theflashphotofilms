'use client';
 
import { useEffect } from 'react';
import Link from 'next/link';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error boundary caught:', error);
  }, [error]);
 
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">
          We apologize for the inconvenience. An unexpected error occurred.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mr-4"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors inline-block"
          >
            Go Home
          </Link>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-6 p-4 bg-red-50 text-red-700 text-left rounded-md text-sm">
            <h3 className="font-bold mb-2">Error Details:</h3>
            <pre className="whitespace-pre-wrap break-words">{error.message}</pre>
            {error.digest && <p className="mt-2"><strong>Digest:</strong> {error.digest}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
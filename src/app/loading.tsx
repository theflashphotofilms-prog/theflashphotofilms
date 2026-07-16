'use client';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-6 text-lg text-gray-700 font-medium">
          Loading...
        </p>
        <p className="mt-2 text-gray-500">
          Preparing your content
        </p>
      </div>
    </div>
  );
}
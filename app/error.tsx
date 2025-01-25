'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-900 text-white rounded">
        Try Again
      </button>
    </div>
  );
}

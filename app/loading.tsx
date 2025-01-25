import * as motion from 'motion/react-client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}>
        <svg
          className="w-16 h-16 text-pink-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          fill="currentColor">
          <path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2zm0 56C17.4 58 6 46.6 6 32S17.4 6 32 6s26 11.4 26 26-11.4 26-26 26z" />
          <path d="M32 10c-12.1 0-22 9.9-22 22s9.9 22 22 22 22-9.9 22-22-9.9-22-22-22zm0 40c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z" />
          <circle cx="22" cy="26" r="4" />
          <circle cx="42" cy="26" r="4" />
          <path d="M32 38c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z" />
          <path d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30 30-13.4 30-30S48.6 2 32 2zm0 56C17.4 58 6 46.6 6 32S17.4 6 32 6s26 11.4 26 26-11.4 26-26 26z" />
          <path d="M32 10c-12.1 0-22 9.9-22 22s9.9 22 22 22 22-9.9 22-22-9.9-22-22-22zm0 40c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z" />
          <circle cx="22" cy="26" r="4" />
          <circle cx="42" cy="26" r="4" />
          <path d="M32 38c-4.4 0-8 3.6-8 8h16c0-4.4-3.6-8-8-8z" />
        </svg>
      </motion.div>
      <p className="ml-4 text-xl">Loading...</p>
    </div>
  );
}

import React from 'react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-center p-6">
      <div className="max-w-xl mx-auto text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
          🚧 Coming Soon
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We’re working hard on something awesome. Stay tuned!
        </p>
        <div className="flex justify-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md text-black w-64 focus:outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-md">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

// src/components/Body.tsx
import React from 'react';

const Body: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mb-4 text-sm font-medium">
        7 Day Free Trial - No Credit card required
      </div>
      <h1 className="text-6xl font-bold text-center">
        Unlock the<br/> <span className="text-blue-500">Power</span> of Data
      </h1>
      <p className="text-center text-lg mt-4">
        Turn Data into Actionable Insights <br/>with Our SaaS Dashboard
      </p>
      <button className="mt-8 bg-black text-white py-2 px-6 rounded-full">
        Get Started &rarr;
      </button>
    </div>
  );
};

export default Body;

import React from 'react';

const BusinessPotentialSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Unlock Your Business Potential Today!</h2>
          <p className="text-gray-600 mb-8">Small businesses and startups looking to gain data insights</p>
          <button className="bg-black text-white px-6 py-3 rounded-md text-lg">
            Get Started &rarr;
          </button>
        </div>
        <div className="hidden lg:flex space-x-4">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center absolute lg:right-70 -rotate-12">
            <h3 className="text-lg font-medium mb-2">Total Sales</h3>
            <p className="text-2xl font-bold">$513,068.98</p>
            <p className="text-green-500 text-sm">+12% on this week</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center absolute right-[24rem] rotate-6 z-10">
            <h3 className="text-lg font-medium mb-2">Visitors</h3>
            <p className="text-2xl font-bold">350,745</p>
            <p className="text-red-500 text-sm">-2% on this week</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center absolute right-60 rotate-12">
            <h3 className="text-lg font-medium mb-2">Total Orders</h3>
            <p className="text-2xl font-bold">450</p>
            <p className="text-gray-500 text-sm">No change</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPotentialSection;

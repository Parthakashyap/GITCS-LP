import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">BRAIN</div>
        <div className="space-x-4 ">
          <a href="#" className="text-black hover:text-gray-700 ">Pricing</a>
          <a href="#" className="text-black hover:text-gray-700">FAQ's</a>
          <a href="#" className="text-black hover:text-gray-700">Support</a>
          <button className="bg-black text-white py-2 px-4 rounded-full">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

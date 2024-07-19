import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">BRAIN</div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-black hover:text-gray-700">Pricing</a>
          <a href="#" className="text-black hover:text-gray-700">FAQ's</a>
          <a href="#" className="text-black hover:text-gray-700">Support</a>
          <button className="bg-black text-white py-2 px-4 rounded-full">Signup</button>
        </div>
        <div className="md:hidden">
          <button 
            ref={buttonRef} 
            onClick={toggleMenu} 
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-black hover:text-gray-700">Pricing</a>
            <a href="#" className="block text-black hover:text-gray-700">FAQ's</a>
            <a href="#" className="block text-black hover:text-gray-700">Support</a>
            <button className="block w-20 text-left bg-black text-white py-2 px-4 rounded-full mt-2">Signup</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

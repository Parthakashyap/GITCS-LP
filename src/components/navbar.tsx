import { LogIn, User2Icon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { NavigationMenuDemo } from "./navbar-expand";
import { NavigationMenuDemoMobile } from "./navbar-expand-M";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="sticky z-50 top-0 backdrop-blur-xl shadow-sm">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link to={"/"} className="text-xl font-bold">
            <img
              src="https://dkumar.gitcsdemoserver.online/public/images/brain%20logo.png"
              alt=""
              className=" w-20"
            />
          </Link>
          <div className="hidden md:block">
            <NavigationMenuDemo />
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-black text-white py-3 px-4 rounded-md flex gap-2 items-center">
            Sign In <LogIn />
          </button>
          <button className="bg-black text-white py-3 px-4 rounded-md flex gap-2 items-center">
            Register <User2Icon />
          </button>
        </div>
        <div className="md:hidden">
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavigationMenuDemoMobile />
            <div className="flex flex-col px-4">
              <button className="w-[6rem] flex justify-center text-left bg-black text-white py-2 px-4 rounded-full mt-2">
                Sign in
              </button>
              <button className="w-[6rem] flex justify-center text-left bg-black text-white py-2 px-4 rounded-full mt-2">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

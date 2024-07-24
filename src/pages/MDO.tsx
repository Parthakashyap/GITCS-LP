import React from "react";
import PricingSection from "../components/sections/PricingSection";
import FaqSection from "../components/sections/FaqSection";

const MDO: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#E5F3FA] via-[#EAF4F6] to-[#E5F3FA]">
      <div className="text-center mt-16 px-4">
        <h1 className="text-6xl font-black text-[#0033FF]">
          IT'S EASY TO GROW
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Convert more, build lasting relationships, and grow your business
          resiliently, with the magic of contextual AI and thoughtful UI.
        </p>
      </div>
      <div className="mt-8 flex justify-center items-center w-full px-4 space-x-4">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <p className="text-gray-700 font-bold">
            Visionary in 2023 Magic Quadrant™
          </p>
          <p className="text-gray-500">for Sales Force Automation Platforms</p>
          <a href="#" className="text-blue-500">
            Read more &gt;&gt;
          </a>
        </div>
        {/* <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Get started with your 15-day free trial</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="p-2 border border-gray-300 rounded"
            />
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" className="h-4 w-4" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the Terms of Service and Privacy Policy.
              </label>
            </div>
            <button className="bg-red-500 text-white p-2 rounded">GET STARTED</button>
          </form>
          <div className="mt-4 flex flex-col space-y-2 justify-center">
            <button className="bg-blue-500 text-white p-2 rounded flex items-center justify-center">
              <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" className="mr-2" />
              Sign in using Google
            </button>
            <button className="bg-blue-700 text-white p-2 rounded flex items-center justify-center">
              <img src="https://img.icons8.com/color/16/000000/linkedin.png" alt="LinkedIn logo" className="mr-2" />
              Sign in using LinkedIn
            </button>
          </div>
        </div> */}
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <p className="text-gray-700 font-bold">Nucleus Research - Leader</p>
          <p className="text-gray-500">SFA Technology Value Matrix 2024</p>
          <a href="#" className="text-blue-500">
            Read more &gt;&gt;
          </a>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-[#0033FF]">
          Over 100 Million superheroes grow with us
        </h2>
        <div className="flex justify-center mt-4 space-x-4">
          <img src="logo1.png" alt="Logo 1" className="h-12" />
          <img src="logo2.png" alt="Logo 2" className="h-12" />
          <img src="logo3.png" alt="Logo 3" className="h-12" />
          <img src="logo4.png" alt="Logo 4" className="h-12" />
          <img src="logo5.png" alt="Logo 5" className="h-12" />
          <img src="logo6.png" alt="Logo 6" className="h-12" />
          <img src="logo7.png" alt="Logo 7" className="h-12" />
        </div>
      </div>

      <div className="mt-16 p-8 rounded-xl max-w-5xl w-full text-center flex flex-col items-center">
        <div className="flex items-center">
          <img
            src="./src/Images/undraw_online_stats_0g94.svg"
            alt="Person"
            className=" w-[32rem] mr-4"
          />
          <div className="text-left">
            <p className="text-gray-700 text-lg">
              Zoho CRM has helped us achieve 4x ROI in just two years, allowing
              us to excel as one of the largest full-service stores for
              interiors in the real estate industry. Zoho's 360-degree view has
              enabled us to offer great value and experiences to our customers.
            </p>
            <a href="#" className="text-blue-500">
              Read more &gt;&gt;
            </a>
            <p className="mt-2 text-gray-700 font-bold">Ponappa PM</p>
            <p className="text-gray-500">Head, Brigade Plus</p>
          </div>
        </div>
      </div>
      <PricingSection />
      <FaqSection />
    </div>
  );
};

export default MDO;

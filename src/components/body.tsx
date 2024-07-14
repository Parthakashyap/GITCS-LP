import React from "react";
import { HeroScrollDemo } from "./ui/container-scroll-animation-component";
import FeatureSection from "./sections/FeatureSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import PricingSection from "./sections/PricingSection";
import BusinessPotentialSection from "./sections/BusinessPotentialSection";
import FaqSection from "./sections/FaqSection";

const Body: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="sm:hidden block mt-20">
      <div className="flex items-center justify-center">
        <div className="bg-gray-200 text-gray-800 w-80 rounded-full px-4 py-2 mb-4 text-sm font-medium ">
          7 Day Free Trial - No Credit card required
        </div>
      </div>
      <h1 className="text-6xl font-bold text-center tracking-tight">
        Unlock the
        <br /> <span className="text-blue-500">Power</span> of Data
      </h1>
      <p className="text-center text-lg mt-8">
        Turn Data into Actionable Insights <br />
        with Our SaaS Dashboard
      </p>
      <div className="items-center justify-center flex">
      <button className="mt-8 bg-black text-white py-2 px-6 rounded-full">
        Get Started &rarr;
      </button>
      </div>
      </div>
      <div className="hidden sm:block">
      <HeroScrollDemo />
      </div>
      <FeatureSection />

      <TestimonialsSection />

      <PricingSection />

      <BusinessPotentialSection />

      <FaqSection />
    </div>
  );
};

export default Body;

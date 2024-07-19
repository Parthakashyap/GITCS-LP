import React from "react";
import { HeroScrollDemo } from "./ui/container-scroll-animation-component";
import TestimonialsSection from "./sections/TestimonialsSection";
import PricingSection from "./sections/PricingSection";
import BusinessPotentialSection from "./sections/BusinessPotentialSection";
import FaqSection from "./sections/FaqSection";
import { BentoDemo } from "./feature-bento-grid";
import AnimatedShinyText from "./animated-introduction";
import landingImage from "../Images/SaaS-Dashboard.png";
import { BorderBeam } from "./magicui/border-beam";
const Body: React.FC = () => {
  return (
    <div className="bg-gray-100 z-10 min-h-screen flex flex-col items-center justify-center">
      <div className="sm:hidden block mt-20">
        <div className="flex items-center flex-col  gap-4 justify-center">
          <div className="bg-black/10 p-1 mb-5 border-2 border-black/5 rounded-full">
            <AnimatedShinyText children="🎉 7 Day Free Trial - No Credit card required 	&rarr;" />
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

        <BorderBeam/>
          <div className="relative w-[90%] mx-auto mt-8">
            <img src={landingImage} alt="hero" className="w-full" />
            <div className="absolute inset-x-0 bottom-0 h-[50%] rounded-xl bg-gradient-to-t from-black to-transparent"></div>
          </div>
      </div>
      <div className="hidden sm:block">
        <HeroScrollDemo />
      </div>
      <div className=" md:w-[70%] w-[90%] mt-8 md:m-auto">
        <div className="text-center mb-12 mt-12">
          <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mb-4 inline-block text-sm font-medium">
            Features
          </div>
          <h2 className="md:text-5xl text-4xl font-bold">
            Real-Time Insights, <br />
            <span className="text-purple-500">Real-Time Results</span>
          </h2>
          <p className="mt-4 text-sm md:text-md text-gray-600">
            Saas dashboard that enable users to perform various <br />
            tasks and activities related to their business
          </p>
        </div>
        <BentoDemo />
      </div>
      <TestimonialsSection />
      <PricingSection />

      <BusinessPotentialSection />

      <FaqSection />
    </div>
  );
};

export default Body;

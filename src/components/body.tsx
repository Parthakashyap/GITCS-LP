import React from "react";
import { HeroScrollDemo } from "./ui/container-scroll-animation-component";
import PricingSection from "./sections/PricingSection";
import BusinessPotentialSection from "./sections/BusinessPotentialSection";
import FaqSection from "./sections/FaqSection";
import { BentoDemo } from "./feature-bento-grid";
import landingImage from "../Images/SaaS-Dashboard.png";
import { BorderBeam } from "./magicui/border-beam";
import { MarqueeDemo } from "./sections/TestimonialsSection";
import GradualSpacing from "./magicui/gradual-spacing";
import { CoolMode } from "./magicui/cool-mode";
const Body: React.FC = () => {
  return (
    <div className="bg-gray-100 z-10 min-h-screen flex flex-col items-center justify-center">
      <div className="sm:hidden block mt-20">
        <div className="flex items-center flex-col  gap-4 justify-center"></div>
        <h1 className="text-6xl font-bold text-center tracking-tight">
          Unlock the
          <br /> <span className="text-[#3FEDBC]">Power</span> of Data
        </h1>
        <p className="text-center text-lg mt-8">
          A SaaS solution offering a dashboard for <br />
          users to perform diverse business functions.
        </p>
        <div className="items-center justify-center flex">
          <CoolMode>
            <button className="mt-8 mb-24 bg-black text-white py-4 px-6 rounded-full">
              Get Started &rarr;
            </button>
          </CoolMode>
        </div>

        <div className="relative w-[90%] mx-auto mt-8 border-2 border-black rounded-lg">
          <img
            src={landingImage}
            alt="hero"
            className="w-full rounded-lg h-[230px]"
          />
          <div className="absolute inset-x-0 bottom-0 h-[50%] rounded-md bg-gradient-to-t from-black to-transparent"></div>
          <BorderBeam className=" rounded-lg" />
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
            Instant analytics, <br />
            <span className="text-[#3FEDBC]">Live reporting dashboard</span>
          </h2>
          <p className="mt-4 text-sm md:text-md text-gray-600">
            A SaaS solution offering a dashboard for <br />
            users to perform diverse business functions.
          </p>
        </div>
        {/* <AnimatedBeamDemo/> */}
        <BentoDemo />
      </div>
      <div className="m-auto max-w-7xl mt-20 mb-20">
        <GradualSpacing
          text="What’s being said"
          className="hidden md:block mb-20 font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
        />
        <h1 className=" mb-7 p-4 text-3xl font-bold md:hidden">
          What’s being said
        </h1>
        <MarqueeDemo />
      </div>
      <PricingSection />

      <BusinessPotentialSection />

      <FaqSection />
    </div>
  );
};

export default Body;

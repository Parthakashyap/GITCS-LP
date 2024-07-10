import React from 'react';
import {HeroScrollDemo} from './ui/container-scroll-animation-component';
import FeatureSection from './sections/FeatureSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import BusinessPotentialSection from './sections/BusinessPotentialSection';
import FaqSection from './sections/FaqSection';

const Body: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <HeroScrollDemo/>

      <FeatureSection />

      <TestimonialsSection />

      <PricingSection />

      <BusinessPotentialSection />

      <FaqSection/>
      
    </div>
  );
};

export default Body;

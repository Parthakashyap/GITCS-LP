
import {  Share2Icon } from "lucide-react";

import { BentoCard } from "./magicui/bento-grid";
import { AnimatedBeamMultipleOutputDemo } from "./magicui/animated-beam-multi-output";



const features = [
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

export function BentoDemo() {
  return (
    <div className="flex justify-center items-center w-full m-auto">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} className="h-[360px] md:w-[60%] w-full" />
      ))}
   </div>
  );
}

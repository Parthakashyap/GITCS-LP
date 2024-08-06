import { Workflow } from "lucide-react";
import hrbg from "../Images/Logistics/undraw_steps_re_odoy.svg";
import charts from "../Images/Gigs/undraw_cms_re_asu0.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "FMS Management System",
    img: charts,
    icon: Workflow,
    description:
      "Grow your business with our comprehensive FMS Management System. Track, manage, and optimize your fleet operations with real-time data analytics and actionable insights.",
  },
];

const Logistics = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-emerald-600 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Streamlined Logistics Management Dashboard"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Optimize your logistics operations with our comprehensive dashboard. Track shipments, manage inventory, and monitor delivery performance in real-time. With intuitive analytics and reporting tools, you can streamline workflows, reduce delays, and enhance overall efficiency. Stay ahead in the logistics game with seamless coordination and actionable insights."
                direction="left"
              />
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <BlurIn
                word="Get Started"
                className="bg-black py-3 rounded-md flex gap-2 justify-center items-center px-8"
              />
              <BlurIn
                word="Learn More"
                className="border border-white text-black bg-white flex justify-center gap-4 items-center py-3 rounded-md px-8"
              />
            </div>
          </div>
          <img src={hrbg} alt="HR Background" className="md:w-1/2 w-96" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-8 items-center md:p-9 p-3">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:max-w-[80%] grid-cols-1 gap-4">
          {sections.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-emerald-600 hover:bg-gray-100 duration-200"
            >
              <Icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="break-words max-w-[80%] mt-2">{description}</p>
            </div>
          ))}
        </div>

        <hr className="bg-black w-full" />

        {sections.map((section, index) => (
          <BrainFlowSection
            key={index}
            index={index}
            title={section.title}
            color="#059669"
            img={section.img}
            description={section.description}
          />
        ))}
        <div className="mt-20">
          <PricingSection />
        </div>
        <FaqSection />
      </div>
    </div>
  );
};

export default Logistics;

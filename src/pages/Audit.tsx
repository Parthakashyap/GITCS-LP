import {
  BarChart
} from "lucide-react";
import hrbg from "../Images/Audit/undraw_growth_analytics_re_pyxf.svg";
import charts from "../Images/charts-light-gray.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "RT Audit System",
    img: charts,
    icon : BarChart,
    description:
      "Enhance your audit processes with our robust dashboard designed for comprehensive analysis and compliance management. Track audit trails, review financial records, and ensure adherence to regulations with ease. Utilize detailed reports and real-time data to identify discrepancies, streamline investigations, and maintain transparency across all operations.",
  },
];


const Audit = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-[#1C1C1C] text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Comprehensive Audit and Compliance Dashboard"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Enhance your audit processes with our robust dashboard designed for comprehensive analysis and compliance management. Track audit trails, review financial records, and ensure adherence to regulations with ease. Utilize detailed reports and real-time data to identify discrepancies, streamline investigations, and maintain transparency across all operations."
                direction="left"
              />
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <BlurIn
                word="Get Started"
                className="bg-green-600 py-3 rounded-md flex gap-2 justify-center items-center px-8"
              />
              <BlurIn
                word="Learn More"
                className="border border-white text-white flex justify-center gap-4 items-center py-3 rounded-md px-8"
              />
            </div>
          </div>
          <img src={hrbg} alt="HR Background" className="md:w-1/2 w-96" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-8 items-center p-9">
      <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:w-[80%] grid-cols-1 gap-4">
          {sections.map(({ icon: Icon, title , description }) => (
            <div
              key={title}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-[#1C1C1C] hover:bg-gray-100 duration-200"
            >
              <Icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="break-words max-w-[80%] mt-2">
                {description}
              </p>
            </div>
          ))}
        </div>

        <hr className="bg-black w-full" />

        {sections.map((section, index) => (
          <BrainFlowSection
            key={index}
            index={index}
            title={section.title}
            color="#1C1C1C"
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
  )
}

export default Audit
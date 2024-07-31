import {
  Bolt,
  Construction,
  Folder,
  ListCheck,
  TabletSmartphone,
} from "lucide-react";
import banner from "../Images/Projects/undraw_data_trends_re_2cdy.svg"
import contractor from "../Images/Projects/undraw_contract_re_ves9.svg"
import bom from "../Images/Projects/undraw_factory_dy-0-a.svg"
import project_management from "../Images/Projects/undraw_organizing_projects_re_9p1k.svg"
import tpi from "../Images/Projects/undraw_product_iteration_kjok.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";
import attendance from "../Images/Projects/undraw_businessman_re_mlee.svg"

const sections = [
  {
    title: "Attendance System",
    img: attendance,
    icon: ListCheck,
    description:
      "Effortlessly manage and track employee attendance with our robust ERP-integrated Attendance Management System. Streamline check-ins, automate attendance records, and generate insightful reports to ensure punctuality and productivity across your organization. Enhance your HR operations with real-time data and seamless integration.",
  },
  {
    title: "Contractor Management System",
    img: contractor,
    icon: Construction,
    description:
      "Efficiently manage all aspects of contractor relationships with our integrated Contractor Management System. Streamline onboarding, track performance, and ensure compliance with ease. Centralize contractor data and optimize your workflow for better project outcomes.",
  },
  {
    title: "BOM Management System",
    img: bom,
    icon: Folder,
    description:
      "Streamline your operations with our BOM Management System, designed to optimize your manufacturing process. Easily track and manage all Bill of Materials (BOM) data within your ERP, ensuring accurate and efficient production planning. Enhance your workflow with real-time updates and comprehensive insights.",
  },
  {
    title: "Project Management Management",
    icon: TabletSmartphone,
    img: project_management,
    description:
      "Efficiently oversee and manage your projects with our Project Management Dashboard. This tool provides a comprehensive overview of tasks, timelines, and team performance. Monitor progress, allocate resources, and ensure deadlines are met with streamlined visuals and actionable insights.",
  },
  {
    title: "TPI Integration",
    icon: Bolt,
    img: tpi,
    description:
      "The TPI system in our ERP enables seamless data exchange with external systems, ensuring real-time synchronization and improved efficiency.",
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-teal-900 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Project Management Dashboard"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Efficiently oversee and manage your projects with our Project Management Dashboard. This tool provides a comprehensive overview of tasks, timelines, and team performance. Monitor progress, allocate resources, and ensure deadlines are met with streamlined visuals and actionable insights."
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
          <img src={banner} alt="HR Background" className="md:w-1/2 w-96" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>
        <div className="grid lg:grid-cols-3 md:w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-teal-900 hover:bg-gray-100 duration-200"
            >
              <section.icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{section.title}</h1>
              <p className="break-words max-w-[80%] mt-2">
                {section.description}
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
            color="#134E4A"
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

export default Projects;

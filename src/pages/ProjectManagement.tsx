import { ListTodo } from "lucide-react";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";
import tasks from "../Images/ProjectManagement/undraw_add_tasks_re_s5yj-light-gray.svg";
import banner from "../Images/Projects/undraw_organizing_projects_re_9p1k.svg";
const sections = [
  {
    title: "Task Management",
    img: tasks,
    icon: ListTodo,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
];

const ProjectManagement = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-rose-700 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Streamlined Project Management for Maximum Efficiency"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Welcome to your Project Management Dashboard, designed to optimize your workflow and enhance team collaboration. With real-time tracking, task management, and detailed analytics, you can stay ahead of deadlines, allocate resources effectively, and ensure every project is a success. Our intuitive interface ensures that all your project data is accessible and actionable, driving productivity and delivering results."
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

      <div className="flex justify-center flex-col gap-8 items-center md:p-9 p-3">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:max-w-[80%] grid-cols-1 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-rose-700 hover:bg-gray-100 duration-200"
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
            color="#BE123F"
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

export default ProjectManagement;

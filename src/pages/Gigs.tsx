import {
  Calendar,
  CalendarHeart,
  HelpingHand,
  Lightbulb,
  ListTodo,
  Notebook,
  ThermometerSnowflake,
} from "lucide-react";
import hrbg from "../Images/Gigs/undraw_cms_re_asu0.svg";
import charts from "../Images/Gigs/undraw_helpful_sign_re_8ms5.svg";
import flow_chart from "../Images/Gigs/undraw_calendar_re_ki49.svg";
import designation from "../Images/Gigs/undraw_result_re_uj08.svg";
import tasks from "../Images/Gigs/undraw_to_do_list_re_9nt7.svg";
import events from "../Images/Gigs/undraw_task_re_wi3v.svg";
import vault from "../Images/Gigs/undraw_calendar_re_ki49.svg";
import group_chat from "../Images/Gigs/undraw_knowledge_re_5v9l.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "Help Ticket System",
    img: charts,
    icon: HelpingHand,
    description:
      "Streamline your support process with our intuitive Help Ticket System. Track, manage, and resolve issues efficiently, ensuring your team stays focused and productive.",
  },
  {
    title: "Annual Legal Compliance Calendar",
    img: flow_chart,
    icon: CalendarHeart,
    description:
      "Stay ahead of regulatory deadlines with our Annual Legal Compliance Calendar. Easily track and manage all compliance tasks to ensure your business meets all legal requirements.",
  },
  {
    title: "Scorecard (MIS)",
    img: designation,
    icon: Notebook,
    description:
      "Monitor key performance indicators with our Scorecard (MIS). Gain insights into your business performance and make informed decisions with real-time data analytics.",
  },
  {
    title: "Todo List",
    img: tasks,
    icon: ListTodo,
    description:
      "Organize your daily tasks with our Todo List feature. Prioritize and track your to-dos to ensure nothing falls through the cracks and your team stays on top of their responsibilities.",
  },
  {
    title: "One-Time Task",
    img: events,
    icon: ThermometerSnowflake,
    description:
      "Manage unique, non-recurring tasks with our One-Time Task feature. Ensure these important tasks are completed on time without the hassle of traditional tracking methods.",
  },
  {
    title: "Calendar",
    img: vault,
    icon: Calendar,
    description:
      "Keep track of all your important events and deadlines with our integrated Calendar. Schedule meetings, set reminders, and never miss an important date again.",
  },
  {
    title: "Learning Center",
    img: group_chat,
    icon: Lightbulb,
    description:
      "Empower your team with our Learning Center. Access training materials, tutorials, and resources to enhance skills and knowledge, fostering continuous growth and development.",
  },
];

const Gigs = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-[#8A2BE2] text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="All-in-One Gigs Management Dashboard"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Effortlessly manage your gigs with our comprehensive dashboard. Featuring a calendar for scheduling, a scorecard for performance tracking, a to-do list for daily tasks, and one-time task management. Access the Learning Center for skill development and resolve issues quickly through the Help Ticket System. Streamline your workflow and stay organized with all the tools you need in one place."
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

      <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:w-[80%] grid-cols-1 gap-4">
          {sections.map(({ icon: Icon, title , description }) => (
            <div
              key={title}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-[#8A2BE2] hover:bg-gray-100 duration-200"
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
            color="#8A2BE2"
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

export default Gigs;

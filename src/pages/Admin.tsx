import banner from "../Images/Admin/undraw_programmer_re_owql.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import PricingSection from "../components/sections/PricingSection";
import FaqSection from "../components/sections/FaqSection";
import {
  Briefcase,
  Building,
  Calendar,
  Fuel,
  LockIcon,
  Plus,
} from "lucide-react";

import task_management from "../Images/Admin/undraw_next_tasks_re_5eyy.svg"
import office from "../Images/Admin/undraw_in_the_office_re_jtgc.svg"
import fuel from "../Images/Admin/undraw_automobile_repair_ywci.svg"
import event_management from "../Images/Admin/undraw_events_re_98ue.svg"
import greeting_management from "../Images/Admin/undraw_hello_re_3evm.svg"
import asset_management from "../Images/Admin/undraw_crypto_portfolio_2jy5.svg"

import { BrainFlowSection } from "../components/BrainFlow";
const sections = [
  {
    title: "Task Management",
    img: task_management,
    icon : Briefcase,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Front Office",
    img: office,
    icon : Building,
    description:
      "Streamline your front office operations with our ERP system's Front Office workflow feature. From managing customer inquiries and appointments to handling reservations and check-ins, our feature provides a seamless and efficient experience for your staff and customers. With real-time updates and integration with other modules, you can ensure smooth communication and collaboration across your organization.",
  },
  {
    title: "Fuel Management System",
    img: fuel,
    icon : Fuel,
    description:
      "Efficiently manage and track fuel consumption, inventory, and expenses with our Fuel Management System. Our feature provides real-time monitoring of fuel levels, automated fuel data collection, and comprehensive reporting. With our system, you can optimize fuel usage, reduce costs, and ensure compliance with regulatory requirements.",
  },
  {
    title: "Event Management System",
    img: event_management,
    icon : Plus,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Greeting Management System",
    img: greeting_management,
    icon : Calendar,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Asset Management System",
    img: asset_management,
    icon : LockIcon,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  }
];
const Admin = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-purple-900 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col-reverse items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8  mt-10 md:mt-20 mb-20">
            <WordPullUp
              words="A reliable admin dashboard for everyone."
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className=" max-w-2xl">
              <FadeText
                text="For personal use, teams, and large enterprises, Brain Admin is a secure Admin Dashboard for everyone that safely manages everything and other sensitive information."
                direction="left"
              />
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <BlurIn
                word={`Get Started `}
                className=" bg-black py-3 rounded-md flex gap-2 justify-center items-center px-8"
              />
              <BlurIn
                word="Learn More"
                className=" border border-white bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
              />
            </div>
          </div>

          <img src={banner} alt="" className=" md:w-1/2 w-96" />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>

        <div className="grid lg:grid-cols-3 md:max-w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-purple-900 hover:bg-gray-100 duration-200"
            >
              <section.icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{section.title}</h1>
              <p className="break-words max-w-[80%] mt-2">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className=" bg-black w-full" />

      {sections.map((section, index) => (
        <BrainFlowSection
          key={index}
          index={index}
          title={section.title}
          img={section.img}
          color="#581C87"
          description={section.description}
        />
      ))}

      <div className="mt-20">
        <PricingSection />
      </div>
      <FaqSection />
    </div>
  );
};

export default Admin;

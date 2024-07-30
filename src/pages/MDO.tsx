import banner from "../assets/resume.svg"
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import PricingSection from "../components/sections/PricingSection";
import FaqSection from "../components/sections/FaqSection";
import {
  DoorClosed,
  DoorOpen,
  Handshake,
  LockOpen,
  Plus,
  TestTube,
} from "lucide-react";

import charts from "../Images/charts.svg";
import flow_chart from "../Images/undraw_bear_market_ania.svg";
import designation from "../Images/undraw_post_re_mtr4.svg";
import tasks from "../Images/undraw_add_tasks_re_s5yj.svg";
import events from "../Images/undraw_events_re_98ue.svg";
import vault from "../Images/undraw_vault_re_s4my.svg";
import group_chat from "../Images/undraw_group_chat_re_frmo.svg";
import master_chat from "../Images/undraw_professor_re_mj1s.svg";
import crm_plus from "../Images/undraw_projections_re_ulc6.svg";
import GradualSpacing from "../components/magicui/gradual-spacing";
import { BrainFlowSection } from "./hr";
const sections = [
  {
    title: "Hiring Brain Flow",
    img: charts,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Recruitment Brain Flow",
    img: flow_chart,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Onboarding Brain Flow",
    img: designation,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Training And Evaluation Brain Flow",
    img: tasks,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Events",
    img: events,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Joining & Handover Brainflow",
    img: vault,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Seperating BrainFlow",
    img: group_chat,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Master Chat",
    img: master_chat,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "CRM PLUS +",
    img: crm_plus,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
];
const MDO = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-sky-700 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8  mt-20 mb-20">
            <WordPullUp
              words="Deliver exceptional employee experiences."
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className=" max-w-2xl">
              <FadeText
                text="The world of work is changing rapidly and so should your HR practices. Brain People is a cloud-based HR software crafted to nurture employees, quickly adapt to changes, and make HR management agile and effective. Simplify your HR operations, retain talent, and build a high-performing workforce while putting employee experience first."
                direction="left"
              />
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <BlurIn
                word={`Get Started `}
                className=" bg-orange-600 py-3 rounded-md flex gap-2 justify-center items-center px-8"
              />
              <BlurIn
                word="Learn More"
                className=" border border-white text-white flex justify-center gap-4 items-center py-3 rounded-md px-8"
              />
            </div>
          </div>

          <img src={banner} alt="" className=" md:w-1/2 w-96" />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:hidden">
          What Brain Brings To The Table
        </h1>
        <GradualSpacing
          className="hidden md:block font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="What Brain Brings To The Table"
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {[
            { icon: DoorOpen, title: "Hiring Brain Flow" },
            { icon: LockOpen, title: "Recruitment Brain Flow" },
            { icon: Plus, title: "Onboarding Brain Flow" },
            { icon: TestTube, title: "Training & Evaluation Brain Flow" },
            { icon: Handshake, title: "Joining & Handover Brain Flow" },
            { icon: DoorClosed, title: "Seperation Brain Flow" },
          ].map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-blue-600 hover:bg-gray-100 duration-200"
            >
              <Icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="break-words max-w-[80%] mt-2">
                All in one social media management software
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

export default MDO;

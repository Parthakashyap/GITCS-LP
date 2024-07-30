import banner from "../assets/resume.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import PricingSection from "../components/sections/PricingSection";
import FaqSection from "../components/sections/FaqSection";
import { AlarmClock, Building2, InspectionPanel, LockOpen, PartyPopper, Plus, UserCheck, Users, Workflow } from "lucide-react";

import charts from "../Images/MDO/charts.svg";
import flow_chart from "../Images/MDO/undraw_bear_market_ania.svg";
import designation from "../Images/MDO/undraw_post_re_mtr4.svg";
import tasks from "../Images/MDO/undraw_add_tasks_re_s5yj.svg";
import events from "../Images/MDO/undraw_events_re_98ue.svg";
import vault from "../Images/MDO/undraw_vault_re_s4my.svg";
import group_chat from "../Images/MDO/undraw_group_chat_re_frmo.svg";
import master_chat from "../Images/MDO/undraw_professor_re_mj1s.svg";
import crm_plus from "../Images/MDO/undraw_projections_re_ulc6.svg";
import { BrainFlowSection } from "../components/BrainFlow";
const sections = [
  {
    title: "Organisation Structure Maker",
    icon: Building2,
    img: charts,
    description:
      "Comprehensive CRM platform for customer-facing teams. Manage leads, deals, and customers in one place. Automate repetitive tasks and streamline your sales process.",
  },
  {
    title: "Flow Chart Maker",
    img: flow_chart,
    icon: Workflow,
    description: "Simple CRM for small businesses moving from spreadsheets. ",
  },
  {
    title: "Designation Profile",
    img: designation,
    icon: UserCheck,
    description:
      "Build online forms and surveys with our user-friendly form builder.",
  },
  {
    title: "Task Deligation",
    img: tasks,
    icon : AlarmClock,
    description:
      "Task delegation in our SaaS CRM allows managers to efficiently assign responsibilities to team members, ensuring that tasks are handled by those with the appropriate skills, thereby streamlining workflow and enhancing productivity..",
  },
  {
    title: "Events",
    img: events,
    icon : PartyPopper,
    description:
      "Appointment scheduling app for consultations with customers..",
  },
  {
    title: "Vault",
    img: vault,
    icon : LockOpen,
    description:
      "Digital signature app for businesses. Sign documents online with legally binding e-signatures.",
  },
  {
    title: "Group Chat",
    img: group_chat,
    icon : Users,
    description:
      "The group chat feature in our ERP system enables real-time communication and collaboration among team members, facilitating seamless information sharing and enhancing team productivity..",
  },
  {
    title: "Master List",
    img: master_chat,
    icon : InspectionPanel,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "CRM PLUS +",
    icon : Plus,
    img: crm_plus,
    description:
      "Unified platform  to deliver top-notch customer service. Manage customer interactions, automate repetitive tasks, and streamline your sales process.",
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
          {sections.map((section, key) => (
            <div
              key={key}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-sky-700 hover:bg-gray-100 duration-200"
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
          color="#0369A9"
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

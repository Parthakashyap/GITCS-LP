import {
  DoorClosed,
  DoorOpen,
  Handshake,
  LockOpen,
  Plus,
  TestTube,
  Check,
} from "lucide-react";
import hrbg from "../Images/undraw_job_offers_re_634p.svg";
import charts from "../Images/charts.svg";
import flow_chart from "../Images/undraw_bear_market_ania.svg";
import designation from "../Images/undraw_post_re_mtr4.svg";
import tasks from "../Images/undraw_add_tasks_re_s5yj.svg";
import events from "../Images/undraw_events_re_98ue.svg";
import vault from "../Images/undraw_vault_re_s4my.svg";
import group_chat from "../Images/undraw_group_chat_re_frmo.svg";
import master_chat from "../Images/undraw_professor_re_mj1s.svg";
import crm_plus from "../Images/undraw_projections_re_ulc6.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BoxReveal from "../components/magicui/box-reveal";
import BlurIn from "../components/magicui/blur-in";
import GradualSpacing from "../components/magicui/gradual-spacing";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";

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

export const BrainFlowSection = ({
  title,
  img,
  description,
  index,
}: {
  title: string;
  img: string;
  description: string;
  index: number;
}) => (
  <>
    <section
      className={`flex items-center flex-col md:flex-row md:p-4 gap-20 md:gap-40 w-full justify-center mt-44 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/3">
        <BoxReveal boxColor="#1c4cd8">
          <img src={img} alt={title} />
        </BoxReveal>
      </div>
      <div className="flex gap-8 flex-col">
        <BoxReveal boxColor="#1c4cd8">
          <h1 className="md:text-5xl text-3xl md:pb-1 font-bold text-left">
            {title}
          </h1>
        </BoxReveal>
        <BoxReveal duration={0.5} boxColor="#1c4cd8">
          <p className="max-w-xl text-lg text-left opacity-60">{description}</p>
        </BoxReveal>
        <ul className="flex flex-col gap-3 items-start">
          {[...Array(5)].map((_, idx) => (
            <BoxReveal key={idx} duration={0.7} boxColor="#1c4cd8">
              <div className="flex gap-3 items-center break-words flex-wrap">
                <div className="bg-green-500/10 p-2 rounded-full">
                  <Check size={10} />
                </div>
                <li>Employee Database</li>
              </div>
            </BoxReveal>
          ))}
        </ul>
      </div>
    </section>
    <hr className="w-full bg-black h-[1px]" />
  </>
);

const HR = () => (
  <div className="flex flex-col gap-5 w-full min-h-screen">
    <div className="bg-blue-700 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
      <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
        <div className="flex flex-col gap-8 mt-20 mb-20">
          <WordPullUp
            words="The ultimate staffing experience to grow your business"
            className="text-5xl font-bold text-left max-w-3xl break-words"
          />
          <div className="max-w-2xl">
            <FadeText
              text="Brain Workerly is an end-to-end temp lifecycle management software for staffing agencies. With our unified platform, schedule temps, manage e-timesheets, generate invoices, and close jobs faster."
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

      <hr className="bg-black w-full" />

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
  </div>
);

export default HR;

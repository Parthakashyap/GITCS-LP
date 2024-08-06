import {
  DoorClosed,
  DoorOpen,
  Handshake,
  LockOpen,
  Plus,
  TestTube,
} from "lucide-react";
import hrbg from "../Images/HR/undraw_job_offers_re_634p.svg";
import hiring from "../Images/HR/undraw_interview_re_e5jn.svg";
import recruitment from "../Images/HR/undraw_hiring_re_yk5n.svg";
import onboarding from "../Images/HR/undraw_agreement_re_d4dv.svg";
import training from "../Images/HR/undraw_progress_tracking_re_ulfg.svg";
import joining from "../Images/HR/undraw_join_re_w1lh.svg";
import separation from "../Images/HR/undraw_windy_day_x-63-l.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "Hiring Brain Flow",
    img: hiring,
    icon: DoorOpen,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Recruitment Brain Flow",
    img: recruitment,
    icon: LockOpen,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Onboarding Brain Flow",
    img: onboarding,
    icon: Plus,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Training And Evaluation Brain Flow",
    img: training,
    icon: TestTube,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },

  {
    title: "Joining & Handover Brainflow",
    img: joining,
    icon: Handshake,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
  {
    title: "Seperating BrainFlow",
    img: separation,
    icon: DoorClosed,
    description:
      "Say goodbye to mundane spreadsheets or rigid systems to manage HR tasks. Get smarter and more efficient software with features designed to free you from administrative work.",
  },
];

const HR = () => (
  <div className="flex flex-col gap-5 w-full min-h-screen">
    <div className="bg-orange-700 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
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
              className="bg-black py-3 rounded-md flex gap-2 justify-center items-center px-8"
            />
            <BlurIn
              word="Learn More"
              className="border bg-white text-black flex justify-center gap-4 items-center py-3 rounded-md px-8"
            />
          </div>
        </div>
        <img src={hrbg} alt="HR Background" className="md:w-1/2 w-96" />
      </div>
    </div>

    <div className="flex justify-center flex-col gap-8 items-center p-3 md:p-9">
      <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
        What Brain Brings To The Table
      </h1>

      <div className="grid md:w-[80%] lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {sections.map((data, index) => (
          <div
            key={index}
            className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-orange-700 hover:bg-gray-100 duration-200"
          >
            <data.icon size={50} className="mb-6" />
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="break-words max-w-[80%] mt-2">{data.description}</p>
          </div>
        ))}
      </div>

      <hr className="bg-black w-full" />

      {sections.map((section, index) => (
        <BrainFlowSection
          key={index}
          index={index}
          title={section.title}
          color="#C2410C"
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

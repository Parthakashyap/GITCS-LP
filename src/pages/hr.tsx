import { ArrowRight,  DoorClosed, DoorOpen, Handshake, LockOpen, Plus, TestTube } from "lucide-react";
import React from "react";
import hrbg from "../Images/undraw_job_offers_re_634p.svg";
import LetterPullup from "../components/magicui/letter-pull-up";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import { Check } from "lucide-react";
import charts from "../Images/charts.svg";
import flow_chart from "../Images/undraw_bear_market_ania.svg";
import designation from "../Images/undraw_post_re_mtr4.svg";
import tasks from "../Images/undraw_add_tasks_re_s5yj.svg";
import FaqSection from "../components/sections/FaqSection";
import events from "../Images/undraw_events_re_98ue.svg";
import PricingSection from "../components/sections/PricingSection";
import vault from "../Images/undraw_vault_re_s4my.svg";
import group_chat from "../Images/undraw_group_chat_re_frmo.svg";
import master_chat from "../Images/undraw_professor_re_mj1s.svg";
import crm_plus from "../Images/undraw_projections_re_ulc6.svg";
import BoxReveal from "../components/magicui/box-reveal";
const HR: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-blue-700 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8  mt-20 mb-20">
            <WordPullUp
              words="The ultimate staffing experience to grow your business"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className=" max-w-2xl">
              <FadeText
                text="Brain Workerly is an end-to-end temp lifecycle management software
              for staffing agencies. With our unified platform, schedule temps,
              manage e-timesheets, generate invoices, and close jobs faster."
                direction="left"
              />
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <button className=" bg-orange-600 py-3 rounded-md flex gap-2 justify-center items-center px-8">
                Get Started <ArrowRight />
              </button>
              <button className=" border border-white text-white flex justify-center gap-4 items-center py-3 rounded-md px-8">
                Learn More <Plus />
              </button>
            </div>
          </div>

          <img src={hrbg} alt="" className=" md:w-1/2 w-96" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:hidden">What Brain Brings To The Table</h1>
        <LetterPullup words="What Brain Brings To The Table" className=" hidden md:block" />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
            <DoorOpen size={50} className=" mb-6" />
            <h1 className=" text-2xl font-bold">Hiring Brain Flow</h1>
            <p className=" break-words max-w-[80%] mt-2">
              All in one social media management software
            </p>
          </div>

          <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
            <LockOpen size={50} className=" mb-6" />
            <h1 className=" text-2xl font-bold">Recruitment Brain Flow</h1>
            <p className=" break-words max-w-[80%] mt-2">
              All in one social media management software
            </p>
          </div>
          <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
            <Plus size={50} className=" mb-6" />
            <h1 className=" text-2xl font-bold">Onboarding Brain Flow</h1>
            <p className=" break-words max-w-[80%] mt-2">
              All in one social media management software
            </p>
          </div>

          <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
            <TestTube size={50} className=" mb-6" />
            <h1 className=" text-2xl font-bold">Traning & Evaluation Brain Flow</h1>
            <p className=" break-words max-w-[80%] mt-2">
              All in one social media management software
            </p>
          </div>

          <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
            <Handshake size={50} className=" mb-6" />
            <h1 className=" text-2xl font-bold">Joining & Handover Brain Flow</h1>
            <p className=" break-words max-w-[80%] mt-2">
              All in one social media management software
            </p>
          </div>

          <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
            <DoorClosed size={50} className=" mb-6" />
            <h1 className=" text-2xl font-bold">Seperation Brain Flow</h1>
            <p className=" break-words max-w-[80%] mt-2">
              All in one social media management software
            </p>
          </div>
        </div>

        <hr className=" bg-black w-full" />

        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center md:flex-row flex-col p-4 gap-20 md:gap-40 w-full justify-center mt-44">
            <img src={charts} alt="" className=" md:w-1/3" />
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">
                Hiring Brain Flow
              </h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </BoxReveal>

        <hr className=" bg-black w-full" />
        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 gap-20 md:gap-40 md:flex-row flex-col w-full justify-center mt-44">
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">
                Recruitment Brainflow
              </h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>

            <img src={flow_chart} alt="" className=" md:w-1/3" />
          </section>
        </BoxReveal>

        <hr className=" bg-black w-full" />

        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col w-full justify-center mt-44">
            <img src={designation} alt="" className=" md:w-1/3" />
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">
                Onboarding Brainflow
              </h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </BoxReveal>

        <hr className=" bg-black w-full" />

        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col-reverse w-full justify-center mt-44">
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">
                Training & Evalutation Brain Flow
              </h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
            <img src={tasks} alt="" className=" md:w-1/3" />
          </section>
        </BoxReveal>

        <hr className=" bg-black w-full" />
        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col  w-full justify-center mt-44">
            <img src={events} alt="" className=" md:w-1/3" />
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">Events</h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </BoxReveal>

        <hr className=" bg-black w-full" />
        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col-reverse w-full justify-center mt-44">
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">
                Joining & Handover Brainflow
              </h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
            <img src={vault} alt="" className=" md:w-1/3" />
          </section>
        </BoxReveal>
        <hr className=" bg-black w-full" />
        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col w-full justify-center mt-44">
            <img src={group_chat} alt="" className=" md:w-1/3" />
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">
                Seperating BrainFlow
              </h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </BoxReveal>
        <hr className=" bg-black w-full" />
        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col-reverse w-full justify-center mt-44">
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">Master Chat</h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
            <img src={master_chat} alt="" className=" md:w-1/3" />
          </section>
        </BoxReveal>
        <hr className=" bg-black w-full" />
        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col w-full justify-center mt-44">
            <img src={crm_plus} alt="" className=" md:w-1/3" />
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">CRM PLUS+</h1>
              <p className=" max-w-xl text-lg text-left opacity-60">
                Say goodbye to mundane spreadsheets or rigid systems to manage
                HR tasks. Get smarter and more efficient software with features
                designed to free you from administrative work.
              </p>
              <ul className="flex flex-col gap-3 items-start">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    className="flex gap-3 items-center break-words flex-wrap"
                    key={index}
                  >
                    <div className="bg-green-500/10 p-2 rounded-full">
                      <Check size={10} />
                    </div>
                    <li>Employee Database </li>
                  </div>
                ))}
              </ul>
            </div>
          </section>
        </BoxReveal>
        <hr className=" bg-black w-full" />
        <div className="mt-20">
          <PricingSection />
        </div>
        <FaqSection />
      </div>
    </div>
  );
};
export default HR;

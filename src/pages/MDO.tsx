import { Check } from "lucide-react";
import resume from "../assets/resume.svg";
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
import { FadeText } from "../components/magicui/fade-text";
import WordPullUp from "../components/magicui/word-pull-up";
import BlurIn from "../components/magicui/blur-in";
import BoxReveal from "../components/magicui/box-reveal";

const MDO = () => {
  return (
    <div className="flex justify-center w-full items-center text-center flex-col gap-12 mt-20   p-4">
      <div className="md:max-w-3xl">
      <WordPullUp
          words="Deliver exceptional employee experiences."
          className="lg:text-6xl text-4xl capitalize font-bold md:max-w-3xl text-center break-words"
        />
      </div>

      <p className=" md:w-[50%] text-md md:text-lg text-center opacity-60">
        <FadeText
          text="The world of work is changing rapidly and so should your HR practices.
        Brain People is a cloud-based HR software crafted to nurture employees,
        quickly adapt to changes, and make HR management agile and effective.
        Simplify your HR operations, retain talent, and build a high-performing
        workforce while putting employee experience first."
        />
      </p>
      <div className="flex gap-3">
        <BlurIn
          word="Get started"
          className="bg-red-500 text-white px-4 py-3 rounded-md text-md"
        />
        <BlurIn
          word="Learn More"
          className="bg-white text-blue-500 px-4 py-3 rounded-md border "
        />
      </div>
      <BoxReveal>
        <img src={resume} alt="" className=" w-[600px]" />
      </BoxReveal>

      <BoxReveal>
        <section className="flex items-center md:flex-row flex-col p-4 gap-20 md:gap-40 w-full justify-center mt-44">
          <img src={charts} alt="" className=" md:w-1/3" />
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">
              Organisation Chart Maker
            </h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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

      <BoxReveal>
        <section className="flex items-center p-4 gap-20 md:gap-40 md:flex-row flex-col w-full justify-center mt-44">
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">Flow Chart Maker</h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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

      <BoxReveal>
        <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col w-full justify-center mt-44">
          <img src={designation} alt="" className=" md:w-1/3" />
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">
              Designation Profile
            </h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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

      <BoxReveal>
        <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col-reverse w-full justify-center mt-44">
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">Task Deligation</h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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
      <BoxReveal>
        <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col  w-full justify-center mt-44">
          <img src={events} alt="" className=" md:w-1/3" />
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">Events</h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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
      <BoxReveal>
        <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col-reverse w-full justify-center mt-44">
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">Vaults</h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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
      <BoxReveal>
        <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col w-full justify-center mt-44">
          <img src={group_chat} alt="" className=" md:w-1/3" />
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">Group Chat</h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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
      <BoxReveal>
        <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col-reverse w-full justify-center mt-44">
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">Master Chat</h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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
      <BoxReveal>
        <section className="flex items-center p-4 md:gap-40 gap-20 md:flex-row flex-col w-full justify-center mt-44">
          <img src={crm_plus} alt="" className=" md:w-1/3" />
          <div className="flex gap-8 flex-col">
            <h1 className="text-5xl font-bold text-left">CRM PLUS+</h1>
            <p className=" max-w-xl text-lg text-left opacity-60">
              Say goodbye to mundane spreadsheets or rigid systems to manage HR
              tasks. Get smarter and more efficient software with features
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
  );
};

export default MDO;

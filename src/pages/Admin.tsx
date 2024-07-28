import {
  Check,
  Coins,
  DoorOpen,
  Fuel,
  Handshake,
  PartyPopper,
  Workflow,
} from "lucide-react";
import BlurIn from "../components/magicui/blur-in";
import BoxReveal from "../components/magicui/box-reveal";
import LetterPullup from "../components/magicui/letter-pull-up";
import Particles from "../components/magicui/particle";
import TypingAnimation from "../components/magicui/typing-animation";
import WordPullUp from "../components/magicui/word-pull-up";

import vault from "../Images/undraw_vault_re_s4my.svg";
import charts from "../Images/charts.svg";
import flow_chart from "../Images/undraw_bear_market_ania.svg";
import designation from "../Images/undraw_post_re_mtr4.svg";
import tasks from "../Images/undraw_add_tasks_re_s5yj.svg";
import FaqSection from "../components/sections/FaqSection";
import events from "../Images/undraw_events_re_98ue.svg";
import PricingSection from "../components/sections/PricingSection";
const Admin = () => {
  return (
    <div className="relative  flex min-h-screen w-full flex-col  overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col gap-7 mt-20 p-4 md:w-[80%] w-full justify-center items-center m-auto">
        <WordPullUp
          words="A reliable admin dashboard for everyone."
          className="lg:text-6xl text-5xl capitalize font-bold md:max-w-3xl text-center break-words"
        />
        <p className=" max-w-xl text-center h-20">
          <TypingAnimation
            text="For personal use, teams, and large enterprises, Brain Admin is a
          secure Admin Dashboard for everyone that safely manages everything and
          other sensitive information."
            duration={15}
            className=" md:text-lg text-md text-center opacity-70"
          />
        </p>
        <div className="flex gap-3 mt-8">
          <BlurIn
            word="Get started"
            className="bg-red-500 text-white px-4 py-3 rounded-md text-md"
          />
          <BlurIn
            word="Learn More"
            className="bg-white text-blue-500 px-4 py-3 rounded-md border "
          />
        </div>

        <div className=" z-10 m-auto rounded-md p-2 bg-black text-center justify-center items-center">
          <BoxReveal>
            <img
              src="https://www.zohowebstatic.com/sites/zweb/images/vault/banner-team-dashboard.jpg"
              className="rounded-md "
              alt=""
              height={500}
              width={1000}
            />
          </BoxReveal>
        </div>
        <hr className=" bg-black w-full" />
        <div className=" z-20">
          <h1 className="text-center text-4xl mb-10 font-bold md:hidden">
            What Brain Brings To The Table
          </h1>
          <LetterPullup words="What Do We Offer" className=" hidden md:block" />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
              <Workflow size={50} className=" mb-6" />
              <h1 className=" text-2xl font-bold">Task Managment</h1>
              <p className=" break-words max-w-[80%] mt-2">
                All in one social media management software
              </p>
            </div>

            <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
              <DoorOpen size={50} className=" mb-6" />
              <h1 className=" text-2xl font-bold">Front Office</h1>
              <p className=" break-words max-w-[80%] mt-2">
                All in one social media management software
              </p>
            </div>
            <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
              <Fuel size={50} className=" mb-6" />
              <h1 className=" text-2xl font-bold">Fuel Management System</h1>
              <p className=" break-words max-w-[80%] mt-2">
                All in one social media management software
              </p>
            </div>

            <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
              <PartyPopper size={50} className=" mb-6" />
              <h1 className=" text-2xl font-bold">Event Management System</h1>
              <p className=" break-words max-w-[80%] mt-2">
                All in one social media management software
              </p>
            </div>

            <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
              <Handshake size={50} className=" mb-6" />
              <h1 className=" text-2xl font-bold">
                Greetings Management System
              </h1>
              <p className=" break-words max-w-[80%] mt-2">
                All in one social media management software
              </p>
            </div>

            <div className=" p-8 rounded-md border border-black/10 hover:border-blue-600 duration-200">
              <Coins size={50} className=" mb-6" />
              <h1 className=" text-2xl font-bold">Asset Management System</h1>
              <p className=" break-words max-w-[80%] mt-2">
                All in one social media management software
              </p>
            </div>
          </div>
        </div>

        <hr className=" bg-black w-full" />

        <BoxReveal boxColor="#1c4cd8">
          <section className="flex items-center md:flex-row flex-col p-4 gap-20 md:gap-40 w-full justify-center mt-44">
            <img src={charts} alt="" className=" md:w-1/3" />
            <div className="flex gap-8 flex-col">
              <h1 className="text-5xl font-bold text-left">Task Management</h1>
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
              <h1 className="text-5xl font-bold text-left">Front Office</h1>
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
                Fuel Management System
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
                Event Management System
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
              <h1 className="text-5xl font-bold text-left">
                Greetings Management System
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
                Asset Management System
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
        <div className="mt-20 z-20">
          <PricingSection />
        </div>
        <div className="z-20">
          <FaqSection />
        </div>
      </div>
      <Particles
        className=" hidden md:block absolute inset-0"
        quantity={130}
        ease={10}
        color={"#000000"}
        refresh
      />
    </div>
  );
};

export default Admin;

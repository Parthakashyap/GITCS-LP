import { Banknote, Compass, Percent, Scale } from "lucide-react";
import designation from "../Images/Finance/undraw_profile_data_re_v81r.svg";
import tasks from "../Images/Finance/undraw_social_strategy_re_mk87.svg";
import vault from "../Images/Finance/undraw_financial_data_re_p0fl.svg";
import group_chat from "../Images/Finance/undraw_crypto_portfolio_2jy5.svg";
import master_chat from "../Images/Finance/undraw_credit_card_payments_re_qboh.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "CFR",
    img: vault,
    icon: Scale,
    description:
      "The CFR (Customer Feedback and Relations) module in the ERP dashboard streamlines customer interactions and feedback management. It enables efficient tracking, analysis, and response to customer feedback to enhance service quality and customer satisfaction.",
  },
  {
    title: "Statutory Compliances",
    img: group_chat,
    icon: Compass,
    description: "Ensure your business complies with all statutory regulations",
  },
  {
    title: "Budgeting",
    img: master_chat,
    icon: Percent,
    description: "Plan and control your business finances effectively",
  },
  {
    title: "Payment Management System",
    img: designation,
    icon: Banknote,
    description:
      "A payment management system (PMS) is a digital tool that helps businesses manage their payment processes",
  },
];

const Finance = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-yellow-600 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Comprehensive Financial Overview and Analysis Dashboard"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Gain a clear and detailed view of your financial performance with our Finance Dashboard. This tool offers real-time insights into budgets, expenditures, and financial trends. Monitor key metrics, analyze financial data, and make informed decisions to drive your fiscal strategies."
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
          <img src={tasks} alt="HR Background" className="md:w-1/2 w-96" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-8 items-center md:p-9 p-3">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>

        <div className="grid lg:grid-cols-3  md:w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-yellow-600 hover:bg-gray-100 duration-200"
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
            color="#CA8A04"
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

export default Finance;

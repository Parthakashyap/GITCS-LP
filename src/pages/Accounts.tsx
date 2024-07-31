import {
  Banknote,
  Plus,
} from "lucide-react";
import banner from "../Images/Accounts/undraw_online_transactions_-02-ka.svg";
import expense_management from "../Images/Accounts/undraw_data_reports_706v.svg";
import financial_summary from "../Images/Accounts/undraw_receipt_re_fre3.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "Expense management system",
    img: expense_management,
    icon : Banknote,
    description: "Efficiently track and manage employee experiences with our ERP’s intuitive Experiences Management System. Streamline feedback collection, performance evaluations, and career development insights in one centralized platform. Enhance employee engagement and optimize organizational growth through real-time analytics and actionable insights.",
  },
  {
    title: "Financial Summary System",
    img: financial_summary,
    icon : Plus,
    description: "Efficiently manage your financial data with our comprehensive Financial Summary System. Gain real-time insights into income, expenses, and profitability with intuitive dashboards and reports. Streamline your financial operations and make informed decisions with ease.",
  },
];

const Accounts = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-cyan-600 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Efficient Account Management and Tracking Tool"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Streamline your financial operations with our Account Management tool. Integrated into your dashboard, it allows for seamless tracking of accounts, transactions, and reconciliations. Gain insights into account balances, manage financial records, and ensure accuracy with an intuitive interface designed for efficiency."
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
          <img src={banner} alt="HR Background" className="md:w-1/2 w-96" />
        </div>
      </div>

      <div className="flex justify-center flex-col gap-8 items-center p-9">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:max-w-[80%] grid-cols-1 gap-4">
          {sections.map((section, index) => (
                <div
                key={index}
                className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-cyan-600 hover:bg-gray-100 duration-200"
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
            color="#0891B2"
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

export default Accounts;

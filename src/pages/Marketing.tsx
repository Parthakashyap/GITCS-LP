import {
  Banknote,
  Coins,
  LucideAward,
  PiggyBank,
  ShoppingBag,
} from "lucide-react";
import banner from "../Images/Marketing/undraw_business_chat_re_gg4h.svg";
import order from "../Images/Marketing/undraw_finance_re_gnv2.svg";
import fms from "../Images/Marketing/undraw_plain_credit_card_re_c07w.svg";
import savings from "../Images/Marketing/undraw_savings_re_eq4w.svg";
import judge from "../Images/Marketing/undraw_judge_katerina_limpitsouni_ny-1-q.svg";
import bank_guardian from "../Images/Marketing/undraw_online_payments_re_y8f2.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "Lead to order",
    img: order,
    icon: ShoppingBag,
    description: "Manage your finances and accounts",
  },
  {
    title: "FMS Fund Demand",
    img: fms,
    icon: Banknote,
    description:
      "Fms fund demand is a feature that allows you to manage your funds and demands to grow your business.",
  },
  {
    title: "Cash collection engine",
    icon: Coins,
    img: savings,
    description:
      "Cash collection engine is a feature in our software that allows you to manage your cash collection and grow your business.",
  },
  {
    title: "Legal matter system",
    icon: LucideAward,
    img: judge,
    description:
      "Legal matter system is a feature in our software that allows you to manage your legal matters and grow your business.",
  },
  {
    title: "Bank Guardian System",
    icon: PiggyBank,
    img: bank_guardian,
    description:
      " bank guardian system is a feature in our software that allows you to manage your bank and grow your business.",
  },
];

const Marketing = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className="bg-pink-600 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Comprehensive Marketing Insights and Analytics"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Unlock the full potential of your campaigns with Marketing Insights. Our comprehensive tool within the CRM provides detailed analytics, audience segmentation, and performance tracking to help you refine your strategies and drive impactful results. Analyze trends, optimize outreach, and make data-driven decisions to elevate your marketing efforts."
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

      <div className="flex justify-center flex-col gap-8 items-center md:p-9 p-3">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>

        <div className="grid lg:grid-cols-3 md:max-w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
          {sections.map((data, i) => (
            <div
              key={i}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-pink-600 hover:bg-gray-100 duration-200"
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
            color="#DB2777"
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

export default Marketing;

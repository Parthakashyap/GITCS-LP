import { Pipette, ShoppingBag, ShoppingBasket } from "lucide-react";
import banner from "../Images/Procurement/undraw_undraw_undraw_undraw_undraw_undraw_shopping_bags_2ude_-1-_mnw3_-2-_q7y0_muk6_-2-_l1mh_-2-_m4xj.svg";
import funel from "../Images/Procurement/undraw_online_groceries_a02y.svg";
import system from "../Images/Procurement/undraw_window_shopping_re_0kbm.svg";
import vendor from "../Images/Procurement/undraw_delivery_truck_vt6p.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "Procurement System",
    img: system,
    icon: ShoppingBag,
    description:
      "Procurement System is a software solution that helps businesses manage their purchasing process. It automates the procurement process, from requisition to payment, and provides real-time visibility into spending and supplier performance.",
  },
  {
    title: "Procurement Funnel",
    img: funel,
    icon: Pipette,
    description:
      "Procurement Funnel is a visual representation of the stages that a buyer goes through before making a purchase. It is a powerful tool that helps you understand the buying process and identify areas where you can improve your sales strategy.",
  },
  {
    title: "Vendor Funnel",
    icon: ShoppingBasket,
    img: vendor,
    description:
      "Vendor Funnel is a visual representation of the stages that a vendor goes through before making a sale. It helps you understand the vendor's sales process and identify areas where you can improve your procurement strategy.",
  },
];

const Procurment = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className="bg-blue-900 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8 mt-20 mb-20">
            <WordPullUp
              words="Procurement Management and Optimization"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className="max-w-2xl">
              <FadeText
                text="Streamline your purchasing process with our Procurement Management and Optimization tool. Integrated into your CRM, it enables efficient supplier management, order tracking, and cost analysis. Simplify procurement workflows, ensure compliance, and gain insights into purchasing trends to make informed decisions and drive cost savings."
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

        <div className="grid lg:grid-cols-3 md:max-w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-blue-900 hover:bg-gray-100 duration-200"
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
            color="#1E3A8A"
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

export default Procurment;

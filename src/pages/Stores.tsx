import {
  File,
  HandMetal,
  MessageCircleWarning,
  Store,
} from "lucide-react";
import banner from "../Images/Stores/undraw_cloud_files_wmo8.svg";
import warehouse from "../Images/Stores/undraw_successful_purchase_re_mpig.svg"
import challan from "../Images/Stores/undraw_feeling_blue_-4-b7q.svg"
import material from "../Images/Stores/undraw_collection_re_4h7d.svg"
import mtrlmgt from "../Images/Stores/undraw_factory_dy-0-a.svg"
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import FaqSection from "../components/sections/FaqSection";
import PricingSection from "../components/sections/PricingSection";
import { BrainFlowSection } from "../components/BrainFlow";

const sections = [
  {
    title: "Warehouse Management System",
    img: warehouse,
    icon : Store,
    description:
      "Warehouse Management System is a software solution that helps businesses manage their warehouse operations. It automates the process of receiving, storing, and shipping goods, and provides real-time visibility into inventory levels and order status.",
  },{
    title: "Challan Issue System",
    icon : MessageCircleWarning,
    img: challan,
    description:
      "Challan Issue System is a software solution that helps businesses manage their challan issue process. It automates the process of issuing challans, and provides real-time visibility into challan status and order status.",
  },
  {
    title: "Material Management System",
    icon : HandMetal,
    img: mtrlmgt,
    description:
      "Material Mgm System is a software solution that helps businesses manage their material management process. It automates the process of managing materials, and provides real-time visibility into material status and order status.",
  },
  {
    title: "Inventory Mgmt System",
    icon : File,
    img: material,
    description:
      "Inventory Mgmt System is a software solution that helps businesses manage their inventory management process. It automates the process of managing inventory, and provides real-time visibility into inventory status and order status.",
  },
];

const Stores = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
    <div className=" bg-gray-600 text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
      <div className="flex justify-between lg:flex-row flex-col items-center md:w-[80%] w-full m-auto">
        <div className="flex flex-col gap-8 mt-20 mb-20">
          <WordPullUp
            words="Store Management and Optimization"
            className="text-5xl font-bold text-left max-w-3xl break-words"
          />
          <div className="max-w-2xl">
            <FadeText
              text="Efficiently manage and optimize your store operations with our Store Management and Optimization tool. Integrated into your CRM, this feature allows you to track inventory, analyze sales performance, and streamline store processes. Gain actionable insights to improve customer experiences, enhance stock management, and drive overall store efficiency."
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
           className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-gray-600 hover:bg-gray-100 duration-200"
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
          color="#4B5563"
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
  )
}

export default Stores
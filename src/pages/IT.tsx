import hrbg from "../Images/IT/undraw_fingerprint_re_uf3f.svg";
import WordPullUp from "../components/magicui/word-pull-up";
import { FadeText } from "../components/magicui/fade-text";
import BlurIn from "../components/magicui/blur-in";
import PricingSection from "../components/sections/PricingSection";
import FaqSection from "../components/sections/FaqSection";
import { Computer } from "lucide-react";
import { BrainFlowSection } from "../components/BrainFlow";
import it_management from "../Images/IT/undraw_server_cluster_jwwq.svg";
const sections = [
  {
    title: "It Management Software",
    img: it_management,
    icon: Computer,
    description:
      "Our IT Management feature streamlines your organization's IT operations, offering comprehensive tools for asset management, network monitoring, and helpdesk support. Enhance efficiency and ensure seamless IT infrastructure management with our robust, user-friendly solution.",
  },
];
const IT = () => {
  return (
    <div className="flex flex-col gap-5 w-full min-h-screen">
      <div className=" bg-[#6A5ACD] text-white w-full flex flex-col justify-center p-4 md:h-[800px]">
        <div className="flex justify-between lg:flex-row flex-col-reverse items-center md:w-[80%] w-full m-auto">
          <div className="flex flex-col gap-8  md:mt-20 mt-5 mb-20">
            <WordPullUp
              words="IT Management Systems"
              className="text-5xl font-bold text-left max-w-3xl break-words"
            />
            <div className=" max-w-2xl">
              <FadeText
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur aspernatur, nihil amet nobis at voluptatum voluptatibus libero odio, saepe voluptas harum mollitia cum dolorem."
                direction="left"
              />
            </div>
            <div className="flex gap-3 flex-wrap items-center">
              <BlurIn
                word={`Get Started `}
                className=" bg-black py-3 rounded-md flex gap-2 justify-center items-center px-8"
              />
              <BlurIn
                word="Learn More"
                className=" border border-white text-black bg-white flex justify-center gap-4 items-center py-3 rounded-md px-8"
              />
            </div>
          </div>

          <img src={hrbg} alt="" className=" md:w-1/2 w-96" />
        </div>
      </div>
      <div className="flex justify-center flex-col gap-8 items-center md:p-9 p-3">
        <h1 className="text-center text-4xl font-bold md:text-6xl mb-5">
          What Brain Brings To The Table
        </h1>

        <div className="grid lg:grid-cols-3 md:w-[80%] md:grid-cols-2 grid-cols-1 gap-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="p-8 rounded-md border border-black/10 hover:-translate-y-4 hover:border-[#6A5ACD] hover:bg-gray-100 duration-200"
            >
              <section.icon size={50} className="mb-6" />
              <h1 className="text-2xl font-bold">{section.title}</h1>
              <p className="break-words max-w-[80%] mt-2">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <hr className=" bg-black w-full" />

      {sections.map((section, index) => (
        <BrainFlowSection
          key={index}
          index={index}
          title={section.title}
          img={section.img}
          color="#6A5ACD"
          description={section.description}
        />
      ))}

      <hr className=" bg-black w-full" />
      <div className="mt-20">
        <PricingSection />
      </div>
      <FaqSection />
    </div>
  );
};

export default IT;

import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";
import GradualSpacing from "../magicui/gradual-spacing";

const FaqSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const Faq = [
    {
      question: "What is a Saas dashboard, and how can it benefit my business?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga id libero numquam odio harum excepturi veritatis? Ut sit similique blanditiis ex ratione. Mollitia cumque accusantium illum sunt optio corporis architecto.",
    },
    {
      question:
        "Is the Saas dashboard compatible with other software and tools we use in our business?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates, culpa eos odio, animi eum optio asperiores sint deleniti non vitae! Minima quo dignissimos tempora reprehenderit accusamus? Error, repellat iste.",
    },
    {
      question:
        "How do I get started with the Saas dashboard, and is there a learning curve?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla corporis saepe illum repellendus, expedita provident numquam laboriosam culpa reprehenderit magnam, nihil eum fuga ab itaque neque voluptate et nam.",
    },
    {
      question: "What kind of customer support do you offer?",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dicta enim doloremque. Libero quos debitis eum harum sapiente reprehenderit placeat a impedit dolorum, voluptatibus aut nostrum magni neque dignissimos nesciunt!",
    },
    {
      question:
        "Can I customize the Saas dashboard to match our business's unique requirements?",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi labore autem omnis neque in nisi, eum quos unde molestias, corporis assumenda sunt sapiente obcaecati dolorem ab delectus blanditiis laudantium necessitatibus.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mb-24">
      <div className="flex flex-col items-center mt-20">
        <GradualSpacing
          text="Frequently Asked Questions"
          className="hidden md:block font-display text-center text-4xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem]"
        />
        <h1 className=" text-3xl md:hidden md:text-5xl font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="relative w-full md:px-6 md:pt-10 mt-4 pb-8  text-black sm:px-10">
        <div className="mx-auto px-5 text-black">
          <div className="mx-auto  grid md:max-w-4xl">
            <hr className=" w-full bg-black/30 h-[2px] mb-4" />
            {Faq.map((faq, index) => (
              <div className="py-5 text-black" key={index}>
                <div
                  className="group cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <summary
                    className={`flex md:text-2xl text-lg font-bold items-center justify-between ${
                      expandedIndex === index ? "text-blue-500" : "text-black"
                    }`}
                  >
                    <span>{faq.question}</span>
                    <span className="transition transform group-open:rotate-180">
                      {expandedIndex === index ? <Minus /> : <Plus />}
                    </span>
                  </summary>
                  <div
                    className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                      expandedIndex === index ? "max-h-screen" : "max-h-0"
                    }`}
                  >
                    <p className="text-lg mt-6 font-medium">{faq.answer}</p>
                  </div>
                </div>
                <hr className="w-full h-[2px] mt-8 bg-black/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

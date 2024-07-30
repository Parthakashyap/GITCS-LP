import { Check } from "lucide-react";
import BoxReveal from "./magicui/box-reveal";

export const BrainFlowSection = ({
    title,
    img,
    description,
    index,
    color,
  }: {
    title: string;
    img: string;
    description: string;
    index: number;
    color?: string;
  }) => (
    <>
      <section
        className={`flex items-center flex-col md:flex-row md:p-4 gap-20 md:gap-40 w-full justify-center mt-44 ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/3">
          <BoxReveal boxColor={color}>
            <img src={img} alt={title} />
          </BoxReveal>
        </div>
        <div className="flex gap-8 flex-col">
          <BoxReveal boxColor={color}>
            <h1 className="md:text-5xl text-3xl md:pb-1 font-bold text-left">
              {title}
            </h1>
          </BoxReveal>
          <BoxReveal duration={0.5} boxColor={color}>
            <p className="max-w-xl text-lg text-left opacity-60">{description}</p>
          </BoxReveal>
          <ul className="flex flex-col gap-3 items-start">
            {[...Array(5)].map((_, idx) => (
              <BoxReveal key={idx} duration={0.7} boxColor={color}>
                <div className="flex gap-3 items-center break-words flex-wrap">
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <Check size={10} />
                  </div>
                  <li>Employee Database</li>
                </div>
              </BoxReveal>
            ))}
          </ul>
        </div>
      </section>
      <hr className="w-full bg-black h-[1px]" />
    </>
  );
  
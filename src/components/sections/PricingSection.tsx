import { Check } from "lucide-react";
import React, { useState } from "react";

const PricingSection: React.FC = () => {
  const prices = {
    monthly: {
      starter: 29,
      business: 79,
      enterprise: 149,
    },
    yearly: {
      starter: 24,
      business: 65,
      enterprise: 125,
    },
  };
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div className="flex flex-col w-full p-4 md:p-0 md:gap-8 gap-4 items-center text-center justify-center">
      <h1 className=" md:text-3xl text-lg font-bold">Pricing</h1>
      <h1 className=" md:text-6xl  text-4xl font-bold tracking-wide leading-1 md:h-16">
        Simple pricing for everyone.
      </h1>
      <p className="  md:text-lg text-md opacity-60 md:max-w-4xl mt-5 md:mt-0 text-center">
        Choose an <b>affordable plan</b> that's packed with the best features
        for engaging your audience, creating customer loyalty, and driving
        sales.
      </p>
      <div className="flex flex-wrap items-center gap-4 justify-center">
        <div className="flex gap-2">
          <button
            className={`w-12 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
              isToggled ? "bg-black" : "bg-gray-300"
            }`}
            onClick={handleToggle}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                isToggled ? "translate-x-6" : ""
              }`}
            ></div>
          </button>
          <span className="ml-2 text-md font-medium text-gray-700">Annual</span>
        </div>
        <div className="bg-black px-4 py-1 rounded-full text-white">
          2 months free ✨
        </div>
      </div>

      <section className="grid w-full p-4 lg:max-w-[80%] max-w-full gap-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
        <div className=" border border-black/20 rounded-md text-left p-6">
          <div className="flex flex-col gap-4">
            <h1 className=" font-bold text-xl">Basic</h1>
            <p className="text-lg break-words opacity-70">
              A basic plan for startups and individual users
            </p>
            <div className="mt-2">
              <h1 className="text-3xl font-bold flex items-end">
                ${isToggled ? prices.yearly.starter : prices.monthly.starter}{" "}
                <p className="text-lg">/month</p>
              </h1>
            </div>
            <button className="text-white bg-black rounded-lg w-full p-3">
              Subscribe
            </button>
            <hr className="w-full bg-black/30 h-[2px]" />
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
            </ul>
          </div>
        </div>

        <div className=" border border-black shadow-black shadow-md rounded-md text-left p-6">
          <div className="flex flex-col gap-4">
            <h1 className=" font-bold text-xl">Premium</h1>
            <p className="text-lg break-words opacity-70">
              A Premium plan for startups and individual users
            </p>
            <div className="mt-2">
              <h1 className="text-3xl font-bold flex items-end">
                ${isToggled ? prices.yearly.business : prices.monthly.business}{" "}
                <p className="text-lg">/month</p>
              </h1>
            </div>
            <button className="text-white bg-black rounded-lg w-full p-3">
              Subscribe
            </button>
            <hr className="w-full bg-black/30 h-[2px]" />
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
            </ul>
          </div>
        </div>

        <div className=" border border-black/20 rounded-md text-left p-6">
          <div className="flex flex-col gap-4">
            <h1 className=" font-bold text-xl">Enterprise</h1>
            <p className="text-lg break-words opacity-70">
              A Enterprise plan for startups and individual users
            </p>
            <div className="mt-2">
              <h1 className="text-3xl font-bold flex items-end">
                ${isToggled ? prices.yearly.enterprise : prices.monthly.enterprise}{" "}
                <p className="text-lg">/month</p>
              </h1>
            </div>
            <button className="text-white bg-black rounded-lg w-full p-3">
              Subscribe
            </button>
            <hr className="w-full bg-black/30 h-[2px]" />
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
            </ul>
          </div>
        </div>

        <div className=" border border-black/20 rounded-md text-left p-6">
          <div className="flex flex-col gap-4">
            <h1 className=" font-bold text-xl">Ultimate</h1>
            <p className="text-lg break-words opacity-70">
              A Ultimate plan for startups and individual users
            </p>
            <div className="mt-2">
              <h1 className="text-3xl font-bold flex items-end">
                ${isToggled ? prices.yearly.business : prices.monthly.business}{" "}
                <p className="text-lg">/month</p>
              </h1>
            </div>
            <button className="text-white bg-black rounded-lg w-full p-3">
              Subscribe
            </button>
            <hr className="w-full bg-black/30 h-[2px]" />
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
              <li className="flex gap-2 items-center">
                <div className="bg-green-600 rounded-full">
                  <Check size={20} />
                </div>
                <p>Al-powered analytics</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;

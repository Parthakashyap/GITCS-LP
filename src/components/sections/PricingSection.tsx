import { Check } from "lucide-react";
import React, { useState } from "react";

const PricingSection: React.FC = () => {
  const prices = {
    monthly: {
      starter: 29,
      business: 79,
      enterprise: 149,
      ultimate: 199, // Added ultimate plan for consistency
    },
    yearly: {
      starter: 24,
      business: 65,
      enterprise: 125,
      ultimate: 165, // Added ultimate plan for consistency
    },
  };

  const plans = [
    {
      name: "Basic",
      description: "A basic plan for startups and individual users",
      priceKey: "starter",
    },
    {
      name: "Premium ✨",
      description: "A Premium plan for startups and individual users",
      priceKey: "business",
      highlight: true,
    },
    {
      name: "Enterprise",
      description: "An Enterprise plan for startups and individual users",
      priceKey: "enterprise",
    },
    {
      name: "Ultimate",
      description: "An Ultimate plan for startups and individual users",
      priceKey: "ultimate",
    },
  ];

  const features = [
    "AI-powered analytics",
    "Custom dashboards",
    "24/7 support",
    "Unlimited projects",
  ];

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex flex-col w-full p-4 md:p-0 md:gap-8 gap-4 items-center text-center justify-center">
      <h1 className="md:text-3xl text-lg font-bold">Pricing</h1>
      <h1 className="md:text-6xl text-4xl font-bold tracking-wide leading-1 md:h-16">
        Simple pricing for everyone.
      </h1>
      <p className="md:text-lg text-md opacity-60 md:max-w-4xl mt-5 md:mt-0 text-center">
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
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-md text-left cursor-pointer p-6 duration-200 hover:-translate-y-6 hover:shadow-md hover:shadow-black/10 ${
              plan.highlight ? "border-black/80" : "border-black/20"
            }`}
          >
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl">{plan.name}</h1>
              <p className="text-lg break-words opacity-70">
                {plan.description}
              </p>
              <div className="mt-2">
                <h1 className="text-3xl font-bold flex items-end">
                  ₹
                  {isToggled // @ts-ignore
                    ? prices.yearly[plan.priceKey] // @ts-ignore
                    : prices.monthly[plan.priceKey]}{" "}
                  <p className="text-lg">/month</p>
                </h1>
              </div>
              <button className="text-white duration-200 hover:bg-transparent hover:text-black hover:border hover:border-black bg-black rounded-lg w-full p-3">
                Subscribe
              </button>
              <hr className="w-full bg-black/30 h-[2px]" />
              <ul className="flex flex-col gap-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <div className="bg-green-600 rounded-full">
                      <Check size={20} />
                    </div>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PricingSection;

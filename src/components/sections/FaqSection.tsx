import React from "react";

const FaqSection: React.FC = () => {
  return (
    <div className="mb-24">
      <div className="flex flex-col items-center mt-20">
        <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mt-4 inline-block text-sm font-medium">
          Frequently asked questions
        </div>
        <h2 className="mt-4 text-center text-3xl font-bold tracking-tight md:text-5xl">
          FAQs
        </h2>
      </div>
      <div className="relative w-full bg-[#212227] px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
        <div className="mx-auto px-5">
          <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span className="text-white">
                    {" "}
                    What is a Saas dashboard, and how can it benefit my
                    business?
                  </span>
                  <span className="transition group-open:rotate-180 text-white">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-200">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga id libero numquam odio harum excepturi veritatis? Ut sit similique blanditiis ex ratione. Mollitia cumque accusantium illum sunt optio corporis architecto.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span className="text-white">
                    {" "}
                    Is the Saas dashboard compatible with other software and
                    tools we use in our business?
                  </span>
                  <span className="transition group-open:rotate-180 text-white">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-200 text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates, culpa eos odio, animi eum optio asperiores sint deleniti non vitae! Minima quo dignissimos tempora reprehenderit accusamus? Error, repellat iste.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span className="text-white">
                    {" "}
                    How do I get started with the Saas dashboard, and is there a
                    learning curve?
                  </span>
                  <span className="transition group-open:rotate-180 text-white">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-200">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla corporis saepe illum repellendus, expedita provident numquam laboriosam culpa reprehenderit magnam, nihil eum fuga ab itaque neque voluptate et nam.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span className="text-white">
                    {" "}
                    What kind of customer support do you offer?
                  </span>
                  <span className="transition group-open:rotate-180 text-white">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-200">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dicta enim doloremque. Libero quos debitis eum harum sapiente reprehenderit placeat a impedit dolorum, voluptatibus aut nostrum magni neque dignissimos nesciunt!
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span className="text-white">
                    {" "}
                    Can I customize the Saas dashboard to match our business's
                    unique requirements?
                  </span>
                  <span className="transition group-open:rotate-180 text-white">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-200">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi labore autem omnis neque in nisi, eum quos unde molestias, corporis assumenda sunt sapiente obcaecati dolorem ab delectus blanditiis laudantium necessitatibus.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

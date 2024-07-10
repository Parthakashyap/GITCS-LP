import React, { useState } from 'react';

const PricingSection: React.FC = () => {
  const [billingType, setBillingType] = useState<'monthly' | 'yearly'>('monthly');

  const handleBillingChange = (type: 'monthly' | 'yearly') => {
    setBillingType(type);
  };

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

  return (
    <div>
      <div className="text-center mb-4">
        <div className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mb-4 inline-block text-sm font-medium">
          Plans & Features
        </div>
        <h2 className="text-5xl font-bold">Pricing</h2>
      </div>
      <div className="sm:flex sm:flex-col sm:align-center p-10">
        <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
          <button
            type="button"
            className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
              billingType === 'monthly' ? 'bg-slate-50 border-slate-50 text-slate-900 shadow-sm' : 'border border-transparent text-slate-900'
            }`}
            onClick={() => handleBillingChange('monthly')}
          >
            Monthly billing
          </button>
          <button
            type="button"
            className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
              billingType === 'yearly' ? 'bg-slate-50 border-slate-50 text-slate-900 shadow-sm' : 'border border-transparent text-slate-900'
            }`}
            onClick={() => handleBillingChange('yearly')}
          >
            Yearly billing
          </button>
        </div>
        <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
          <div className="border border-slate-200 bg-white rounded-2xl shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-4xl leading-6 font-bold text-slate-900 flex justify-center mb-4">Starter</h2>
              <p className="mt-2 text-base text-slate-700 leading-tight text-center mb-[3.2rem]">
                Small businesses and startups looking to gain data insights
              </p>
              <p className="mt-8">
                <span className=" text-4xl font-bold text-slate-900 tracking-tighter">${prices[billingType].starter}</span>
                <span className="text-base font-medium text-slate-500">/mo</span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-full bg-pink-500 rounded-xl py-2 text-sm font-semibold text-white text-center"
              >
                Learn more
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">Data Visualization</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">Real-Time Analytics</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">Customization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-slate-200 bg-white rounded-2xl shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-4xl leading-6 font-bold text-slate-900 flex justify-center mb-4">Business</h2>
              <p className="mt-2 text-base text-slate-700 leading-tight text-center">
                Growing businesses that need comprehensive data management and teamwork features
              </p>
              <p className="mt-8">
                <span className=" text-4xl font-bold text-slate-900 tracking-tighter">${prices[billingType].business}</span>
                <span className="text-base font-medium text-slate-500">/mo</span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-full bg-purple-500 rounded-xl py-2 text-sm font-semibold text-white text-center"
              >
                Learn more
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">All Basic Plan Features</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">Integrations</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">Advanced Reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-slate-200 bg-white rounded-2xl shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-4xl leading-6 font-bold text-slate-900 flex justify-center mb-4">Enterprise</h2>
              <p className="mt-2 text-base text-slate-700 leading-tight text-center">
                Larger enterprises requiring advanced data solutions and personalized support.
              </p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-slate-900 tracking-tighter">${prices[billingType].enterprise}</span>
                <span className="text-base font-medium text-slate-500">/mo</span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-full bg-blue-500 rounded-xl py-2 text-sm font-semibold text-white text-center"
              >
                Learn more
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">What's included</h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">All Pro Plan Features</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">Full Access to API</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">Dedicated Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

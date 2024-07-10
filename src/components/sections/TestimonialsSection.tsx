import React from 'react';

const testimonials = [
  {
    quote: "Our business was in chaos before we started using this SaaS dashboard. We were drowning in data and couldn’t make sense of it. Thanks to this amazing tool, we now have clarity, and our decision-making has become precise and data-driven.",
    name: "Sarah Johnson",
    title: "Marketing Manager",
    image: "/images/sarah-johnson.jpg"
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim, iste vitae ea et aperiam, reprehenderit sunt cumque numquam sed ipsam sapiente rerum quos atque expedita doloremque, inventore deserunt nihill.",
    name: "Sarah Johnson2",
    title: "Marketing Manager2",
    image: "/images/sarah-johnson.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
            <div className="w-full lg:w-2/5">
                <p className="bg-gray-200 text-gray-800 rounded-full px-4 py-2 mb-4 inline-block text-sm font-medium">Testimonial</p>
                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-4">
                    What <span className='text-pink-500'>customer</span><br/>says about us
                </h2>
                <p className='mb-8'>Saas dashboard that enable users to perform various tasks and activities related to their business</p>
                
                <div className="flex items-center justify-center lg:justify-start gap-10">
                    <button id="slider-button-left"
                        className="swiper-button-prev group flex justify-center items-center border border-solid border-pink-500 w-12 h-12 transition-all duration-500 rounded-full hover:bg-pink-500"
                        data-carousel-prev>
                        <svg className="h-6 w-6 text-pink-500 group-hover:text-white" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <button id="slider-button-right"
                        className="swiper-button-next group flex justify-center items-center border border-solid border-pink-500 w-12 h-12 transition-all duration-500 rounded-full hover:bg-pink-500"
                        data-carousel-next>
                        <svg className="h-6 w-6 text-pink-500 group-hover:text-white" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full lg:w-3/5">
                
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">

                        <div
                            className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                            <div className="flex items-center gap-5 mb-5 sm:mb-9">
                                
                                <div className="grid gap-1">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500">Jane D</h5>
                                    <span className="text-sm leading-6 text-gray-500">CEO </span>
                                </div>
                            </div>
                            <div
                                className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
                                <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                        fill="currentColor"></path>
                                </svg>
                                <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                        fill="currentColor"></path>
                                </svg>
                                <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                            <p className="text-gray-500 transition-all duration-500">If you're looking for a reputable
                                contractor for your home renovation project, look no further than these guys. They are
                                trustworthy, reliable, and always deliver on their promises.</p>
                        </div>

                        <div
                            className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
                            <div className="flex items-center gap-5 mb-5 sm:mb-9">
                                
                                <div className="grid gap-1">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500">Jane D</h5>
                                    <span className="text-sm leading-6 text-gray-500">CEO </span>
                                </div>
                            </div>
                            <div
                                className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
                                <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                        fill="currentColor"></path>
                                </svg>
                                <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                        fill="currentColor"></path>
                                </svg>
                                <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                            <p className="text-gray-500 transition-all duration-500">If you're looking for a reputable
                                contractor for your home renovation project, look no further than these guys. They are
                                trustworthy, reliable, and always deliver on their promises.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default TestimonialsSection;

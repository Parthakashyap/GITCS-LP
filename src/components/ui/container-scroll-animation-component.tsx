"use client";

import AnimatedShinyText from "../animated-introduction";
import AvatarCircles from "../magicui/avatar";
import { ContainerScroll } from "./container-scroll-animation";
import homesvg from "../../svg/Vector_6.svg"
import bodyBg from "../../Images/SaaS-Dashboard.png"
export function HeroScrollDemo() {
  const avatarUrls = [
    "https://picsum.photos/id/10/300/300",
    "https://picsum.photos/id/11/300/300",
    "https://picsum.photos/id/12/300/300",
    "https://picsum.photos/id/13/300/300",
    "https://picsum.photos/id/14/300/300",
  ];
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <div className="flex items-center flex-col gap-4 justify-center">
              <div className="bg-black/10 p-1 mb-11 border-2 border-purple-500/40 rounded-full">
                <AnimatedShinyText children="🎉 7 Day Free Trial - No Credit card required 	&rarr;" />
              </div>
            </div>
            <h1 className="text-8xl font-bold text-center tracking-tight">
              Unlock the
              <br /> <span className="text-blue-500">Power</span> of Data
            </h1>
            <img
              src={homesvg}
              alt="Vector 6"
              className="absolute w-40 scale-125 ml-[120rem] sm:ml-[24rem] md:ml-[29rem] lg:ml-[40rem]"
            />
            <p className="text-center text-lg mt-8">
              Turn Data into Actionable Insights <br />
              with Our SaaS Dashboard
            </p>
            <div className="flex justify-center items-center">
              <AvatarCircles avatarUrls={avatarUrls} />
            </div>
            <button className="mt-8 mb-24 bg-black text-white py-4 px-6 rounded-full">
              Get Started &rarr;
            </button>
          </>
        }
      >
        <img
          src={bodyBg}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

export const users = [
  {
    name: "Manu Arora",
    designation: "Founder, Algochurn",
    image: "https://picsum.photos/id/10/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Singh",
    designation: "Founder, Sarah's Kitchen",
    image: "https://picsum.photos/id/11/300/300",
    badge: "Mentor",
  },
  {
    name: "John Doe",
    designation: "Software Engineer, Tech Corp",
    image: "https://picsum.photos/id/12/300/300",
    badge: "Mentor",
  },
  {
    name: "Jane Smith",
    designation: "Product Manager, Innovate Inc",
    image: "https://picsum.photos/id/13/300/300",
    badge: "Mentor",
  },
  {
    name: "Robert Johnson",
    designation: "Data Scientist, DataWorks",
    image: "https://picsum.photos/id/14/300/300",
    badge: "Mentor",
  },
  {
    name: "Emily Davis",
    designation: "UX Designer, DesignHub",
    image: "https://picsum.photos/id/15/300/300",
    badge: "Mentor",
  },
  {
    name: "Michael Miller",
    designation: "CTO, FutureTech",
    image: "https://picsum.photos/id/16/300/300",
    badge: "Mentor",
  },
  {
    name: "Sarah Brown",
    designation: "CEO, StartUp",
    image: "https://picsum.photos/id/17/300/300",
  },
  {
    name: "James Wilson",
    designation: "DevOps Engineer, CloudNet",
    image: "https://picsum.photos/id/18/300/300",
    badge: "Something",
  },
  {
    name: "Patricia Moore",
    designation: "Marketing Manager, MarketGrowth",
    image: "https://picsum.photos/id/19/300/300",
    badge: "Mentor",
  },
  {
    name: "Richard Taylor",
    designation: "Frontend Developer, WebSolutions",
    image: "https://picsum.photos/id/20/300/300",
  },
  {
    name: "Linda Anderson",
    designation: "Backend Developer, ServerSecure",
    image: "https://picsum.photos/id/21/300/300",
  },
  {
    name: "William Thomas",
    designation: "Full Stack Developer, FullStack",
    image: "https://picsum.photos/id/22/300/300",
    badge: "Badger",
  },
  {
    name: "Elizabeth Jackson",
    designation: "Project Manager, ProManage",
    image: "https://picsum.photos/id/23/300/300",
    badge: "Mentor",
  },
  {
    name: "David White",
    designation: "Database Administrator, DataSafe",
    image: "https://picsum.photos/id/24/300/300",
    badge: "Advocate",
  },
  {
    name: "Jennifer Harris",
    designation: "Network Engineer, NetConnect",
    image: "https://picsum.photos/id/25/300/300",
  },
  {
    name: "Charles Clark",
    designation: "Security Analyst, SecureIT",
    image: "https://picsum.photos/id/26/300/300",
  },
  {
    name: "Susan Lewis",
    designation: "Systems Analyst, SysAnalyse",
    image: "https://picsum.photos/id/27/300/300",
  },
  {
    name: "Joseph Young",
    designation: "Mobile Developer, AppDev",
    image: "https://picsum.photos/id/28/300/300",
    badge: "Mentor",
  },
  {
    name: "Margaret Hall",
    designation: "Quality Assurance, BugFree",
    image: "https://picsum.photos/id/29/300/300",
    badge: "Developer",
  },
];

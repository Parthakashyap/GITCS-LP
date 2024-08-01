"use client";

import * as React from "react";
import { useState } from "react";

import { cn } from "../libs/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import {
  Calendar,
  ShoppingBag,
  FileText,
  Users,
  Briefcase,
  Building2,
  Workflow,
  Plus,
  InspectionPanel,
  LockOpen,
  PartyPopper,
  AlarmClock,
  UserCheck,
  DoorClosed,
  Handshake,
  TestTube,
  DoorOpen,
  LockIcon,
  Fuel,
  Building,
  Computer,
  PiggyBank,
  LucideAward,
  Coins,
  Banknote,
  Pipette,
  ShoppingBasket,
  Store,
  MessageCircleWarning,
  HandMetal,
  ListCheck,
  Construction,
  Folder,
  TabletSmartphone,
  Bolt,
  Scale,
  Compass,
  Percent,
  ListTodo,
  Lightbulb,
  ThermometerSnowflake,
  Notebook,
  CalendarHeart,
  HelpingHand,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";

interface Category {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

interface Categories {
  [key: string]: Category[];
}

// const company = [
//   {
//     title: "About",
//     href: "/about",
//   },
//   {
//     title: "Brain Stories",
//     href: "/stories",
//   },
//   {
//     title: "Careers",
//     href: "/careers",
//   },
// ];
export const company = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Brain Stories",
    href: "/stories",
  },
  {
    title: "Careers",
    href: "/careers",
  },
];

export const categories: Categories = {
  MDO: [
    {
      title: "Organisation Structure Maker",
      href: "/mdo",
      description: "Comprehensive CRM platform for customer-facing teams.",
      icon: <Building2 />,
    },
    {
      title: "Flow Chart Maker",
      href: "/mdo",
      description: "Simple CRM for small businesses moving from spreadsheets.",
      icon: <Workflow />,
    },
    {
      title: "Designation Profile",
      href: "/mdo",
      description: "Build online forms for every business need.",
      icon: <UserCheck />,
    },
    {
      title: "Task Delegation",
      href: "/mdo",
      description: "Live chat app to engage and convert website visitors.",
      icon: <AlarmClock />,
    },
    {
      title: "Events",
      href: "/mdo",
      description:
        "Appointment scheduling app for consultations with customers.",
      icon: <PartyPopper />,
    },
    {
      title: "Vault",
      href: "/mdo",
      description: "Digital signature app for businesses.",
      icon: <LockOpen />,
    },
    {
      title: "Group Chat",
      href: "/mdo",
      description:
        "Comprehensive sales map visualization and optimal route planning solution.",
      icon: <Users />,
    },
    {
      title: "Master List",
      href: "/mdo",
      description: "Complete loyalty and affiliate management platform. NEW",
      icon: <InspectionPanel />,
    },
    {
      title: "CRM Plus",
      href: "/mdo",
      description:
        "Unified platform to deliver top-notch customer experience. SUITE",
      icon: <Plus />,
    },
  ],
  HR: [
    {
      title: "Hiring Brainflow",
      href: "/hr",
      description: "All-in-one social media management software.",
      icon: <DoorOpen />,
    },
    {
      title: "Recruitment Brainflow",
      href: "/hr",
      description:
        "Create, send, and track targeted email campaigns that drive sales.",
      icon: <LockOpen />,
    },
    {
      title: "Onboarding Brainflow",
      href: "/hr",
      description: "Build online forms for every business need.",
      icon: <Plus />,
    },
    {
      title: "Training & Evaluation Brainflow ",
      href: "/hr",
      description: "Design surveys to reach and interact with your audience.",
      icon: <TestTube />,
    },
    {
      title: "Joining & Handover Brainflow",
      href: "/hr",
      description:
        "Online website builder with extensive customisation options.",
      icon: <Handshake />,
    },
    {
      title: "Seperation Brainflow",
      href: "/hr",
      description:
        "Website conversion optimization and personalisation platform.",
      icon: <DoorClosed />,
    },
  ],
  ADMIN: [
    {
      title: "Task Management ",
      href: "/admin",
      description: "eCommerce platform to manage and market your online store.",
      icon: <Briefcase />,
    },
    {
      title: "Front Office ",
      href: "/admin",
      description: "eCommerce platform to manage and market your online store.",
      icon: <Building />,
    },
    {
      title: "Fuel Mgmt System  ",
      href: "/admin",
      description: "eCommerce platform to manage and market your online store.",
      icon: <Fuel />,
    },
    {
      title: "Event Mgmt System  ",
      href: "/admin",
      description: "eCommerce platform to manage and market your online store.",
      icon: <Plus />,
    },
    {
      title: "Greetings Mgmt System  ",
      href: "/admin",
      description: "eCommerce platform to manage and market your online store.",
      icon: <Calendar />,
    },
    {
      title: "Asset Mgmt System  ",
      href: "/admin",
      description: "eCommerce platform to manage and market your online store.",
      icon: <LockIcon />,
    },
  ],
  IT: [
    {
      title: "IT Mgmt System",
      href: "/it",
      description: "Helpdesk software to deliver great customer support.",
      icon: <Computer />,
    },
  ],
  MARKETING: [
    {
      title: "Lead to Order ",
      href: "/marketing",
      description: "Manage your finances and accounts.",
      icon: <ShoppingBag />,
    },
    {
      title: "FMS - Fund Demand",
      href: "/marketing",
      description: "Manage and automate your billing processes.",
      icon: <Banknote />,
    },
    {
      title: "Cash Collection Engine ",
      href: "/marketing",
      description: "Track and manage your business expenses.",
      icon: <Coins />,
    },
    {
      title: "Legal Matter System ",
      href: "/marketing",
      description: "Plan and forecast your financial strategy.",
      icon: <LucideAward />,
    },
    {
      title: "Bank Guarantee System",
      href: "/marketing",
      description: "Manage employee payroll efficiently.",
      icon: <PiggyBank />,
    },
  ],
  PROCUREMENT: [
    {
      title: "Procurement System ",
      href: "/procurment",
      description: "Send marketing emails to your customers.",
      icon: <ShoppingBag />,
    },
    {
      title: "Procurement Funnel  ",
      href: "/procurment",
      description: "Send marketing emails to your customers.",
      icon: <Pipette />,
    },
    {
      title: "Vendor Funnel",
      href: "/procurment",
      description: "Send marketing emails to your customers.",
      icon: <ShoppingBasket />,
    },
  ],
  STORES: [
    {
      title: "Warehouse Mgmt System",
      href: "/stores",
      description: "Manage your employees and their information.",
      icon: <Store />,
    },
    {
      title: "Challan Issue System",
      href: "/stores",
      description: "Manage your employees and their information.",
      icon: <MessageCircleWarning />,
    },
    {
      title: "Material Mgm System",
      href: "/stores",
      description: "Manage your employees and their information.",
      icon: <HandMetal />,
    },
    {
      title: "Inventory Mgmt System",
      href: "/stores",
      description: "Manage your employees and their information.",
      icon: <FileText />,
    },
  ],
  PROJECTS: [
    {
      title: "Attendance System",
      href: "/projects",
      description: "Ensure your business complies with laws.",
      icon: <ListCheck />,
    },
    {
      title: "Contractor Management System",
      href: "/projects",
      description: "Ensure your business complies with laws.",
      icon: <Construction />,
    },
    {
      title: "BOM Mgmt System",
      href: "/projects",
      description: "Ensure your business complies with laws.",
      icon: <Folder />,
    },
    {
      title: "Project Mgmt System ",
      href: "/projects",
      description: "Ensure your business complies with laws.",
      icon: <TabletSmartphone />,
    },
    {
      title: "TPI System ",
      href: "/projects",
      description: "Ensure your business complies with laws.",
      icon: <Bolt />,
    },
  ],
  FINANCE: [
    {
      title: "CFR",
      href: "/finance",
      description: "Protect your business from cyber threats.",
      icon: <Scale />,
    },
    {
      title: "Statutory Complainces",
      href: "/finance",
      description: "Protect your business from cyber threats.",
      icon: <Compass />,
    },
    {
      title: "Budgeting ",
      href: "/finance",
      description: "Protect your business from cyber threats.",
      icon: <Percent />,
    },
    {
      title: "Payment Mgmt System (Recurring Payments)  ",
      href: "/finance",
      description: "Protect your business from cyber threats.",
      icon: <Banknote />,
    },
  ],
  ACCOUNTS: [
    {
      title: "Expense Mgmt System ",
      href: "/accounts",
      description: "Analyze your business data.",
      icon: <Banknote />,
    },
    {
      title: "Financial Summary System",
      href: "/accounts",
      description: "Analyze your business data.",
      icon: <Plus />,
    },
  ],
  "PROJECT MANAGEMENT": [
    {
      title: "Task Management",
      href: "/project-management",
      description: "Manage your projects and tasks.",
      icon: <ListTodo />,
    },
  ],
  GIGS: [
    {
      title: "Help Ticket System ",
      href: "/gigs",
      description: "Access API documentation for development.",
      icon: <HelpingHand />,
    },
    {
      title: "Annual Legal Compliance Calendar",
      href: "/gigs",
      description: "Access API documentation for development.",
      icon: <CalendarHeart />,
    },
    {
      title: "Score Card (MIS)",
      href: "/gigs",
      description: "Access API documentation for development.",
      icon: <Notebook />,
    },
    {
      title: "To Do List ",
      href: "/gigs",
      description: "Access API documentation for development.",
      icon: <ListTodo />,
    },
    {
      title: "One Time Task",
      href: "/gigs",
      description: "Access API documentation for development.",
      icon: <ThermometerSnowflake />,
    },
    {
      title: "Calender",
      href: "/gigs",
      description: "Access API documentation for development.",
      icon: <Calendar />,
    },
    {
      title: "Learning Center ",
      href: "/gigs",
      description: "Access API documentation for development.",
      icon: <Lightbulb />,
    },
  ],
  LOGISTICS: [
    {
      title: "FMS – Logistics",
      href: "/logistics",
      description: "Manage your logistics and transportation.",
      icon: <Workflow />,
    },
  ],
  AUDIT: [
    {
      title: "RT – Audit",
      href: "/audit",
      description: "Manage your audits and compliance.",
      icon: <BarChart />,
    },
  ],
};

export function NavigationMenuDemo() {
  const [activeCategory, setActiveCategory] = useState("MDO");

  return (
    <NavigationMenu className="">
      <NavigationMenuList className="px-12 flex gap-16 flex-row items-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" w-18">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex p-5">
              <ul className=" w-1/4">
                {Object.keys(categories).map((category) => (
                  <li key={category}>
                    <a
                      href={categories[category][0].href}
                      onMouseEnter={() => setActiveCategory(category)}
                      className="block hover:bg-black/10 hover:rounded-md w-full p-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="w-[86%]">
                <ul className="grid gap-3 p-4 md:w-[1300px] lg:w-[1400px] lg:grid-cols-[1fr.90fr_3fr]">
                  {categories[activeCategory]?.map((component) => (
                    <div
                      className="flex items-center gap-3"
                      key={component.title}
                    >
                      {component.icon}
                      <ListItem
                        title={component.title}
                        href={component.href}
                      ></ListItem>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className=" font-medium text-sm">
          <Link to="/about-us">About</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" font-medium text-sm">
          <Link to="/brain-stories">Brain Stories</Link>
        </NavigationMenuItem>
        <NavigationMenuItem className=" font-medium text-sm">
          <Link to="/careers">Careers</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

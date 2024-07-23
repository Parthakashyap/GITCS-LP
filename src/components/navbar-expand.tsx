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
import { Cookie } from "lucide-react";

interface Category {
  title: string;
  href: string;
  description: string;
}

interface Categories {
  [key: string]: Category[];
}

const company = [
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
const categories: Categories = {
  MDO: [
    {
      title: "Organisation Structure Maker ",
      href: "/sales/crm",
      description: "Comprehensive CRM platform for customer-facing teams.",
    },
    {
      title: "Flow Chart Maker ",
      href: "/sales/bigin",
      description: "Simple CRM for small businesses moving from spreadsheets.",
    },
    {
      title: "Designation Profile ",
      href: "/sales/forms",
      description: "Build online forms for every business need.",
    },
    {
      title: "Task Delegation ",
      href: "/sales/salesiq",
      description: "Live chat app to engage and convert website visitors.",
    },
    {
      title: "Events ",
      href: "/sales/bookings",
      description:
        "Appointment scheduling app for consultations with customers.",
    },
    {
      title: "Vault",
      href: "/sales/sign",
      description: "Digital signature app for businesses.",
    },
    {
      title: "Group Chat",
      href: "/sales/routeiq",
      description:
        "Comprehensive sales map visualization and optimal route planning solution.",
    },
    {
      title: "Master List ",
      href: "/sales/thrive",
      description: "Complete loyalty and affiliate management platform. NEW",
    },
    {
      title: "CRM Plus",
      href: "/sales/crm-plus",
      description:
        "Unified platform to deliver top-notch customer experience. SUITE",
    },
  ],
  HR: [
    {
      title: "Hiring Brainflow",
      href: "/marketing/social",
      description: "All-in-one social media management software.",
    },
    {
      title: "Recruitment Brainflow",
      href: "/marketing/campaigns",
      description:
        "Create, send, and track targeted email campaigns that drive sales.",
    },
    {
      title: "Onboarding Brainflow",
      href: "/marketing/forms",
      description: "Build online forms for every business need.",
    },
    {
      title: "Training & Evaluation Brainflow ",
      href: "/marketing/survey",
      description: "Design surveys to reach and interact with your audience.",
    },
    {
      title: "Joining & Handover Brainflow",
      href: "/marketing/sites",
      description:
        "Online website builder with extensive customisation options.",
    },
    {
      title: "Seperation Brainflow",
      href: "/marketing/pagesense",
      description:
        "Website conversion optimization and personalisation platform.",
    },
  ],
  ADMIN: [
    {
      title: "Task Management ",
      href: "/commerce/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
    {
      title: "Front Office ",
      href: "/commerce/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
    {
      title: "Fuel Mgmt System  ",
      href: "/commerce/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
    {
      title: "Event Mgmt System  ",
      href: "/commerce/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
    {
      title: "Greetings Mgmt System  ",
      href: "/commerce/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
    {
      title: "Asset Mgmt System  ",
      href: "/commerce/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
  ],
  IT: [
    {
      title: "IT Mgmt System",
      href: "/service/desk",
      description: "Helpdesk software to deliver great customer support.",
    },
  ],
  MARKETING: [
    {
      title: "Lead to Order ",
      href: "/finance/accounting",
      description: "Manage your finances and accounts.",
    },
    {
      title: "FMS - Fund Demand",
      href: "/finance/billing",
      description: "Manage and automate your billing processes.",
    },
    {
      title: "Cash Collection Engine ",
      href: "/finance/expense",
      description: "Track and manage your business expenses.",
    },
    {
      title: "Legal Matter System ",
      href: "/finance/planning",
      description: "Plan and forecast your financial strategy.",
    },
    {
      title: "Bank Guarantee System",
      href: "/finance/payroll",
      description: "Manage employee payroll efficiently.",
    },
  ],
  PROCUREMENT: [
    {
      title: "Procurement System ",
      href: "/email/marketing",
      description: "Send marketing emails to your customers.",
    },
    {
      title: "Procurement Funnel  ",
      href: "/email/marketing",
      description: "Send marketing emails to your customers.",
    },
    {
      title: "Vendor Funnel",
      href: "/email/marketing",
      description: "Send marketing emails to your customers.",
    },
  ],
  STORES: [
    {
      title: "Warehouse Mgmt System",
      href: "/hr/management",
      description: "Manage your employees and their information.",
    },
    {
      title: "Challan Issue System",
      href: "/hr/management",
      description: "Manage your employees and their information.",
    },
    {
      title: "Material Mgm System",
      href: "/hr/management",
      description: "Manage your employees and their information.",
    },
    {
      title: "Inventory Mgmt System",
      href: "/hr/management",
      description: "Manage your employees and their information.",
    },
  ],
  PROJECTS: [
    {
      title: "Attendance System",
      href: "/legal/compliance",
      description: "Ensure your business complies with laws.",
    },
    {
      title: "Contractor Management System",
      href: "/legal/compliance",
      description: "Ensure your business complies with laws.",
    },
    {
      title: "BOM Mgmt System",
      href: "/legal/compliance",
      description: "Ensure your business complies with laws.",
    },
    {
      title: "Project Mgmt System ",
      href: "/legal/compliance",
      description: "Ensure your business complies with laws.",
    },
    {
      title: "TPI System ",
      href: "/legal/compliance",
      description: "Ensure your business complies with laws.",
    },
  ],
  FINANCE: [
    {
      title: "CFR",
      href: "/security/cybersecurity",
      description: "Protect your business from cyber threats.",
    },
    {
      title: "Statutory Complainces",
      href: "/security/cybersecurity",
      description: "Protect your business from cyber threats.",
    },
    {
      title: "Budgeting ",
      href: "/security/cybersecurity",
      description: "Protect your business from cyber threats.",
    },
    {
      title: "Payment Mgmt System (Recurring Payments)  ",
      href: "/security/cybersecurity",
      description: "Protect your business from cyber threats.",
    },
  ],
  ACCOUNTS: [
    {
      title: "Expense Mgmt System ",
      href: "/bi/analytics",
      description: "Analyze your business data.",
    },
    {
      title: "Financial Summary System",
      href: "/bi/analytics",
      description: "Analyze your business data.",
    },
  ],
  "PROJECT MANAGEMENT": [
    {
      title: "Task Management",
      href: "/project/task",
      description: "Manage your projects and tasks.",
    },
  ],
  GIGS: [
    {
      title: "Help Ticket System ",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
    {
      title: "Annual Legal Compliance Calendar",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
    {
      title: "Score Card (MIS)",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
    {
      title: "To Do List ",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
    {
      title: "One Time Task",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
    {
      title: "Calender",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
    {
      title: "Learning Center ",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
  ],
  LOGISTICS: [
    {
      title: "FMS – Logistics",
      href: "/logistics/fms",
      description: "Manage your logistics and transportation.",
    },
  ],
  AUDIT: [
    {
      title: "RT – Audit",
      href: "/audit/audit",
      description: "Manage your audits and compliance.",
    },
  ],
};

export function NavigationMenuDemo() {
  const [activeCategory, setActiveCategory] = useState("MDO");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex p-5">
              <ul className="w-1/4">
                {Object.keys(categories).map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className="block w-full p-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="w-[85%]">
                <ul className="grid gap-3 p-4 md:w-[1300px] lg:w-[1400px] lg:grid-cols-[1fr.90fr_3fr]">
                  {categories[activeCategory]?.map((component) => (
                    <div className="flex items-center gap-3">
                      <Cookie />
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {company.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                ></ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink>Documentation</NavigationMenuLink>
          </a>
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

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


const categories = {
  Sales: [
    {
      title: "CRM",
      href: "/sales/crm",
      description: "Comprehensive CRM platform for customer-facing teams.",
    },
    {
      title: "Bigin",
      href: "/sales/bigin",
      description: "Simple CRM for small businesses moving from spreadsheets.",
    },
    {
      title: "Forms",
      href: "/sales/forms",
      description: "Build online forms for every business need.",
    },
    {
      title: "SalesIQ",
      href: "/sales/salesiq",
      description: "Live chat app to engage and convert website visitors.",
    },
    {
      title: "Bookings",
      href: "/sales/bookings",
      description: "Appointment scheduling app for consultations with customers.",
    },
    {
      title: "Sign",
      href: "/sales/sign",
      description: "Digital signature app for businesses.",
    },
    {
      title: "RouteIQ",
      href: "/sales/routeiq",
      description: "Comprehensive sales map visualization and optimal route planning solution.",
    },
    {
      title: "Thrive",
      href: "/sales/thrive",
      description: "Complete loyalty and affiliate management platform. NEW",
    },
    {
      title: "CRM Plus",
      href: "/sales/crm-plus",
      description: "Unified platform to deliver top-notch customer experience. SUITE",
    },
  ],
  Marketing: [
    {
      title: "Social",
      href: "/marketing/social",
      description: "All-in-one social media management software.",
    },
    {
      title: "Campaigns",
      href: "/marketing/campaigns",
      description: "Create, send, and track targeted email campaigns that drive sales.",
    },
    {
      title: "Forms",
      href: "/marketing/forms",
      description: "Build online forms for every business need.",
    },
    {
      title: "Survey",
      href: "/marketing/survey",
      description: "Design surveys to reach and interact with your audience.",
    },
    {
      title: "Sites",
      href: "/marketing/sites",
      description: "Online website builder with extensive customisation options.",
    },
    {
      title: "PageSense",
      href: "/marketing/pagesense",
      description: "Website conversion optimization and personalisation platform.",
    },
    {
      title: "Backstage",
      href: "/marketing/backstage",
      description: "End-to-end event management software.",
    },
    {
      title: "Webinar",
      href: "/marketing/webinar",
      description: "Webinar platform for webcasting online webinars.",
    },
    {
      title: "Commerce",
      href: "/marketing/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
    {
      title: "Marketing Automation",
      href: "/marketing/automation",
      description: "All-in-one marketing automation software.",
    },
    {
      title: "LandingPage",
      href: "/marketing/landingpage",
      description: "Smart landing page builder to increase conversion rates. NEW",
    },
    {
      title: "SalesIQ",
      href: "/marketing/salesiq",
      description: "Live chat app to engage and convert website visitors.",
    },
    {
      title: "Sign",
      href: "/marketing/sign",
      description: "Digital signature app for businesses.",
    },
    {
      title: "Thrive",
      href: "/marketing/thrive",
      description: "Complete loyalty and affiliate management platform. NEW",
    },
    {
      title: "Publish",
      href: "/marketing/publish",
      description: "Manage all your local business listings on a single platform.",
    },
    {
      title: "Marketing Plus",
      href: "/marketing/marketing-plus",
      description: "Unified marketing platform for marketing teams. SUITE",
    },
  ],
  "Commerce and POS": [
    {
      title: "Commerce",
      href: "/commerce/commerce",
      description: "eCommerce platform to manage and market your online store.",
    },
  ],
  Service: [
    {
      title: "Desk",
      href: "/service/desk",
      description: "Helpdesk software to deliver great customer support.",
    },
    {
      title: "Assist",
      href: "/service/assist",
      description: "Remote support and unattended remote access software.",
    },
    {
      title: "Lens",
      href: "/service/lens",
      description: "Interactive remote assistance software with augmented reality.",
    },
    {
      title: "FSM",
      href: "/service/fsm",
      description: "End-to-end field service management platform for service businesses. NEW",
    },
    {
      title: "SalesIQ",
      href: "/service/salesiq",
      description: "Live chat app to engage and convert website visitors.",
    },
    {
      title: "Bookings",
      href: "/service/bookings",
      description: "Appointment scheduling app for consultations with customers.",
    },
  ],
  Finance: [
    {
      title: "Accounting",
      href: "/finance/accounting",
      description: "Manage your finances and accounts.",
    },
    {
      title: "Billing",
      href: "/finance/billing",
      description: "Manage and automate your billing processes.",
    },
    {
      title: "Expense",
      href: "/finance/expense",
      description: "Track and manage your business expenses.",
    },
    {
      title: "Financial Planning",
      href: "/finance/planning",
      description: "Plan and forecast your financial strategy.",
    },
    {
      title: "Payroll",
      href: "/finance/payroll",
      description: "Manage employee payroll efficiently.",
    },
  ],
  "Email and Collaboration": [
    {
      title: "Email Marketing",
      href: "/email/marketing",
      description: "Send marketing emails to your customers.",
    },
  ],
  "Human Resources": [
    {
      title: "Employee Management",
      href: "/hr/management",
      description: "Manage your employees and their information.",
    },
  ],
  Legal: [
    {
      title: "Compliance",
      href: "/legal/compliance",
      description: "Ensure your business complies with laws.",
    },
  ],
  "Security and IT Management": [
    {
      title: "Cybersecurity",
      href: "/security/cybersecurity",
      description: "Protect your business from cyber threats.",
    },
  ],
  "BI and Analytics": [
    {
      title: "Data Analytics",
      href: "/bi/analytics",
      description: "Analyze your business data.",
    },
  ],
  "Project Management": [
    {
      title: "Task Management",
      href: "/project/task",
      description: "Manage your projects and tasks.",
    },
  ],
  "Developer Platforms": [
    {
      title: "API Documentation",
      href: "/developer/api",
      description: "Access API documentation for development.",
    },
  ],
};

export function NavigationMenuDemo() {
  const [activeCategory, setActiveCategory] = useState("Sales");

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex">
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
              <div className="w-3/4">
                <ul className="grid gap-3 p-4 md:w-[1300px] lg:w-[1400px] lg:grid-cols-[1fr.90fr_3fr]">
                  {categories[activeCategory].map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
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
              {Object.values(categories).flat().map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
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

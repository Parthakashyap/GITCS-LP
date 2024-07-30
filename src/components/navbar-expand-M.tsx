"use client";

import * as React from "react";
import { useState } from "react";
import { categories } from "./navbar-expand";
import { cn } from "../libs/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { Cookie } from "lucide-react";

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

export function NavigationMenuDemoMobile() {
  const [activeMainCategory, setActiveMainCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);

  const handleMainCategoryClick = (category: string) => {
    setActiveMainCategory(activeMainCategory === category ? null : category);
    setActiveSubCategory(null); // Reset subcategory when changing main categories
  };

  const handleSubCategoryClick = (category: string) => {
    setActiveSubCategory(activeSubCategory === category ? null : category);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col w-[27rem] p-2 px-6 space-y-2">
        <div className="w-full">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => handleMainCategoryClick("Products")}
              className="flex items-center justify-between rounded-md px-6 py-3 font-semibold w-full text-left"
            >
              <span>Products</span>
              
            </NavigationMenuTrigger>
            {activeMainCategory === "Products" && (
              <div className="mt-2 p-2 px-4 bg-white shadow-md rounded-md">
                <ul className="w-full space-y-2">
                  {Object.keys(categories).map((category) => (
                    <li key={category} className="relative">
                      <button
                        onClick={() => handleSubCategoryClick(category)}
                        className="block w-full p-2 text-left text-sm md:text-base text-gray-700 rounded-md"
                      >
                        {category}
                      </button>
                      {activeSubCategory === category && (
                        <ul className="ml-4 mt-2 space-y-2 bg-gray-50 rounded-md p-2 shadow-sm">
                          {categories[category].map((component) => (
                            <li key={component.title} className="flex items-center gap-3 p-2 rounded-md">
                              <Cookie className="text-gray-600" />
                              <ListItem
                                title={component.title}
                                href={component.href}
                              >
                                {component.description}
                              </ListItem>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </NavigationMenuItem>
        </div>
        <div className="w-full">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => handleMainCategoryClick("Company")}
              className="flex items-center justify-between rounded-md px-6 py-3 font-semibold w-full text-left"
            >
              <span>Company</span>
              
            </NavigationMenuTrigger>
            {activeMainCategory === "Company" && (
              <div className="mt-2 p-2 px-4 bg-white shadow-md rounded-md">
                <ul className="grid grid-cols-1 gap-4">
                  {company.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    />
                  ))}
                </ul>
              </div>
            )}
          </NavigationMenuItem>
        </div>
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
            "block select-none space-y-1 rounded-md p-3",
            className
          )}
          {...props}
        >
          <div className="text-sm md:text-base font-medium leading-none text-gray-800">{title}</div>
          <p className="text-xs md:text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

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
import { Link } from "react-router-dom";

export function NavigationMenuDemoMobile() {
  const [activeMainCategory, setActiveMainCategory] = useState<string | null>(
    null
  );
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(
    null
  );

  const handleMainCategoryClick = (category: string) => {
    setActiveMainCategory(activeMainCategory === category ? null : category);
    setActiveSubCategory(null); // Reset subcategory when changing main categories
  };

  const handleSubCategoryClick = (category: string) => {
    setActiveSubCategory(activeSubCategory === category ? null : category);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col w-[27rem] p-2 px-6">
        <div className="w-full">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              onClick={() => handleMainCategoryClick("Products")}
              className="flex items-center justify-between rounded-md px-6 font-semibold w-full text-left"
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
                            <li
                              key={component.title}
                              className="flex items-center gap-3 p-2 rounded-md"
                            >
                              {component.icon}
                              <ListItem
                                title={component.title}
                                href={component.href}
                              ></ListItem>
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
        <div className="w-full p-6 flex flex-col gap-4">
          <NavigationMenuItem className=" font-medium text-sm">
            <Link to="/about-us">About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className=" font-medium text-sm">
            <Link to="/brain-stories">Brain Stories</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className=" font-medium text-sm">
            <Link to="/careers">Careers</Link>
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
          <div className="text-sm md:text-base font-medium leading-none text-gray-800">
            {title}
          </div>
          <p className="text-xs md:text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

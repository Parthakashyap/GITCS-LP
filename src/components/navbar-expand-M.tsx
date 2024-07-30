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
      <NavigationMenuList className="flex flex-col sm:flex-row">
        <div className="flex-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => handleMainCategoryClick("Products")}>
              Products
            </NavigationMenuTrigger>
            {activeMainCategory === "Products" && (
              <div className="block p-4">
                <ul className="w-full">
                  {Object.keys(categories).map((category) => (
                    <li key={category} className="mb-4">
                      <button
                        onClick={() => handleSubCategoryClick(category)}
                        className="block w-full p-3 text-left text-sm md:text-base hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      >
                        {category}
                      </button>
                      {activeSubCategory === category && (
                        <ul className="ml-4 mt-2 space-y-2">
                          {categories[category].map((component) => (
                            <li key={component.title} className="flex items-center gap-3">
                              <Cookie />
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
        <div className="flex-1">
          <NavigationMenuItem>
            <NavigationMenuTrigger onClick={() => handleMainCategoryClick("Company")}>
              Company
            </NavigationMenuTrigger>
            {activeMainCategory === "Company" && (
              <div className="block p-4">
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
        <div className="flex-1 mt-2 mb-2">
          <NavigationMenuItem>
            <a href="/docs">
              <NavigationMenuLink>Documentation</NavigationMenuLink>
            </a>
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
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm md:text-base font-medium leading-none">{title}</div>
          <p className="text-xs md:text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import MenuItems from "./menuItems";

export const MenuBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    // Blog is a separate page
    if (href === "/blog") {
      router.push("/blog");
      return;
    }

    // Handle section links such as #home, #about, #shop, #contact
    if (href.startsWith("#")) {
      // If we are already on the homepage,
      // scroll directly to the section.
      if (pathname === "/") {
        const targetElement = document.querySelector(href);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        return;
      }

      // If we are on another page such as /blog,
      // first go back to the homepage with the section hash.
      router.push(`/${href}`);
      return;
    }

    // Fallback for normal routes
    router.push(href);
  };

  return (
    <nav aria-label="Website navigation">
      <div className="flex items-center gap-[20px]">
        {MenuItems.map((item) => (
          <button
            key={item.href}
            type="button"
            className="hover:text-paragraph-color transition-colors duration-200"
            onClick={() => handleNavigation(item.href)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
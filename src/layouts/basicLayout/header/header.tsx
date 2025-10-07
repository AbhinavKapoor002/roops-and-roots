"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MenuBar } from "./menuBar";

const Header = () => {
  const [isStick, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.pageYOffset > 330);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 flex justify-between items-center px-4 sm:px-[25px] py-3 sm:py-[15px] transition-all z-50 ${
        isStick ? "bg-white shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <div 
        className="flex-shrink-0"
        onClick={() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }}
>
        
        <Image
          alt="Brand Logo"
          src="/images/brand-logo-dark.png"
          width={500}
          height={50}
          className="w-[120px] sm:w-[150px] h-auto"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-1 justify-end">
        <MenuBar />
      </div>

      {/* Mobile Hamburger */}
      <button
        className="sm:hidden text-2xl font-bold"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-40 flex flex-col items-center py-4 space-y-4 shadow-md sm:hidden">
          <MenuBar />
          <button
            className="mt-2 px-6 py-2 bg-paragraph-color text-white rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

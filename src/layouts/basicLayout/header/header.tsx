"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MenuBar } from "./menuBar";

const Header = () => {
  const [isStick, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 330);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHome = () => {
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
    });

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 flex justify-between items-center px-4 sm:px-[25px] py-3 sm:py-[15px] transition-all z-50 ${
        isStick ? "bg-white shadow-md" : ""
      }`}
    >
      {/* Logo */}
      <button
        type="button"
        onClick={scrollToHome}
        aria-label="Roop & Roots by Renu - Home"
        className="flex-shrink-0 cursor-pointer"
      >
        <Image
          src="/images/brand-logo-dark.png"
          alt="Roop & Roots by Renu"
          width={500}
          height={50}
          priority
          className="w-[120px] sm:w-[150px] h-auto"
        />
      </button>

      {/* Desktop Menu */}
      <nav
        aria-label="Main navigation"
        className="hidden sm:flex flex-1 justify-end"
      >
        <MenuBar />
      </nav>

      {/* Mobile Hamburger */}
      <button
        type="button"
        className="sm:hidden text-2xl font-bold p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute top-full left-0 w-full bg-white z-40 flex flex-col items-center py-4 space-y-4 shadow-md sm:hidden"
        >
          <MenuBar />

          <button
            type="button"
            className="mt-2 px-6 py-2 bg-paragraph-color text-white rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
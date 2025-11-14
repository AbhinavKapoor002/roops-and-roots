"use client";

import Image from "next/image";
import React, {useEffect, useRef } from "react";

// Images
import BlackLogo from "./brand-logo-dark.png";

const ParallelEffect = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const maxScrollHeight = document.body.scrollHeight - window.innerHeight;
      const pageYInPercent = (window.pageYOffset / maxScrollHeight) * 100;

      if (!wrapperRef.current) return;

      const elementScrollPos =
        (pageYInPercent / 100) * wrapperRef.current.scrollWidth;
      wrapperRef.current.scroll({
        left: elementScrollPos,
        behavior: "instant",
      });
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="   w-full overflow-hidden 
        bg-gradient-to-r from-[#f3f0ea] via-[#e8f3ea] to-[#f0ece5]
        border-y border-[#d1d1c7]/40
        shadow-inner
      "
    >
      <div
        className="
          flex items-center gap-[40px] min-w-max py-10 px-12
          animate-[scrollFade_15s_linear_infinite]
        "
      >
        {[...Array(21).keys()].map((value) => (
          <div key={value} className="flex items-center gap-[40px] min-w-max">
            <div className="w-[10px] h-[10px] rounded-full shrink-0 bg-paragraph-color" />
            <Image src={BlackLogo} alt="logoblack" className="w-[150px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallelEffect;

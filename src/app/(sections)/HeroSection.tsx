import { RiGeminiFill } from "@remixicon/react";
import Image from "next/image";
import React from "react";

export const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-[70px] pt-[80px] md:pt-[40px] min-h-screen gap-[40px] md:gap-[50px] bg-cover bg-center"
      style={{
        backgroundImage: "url(/images/home/hero-bg-image.jpg)",
      }}
    >
      {/* Text Content */}
      <div className="w-full text-center space-y-[25px] md:space-y-[30px] md:pt-[100px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-marcellus uppercase font-semibold leading-tight md:leading-[70px]">
          HERBAL
          <br />
          FACEPACK
        </h1>

        {/* Icon */}
        <div 
          className="text-[35px] md:text-[40px] flex justify-center"
        >
          <RiGeminiFill size={25} />
        </div>

        {/* Paragraph */}
        <p className="text-lg sm:text-xl md:text-2xl px-2 text-[#3b4a22] leading-relaxed md:leading-[36px]">
          Crafted with pure, herbal ingredients to brighten, cleanse, and revive
          your skin.
          <br />
          🔬 Lab-Tested • 🍃 100% Natural • 🚫 Chemical-Free
        </p>

        {/* BUY NOW Button */}
        <div className="flex justify-center">
          <a
            href="https://wa.me/919582131422?text=Hi! I’d like to order the Herbal Face Pack."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="relative group py-4 sm:py-5 px-8 sm:px-12 rounded-full text-2xl sm:text-[40px] font-bold text-white
                        shadow-lg shadow-[var(--paragraph-color)]/50 overflow-hidden transition-all duration-500 hover:scale-105"
              style={{
                background:
                  "linear-gradient(90deg, var(--paragraph-color), var(--hover-color-2))",
              }}
            >
              {/* Glowing animated background */}
              <span
                className="absolute inset-0 opacity-30 blur-2xl animate-pulse rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, var(--paragraph-color), var(--hover-color-2))",
                }}
              ></span>

              {/* Shine effect */}
              <span
                className="absolute -left-20 top-0 w-20 h-full bg-white opacity-20 
                            transform -rotate-45 translate-x-0 group-hover:translate-x-[300%] 
                            transition-transform duration-1000"
              ></span>

              BUY NOW
            </button>
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center mt-[30px] md:mt-0">
  <div
    className="bg-no-repeat bg-contain bg-center flex justify-center items-center h-[40vh] sm:h-[50vh] md:h-[100vh] w-full"
    style={{
      backgroundImage: "url(/images/product/bg-image-3.png)",
    }}
  >
    <Image
      alt="Herbal Facepack"
      src="/images/product/transparent product image.png"
      width={908}
      height={935}
      className="w-[50%] sm:w-[40%] xs:w-[60%] md:w-[50%] animate-slam-with-shadow"
    />
  

        </div>
      </div>
    </div>
  );
};

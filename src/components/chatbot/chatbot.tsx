"use client";
import React, { useState } from "react";
import Popup from "./popup";



const Chatbot = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  
  
  return (
    <>
      {
        isOpen && <Popup/>
      }

      <button
        className="fixed bottom-6 left-6 flex items-center gap-3 bg-gradient-to-r from-[var(--paragraph-color)] to-[var(--hover-color-2)] text-white font-semibold text-lg shadow-[0_8px_20px_rgba(107,142,35,0.4)] rounded-full px-6 py-3 hover:from-[var(--hover-color-2)] hover:to-[var(--paragraph-color)] hover:shadow-[0_8px_25px_rgba(107,142,35,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-md border border-white/20 animate-float"

        onClick={() => {
          setIsOpen(!isOpen)
        }}
        
      >
        Ask Rootsy 
        
      </button>
    </>
  )

};

export default Chatbot;

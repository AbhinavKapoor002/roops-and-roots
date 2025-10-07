import { RiArrowUpLine } from "@remixicon/react";
import React, { useState } from "react";
import ChatHistory from "./chatHistory";
import axios from "axios";

export interface HistoryChatInterface {
  role: "rootsy" | "user";
  messages: string;
}

const Popup = () => {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState<HistoryChatInterface[]>([]);

  return (
    <div className="fixed bottom-[110px] left-[30px] max-w-[320px] w-full bg-gradient-to-b from-[#ffffff] to-[#f8f9f4] border border-[#d8e0b8] shadow-[0_8px_30px_rgba(85,107,47,0.25)] rounded-2xl overflow-hidden backdrop-blur-md opacity-95 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(107,142,35,0.35)]">
      {/* Messages History */}
      <div className="max-h-[500px] min-h-[500px] overflow-auto p-[20px] flex justify-between w-full">
        <ChatHistory history={history} />
      </div>
      <form
        className="flex justify-between bg-hover-color-2 p-[20px]"
        onSubmit={async (event) => {
          event.preventDefault();

          if (!input) return;

          const data: HistoryChatInterface = {
            role: "user",
            messages: input,
          };

          setHistory((prev) => [...prev, data]);

          const response = await axios.post("/api/gemini", {prompt: input});
          const aiResponse: string = response.data.text;
        
          const aiData: HistoryChatInterface = {
            role: "rootsy",
            messages: aiResponse,
          }

          setHistory(prev => [...prev, aiData]);

          setInput("");

        }}
      >
        <input
          className="w-full outline-none text-white placeholder:text-white"
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button>
          <RiArrowUpLine size={25} color="white" />
        </button>
      </form>
    </div>
  );
};

export default Popup;

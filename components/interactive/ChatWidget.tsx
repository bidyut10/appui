"use client";
import React, { useState } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import { Send } from "@/icons/Send";

const messages = [
  { from: "bot", text: "Hey! How can I help you today?" },
  { from: "user", text: "Show me the pricing plans" },
  { from: "bot", text: "We have Free, Pro ($29/mo), and Enterprise. Want a comparison?" },
];

export const ChatWidget = () => {
  const [input, setInput] = useState("");

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans flex flex-col">
      <div className="px-4 py-3 bg-neutral-900 flex items-center gap-3">
        <div className="relative">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image src={profileImage} alt="Support" className="w-full h-full object-cover" />
          </div>
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-neutral-900 rounded-full" />
        </div>
        <div>
          <p className="text-sm font-medium text-white leading-none">Support</p>
          <p className="text-[10px] text-neutral-400 mt-0.5">Typically replies instantly</p>
        </div>
        <span className="ml-auto text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
          Online
        </span>
      </div>

      <div className="flex-1 p-3 space-y-2.5 max-h-52 overflow-y-auto bg-neutral-50/50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                msg.from === "user"
                  ? "bg-neutral-900 text-white rounded-br-md"
                  : "bg-white border border-neutral-200 text-neutral-700 rounded-bl-md shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-neutral-100 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
          className="flex-1 h-9 px-3 rounded-lg border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-neutral-400 focus:ring-none transition-all"
        />
        <button className="w-9 h-9 rounded-lg bg-neutral-900 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors cursor-pointer active:scale-95 shrink-0">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

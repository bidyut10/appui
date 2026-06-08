"use client";
import React, { useState } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import { Send } from "@/icons/Send";

const messages = [
  { from: "bot", text: "Hey! How can I help you today?" },
  { from: "user", text: "Show me the pricing plans" },
  {
    from: "bot",
    text: "We have Free, Pro ($29/mo), and Enterprise. Want a comparison?",
  },
];

export const ChatWidget = () => {
  const [input, setInput] = useState("");

  return (
    <div className="flex w-72 flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="flex items-center gap-3 bg-neutral-900 px-4 py-3">
        <div className="relative">
          <div className="h-8 w-8 overflow-hidden rounded-full">
            <Image
              src={profileImage}
              alt="Support"
              className="h-full w-full object-cover"
            />
          </div>
          <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-neutral-900 bg-emerald-400" />
        </div>
        <div>
          <p className="text-sm leading-none font-medium text-white">Support</p>
          <p className="mt-0.5 text-[10px] text-neutral-400">
            Typically replies instantly
          </p>
        </div>
        <span className="ml-auto font-mono text-[10px] tracking-wider text-emerald-400 uppercase">
          Online
        </span>
      </div>

      <div className="max-h-52 flex-1 space-y-2.5 overflow-y-auto bg-neutral-50/50 p-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                msg.from === "user"
                  ? "rounded-br-md bg-neutral-900 text-white"
                  : "rounded-bl-md border border-neutral-200 bg-white text-neutral-700 shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-neutral-100 p-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
          className="focus:ring-none h-9 flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
        />
        <button className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-neutral-900 text-white transition-colors hover:bg-neutral-800 active:scale-95">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

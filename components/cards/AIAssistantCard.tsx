"use client";
import React, { useState } from "react";
import { Send } from "@/icons/Send";

const suggestions = ["Explain React hooks", "Write a API endpoint", "Debug my CSS", "Summarize this doc"];

export const AIAssistantCard = () => {
  const [input, setInput] = useState("");

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="px-4 py-3 bg-linear-to-r from-violet-600 to-indigo-600 flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg viewBox="0 0 24 24" width={16} height={16} fill="white"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73A2 2 0 0112 2z"/></svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AI Assistant</p>
          <p className="text-[10px] text-white/60">Powered by GPT-4</p>
        </div>
        <span className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-300 font-mono">Live</span>
        </span>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="w-6 h-6 rounded-lg bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-violet-600 text-[10px] font-bold">AI</span>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl rounded-tl-md px-3 py-2.5 text-xs text-neutral-700 leading-relaxed">
            Hi! I&apos;m your AI assistant. Ask me anything about code, design, or writing.
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {suggestions.map((s) => (
            <button key={s} onClick={() => setInput(s)} className="px-2.5 py-1 bg-violet-50 border border-violet-100 text-[10px] font-medium text-violet-700 rounded-full hover:bg-violet-100 transition-colors cursor-pointer">
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-neutral-100 flex items-center gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything…" className="flex-1 h-9 px-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all" />
        <button className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white hover:bg-violet-700 transition-colors cursor-pointer shrink-0">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

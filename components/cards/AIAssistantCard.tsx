"use client";
import React, { useState } from "react";
import { Send } from "@/icons/Send";
import { ClaudeAI } from "@/icons/ClaudeAI";

const suggestions = ["Explain React hooks", "Write a API endpoint", "Debug my CSS", "Summarize this doc"];

export const AIAssistantCard = () => {
  const [input, setInput] = useState("");

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="px-4 py-3 bg-linear-to-r from-neutral-800 to-neutral-950 flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <ClaudeAI size={16} className="text-orange-400" />
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
          <div className="w-6 h-6 rounded-lg bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-orange-600 text-[10px] font-bold">AI</span>
          </div>
          <div className="bg-neutral-50 border border-neutral-100 rounded-2xl rounded-tl-md px-3 py-2.5 text-xs text-neutral-700 leading-relaxed">
            Hi! I&apos;m your AI assistant. Ask me anything about code, design,
            or writing.
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="px-2.5 py-1 bg-orange-50 border border-orange-100 text-[10px] font-medium text-neutral-800 rounded-full hover:bg-orange-100 transition-colors cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 border-t border-neutral-100 flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything…"
          className="flex-1 h-9 px-3 rounded-lg border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-orange-300 focus:ring-none transition-all"
        />
        <button className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white hover:bg-orange-700 transition-colors cursor-pointer shrink-0">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import { Send } from "@/icons/Send";
import { ClaudeAI } from "@/icons/ClaudeAI";

const suggestions = [
  "Explain React hooks",
  "Write a API endpoint",
  "Debug my CSS",
  "Summarize this doc",
];

export const AIAssistantCard = () => {
  const [input, setInput] = useState("");

  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="flex items-center gap-3 bg-linear-to-r from-neutral-800 to-neutral-950 px-4 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
          <ClaudeAI size={16} className="text-orange-400" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AI Assistant</p>
          <p className="text-[10px] text-white/60">Powered by GPT-4</p>
        </div>
        <span className="ml-auto flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="font-mono text-[10px] text-emerald-300">Live</span>
        </span>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex gap-2">
          <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-orange-100">
            <span className="text-[10px] font-bold text-orange-600">AI</span>
          </div>
          <div className="rounded-2xl rounded-tl-md border border-neutral-100 bg-neutral-50 px-3 py-2.5 text-xs leading-relaxed text-neutral-700">
            Hi! I&apos;m your AI assistant. Ask me anything about code, design,
            or writing.
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="cursor-pointer rounded-full border border-orange-100 bg-orange-50 px-2.5 py-1 text-[10px] font-medium text-neutral-800 transition-colors hover:bg-orange-100"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-neutral-100 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything…"
          className="focus:ring-none h-9 flex-1 rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-orange-300"
        />
        <button className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-orange-600 text-white transition-colors hover:bg-orange-700">
          <Send size={14} />
        </button>
      </div>
    </div>
  );
};

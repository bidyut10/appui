"use client";
import React, { useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Send } from "@/icons/Send";

const models = ["Claude 3.5", "GPT-4o", "Gemini Pro", "Llama 3"];

export const AIPromptCard = () => {
  const [model, setModel] = useState("Claude 3.5");
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="p-4">
        <div className="relative mb-3">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700 transition-colors hover:bg-neutral-200"
          >
            {model}
            <ChevronDown size={12} className="text-neutral-400" />
          </button>
          {open && (
            <div className="absolute top-full left-0 z-10 mt-1 w-36 rounded-xl border border-neutral-200 bg-white p-1 shadow-lg">
              {models.map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setModel(m);
                    setOpen(false);
                  }}
                  className={`w-full cursor-pointer rounded-lg px-2.5 py-1.5 text-left text-[11px] ${model === m ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to build…"
          rows={3}
          className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-xs text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
        />

        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1.5">
            {["Design", "Code", "Write"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-2 py-1 text-[9px] text-neutral-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="flex h-8 cursor-pointer items-center gap-1 rounded-lg bg-neutral-900 px-3 text-[11px] font-medium text-white transition-colors hover:bg-neutral-800">
            Generate <Send size={11} className="rotate-45" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 px-4 py-2">
        <span className="text-[10px] text-neutral-400">
          {prompt.length}/2000 tokens
        </span>
        <span className="font-mono text-[10px] text-neutral-400">
          ⌘ + Enter
        </span>
      </div>
    </div>
  );
};

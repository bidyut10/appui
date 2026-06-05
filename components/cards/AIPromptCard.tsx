"use client";
import React, { useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Send } from "@/icons/Send";

const models = ["GPT-4o", "Claude 3.5", "Gemini Pro", "Llama 3"];

export const AIPromptCard = () => {
  const [model, setModel] = useState("GPT-4o");
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="p-4">
        <div className="relative mb-3">
          <button onClick={() => setOpen(!open)} className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 rounded-lg text-[11px] font-medium text-neutral-700 hover:bg-neutral-200 transition-colors cursor-pointer">
            {model}
            <ChevronDown size={12} className="text-neutral-400" />
          </button>
          {open && (
            <div className="absolute top-full mt-1 left-0 w-36 bg-white border border-neutral-200 rounded-xl p-1 shadow-lg z-10">
              {models.map((m) => (
                <button key={m} onClick={() => { setModel(m); setOpen(false); }} className={`w-full text-left px-2.5 py-1.5 rounded-lg text-[11px] cursor-pointer ${model === m ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-50"}`}>
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
          className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
        />

        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-1.5">
            {["🎨 Design", "💻 Code", "✍️ Write"].map((tag) => (
              <span key={tag} className="px-2 py-0.5 bg-neutral-100 text-[9px] text-neutral-500 rounded-full">{tag}</span>
            ))}
          </div>
          <button className="h-8 px-3 bg-neutral-900 text-white text-[11px] font-medium rounded-lg flex items-center gap-1 hover:bg-neutral-800 transition-colors cursor-pointer">
            Generate <Send size={11} />
          </button>
        </div>
      </div>
      <div className="px-4 py-2 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
        <span className="text-[10px] text-neutral-400">{prompt.length}/2000 tokens</span>
        <span className="text-[10px] font-mono text-neutral-400">⌘ + Enter</span>
      </div>
    </div>
  );
};

"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { Check } from "@/icons/Check";

const languages = [
  { code: "EN", name: "English", flag: "🇺🇸" },
  { code: "HI", name: "Hindi", flag: "🇮🇳" },
  { code: "ES", name: "Spanish", flag: "🇪🇸" },
  { code: "FR", name: "French", flag: "🇫🇷" },
  { code: "DE", name: "German", flag: "🇩🇪" },
  { code: "JP", name: "Japanese", flag: "🇯🇵" },
];

export const LanguagePickerDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const current = languages[selected];

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 h-10 px-3 border border-neutral-200 bg-white rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all cursor-pointer"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-xs font-medium text-neutral-700">{current.code}</span>
        <ChevronDown className="w-3 h-3 text-neutral-400" />
      </button>

      <div
        className={`
          absolute top-[calc(100%+8px)] z-[100] right-0 w-52
          bg-white border border-neutral-200/80 rounded-2xl p-1.5
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)]
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top right" }}
      >
        <p className="px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
          Language
        </p>
        {languages.map((lang, i) => (
          <button
            key={lang.code}
            onClick={() => { setSelected(i); setOpen(false); }}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-left transition-colors cursor-pointer ${
              selected === i ? "bg-violet-50" : "hover:bg-neutral-50"
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="text-xs font-medium text-neutral-800 flex-1">{lang.name}</span>
            {selected === i && <Check size={13} className="text-violet-600" />}
          </button>
        ))}
      </div>
    </div>
  );
};

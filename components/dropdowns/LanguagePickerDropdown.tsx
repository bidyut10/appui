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
        className="inline-flex h-10 cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 transition-all hover:border-neutral-300 hover:shadow-sm"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="text-xs font-medium text-neutral-700">
          {current.code}
        </span>
        <ChevronDown className="h-3 w-3 text-neutral-400" />
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] right-0 z-[100] w-52 rounded-2xl border border-neutral-200/80 bg-white p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top right" }}
      >
        <p className="px-2.5 py-1.5 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Language
        </p>
        {languages.map((lang, i) => (
          <button
            key={lang.code}
            onClick={() => {
              setSelected(i);
              setOpen(false);
            }}
            className={`flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-left transition-colors ${
              selected === i ? "bg-violet-50" : "hover:bg-neutral-50"
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="flex-1 text-xs font-medium text-neutral-800">
              {lang.name}
            </span>
            {selected === i && <Check size={13} className="text-violet-600" />}
          </button>
        ))}
      </div>
    </div>
  );
};

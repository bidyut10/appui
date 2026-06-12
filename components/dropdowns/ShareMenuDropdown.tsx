"use client";
import React, { useEffect, useRef, useState } from "react";
import { Share } from "@/icons/Share";
import { Copy } from "@/icons/Copy";
import { Mail } from "@/icons/Mail";
import { Link2Icon } from "./ShareDropdownIcons";

const shareOptions = [
  {
    label: "Copy Link",
    icon: Copy,
    color: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
  },
  {
    label: "Email",
    icon: Mail,
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
  {
    label: "Twitter",
    icon: Share,
    color: "bg-sky-50 text-sky-600 hover:bg-sky-100",
  },
  {
    label: "LinkedIn",
    icon: Link2Icon,
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
  },
];

export const ShareMenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex h-11 cursor-pointer items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 text-sm font-medium transition-all duration-300 hover:border-neutral-300 hover:shadow-sm active:scale-95"
      >
        <Share size={15} className="text-neutral-500" />
        <span className="text-neutral-800">Share</span>
      </button>

      <div
        className={`absolute top-[calc(100%+8px)] left-1/2 z-[100] w-64 -translate-x-1/2 rounded-2xl border border-neutral-200/80 bg-white p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top" }}
      >
        <p className="mb-3 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
          Share this page
        </p>
        <div className="grid grid-cols-2 gap-2">
          {shareOptions.map(({ label, icon: Icon, color }) => (
            <button
              key={label}
              onClick={() => setOpen(false)}
              className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl p-3 text-xs font-medium transition-all duration-200 active:scale-95 ${color}`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl border border-neutral-100 bg-neutral-50 px-3 py-2">
          <span className="flex-1 truncate text-[11px] text-neutral-400">
            appui.dev/components/cards
          </span>
          <button className="cursor-pointer font-mono text-[10px] font-medium text-neutral-600 transition-colors hover:text-neutral-900">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

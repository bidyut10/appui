"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "@/icons/ChevronDown";
import { ArrowRight } from "@/icons/ArrowRight";

const menuSections = [
  {
    title: "Components",
    items: [
      { name: "Cards", desc: "24 unique card designs", badge: "New" },
      { name: "Dropdowns", desc: "12 menu variations" },
      { name: "Search Bars", desc: "5 search patterns" },
    ],
  },
  {
    title: "Sections",
    items: [
      { name: "Hero", desc: "Gradient & bento layouts" },
      { name: "Pricing", desc: "Toggle & comparison tables" },
      { name: "Footer", desc: "Dark & minimal variants" },
    ],
  },
];

export const MegaMenuDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative inline-block font-sans">
      <button
        onClick={() => setOpen(!open)}
        className="group inline-flex items-center gap-1.5 h-10 px-4 text-xs font-semibold text-neutral-800 hover:text-neutral-900 transition-colors cursor-pointer"
      >
        Browse
        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`
          absolute top-[calc(100%+4px)] z-[100] left-0 w-80
          bg-white border border-neutral-200/80 rounded-2xl overflow-hidden
          shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl
          transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${open ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"}
        `}
        style={{ transformOrigin: "top left" }}
      >
        <div className="grid grid-cols-2 divide-x divide-neutral-100">
          {menuSections.map((section) => (
            <div key={section.title} className="p-3">
              <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-2 px-1">
                {section.title}
              </p>
              {section.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setOpen(false)}
                  className="w-full text-left px-2 py-2 rounded-xl hover:bg-neutral-50 transition-colors cursor-pointer group/item"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-neutral-800 group-hover/item:text-violet-700 transition-colors">
                      {item.name}
                    </span>
                    {"badge" in item && item.badge && (
                      <span className="px-1 py-px bg-violet-100 text-violet-600 text-[8px] font-bold rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-neutral-400 mt-0.5">{item.desc}</p>
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] text-neutral-500">50+ components available</span>
          <button className="flex items-center gap-1 text-[10px] font-semibold text-violet-600 hover:underline cursor-pointer">
            View all <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

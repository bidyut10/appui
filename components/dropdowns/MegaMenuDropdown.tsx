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
        className="group inline-flex h-10 cursor-pointer items-center gap-1.5 px-4 text-xs font-semibold text-neutral-800 transition-colors hover:text-neutral-900"
      >
        Browse
        <ChevronDown
          className={`h-3.5 w-3.5 text-neutral-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute top-[calc(100%+4px)] left-0 z-[100] w-80 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${open ? "visible translate-y-0 scale-100 opacity-100" : "invisible -translate-y-2 scale-95 opacity-0"} `}
        style={{ transformOrigin: "top left" }}
      >
        <div className="grid grid-cols-2 divide-x divide-neutral-100">
          {menuSections.map((section) => (
            <div key={section.title} className="p-3">
              <p className="mb-2 px-1 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                {section.title}
              </p>
              {section.items.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setOpen(false)}
                  className="group/item w-full cursor-pointer rounded-xl px-2 py-2 text-left transition-colors hover:bg-neutral-50"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-neutral-800 transition-colors group-hover/item:text-violet-700">
                      {item.name}
                    </span>
                    {"badge" in item && item.badge && (
                      <span className="rounded-full bg-violet-100 px-1 py-px text-[8px] font-bold text-violet-600">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 px-4 py-3">
          <span className="text-[10px] text-neutral-500">
            50+ components available
          </span>
          <button className="flex cursor-pointer items-center gap-1 text-[10px] font-semibold text-violet-600 hover:underline">
            View all <ArrowRight size={10} />
          </button>
        </div>
      </div>
    </div>
  );
};

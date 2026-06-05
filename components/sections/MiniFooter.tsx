import React, { forwardRef } from "react";
import { Github } from "@/icons/Github";
import { Mail } from "@/icons/Mail";
import { Web } from "@/icons/Web";

const columns = [
  {
    title: "Product",
    links: ["Components", "Templates", "Pricing", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Blog", "Community", "Support"],
  },
];

export const MiniFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-80 bg-neutral-950 rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
          <span className="text-neutral-900 text-xs font-bold">A</span>
        </div>
        <span className="text-sm font-semibold text-white">AppUI</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5">
        {columns.map((col) => (
          <div key={col.title}>
            <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-2">
              {col.title}
            </p>
            <ul className="space-y-1.5">
              {col.links.map((link) => (
                <li key={link}>
                  <button className="text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-neutral-800">
        {[Github, Mail, Web].map((Icon, i) => (
          <button
            key={i}
            className="w-7 h-7 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors cursor-pointer"
          >
            <Icon size={13} />
          </button>
        ))}
        <p className="text-[10px] text-neutral-600 ml-auto">
          © 2026 AppUI
        </p>
      </div>
    </div>
  </div>
));
MiniFooter.displayName = "MiniFooter";

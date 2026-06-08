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
    className={`w-80 overflow-hidden rounded-2xl bg-neutral-950 font-sans ${className}`}
    {...props}
  >
    <div className="p-5">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
          <span className="text-xs font-bold text-neutral-900">A</span>
        </div>
        <span className="text-sm font-semibold text-white">AppUI</span>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-4">
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-2 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
              {col.title}
            </p>
            <ul className="space-y-1.5">
              {col.links.map((link) => (
                <li key={link}>
                  <button className="cursor-pointer text-[11px] text-neutral-400 transition-colors hover:text-white">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-neutral-800 pt-4">
        {[Github, Mail, Web].map((Icon, i) => (
          <button
            key={i}
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-white"
          >
            <Icon size={13} />
          </button>
        ))}
        <p className="ml-auto text-[10px] text-neutral-600">© 2026 AppUI</p>
      </div>
    </div>
  </div>
));
MiniFooter.displayName = "MiniFooter";

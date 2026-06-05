"use client";
import React, { useState } from "react";
import { Home } from "@/icons/Home";
import { Folder } from "@/icons/Folder";
import { Settings } from "@/icons/Settings";
import { User } from "@/icons/User";

const links = [
  { label: "Home", icon: Home },
  { label: "Projects", icon: Folder, badge: "3" },
  { label: "Settings", icon: Settings },
];

export const GlassNavbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-80 px-2 py-2 bg-white/70 backdrop-blur-xl border border-neutral-200/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center justify-between font-sans">
      <div className="flex items-center gap-1">
        <div className="w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center mr-1">
          <span className="text-white text-xs font-bold">A</span>
        </div>
        {links.map(({ label, icon: Icon, badge }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`
              relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer
              ${active === label
                ? "bg-neutral-900 text-white shadow-sm"
                : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/80"
              }
            `}
          >
            <Icon size={13} />
            {label}
            {badge && active !== label && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-violet-500 text-white text-[8px] font-bold flex items-center justify-center">
                {badge}
              </span>
            )}
          </button>
        ))}
      </div>
      <button className="w-8 h-8 rounded-xl bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer">
        <User size={14} className="text-neutral-600" />
      </button>
    </nav>
  );
};

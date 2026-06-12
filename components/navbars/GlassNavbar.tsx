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
    <nav className="flex w-80 items-center justify-between rounded-2xl border border-neutral-200/60 bg-white/70 px-2 py-2 font-sans shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <div className="flex items-center gap-1">
        <div className="mr-1 flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-900">
          <span className="text-xs font-bold text-white">A</span>
        </div>
        {links.map(({ label, icon: Icon, badge }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`relative flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200 ${
              active === label
                ? "bg-neutral-900 text-white shadow-sm"
                : "text-neutral-500 hover:bg-neutral-100/80 hover:text-neutral-900"
            } `}
          >
            <Icon size={13} />
            {label}
            {badge && active !== label && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-teal-500 text-[8px] font-bold text-white">
                {badge}
              </span>
            )}
          </button>
        ))}
      </div>
      <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl bg-neutral-100 transition-colors hover:bg-neutral-200">
        <User size={14} className="text-neutral-600" />
      </button>
    </nav>
  );
};

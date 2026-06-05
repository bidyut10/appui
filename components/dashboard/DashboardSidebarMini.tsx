"use client";
import React, { useState } from "react";
import { Home } from "@/icons/Home";
import { Folder } from "@/icons/Folder";
import { Settings } from "@/icons/Settings";
import { UserGroup } from "@/icons/UserGroup";
import { Web } from "@/icons/Web";

const links = [
  { icon: Home, label: "Dashboard", badge: null },
  { icon: Folder, label: "Projects", badge: "12" },
  { icon: UserGroup, label: "Team", badge: null },
  { icon: Web, label: "Analytics", badge: null },
  { icon: Settings, label: "Settings", badge: null },
];

export const DashboardSidebarMini = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="w-52 bg-neutral-950 rounded-2xl p-3 font-sans">
      <div className="flex items-center gap-2 px-2 py-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
          <span className="text-neutral-900 text-[10px] font-bold">A</span>
        </div>
        <span className="text-sm font-semibold text-white">AppUI</span>
      </div>
      <nav className="space-y-0.5">
        {links.map(({ icon: Icon, label, badge }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
              active === label ? "bg-white/10 text-white" : "text-neutral-500 hover:text-neutral-300 hover:bg-white/5"
            }`}
          >
            <Icon size={15} />
            {label}
            {badge && (
              <span className="ml-auto text-[9px] font-mono bg-violet-500 text-white px-1.5 py-0.5 rounded-full">{badge}</span>
            )}
          </button>
        ))}
      </nav>
      <div className="mt-4 pt-3 border-t border-neutral-800 px-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-linear-to-br from-violet-400 to-fuchsia-500" />
          <div>
            <p className="text-[10px] font-medium text-white">John Doe</p>
            <p className="text-[9px] text-neutral-500">Pro plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

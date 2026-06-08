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
    <div className="w-64 rounded-2xl bg-neutral-950 p-3 font-sans">
      <div className="mb-3 flex items-center gap-2 px-2 py-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
          <span className="text-[10px] font-bold text-neutral-900">A</span>
        </div>
        <span className="text-sm font-semibold text-white">AppUI</span>
      </div>
      <nav className="space-y-0.5">
        {links.map(({ icon: Icon, label, badge }) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-all ${
              active === label
                ? "bg-white/10 text-white"
                : "text-neutral-500 hover:bg-white/5 hover:text-neutral-300"
            }`}
          >
            <Icon size={15} />
            {label}
            {badge && (
              <span className="ml-auto rounded-full bg-green-500 px-1 pt-1 pb-0.5 font-mono text-[9px] text-white">
                {badge}
              </span>
            )}
          </button>
        ))}
      </nav>
      <div className="mt-4 border-t border-neutral-800 px-2 pt-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-linear-to-br from-green-400 to-cyan-400" />
          <div>
            <p className="text-[10px] font-medium text-white">John Doe</p>
            <p className="text-[9px] text-neutral-500">Pro plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

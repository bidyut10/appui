"use client";
import React from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import { Dropdown } from "./Dropdown";
import { User } from "@/icons/User";
import { Settings } from "@/icons/Settings";
import { Mail } from "@/icons/Mail";
import { ChevronDown } from "@/icons/ChevronDown";

export const UserMenuDropdown = () => (
  <Dropdown
    trigger={
      <button className="group inline-flex items-center gap-3 h-12 pl-1.5 pr-4 border border-neutral-200 bg-white rounded-full hover:border-neutral-300 hover:shadow-sm transition-all duration-300 cursor-pointer active:scale-95">
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-neutral-100">
          <Image src={profileImage} alt="User" className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
          <p className="text-sm font-medium text-neutral-900 leading-none">John Doe</p>
          <p className="text-[10px] text-neutral-400 mt-0.5">john@example.com</p>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-neutral-400 transition-transform duration-300 group-hover:translate-y-0.5" />
      </button>
    }
    items={[
      {
        label: "View Profile",
        icon: <User />,
        onClick: () => {},
      },
      {
        label: "Account Settings",
        icon: <Settings />,
        kbd: "⌘ + ,",
        onClick: () => {},
      },
      {
        label: "Messages",
        icon: <Mail />,
        kbd: "⌘ + M",
        onClick: () => {},
      },
      { separator: true },
      {
        label: "Sign Out",
        danger: true,
        onClick: () => {},
      },
    ]}
  />
);

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
      <button className="group inline-flex h-12 cursor-pointer items-center gap-3 rounded-full border border-neutral-200 bg-white pr-4 pl-1.5 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm active:scale-95">
        <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-neutral-100">
          <Image
            src={profileImage}
            alt="User"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-left">
          <p className="text-sm leading-none font-medium text-neutral-900">
            John Doe
          </p>
          <p className="mt-0.5 text-[10px] text-neutral-400">
            john@example.com
          </p>
        </div>
        <ChevronDown className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-300 group-hover:translate-y-0.5" />
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

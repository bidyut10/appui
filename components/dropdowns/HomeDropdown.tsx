"use client"
import React from "react";
import { Dropdown } from "./Dropdown";
import { ChevronDown } from "@/icons/ChevronDown";
import { Edit } from "@/icons/Edit";
import { Copy } from "@/icons/Copy";
import { Trash } from "@/icons/Trash";
export interface DropdownItem {
  label?: string;
  icon?: React.ReactElement;
  kbd?: string;
  danger?: boolean;
  separator?: boolean;
  onClick?: () => void;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
}

export const HomeDropdown = () => (
  <Dropdown
    trigger={
      <button className="group w-full inline-flex items-center justify-between gap-4 h-11 px-5 text-sm border border-neutral-200 bg-white rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all duration-300 cursor-pointer font-medium text-neutral-800 active:scale-95">
        <span className="tracking-tight">Project Settings</span>
        <ChevronDown className="w-4 h-4 text-neutral-400 transition-transform duration-300 group-hover:translate-y-0.5" />
      </button>
    }
    items={[
      { label: "Edit Details", icon: <Edit />, kbd: "⌘ + E" },
      { label: "Copy Project", icon: <Copy />, kbd: "⌘ + C" },
      { separator: true },
      { label: "Delete Project", icon: <Trash />, danger: true, kbd: "⌫" },
    ]}
  />
);

"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";
import { Dropdown, type DropdownItem } from "./Dropdown";
import { User } from "@/icons/User";
import { Settings } from "@/icons/Settings";
import { Mail } from "@/icons/Mail";
import { ChevronDown } from "@/icons/ChevronDown";

/**
 * User profile menu dropdown built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo name, email, and avatar with your signed-in user details.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type UserMenuDropdownProps = {
  userName?: string;
  userEmail?: string;
  avatarSrc?: StaticImageData | string;
  avatarAlt?: string;
  items?: DropdownItem[];
} & ComponentPropsWithoutRef<"div">;

const defaultItems: DropdownItem[] = [
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
];

export const UserMenuDropdown = forwardRef<
  HTMLDivElement,
  UserMenuDropdownProps
>(
  (
    {
      userName = "John Doe",
      userEmail = "john@example.com",
      avatarSrc = profileImage,
      avatarAlt = "User",
      items = defaultItems,
      className,
      ...props
    },
    ref,
  ) => (
    <Dropdown
      ref={ref}
      className={cn(className)}
      {...props}
      trigger={
        <button
          type="button"
          aria-label={`User menu for ${userName}`}
          className="group inline-flex h-12 cursor-pointer items-center gap-3 rounded-full border border-neutral-100 bg-white pr-4 pl-1.5 transition-all duration-300 hover:border-neutral-300 hover:shadow-sm active:scale-95"
        >
          <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-neutral-100">
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-left">
            <p className="text-sm leading-none font-medium text-neutral-900">
              {userName}
            </p>
            <p className="mt-0.5 text-[10px] text-neutral-400">{userEmail}</p>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
      }
      items={items}
    />
  ),
);

UserMenuDropdown.displayName = "UserMenuDropdown";

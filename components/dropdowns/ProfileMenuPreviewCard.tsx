"use client";

import Image from "next/image";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { Settings } from "@/icons/Settings";
import { User } from "@/icons/User";
import { CreditCard } from "@/icons/CreditCard";
import { ChevronRight } from "@/icons/ChevronRight";

/**
 * Profile Menu Preview Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */

export type ProfileMenuItem = {
  label: string;
  icon: ReactNode;
  badge?: string;
};

export type ProfileMenuPreviewCardProps = {
  name?: string;
  email?: string;
  avatarSrc?: string;
  items?: ProfileMenuItem[];
  onItemClick?: (label: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultItems: ProfileMenuItem[] = [
  { label: "Your profile", icon: <User size={14} /> },
  { label: "Billing", icon: <CreditCard size={14} /> },
  { label: "Settings", icon: <Settings size={14} />, badge: "New" },
];

export const ProfileMenuPreviewCard = forwardRef<
  HTMLDivElement,
  ProfileMenuPreviewCardProps
>(
  (
    {
      className,
      name = "Bidyut Kundu",
      email = "bidyut@appui.dev",
      avatarSrc = "/boy.png",
      items = defaultItems,
      onItemClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="profile-menu-preview-card"
      className={cn("w-[220px] font-sans", className)}
      {...props}
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-xl shadow-neutral-200/50">
        <div className="border-b border-neutral-100 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-neutral-100">
              <Image
                src={avatarSrc}
                alt={name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-neutral-900">
                {name}
              </p>
              <p className="truncate text-[11px] text-neutral-400">{email}</p>
            </div>
          </div>
        </div>
        <div className="p-1.5">
          {items.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => onItemClick?.(item.label)}
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors hover:bg-neutral-50"
            >
              <span className="text-neutral-500">{item.icon}</span>
              <span className="flex-1 text-[13px] text-neutral-700">
                {item.label}
              </span>
              {item.badge && (
                <span className="rounded-full bg-teal-50 px-1.5 py-0.5 text-[9px] font-bold text-teal-600">
                  {item.badge}
                </span>
              )}
              <ChevronRight size={12} className="text-neutral-300" />
            </button>
          ))}
        </div>
        <div className="border-t border-neutral-100 p-1.5">
          <button
            type="button"
            className="w-full cursor-pointer rounded-xl px-3 py-2 text-left text-[13px] font-medium text-rose-600 transition-colors hover:bg-rose-50"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  ),
);

ProfileMenuPreviewCard.displayName = "ProfileMenuPreviewCard";

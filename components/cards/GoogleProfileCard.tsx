"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profile_logo from "@/public/boy.png";

import { Google } from "@/icons/Google";
import { Search } from "@/icons/Search";

/**
 * Google-inspired profile card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content, images, and actions with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type GoogleProfileCardProps = {
  name?: string;
  email?: string;

  avatar?: StaticImageData | string;
  avatarAlt?: string;

  searchPlaceholder?: string;

  shortcuts?: string[];

  manageAccountLabel?: string;

  googleIcon?: ReactNode;
  searchIcon?: ReactNode;
  manageAccountButton?: ReactNode;

  onManageAccount?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const GoogleProfileCard = forwardRef<
  HTMLDivElement,
  GoogleProfileCardProps
>(
  (
    {
      className,

      name = "Bidyut Kundu",
      email = "bidyut.kundu.dev@gmail.com",

      avatar = profile_logo,
      avatarAlt = "Profile avatar",

      searchPlaceholder = "Search Google...",

      shortcuts = ["Gmail", "Drive", "Photos", "Cloud"],

      manageAccountLabel = "Manage Google Account",

      googleIcon,
      searchIcon,
      manageAccountButton,

      onManageAccount,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="google-profile-card"
        className={cn(
          "flex w-72 flex-col rounded-2xl border border-neutral-100 bg-white shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Top section — avatar + user details */}
        <div
          data-slot="google-profile-card-header"
          className="flex flex-col items-center gap-3 px-6 pt-7 pb-5"
        >
          {/* Avatar */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-neutral-200">
            <Image
              src={avatar}
              alt={avatarAlt}
              className="w-9 rounded-full"
              sizes="36px"
            />
          </div>

          {/* Name + email */}
          <div className="flex flex-col items-center gap-0.5">
            <h3
              title={name}
              className="text-[15px] leading-tight font-semibold tracking-tight text-neutral-900"
            >
              {name}
            </h3>
            <p title={email} className="text-[13px] text-neutral-500">
              {email}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-neutral-100" />

        {/* Search box */}
        <div className="px-5 pt-4">
          <div
            data-slot="google-profile-card-search"
            className="flex w-full items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 transition-colors focus-within:border-neutral-300 focus-within:bg-white"
          >
            {searchIcon ?? (
              <Search size={14} className="shrink-0 text-neutral-400" />
            )}
            <input
              type="text"
              placeholder={searchPlaceholder}
              aria-label={searchPlaceholder}
              className="w-full bg-transparent text-[13px] text-neutral-700 placeholder-neutral-400 outline-none"
            />
          </div>
        </div>

        {/* Shortcuts */}
        <div
          data-slot="google-profile-card-shortcuts"
          className="flex gap-2 px-5 pt-3"
        >
          {shortcuts.map((shortcut, index) => (
            <span
              key={`${shortcut}-${index}`}
              className="rounded-full border border-neutral-100 bg-white px-3.5 py-1.5 text-[9px] font-medium text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:bg-neutral-50"
            >
              {shortcut}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-5 mt-5 h-px bg-neutral-100" />

        {/* Action button */}
        <div data-slot="google-profile-card-actions" className="px-5 py-4">
          {manageAccountButton ?? (
            <button
              type="button"
              aria-label={manageAccountLabel}
              onClick={onManageAccount}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-800 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-neutral-950"
            >
              {googleIcon ?? <Google size={14} />}
              <span>{manageAccountLabel}</span>
            </button>
          )}
        </div>
      </div>
    );
  },
);

GoogleProfileCard.displayName = "GoogleProfileCard";

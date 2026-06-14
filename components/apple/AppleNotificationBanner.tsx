"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import { X } from "@/icons/X";

import profile from "@/public/boy.png";

/**
 * Apple Notification Banner built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */

export type AppleNotificationBannerProps = {
  title?: string;
  sender?: string;
  message?: string;
  time?: string;
  avatarSrc?: StaticImageData | string;
  avatarAlt?: string;
  showTriggerLabel?: string;
  onDismiss?: () => void;
  onShow?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const AppleNotificationBanner = forwardRef<
  HTMLDivElement,
  AppleNotificationBannerProps
>(
  (
    {
      className,
      title = "Messages",
      sender = "Sarah",
      message = "Hey! Are we still on for the design review today?",
      time = "now",
      avatarSrc = profile,
      avatarAlt = "App",
      showTriggerLabel = "Show notification",
      onDismiss,
      onShow,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <button
          type="button"
          data-slot="apple-notification-banner-trigger"
          onClick={() => {
            setVisible(true);
            onShow?.();
          }}
          className={cn(
            "cursor-pointer rounded-xl bg-[#f2f2f7] px-4 py-2 text-xs font-medium",
            className,
          )}
        >
          {showTriggerLabel}
        </button>
      );
    }

    return (
      <div
        ref={ref}
        data-slot="apple-notification-banner"
        className={cn(
          "w-80 rounded-[1.25rem] border border-white/60 bg-white/80 p-3 font-sans shadow-xl shadow-black/10 backdrop-blur-2xl",
          className,
        )}
        {...props}
      >
        <div className="flex items-start gap-3">
          <div
            data-slot="apple-notification-banner-avatar"
            className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[0.65rem] shadow-sm"
          >
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>

          <div
            data-slot="apple-notification-banner-content"
            className="min-w-0 flex-1"
          >
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-semibold text-neutral-900">
                {title}
              </p>
              <span className="text-[11px] text-neutral-400">{time}</span>
            </div>
            <p className="mt-0.5 text-[13px] leading-snug text-neutral-800">
              <span className="font-semibold">{sender}</span>: {message}
            </p>
          </div>

          <button
            type="button"
            data-slot="apple-notification-banner-dismiss"
            onClick={() => {
              setVisible(false);
              onDismiss?.();
            }}
            className="mt-0.5 shrink-0 cursor-pointer text-xs text-neutral-400"
            aria-label="Dismiss notification"
          >
            <X size={12} />
          </button>
        </div>
      </div>
    );
  },
);

AppleNotificationBanner.displayName = "AppleNotificationBanner";

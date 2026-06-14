"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import { Key } from "@/icons/Key";
import { MapPinned } from "@/icons/MapPinned";

/**
 * Apple Find My Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleFindMyCardProps = {
  title?: string;
  status?: string;
  lastSeen?: string;
  deviceIcon?: ReactNode;
  playSoundLabel?: string;
  directionsLabel?: string;
  onPlaySound?: () => void;
  onDirections?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const AppleFindMyCard = forwardRef<HTMLDivElement, AppleFindMyCardProps>(
  (
    {
      className,
      title = "AirTag — Keys",
      status = "Nearby · Living Room",
      lastSeen = "Last seen: Just now",
      deviceIcon = <Key />,
      playSoundLabel = "Play Sound",
      directionsLabel = "Directions",
      onPlaySound,
      onDirections,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-find-my-card"
      className={cn(
        "w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-xl shadow-black/10",
        className,
      )}
      {...props}
    >
      <div
        data-slot="apple-find-my-card-map"
        className="relative h-40 bg-[#e8e4dc]"
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(#c8c4bc 1px, transparent 1px), linear-gradient(90deg, #c8c4bc 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border-2 border-[#007AFF]/40 bg-[#007AFF]/20">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007AFF] shadow-lg shadow-blue-300">
              <span className="text-sm text-white">
                <MapPinned />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div data-slot="apple-find-my-card-details" className="p-4">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f2f2f7] text-lg">
            {deviceIcon}
          </div>
          <div>
            <h4 className="text-[15px] font-semibold text-neutral-900">
              {title}
            </h4>
            <p className="text-[13px] font-medium text-[#34C759]">{status}</p>
          </div>
        </div>

        <div data-slot="apple-find-my-card-actions" className="flex gap-2">
          <button
            type="button"
            onClick={onPlaySound}
            className="h-10 flex-1 cursor-pointer rounded-xl bg-[#007AFF] text-[13px] font-medium text-white transition-colors hover:bg-[#0066d6]"
          >
            {playSoundLabel}
          </button>
          <button
            type="button"
            onClick={onDirections}
            className="h-10 flex-1 cursor-pointer rounded-xl bg-[#f2f2f7] text-[13px] font-medium text-[#007AFF] transition-colors hover:bg-neutral-200"
          >
            {directionsLabel}
          </button>
        </div>

        <p
          data-slot="apple-find-my-card-last-seen"
          className="mt-3 text-center text-[11px] text-neutral-400"
        >
          {lastSeen}
        </p>
      </div>
    </div>
  ),
);

AppleFindMyCard.displayName = "AppleFindMyCard";

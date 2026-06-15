"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

import { Star } from "@/icons/Star";

/**
 * Apple Store App Tile built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */

export type AppleStoreAppTileProps = {
  appIcon?: string;
  appName?: string;
  category?: string;
  rating?: number;
  reviewCount?: string;
  getLabel?: string;
  purchasesLabel?: string;
  tags?: string[];
  onGet?: () => void;
  onPurchases?: () => void;
  onTagClick?: (tag: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultTags = ["Cards", "Maps", "AI", "Auth"];

export const AppleStoreAppTile = forwardRef<
  HTMLDivElement,
  AppleStoreAppTileProps
>(
  (
    {
      className,
      appIcon = "A",
      appName = "AppUI Components",
      category = "Design & Developer Tools",
      rating = 5,
      reviewCount = "4.9 · 2.4K",
      getLabel = "GET",
      purchasesLabel = "In-App Purchases",
      tags = defaultTags,
      onGet,
      onPurchases,
      onTagClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-store-app-tile"
      className={cn(
        "w-72 overflow-hidden rounded-[1.25rem] bg-white font-sans shadow-lg shadow-black/5",
        className,
      )}
      {...props}
    >
      <div data-slot="apple-store-app-tile-header" className="flex gap-3 p-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1rem] bg-linear-to-br from-teal-500 to-cyan-600 shadow-md">
          <span className="text-2xl font-bold text-white">{appIcon}</span>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-[15px] font-semibold text-neutral-900">
            {appName}
          </h4>
          <p className="mt-0.5 text-[13px] text-neutral-500">{category}</p>
          <div className="mt-1.5 flex items-center gap-1">
            {Array.from({ length: rating }).map((_, index) => (
              <Star key={index} size={10} className="text-[#FF9500]" />
            ))}
            <span className="ml-1 text-[11px] text-neutral-400">
              {reviewCount}
            </span>
          </div>
        </div>
      </div>

      <div
        data-slot="apple-store-app-tile-actions"
        className="flex gap-2 px-4 pb-4"
      >
        <button
          type="button"
          onClick={onGet}
          className="h-9 flex-1 cursor-pointer rounded-full bg-[#f2f2f7] text-[15px] font-semibold text-[#007AFF] transition-colors hover:bg-neutral-200"
        >
          {getLabel}
        </button>
        <button
          type="button"
          onClick={onPurchases}
          className="h-9 cursor-pointer rounded-full bg-[#f2f2f7] px-4 text-[13px] font-medium text-[#007AFF] transition-colors hover:bg-neutral-200"
        >
          {purchasesLabel}
        </button>
      </div>

      <div
        data-slot="apple-store-app-tile-tags"
        className="flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 pb-3 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            onClick={() => onTagClick?.(tag)}
            className={cn(
              "shrink-0 rounded-full bg-[#f2f2f7] px-2.5 py-1 text-[11px] text-neutral-600",
              onTagClick && "cursor-pointer",
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  ),
);

AppleStoreAppTile.displayName = "AppleStoreAppTile";

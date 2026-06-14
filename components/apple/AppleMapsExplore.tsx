"use client";

import Image, { type StaticImageData } from "next/image";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import bg from "@/public/bg.png";
import { House } from "@/icons/House";
import { Leaf } from "@/icons/Leaf";
import { MapPinned } from "@/icons/MapPinned";
import { Soup } from "@/icons/Soup";

/**
 * Apple Maps Explore built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */

export type AppleMapsExploreTag = {
  icon: ReactNode;
  label: string;
};

export type AppleMapsExploreProps = {
  imageSrc?: StaticImageData | string;
  imageAlt?: string;
  badgeLabel?: string;
  guideLabel?: string;
  title?: string;
  description?: string;
  tags?: AppleMapsExploreTag[];
  onTagClick?: (tag: AppleMapsExploreTag) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultTags: AppleMapsExploreTag[] = [
  { icon: <Leaf size={11} />, label: "Parks" },
  { icon: <Soup size={11} />, label: "Food" },
  { icon: <House size={11} />, label: "Stay" },
];

export const AppleMapsExplore = forwardRef<
  HTMLDivElement,
  AppleMapsExploreProps
>(
  (
    {
      className,
      imageSrc = bg,
      imageAlt = "Map area",
      badgeLabel = "Explore",
      guideLabel = "Guide",
      title = "Sundarbans",
      description = "Nature · Wildlife · 47 places",
      tags = defaultTags,
      onTagClick,
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="apple-maps-explore"
      className={cn(
        "w-72 overflow-hidden rounded-[1.25rem] font-sans shadow-xl shadow-black/10",
        className,
      )}
      {...props}
    >
      <div data-slot="apple-maps-explore-hero" className="relative h-48">
        <Image src={imageSrc} alt={imageAlt} fill sizes="288px" className="object-cover" />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/20" />

        <div
          data-slot="apple-maps-explore-badge"
          className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md"
        >
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-neutral-900">
            <MapPinned size={12} />
            {badgeLabel}
          </span>
        </div>

        <div
          data-slot="apple-maps-explore-content"
          className="absolute bottom-0 p-4"
        >
          <p className="text-[11px] font-semibold tracking-wider text-white/60 uppercase">
            {guideLabel}
          </p>
          <h3 className="mt-0.5 text-xl leading-tight font-bold text-white">
            {title}
          </h3>
          <p className="mt-1 text-[13px] text-white/70">{description}</p>

          <div
            data-slot="apple-maps-explore-tags"
            className="mt-3 flex flex-wrap gap-2"
          >
            {tags.map((tag) => (
              <span
                key={tag.label}
                onClick={() => onTagClick?.(tag)}
                className={cn(
                  "flex items-center gap-1.5 rounded-full border border-white/20 bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md",
                  onTagClick && "cursor-pointer",
                )}
              >
                {tag.icon}
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
);

AppleMapsExplore.displayName = "AppleMapsExplore";

"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";


import { Heart } from "@/icons/Heart";
import { Send } from "@/icons/Send";

/**
 * Snapchat-style story ring card with tap-to-advance.
 *
 * Replace demo story content with your own.
 */
export type SnapchatStoryCardProps = {
  username?: string;
  storyLabel?: string;
  image?: string;
  avatar?: string;
  onNext?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const SnapchatStoryCard = forwardRef<
  HTMLDivElement,
  SnapchatStoryCardProps
>(
  (
    {
      className,
      username = "bidyut.dev",
      storyLabel = "New components drop",
      image = "/dithar.png",
      avatar = "/boy.png",
      onNext,
      ...props
    },
    ref,
  ) => {
    const [progress, setProgress] = useState(0);
    const [liked, setLiked] = useState(false);

    const advance = () => {
      setProgress((p) => {
        const next = p >= 100 ? 0 : p + 34;
        if (next !== p) onNext?.();
        return next >= 100 ? 0 : next;
      });
    };

    return (
      <div
        ref={ref}
        data-slot="snapchat-story-card"
        className={cn(
          "w-56 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <button
          type="button"
          onClick={advance}
          className="relative block h-72 w-full cursor-pointer"
          aria-label="Advance story"
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="224px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/40" />

          <div className="absolute top-3 right-3 left-3 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/30"
              >
                <div
                  className="h-full bg-white transition-all duration-300"
                  style={{
                    width: `${i === 0 ? progress : i === 1 && progress > 33 ? progress - 33 : i === 2 && progress > 66 ? progress - 66 : 0}%`,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="absolute top-8 left-3 flex items-center gap-2">
            <div className="rounded-full p-0.5 ring-2 ring-[#FFFC00]">
              <Image
                src={avatar}
                alt={username}
                width={28}
                height={28}
                className="rounded-full"
              />
            </div>
            <span className="text-[12px] font-semibold text-white">
              {username}
            </span>
          </div>

          <p className="absolute right-3 bottom-12 left-3 text-sm font-medium text-white">
            {storyLabel}
          </p>
        </button>

        <div className="flex items-center justify-around border-t border-neutral-100 py-2">
          <button
            type="button"
            onClick={() => setLiked(!liked)}
            className="cursor-pointer p-2 text-neutral-500"
            aria-label="Like story"
          >
            <Heart
              size={18}
              className={liked ? "fill-rose-500 text-rose-500" : ""}
            />
          </button>
          <button
            type="button"
            className="cursor-pointer p-2 text-neutral-500"
            aria-label="Share story"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    );
  },
);

SnapchatStoryCard.displayName = "SnapchatStoryCard";

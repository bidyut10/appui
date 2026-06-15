"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Check } from "@/icons/Check";

export type BlobProfileCardProps = {
  name?: string;
  handle?: string;
  image?: string;
} & ComponentPropsWithoutRef<"div">;

export const BlobProfileCard = forwardRef<HTMLDivElement, BlobProfileCardProps>(
  (
    {
      className,
      name = "Natalie Portman",
      handle = "@natalieportman",
      image = "/dbg.png",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="blob-profile-card"
      className={cn(
        "flex h-52 w-44 flex-col items-center justify-center rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div
        className="relative mb-3 h-24 w-24 overflow-hidden"
        style={{
          borderRadius: "60% 40% 55% 45% / 55% 45% 55% 45%",
        }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <p className="flex items-center gap-1 text-sm font-bold text-neutral-900">
        {name}
        <Check size={12} className="text-[#D9F26D]" />
      </p>
      <p className="text-[11px] text-neutral-500">{handle}</p>
    </div>
  ),
);

BlobProfileCard.displayName = "BlobProfileCard";

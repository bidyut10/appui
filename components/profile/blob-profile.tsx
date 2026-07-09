"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

// Blob-shaped profile card with verified badge — swap name, handle, and image via props.
export type BlobProfileCardProps = Readonly<
  {
    // Display name on the profile card.
    name?: string;
    // Social handle shown below the name.
    handle?: string;
    // Profile image URL.
    image?: string;
  } & ComponentPropsWithoutRef<"div">
>;

export const BlobProfileCard = forwardRef<HTMLDivElement, BlobProfileCardProps>(
  (
    {
      className,
      name = "Bidyut Kundu",
      handle = "@bidyut.dev",
      image = "/dith-homee.png",
      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="blob-profile-card"
      className={cn(
        "flex h-44 w-44 flex-col items-center justify-center rounded-3xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
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
        <Check size={12} className="text-[#D9F26D]" aria-hidden />
      </p>
      <p className="text-[11px] text-neutral-500">{handle}</p>
    </div>
  ),
);

BlobProfileCard.displayName = "BlobProfileCard";

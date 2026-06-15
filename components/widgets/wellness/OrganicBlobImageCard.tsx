"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

export type OrganicBlobImageCardProps = {
  image?: string;
} & ComponentPropsWithoutRef<"div">;

export const OrganicBlobImageCard = forwardRef<
  HTMLDivElement,
  OrganicBlobImageCardProps
>(({ className, image = "/dbg.png", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="organic-blob-image-card"
    className={cn(
      "flex h-52 w-44 items-center justify-center rounded-3xl border border-neutral-100 bg-white p-3 shadow-sm",
      className,
    )}
    {...props}
  >
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: "45% 55% 50% 50% / 55% 45% 55% 45%",
      }}
    >
      <Image src={image} alt="" fill className="object-cover" sizes="160px" />
    </div>
  </div>
));

OrganicBlobImageCard.displayName = "OrganicBlobImageCard";

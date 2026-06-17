import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

export type PhoneMockupCardProps = Readonly<ComponentPropsWithoutRef<"div">>;

// Production-ready Phone Mockup component — styled with Tailwind CSS.
export const PhoneMockupCard = forwardRef<HTMLDivElement, PhoneMockupCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="phone-mockup-card"
      className={cn("flex flex-col items-center font-sans", className)}
      {...props}
    >
      <div className="relative h-80 w-44 rounded-4xl bg-neutral-900 p-2 shadow-lg shadow-black/5 select-none">
        <div className="absolute top-3 left-1/2 z-10 h-3.5 w-12 -translate-x-1/2 rounded-full bg-neutral-900" />
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white">
          <Image
            src="/wallpaper-3.png"
            alt="App screen"
            fill
            sizes="160px"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4">
            <p className="mt-0.5 text-[9px] text-white/60">Component preview</p>
          </div>
        </div>
      </div>
      <p className="mt-3 font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
        iPhone 15 Pro
      </p>
    </div>
  ),
);

PhoneMockupCard.displayName = "PhoneMockupCard";

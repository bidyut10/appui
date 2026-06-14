import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import screenContent from "@/public/dbg.png";

/**
 * Phone Mockup Card built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type PhoneMockupCardProps = ComponentPropsWithoutRef<"div">;

export const PhoneMockupCard = forwardRef<HTMLDivElement, PhoneMockupCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="phone-mockup-card"
      className={cn("flex flex-col items-center font-sans", className)}
      {...props}
    >
      <div className="relative h-[320px] w-44 rounded-[2rem] bg-neutral-900 p-2 shadow-2xl shadow-neutral-900/30">
        <div className="absolute top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-900" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] bg-white">
          <Image
            src={screenContent}
            alt="App screen"
            fill
            sizes="160px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-x-4 bottom-4">
            <p className="text-xs font-semibold text-white">AppUI Mobile</p>
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

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

export type BrowserMockupCardProps = Readonly<ComponentPropsWithoutRef<"div">>;

// Production-ready Browser Mockup component — styled with Tailwind CSS.
export const BrowserMockupCard = forwardRef<
  HTMLDivElement,
  BrowserMockupCardProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="browser-mockup-card"
    className={cn("w-xl font-sans", className)}
    {...props}
  >
    <div className="flex items-center gap-2 rounded-t-xl bg-neutral-50 px-3 py-2">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </div>
      <div className="flex h-6 flex-1 items-center rounded-md bg-white px-2">
        <span className="font-mono text-[9px] text-neutral-400">
          opensourceui.in/components
        </span>
      </div>
    </div>
    <div className="relative h-80 overflow-hidden rounded-b-xl border-x border-b border-neutral-200 bg-white">
      <Image
        src="/wallpaper-4.png"
        alt="Website"
        fill
        sizes="320px"
        className="object-cover object-top"
      />
    </div>
  </div>
));

BrowserMockupCard.displayName = "BrowserMockupCard";

"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { QrCode } from "@/icons/QrCode";
import { Bell } from "@/icons/Bell";
import { Wifi } from "@/icons/Wifi";
import { Share } from "@/icons/Share";


export type MinimalDotPatternCardProps = {
  pattern?: "flower" | "cloud";
} & ComponentPropsWithoutRef<"div">;

export const MinimalDotPatternCard = forwardRef<
  HTMLDivElement,
  MinimalDotPatternCardProps
>(({ className, pattern = "flower", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="minimal-dot-pattern-card"
    className={cn(
      "flex h-40 w-40 max-w-full items-center justify-center overflow-hidden rounded-[1.75rem] bg-black shadow-lg",
      className,
    )}
    {...props}
  >
    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: 49 }).map((_, i) => {
        const row = Math.floor(i / 7);
        const col = i % 7;
        const cx = 3;
        const cy = 3;
        const dist = Math.sqrt((row - cy) ** 2 + (col - cx) ** 2);
        const show =
          pattern === "flower"
            ? dist < 3 || (row === 0 && col === 3) || (row === 6 && col === 3)
            : dist < 2.5 && row > 1;
        return (
          <span
            key={i}
            className={cn(
              "h-1 w-1 rounded-full",
              show ? "bg-white" : "bg-transparent",
            )}
          />
        );
      })}
    </div>
  </div>
));

MinimalDotPatternCard.displayName = "MinimalDotPatternCard";

export type MinimalPhotoCardProps = {
  image?: string;
} & ComponentPropsWithoutRef<"div">;

export const MinimalPhotoCard = forwardRef<
  HTMLDivElement,
  MinimalPhotoCardProps
>(({ className, image = "/dbg.png", ...props }, ref) => (
  <div
    ref={ref}
    data-slot="minimal-photo-card"
    className={cn(
      "relative h-40 w-40 max-w-full overflow-hidden rounded-[1.75rem] bg-neutral-200 shadow-lg",
      className,
    )}
    {...props}
  >
    <Image
      src={image}
      alt=""
      fill
      className="object-cover contrast-125 grayscale"
      sizes="160px"
    />
  </div>
));

MinimalPhotoCard.displayName = "MinimalPhotoCard";

export type MinimalStatusDockWidgetProps = ComponentPropsWithoutRef<"div">;

export const MinimalStatusDockWidget = forwardRef<
  HTMLDivElement,
  MinimalStatusDockWidgetProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="minimal-status-dock-widget"
    className={cn(
      "flex h-12 w-72 max-w-full items-center justify-between rounded-full bg-black px-4 font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    {[
      { icon: <QrCode size={14} />, label: "QR", active: false },
      { icon: <Bell size={14} />, label: "DND", active: true },
      { icon: <Wifi size={14} />, label: "WiFi", active: false },
      { icon: <Share size={14} />, label: "Cast", active: false },
    ].map((item) => (
      <button
        key={item.label}
        type="button"
        aria-label={item.label}
        className={cn(
          "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors",
          item.active
            ? "bg-[#eb0000] text-white"
            : "text-neutral-400 hover:text-white",
        )}
      >
        {item.icon}
      </button>
    ))}
  </div>
));

MinimalStatusDockWidget.displayName = "MinimalStatusDockWidget";

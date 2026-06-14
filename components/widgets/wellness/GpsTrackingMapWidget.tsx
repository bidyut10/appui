"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Locate } from "@/icons/Locate";
import { Pin } from "@/icons/Pin";
import { Battery } from "@/icons/Battery";


export type GpsTrackingMapWidgetProps = ComponentPropsWithoutRef<"div">;

export const GpsTrackingMapWidget = forwardRef<
  HTMLDivElement,
  GpsTrackingMapWidgetProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="gps-tracking-map-widget"
    className={cn(
      "relative h-52 w-64 overflow-hidden rounded-3xl border border-neutral-100 bg-[#f0f4f0] font-sans shadow-lg",
      className,
    )}
    {...props}
  >
    <div className="absolute inset-0 opacity-40">
      <svg className="h-full w-full" viewBox="0 0 256 208">
        <path
          d="M0 80 Q64 60 128 80 T256 80"
          fill="none"
          stroke="#ccc"
          strokeWidth="8"
        />
        <path
          d="M0 120 Q80 100 160 130 T256 120"
          fill="none"
          stroke="#ddd"
          strokeWidth="6"
        />
        <path d="M40 0 L40 208" fill="none" stroke="#e5e5e5" strokeWidth="4" />
        <path
          d="M120 0 L120 208"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="4"
        />
        <path
          d="M200 0 L200 208"
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="4"
        />
      </svg>
    </div>

    <div className="absolute top-3 left-3 h-8 w-8 overflow-hidden rounded-full border-2 border-white shadow">
      <Image src="/dbg.png" alt="" fill className="object-cover" sizes="32px" />
    </div>
    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow">
      <Pin size={14} className="text-[#F9D6F0]" />
    </div>

    <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3">
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
      >
        <Battery size={14} className="text-neutral-600" />
      </button>
      <button
        type="button"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow"
      >
        <span className="h-4 w-4 rounded-sm bg-[#F9D6F0]" />
      </button>
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow"
      >
        <Locate size={14} />
      </button>
    </div>
  </div>
));

GpsTrackingMapWidget.displayName = "GpsTrackingMapWidget";

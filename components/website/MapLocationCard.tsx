import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";
import { Phone } from "@/icons/Phone";

export const MapLocationCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative h-36 bg-neutral-50/50">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 19px, #d4d4d4 19px, #d4d4d4 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, #d4d4d4 19px, #d4d4d4 20px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-500 shadow-lg">
          <Location size={14} className="text-white" />
        </div>
        <div className="mx-auto mt-0.5 h-2 w-2 rounded-full bg-red-500/30 blur-sm" />
      </div>
    </div>
    <div className="p-4">
      <h4 className="text-sm font-semibold text-neutral-900">
        AppUI Headquarters
      </h4>
      <p className="mt-0.5 flex items-center gap-1 text-[11px] text-neutral-500">
        <Location size={10} /> 42 Park Street, Kolkata, WB 700016
      </p>
      <div className="mt-3 flex gap-2">
        <button className="h-8 flex-1 cursor-pointer rounded-lg bg-neutral-900 text-[11px] font-medium text-white transition-colors hover:bg-neutral-950">
          Get Directions
        </button>
        <button className="flex h-8 cursor-pointer items-center justify-center gap-1 rounded-lg border border-neutral-200 px-3 text-[11px] font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
          <Phone size={12} />
          Call
        </button>
      </div>
    </div>
  </div>
));
MapLocationCard.displayName = "MapLocationCard";

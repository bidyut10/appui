import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";
import { Phone } from "@/icons/Phone";

export const MapLocationCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
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
        <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white shadow-lg flex items-center justify-center">
          <Location size={14} className="text-white" />
        </div>
        <div className="w-2 h-2 bg-red-500/30 rounded-full mx-auto mt-0.5 blur-sm" />
      </div>
    </div>
    <div className="p-4">
      <h4 className="text-sm font-semibold text-neutral-900">
        AppUI Headquarters
      </h4>
      <p className="text-[11px] text-neutral-500 mt-0.5 flex items-center gap-1">
        <Location size={10} /> 42 Park Street, Kolkata, WB 700016
      </p>
      <div className="flex gap-2 mt-3">
        <button className="flex-1 h-8 bg-neutral-900 text-white text-[11px] font-medium rounded-lg hover:bg-neutral-950 transition-colors cursor-pointer">
          Get Directions
        </button>
        <button className="h-8 px-3 border border-neutral-200 text-neutral-600 text-[11px] flex items-center justify-center gap-1 font-medium rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer">
          <Phone size={12}/>
          Call
        </button>
      </div>
    </div>
  </div>
));
MapLocationCard.displayName = "MapLocationCard";

import React, { forwardRef } from "react";
import Image from "next/image";
import coverImage from "@/public/dbg.png";
import { Location } from "@/icons/Location";
import { Clock } from "@/icons/Clock";

export const EventTicketCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans flex ${className}`}
    {...props}
  >
    <div className="relative w-24 shrink-0 overflow-hidden">
      <Image src={coverImage} alt="Event" fill className="object-cover" />
      <div className="absolute inset-0 bg-violet-900/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="text-[10px] font-mono uppercase tracking-wider opacity-70">Jun</span>
        <span className="text-2xl font-light leading-none">14</span>
      </div>
    </div>

    <div className="flex-1 p-4 relative">
      <div className="absolute left-0 top-3 bottom-3 w-px border-l border-dashed border-neutral-200" />
      <div className="absolute -left-2 top-[-8px] w-4 h-4 bg-[#fafafa] rounded-full border border-neutral-100" style={{ boxShadow: "inset 0 0 0 4px white" }} />
      <div className="absolute -left-2 bottom-[-8px] w-4 h-4 bg-[#fafafa] rounded-full border border-neutral-100" style={{ boxShadow: "inset 0 0 0 4px white" }} />

      <span className="text-[10px] font-mono uppercase tracking-widest text-violet-600">Live Event</span>
      <h3 className="text-sm font-semibold text-neutral-900 mt-1 leading-snug">
        Design Systems Conference 2026
      </h3>
      <div className="flex items-center gap-1.5 mt-2 text-[11px] text-neutral-500">
        <Clock size={10} />
        <span>10:00 AM — 6:00 PM</span>
      </div>
      <div className="flex items-center gap-1.5 mt-1 text-[11px] text-neutral-500">
        <Location size={10} />
        <span>Kolkata, India</span>
      </div>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-100">
        <span className="text-[10px] font-mono text-neutral-400">#DS2026-0042</span>
        <span className="text-xs font-semibold text-neutral-900">VIP Pass</span>
      </div>
    </div>
  </div>
));
EventTicketCard.displayName = "EventTicketCard";

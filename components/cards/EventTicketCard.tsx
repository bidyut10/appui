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
    className={`group flex w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative w-24 shrink-0 overflow-hidden">
      <Image src={coverImage} alt="Event" fill className="object-cover" />
      <div className="absolute inset-0 bg-violet-900/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <span className="font-mono text-[10px] tracking-wider uppercase opacity-70">
          Jun
        </span>
        <span className="text-2xl leading-none font-light">14</span>
      </div>
    </div>

    <div className="relative flex-1 p-4">
      <div className="absolute top-3 bottom-3 left-0 w-px border-l border-dashed border-neutral-200" />
      <div
        className="absolute top-[-8px] -left-2 h-4 w-4 rounded-full border border-neutral-100 bg-[#fafafa]"
        style={{ boxShadow: "inset 0 0 0 4px white" }}
      />
      <div
        className="absolute bottom-[-8px] -left-2 h-4 w-4 rounded-full border border-neutral-100 bg-[#fafafa]"
        style={{ boxShadow: "inset 0 0 0 4px white" }}
      />

      <span className="font-mono text-[10px] tracking-widest text-violet-600 uppercase">
        Live Event
      </span>
      <h3 className="mt-1 text-sm leading-snug font-semibold text-neutral-900">
        Design Systems Conference 2026
      </h3>
      <div className="mt-2 flex items-center gap-1.5 text-[11px] text-neutral-500">
        <Clock size={10} />
        <span>10:00 AM — 6:00 PM</span>
      </div>
      <div className="mt-1 flex items-center gap-1.5 text-[11px] text-neutral-500">
        <Location size={10} />
        <span>Kolkata, India</span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
        <span className="font-mono text-[10px] text-neutral-400">
          #DS2026-0042
        </span>
        <span className="text-xs font-semibold text-neutral-900">VIP Pass</span>
      </div>
    </div>
  </div>
));
EventTicketCard.displayName = "EventTicketCard";

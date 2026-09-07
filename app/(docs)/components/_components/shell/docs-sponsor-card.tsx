"use client";

import { ChevronRight, MoveRight } from "lucide-react";

import { ContactEmailTrigger } from "@/components/contact/contact-email";

export function DocsSponsorCard() {
  return (
    <div className="shrink-0 border-t border-neutral-100 px-6 py-5">
      <ContactEmailTrigger
        title="Become a sponsor"
        description="Feel free to copy my email and send over your brand details. I’ll share the sponsorship details with you."
        className="group block w-full rounded-lg border-2 border-neutral-900 bg-neutral-900 p-4 text-left text-white outline-none transition-colors hover:border-neutral-800 hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
            Open slot
          </span>
          <span className="rounded-sm bg-rose-500 px-1.5 py-px font-sans text-[8px] font-medium tracking-wide text-white uppercase">
            Available
          </span>
        </div>

        <p className="mt-2 font-serif text-lg leading-snug text-white">
          Sponsor this sidebar.
        </p>

        <p className="mt-1.5 font-sans text-xs leading-relaxed text-neutral-400">
          Your product here — seen by every dev browsing components.
        </p>

        <span className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-white px-3 py-2.5 font-sans text-xs font-semibold text-neutral-900 transition-colors group-hover:bg-neutral-100">
          Become a sponsor
          <span className="relative inline-flex size-3 shrink-0 items-center justify-center">
            <ChevronRight
              size={12}
              strokeWidth={3}
              className="ease-smooth text-neutral-900 transition-[opacity,transform] duration-500 group-hover:translate-x-0.5 group-hover:scale-95 group-hover:opacity-0"
            />
            <MoveRight
              size={12}
              strokeWidth={2.5}
              className="ease-smooth absolute -translate-x-0.5 scale-95 text-neutral-900 opacity-0 transition-[opacity,transform] duration-500 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
            />
          </span>
        </span>
      </ContactEmailTrigger>
    </div>
  );
}

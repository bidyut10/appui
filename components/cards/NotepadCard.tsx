import React, { forwardRef } from "react";
import { Bookmark } from "@/icons/Bookmark";

export const NotepadCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-60 border border-[#e6e2bc] bg-[#fffdf0] p-5 font-sans shadow-[5px_5px_0px_#e6e2bc] ${className}`}
    {...props}
  >
    <div className="absolute top-3 right-3">
      <Bookmark className="text-[#a39e76]" />
    </div>
    <h5 className="mb-3 border-b border-[#e6e2bc] pb-1 font-mono text-[10px] tracking-widest text-[#a39e76] uppercase">
      Note to self
    </h5>
    <p className="font-serif text-sm leading-relaxed text-[#5c5a4a] italic">
      &quot;Design is not just what it looks like and feels like. Design is how
      it works.&quot;
    </p>
    <p className="mt-4 text-right text-[10px] text-[#a39e76]">— S. Jobs</p>
    <div className="mt-4 space-y-2">
      {["Ship the MVP", "Write tests", "Review PR #42"].map((item) => (
        <div
          key={item}
          className="flex items-center gap-2 text-xs text-[#5c5a4a]"
        >
          <div className="h-3 w-3 shrink-0 border border-[#c4bf98]" />
          {item}
        </div>
      ))}
    </div>
  </div>
));
NotepadCard.displayName = "NotepadCard";

import React, { forwardRef } from "react";
import { Bookmark } from "@/icons/Bookmark";

export const NotepadCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-60 p-5 bg-[#fffdf0] border border-[#e6e2bc] shadow-[5px_5px_0px_#e6e2bc] relative font-sans ${className}`}
    {...props}
  >
    <div className="absolute top-3 right-3">
      <Bookmark className="text-[#a39e76]" />
    </div>
    <h5 className="font-mono text-[10px] uppercase text-[#a39e76] mb-3 border-b border-[#e6e2bc] pb-1 tracking-widest">
      Note to self
    </h5>
    <p className="font-serif text-sm text-[#5c5a4a] leading-relaxed italic">
      &quot;Design is not just what it looks like and feels like. Design is how it
      works.&quot;
    </p>
    <p className="mt-4 text-[10px] text-[#a39e76] text-right">— S. Jobs</p>
    <div className="mt-4 space-y-2">
      {["Ship the MVP", "Write tests", "Review PR #42"].map((item) => (
        <div
          key={item}
          className="flex items-center gap-2 text-xs text-[#5c5a4a]"
        >
          <div className="w-3 h-3 border border-[#c4bf98] shrink-0" />
          {item}
        </div>
      ))}
    </div>
  </div>
));
NotepadCard.displayName = "NotepadCard";

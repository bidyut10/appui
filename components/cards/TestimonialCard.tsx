import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import { Star } from "@/icons/Star";
import { QuoteRight } from "@/icons/QuoteRight";

export const TestimonialCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 p-6 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans relative ${className}`}
    {...props}
  >
    <div className="absolute top-5 right-5 text-neutral-100 text-6xl font-serif leading-none select-none">
      <QuoteRight size={24}/>
    </div>

    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} className="text-amber-400" />
      ))}
    </div>

    <p className="text-sm text-neutral-700 leading-relaxed mb-6 relative z-10">
      These components saved us weeks of design work. The attention to detail
      is incredible — every card feels production-ready out of the box.
    </p>

    <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neutral-100">
        <Image src={profileImage} alt="Reviewer" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-sm font-semibold text-neutral-900">Sarah Chen</p>
        <p className="text-[11px] text-neutral-400">Lead Designer · Figma</p>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = "TestimonialCard";

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
    className={`relative w-72 rounded-2xl border border-neutral-100 bg-white p-6 font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="absolute top-5 right-5 font-serif text-6xl leading-none text-neutral-100 select-none">
      <QuoteRight size={24} />
    </div>

    <div className="mb-4 flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={12} className="text-amber-400" />
      ))}
    </div>

    <p className="relative z-10 mb-6 text-sm leading-relaxed text-neutral-700">
      These components saved us weeks of design work. The attention to detail is
      incredible — every card feels production-ready out of the box.
    </p>

    <div className="flex items-center gap-3 border-t border-neutral-100 pt-4">
      <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-neutral-100">
        <Image
          src={profileImage}
          alt="Reviewer"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-neutral-900">Sarah Chen</p>
        <p className="text-[11px] text-neutral-400">Lead Designer · Figma</p>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = "TestimonialCard";

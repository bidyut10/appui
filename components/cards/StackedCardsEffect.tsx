import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import bgImage from "@/public/bg.png";

export const StackedCardsEffect = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative w-56 h-64 group font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-x-4 top-8 bottom-0 bg-neutral-200 rounded-2xl rotate-[-6deg] group-hover:rotate-[-8deg] transition-transform duration-500" />
    <div className="absolute inset-x-2 top-4 bottom-0 bg-neutral-100 border border-neutral-200 rounded-2xl rotate-[3deg] group-hover:rotate-[5deg] transition-transform duration-500" />

    <div className="absolute inset-0 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden group-hover:-translate-y-1 transition-transform duration-500">
      <div className="relative h-28 overflow-hidden">
        <Image src={bgImage} alt="Card" fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full overflow-hidden border border-neutral-100">
            <Image src={profileImage} alt="User" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold text-neutral-900">John Doe</p>
            <p className="text-[10px] text-neutral-400">3 new cards</p>
          </div>
        </div>
        <p className="text-[11px] text-neutral-500 leading-relaxed">
          Your saved design collection with 12 components ready to use.
        </p>
        <div className="flex gap-1.5 mt-3">
          {["UI", "Cards", "Nav"].map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-neutral-100 text-[9px] font-medium text-neutral-600 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
));
StackedCardsEffect.displayName = "StackedCardsEffect";

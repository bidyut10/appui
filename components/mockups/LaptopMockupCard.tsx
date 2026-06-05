import React, { forwardRef } from "react";
import Image from "next/image";
import screenContent from "@/public/bg.png";

export const LaptopMockupCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex flex-col items-center font-sans ${className}`} {...props}>
    <div className="w-72 bg-neutral-800 rounded-t-xl p-2 pb-0 shadow-xl">
      <div className="relative h-44 bg-neutral-900 rounded-t-lg overflow-hidden">
        <Image src={screenContent} alt="Dashboard" fill className="object-cover object-top" />
      </div>
    </div>
    <div className="w-80 h-3 bg-linear-to-b from-neutral-300 to-neutral-400 rounded-b-xl relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-neutral-500 rounded-b-md" />
    </div>
    <p className="text-[10px] font-mono text-neutral-400 mt-2 uppercase tracking-wider">MacBook Pro</p>
  </div>
));
LaptopMockupCard.displayName = "LaptopMockupCard";

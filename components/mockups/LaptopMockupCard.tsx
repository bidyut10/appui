import React, { forwardRef } from "react";
import Image from "next/image";
import screenContent from "@/public/bg.png";

export const LaptopMockupCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex flex-col items-center font-sans ${className}`}
    {...props}
  >
    <div className="w-72 rounded-t-xl bg-neutral-800 p-2 pb-0 shadow-xl">
      <div className="relative h-44 overflow-hidden rounded-t-lg bg-neutral-900">
        <Image
          src={screenContent}
          alt="Dashboard"
          fill
          sizes="288px"
          className="object-cover object-top"
        />
      </div>
    </div>
    <div className="relative h-3 w-80 rounded-b-xl bg-linear-to-b from-neutral-300 to-neutral-400">
      <div className="absolute top-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-b-md bg-neutral-500" />
    </div>
    <p className="mt-2 font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
      MacBook Pro
    </p>
  </div>
));
LaptopMockupCard.displayName = "LaptopMockupCard";

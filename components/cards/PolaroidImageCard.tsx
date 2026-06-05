import React, { forwardRef } from "react";
import Image from "next/image";
import photo from "@/public/dithar.png";

export const PolaroidImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group w-56 ${className}`}
    {...props}
  >
    <div className="bg-white p-3 pb-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500 ease-out">
      <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={photo}
          alt="Polaroid photo"
          fill
          className="object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500"
        />
      </div>
      <p className="mt-4 text-center font-serif italic text-sm text-neutral-600">
        golden hour, kolkata ☀
      </p>
      <p className="text-center text-[10px] text-neutral-400 mt-0.5 font-mono">
        jun 2026
      </p>
    </div>
  </div>
));
PolaroidImageCard.displayName = "PolaroidImageCard";

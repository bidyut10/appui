import React, { forwardRef } from "react";
import Image from "next/image";
import photo from "@/public/dithar.png";

export const PolaroidImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`group w-56 ${className}`} {...props}>
    <div className="-rotate-2 bg-white p-3 pb-10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out group-hover:rotate-0">
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
        <Image
          src={photo}
          alt="Polaroid photo"
          fill
          className="object-cover sepia-[0.15] transition-all duration-500 group-hover:sepia-0"
        />
      </div>
      <p className="mt-4 text-center font-serif text-sm text-neutral-600 italic">
        Golden hour, Kolkata ☀
      </p>
      <p className="mt-0.5 text-center font-mono text-[10px] text-neutral-400">
        June, 2026
      </p>
    </div>
  </div>
));
PolaroidImageCard.displayName = "PolaroidImageCard";

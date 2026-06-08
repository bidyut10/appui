import React, { forwardRef } from "react";
import Image from "next/image";
import photo from "@/public/bh.png";

export const DuotoneImageCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative h-80 w-72 cursor-pointer overflow-hidden rounded-2xl shadow-lg ${className}`}
    {...props}
  >
    <Image src={photo} alt="Duotone" fill className="object-cover" />
    <div className="absolute inset-0 bg-neutral-600 opacity-80 mix-blend-color transition-opacity duration-500 group-hover:opacity-70" />
    <div className="absolute inset-0 bg-linear-to-t from-indigo-950/90 via-indigo-900/30 to-transparent" />
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
      <span className="mb-3 font-mono text-[10px] tracking-[0.3em] text-indigo-300 uppercase">
        Duotone
      </span>
      <h3 className="text-2xl leading-tight font-light tracking-tight text-white">
        Visual
        <br />
        <span className="font-bold">Identity</span>
      </h3>
      <p className="mt-3 text-xs leading-relaxed text-indigo-200/60">
        Bold color overlays for editorial photography
      </p>
    </div>
  </div>
));
DuotoneImageCard.displayName = "DuotoneImageCard";

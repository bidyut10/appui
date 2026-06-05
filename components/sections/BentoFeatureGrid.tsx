import React, { forwardRef } from "react";
import Image from "next/image";
import bgImage from "@/public/bg.png";
import { TailwindCSS } from "@/icons/TailwindCSS";
import { ReactJs } from "@/icons/ReactJs";
import { NextJs } from "@/icons/NextJs";
import { Typescript } from "@/icons/Typescript";

export const BentoFeatureGrid = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-80 grid grid-cols-2 grid-rows-3 gap-2 font-sans ${className}`}
    {...props}
  >
    <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-neutral-900 group">
      <Image
        src={bgImage}
        alt="Feature preview"
        fill
        className="object-cover opacity-60 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
          Flagship
        </span>
        <h3 className="text-white text-lg font-semibold mt-1 leading-tight">
          Ship interfaces
          <br />
          10× faster
        </h3>
      </div>
    </div>

    <div className="rounded-2xl bg-violet-50 border border-violet-100 p-3 flex flex-col justify-between group hover:bg-violet-100/80 transition-colors">
      <ReactJs size={20} className="text-violet-600" />
      <div>
        <p className="text-xs font-semibold text-violet-900">React 19</p>
        <p className="text-[10px] text-violet-600/70 mt-0.5">Server components ready</p>
      </div>
    </div>

    <div className="rounded-2xl bg-neutral-900 p-3 flex flex-col justify-between text-white">
      <p className="text-2xl font-light tracking-tight">50+</p>
      <p className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider">
        Components
      </p>
    </div>

    <div className="rounded-2xl bg-amber-50 border border-amber-100 p-3 flex items-center gap-2">
      <TailwindCSS size={18} />
      <Typescript size={18} />
      <NextJs size={18} />
    </div>

    <div className="rounded-2xl bg-linear-to-br from-fuchsia-500 to-violet-600 p-3 flex flex-col justify-center items-center text-white">
      <p className="text-[10px] font-mono uppercase tracking-widest opacity-70">Free</p>
      <p className="text-sm font-semibold mt-0.5">Open Source</p>
    </div>
  </div>
));
BentoFeatureGrid.displayName = "BentoFeatureGrid";

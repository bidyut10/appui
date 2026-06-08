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
    className={`grid w-80 grid-cols-2 grid-rows-3 gap-2 font-sans ${className}`}
    {...props}
  >
    <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-neutral-900">
      <Image
        src={bgImage}
        alt="Feature preview"
        fill
        className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">
          Flagship
        </span>
        <h3 className="mt-1 text-lg leading-tight font-semibold text-white">
          Ship interfaces
          <br />
          10× faster
        </h3>
      </div>
    </div>

    <div className="group flex flex-col justify-between rounded-2xl border border-violet-100 bg-violet-50 p-3 transition-colors hover:bg-violet-100/80">
      <ReactJs size={20} className="text-violet-600" />
      <div>
        <p className="text-xs font-semibold text-violet-900">React 19</p>
        <p className="mt-0.5 text-[10px] text-violet-600/70">
          Server components ready
        </p>
      </div>
    </div>

    <div className="flex flex-col justify-between rounded-2xl bg-neutral-900 p-3 text-white">
      <p className="text-2xl font-light tracking-tight">50+</p>
      <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
        Components
      </p>
    </div>

    <div className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-amber-50 p-3">
      <TailwindCSS size={18} />
      <Typescript size={18} />
      <NextJs size={18} />
    </div>

    <div className="flex flex-col items-center justify-center rounded-2xl bg-linear-to-br from-fuchsia-500 to-violet-600 p-3 text-white">
      <p className="font-mono text-[10px] tracking-widest uppercase opacity-70">
        Free
      </p>
      <p className="mt-0.5 text-sm font-semibold">Open Source</p>
    </div>
  </div>
));
BentoFeatureGrid.displayName = "BentoFeatureGrid";

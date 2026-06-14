import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import bgImage from "@/public/bg.png";
import { TailwindCSS } from "@/icons/TailwindCSS";
import { ReactJs } from "@/icons/ReactJs";
import { NextJs } from "@/icons/NextJs";
import { Typescript } from "@/icons/Typescript";

/**
 * Bento Feature Grid built with React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo content with your own data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 *
 * React Users: Replace `next/image` with a standard `img` element.
 */
export type BentoFeatureGridProps = ComponentPropsWithoutRef<"div">;

export const BentoFeatureGrid = forwardRef<
  HTMLDivElement,
  BentoFeatureGridProps
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="bento-feature-grid"
    className={cn(
      "grid w-80 grid-cols-2 grid-rows-3 gap-2 font-sans",
      className,
    )}
    {...props}
  >
    <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl bg-neutral-900">
      <Image
        src={bgImage}
        alt="Feature preview"
        fill
        sizes="320px"
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

    <div className="group flex flex-col justify-between rounded-2xl border border-teal-100 bg-teal-50 p-3 transition-colors hover:bg-teal-100/80">
      <ReactJs size={20} className="text-teal-600" />
      <div>
        <p className="text-xs font-semibold text-teal-900">React 19</p>
        <p className="mt-0.5 text-[10px] text-teal-600/70">
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

    <div className="flex flex-col items-center justify-center rounded-2xl bg-linear-to-br from-cyan-500 to-teal-600 p-3 text-white">
      <p className="font-mono text-[10px] tracking-widest uppercase opacity-70">
        Free
      </p>
      <p className="mt-0.5 text-sm font-semibold">Open Source</p>
    </div>
  </div>
));

BentoFeatureGrid.displayName = "BentoFeatureGrid";

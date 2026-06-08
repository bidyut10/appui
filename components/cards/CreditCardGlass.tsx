import React, { forwardRef } from "react";

export const CreditCardGlass = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative h-48 w-80 cursor-pointer overflow-hidden rounded-2xl font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-neutral-800 via-neutral-900 to-black" />
    <div className="absolute top-[-20%] right-[-10%] h-40 w-40 rounded-full bg-violet-500/30 blur-[50px] transition-colors duration-700 group-hover:bg-violet-500/40" />
    <div className="absolute bottom-[-30%] left-[-10%] h-48 w-48 rounded-full bg-fuchsia-500/20 blur-[60px]" />

    <div className="relative z-10 flex h-full flex-col justify-between p-5">
      <div className="flex items-start justify-between">
        <div className="h-7 w-10 rounded-md bg-linear-to-br from-amber-300 to-amber-500 opacity-90" />
        <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">
          Platinum
        </span>
      </div>

      <div>
        <p className="mb-3 font-mono text-lg tracking-[0.15em] text-white/90">
          4532 •••• •••• 7891
        </p>
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-0.5 font-mono text-[8px] tracking-widest text-white/30 uppercase">
              Card Holder
            </p>
            <p className="text-xs font-medium tracking-wider text-white/80 uppercase">
              John Doe
            </p>
          </div>
          <div className="text-right">
            <p className="mb-0.5 font-mono text-[8px] tracking-widest text-white/30 uppercase">
              Expires
            </p>
            <p className="font-mono text-xs text-white/80">09/28</p>
          </div>
          <div className="flex -space-x-2">
            <div className="h-7 w-7 rounded-full bg-red-500/80 opacity-90" />
            <div className="h-7 w-7 rounded-full bg-amber-500/80 opacity-90" />
          </div>
        </div>
      </div>
    </div>
  </div>
));
CreditCardGlass.displayName = "CreditCardGlass";

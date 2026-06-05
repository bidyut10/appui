import React, { forwardRef } from "react";

export const CreditCardGlass = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative w-72 h-44 rounded-2xl overflow-hidden cursor-pointer font-sans ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-linear-to-br from-neutral-800 via-neutral-900 to-black" />
    <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-violet-500/30 rounded-full blur-[50px] group-hover:bg-violet-500/40 transition-colors duration-700" />
    <div className="absolute bottom-[-30%] left-[-10%] w-48 h-48 bg-fuchsia-500/20 rounded-full blur-[60px]" />

    <div className="relative z-10 h-full p-5 flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className="w-10 h-7 rounded-md bg-linear-to-br from-amber-300 to-amber-500 opacity-90" />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
          Platinum
        </span>
      </div>

      <div>
        <p className="text-lg font-mono text-white/90 tracking-[0.15em] mb-3">
          4532 •••• •••• 7891
        </p>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-0.5">
              Card Holder
            </p>
            <p className="text-xs font-medium text-white/80 uppercase tracking-wider">
              John Doe
            </p>
          </div>
          <div className="text-right">
            <p className="text-[8px] font-mono uppercase tracking-widest text-white/30 mb-0.5">
              Expires
            </p>
            <p className="text-xs font-mono text-white/80">09/28</p>
          </div>
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-red-500/80 opacity-90" />
            <div className="w-7 h-7 rounded-full bg-amber-500/80 opacity-90" />
          </div>
        </div>
      </div>
    </div>
  </div>
));
CreditCardGlass.displayName = "CreditCardGlass";

import React, { forwardRef } from "react";

export const ApplePayButton = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 font-sans ${className}`} {...props}>
    <div className="rounded-[1.25rem] bg-[#f2f2f7] p-5">
      <div className="mb-5 text-center">
        <p className="text-[13px] text-neutral-500">Total</p>
        <p className="mt-0.5 text-3xl font-semibold tracking-tight text-neutral-900">
          $29.00
        </p>
        <p className="mt-1 text-[12px] text-neutral-400">AppUI Pro · Monthly</p>
      </div>
      <button className="flex h-[50px] w-full cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-black transition-colors hover:bg-neutral-900 active:scale-[0.98]">
        <svg viewBox="0 0 24 24" width={18} height={18} fill="white">
          <path d="M17.05 12.53c-.03-2.93 2.4-4.34 2.51-4.4-1.37-2-3.48-2.27-4.23-2.3-1.8-.18-3.52 1.06-4.43 1.06-.92 0-2.33-1.03-3.84-1.01-1.97.03-3.79 1.15-4.8 2.91-2.05 3.55-.52 8.8 1.47 11.68 1 1.42 2.17 3.02 3.72 2.96 1.5-.06 2.06-.96 3.87-.96 1.8 0 2.32.96 3.89.93 1.61-.03 2.62-1.42 3.59-2.85 1.13-1.65 1.59-3.25 1.62-3.33-.04-.02-3.11-1.19-3.14-4.73zM14.52 4.07c.82-1 1.38-2.38 1.23-3.77-1.19.05-2.63.79-3.48 1.79-.76.88-1.43 2.29-1.25 3.64 1.32.1 2.67-.67 3.5-1.66z" />
        </svg>
        <span className="text-[17px] font-medium tracking-tight text-white">
          Pay
        </span>
      </button>
      <div className="mt-4 flex items-center justify-center gap-3">
        {["💳", "🏦", "📱"].map((icon) => (
          <div
            key={icon}
            className="flex h-7 w-10 items-center justify-center rounded-md border border-neutral-200 bg-white text-sm shadow-sm"
          >
            {icon}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-neutral-400">
        Secure payment powered by Apple Pay
      </p>
    </div>
  </div>
));
ApplePayButton.displayName = "ApplePayButton";

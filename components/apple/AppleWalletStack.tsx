import React, { forwardRef } from "react";

const passes: { name: string; title: string; color: string; detail: string }[] =
  [
    {
      name: "Boarding Pass",
      title: "AI 2847",
      color: "from-blue-600 to-blue-800",
      detail: "CCU → DEL",
    },
    {
      name: "Event Ticket",
      title: "Design Conf 2026",
      color: "from-purple-600 to-indigo-800",
      detail: "VIP Pass",
    },
    {
      name: "Membership",
      title: "AppUI Pro",
      color: "from-neutral-700 to-neutral-900",
      detail: "Valid until Dec 2026",
    },
  ];

export const AppleWalletStack = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`relative h-64 w-72 font-sans ${className}`}
    {...props}
  >
    {passes.map((pass, i) => (
      <div
        key={pass.name}
        className={`absolute inset-x-0 bg-linear-to-br ${pass.color} cursor-pointer rounded-2xl p-4 text-white shadow-lg transition-transform hover:-translate-y-1`}
        style={{ top: `${i * 28}px`, zIndex: passes.length - i }}
      >
        <p className="text-[10px] font-medium tracking-wider text-white/60 uppercase">
          {pass.name}
        </p>
        <p className="mt-1 text-lg font-semibold tracking-tight">
          {pass.title}
        </p>
        <p className="mt-1 text-[12px] text-white/60">{pass.detail}</p>
        {i === 0 && (
          <div className="absolute right-4 bottom-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
            <div className="grid h-6 w-6 grid-cols-3 gap-px">
              {Array.from({ length: 9 }).map((_, j) => (
                <div
                  key={j}
                  className={`${j % 2 === 0 ? "bg-white" : "bg-transparent"}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
));
AppleWalletStack.displayName = "AppleWalletStack";

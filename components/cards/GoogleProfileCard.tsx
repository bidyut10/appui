import React, { forwardRef } from "react";

export const GoogleProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`flex w-72 flex-col items-center rounded-3xl border border-neutral-100 bg-white p-6 text-center font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="mb-3 h-16 w-16 overflow-hidden rounded-full border border-neutral-100 shadow-inner">
      <div className="flex h-full w-full items-center justify-center bg-linear-to-tr from-blue-500 via-red-500 to-yellow-400">
        <span className="text-2xl font-bold text-white">J</span>
      </div>
    </div>
    <h3 className="text-lg font-medium text-neutral-900">John Doe</h3>
    <p className="text-sm text-neutral-500">john@example.com</p>
    <div className="mt-4 flex gap-3 text-xs">
      {["Google Search", "Gmail", "Drive"].map((s) => (
        <span
          key={s}
          className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-neutral-600"
        >
          {s}
        </span>
      ))}
    </div>
    <button className="mt-5 rounded-full border border-neutral-200 px-6 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
      Manage Google Account
    </button>
  </div>
));
GoogleProfileCard.displayName = "GoogleProfileCard";

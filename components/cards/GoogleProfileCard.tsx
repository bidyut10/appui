import React, { forwardRef } from "react";

export const GoogleProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 p-6 bg-white border border-neutral-100 shadow-lg rounded-3xl flex flex-col items-center text-center font-sans ${className}`}
    {...props}
  >
    <div className="w-16 h-16 rounded-full overflow-hidden border border-neutral-100 mb-3 shadow-inner">
      <div className="w-full h-full bg-linear-to-tr from-blue-500 via-red-500 to-yellow-400 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">J</span>
      </div>
    </div>
    <h3 className="text-lg font-medium text-neutral-900">John Doe</h3>
    <p className="text-sm text-neutral-500">john@example.com</p>
    <div className="mt-4 flex gap-3 text-xs">
      {["Google Search", "Gmail", "Drive"].map((s) => (
        <span
          key={s}
          className="px-2 py-1 bg-neutral-50 rounded-full text-neutral-600 border border-neutral-200"
        >
          {s}
        </span>
      ))}
    </div>
    <button className="mt-5 px-6 py-2 border border-neutral-200 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors text-neutral-700">
      Manage Google Account
    </button>
  </div>
));
GoogleProfileCard.displayName = "GoogleProfileCard";

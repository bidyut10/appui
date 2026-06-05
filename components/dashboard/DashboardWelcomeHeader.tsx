import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";

export const DashboardWelcomeHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-80 bg-white border border-neutral-100 shadow-lg rounded-2xl p-5 font-sans ${className}`} {...props}>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-neutral-100">
        <Image src={profileImage} alt="User" className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="text-[11px] text-neutral-400">Good morning 👋</p>
        <h3 className="text-base font-semibold text-neutral-900">Welcome back, John</h3>
      </div>
    </div>
    <div className="grid grid-cols-3 gap-2">
      {[
        { label: "Projects", val: "12" },
        { label: "Tasks", val: "8" },
        { label: "Messages", val: "3" },
      ].map(({ label, val }) => (
        <div key={label} className="p-2.5 bg-neutral-50 rounded-xl text-center">
          <p className="text-lg font-semibold text-neutral-900">{val}</p>
          <p className="text-[10px] text-neutral-400">{label}</p>
        </div>
      ))}
    </div>
  </div>
));
DashboardWelcomeHeader.displayName = "DashboardWelcomeHeader";

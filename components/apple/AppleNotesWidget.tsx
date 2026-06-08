import React, { forwardRef } from "react";

export const AppleNotesWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-64 font-sans ${className}`} {...props}>
    <div className="relative rotate-[-1deg] rounded-lg bg-[#fef9c3] p-4 shadow-md shadow-yellow-200/50">
      <div className="absolute top-0 left-1/2 h-3 w-8 -translate-x-1/2 rounded-b-sm bg-yellow-300/60" />
      <p className="mb-2 font-mono text-[10px] text-yellow-700/50">
        Jun 6, 2026 at 10:30 AM
      </p>
      <h4 className="mb-2 text-[15px] font-semibold text-yellow-900">
        Design Meeting Notes
      </h4>
      <ul className="space-y-1.5 text-[13px] leading-relaxed text-yellow-900/80">
        <li>• Finalize component library v2</li>
        <li>• Review Apple-style glass cards</li>
        <li>• Ship before Friday demo</li>
        <li>• Get feedback from team</li>
      </ul>
      <div className="mt-4 flex gap-2 border-t border-yellow-300/40 pt-3">
        {["☑️", "📷", "✏️", "↗️"].map((icon) => (
          <button
            key={icon}
            className="cursor-pointer text-sm opacity-60 transition-opacity hover:opacity-100"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  </div>
));
AppleNotesWidget.displayName = "AppleNotesWidget";

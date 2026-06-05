import React, { forwardRef } from "react";

export const AppleNotesWidget = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-64 font-sans ${className}`} {...props}>
    <div className="bg-[#fef9c3] rounded-lg p-4 shadow-md shadow-yellow-200/50 rotate-[-1deg] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-yellow-300/60 rounded-b-sm" />
      <p className="text-[10px] font-mono text-yellow-700/50 mb-2">Jun 6, 2026 at 10:30 AM</p>
      <h4 className="text-[15px] font-semibold text-yellow-900 mb-2">Design Meeting Notes</h4>
      <ul className="space-y-1.5 text-[13px] text-yellow-900/80 leading-relaxed">
        <li>• Finalize component library v2</li>
        <li>• Review Apple-style glass cards</li>
        <li>• Ship before Friday demo</li>
        <li>• Get feedback from team</li>
      </ul>
      <div className="flex gap-2 mt-4 pt-3 border-t border-yellow-300/40">
        {["☑️", "📷", "✏️", "↗️"].map((icon) => (
          <button key={icon} className="text-sm cursor-pointer opacity-60 hover:opacity-100 transition-opacity">{icon}</button>
        ))}
      </div>
    </div>
  </div>
));
AppleNotesWidget.displayName = "AppleNotesWidget";

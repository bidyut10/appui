import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

export const SecuritySettingsCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-84 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100">
      <h4 className="text-sm font-semibold text-neutral-900">Security</h4>
      <p className="text-[11px] text-neutral-400 mt-0.5">Protect your account</p>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
        <div className="flex items-center gap-2">
          <Check size={14} className="text-emerald-600" />
          <div>
            <p className="text-xs font-medium text-emerald-800">2FA Enabled</p>
            <p className="text-[10px] text-emerald-600">Authenticator app</p>
          </div>
        </div>
        <button className="text-[10px] font-medium text-emerald-700 hover:underline cursor-pointer">Manage</button>
      </div>
      {[
        { label: "Password", desc: "Last changed 30 days ago", action: "Update" },
        { label: "Active sessions", desc: "3 devices logged in", action: "View" },
        { label: "API keys", desc: "2 active keys", action: "Manage" },
      ].map(({ label, desc, action }) => (
        <div key={label} className="flex items-center justify-between py-2">
          <div>
            <p className="text-xs font-medium text-neutral-800">{label}</p>
            <p className="text-[10px] text-neutral-400 mt-0.5">{desc}</p>
          </div>
          <button className="text-[10px] font-medium text-neutral-800 hover:underline cursor-pointer">{action}</button>
        </div>
      ))}
    </div>
  </div>
));
SecuritySettingsCard.displayName = "SecuritySettingsCard";

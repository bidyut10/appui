import React, { forwardRef } from "react";
import { Check } from "@/icons/Check";

export const SecuritySettingsCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-84 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="border-b border-neutral-100 px-4 py-3">
      <h4 className="text-sm font-semibold text-neutral-900">Security</h4>
      <p className="mt-0.5 text-[11px] text-neutral-400">
        Protect your account
      </p>
    </div>
    <div className="space-y-3 p-4">
      <div className="flex items-center justify-between rounded-lg border border-emerald-100 bg-emerald-50 p-3">
        <div className="flex items-center gap-2">
          <Check size={14} className="text-emerald-600" />
          <div>
            <p className="text-xs font-medium text-emerald-800">2FA Enabled</p>
            <p className="text-[10px] text-emerald-600">Authenticator app</p>
          </div>
        </div>
        <button className="cursor-pointer text-[10px] font-medium text-emerald-700 hover:underline">
          Manage
        </button>
      </div>
      {[
        {
          label: "Password",
          desc: "Last changed 30 days ago",
          action: "Update",
        },
        {
          label: "Active sessions",
          desc: "3 devices logged in",
          action: "View",
        },
        { label: "API keys", desc: "2 active keys", action: "Manage" },
      ].map(({ label, desc, action }) => (
        <div key={label} className="flex items-center justify-between py-2">
          <div>
            <p className="text-xs font-medium text-neutral-800">{label}</p>
            <p className="mt-0.5 text-[10px] text-neutral-400">{desc}</p>
          </div>
          <button className="cursor-pointer text-[10px] font-medium text-neutral-800 hover:underline">
            {action}
          </button>
        </div>
      ))}
    </div>
  </div>
));
SecuritySettingsCard.displayName = "SecuritySettingsCard";

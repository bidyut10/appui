import React, { forwardRef } from "react";

const servers = [
  { name: "API Server", status: "Operational", uptime: "99.99%", color: "bg-emerald-500" },
  { name: "Database", status: "Operational", uptime: "99.97%", color: "bg-emerald-500" },
  { name: "CDN", status: "Degraded", uptime: "98.42%", color: "bg-amber-500" },
  { name: "Auth Service", status: "Operational", uptime: "100%", color: "bg-emerald-500" },
];

export const ServerStatusCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`} {...props}>
    <div className="px-4 py-3 border-b border-neutral-100 flex items-center justify-between">
      <h4 className="text-sm font-semibold text-neutral-900">System Status</h4>
      <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-600">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        All systems
      </span>
    </div>
    <div className="divide-y divide-neutral-50">
      {servers.map((s) => (
        <div key={s.name} className="flex items-center gap-3 px-4 py-3">
          <div className={`w-2 h-2 rounded-full ${s.color} shrink-0`} />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-neutral-800">{s.name}</p>
            <p className="text-[10px] text-neutral-400">{s.uptime} uptime</p>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            s.status === "Operational" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
          }`}>{s.status}</span>
        </div>
      ))}
    </div>
  </div>
));
ServerStatusCard.displayName = "ServerStatusCard";

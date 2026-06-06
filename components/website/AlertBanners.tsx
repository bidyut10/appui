"use client";
import React, { useState } from "react";
import { X } from "@/icons/X";
import { Info } from "@/icons/Info";
import { Check } from "@/icons/Check";
import { Alert } from "@/icons/Alert";

const alerts = [
  {
    type: "info",
    bg: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
    icon: <Info className="text-blue-800" />,
    title: "New update available",
    msg: "Version 2.4 is ready to install.",
  },
  {
    type: "success",
    bg: "bg-emerald-50 border-emerald-200",
    text: "text-emerald-800",
    icon: <Check className="text-emerald-800" />,
    title: "Payment successful",
    msg: "Your subscription has been renewed.",
  },
  {
    type: "warning",
    bg: "bg-amber-50 border-amber-200",
    text: "text-amber-800",
    icon: <Alert className="text-amber-800" />,
    title: "Storage almost full",
    msg: "You have used 90% of your storage quota.",
  },
  {
    type: "error",
    bg: "bg-red-50 border-red-200",
    text: "text-red-800",
    icon: <X className="text-red-800" />,
    title: "Connection failed",
    msg: "Unable to reach the server. Try again.",
  },
];

export const AlertBanners = () => {
  const [visible, setVisible] = useState([true, true, true, true]);

  return (
    <div className="w-80 space-y-2 font-sans">
      {alerts.map((a, i) => visible[i] && (
        <div key={a.type} className={`flex items-start gap-3 p-3 border rounded-xl ${a.bg}`}>
          <span className="text-sm shrink-0 mt-0.5">{a.icon}</span>
          <div className="flex-1 min-w-0">
            <p className={`text-xs font-semibold ${a.text}`}>{a.title}</p>
            <p className={`text-[11px] mt-0.5 opacity-80 ${a.text}`}>{a.msg}</p>
          </div>
          <button onClick={() => setVisible((v) => { const n = [...v]; n[i] = false; return n; })} className="text-neutral-400 hover:text-neutral-600 cursor-pointer shrink-0">
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

import React, { forwardRef } from "react";
import { Mail } from "@/icons/Mail";
import { Phone } from "@/icons/Phone";
import { Location } from "@/icons/Location";
import { Clock } from "@/icons/Clock";

export const ContactInfoCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 rounded-2xl border border-neutral-100 bg-white p-5 font-sans shadow-lg ${className}`}
    {...props}
  >
    <h4 className="mb-1 text-sm font-semibold text-neutral-900">
      Get in Touch
    </h4>
    <p className="mb-4 text-[11px] text-neutral-500">
      We&apos;d love to hear from you
    </p>
    <div className="space-y-3">
      {[
        { icon: Mail, label: "Email", val: "hello@appui.dev" },
        { icon: Phone, label: "Phone", val: "+91 98765 43210" },
        { icon: Location, label: "Office", val: "Kolkata, West Bengal" },
        { icon: Clock, label: "Hours", val: "Mon–Fri, 9AM–6PM IST" },
      ].map(({ icon: Icon, label, val }) => (
        <div key={label} className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-100">
            <Icon size={15} className="text-neutral-600" />
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
              {label}
            </p>
            <p className="mt-0.5 text-xs font-medium text-neutral-800">{val}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="mt-4 h-9 w-full cursor-pointer rounded-lg bg-neutral-900 text-xs font-medium text-white transition-colors hover:bg-neutral-950">
      Send Message
    </button>
  </div>
));
ContactInfoCard.displayName = "ContactInfoCard";

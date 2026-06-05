import React, { forwardRef } from "react";
import { Mail } from "@/icons/Mail";
import { Phone } from "@/icons/Phone";
import { Location } from "@/icons/Location";
import { Clock } from "@/icons/Clock";

export const ContactInfoCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-5 font-sans ${className}`} {...props}>
    <h4 className="text-sm font-semibold text-neutral-900 mb-1">Get in Touch</h4>
    <p className="text-[11px] text-neutral-500 mb-4">We&apos;d love to hear from you</p>
    <div className="space-y-3">
      {[
        { icon: Mail, label: "Email", val: "hello@appui.dev" },
        { icon: Phone, label: "Phone", val: "+91 98765 43210" },
        { icon: Location, label: "Office", val: "Kolkata, West Bengal" },
        { icon: Clock, label: "Hours", val: "Mon–Fri, 9AM–6PM IST" },
      ].map(({ icon: Icon, label, val }) => (
        <div key={label} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0">
            <Icon size={15} className="text-neutral-600" />
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">{label}</p>
            <p className="text-xs font-medium text-neutral-800 mt-0.5">{val}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="w-full h-9 mt-4 bg-neutral-900 text-white text-xs font-medium rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer">
      Send Message
    </button>
  </div>
));
ContactInfoCard.displayName = "ContactInfoCard";

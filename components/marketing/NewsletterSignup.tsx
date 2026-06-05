"use client";
import React, { useState } from "react";
import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";
import { Check } from "@/icons/Check";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-80 p-6 bg-white border border-neutral-100 shadow-lg rounded-2xl font-sans relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-violet-100 to-transparent rounded-bl-full opacity-60" />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
          <Mail size={18} className="text-violet-600" />
        </div>

        <h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-1.5">
          Stay in the loop
        </h3>
        <p className="text-xs text-neutral-500 leading-relaxed mb-5">
          Get new components, design tips, and early access to releases. No spam, ever.
        </p>

        {submitted ? (
          <div className="flex items-center gap-2.5 p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <Check size={12} className="text-emerald-600" />
            </div>
            <p className="text-xs font-medium text-emerald-700">
              You&apos;re on the list! Check your inbox.
            </p>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 h-10 px-3.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all"
            />
            <button
              onClick={() => email && setSubmitted(true)}
              className="h-10 px-4 bg-neutral-900 text-white rounded-xl flex items-center gap-1 text-xs font-medium hover:bg-neutral-800 transition-colors cursor-pointer active:scale-95 shrink-0"
            >
              Join
              <ArrowRight size={12} />
            </button>
          </div>
        )}

        <p className="text-[10px] text-neutral-400 mt-3 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-emerald-400" />
          12,400+ subscribers · Unsubscribe anytime
        </p>
      </div>
    </div>
  );
};

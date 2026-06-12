"use client";
import React, { useState } from "react";
import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";
import { Check } from "@/icons/Check";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white p-6 font-sans shadow-lg">
      <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-linear-to-bl from-teal-100 to-transparent opacity-60" />

      <div className="relative z-10">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50">
          <Mail size={18} className="text-teal-600" />
        </div>

        <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-neutral-900">
          Stay in the loop
        </h3>
        <p className="mb-5 text-xs leading-relaxed text-neutral-500">
          Get new components, design tips, and early access to releases. No
          spam, ever.
        </p>

        {submitted ? (
          <div className="flex items-center gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50 p-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
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
              className="h-10 flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3.5 text-xs text-neutral-900 transition-all outline-none placeholder:text-neutral-400 focus:border-teal-300 focus:ring-2 focus:ring-teal-100"
            />
            <button
              onClick={() => email && setSubmitted(true)}
              className="flex h-10 shrink-0 cursor-pointer items-center gap-1 rounded-xl bg-neutral-900 px-4 text-xs font-medium text-white transition-colors hover:bg-neutral-800 active:scale-95"
            >
              Join
              <ArrowRight size={12} />
            </button>
          </div>
        )}

        <p className="mt-3 flex items-center gap-1 text-[10px] text-neutral-400">
          <span className="inline-block h-1 w-1 rounded-full bg-emerald-400" />
          12,400+ subscribers · Unsubscribe anytime
        </p>
      </div>
    </div>
  );
};

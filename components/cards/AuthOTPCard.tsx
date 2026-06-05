"use client";
import React, { useState } from "react";
import { ArrowRight } from "@/icons/ArrowRight";

export const AuthOTPCard = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-6 font-sans text-center">
      <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-4">
        <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.5} className="text-violet-600"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      </div>
      <h3 className="text-base font-semibold text-neutral-900 mb-1">Verify your email</h3>
      <p className="text-[11px] text-neutral-500 leading-relaxed mb-5">
        We sent a 6-digit code to<br /><span className="font-medium text-neutral-700">john@example.com</span>
      </p>
      <div className="flex justify-center gap-2 mb-5">
        {otp.map((digit, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => {
              const next = [...otp];
              next[i] = e.target.value;
              setOtp(next);
            }}
            className={`w-10 h-12 text-center text-lg font-mono font-semibold rounded-xl border outline-none transition-all ${
              digit ? "border-violet-400 bg-violet-50 text-violet-700" : "border-neutral-200 bg-neutral-50 text-neutral-900"
            } focus:border-violet-400 focus:ring-2 focus:ring-violet-100`}
          />
        ))}
      </div>
      <button className="w-full h-10 bg-neutral-900 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1 hover:bg-neutral-800 transition-colors cursor-pointer">
        Verify <ArrowRight size={12} />
      </button>
      <p className="text-[11px] text-neutral-400 mt-4">
        Didn&apos;t receive it? <button className="text-violet-600 font-medium hover:underline cursor-pointer">Resend code</button>
      </p>
    </div>
  );
};

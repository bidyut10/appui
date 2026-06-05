"use client";
import React, { useState } from "react";
import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";

export const AuthForgotPasswordCard = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl p-6 font-sans">
      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
        <Mail size={18} className="text-amber-600" />
      </div>
      <h3 className="text-base font-semibold text-neutral-900 mb-1">Forgot password?</h3>
      <p className="text-[11px] text-neutral-500 leading-relaxed mb-5">
        {sent ? "Check your inbox for a reset link. It expires in 15 minutes." : "Enter your email and we'll send you a reset link."}
      </p>
      {!sent ? (
        <>
          <input type="email" placeholder="you@company.com" className="w-full h-10 px-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-amber-300 focus:ring-2 focus:ring-amber-100 transition-all mb-3" />
          <button onClick={() => setSent(true)} className="w-full h-10 bg-neutral-900 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1 hover:bg-neutral-800 transition-colors cursor-pointer">
            Send Reset Link <ArrowRight size={12} />
          </button>
        </>
      ) : (
        <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-xs text-emerald-700 font-medium text-center">
          Reset link sent successfully!
        </div>
      )}
      <button className="w-full text-[11px] text-neutral-400 mt-4 hover:text-neutral-600 transition-colors cursor-pointer">
        ← Back to login
      </button>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import { Github } from "@/icons/Github";
import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";

export const AuthLoginCard = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans">
      <div className="h-1.5 bg-linear-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

      <div className="p-6">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center">
            <span className="text-white text-xs font-bold">A</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              {mode === "login" ? "Welcome back" : "Create account"}
            </h3>
            <p className="text-[11px] text-neutral-400">
              {mode === "login" ? "Sign in to continue" : "Start building today"}
            </p>
          </div>
        </div>

        <div className="flex gap-2 mb-5">
          <button className="flex-1 h-9 flex items-center justify-center gap-2 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer">
            <Github size={14} />
            GitHub
          </button>
          <button className="flex-1 h-9 flex items-center justify-center gap-2 border border-neutral-200 rounded-xl text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer">
            <Mail size={14} />
            Google
          </button>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-[10px] text-neutral-400 font-mono">OR</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="space-y-3 mb-5">
          <div>
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1 block">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full h-9 px-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all"
            />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1 block">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-9 px-3 rounded-xl border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100 transition-all"
            />
          </div>
        </div>

        <button className="w-full h-10 bg-neutral-900 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors cursor-pointer active:scale-[0.98]">
          {mode === "login" ? "Sign In" : "Create Account"}
          <ArrowRight size={12} />
        </button>

        <p className="text-center text-[11px] text-neutral-400 mt-4">
          {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-violet-600 font-medium hover:underline cursor-pointer"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

"use client";
import { useState } from "react";
import { Github } from "@/icons/Github";
import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";

export const AuthLoginCard = () => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="w-96 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
      <div className="p-6">
        <div className="mb-5 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900">
            <span className="text-xs font-bold text-white">A</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              {mode === "login" ? "Welcome back" : "Create account"}
            </h3>
            <p className="text-[11px] text-neutral-400">
              {mode === "login"
                ? "Sign in to continue"
                : "Start building today"}
            </p>
          </div>
        </div>

        <div className="mb-5 flex gap-2">
          <button className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
            <Github size={14} />
            GitHub
          </button>
          <button className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
            <Mail size={14} />
            Google
          </button>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="font-mono text-[10px] text-neutral-400">OR</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        <div className="mb-5 space-y-3">
          <div>
            <label className="mb-1 block font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
              Email
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
            />
          </div>
          <div>
            <label className="mb-1 block font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
            />
          </div>
        </div>

        <button className="flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-neutral-900 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 active:scale-[0.98]">
          {mode === "login" ? "Sign In" : "Create Account"}
          <ArrowRight size={12} />
        </button>

        <p className="mt-4 text-center text-[11px] text-neutral-400">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="cursor-pointer font-medium text-neutral-950 hover:underline"
          >
            {mode === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

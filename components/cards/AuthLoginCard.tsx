"use client";

import { useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Github } from "@/icons/Github";
import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";

/**
 * Authentication login/signup card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Supports login and signup modes with customizable
 * branding, titles, placeholders, and button labels.
 *
 * Replace the demo content with your own authentication flow.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type AuthLoginCardProps = {
  appInitial?: string;

  loginTitle?: string;
  signupTitle?: string;

  loginDescription?: string;
  signupDescription?: string;

  emailPlaceholder?: string;
  passwordPlaceholder?: string;

  githubLabel?: string;
  googleLabel?: string;
} & ComponentPropsWithoutRef<"div">;

export const AuthLoginCard = ({
  className,

  appInitial = "A",

  loginTitle = "Welcome back",
  signupTitle = "Create account",

  loginDescription = "Sign in to continue",
  signupDescription = "Start building today",

  emailPlaceholder = "you@company.com",
  passwordPlaceholder = "••••••••",

  githubLabel = "GitHub",
  googleLabel = "Google",

  ...props
}: AuthLoginCardProps) => {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div
      data-slot="auth-login-card"
      className={cn(
        "w-96 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      <div data-slot="auth-login-card-content" className="p-6">
        <div
          data-slot="auth-login-card-header"
          className="mb-5 flex items-center gap-2"
        >
          <div
            data-slot="auth-login-card-logo"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900"
          >
            <span className="text-xs font-bold text-white">{appInitial}</span>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              {mode === "login" ? loginTitle : signupTitle}
            </h3>

            <p className="text-[11px] text-neutral-400">
              {mode === "login" ? loginDescription : signupDescription}
            </p>
          </div>
        </div>

        {/* Social Login */}
        <div data-slot="auth-login-card-social" className="mb-5 flex gap-2">
          <button className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
            <Github size={14} />
            {githubLabel}
          </button>

          <button className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
            <Mail size={14} />
            {googleLabel}
          </button>
        </div>

        {/* Divider */}
        <div
          data-slot="auth-login-card-divider"
          className="mb-5 flex items-center gap-3"
        >
          <div className="h-px flex-1 bg-neutral-200" />

          <span className="font-mono text-[10px] text-neutral-400">OR</span>

          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* Form */}
        <div data-slot="auth-login-card-form" className="mb-5 space-y-3">
          <div>
            <label className="mb-1 block font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
              Email
            </label>

            <input
              type="email"
              placeholder={emailPlaceholder}
              className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
            />
          </div>

          <div>
            <label className="mb-1 block font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
              Password
            </label>

            <input
              type="password"
              placeholder={passwordPlaceholder}
              className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          data-slot="auth-login-card-submit"
          className="flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-neutral-900 text-xs font-semibold text-white transition-colors hover:bg-neutral-800 active:scale-[0.98]"
        >
          {mode === "login" ? "Sign In" : "Create Account"}

          <ArrowRight size={12} />
        </button>

        <p className="mt-4 text-center text-[11px] text-neutral-400">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
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

AuthLoginCard.displayName = "AuthLoginCard";

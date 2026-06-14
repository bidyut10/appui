"use client";

import Image from "next/image";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import sideImage from "@/public/bh.png";

import { Github } from "@/icons/Github";
import { ArrowRight } from "@/icons/ArrowRight";

/**
 * Split authentication card built with Next.js,
 * React, TypeScript, and Tailwind CSS.
 *
 * Replace the demo image, headings, placeholders,
 * and button labels with your own content.
 *
 * Perfect for login, signup, onboarding,
 * and authentication screens.
 *
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type AuthSplitLoginCardProps = {
  imageSrc?: typeof sideImage;

  title?: string;
  description?: string;

  emailPlaceholder?: string;
  passwordPlaceholder?: string;

  submitLabel?: string;
  githubLabel?: string;
} & ComponentPropsWithoutRef<"div">;

export const AuthSplitLoginCard = forwardRef<
  HTMLDivElement,
  AuthSplitLoginCardProps
>(
  (
    {
      className,

      imageSrc = sideImage,

      title = "Welcome back",
      description = "Sign in to your account",

      emailPlaceholder = "Email",
      passwordPlaceholder = "Password",

      submitLabel = "Sign In",
      githubLabel = "Continue with GitHub",

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="auth-split-login-card"
      className={cn(
        "flex w-96 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Image */}
      <div
        data-slot="auth-split-login-card-image"
        className="relative hidden w-32 shrink-0 sm:block"
      >
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="128px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-teal-900/40" />
      </div>

      <div data-slot="auth-split-login-card-content" className="flex-1 p-5">
        <div data-slot="auth-split-login-card-header">
          <h3 className="mb-1 text-base font-semibold text-neutral-900">
            {title}
          </h3>

          <p className="mb-4 text-[11px] text-neutral-400">{description}</p>
        </div>

        {/* Form */}
        <div
          data-slot="auth-split-login-card-form"
          className="mb-4 space-y-2.5"
        >
          <input
            type="email"
            placeholder={emailPlaceholder}
            className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
          />

          <input
            type="password"
            placeholder={passwordPlaceholder}
            className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
          />
        </div>

        {/* Submit */}
        <button
          data-slot="auth-split-login-card-submit"
          className="flex h-9 w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-neutral-900 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
        >
          {submitLabel}

          <ArrowRight size={12} />
        </button>

        {/* Social */}
        <button
          data-slot="auth-split-login-card-github"
          className="mt-2 flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        >
          <Github size={14} />

          {githubLabel}
        </button>
      </div>
    </div>
  ),
);

AuthSplitLoginCard.displayName = "AuthSplitLoginCard";

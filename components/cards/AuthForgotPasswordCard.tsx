"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import bgImage from "@/public/bg.png";

import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { Check } from "@/icons/Check";

import { cn } from "@/lib/utils";

/*
| Forgot password card built with Next.js, React,
| TypeScript and Tailwind CSS.
|
| Replace the text, email placeholder, and actions
| with your own authentication flow.
|
| Includes two states:
| - Request reset link
| - Success confirmation
*/

export type AuthForgotPasswordCardProps = ComponentPropsWithoutRef<"div"> & {
  title?: string;
  description?: string;

  successTitle?: string;
  successDescription?: string;

  emailPlaceholder?: string;
};

export const AuthForgotPasswordCard = forwardRef<
  HTMLDivElement,
  AuthForgotPasswordCardProps
>(
  (
    {
      className,

      title = "Forgot Password",

      description = `Enter the email associated with your account and we'll send you a password reset link.`,

      successTitle = "Check Your Email",

      successDescription = `We've sent a password reset link to your email address. The link will expire in 15 minutes.`,

      emailPlaceholder = "john@example.com",

      ...props
    },
    ref,
  ) => {
    const [sent, setSent] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="auth-forgot-password-card"
        className={cn(
          "relative h-105 w-96 overflow-hidden rounded-2xl shadow-lg",
          className,
        )}
        {...props}
      >
        {/* Background */}
        <Image src={bgImage} alt="Background" fill sizes="384px" className="object-cover" />

        <div
          data-slot="auth-forgot-password-card-overlay"
          className="absolute inset-0 bg-black/50"
        />

        {/* Content */}
        <div
          data-slot="auth-forgot-password-card-content"
          className="relative flex h-full flex-col p-6"
        >
          {!sent ? (
            <>
              {/* Icon */}
              <div
                data-slot="auth-forgot-password-card-icon"
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-black/10 shadow-sm"
              >
                <Mail size={22} className="text-neutral-50" />
              </div>

              {/* Header */}
              <div
                data-slot="auth-forgot-password-card-header"
                className="text-center"
              >
                <h3 className="text-lg font-semibold text-neutral-50">
                  {title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-neutral-100">
                  {description}
                </p>
              </div>

              {/* Form */}
              <div data-slot="auth-forgot-password-card-form" className="mt-8">
                <label className="mb-2 block text-xs font-medium text-neutral-50">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder={emailPlaceholder}
                  className="h-11 w-full rounded-lg border border-black/40 bg-black/40 px-4 text-sm text-neutral-100 backdrop-blur-xl transition-all outline-none placeholder:text-neutral-500 focus:border-neutral-700/50"
                />
              </div>

              {/* Action */}
              <button
                data-slot="auth-forgot-password-card-submit"
                onClick={() => setSent(true)}
                className="mt-4 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-950 text-sm font-medium text-white transition-all hover:bg-black"
              >
                Send Reset Link
                <ArrowRight size={14} />
              </button>

              {/* Footer */}
              <div
                data-slot="auth-forgot-password-card-footer"
                className="mt-auto pt-4"
              >
                <button className="flex w-full cursor-pointer items-center justify-center gap-1 text-xs text-neutral-50 transition-colors hover:text-neutral-100">
                  <ArrowLeft size={12} />
                  Back to Login
                </button>
              </div>
            </>
          ) : (
            <div
              data-slot="auth-forgot-password-card-success"
              className="flex flex-1 flex-col items-center justify-center"
            >
              <Check size={32} className="mb-5 text-green-400" />

              <h3 className="text-lg font-semibold text-neutral-50">
                {successTitle}
              </h3>

              <p className="mt-2 max-w-55 text-center text-xs leading-relaxed text-neutral-100">
                {successDescription}
              </p>

              <button
                onClick={() => setSent(false)}
                className="mt-6 flex cursor-pointer items-center gap-1 text-xs text-neutral-50 transition-colors hover:text-white"
              >
                <ArrowLeft size={12} />
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    );
  },
);

AuthForgotPasswordCard.displayName = "AuthForgotPasswordCard";

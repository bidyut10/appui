"use client";

import { useState } from "react";
import Image from "next/image";
import bgImage from "@/public/bg.png";
import { Mail } from "@/icons/Mail";
import { ArrowRight } from "@/icons/ArrowRight";
import { ArrowLeft } from "@/icons/ArrowLeft";
import { Check } from "@/icons/Check";

export const AuthForgotPasswordCard = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative h-105 w-96 overflow-hidden rounded-2xl shadow-lg">
      <Image src={bgImage} alt="Background" fill className="object-cover" />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex h-full flex-col p-6">
        {!sent ? (
          <>
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-black/10 shadow-sm">
              <Mail size={22} className="text-neutral-50" />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold text-neutral-50">
                Forgot Password
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-neutral-100">
                Enter the email associated with your account and we&apos;ll send
                you a password reset link.
              </p>
            </div>

            <div className="mt-8">
              <label className="mb-2 block text-xs font-medium text-neutral-50">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="h-11 w-full rounded-lg border border-black/40 bg-black/40 px-4 text-sm text-neutral-100 backdrop-blur-xl transition-all outline-none placeholder:text-neutral-500 focus:border-neutral-700/50"
              />
            </div>

            <button
              onClick={() => setSent(true)}
              className="mt-4 flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-950 text-sm font-medium text-white transition-all hover:bg-black"
            >
              Send Reset Link
              <ArrowRight size={14} />
            </button>

            <div className="mt-auto pt-4">
              <button className="flex w-full cursor-pointer items-center justify-center gap-1 text-xs text-neutral-50 transition-colors hover:text-neutral-100">
                <ArrowLeft size={12} />
                Back to Login
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center">
            <Check size={32} className="mb-5 text-green-400" />

            <h3 className="text-lg font-semibold text-neutral-50">
              Check Your Email
            </h3>

            <p className="mt-2 max-w-55 text-center text-xs leading-relaxed text-neutral-100">
              We&apos;ve sent a password reset link to your email address. The
              link will expire in 15 minutes.
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
};

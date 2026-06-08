"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import bgImage from "@/public/dithar.png";
import { ArrowRight } from "@/icons/ArrowRight";

export const AuthOTPCard = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    const digit = value.slice(-1);

    const next = [...otp];
    next[index] = digit;
    setOtp(next);

    if (digit && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const next = [...otp];
        next[index] = "";
        setOtp(next);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();

        const next = [...otp];
        next[index - 1] = "";
        setOtp(next);
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (e.key === "ArrowRight" && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);

    if (!pasted) return;

    const next = [...otp];

    pasted.split("").forEach((char, index) => {
      next[index] = char;
    });

    setOtp(next);

    const lastIndex = Math.min(pasted.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  return (
    <div className="relative w-96 overflow-hidden rounded-2xl shadow-lg">
      <Image src={bgImage} alt="Background" fill className="object-cover" />

      <div className="bg-white/05 absolute inset-0" />

      <div className="relative p-7">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/50 bg-white/10 shadow-sm backdrop-blur-xl">
          <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="text-neutral-800"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>

        <h3 className="mb-1 text-center text-lg font-semibold text-neutral-900">
          Verify your email
        </h3>

        <p className="mb-6 text-center text-xs leading-relaxed text-neutral-500">
          We sent a 6-digit verification code to
          <br />
          <span className="font-medium text-neutral-700">john@example.com</span>
        </p>

        <div className="mb-6 flex justify-center gap-2">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onPaste={handlePaste}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={`h-12 w-11 rounded-lg border text-center text-lg font-semibold backdrop-blur-xs transition-all outline-none ${
                digit
                  ? "border-neutral-500/60 bg-white/10 text-neutral-900 shadow-sm"
                  : "border-neutral-500/60 bg-white/10 text-neutral-900 backdrop-blur-xl"
              } focus:border-neutral-800`}
            />
          ))}
        </div>

        <button className="flex h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-neutral-900 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-black">
          Verify Code
          <ArrowRight size={14} />
        </button>

        <p className="mt-4 text-center text-xs text-neutral-500">
          Didn&apos;t receive it?{" "}
          <button className="cursor-pointer font-medium text-neutral-900 hover:underline">
            Resend code
          </button>
        </p>
      </div>
    </div>
  );
};

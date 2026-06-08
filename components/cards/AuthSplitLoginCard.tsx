"use client";
import React from "react";
import Image from "next/image";
import sideImage from "@/public/bh.png";
import { Github } from "@/icons/Github";
import { ArrowRight } from "@/icons/ArrowRight";

export const AuthSplitLoginCard = () => (
  <div className="flex w-96 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg">
    <div className="relative hidden w-32 shrink-0 sm:block">
      <Image src={sideImage} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-violet-900/40" />
    </div>
    <div className="flex-1 p-5">
      <h3 className="mb-1 text-base font-semibold text-neutral-900">
        Welcome back
      </h3>
      <p className="mb-4 text-[11px] text-neutral-400">
        Sign in to your account
      </p>
      <div className="mb-4 space-y-2.5">
        <input
          type="email"
          placeholder="Email"
          className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="focus:ring-none h-9 w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 text-xs transition-all outline-none focus:border-neutral-400"
        />
      </div>
      <button className="flex h-9 w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-neutral-900 text-xs font-semibold text-white transition-colors hover:bg-neutral-800">
        Sign In <ArrowRight size={12} />
      </button>
      <button className="mt-2 flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
        <Github size={14} /> Continue with GitHub
      </button>
    </div>
  </div>
);

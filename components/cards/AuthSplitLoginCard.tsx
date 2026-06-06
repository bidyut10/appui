"use client";
import React from "react";
import Image from "next/image";
import sideImage from "@/public/bh.png";
import { Github } from "@/icons/Github";
import { ArrowRight } from "@/icons/ArrowRight";

export const AuthSplitLoginCard = () => (
  <div className="w-96 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans flex">
    <div className="hidden sm:block relative w-32 shrink-0">
      <Image src={sideImage} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-violet-900/40" />
    </div>
    <div className="flex-1 p-5">
      <h3 className="text-base font-semibold text-neutral-900 mb-1">Welcome back</h3>
      <p className="text-[11px] text-neutral-400 mb-4">Sign in to your account</p>
      <div className="space-y-2.5 mb-4">
        <input type="email" placeholder="Email" className="w-full h-9 px-3 rounded-lg border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-neutral-400 focus:ring-none transition-all" />
        <input type="password" placeholder="Password" className="w-full h-9 px-3 rounded-lg border border-neutral-200 bg-neutral-50 text-xs outline-none focus:border-neutral-400 focus:ring-none transition-all" />
      </div>
      <button className="w-full h-9 bg-neutral-900 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1 hover:bg-neutral-800 transition-colors cursor-pointer">
        Sign In <ArrowRight size={12} />
      </button>
      <button className="w-full mt-2 h-9 border border-neutral-200 rounded-lg text-xs font-medium text-neutral-700 flex items-center justify-center gap-2 hover:bg-neutral-50 transition-colors cursor-pointer">
        <Github size={14} /> Continue with GitHub
      </button>
    </div>
  </div>
);

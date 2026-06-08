import React, { forwardRef } from "react";
import Image from "next/image";

import bg_image from "@/public/bg.png";
import profile_logo from "@/public/boy.png";

export const LinkedInProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative">
      <Image
        src={bg_image}
        alt="linkedin-profile-banner"
        className="h-20 w-full object-cover"
      />

      <div className="absolute -bottom-8 left-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-800 shadow">
        <Image
          src={profile_logo}
          alt="linkedin-profile-avatar"
          className="w-7"
        />
      </div>
    </div>

    <div className="px-4 pt-10 pb-4">
      <h4 className="mt-2 font-bold text-neutral-900">John Doe</h4>

      <p className="text-xs text-neutral-600">
        Software Developer at OpenSourceUI
      </p>

      <p className="mt-0.5 text-xs text-neutral-400">
        West Bengal, India · 500+ connections
      </p>

      <p className="mt-2 text-xs leading-relaxed text-neutral-600">
        Passionate about open-source, minimal UI, and developer tools.
      </p>

      <div className="mt-3 flex gap-2">
        <button className="flex-1 rounded-full bg-blue-600 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700">
          Connect
        </button>

        <button className="flex-1 rounded-full border border-blue-600 py-1.5 text-xs font-medium text-blue-600 transition-colors hover:bg-blue-50">
          Message
        </button>
      </div>
    </div>

    <div className="flex justify-around border-t border-neutral-100 px-4 py-3 text-center">
      <div>
        <p className="text-sm font-bold text-neutral-900">42</p>
        <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
          Posts
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-neutral-900">500+</p>
        <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
          Connections
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-neutral-900">2.5yr</p>
        <p className="text-[10px] tracking-wide text-neutral-400 uppercase">
          Experience
        </p>
      </div>
    </div>
  </div>
));

LinkedInProfileCard.displayName = "LinkedInProfileCard";

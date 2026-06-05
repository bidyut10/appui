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
    className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="relative">
      <Image
        src={bg_image}
        alt="linkedin-profile-banner"
        className="h-20 w-full object-cover"
      />

      <div className="absolute -bottom-8 left-4 w-16 h-16 rounded-full border-4 border-white bg-neutral-800 flex items-center justify-center shadow">
        <Image
          src={profile_logo}
          alt="linkedin-profile-avatar"
          className="w-7"
        />
      </div>
    </div>

    <div className="px-4 pb-4 pt-10">
      <h4 className="mt-2 font-bold text-neutral-900">John Doe</h4>

      <p className="text-neutral-600 text-xs">
        Software Developer at OpenSourceUI
      </p>

      <p className="text-neutral-400 text-xs mt-0.5">
        West Bengal, India · 500+ connections
      </p>

      <p className="text-neutral-600 text-xs mt-2 leading-relaxed">
        Passionate about open-source, minimal UI, and developer tools.
      </p>

      <div className="mt-3 flex gap-2">
        <button className="flex-1 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
          Connect
        </button>

        <button className="flex-1 py-1.5 text-xs font-medium border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
          Message
        </button>
      </div>
    </div>

    <div className="border-t border-neutral-100 px-4 py-3 flex justify-around text-center">
      <div>
        <p className="text-sm font-bold text-neutral-900">42</p>
        <p className="text-[10px] text-neutral-400 uppercase tracking-wide">
          Posts
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-neutral-900">500+</p>
        <p className="text-[10px] text-neutral-400 uppercase tracking-wide">
          Connections
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-neutral-900">2.5yr</p>
        <p className="text-[10px] text-neutral-400 uppercase tracking-wide">
          Experience
        </p>
      </div>
    </div>
  </div>
));

LinkedInProfileCard.displayName = "LinkedInProfileCard";

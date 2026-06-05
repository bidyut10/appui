import React, { forwardRef } from "react";
import Image from "next/image";

import bg_image from "@/public/dithar.png";
import profile_logo from "@/public/boy.png";

export const FacebookProfileCard = forwardRef<
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
        alt="facebook-profile-banner"
        className="h-24 w-full object-cover"
      />

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white bg-neutral-800 flex items-center justify-center shadow">
        <Image
          src={profile_logo}
          alt="facebook-profile-avatar"
          className="w-8"
        />
      </div>
    </div>

    <div className="px-4 pb-4 pt-12 flex flex-col items-center text-center">
      <h4 className="mt-2 font-bold text-neutral-900 text-lg">John Doe</h4>

      <p className="text-neutral-500 text-xs">@johndoe · West Bengal</p>

      <p className="text-neutral-600 text-xs mt-1.5 leading-relaxed">
        Software dev · Open-source advocate · Building cool UIs
      </p>

      <div className="flex gap-6 mt-3 text-xs text-neutral-500">
        <div className="text-center">
          <p className="font-bold text-neutral-900">1.2K</p>
          <p>Friends</p>
        </div>

        <div className="text-center">
          <p className="font-bold text-neutral-900">84</p>
          <p>Followers</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2 w-full">
        <button className="flex-1 py-1.5 text-xs font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Add Friend
        </button>

        <button className="flex-1 py-1.5 text-xs font-medium border border-neutral-200 rounded-md hover:bg-neutral-50 transition-colors text-neutral-700">
          Message
        </button>
      </div>
    </div>
  </div>
));

FacebookProfileCard.displayName = "FacebookProfileCard";

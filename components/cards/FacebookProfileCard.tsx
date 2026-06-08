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
    className={`w-72 overflow-hidden rounded-xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative">
      <Image
        src={bg_image}
        alt="facebook-profile-banner"
        className="h-24 w-full object-cover"
      />

      <div className="absolute -bottom-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-neutral-800 shadow">
        <Image
          src={profile_logo}
          alt="facebook-profile-avatar"
          className="w-8"
        />
      </div>
    </div>

    <div className="flex flex-col items-center px-4 pt-12 pb-4 text-center">
      <h4 className="mt-2 text-lg font-bold text-neutral-900">John Doe</h4>

      <p className="text-xs text-neutral-500">@johndoe · West Bengal</p>

      <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
        Software dev · Open-source advocate · Building cool UIs
      </p>

      <div className="mt-3 flex gap-6 text-xs text-neutral-500">
        <div className="text-center">
          <p className="font-bold text-neutral-900">1.2K</p>
          <p>Friends</p>
        </div>

        <div className="text-center">
          <p className="font-bold text-neutral-900">84</p>
          <p>Followers</p>
        </div>
      </div>

      <div className="mt-4 flex w-full gap-2">
        <button className="flex-1 rounded-md bg-blue-500 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-blue-600">
          Add Friend
        </button>

        <button className="flex-1 rounded-md border border-neutral-200 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
          Message
        </button>
      </div>
    </div>
  </div>
));

FacebookProfileCard.displayName = "FacebookProfileCard";

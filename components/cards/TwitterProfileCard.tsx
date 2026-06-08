import React, { forwardRef } from "react";
import { Location } from "@/icons/Location";
import { Web } from "@/icons/Web";
import Image from "next/image";
import bg_image from "@/public/dbg.png";
import profile_logo from "@/public/boy.png";

export const TwitterProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg ${className}`}
    {...props}
  >
    <div className="relative">
      <Image
        src={bg_image}
        alt="twitter-logo-boy"
        className="h-24 w-full object-cover"
      />

      <div className="absolute -bottom-8 left-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-800">
        <Image src={profile_logo} alt="twitter-logo-boy" className="w-7" />
      </div>
    </div>

    <div className="px-5 pt-12 pb-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg leading-none font-medium text-neutral-900">
            John Doe
          </p>
          <p className="mt-1 text-sm text-neutral-400">@johndoe</p>
        </div>

        <button className="cursor-pointer rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-black">
          Follow
        </button>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-neutral-700">
        Building things on the web · Minimalism enthusiast · Open-source
      </p>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-neutral-500">
        <span className="flex items-center gap-1">
          <Location size={13} />
          West Bengal
        </span>

        <span className="flex items-center gap-1">
          <Web size={13} />
          example.com
        </span>
      </div>

      <div className="mt-4 flex gap-5 text-sm text-neutral-500">
        <span>
          <b className="text-neutral-900">320</b> Following
        </span>

        <span>
          <b className="text-neutral-900">1.2K</b> Followers
        </span>
      </div>
    </div>
  </div>
));

TwitterProfileCard.displayName = "TwitterProfileCard";

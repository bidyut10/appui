import React, { forwardRef } from "react";
import Image from "next/image";
import bg_image from "@/public/bh.png";
import profile_logo from "@/public/boy.png";
import { Location } from "@/icons/Location";
import { UserGroup } from "@/icons/UserGroup";
import { UserCheck } from "@/icons/UserCheck";
import { Web } from "@/icons/Web";

export const GithubProfileCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`w-72 bg-white border border-neutral-100 shadow-lg rounded-2xl overflow-hidden font-sans ${className}`}
    {...props}
  >
    <div className="relative">
      <Image
        src={bg_image}
        alt="github-profile-banner"
        className="h-16 w-full object-cover"
      />

      <div className="absolute -bottom-8 left-5 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-800 shadow">
        <Image src={profile_logo} alt="github-profile-avatar" className="w-7" />
      </div>
    </div>

    <div className="px-5 pb-5 pt-10 flex flex-col">
      <h4 className="mt-2 font-bold text-neutral-900">@johndoe10</h4>

      <p className="text-neutral-500 text-xs">John Doe</p>

      <p className="text-neutral-600 text-xs mt-1 leading-relaxed">
        Open-source developer · Building minimal UI systems
      </p>

      <div className="mt-3 flex gap-4 text-xs text-neutral-500">
        <span className="flex items-center gap-1">
          <UserGroup size={12} /> <b className="text-neutral-900">124</b>{" "}
          followers
        </span>

        <span className="flex items-center gap-1">
          <UserCheck size={12} /> <b className="text-neutral-900">80</b>{" "}
          following
        </span>
      </div>

      <div className="mt-2 flex gap-3 text-xs text-neutral-500">
        <span className="flex items-center gap-1">
          <Location size={11} /> West Bengal
        </span>

        <span className="flex items-center gap-1">
          <Web size={11} className="text-neutral-500" /> example.com
        </span>
      </div>

      <div className="mt-3 flex gap-2">
        <button className="flex-1 py-1.5 text-xs cursor-pointer font-mono font-medium bg-neutral-900 text-white rounded-md hover:bg-black transition-colors">
          Follow
        </button>

        <button className="flex-1 py-1.5 text-xs cursor-pointer font-mono font-medium border border-neutral-200 rounded-md hover:bg-neutral-50 transition-colors text-neutral-700">
          Message
        </button>
      </div>
    </div>

    <div className="border-t border-neutral-100 px-5 py-3 flex justify-around text-center">
      <div>
        <p className="text-sm font-bold text-neutral-900">42</p>
        <p className="text-[10px] text-neutral-400 uppercase tracking-wide">
          Repos
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-neutral-900">550</p>
        <p className="text-[10px] text-neutral-400 uppercase tracking-wide">
          Commits
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-neutral-900">18</p>
        <p className="text-[10px] text-neutral-400 uppercase tracking-wide">
          Stars
        </p>
      </div>
    </div>
  </div>
));

GithubProfileCard.displayName = "GithubProfileCard";

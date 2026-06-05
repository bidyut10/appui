import React, { forwardRef } from "react";
import Image from "next/image";
import profileImage from "@/public/boy.png";
import { Github } from "@/icons/Github";
import { Mail } from "@/icons/Mail";

export const TeamMemberCard = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative w-56 h-72 rounded-2xl overflow-hidden cursor-pointer ${className}`}
    {...props}
  >
    <Image
      src={profileImage}
      alt="Team member"
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

    <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
      <button className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer">
        <Github size={13} />
      </button>
      <button className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer">
        <Mail size={13} />
      </button>
    </div>

    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-1">
        Lead Engineer
      </p>
      <h3 className="text-white text-lg font-semibold leading-tight">John Doe</h3>
      <p className="text-xs text-white/60 mt-1.5 leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        Building design tools that developers love. Previously at Stripe.
      </p>
    </div>
  </div>
));
TeamMemberCard.displayName = "TeamMemberCard";

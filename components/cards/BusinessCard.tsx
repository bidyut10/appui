import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

import { Location } from "@/icons/Location";
import { Mail } from "@/icons/Mail";
import { User } from "@/icons/User";
import { Phone } from "@/icons/Phone";

/**
 * Modern business card component built with React,
 * TypeScript, and Tailwind CSS.
 *
 * Replace the demo content and icons with your own branding.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type BusinessCardProps = {
  name?: string;
  role?: string;

  email?: string;
  phone?: string;
  location?: string;
  website?: string;

  initials?: string;

  userIcon?: ReactNode;
  phoneIcon?: ReactNode;
  locationIcon?: ReactNode;
  mailIcon?: ReactNode;
} & ComponentPropsWithoutRef<"div">;

export const BusinessCard = forwardRef<HTMLDivElement, BusinessCardProps>(
  (
    {
      className,

      name = "Bidyut Kundu",
      role = "Software Developer",

      email = "bidyut.kundu.dev@gmail.com",
      phone = "+91 86176 98611",
      location = "West Bengal, India",
      website = "opensourceui.in",

      initials = "BK",

      userIcon,
      phoneIcon,
      locationIcon,
      mailIcon,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="business-card"
        className={cn(
          "group relative h-52 w-96 overflow-hidden rounded-2xl bg-neutral-900 p-8 shadow-lg",
          className,
        )}
        {...props}
      >
        <div
          data-slot="business-card-content"
          className="relative z-10 flex h-full flex-col justify-between"
        >
          {/* User details */}
          <div>
            <h2
              title={name}
              className="text-xl font-light tracking-widest text-white uppercase"
            >
              {name}
            </h2>

            <p
              title={role}
              className="mt-1 text-[10px] tracking-[0.3em] text-neutral-500 uppercase"
            >
              {role}
            </p>
          </div>

          {/* Contact details */}
          <div data-slot="business-card-contact" className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              {userIcon ?? <User size={11} />}
              {email}
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400">
              {phoneIcon ?? <Phone size={11} />}
              {phone}
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400">
              {locationIcon ?? <Location size={11} />}
              {location}
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400">
              {mailIcon ?? <Mail size={11} />}
              {website}
            </div>
          </div>
        </div>

        {/* Brand initials */}
        <div
          data-slot="business-card-badge"
          className="absolute top-6 right-6 opacity-20 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white text-lg font-bold text-white">
            {initials}
          </div>
        </div>

        {/* Decorative background glow */}
        <div
          data-slot="business-card-decoration"
          className="pointer-events-none absolute right-[-5%] bottom-[-30%] h-48 w-48 rounded-full bg-white/5 blur-3xl"
        />
      </div>
    );
  },
);

BusinessCard.displayName = "BusinessCard";

import { forwardRef, type ComponentPropsWithoutRef } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

import profileImage from "@/public/boy.png";

/*
| Apple Wallet / Membership pass card built with Next.js, React,
| TypeScript, and Tailwind CSS.
|
| Replace the demo member details, avatar, and expiry date
| with your own content.
|
| React Users:
| Replace `next/image` with a standard `img` element.
*/

export type WalletPassCardProps = {
  memberName?: string;
  membershipType?: string;
  passType?: string;
  expiryDate?: string;

  avatar?: StaticImageData | string;
  avatarAlt?: string;
} & ComponentPropsWithoutRef<"div">;

export const WalletPassCard = forwardRef<HTMLDivElement, WalletPassCardProps>(
  (
    {
      className,

      memberName = "John Doe",
      membershipType = "Premium Member",
      passType = "Member Pass",
      expiryDate = "Dec 2026",

      avatar = profileImage,
      avatarAlt = "Member profile",

      ...props
    },
    ref,
  ) => (
    <div
      ref={ref}
      data-slot="wallet-pass-card"
      className={cn(
        "group w-64 cursor-pointer overflow-hidden rounded-2xl font-sans shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Pass Header */}
      <div
        data-slot="wallet-pass-card-header"
        className="bg-linear-to-br from-blue-600 to-teal-700 p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
            {passType}
          </span>

          <div
            data-slot="wallet-pass-card-badge"
            className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20"
          >
            <span className="text-[10px] font-bold text-white">
              {memberName.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>

        <div
          data-slot="wallet-pass-card-member"
          className="flex items-center gap-3"
        >
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/30">
            <Image
              src={avatar}
              alt={avatarAlt}
              className="h-full w-full object-cover"
              sizes="48px"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{memberName}</p>

            <p className="text-[11px] text-white/60">{membershipType}</p>
          </div>
        </div>
      </div>

      {/* Pass Footer */}
      <div
        data-slot="wallet-pass-card-footer"
        className="relative bg-white px-4 py-3"
      >
        {/* Ticket Cut Pattern */}
        <div className="absolute -top-1.5 right-0 left-0 flex justify-between px-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-3 w-3 rounded-full bg-white" />
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <div>
            <p className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
              Valid Until
            </p>

            <p className="text-xs font-semibold text-neutral-900">
              {expiryDate}
            </p>
          </div>

          {/* QR Placeholder */}
          <div
            data-slot="wallet-pass-card-qr"
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-100"
          >
            <div className="grid h-8 w-8 grid-cols-3 gap-px">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={i % 2 === 0 ? "bg-neutral-900" : "bg-white"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
);

WalletPassCard.displayName = "WalletPassCard";

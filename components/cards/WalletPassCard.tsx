"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";


/**
 * Apple Wallet-style pass that flips to reveal QR details on click.
 *
 * Replace the demo member details with your own content.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type WalletPassCardProps = {
  memberName?: string;
  membershipType?: string;
  passType?: string;
  expiryDate?: string;
  memberId?: string;
  avatar?: string;
  avatarAlt?: string;
  onFlip?: (flipped: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

export const WalletPassCard = forwardRef<HTMLDivElement, WalletPassCardProps>(
  (
    {
      className,
      memberName = "John Doe",
      membershipType = "Premium Member",
      passType = "Member Pass",
      expiryDate = "Dec 2026",
      memberId = "MBR-2048",
      avatar = "/boy.png",
      avatarAlt = "Member profile",
      onFlip,
      ...props
    },
    ref,
  ) => {
    const [flipped, setFlipped] = useState(false);

    const toggleFlip = () => {
      const next = !flipped;
      setFlipped(next);
      onFlip?.(next);
    };

    return (
      <div
        ref={ref}
        data-slot="wallet-pass-card"
        className={cn("w-64 font-sans perspective-[1000px]", className)}
        {...props}
      >
        <style>{`
          @keyframes wallet-flip-shadow {
            0%, 100% { box-shadow: 0 10px 30px rgba(0,0,0,0.12); }
            50% { box-shadow: 0 18px 40px rgba(0,0,0,0.18); }
          }
        `}</style>

        <button
          type="button"
          onClick={toggleFlip}
          aria-label={flipped ? "Show pass front" : "Show pass back"}
          aria-pressed={flipped}
          data-slot="wallet-pass-card-flip"
          className="relative h-[13.5rem] w-full cursor-pointer overflow-hidden rounded-2xl border-0 bg-white p-0 shadow-lg outline-none"
          style={{
            animation: flipped
              ? undefined
              : "wallet-flip-shadow 3s ease-in-out infinite",
          }}
        >
          <div
            className="relative h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.2,0.64,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="bg-linear-to-br from-blue-600 to-teal-700 p-4">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-widest text-white/60 uppercase">
                    {passType}
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20">
                    <span className="text-[10px] font-bold text-white">
                      {memberName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/30">
                    <Image
                      src={avatar}
                      alt={avatarAlt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">
                      {memberName}
                    </p>
                    <p className="text-[11px] text-white/60">
                      {membershipType}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex-1 bg-white px-4 py-3">
                <div className="absolute -top-1.5 right-0 left-0 flex justify-between px-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-3 w-3 rounded-full bg-white ring-1 ring-white"
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="text-left">
                    <p className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
                      Valid Until
                    </p>
                    <p className="text-xs font-semibold text-neutral-900">
                      {expiryDate}
                    </p>
                  </div>
                  <p className="text-[10px] text-neutral-400">Tap to flip</p>
                </div>
              </div>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 overflow-hidden rounded-2xl bg-white"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center bg-white p-5">
                <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                  Scan at entry
                </p>
                <div className="my-3 grid h-20 w-20 grid-cols-5 gap-px rounded-lg border border-neutral-100 bg-white p-2">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "rounded-[1px]",
                        (i + Math.floor(i / 5)) % 2 === 0
                          ? "bg-neutral-900"
                          : "bg-white",
                      )}
                    />
                  ))}
                </div>
                <p className="font-mono text-xs text-neutral-700">{memberId}</p>
                <p className="mt-1 text-[10px] text-neutral-400">
                  Tap again to flip back
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  },
);

WalletPassCard.displayName = "WalletPassCard";

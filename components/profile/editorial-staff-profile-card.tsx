"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

export type EditorialStaffProfileCardProps = Readonly<
  {
    index?: string;
    name?: string;
    role?: string;
    bio?: string;
    image?: string;
    imageAlt?: string;
  } & ComponentPropsWithoutRef<"article">
>;

// Editorial staff index — numbered roster row, not another centered avatar card.
export const EditorialStaffProfileCard = forwardRef<
  HTMLElement,
  EditorialStaffProfileCardProps
>(
  (
    {
      className,
      index = "01",
      name = "Bidyut Kundu",
      role = "Design editor",
      bio = "Typography, print systems, and the occasional long-form essay on slow tools.",
      image = "/profile-picture.png",
      imageAlt,
      ...props
    },
    ref,
  ) => {
    const alt = imageAlt ?? name;

    return (
      <article
        ref={ref}
        data-slot="editorial-staff-profile-card"
        className={cn(
          "flex w-72 gap-4 border-l-2 border-neutral-900 bg-white py-4 pr-4 pl-5 font-sans",
          className,
        )}
        {...props}
      >
        <p
          aria-hidden
          className="w-8 shrink-0 pt-0.5 font-mono text-[11px] leading-none text-neutral-400"
        >
          {index}
        </p>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-serif text-2xl leading-none tracking-tight text-neutral-950">
                {name}
              </h3>
              <p className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-neutral-500 uppercase">
                {role}
              </p>
            </div>

            <div className="size-14 shrink-0 overflow-hidden border border-neutral-200 bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={image} alt={alt} className="size-full object-cover" />
            </div>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-neutral-600">{bio}</p>
        </div>
      </article>
    );
  },
);

EditorialStaffProfileCard.displayName = "EditorialStaffProfileCard";

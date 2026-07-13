"use client";

import { forwardRef, type ComponentPropsWithoutRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/cn";

export type PaymentTemplateMember = Readonly<{
  id: string;
  image: string;
  imageAlt?: string;
}>;

export type PaymentTemplatesCardProps = Readonly<
  {
    title?: string;
    total?: string;
    sectionTitle?: string;
    sectionSubtitle?: string;
    members?: readonly PaymentTemplateMember[];
    extraCount?: number;
    href?: string;
  } & ComponentPropsWithoutRef<"article">
>;

const DEFAULT_MEMBERS: readonly PaymentTemplateMember[] = [
  { id: "1", image: "/profile-picture.png", imageAlt: "Team member" },
  { id: "2", image: "/woman.png", imageAlt: "Team member" },
  { id: "3", image: "/profile-picture.png", imageAlt: "Team member" },
];

function MemberAvatar({
  member,
  className,
}: Readonly<{ member: PaymentTemplateMember; className?: string }>) {
  return (
    <div
      className={cn(
        "relative size-8 overflow-hidden rounded-full border-2 border-white bg-neutral-100",
        className,
      )}
    >
      <Image
        src={member.image}
        alt={member.imageAlt ?? "Member"}
        fill
        sizes="32px"
        className="object-cover"
      />
    </div>
  );
}

// Payment templates card — total balance with nested mandatory payments block.
export const PaymentTemplatesCard = forwardRef<
  HTMLElement,
  PaymentTemplatesCardProps
>(
  (
    {
      className,
      title = "Payment Templates",
      total = "$486.32",
      sectionTitle = "Mandatory payments",
      sectionSubtitle = "Essential dues",
      members = DEFAULT_MEMBERS,
      extraCount = 8,
      href = "#",
      ...props
    },
    ref,
  ) => {
    const actionClassName =
      "absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white text-neutral-700 shadow-sm transition-colors hover:bg-neutral-50";

    return (
      <article
        ref={ref}
        data-slot="payment-templates-card"
        className={cn(
          "w-sm rounded-3xl border border-neutral-100 bg-white p-5 font-sans shadow-lg shadow-black/5",
          className,
        )}
        {...props}
      >
        <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
        <p className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 tabular-nums">
          {total}
        </p>

        <div className="relative mt-5 rounded-2xl bg-neutral-50 p-4">
          <div className="min-w-0 pr-10">
            <p className="text-sm font-semibold text-neutral-900">
              {sectionTitle}
            </p>
            <p className="mt-0.5 text-xs text-neutral-500">{sectionSubtitle}</p>
          </div>

          {href && href !== "#" ? (
            <Link href={href} aria-label="View payments" className={actionClassName}>
              <ArrowUpRight size={15} aria-hidden />
            </Link>
          ) : (
            <button type="button" aria-label="View payments" className={actionClassName}>
              <ArrowUpRight size={15} aria-hidden />
            </button>
          )}

          <div className="mt-4 flex items-center">
            {members.map((member, index) => (
              <MemberAvatar
                key={member.id}
                member={member}
                className={index === 0 ? "" : "-ml-2"}
              />
            ))}
            {extraCount > 0 ? (
              <span className="-ml-2 flex size-8 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-[11px] font-semibold text-white tabular-nums">
                +{extraCount}
              </span>
            ) : null}
          </div>
        </div>
      </article>
    );
  },
);

PaymentTemplatesCard.displayName = "PaymentTemplatesCard";

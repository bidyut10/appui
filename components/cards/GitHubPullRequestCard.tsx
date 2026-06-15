"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { Check } from "@/icons/Check";
import { Chat } from "@/icons/Chat";

/**
 * GitHub pull request review card with approve / comment actions.
 *
 * Replace demo PR data with your own.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type GitHubPullRequestCardProps = {
  title?: string;
  number?: number;
  author?: string;
  branch?: string;
  additions?: number;
  deletions?: number;
  avatar?: string;
  onApprove?: () => void;
  onComment?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const GitHubPullRequestCard = forwardRef<
  HTMLDivElement,
  GitHubPullRequestCardProps
>(
  (
    {
      className,
      title = "Add email & text animation widgets",
      number = 142,
      author = "bidyut-kundu",
      branch = "feat/widgets → main",
      additions = 842,
      deletions = 12,
      avatar = "/boy.png",
      onApprove,
      onComment,
      ...props
    },
    ref,
  ) => {
    const [approved, setApproved] = useState(false);

    return (
      <div
        ref={ref}
        data-slot="github-pull-request-card"
        className={cn(
          "w-72 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
            Open
          </span>
          <span className="font-mono text-[10px] text-neutral-400">
            #{number}
          </span>
        </div>

        <h3 className="text-[13px] leading-snug font-semibold text-neutral-900">
          {title}
        </h3>
        <p className="mt-1 text-[11px] text-neutral-500">{branch}</p>

        <div className="mt-3 flex items-center gap-2">
          <Image
            src={avatar}
            alt={author}
            width={24}
            height={24}
            className="rounded-full"
          />
          <span className="text-[11px] text-neutral-600">
            <span className="font-semibold text-neutral-800">{author}</span>{" "}
            opened this PR
          </span>
        </div>

        <div className="mt-2 flex gap-2 font-mono text-[10px]">
          <span className="text-emerald-600">+{additions}</span>
          <span className="text-rose-500">-{deletions}</span>
        </div>

        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={() => {
              setApproved(true);
              onApprove?.();
            }}
            data-slot="github-pull-request-card-approve"
            className={cn(
              "flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-lg py-2 text-[11px] font-semibold transition-colors",
              approved
                ? "bg-emerald-500 text-white"
                : "border border-neutral-200 bg-neutral-50 text-neutral-700 hover:bg-neutral-100",
            )}
          >
            <Check size={12} />
            {approved ? "Approved" : "Approve"}
          </button>
          <button
            type="button"
            onClick={onComment}
            className="flex flex-1 cursor-pointer items-center justify-center gap-1 rounded-lg border border-neutral-100 bg-white py-2 text-[11px] font-semibold text-neutral-700 hover:bg-neutral-50"
          >
            <Chat size={12} />
            Comment
          </button>
        </div>
      </div>
    );
  },
);

GitHubPullRequestCard.displayName = "GitHubPullRequestCard";

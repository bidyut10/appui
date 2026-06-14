"use client";

import {
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Chat } from "@/icons/Chat";
import { Share } from "@/icons/Share";
import { Bookmark } from "@/icons/Bookmark";

/**
 * Reddit-style post card with upvote/downvote and white layout.
 *
 * Replace demo content with your own. Need icons? Visit nexticons.in.
 */
export type RedditPostCardProps = {
  subreddit?: string;
  author?: string;
  title?: string;
  body?: string;
  upvotes?: number;
  comments?: number;
  time?: string;
  onVote?: (direction: "up" | "down") => void;
} & ComponentPropsWithoutRef<"div">;

export const RedditPostCard = forwardRef<HTMLDivElement, RedditPostCardProps>(
  (
    {
      className,
      subreddit = "r/webdev",
      author = "u/bidyut_kundu",
      title = "I open-sourced 250+ production-ready UI components",
      body = "Built with Next.js, Tailwind v4, and TypeScript. Copy-paste ready for your projects.",
      upvotes = 2847,
      comments = 342,
      time = "5h",
      onVote,
      ...props
    },
    ref,
  ) => {
    const [votes, setVotes] = useState(upvotes);
    const [voteDir, setVoteDir] = useState<"up" | "down" | null>(null);

    const vote = (dir: "up" | "down") => {
      if (voteDir === dir) {
        setVotes(upvotes);
        setVoteDir(null);
      } else {
        setVotes(upvotes + (dir === "up" ? 1 : -1));
        setVoteDir(dir);
        onVote?.(dir);
      }
    };

    return (
      <div
        ref={ref}
        data-slot="reddit-post-card"
        className={cn(
          "flex w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex w-10 shrink-0 flex-col items-center gap-0.5 bg-neutral-50 py-3">
          <button
            type="button"
            aria-label="Upvote"
            onClick={() => vote("up")}
            className={cn(
              "cursor-pointer text-lg leading-none transition-colors",
              voteDir === "up" ? "text-orange-500" : "text-neutral-400 hover:text-orange-500",
            )}
          >
            ▲
          </button>
          <span
            className={cn(
              "font-mono text-[11px] font-bold tabular-nums",
              voteDir === "up" && "text-orange-600",
              voteDir === "down" && "text-indigo-600",
              !voteDir && "text-neutral-800",
            )}
          >
            {votes.toLocaleString()}
          </span>
          <button
            type="button"
            aria-label="Downvote"
            onClick={() => vote("down")}
            className={cn(
              "cursor-pointer text-lg leading-none transition-colors",
              voteDir === "down" ? "text-indigo-500" : "text-neutral-400 hover:text-indigo-500",
            )}
          >
            ▼
          </button>
        </div>

        <div className="min-w-0 flex-1 p-3">
          <div className="mb-1 flex items-center gap-1.5 text-[10px] text-neutral-500">
            <span className="font-bold text-neutral-800">{subreddit}</span>
            <span>·</span>
            <span>Posted by {author}</span>
            <span>·</span>
            <span>{time}</span>
          </div>
          <h3 className="text-[13px] font-semibold leading-snug text-neutral-900">{title}</h3>
          <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-neutral-600">{body}</p>
          <div className="mt-2.5 flex items-center gap-3 text-[10px] font-semibold text-neutral-500">
            <span className="flex items-center gap-1">
              <Chat size={12} />
              {comments} Comments
            </span>
            <span className="flex items-center gap-1">
              <Share size={12} />
              Share
            </span>
            <span className="flex items-center gap-1">
              <Bookmark size={12} />
              Save
            </span>
          </div>
        </div>
      </div>
    );
  },
);

RedditPostCard.displayName = "RedditPostCard";

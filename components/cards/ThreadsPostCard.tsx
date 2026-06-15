"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { Heart } from "@/icons/Heart";
import { Chat } from "@/icons/Chat";
import { Repeat } from "@/icons/Repeat";
import { Send } from "@/icons/Send";

/**
 * Threads-style post card — clean white Meta aesthetic.
 *
 * Replace demo content with your own. Need icons? Visit nexticons.in.
 */
export type ThreadsPostCardProps = {
  username?: string;
  content?: string;
  time?: string;
  likes?: number;
  replies?: number;
  avatar?: string;
  postImage?: string;
  showImage?: boolean;
  onLike?: () => void;
} & ComponentPropsWithoutRef<"div">;

export const ThreadsPostCard = forwardRef<HTMLDivElement, ThreadsPostCardProps>(
  (
    {
      className,
      username = "bidyut.dev",
      content = "Just dropped 14 new email & editor widgets. All white background, all interactive. Which one should I build next?",
      time = "1h",
      likes = 892,
      replies = 47,
      avatar = "/boy.png",
      postImage = "/dithar.png",
      showImage = true,
      onLike,
      ...props
    },
    ref,
  ) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    return (
      <div
        ref={ref}
        data-slot="threads-post-card"
        className={cn(
          "w-72 rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-neutral-100">
              <Image
                src={avatar}
                alt={username}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div className="mt-1 w-px flex-1 bg-neutral-200" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold text-neutral-900">
                {username}
              </span>
              <span className="text-[11px] text-neutral-400">{time}</span>
            </div>
            <p className="mt-1.5 text-[13px] leading-relaxed text-neutral-800">
              {content}
            </p>

            {showImage && (
              <div className="relative mt-2.5 aspect-16/10 overflow-hidden rounded-xl border border-neutral-100">
                <Image
                  src={postImage}
                  alt="Thread attachment"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-3 flex items-center gap-4">
              {[
                {
                  icon: Heart,
                  count: likeCount,
                  active: liked,
                  onClick: () => {
                    setLiked(!liked);
                    setLikeCount(liked ? likes : likes + 1);
                    onLike?.();
                  },
                },
                { icon: Chat, count: replies },
                { icon: Repeat, count: 12 },
                { icon: Send, count: null },
              ].map(({ icon: Icon, count, active, onClick }, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={onClick}
                  className="flex cursor-pointer items-center gap-1 text-neutral-500 transition-colors hover:text-neutral-900"
                >
                  <Icon
                    size={16}
                    className={active ? "fill-rose-500 text-rose-500" : ""}
                  />
                  {count !== null && (
                    <span className="text-[11px] font-medium tabular-nums">
                      {count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ThreadsPostCard.displayName = "ThreadsPostCard";

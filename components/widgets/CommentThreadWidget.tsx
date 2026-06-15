"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/cn";

import { Send } from "@/icons/Send";

export type CommentItem = {
  id: string;
  author: string;
  avatar?: string;
  text: string;
  time: string;
  likes?: number;
};

/**
 * Comment thread widget with reply input — like Figma, Notion, or Linear.
 *
 * Replace the demo comments with your own thread data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type CommentThreadWidgetProps = {
  title?: string;
  comments?: CommentItem[];
  placeholder?: string;
  onReply?: (text: string) => void;
  onLike?: (id: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultComments: CommentItem[] = [
  {
    id: "1",
    author: "Sarah Chen",
    avatar: "/boy.png",
    text: "Can we tighten the spacing on the mobile cards?",
    time: "2h ago",
    likes: 3,
  },
  {
    id: "2",
    author: "Marcus Webb",
    avatar: "/boy.png",
    text: "Agreed — I'll push a fix in the next PR.",
    time: "1h ago",
    likes: 1,
  },
];

export const CommentThreadWidget = forwardRef<
  HTMLDivElement,
  CommentThreadWidgetProps
>(
  (
    {
      className,
      title = "Comments",
      comments = defaultComments,
      placeholder = "Add a comment…",
      onReply,
      onLike,
      ...props
    },
    ref,
  ) => {
    const [items, setItems] = useState(comments);
    const [draft, setDraft] = useState("");

    const submit = () => {
      if (!draft.trim()) return;
      const newComment: CommentItem = {
        id: String(Date.now()),
        author: "You",
        avatar: "/boy.png",
        text: draft.trim(),
        time: "Just now",
        likes: 0,
      };
      setItems((prev) => [...prev, newComment]);
      onReply?.(draft.trim());
      setDraft("");
    };

    const likeComment = (id: string) => {
      setItems((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, likes: (c.likes ?? 0) + 1 } : c,
        ),
      );
      onLike?.(id);
    };

    return (
      <div
        ref={ref}
        data-slot="comment-thread-widget"
        className={cn(
          "w-sm overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="border-b border-neutral-100 px-4 py-2.5">
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
          <p className="text-[10px] text-neutral-400">
            {items.length} comments
          </p>
        </div>

        <div
          data-slot="comment-thread-widget-list"
          className="max-h-44 [scrollbar-width:none] space-y-3 overflow-y-auto px-4 py-3 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((comment) => (
            <div key={comment.id} className="flex gap-2.5">
              <div className="h-7 w-7 shrink-0 overflow-hidden rounded-full bg-neutral-100">
                <Image
                  src={comment.avatar ?? "/boy.png"}
                  alt={comment.author}
                  width={28}
                  height={28}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-[12px] font-semibold text-neutral-900">
                    {comment.author}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    {comment.time}
                  </span>
                </div>
                <p className="mt-0.5 text-[12px] leading-relaxed text-neutral-600">
                  {comment.text}
                </p>
                <button
                  type="button"
                  onClick={() => likeComment(comment.id)}
                  className="mt-1 cursor-pointer text-[10px] font-medium text-neutral-400 transition-colors hover:text-rose-500"
                >
                  {comment.likes ? `${comment.likes} likes` : "Like"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-neutral-100 px-3 py-2.5">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder={placeholder}
            aria-label="Write a comment"
            data-slot="comment-thread-widget-input"
            className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-[12px] text-neutral-800 outline-none placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white"
          />
          <button
            type="button"
            onClick={submit}
            aria-label="Send comment"
            disabled={!draft.trim()}
            data-slot="comment-thread-widget-send"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-neutral-900 text-white transition-transform active:scale-95 disabled:opacity-40"
          >
            <Send size={13} />
          </button>
        </div>
      </div>
    );
  },
);

CommentThreadWidget.displayName = "CommentThreadWidget";

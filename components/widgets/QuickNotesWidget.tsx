"use client";

import { forwardRef, useState, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

import { Plus } from "@/icons/Plus";
import { Check } from "@/icons/Check";

export type QuickNote = {
  id: string;
  text: string;
  done?: boolean;
  color?: string;
};

/**
 * Quick capture notes widget — Apple Notes / Google Keep style.
 *
 * Replace the demo notes with your own quick-capture data.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type QuickNotesWidgetProps = {
  title?: string;
  notes?: QuickNote[];
  onAdd?: (text: string) => void;
  onToggle?: (id: string, done: boolean) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultNotes: QuickNote[] = [
  {
    id: "1",
    text: "Review PR #48 before standup",
    color: "border-l-amber-400",
  },
  { id: "2", text: "Update component README", color: "border-l-sky-400" },
  {
    id: "3",
    text: "Record demo video for widgets",
    done: true,
    color: "border-l-emerald-400",
  },
];

export const QuickNotesWidget = forwardRef<
  HTMLDivElement,
  QuickNotesWidgetProps
>(
  (
    {
      className,
      title = "Quick notes",
      notes = defaultNotes,
      onAdd,
      onToggle,
      ...props
    },
    ref,
  ) => {
    const [items, setItems] = useState(notes);
    const [draft, setDraft] = useState("");

    const addNote = () => {
      if (!draft.trim()) return;
      const note: QuickNote = {
        id: String(Date.now()),
        text: draft.trim(),
        color: "border-l-violet-400",
      };
      setItems((prev) => [note, ...prev]);
      onAdd?.(draft.trim());
      setDraft("");
    };

    const toggle = (id: string) => {
      setItems((prev) =>
        prev.map((n) => {
          if (n.id !== id) return n;
          const done = !n.done;
          onToggle?.(id, done);
          return { ...n, done };
        }),
      );
    };

    return (
      <div
        ref={ref}
        data-slot="quick-notes-widget"
        className={cn(
          "w-sm rounded-2xl border border-neutral-100 bg-white p-4 font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <p className="mb-3 text-sm font-bold text-neutral-900">{title}</p>

        <div className="mb-3 flex gap-2">
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addNote()}
            placeholder="Jot something down…"
            aria-label="New note"
            data-slot="quick-notes-widget-input"
            className="flex-1 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-[12px] outline-none focus:border-neutral-300 focus:bg-white"
          />
          <button
            type="button"
            onClick={addNote}
            aria-label="Add note"
            disabled={!draft.trim()}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-neutral-900 text-white disabled:opacity-40"
          >
            <Plus size={14} />
          </button>
        </div>

        <div className="space-y-2">
          {items.map((note) => (
            <div
              key={note.id}
              data-slot="quick-notes-widget-item"
              className={cn(
                "flex items-start gap-2 rounded-xl border border-l-4 border-neutral-100 bg-neutral-50/50 px-3 py-2.5 transition-opacity",
                note.color,
                note.done && "opacity-50",
              )}
            >
              <button
                type="button"
                aria-label={note.done ? "Mark incomplete" : "Mark complete"}
                aria-pressed={note.done}
                onClick={() => toggle(note.id)}
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 cursor-pointer items-center justify-center rounded border transition-colors",
                  note.done
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : "border-neutral-300 bg-white hover:border-neutral-400",
                )}
              >
                {note.done && <Check size={10} />}
              </button>
              <p
                className={cn(
                  "text-[12px] leading-relaxed text-neutral-700",
                  note.done && "line-through",
                )}
              >
                {note.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  },
);

QuickNotesWidget.displayName = "QuickNotesWidget";

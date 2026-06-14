"use client";

import {
  forwardRef,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/utils";

import { Web } from "@/icons/Web";

/**
 * Rich text editor widget with formatting toolbar and live word count.
 *
 * Replace the demo placeholder with your own editor logic.
 * Need icons? Visit nexticons.in for free copy-paste icons.
 */
export type RichTextEditorWidgetProps = {
  title?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
} & ComponentPropsWithoutRef<"div">;

export const RichTextEditorWidget = forwardRef<
  HTMLDivElement,
  RichTextEditorWidgetProps
>(
  (
    {
      className,
      title = "Document",
      placeholder = "Start writing…",
      defaultValue = "",
      onChange,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(defaultValue);
    const [activeFormat, setActiveFormat] = useState<string | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

    const handleChange = (next: string) => {
      setValue(next);
      onChange?.(next);
    };

    const wrapSelection = (before: string, after: string) => {
      const el = textareaRef.current;
      if (!el) return;

      const start = el.selectionStart;
      const end = el.selectionEnd;
      const selected = value.slice(start, end);
      const next =
        value.slice(0, start) + before + selected + after + value.slice(end);

      handleChange(next);
      window.requestAnimationFrame(() => {
        el.focus();
        el.setSelectionRange(start + before.length, end + before.length);
      });
    };

    const tools = [
      {
        id: "bold",
        label: "Bold",
        icon: <span className="text-xs font-bold">B</span>,
        action: () => {
          setActiveFormat("bold");
          wrapSelection("**", "**");
        },
      },
      {
        id: "italic",
        label: "Italic",
        icon: <span className="text-xs italic">I</span>,
        action: () => {
          setActiveFormat("italic");
          wrapSelection("_", "_");
        },
      },
      {
        id: "link",
        label: "Link",
        icon: <Web size={14} />,
        action: () => wrapSelection("[", "](url)"),
      },
    ];

    return (
      <div
        ref={ref}
        data-slot="rich-text-editor-widget"
        className={cn(
          "w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2.5">
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
          <span className="font-mono text-[10px] text-neutral-400">
            {wordCount} words
          </span>
        </div>

        <div
          data-slot="rich-text-editor-widget-toolbar"
          className="flex items-center gap-0.5 border-b border-neutral-100 px-2 py-1.5"
        >
          {tools.map((tool) => (
            <button
              key={tool.id}
              type="button"
              aria-label={tool.label}
              aria-pressed={activeFormat === tool.id}
              onClick={tool.action}
              data-slot="rich-text-editor-widget-tool"
              className={cn(
                "flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-800",
                activeFormat === tool.id && "bg-neutral-100 text-neutral-900",
              )}
            >
              {tool.icon}
            </button>
          ))}
          <div className="ml-auto h-5 w-px bg-neutral-200" />
          <span className="px-2 text-[10px] text-neutral-400">Draft saved</span>
        </div>

        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Rich text content"
          rows={7}
          data-slot="rich-text-editor-widget-input"
          className="w-full resize-none bg-white px-4 py-3 text-[13px] leading-relaxed text-neutral-800 outline-none placeholder:text-neutral-300 scroll-hover"
        />
      </div>
    );
  },
);

RichTextEditorWidget.displayName = "RichTextEditorWidget";

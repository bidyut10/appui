"use client";

import {
  forwardRef,
  useCallback,
  useRef,
  useEffect,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

/** Tailwind-only scroll area — self-contained, no global CSS. */
const HIDE_SCROLLBAR =
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

type ScrollAxis = "y" | "x" | "both";
type ThumbMetrics = { size: number; offset: number; active: boolean };

function computeVerticalThumb(el: HTMLElement): ThumbMetrics {
  const { scrollHeight, clientHeight, scrollTop } = el;
  if (scrollHeight <= clientHeight + 1) return { size: 0, offset: 0, active: false };
  const thumbSize = Math.max(24, (clientHeight / scrollHeight) * clientHeight);
  const maxOffset = clientHeight - thumbSize;
  const offset = maxOffset <= 0 ? 0 : (scrollTop / (scrollHeight - clientHeight)) * maxOffset;
  return { size: thumbSize, offset, active: true };
}

function computeHorizontalThumb(el: HTMLElement): ThumbMetrics {
  const { scrollWidth, clientWidth, scrollLeft } = el;
  if (scrollWidth <= clientWidth + 1) return { size: 0, offset: 0, active: false };
  const thumbSize = Math.max(24, (clientWidth / scrollWidth) * clientWidth);
  const maxOffset = clientWidth - thumbSize;
  const offset = maxOffset <= 0 ? 0 : (scrollLeft / (scrollWidth - clientWidth)) * maxOffset;
  return { size: thumbSize, offset, active: true };
}

type LocalScrollHoverAreaProps = {
  children: React.ReactNode;
  viewportClassName?: string;
  axis?: ScrollAxis;
} & React.ComponentPropsWithoutRef<"div">;

const LocalScrollHoverArea = forwardRef<HTMLDivElement, LocalScrollHoverAreaProps>(
  ({ className, viewportClassName, children, axis = "y", ...props }, ref) => {
    const viewportRef = useRef<HTMLDivElement>(null);
    const [vertical, setVertical] = useState<ThumbMetrics>({ size: 0, offset: 0, active: false });
    const [horizontal, setHorizontal] = useState<ThumbMetrics>({ size: 0, offset: 0, active: false });

    const update = useCallback(() => {
      const el = viewportRef.current;
      if (!el) return;
      if (axis === "y" || axis === "both") setVertical(computeVerticalThumb(el));
      if (axis === "x" || axis === "both") setHorizontal(computeHorizontalThumb(el));
    }, [axis]);

    useEffect(() => {
      const el = viewportRef.current;
      if (!el) return;
      update();
      const ro = new ResizeObserver(update);
      ro.observe(el);
      for (const child of el.children) ro.observe(child);
      el.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
        ro.disconnect();
        el.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
    }, [update, children]);

    const overflowClass =
      axis === "x"
        ? "overflow-x-scroll overflow-y-hidden"
        : axis === "both"
          ? "overflow-scroll"
          : "overflow-y-scroll overflow-x-hidden";
    const clipClass =
      axis === "x" ? "-mb-4 pb-4" : axis === "both" ? "-mr-4 pr-4 -mb-4 pb-4" : "-mr-4 pr-4";

    return (
      <div ref={ref} className={cn("group/scrollarea relative overflow-hidden", className)} {...props}>
        <div
          ref={viewportRef}
          className={cn("h-full w-full", HIDE_SCROLLBAR, overflowClass, clipClass, viewportClassName)}
        >
          {children}
        </div>
        {vertical.active && (axis === "y" || axis === "both") && (
          <div
            className="pointer-events-none absolute top-0 right-1 bottom-0 z-10 w-1 opacity-0 transition-opacity duration-150 group-hover/scrollarea:opacity-100"
            aria-hidden
          >
            <div
              className="absolute right-0 w-1 rounded-full bg-neutral-400"
              style={{ height: vertical.size, top: vertical.offset }}
            />
          </div>
        )}
        {horizontal.active && (axis === "x" || axis === "both") && (
          <div
            className="pointer-events-none absolute right-0 bottom-1 left-0 z-10 h-1 opacity-0 transition-opacity duration-150 group-hover/scrollarea:opacity-100"
            aria-hidden
          >
            <div
              className="absolute bottom-0 h-1 rounded-full bg-neutral-400"
              style={{ width: horizontal.size, left: horizontal.offset }}
            />
          </div>
        )}
      </div>
    );
  },
);
LocalScrollHoverArea.displayName = "LocalScrollHoverArea";


/**
 * Markdown editor with live preview toggle.
 *
 * Replace the demo content with your own notes or docs.
 */
export type MarkdownEditorWidgetProps = {
  title?: string;
  defaultMarkdown?: string;
  onChange?: (markdown: string) => void;
} & ComponentPropsWithoutRef<"div">;

const defaultMarkdown = `# Release notes

- Added **Gmail inbox** widget
- Fixed search keyboard navigation
- Updated dashboard cards

\`\`\`ts
const widgets = ["gmail", "outlook", "compose"];
\`\`\`
`;

function renderMarkdown(md: string): string {
  return md
    .replace(/^# (.+)$/gm, '<h1 class="text-base font-bold mb-2">$1</h1>')
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-[12px]">$1</li>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre class="mt-2 rounded-lg bg-neutral-100 p-2 font-mono text-[10px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overflow-x-auto"><code>$2</code></pre>',
    );
}

export const MarkdownEditorWidget = forwardRef<
  HTMLDivElement,
  MarkdownEditorWidgetProps
>(
  (
    {
      className,
      title = "Markdown",
      defaultMarkdown: initial = defaultMarkdown,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [markdown, setMarkdown] = useState(initial);
    const [preview, setPreview] = useState(false);

    const html = useMemo(() => renderMarkdown(markdown), [markdown]);

    return (
      <div
        ref={ref}
        data-slot="markdown-editor-widget"
        className={cn(
          "w-80 overflow-hidden rounded-2xl border border-neutral-100 bg-white font-sans shadow-lg",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-2.5">
          <p className="text-sm font-semibold text-neutral-900">{title}</p>
          <div className="flex rounded-lg bg-neutral-100 p-0.5">
            {(["edit", "preview"] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setPreview(mode === "preview")}
                aria-pressed={preview === (mode === "preview")}
                data-slot="markdown-editor-widget-mode"
                className={cn(
                  "cursor-pointer rounded-md px-2.5 py-1 text-[10px] font-semibold capitalize transition-all",
                  preview === (mode === "preview")
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-500",
                )}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {preview ? (
          <LocalScrollHoverArea
            data-slot="markdown-editor-widget-preview"
            className="h-64"
            viewportClassName="px-4 py-3 text-[13px] leading-relaxed text-neutral-700"
          >
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </LocalScrollHoverArea>
        ) : (
          <LocalScrollHoverArea
            data-slot="markdown-editor-widget-scroll"
            className="h-64"
          >
            <textarea
              value={markdown}
              onChange={(e) => {
                setMarkdown(e.target.value);
                onChange?.(e.target.value);
              }}
              aria-label="Markdown source"
              data-slot="markdown-editor-widget-source"
              className="block [field-sizing:content] min-h-full w-full resize-none [scrollbar-width:none] overflow-hidden bg-white px-4 py-3 font-mono text-[12px] leading-relaxed text-neutral-800 outline-none"
            />
          </LocalScrollHoverArea>
        )}
      </div>
    );
  },
);

MarkdownEditorWidget.displayName = "MarkdownEditorWidget";

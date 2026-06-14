"use client";

import {
  forwardRef,
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";

import { cn, scrollHoverGroup } from "@/lib/utils";
import { ScrollHoverArea } from "@/components/ui/ScrollHoverArea";

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
      '<pre class="mt-2 rounded-lg bg-neutral-100 p-2 font-mono text-[10px] scroll-hover overflow-x-auto"><code>$2</code></pre>',
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
          "w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white font-sans shadow-lg",
          scrollHoverGroup,
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
          <ScrollHoverArea
            data-slot="markdown-editor-widget-preview"
            className="h-[180px]"
            viewportClassName="px-4 py-3 text-[13px] leading-relaxed text-neutral-700"
          >
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </ScrollHoverArea>
        ) : (
          <ScrollHoverArea
            data-slot="markdown-editor-widget-scroll"
            className="h-[180px]"
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
          </ScrollHoverArea>
        )}
      </div>
    );
  },
);

MarkdownEditorWidget.displayName = "MarkdownEditorWidget";

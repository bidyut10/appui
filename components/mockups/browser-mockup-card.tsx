import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

const browserThemes = {
  light: {
    shell: "border-neutral-200",
    chrome: "border-neutral-200 bg-neutral-50",
    urlBar: "bg-white",
    urlText: "text-neutral-400",
    content: "bg-white",
  },
  dark: {
    shell: "border-neutral-700",
    chrome: "border-neutral-700 bg-neutral-800",
    urlBar: "bg-neutral-900",
    urlText: "text-neutral-500",
    content: "bg-neutral-950",
  },
  transparent: {
    shell: "border-neutral-300/50",
    chrome: "border-neutral-300/50 bg-white/40 backdrop-blur-sm",
    urlBar: "bg-white/30",
    urlText: "text-neutral-500",
    content: "bg-transparent",
  },
} as const;

type BrowserTheme = keyof typeof browserThemes;

type BrowserMockupCardProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    theme?: BrowserTheme;
    url?: string;
    children?: ReactNode;
  }
>;

export const BrowserMockupCard = forwardRef<
  HTMLDivElement,
  BrowserMockupCardProps
>(({ className, children, theme = "light", url = "opensourceui.in/components", ...props }, ref) => {
  const styles = browserThemes[theme];

  return (
    <div
      ref={ref}
      data-slot="browser-mockup-card"
      data-theme={theme}
      className={cn(
        "w-full min-w-0 max-w-full overflow-hidden rounded-xl border font-sans",
        styles.shell,
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b px-3 py-2",
          styles.chrome,
        )}
      >
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div
          className={cn(
            "flex h-6 flex-1 items-center rounded-md px-2",
            styles.urlBar,
          )}
        >
          <span
            className={cn(
              "truncate font-mono text-[9px]",
              styles.urlText,
            )}
          >
            {url}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "relative h-[200px] overflow-hidden md:h-[320px]",
          styles.content,
        )}
      >
        <div className="relative size-full">{children}</div>
      </div>
    </div>
  );
});

BrowserMockupCard.displayName = "BrowserMockupCard";

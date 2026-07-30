"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useTransition,
  type ReactNode,
} from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ChevronsUpDown,
  ImageIcon,
  LayoutGrid,
  Minus,
  Plus,
  RotateCcw,
  Search,
  Square,
  X,
} from "lucide-react";

import { cn } from "@/lib/cn";
import { BOX_PATTERN } from "@/lib/shared";

type LabBackground = "plain" | "pattern" | "image";

export type LabComponentOption = Readonly<{
  slug: string;
  title: string;
  category: string;
  exportName: string;
}>;

const ZOOM_MIN = 50;
const ZOOM_MAX = 200;
const ZOOM_STEP = 10;
const ZOOM_DEFAULT = 100;

const PLAIN_COLORS = [
  { id: "white", label: "White", className: "bg-white" },
  { id: "neutral", label: "Neutral", className: "bg-neutral-100" },
  { id: "stone", label: "Stone", className: "bg-neutral-800" },
  { id: "black", label: "Black", className: "bg-neutral-950" },
  { id: "rose", label: "Rose", className: "bg-rose-100" },
  { id: "sky", label: "Sky", className: "bg-sky-100" },
  { id: "teal", label: "Teal", className: "bg-teal-100" },
  { id: "amber", label: "Amber", className: "bg-amber-100" },
  { id: "emerald", label: "Emerald", className: "bg-emerald-100" },
] as const;

type LabPlaygroundProps = Readonly<{
  options: readonly LabComponentOption[];
  selectedSlug?: string;
  children?: ReactNode;
}>;

export function LabPlayground({
  options,
  selectedSlug,
  children,
}: LabPlaygroundProps) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [background, setBackground] = useState<LabBackground>("plain");
  const [plainColorId, setPlainColorId] =
    useState<(typeof PLAIN_COLORS)[number]["id"]>("neutral");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);

  const plainColor =
    PLAIN_COLORS.find((item) => item.id === plainColorId) ?? PLAIN_COLORS[1];

  const selected = options.find((item) => item.slug === selectedSlug);

  const clampZoom = (value: number) =>
    Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, value));

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.exportName.toLowerCase().includes(q) ||
        item.slug.toLowerCase().includes(q),
    );
  }, [options, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, LabComponentOption[]>();
    for (const item of filtered) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const selectComponent = (slug: string) => {
    setPickerOpen(false);
    setQuery("");
    startTransition(() => {
      router.replace(`/lab?c=${encodeURIComponent(slug)}`, { scroll: false });
    });
  };

  const clearComponent = () => {
    setPickerOpen(false);
    setQuery("");
    startTransition(() => {
      router.replace("/lab", { scroll: false });
    });
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-white font-sans">
      {background === "pattern" ? (
        <div className="absolute inset-0" style={BOX_PATTERN} />
      ) : null}

      {background === "image" ? (
        <Image
          src="/background4.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : null}

      {background === "plain" ? (
        <div className={cn("absolute inset-0", plainColor.className)} />
      ) : null}

      <div className="absolute top-4 left-1/2 z-20 flex w-[min(52rem,calc(100%-2rem))] -translate-x-1/2 flex-col gap-2">
        <ComponentPicker
          open={pickerOpen}
          query={query}
          selected={selected}
          grouped={grouped}
          onOpenChange={setPickerOpen}
          onQueryChange={setQuery}
          onSelect={selectComponent}
          onClear={clearComponent}
        />

        <div className="flex h-12 items-center gap-2 overflow-x-auto rounded-2xl border border-neutral-50 bg-white/80 px-2.5 shadow-xl shadow-black/10 backdrop-blur-md [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex shrink-0 items-center gap-1">
            <BackgroundToggle
              active={background === "plain"}
              label="Plain"
              onClick={() => setBackground("plain")}
            >
              <Square size={14} aria-hidden />
            </BackgroundToggle>
            <BackgroundToggle
              active={background === "pattern"}
              label="Pattern"
              onClick={() => setBackground("pattern")}
            >
              <LayoutGrid size={14} aria-hidden />
            </BackgroundToggle>
            <BackgroundToggle
              active={background === "image"}
              label="Image"
              onClick={() => setBackground("image")}
            >
              <ImageIcon size={14} aria-hidden />
            </BackgroundToggle>
          </div>

          <span className="h-5 w-px shrink-0 bg-neutral-200/80" aria-hidden />

          <div
            className={cn(
              "flex shrink-0 items-center gap-1.5 transition-opacity duration-200 ease-smooth",
              background === "plain" ? "opacity-100" : "pointer-events-none opacity-30",
            )}
            aria-hidden={background !== "plain"}
          >
            {PLAIN_COLORS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                aria-pressed={item.id === plainColorId}
                title={item.label}
                disabled={background !== "plain"}
                onClick={() => {
                  setBackground("plain");
                  setPlainColorId(item.id);
                }}
                className={cn(
                  "size-6 shrink-0 rounded-full border transition-[transform,box-shadow] duration-200 ease-smooth disabled:cursor-default",
                  item.className,
                  item.id === plainColorId && background === "plain"
                    ? "scale-110 border-neutral-900 shadow-sm"
                    : "border-neutral-200 hover:scale-105",
                )}
              />
            ))}
          </div>

          <span className="h-5 w-px shrink-0 bg-neutral-200/80" aria-hidden />

          <div className="ml-auto flex shrink-0 items-center gap-0.5">
            <button
              type="button"
              aria-label="Zoom out"
              disabled={zoom <= ZOOM_MIN}
              onClick={() => setZoom((value) => clampZoom(value - ZOOM_STEP))}
              className="flex size-8 items-center justify-center rounded-[0.65rem] text-neutral-600 transition-colors duration-200 ease-smooth hover:bg-neutral-100 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
            >
              <Minus size={14} aria-hidden />
            </button>
            <button
              type="button"
              aria-label={`Zoom ${zoom} percent. Reset to 100`}
              onClick={() => setZoom(ZOOM_DEFAULT)}
              className="min-w-12 rounded-[0.65rem] px-2 py-1.5 text-center text-xs font-semibold tabular-nums text-neutral-900 transition-colors duration-200 ease-smooth hover:bg-neutral-100"
            >
              {zoom}%
            </button>
            <button
              type="button"
              aria-label="Zoom in"
              disabled={zoom >= ZOOM_MAX}
              onClick={() => setZoom((value) => clampZoom(value + ZOOM_STEP))}
              className="flex size-8 items-center justify-center rounded-[0.65rem] text-neutral-600 transition-colors duration-200 ease-smooth hover:bg-neutral-100 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
            >
              <Plus size={14} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Reset zoom"
              onClick={() => setZoom(ZOOM_DEFAULT)}
              className="flex size-8 items-center justify-center rounded-[0.65rem] text-neutral-600 transition-colors duration-200 ease-smooth hover:bg-neutral-100 hover:text-neutral-900"
            >
              <RotateCcw size={13} aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center overflow-auto p-6 pt-36 md:p-10 md:pt-40">
        <div
          className="flex max-w-none origin-center items-center justify-center transition-transform duration-300 ease-smooth will-change-transform"
          style={{ transform: `scale(${zoom / 100})` }}
        >
          {children ?? (
            <p className="rounded-2xl border border-dashed border-neutral-300 bg-white/70 px-4 py-3 text-center text-sm text-neutral-500 backdrop-blur-sm">
              Select a component above to preview it here
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function ComponentPicker({
  open,
  query,
  selected,
  grouped,
  onOpenChange,
  onQueryChange,
  onSelect,
  onClear,
}: Readonly<{
  open: boolean;
  query: string;
  selected?: LabComponentOption;
  grouped: readonly [string, LabComponentOption[]][];
  onOpenChange: (open: boolean) => void;
  onQueryChange: (query: string) => void;
  onSelect: (slug: string) => void;
  onClear: () => void;
}>) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        onOpenChange(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <div className="flex items-center gap-2 rounded-2xl border border-neutral-50 bg-white/80 px-2.5 py-2 shadow-xl shadow-black/10 backdrop-blur-md">
        <Search size={15} aria-hidden className="ml-1 shrink-0 text-neutral-400" />
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => onOpenChange(!open)}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <span className="min-w-0 flex-1 truncate text-sm text-neutral-900">
            {selected ? (
              <>
                <span className="font-medium">{selected.title}</span>
                <span className="text-neutral-400"> · {selected.category}</span>
              </>
            ) : (
              <span className="text-neutral-400">Search components…</span>
            )}
          </span>
          <ChevronsUpDown size={14} aria-hidden className="shrink-0 text-neutral-400" />
        </button>
        {selected ? (
          <button
            type="button"
            aria-label="Clear selected component"
            onClick={onClear}
            className="flex size-8 shrink-0 items-center justify-center rounded-[0.65rem] text-neutral-500 transition-colors duration-200 ease-smooth hover:bg-neutral-100 hover:text-neutral-900"
          >
            <X size={14} aria-hidden />
          </button>
        ) : null}
      </div>

      {open ? (
        <div
          id={listId}
          className="absolute top-[calc(100%+0.5rem)] left-0 z-30 max-h-80 w-full overflow-hidden rounded-2xl border border-neutral-50 bg-white/95 shadow-xl shadow-black/10 backdrop-blur-md"
        >
          <div className="border-b border-neutral-100 p-2">
            <label htmlFor={`${listId}-search`} className="sr-only">
              Filter components
            </label>
            <input
              ref={inputRef}
              id={`${listId}-search`}
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Filter by name, category, export…"
              className="w-full rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 focus:border-neutral-300 focus:ring-0"
            />
          </div>
          <ul className="scrollbar-hover max-h-64 overflow-y-auto p-2">
            {grouped.length === 0 ? (
              <li className="px-2.5 py-3 text-sm text-neutral-500">
                No components match
              </li>
            ) : (
              grouped.map(([category, items]) => (
                <li key={category} className="mb-2 last:mb-0">
                  <p className="px-2.5 py-1 text-[10px] font-medium tracking-wide text-neutral-400 uppercase">
                    {category}
                  </p>
                  <ul>
                    {items.map((item) => (
                      <li key={item.slug}>
                        <button
                          type="button"
                          onClick={() => onSelect(item.slug)}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 rounded-[0.85rem] px-2.5 py-2 text-left transition-colors duration-150 ease-smooth",
                            item.slug === selected?.slug
                              ? "bg-neutral-100 text-neutral-900"
                              : "text-neutral-700 hover:bg-neutral-50",
                          )}
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium">
                              {item.title}
                            </span>
                            <span className="block truncate font-mono text-[11px] text-neutral-400">
                              {item.exportName}
                            </span>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function BackgroundToggle({
  active,
  label,
  onClick,
  children,
}: Readonly<{
  active: boolean;
  label: string;
  onClick: () => void;
  children: ReactNode;
}>) {
  return (
    <button
      type="button"
      aria-pressed={active}
      aria-label={`${label} background`}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[0.65rem] px-2.5 py-1.5 text-xs font-medium transition-colors duration-200 ease-smooth",
        active
          ? "bg-neutral-900 text-white"
          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
      )}
    >
      {children}
      {label}
    </button>
  );
}

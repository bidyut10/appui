"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

import Link from "next/link";
import { X } from "lucide-react";

import { cn } from "@/lib/cn";
import { lockPageScroll } from "@/lib/scroll-lock";
import { siteConfig } from "@/lib/site";

type ContactEmailOptions = Readonly<{
  title?: string;
  description?: string;
}>;

type ContactEmailContextValue = Readonly<{
  openContactEmail: (options?: ContactEmailOptions) => void;
}>;

const DEFAULT_TITLE = "Get in touch";
const DEFAULT_DESCRIPTION =
  "Copy my email below and reach out anytime — I read every message.";

const ContactEmailContext = createContext<ContactEmailContextValue | null>(null);

export function useContactEmail() {
  const context = useContext(ContactEmailContext);
  if (!context) {
    throw new Error("useContactEmail must be used within ContactEmailProvider");
  }
  return context;
}

type ContactEmailDialogProps = Readonly<{
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}>;

function ContactEmailDialog({
  open,
  title,
  description,
  onClose,
}: ContactEmailDialogProps) {
  const titleId = useId();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) {
      setCopied(false);
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    const unlockScroll = lockPageScroll();
    document.addEventListener("keydown", onKeyDown);

    return () => {
      unlockScroll();
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.author.email);
      setCopied(true);
      globalThis.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center md:items-center md:p-5">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-white/80 backdrop-blur-[6px]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-sm rounded-t-xl border border-neutral-200 bg-white p-5 shadow-[0_24px_64px_rgba(0,0,0,0.12)] ring-1 ring-black/5 md:rounded-xl"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2
              id={titleId}
              className="font-sans text-base font-medium text-neutral-900"
            >
              {title}
            </h2>
            <p className="mt-1.5 font-sans text-sm leading-relaxed text-neutral-500">
              {description.trim()}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 rounded-md border border-neutral-200 bg-white px-3 py-2 font-sans text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
          >
            {copied ? "Copied" : "Copy email"}
          </button>
          <Link
            href={siteConfig.author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-md border border-neutral-900 bg-neutral-900 px-3 py-2 text-center font-sans text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            X
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ContactEmailProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);

  const openContactEmail = useCallback((options?: ContactEmailOptions) => {
    setTitle(options?.title ?? DEFAULT_TITLE);
    setDescription(options?.description ?? DEFAULT_DESCRIPTION);
    setOpen(true);
  }, []);

  const closeContactEmail = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ContactEmailContext.Provider value={{ openContactEmail }}>
      {children}
      <ContactEmailDialog
        open={open}
        title={title}
        description={description}
        onClose={closeContactEmail}
      />
    </ContactEmailContext.Provider>
  );
}

type ContactEmailTriggerProps = Readonly<{
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
}>;

export function ContactEmailTrigger({
  children,
  className,
  title,
  description,
}: ContactEmailTriggerProps) {
  const { openContactEmail } = useContactEmail();

  return (
    <button
      type="button"
      onClick={() => openContactEmail({ title, description })}
      className={cn("cursor-pointer text-left", className)}
    >
      {children}
    </button>
  );
}

export function ContactEmailCopyButton({
  className,
  copyLabel = "Copy email",
}: Readonly<{
  className?: string;
  copyLabel?: string;
}>) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.author.email);
      setCopied(true);
      globalThis.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "cursor-pointer transition-colors hover:text-neutral-600",
        className,
      )}
    >
      {copied ? "Copied" : copyLabel}
    </button>
  );
}

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
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
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
        className={cn(
          "absolute inset-0 cursor-default bg-neutral-950/40 transition-opacity duration-200",
          entered ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-10 w-full max-w-sm border border-neutral-200 bg-white p-5 shadow-lg transition-[opacity,transform] duration-200 ease-out",
          "rounded-t-xl md:rounded-xl",
          entered
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 md:translate-y-2",
        )}
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
  const [dialogKey, setDialogKey] = useState(0);

  const openContactEmail = useCallback((options?: ContactEmailOptions) => {
    setTitle(options?.title ?? DEFAULT_TITLE);
    setDescription(options?.description ?? DEFAULT_DESCRIPTION);
    setDialogKey((current) => current + 1);
    setOpen(true);
  }, []);

  const closeContactEmail = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <ContactEmailContext.Provider value={{ openContactEmail }}>
      {children}
      {open ? (
        <ContactEmailDialog
          key={dialogKey}
          open={open}
          title={title}
          description={description}
          onClose={closeContactEmail}
        />
      ) : null}
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
      className={cn("cursor-pointer transition-colors hover:text-neutral-600", className)}
    >
      {copied ? "Copied" : copyLabel}
    </button>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

import { Check, Handshake, Loader2, Sparkles, X } from "lucide-react";

import { cn } from "@/lib/cn";
import { inquiryTemplates } from "@/lib/inquiries/templates";
import type { InquiryType } from "@/lib/inquiries/types";

type InquiryContextValue = Readonly<{
  openInquiry: (type: InquiryType) => void;
}>;

const InquiryContext = createContext<InquiryContextValue | null>(null);

const TYPE_STYLES: Record<
  InquiryType,
  Readonly<{ badge: string; icon: string; ring: string }>
> = {
  work: {
    badge: "bg-rose-50 text-rose-700",
    icon: "text-rose-400",
    ring: "focus:ring-rose-100 focus:border-rose-300",
  },
  sponsor: {
    badge: "bg-rose-50 text-rose-400",
    icon: "text-rose-400",
    ring: "focus:ring-rose-100 focus:border-rose-300",
  },
};

const fieldClass =
  "w-full rounded-md border border-neutral-200 bg-white px-3.5 py-2.5 font-sans text-sm text-neutral-900 shadow-[0_1px_0_rgba(0,0,0,0.02)] outline-none transition-[border-color,box-shadow,background-color] placeholder:text-neutral-400 focus:ring-2";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function canSubmitInquiry(name: string, email: string): boolean {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  return trimmedName.length >= 2 && EMAIL_RE.test(trimmedEmail);
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error("useInquiry must be used within InquiryProvider");
  }
  return context;
}

type InquiryDialogProps = Readonly<{
  open: boolean;
  type: InquiryType;
  onClose: () => void;
}>;

function InquiryDialog({ open, type, onClose }: InquiryDialogProps) {
  const template = inquiryTemplates[type];
  const styles = TYPE_STYLES[type];
  const formId = useId();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(template.subject);
  const [message, setMessage] = useState(template.message);
  const [company, setCompany] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!open) return;

    setName("");
    setEmail("");
    setSubject(template.subject);
    setMessage(template.message);
    setCompany("");
    setError("");
    setSubmitting(false);
    setSuccess(false);
    setEntered(false);

    const frame = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(frame);
  }, [open, type, template.message, template.subject]);

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting || success || !canSubmitInquiry(name, email)) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          name,
          email,
          subject,
          message,
          company,
          source: globalThis.location.pathname,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setError(data?.error ?? "Could not send your message. Try again.");
        return;
      }

      setSuccess(true);
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  const TypeIcon = type === "sponsor" ? Sparkles : Handshake;
  const readyToSend = canSubmitInquiry(name, email);

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:p-5">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className={cn(
          "absolute inset-0 cursor-default bg-neutral-950/50 backdrop-blur-sm transition-opacity duration-300",
          entered ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${formId}-title`}
        className={cn(
          "relative z-10 flex max-h-[92dvh] w-full max-w-[32rem] flex-col overflow-hidden border border-neutral-200/80 bg-white shadow-[0_28px_80px_-24px_rgba(0,0,0,0.45)] transition-[opacity,transform] duration-300 ease-out",
          "rounded-t-[1.5rem] md:rounded-[1.5rem]",
          entered
            ? "translate-y-0 opacity-100 md:scale-100"
            : "translate-y-6 opacity-0 md:translate-y-2 md:scale-[0.98]",
        )}
      >
        <div className="flex justify-center pt-3 md:hidden">
          <span
            aria-hidden
            className="h-1 w-10 rounded-full bg-neutral-200"
          />
        </div>

        <div className="border-b border-neutral-100 px-5 pt-4 pb-5 md:px-6 md:pt-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-xl",
                    styles.icon,
                  )}
                >
                  <TypeIcon size={18} strokeWidth={1.8} aria-hidden />
                </div>
                
              </div>

              <h2
                id={`${formId}-title`}
                className="mt-4 font-serif text-[1.65rem] leading-tight text-neutral-900"
              >
                {template.title}
              </h2>
              <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-neutral-500">
                {template.subtitle}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-transparent text-neutral-400 transition-colors hover:border-neutral-200 hover:bg-neutral-50 hover:text-neutral-700"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {success ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-14 text-center">
            <div className="relative flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Check size={30} strokeWidth={2} aria-hidden />
              <span
                aria-hidden
                className="absolute inset-0 rounded-full ring-1 ring-emerald-100"
              />
            </div>
            <p className="mt-6 font-serif text-2xl text-neutral-900">
              Message sent
            </p>
            <p className="mt-2 max-w-xs font-sans text-sm leading-relaxed text-neutral-500">
              Thanks for reaching out. I&apos;ll read your note and reply to{" "}
              <span className="font-medium text-neutral-800">{email}</span>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-9 rounded-md bg-neutral-900 px-6 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Close
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex min-h-0 flex-1 flex-col"
          >
            <div className="scrollbar-hover min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-6">
              <div className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="font-sans text-xs font-medium tracking-wide text-neutral-600 uppercase">
                      Name
                    </span>
                    <input
                      required
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      autoComplete="name"
                      maxLength={80}
                      className={cn(fieldClass, styles.ring)}
                      placeholder="Your name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="font-sans text-xs font-medium tracking-wide text-neutral-600 uppercase">
                      Email
                    </span>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      autoComplete="email"
                      className={cn(fieldClass, styles.ring)}
                      placeholder="you@company.com"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="font-sans text-xs font-medium tracking-wide text-neutral-600 uppercase">
                    Subject
                  </span>
                  <input
                    required
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    maxLength={120}
                    className={cn(fieldClass, styles.ring)}
                  />
                </label>

                <label className="grid gap-2">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-sans text-xs font-medium tracking-wide text-neutral-600 uppercase">
                      Message
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      Draft included — edit freely
                    </span>
                  </div>
                  <textarea
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    rows={9}
                    maxLength={5000}
                    className={cn(
                      fieldClass,
                      styles.ring,
                      "min-h-[11rem] resize-y bg-neutral-50/80 leading-relaxed focus:bg-white",
                    )}
                  />
                </label>

                <div className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0">
                  <label htmlFor={`${formId}-company`}>Company</label>
                  <input
                    id={`${formId}-company`}
                    tabIndex={-1}
                    autoComplete="off"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
              </div>

              {error ? (
                <p className="mt-4 rounded-md border border-red-100 bg-red-50/90 px-3.5 py-2.5 font-sans text-sm text-red-700">
                  {error}
                </p>
              ) : null}
            </div>

            <div className="border-t border-neutral-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,#ffffff_35%)] px-5 py-4 md:px-6">
              <div className="flex flex-col-reverse gap-2.5 md:flex-row md:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={submitting}
                  className="rounded-md border border-neutral-200 bg-white px-4 py-2.5 font-sans text-sm text-neutral-700 transition-colors hover:bg-neutral-50 disabled:opacity-60"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting || !readyToSend}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 font-sans text-sm font-medium transition-colors",
                    readyToSend && !submitting
                      ? "cursor-pointer bg-neutral-900 text-white shadow-[0_8px_24px_-12px_rgba(0,0,0,0.55)] hover:bg-neutral-800"
                      : "cursor-not-allowed bg-neutral-200 text-neutral-400 shadow-none",
                    submitting && "opacity-60",
                  )}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={15} className="animate-spin" aria-hidden />
                      Sending…
                    </>
                  ) : (
                    template.submitLabel
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export function InquiryProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<InquiryType>("work");

  const openInquiry = useCallback((nextType: InquiryType) => {
    setType(nextType);
    setOpen(true);
  }, []);

  const closeInquiry = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <InquiryContext.Provider value={{ openInquiry }}>
      {children}
      <InquiryDialog open={open} type={type} onClose={closeInquiry} />
    </InquiryContext.Provider>
  );
}

type InquiryTriggerProps = Readonly<{
  type: InquiryType;
  children: ReactNode;
  className?: string;
}>;

export function InquiryTrigger({ type, children, className }: InquiryTriggerProps) {
  const { openInquiry } = useInquiry();

  return (
    <button
      type="button"
      onClick={() => openInquiry(type)}
      className={cn("cursor-pointer text-left", className)}
    >
      {children}
    </button>
  );
}

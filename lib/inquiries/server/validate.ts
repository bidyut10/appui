import { INQUIRY_LIMITS } from "@/lib/inquiries/constants";
import type { InquirySubmitPayload, InquiryType } from "@/lib/inquiries/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parseType(value: unknown): InquiryType | null {
  return value === "work" || value === "sponsor" ? value : null;
}

export type ParsedInquiry =
  | Readonly<{ ok: true; data: InquirySubmitPayload }>
  | Readonly<{ ok: false; error: string }>;

export function parseInquiryBody(body: unknown): ParsedInquiry {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const record = body as Record<string, unknown>;
  const type = parseType(record.type);
  if (!type) {
    return { ok: false, error: "Choose a valid inquiry type." };
  }

  const name = readString(record.name);
  const email = readString(record.email).toLowerCase();
  const subject = readString(record.subject);
  const message = readString(record.message);
  const source = readString(record.source).slice(0, 200);

  if (name.length < INQUIRY_LIMITS.nameMin) {
    return { ok: false, error: "Please enter your name." };
  }

  if (name.length > INQUIRY_LIMITS.nameMax) {
    return { ok: false, error: "Name is too long." };
  }

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (subject.length < INQUIRY_LIMITS.subjectMin) {
    return { ok: false, error: "Please add a subject." };
  }

  if (subject.length > INQUIRY_LIMITS.subjectMax) {
    return { ok: false, error: "Subject is too long." };
  }

  if (message.length < INQUIRY_LIMITS.messageMin) {
    return { ok: false, error: "Please write a bit more in your message." };
  }

  if (message.length > INQUIRY_LIMITS.messageMax) {
    return { ok: false, error: "Message is too long." };
  }

  return {
    ok: true,
    data: { type, name, email, subject, message, source },
  };
}

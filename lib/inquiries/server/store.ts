import type { WithId } from "mongodb";

import { getAnalyticsDb } from "@/lib/analytics/server/connection/db";
import { INQUIRIES, INQUIRY_LIMITS } from "@/lib/inquiries/constants";
import type { InquiryRecord, InquirySubmitPayload } from "@/lib/inquiries/types";

type StoredInquiry = InquirySubmitPayload &
  Readonly<{ createdAt: Date; source: string }>;

export async function hasRecentInquiry(email: string): Promise<boolean> {
  const db = await getAnalyticsDb();
  if (!db) return false;

  const since = new Date(Date.now() - INQUIRY_LIMITS.rateLimitMs);

  const existing = await db.collection(INQUIRIES).findOne({
    email,
    createdAt: { $gte: since },
  });

  return Boolean(existing);
}

export async function submitInquiry(
  payload: InquirySubmitPayload,
): Promise<Readonly<{ ok: true } | { ok: false; error: string }>> {
  const db = await getAnalyticsDb();
  if (!db) {
    return {
      ok: false,
      error: "Messages are temporarily unavailable. Please try again later.",
    };
  }

  if (await hasRecentInquiry(payload.email)) {
    return {
      ok: false,
      error: "You already sent a message recently. Please wait a minute.",
    };
  }

  const doc: StoredInquiry = {
    ...payload,
    source: payload.source ?? "unknown",
    createdAt: new Date(),
  };

  await db.collection(INQUIRIES).insertOne(doc);

  return { ok: true };
}

export async function getInquiries(): Promise<InquiryRecord[]> {
  const db = await getAnalyticsDb();
  if (!db) return [];

  const rows = await db
    .collection<StoredInquiry>(INQUIRIES)
    .find({})
    .sort({ createdAt: -1 })
    .limit(INQUIRY_LIMITS.listLimit)
    .toArray();

  return rows.map((row: WithId<StoredInquiry>) => ({
    id: String(row._id),
    type: row.type,
    name: row.name,
    email: row.email,
    subject: row.subject,
    message: row.message,
    source: row.source ?? "unknown",
    createdAt:
      row.createdAt instanceof Date
        ? row.createdAt.toISOString()
        : new Date(String(row.createdAt)).toISOString(),
  }));
}

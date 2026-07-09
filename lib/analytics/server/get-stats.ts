import {
  ACTIVE_WINDOW_MS,
  COMPONENT_CLICKS,
  PAGE_VIEWS,
  SESSIONS,
  TOP_LIST_LIMIT,
} from "@/lib/analytics/constants";
import {
  formatPeriodLabel,
  timestampMatch,
  type DateRange,
} from "@/lib/analytics/server/date-range";
import { getAnalyticsDb } from "@/lib/analytics/server/connection/db";
import type { DashboardStats } from "@/lib/analytics/types";
import { getAllShowcaseSlugs } from "@/lib/showcase/showcase";

/**
 * Builds all dashboard aggregates in parallel.
 *
 * When range is null, stats cover all stored data. "Live users" always uses
 * the last 5 minutes regardless of the date filter — that's intentional.
 */
export async function getDashboardStats(
  range: DateRange | null,
): Promise<DashboardStats | null> {
  const db = await getAnalyticsDb();
  if (!db) return null;

  const now = new Date();
  const activeSince = new Date(now.getTime() - ACTIVE_WINDOW_MS);
  const pageViewMatch = timestampMatch("timestamp", range);
  const sessionStartMatch = timestampMatch("startedAt", range);
  const clickMatch = timestampMatch("timestamp", range);

  const [
    pageViews,
    uniqueVisitors,
    totalSessions,
    liveUsers,
    avgSession,
    topComponents,
    topPages,
    topCountries,
    topRegions,
  ] = await Promise.all([
    db.collection(PAGE_VIEWS).countDocuments(pageViewMatch),

    db.collection(PAGE_VIEWS).distinct("visitorId", pageViewMatch),

    db.collection(SESSIONS).countDocuments(sessionStartMatch),

    db.collection(SESSIONS).countDocuments({
      lastActiveAt: { $gte: activeSince },
    }),

    db
      .collection(SESSIONS)
      .aggregate<{ avg: number }>([
        {
          $match: {
            durationSec: { $type: "number", $gt: 0 },
            ...sessionStartMatch,
          },
        },
        { $group: { _id: null, avg: { $avg: "$durationSec" } } },
      ])
      .toArray(),

    db
      .collection(COMPONENT_CLICKS)
      .aggregate<{ slug: string; clicks: number }>([
        ...(Object.keys(clickMatch).length ? [{ $match: clickMatch }] : []),
        { $group: { _id: "$slug", clicks: { $sum: 1 } } },
        { $sort: { clicks: -1 } },
        { $limit: TOP_LIST_LIMIT },
        { $project: { _id: 0, slug: "$_id", clicks: 1 } },
      ])
      .toArray(),

    db
      .collection(PAGE_VIEWS)
      .aggregate<{ path: string; views: number }>([
        ...(Object.keys(pageViewMatch).length
          ? [{ $match: pageViewMatch }]
          : []),
        { $group: { _id: "$path", views: { $sum: 1 } } },
        { $sort: { views: -1 } },
        { $limit: TOP_LIST_LIMIT },
        { $project: { _id: 0, path: "$_id", views: 1 } },
      ])
      .toArray(),

    db
      .collection(PAGE_VIEWS)
      .aggregate<{ country: string; visitors: number }>([
        ...(Object.keys(pageViewMatch).length
          ? [{ $match: pageViewMatch }]
          : []),
        { $group: { _id: { country: "$country", visitorId: "$visitorId" } } },
        { $group: { _id: "$_id.country", visitors: { $sum: 1 } } },
        { $sort: { visitors: -1 } },
        { $limit: TOP_LIST_LIMIT },
        { $project: { _id: 0, country: "$_id", visitors: 1 } },
      ])
      .toArray(),

    db
      .collection(PAGE_VIEWS)
      .aggregate<{ country: string; region: string; visitors: number }>([
        ...(Object.keys(pageViewMatch).length
          ? [{ $match: pageViewMatch }]
          : []),
        {
          $group: {
            _id: {
              country: "$country",
              region: "$region",
              visitorId: "$visitorId",
            },
          },
        },
        {
          $group: {
            _id: { country: "$_id.country", region: "$_id.region" },
            visitors: { $sum: 1 },
          },
        },
        { $sort: { visitors: -1 } },
        { $limit: TOP_LIST_LIMIT },
        {
          $project: {
            _id: 0,
            country: "$_id.country",
            region: "$_id.region",
            visitors: 1,
          },
        },
      ])
      .toArray(),
  ]);

  return {
    liveUsers,
    pageViews,
    uniqueVisitors: uniqueVisitors.length,
    totalSessions,
    avgSessionSec: Math.round(avgSession[0]?.avg ?? 0),
    totalComponents: getAllShowcaseSlugs().length,
    periodLabel: formatPeriodLabel(range),
    topComponents,
    topPages,
    topCountries,
    topRegions,
  };
}

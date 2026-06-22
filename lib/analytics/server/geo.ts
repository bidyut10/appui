/**
 * Visitor location from Vercel — country / region / city only, no IP storage.
 *
 * On Vercel we try @vercel/functions geolocation first, then raw headers.
 * Locally everything shows as LOCAL so the dashboard still makes sense in dev.
 */
import { geolocation } from "@vercel/functions";

import { LOCAL_GEO } from "@/lib/analytics/constants";
import type { GeoLocation } from "@/lib/analytics/types";

type GeoHeaders = Readonly<{
  get(name: string): string | null;
}>;

function readHeader(headers: GeoHeaders, name: string): string | null {
  return (
    headers.get(name) ??
    headers.get(name.toLowerCase()) ??
    headers.get(name.toUpperCase())
  );
}

function normalizeGeoValue(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed === "ZZ" || trimmed === "unknown") return null;
  return trimmed;
}

function geoFromHeaders(headers: GeoHeaders): GeoLocation | null {
  const country = normalizeGeoValue(readHeader(headers, "x-vercel-ip-country"));
  const region = normalizeGeoValue(
    readHeader(headers, "x-vercel-ip-country-region"),
  );
  const city = normalizeGeoValue(readHeader(headers, "x-vercel-ip-city"));

  if (!country && !region && !city) return null;

  return {
    country: country ?? "Unknown",
    region: region ?? "Unknown",
    city: city ?? "Unknown",
  };
}

export function geoFromRequest(request: Request): GeoLocation {
  try {
    const geo = geolocation(request);
    const country = normalizeGeoValue(geo.country);
    const region = normalizeGeoValue(geo.countryRegion);
    const city = normalizeGeoValue(geo.city);

    if (country) {
      return {
        country,
        region: region ?? "Unknown",
        city: city ?? "Unknown",
      };
    }
  } catch {
    // Outside Vercel runtime — fall back to headers.
  }

  const fromHeaders = geoFromHeaders(request.headers);
  if (fromHeaders) return fromHeaders;

  return { ...LOCAL_GEO };
}

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

// Human label for a country code in dashboard tables.
export function formatCountry(code: string): string {
  if (code === "LOCAL") return "Local development";
  if (code === "Unknown") return "Unknown";

  try {
    return regionNames.of(code) ?? code;
  } catch {
    return code;
  }
}

// Human label for a region row (often a state/province code).
export function formatRegion(country: string, region: string): string {
  if (country === "LOCAL") return "Local development";
  if (region === "—" || region === "Unknown") {
    return formatCountry(country);
  }

  if (/^[A-Z]{2,3}$/.test(region) && country !== "Unknown") {
    try {
      const name = regionNames.of(`${country}-${region}`);
      if (name && name !== region) return name;
    } catch {
      // Fall through to raw region code.
    }
  }

  return region;
}

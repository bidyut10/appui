# Security Policy

## Supported versions

Security fixes are applied to the latest version on the `main` branch.

| Version | Supported |
| ------- | --------- |
| latest on `main` | yes |

## Reporting a vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Report security issues privately using one of these channels:

1. **[GitHub Security Advisories](https://github.com/bidyut10/appui/security/advisories/new)** (preferred)
2. Direct message to the maintainer on [X (@BidyutKundu12)](https://x.com/BidyutKundu12)

Include as much detail as possible: affected paths, reproduction steps, and impact.

We aim to acknowledge reports within **72 hours** and will work on a fix as quickly as possible.

## Scope

In scope:

- The opensourceui web application and its API routes
- Authentication for `/dashboard`
- Analytics data handling (no IP storage design)
- Dependency vulnerabilities introduced by this repository

Out of scope:

- Vulnerabilities in third-party services (Vercel, MongoDB Atlas) — report those to the respective vendors
- Social engineering or physical attacks
- Issues in forked deployments with modified secrets or configuration

## Security notes for self-hosting

- Never commit `.env` or `.env.local` — use `.env.example` as a template only
- Set a strong `ANALYTICS_DASHBOARD_SECRET` for production
- Restrict MongoDB Atlas network access appropriately
- The analytics dashboard at `/dashboard` is password-protected and excluded from search indexing

## Disclosure

We follow coordinated disclosure. We will credit reporters in release notes when fixes are published, unless you prefer to remain anonymous.

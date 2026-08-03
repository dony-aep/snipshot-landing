# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Landing page for **SnipShot**, a modern Windows screenshot app built with WinUI 3.
This repo is only the marketing site; the app itself lives at
[dony-aep/SnipShot](https://github.com/dony-aep/SnipShot).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server (Turbopack) |
| `npm run build` | Production build — also type-checks. Primary verification step. |
| `npm run lint` | ESLint (`eslint-config-next`) |
| `npm start` | Serve the production build |
| `npm run clean` | Clear `.next` — Windows-only (`rd /s /q`) |

There is no test suite. `npm run build` is the real gate: it runs TypeScript and
prerenders every route, so a broken component or type fails it.

**Known baseline:** `npm run lint` reports 3 pre-existing errors in
`i18n/context.tsx:30` (`react-hooks/set-state-in-effect`). Don't read these as a
regression from your change, and don't fix them unless asked.

## Stack

- **Next.js 16** App Router + **React 19**, TypeScript `strict`
- **Tailwind CSS v4** — config-less; the theme lives in `app/globals.css` via `@theme`
- **shadcn/ui** — `new-york` style, `neutral` base, CSS variables (see `components.json`)
- `lucide-react` for UI icons, `simple-icons` for brand marks
- `framer-motion` for animation, `next-themes` for dark mode
- **React Compiler** is enabled (`reactCompiler: true`) — avoid manual `useMemo`/
  `useCallback` added purely for memoization; the compiler handles it

## Structure

```
app/            Routes. Path alias @/* → repo root.
components/
  sections/     Homepage sections
  layout/       Header, footer
  ui/           shadcn primitives — regenerable, avoid hand-editing
  icons/        simple-icons wrapper
data/           Page content as locale-aware getter functions
i18n/           Locale context + translation dictionaries
config/site.ts  Site metadata and nav items
hooks/, lib/, types/
```

**Server/client split for sub-routes.** Each sub-route is a pair: `page.tsx` stays a
server component and exports `metadata`; `content.tsx` is `"use client"` and holds the
actual UI. This exists so locale-aware client rendering doesn't kill server-side
metadata. Preserve the split when adding routes — don't collapse `content.tsx` into
`page.tsx`.

## i18n

Two locales: `es` (default) and `en`.

- **Never hardcode user-facing strings in components.** UI copy goes in
  `i18n/translations/{es,en}.ts` and is read via `const { t } = useLocale()`.
- **Section content goes in `data/*.ts` as `getX(locale)` functions**, not static
  constants. Each data module keeps a `translations: Record<Locale, ...>` object plus
  locale-independent metadata (icons, image paths) merged at call time.
- `Translations` is typed from `translations/es.ts`, so **`es` is the source of truth**
  and `en` must match it structurally. Adding a key to one without the other is a type
  error.
- Locale persists to `localStorage` under `"locale"` and syncs
  `document.documentElement.lang`.
- Locale is client state, so any component reading it needs `"use client"`.

## Dependency policy

`overrides` in `package.json` exist for one reason: to force-upgrade transitive
dependencies that `next` pins to vulnerable versions in its **own nested**
`node_modules/next/node_modules`. Two are currently load-bearing:

- `sharp >=0.35.3` — otherwise resolves 0.34.5 (GHSA-f88m-g3jw-g9cj)
- `postcss >=8.5.23` — otherwise resolves ≤8.5.22 (4 advisories)

Rules learned the hard way:

- **Verify an override is still needed before keeping it.** Pins go stale and can
  themselves drag in vulnerable packages — an obsolete `ajv >=8` pin is what introduced
  `fast-uri` into this tree at all.
- **Test with a real `npm install`, not `npm install --package-lock-only`.** Lock-only
  resolution hoists differently and hides `next`'s nested copies, so it will wrongly
  report an override as unnecessary.
- `>=` floors do not auto-update the lockfile. When a new advisory lands, raise the
  floor explicitly.
- After any dependency change: `npm audit` (expect 0) **and** `npm run build`.

`allowScripts` records install scripts approved under npm 11's policy. Approve
deliberately, one package at a time — never blanket-approve.

## Conventions

- **Conventional Commits** (`fix(deps):`, `chore(deps):`, `feat:`, …). Subject under 72
  chars, blank line, then a body explaining *why*. Cite advisories/CVEs for security work.
- Security headers are defined in `next.config.ts` and applied to all routes.
- `README.md` (English) and `README.es.md` (Spanish) are updated together.
- `CHANGELOG.md` follows [Keep a Changelog](https://keepachangelog.com/); keep the
  `version` in `package.json` in sync with its latest released entry.

# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.0] - 2026-08-15

### Added

- Redesigned the homepage around the app's own artifact: the hero sits inside a real
  selection rectangle with the eight drag handles, framing guides, a dimmed surround and
  a pixel readout that measures the frame's border box through a `ResizeObserver`, so it
  tracks the viewport the way it would over a live selection.
- A type system with three roles where there was one flat stack. It leads with the app's
  own fonts, Segoe UI Variable Display for headlines, Segoe UI Variable Text for reading
  and Cascadia Code for dimensions and versions, which is the same optical split Windows
  11 uses. Bricolage Grotesque, Public Sans and IBM Plex Mono back them up for anyone not
  on Windows, and they carry `preload: false`, so a Windows visitor downloads no fonts at
  all.
- The six product screenshots now appear on the homepage, laid out as a contact sheet
  with a staggered middle column. They previously existed only on `/features`.
- The annotation section draws what each tool does. Picking one from the list renders its
  mark on a capture surface: the shapes, a freehand stroke, a marker crossing two lines of
  text, crop corners, a rotation arc. It named nine tools before without showing a single
  one of them.
- Three feature cards the app ships but the site never listed: copy to clipboard, the
  update check that reads GitHub Releases from Settings, and the accessible control
  names introduced in SnipShot 1.2.0.
- `/features`, `/tools` and `/technology` now render the header and footer. Only the
  homepage mounted them, so every sub-page dropped the navigation, the language selector
  and the theme toggle. Both now live in the root layout, which also removes the `<main>`
  wrapper each page was declaring for itself.
- `PageHeader` and `PageCTA`. The three sub-pages repeated their heading block and their
  closing call to action verbatim; only the CTA's description differed.
- A 404 page. The route fell through to Next's default, which never got designed. It now
  opens with an empty selection reading `0 × 0 px`, says the address matches no page, and
  offers the way back plus the three sections.
- The hero's accent word carries the highlighter as ink and hands it to the stroke on
  hover: the word returns to the text color while the amber line draws in from the left.
  The accent stays visible without hovering, which is all a touch screen ever gets.

### Changed

- Repalette: a blue-violet ink and an azure selection stroke replace the default blue,
  with an amber that appears only as the highlighter mark under the hero's accent word.
  Verified at AA in both themes — 17.7:1 body text on light, 15.6:1 on dark, and no pair
  below 4.6:1.
- Every homepage section had the same shape: centered heading, uniform card grid,
  centered ghost link. They now differ structurally — contact sheet, floating toolbar on
  a banded surface, and a two-column spec sheet with a sticky column.
- Rewrote the site's copy to cut marketing filler and say what the app does. "Mejora tu
  productividad con capturas de pantalla profesionales" became the fact a visitor
  actually needs, that the package installs by sideload rather than from the Microsoft
  Store. Sentences like "Elige el modo perfecto para cada situación" and "descubre la
  diferencia" are gone; the feature copy now names the five modes, the three color
  formats and the shapes the toolbar really draws.
- The three sub-pages carried English `metadata` while the site renders `lang="es"` and
  defaults to Spanish. Their titles and descriptions are now Spanish, and they list the
  page's actual contents instead of trailing off in "and more".
- Focus is now visible site-wide as an offset outline in the selection azure, and
  `prefers-reduced-motion` collapses the hero's load sequence.
- Rebuilt the three sub-pages in the homepage's language: `/features` alternates full
  screenshots against the copy, `/tools` is a two-column reference whose icons keep the
  floating toolbar's button chrome, and `/technology` is a spec sheet of hairline rows
  with the versions set in tabular mono.
- The additional-features grid is now reachable. `AdditionalFeatures` was exported but
  never rendered, so the twelve entries — OCR, clipboard, the update check, accessibility
  — existed only in the data layer. It closes the `/features` page.
- `/features` alternates its rows with `order` instead of `direction: rtl`, which flipped
  the text's bidirectionality along with the column.
- The back link is no longer `position: fixed`. It sat at the top-left corner, where it
  collided with the header this release adds to those pages, and it now opens the page
  heading as an inline mono link.
- The floating navigation adopts the rest of the system — hairline border, 12 px corners
  instead of a full pill, and a surface opaque enough (`background/85`) that scrolling
  content no longer reads through the bar and slices the text behind it. It also takes
  its surface at 12 px of scroll rather than 50.
- The current route is marked in the navigation, with an azure underline on desktop, a
  square marker in the mobile menu, and `aria-current="page"` in both. Now that the
  header renders on every route, there was nothing telling you where you were.
- The footer moves onto the same system as the rest of the site: hairline `--rule`
  borders, column labels in mono, and the wordmark matching the header's weight. It is
  seen four times as often since the header and footer moved into the root layout.
- Split the amber into two tokens. The stroke colour reads 1.79:1 against the light
  background, which is fine for a decorative line and nowhere near enough for a word, so
  `--highlighter-ink` carries the text at 4.16:1, past the 3:1 that 72 px type needs.
- The annotation and download sections were both a bordered box with everything centred
  inside it, which is the shape this redesign set out to remove. Neither has a box now:
  the tools sit in a list beside their canvas, and the download splits its pitch from a
  spec sheet listing the system, the architectures, the licence and where the package
  lives. The three requirement chips became four rows that actually answer what you need
  before downloading.
- The sub-page closer lost its box too, and now reads as a heading and description on one
  side with the download and its system requirement on the other, matching the home.
- Below `lg`, the tool picker is a horizontal strip in the shape of the app's floating
  toolbar. Stacked vertically its nine rows ran 514 px tall and pushed the canvas, which
  is the point of the section, well past the fold. The section is 780 px on a 390 px
  screen now, down from 1231.

### Fixed

- The header's scroll listener wrote state on every scroll event even when the value was
  unchanged, and registered without `{ passive: true }`, so the browser could not
  decouple it from scrolling.
- The hero and download eyebrows broke mid-phrase on narrow screens — "Windows 11 ·
  Gratis · Código / abierto". Their letter-spacing now opens up from `0.1em` at `sm`
  rather than being set at `0.18em` everywhere.
- The tool strip's grid column needed `min-width: 0`. A grid item defaults to
  `min-width: auto` and grows with its content, so `overflow-x` never engaged and the
  strip spilled the whole page sideways instead of scrolling inside itself.
- Jumping to `#tools` or `#download` left the heading underneath the fixed header. The
  hook that handles clicks only offset by 25 px, and opening a URL with the hash already
  in it never went through the hook at all. A `scroll-margin-top` on the anchored
  sections covers both.
- Synced the site's content with SnipShot 1.2.0. The capture-mode card said "4 capture
  modes"; the app's `CaptureMode` enum has five, counting the color picker.
- Corrected the C# version in the tech stack, 12 → 14. SnipShot targets .NET 10, whose
  default language version is C# 14.
- Sharpened four feature descriptions against the app's current behaviour: auto-save and
  start-with-Windows are on by default, start-with-Windows launches hidden in the tray,
  hotkey captures raise a native notification, and zoom works with Ctrl+wheel and
  fit-to-window.
- Refreshed the site's own tech-stack table in both READMEs, which 0.3.0 left behind:
  Next.js 16.1.1 → 16.3.1, React 19.2.3 → 19.2.8, Framer Motion 12.x → 13.x, and
  TypeScript 5.x → 6.x. Node.js 20.9 stays the floor — that is what `next@16.3.1`
  declares in `engines`.
- Gave Lucide React a version in that table, 1.x. It was left unversioned back when the
  package sat on 0.x and its version churned without meaning; 0.3.0 moved it to 1.31.0.
- Added a `simple-icons` row (16.x), the only visible dependency the table omitted, and
  split the two icon rows by role so they no longer read alike: Lucide draws the UI
  icons, `simple-icons` the brand marks.

### Removed

- `components/grid-background.tsx`, a full-screen canvas that redrew roughly 2,000 dots
  every frame in an unbounded `requestAnimationFrame` loop, ignored
  `prefers-reduced-motion`, and re-applied `ctx.scale(dpr, dpr)` on every resize without
  resetting the transform. A static CSS pixel grid replaces it.
- Three translation keys the redesign orphaned: `toolsSection.more`, `techSection.more`
  and `download.architectures`, plus the `additionalFeatures` badge that read "Y mucho
  más...", and `download.badge`, whose "Open Source · Licencia MIT" the new spec sheet
  says with the licence row.
- The footer's licence entry was a dimmed `<span>` sitting in a list of links, so it read
  as one that had broken. It links to the repository's LICENSE now.

## [0.3.0] - 2026-08-15

### Changed

- Upgraded Next.js 16.2.11 → 16.3.1, which brings Turbopack build caching, lower
  dev-server memory use, and native Node.js streams in the App Router rendering layer.
- Upgraded four dependencies across a major boundary, none of which required code
  changes: `lucide-react` 0.562.0 → 1.31.0, `framer-motion` 12.34.2 → 13.1.0,
  `@vercel/analytics` 1.6.1 → 2.0.1, and TypeScript 5.9.3 → 6.0.3.
- Aligned `@types/node` with the runtime it actually targets, 20.x → 24.x (Node 24 LTS).
- Updated React and React DOM 19.2.3 → 19.2.8, `eslint-config-next` 16.2.6 → 16.3.1, and
  the Radix UI, Tailwind CSS, `simple-icons`, and `tailwind-merge` lines to their current
  patches and minors.

### Removed

- `experimental.viewTransition` from `next.config.ts`. Next.js 16.3 dropped the flag and
  now fails the build on it as an unrecognized key. The project never rendered React's
  `<ViewTransition>` component, so the flag was dormant and removing it changes nothing.

### Security

- Patched two high-severity transitive advisories: `js-yaml` 4.3.0 → 4.3.1
  (GHSA-5p4m-2wfm-xmqj, quadratic CPU consumption resolving `!!omap`, reached via
  `eslint` → `@eslint/eslintrc`) and `nanoid` 3.3.17 → 3.3.18 (GHSA-2v37-7h3g-55p8,
  custom generators loop indefinitely when size is zero, reached via `postcss`). Both
  fixed versions fell inside their parents' semver ranges, so nothing was downgraded.
- Removed the last two dependency `overrides`. `next@16.3.1` now declares `postcss`
  8.5.23 and `sharp` ^0.35.3 on its own, making both pins redundant — and the `postcss`
  pin had started forcing next's nested copy *past* the version next deliberately pins.
- `npm audit` reports 0 vulnerabilities across 506 packages, and GitHub Dependabot
  reports no open alerts.

## [0.2.0] - 2026-08-03

### Added

- Internationalization (Spanish/English) built on a React context with `localStorage`
  persistence and typed translation dictionaries under `i18n/`.
- Functional language selector wired to the locale context.
- Animated canvas dot-grid background with two soft glow centers, slow drift, a
  breathing pulse, HiDPI support, and theme awareness via `resolvedTheme`.
- Security headers applied to all routes: `X-Frame-Options`, `X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`, and `Strict-Transport-Security`.
- Vercel Analytics integration in the root layout.
- Separate `README.md` (English) and `README.es.md` (Spanish) with cross-language
  navigation links, replacing the single bilingual README.
- `CLAUDE.md` documenting stack, structure, i18n rules, and dependency policy.

### Changed

- Redesigned the UI: oklch cool-tinted neutral palette in light mode, navy-charcoal in
  dark; centered hero with revised spacing and typography; refined card styling across
  all sections; slimmer header with subtle backdrop blur and compact nav; tighter footer.
- Data files in `data/` now export locale-aware getter functions instead of static
  constants.
- Sub-page content was extracted into client components so `page.tsx` can keep its
  server-side `metadata` export.
- Root layout is wrapped in `LocaleProvider`.
- Site metadata now points at the `snipshotw3.vercel.app` domain, with a new Open Graph
  image and `summary_large_image` Twitter card.

### Fixed

- Mode toggle now shows the Monitor icon when the system theme is selected, reading the
  theme value directly instead of relying on CSS `dark:` classes.

### Security

- Upgraded Next.js 16.1.1 → 16.2.11 across several rounds, resolving DoS, SSRF, cache
  confusion, and middleware bypass advisories.
- Patched transitive dependencies flagged by npm audit and Dependabot, including
  `@babel/core` (GHSA-4x5r-pxfx-6jf8), `js-yaml` (GHSA-h67p-54hq-rp68), `sharp`
  (GHSA-f88m-g3jw-g9cj), `postcss` (GHSA-r28c-9q8g-f849, GHSA-6g55-p6wh-862q,
  GHSA-qx2v-qp2m-jg93, GHSA-fxqj-rqcc-2cmp), `fast-uri` (GHSA-7p8r-x3mc-p8w7),
  `brace-expansion` (GHSA-rgw5-rvv9-x895), plus `flatted`, `picomatch`, `minimatch`,
  and `ajv`.
- Pruned the dependency `overrides` from eight pins to the two that are genuinely
  load-bearing (`sharp`, `postcss`). The rest were validated against natural dependency
  resolution and found obsolete — several were holding packages *below* their safe
  natural versions, and the `ajv` pin was itself responsible for pulling `fast-uri` into
  the tree.
- Recorded an explicit `allowScripts` approval for `unrs-resolver@1.11.1`, a dev-only
  transitive dependency of `eslint-config-next`.
- `npm audit` reports 0 vulnerabilities.

## [0.1.0] - 2026-01-13

### Added

- Initial SnipShot landing page: Next.js App Router structure, global styles, and the
  home, features, technology, and tools pages.
- Reusable layout, UI, and icon components; shared configuration, data, and type modules.
- Project assets (screenshots, logo, preview GIF), README, and LICENSE.

[Unreleased]: https://github.com/dony-aep/snipshot-landing/compare/main...HEAD
[0.4.0]: https://github.com/dony-aep/snipshot-landing/compare/ca6d280...main
[0.3.0]: https://github.com/dony-aep/snipshot-landing/compare/0602290...ca6d280
[0.2.0]: https://github.com/dony-aep/snipshot-landing/compare/060b16f...0602290
[0.1.0]: https://github.com/dony-aep/snipshot-landing/commits/060b16f

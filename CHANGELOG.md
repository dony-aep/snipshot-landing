# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
[0.2.0]: https://github.com/dony-aep/snipshot-landing/compare/060b16f...main
[0.1.0]: https://github.com/dony-aep/snipshot-landing/commits/060b16f

# SnipShot landing page

<p align="center">
  <img src="snipshot-preview.gif" alt="SnipShot Preview" width="100%">
</p>

<p align="center">
  <strong>English</strong> · <a href="README.es.md">Español</a>
</p>

---

This repository is the marketing site for SnipShot, a screenshot app for Windows built
with WinUI 3. The site is live at [snipshotw3.vercel.app](https://snipshotw3.vercel.app/).
The app's code, releases and issues are in
[dony-aep/SnipShot](https://github.com/dony-aep/SnipShot).

## The app

SnipShot is free and open source under the MIT license. It needs Windows 11 version 22H2
(build 22621) or later, on x64 or ARM64, and does not run on Windows 10. You install it by
sideloading the MSIX package from the
[GitHub releases](https://github.com/dony-aep/SnipShot/releases), not from the Microsoft
Store.

| Feature | What it does |
|---------|--------------|
| Capture modes | Captures the full screen, a rectangular region, a freeform area or a single window. The fifth mode is the color picker. |
| Color picker | Reads the color of any pixel on screen and gives the code in HEX, RGB or HSL. |
| Annotation | Draws rectangles, circles, lines, arrows, stars, freehand strokes, highlighter marks, text and emojis on the capture. Shapes take a color, a thickness and a fill. |
| Editing | Crops the captured image, rotates shapes and annotations, and keeps an undo/redo history. |
| Text extraction (OCR) | Pulls the text out of a capture so you can copy it instead of retyping it. |
| Image search | Searches for the capture on Google Images or Bing from the image's menu. |
| Shortcuts and delay | Ctrl+Shift+S and Print Screen start a capture, and both are configurable. A capture can also wait 3, 5 or 10 seconds. |

The app is written in C# 14 on .NET 10, with Windows App SDK 1.8, WinUI 3 for the interface
and Win2D 1.3.2 for drawing.

The site's text about the app lives in `data/` and `i18n/translations/`. When the app
changes, update it there.

## Stack

| Technology | Version | Used for |
|------------|---------|----------|
| [Next.js](https://nextjs.org/) | 16.4.5 | App Router, prerendered routes |
| [React](https://react.dev/) | 19.3.1 | UI, with the React Compiler enabled |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Styles. There is no config file; the theme is in `app/globals.css`. |
| [shadcn/ui](https://ui.shadcn.com/) | - | Components in the new-york style, in `components/ui/` |
| [Framer Motion](https://www.framer.com/motion/) | 14.x | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.x | Light and dark theme |
| [Lucide React](https://lucide.dev/) | 1.x | UI icons |
| [Simple Icons](https://simpleicons.org/) | 16.x | Brand icons |
| TypeScript | 6.x | Types, in `strict` mode |

## Development

You need Node.js 20.9 or later. The repo commits `package-lock.json`, so use npm.

```bash
git clone https://github.com/dony-aep/snipshot-landing.git
cd snipshot-landing
npm ci
```

| Command | What it does |
|---------|--------------|
| `npm run dev` | Starts the development server with Turbopack at [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Builds for production. It type-checks and prerenders every route. The repo has no test suite, so this is the check to run before pushing. |
| `npm run lint` | Runs ESLint with `eslint-config-next`. |
| `npm start` | Serves the production build. |
| `npm run clean` | Deletes `.next`. It uses `rd /s /q`, so it only works on Windows. |

## Project structure

```
app/            Routes. The @/* alias points to the repo root.
components/
  sections/     Homepage sections
  layout/       Header and footer
  ui/           shadcn/ui components
  icons/        Wrapper for simple-icons
data/           Page content, one getX(locale) function per section
i18n/           Locale context and translation files
config/site.ts  Site metadata and navigation items
hooks/, lib/, types/
```

Each sub-route has two files. `page.tsx` is a server component and exports `metadata`.
`content.tsx` starts with `"use client"` and renders the page. The split keeps server-side
metadata working while the page reads the locale on the client.

## Translations

The site has two languages, Spanish (the default) and English. Interface text is in
`i18n/translations/es.ts` and `en.ts`, and components read it through `useLocale()`.
The `Translations` type comes from `es.ts`. If you add a key to one file and not the
other, `npm run build` fails on a type error. The chosen language is saved in
`localStorage` under `locale`.

## Deploy

The site runs on Vercel at [snipshotw3.vercel.app](https://snipshotw3.vercel.app/), and
`app/layout.tsx` loads `@vercel/analytics`. The repo has no `vercel.json`. The security
headers that apply to every route are in `next.config.ts`.

## License

[MIT](LICENSE).

## Author

dony. ([@dony-aep](https://github.com/dony-aep))

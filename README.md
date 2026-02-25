# SnipShot Landing Page

<p align="center">
  <img src="snipshot-preview.gif" alt="SnipShot Preview" width="100%">
</p>

<p align="center">
  <strong>English</strong> · <a href="README.es.md">Español</a>
</p>

---

Official landing page for **SnipShot**, a modern screenshot application for Windows built with WinUI 3.

**Main application:** [github.com/dony-aep/SnipShot](https://github.com/dony-aep/SnipShot)

## About SnipShot

SnipShot is a screenshot tool designed to integrate seamlessly with your professional workflow on Windows. It combines a modern interface with powerful annotation features.

### Key Features

| Feature | Description |
|---------|-------------|
| **4 capture modes** | Full screen, rectangular region, freeform and specific window |
| **Color picker** | Floating menu to capture colors in HEX, RGB or HSL format |
| **Shapes and emojis** | Add geometric shapes, arrows, lines, stars and emojis |
| **Full annotations** | Text, pen, highlighter, fill and more |
| **Text extraction (OCR)** | Extract text from any image automatically |
| **Image search** | Reverse image searches with Google or Bing |

### Annotation Tools

- **Shapes** — Rectangles, circles, lines, arrows and stars
- **Pen** — Freehand drawing with customizable colors
- **Highlighter** — Highlight areas with adjustable transparency
- **Text** — Different styles, colors and highlighting
- **Emojis** — Insert emojis directly into your captures
- **Fill** — Apply fill with color and opacity to shapes
- **Crop** — Adjust the area after capture
- **Rotation** — Rotate shapes and annotations freely
- **Undo/Redo** — Complete change history

### SnipShot Tech Stack

| Technology | Version |
|------------|---------|
| .NET | 10.0 |
| Windows App SDK | 1.8 |
| WinUI | 3 |
| Win2D | 1.3.2 |
| C# | 12 |

### System Requirements

- Windows 11 version 22H2 (build 22621) or higher
- Supported architectures: **x64**, **ARM64**
- Not compatible with Windows 10 or earlier versions

## About this Landing Page

This landing page is built with modern web technologies to showcase SnipShot.

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.1 | React framework with App Router |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | - | UI components (new-york style) |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.x | Light/dark theme |
| [Lucide React](https://lucide.dev/) | - | Icons |
| TypeScript | 5.x | Static typing |

## Development

### Prerequisites

- Node.js 20.9 or higher
- pnpm, npm, yarn or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/dony-aep/snipshot-landing.git
cd snipshot-landing

# Install dependencies
npm install
```

### Available Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## License

This project is under the [MIT License](LICENSE).

## Author

**dony.**

- GitHub: [@dony-aep](https://github.com/dony-aep)

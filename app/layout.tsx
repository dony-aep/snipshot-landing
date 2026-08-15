import type { Metadata } from "next";
import { Bricolage_Grotesque, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header, Footer } from "@/components/layout";
import { LocaleProvider } from "@/i18n";
import { Analytics } from "@vercel/analytics/react";

// Respaldo para quien no tenga Segoe UI Variable ni Cascadia Code, es decir,
// quien no esté en Windows. Van sin preload a propósito: así el navegador solo
// las descarga si de verdad tiene que dibujar con ellas, y en Windows, que es
// el público de la app, no se descarga ninguna.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  preload: false,
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
  preload: false,
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://snipshotw3.vercel.app"),
  title: "SnipShot - Capturas de pantalla para Windows 11",
  description: "Aplicación de captura de pantalla para Windows 11. Cinco modos de captura, anotaciones y extracción de texto. Gratis y de código abierto.",
  keywords: ["screenshot", "captura de pantalla", "windows", "winui3", "anotaciones", "ocr"],
  authors: [{ name: "dony." }],
  creator: "dony.",
  openGraph: {
    title: "SnipShot - Capturas de pantalla para Windows 11",
    description: "Aplicación de captura de pantalla para Windows 11. Cinco modos de captura, anotaciones y extracción de texto.",
    url: "https://snipshotw3.vercel.app",
    siteName: "SnipShot",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SnipShot - Capturas de pantalla modernas para Windows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnipShot - Capturas de pantalla para Windows 11",
    description: "Aplicación de captura de pantalla para Windows 11. Cinco modos de captura, anotaciones y extracción de texto.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${bricolage.variable} ${publicSans.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            {/* El chrome vive aquí y no en cada page.tsx: antes solo lo montaba
                la home, así que las sub-páginas se quedaban sin navegación,
                selector de idioma ni cambio de tema. */}
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

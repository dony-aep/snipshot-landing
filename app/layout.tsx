import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GridBackground } from "@/components/grid-background";
import { LocaleProvider } from "@/i18n";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://snipshotw3.vercel.app"),
  title: "SnipShot - Capturas de pantalla modernas para Windows",
  description: "Aplicación de captura de pantalla moderna para Windows. Captura, anota y comparte con herramientas profesionales. Open source y gratuita.",
  keywords: ["screenshot", "captura de pantalla", "windows", "winui3", "anotaciones", "ocr"],
  authors: [{ name: "dony." }],
  creator: "dony.",
  openGraph: {
    title: "SnipShot - Capturas de pantalla modernas para Windows",
    description: "Aplicación de captura de pantalla moderna para Windows. Captura, anota y comparte con herramientas profesionales.",
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
    title: "SnipShot - Capturas de pantalla modernas para Windows",
    description: "Aplicación de captura de pantalla moderna para Windows. Captura, anota y comparte con herramientas profesionales.",
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
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <GridBackground />
            {children}
          </LocaleProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

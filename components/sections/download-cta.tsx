"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/simple-icon";
import { siteConfig } from "@/config/site";
import { useLocale } from "@/i18n";

export function DownloadCTA() {
  const { t } = useLocale();

  // Ficha del paquete: lo que de verdad hay que saber antes de descargar.
  const spec = [
    { label: t.download.specSystem, value: t.download.systemWindows },
    { label: t.download.specArch, value: "x64 · ARM64" },
    { label: t.download.specLicense, value: "MIT" },
    { label: t.download.specSource, value: "GitHub Releases" },
  ];

  return (
    <section id="download" className="border-t border-rule px-4 py-24 md:py-32">
      <div className="container mx-auto">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] lg:items-end lg:gap-20">
          <div>
            <h2 className="max-w-lg text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t.download.titleStart}
              <span className="text-selection">{t.download.titleAccent}</span>
              {t.download.titleEnd}
            </h2>

            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {t.download.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group h-12 px-7 text-base" asChild>
                <a href={siteConfig.links.releases} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4.5 w-4.5 transition-transform group-hover:translate-y-0.5" />
                  {t.download.downloadButton}
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="h-12 px-6 text-base" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="mr-2 h-4.5 w-4.5" />
                  {t.download.githubButton}
                </a>
              </Button>
            </div>

            <p className="mt-6 font-mono text-xs text-muted-foreground">
              {t.download.versionNote}
            </p>
          </div>

          <dl className="border-t border-rule">
            {spec.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 border-b border-rule py-3.5"
              >
                <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="text-right font-mono text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

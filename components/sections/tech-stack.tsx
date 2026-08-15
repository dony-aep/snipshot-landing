"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTechStackHeader, getTechnologies } from "@/data";
import { useLocale } from "@/i18n";

export function TechStack() {
  const { locale, t } = useLocale();
  const header = getTechStackHeader(locale);
  const technologies = getTechnologies(locale);

  return (
    <section id="tech" className="px-4 py-20 md:py-24">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {header.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {header.description}
            </p>
            <Link
              href="/technology"
              className="group mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.techSection.viewAll}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Ficha técnica: una fila por dependencia, con la versión en mono
              porque es un dato, no una etiqueta. */}
          <dl className="border-t border-rule">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-6 gap-y-1 border-b border-rule py-5 md:grid-cols-[10rem_5rem_minmax(0,1fr)]"
              >
                <dt className="text-base font-semibold tracking-tight">{tech.name}</dt>
                <dd className="font-mono text-sm tabular-nums text-selection">{tech.version}</dd>
                <dd className="col-span-2 text-sm leading-relaxed text-muted-foreground md:col-span-1">
                  {tech.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

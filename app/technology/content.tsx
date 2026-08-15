"use client";

import { PageHeader } from "@/components/layout";
import { PageCTA } from "@/components/sections";
import { getTechStackHeader, getTechnologies, getSystemRequirements } from "@/data";
import { useLocale } from "@/i18n";

export function TechnologyContent() {
  const { locale, t } = useLocale();
  const header = getTechStackHeader(locale);
  const technologies = getTechnologies(locale);
  const systemRequirements = getSystemRequirements(locale);

  return (
    <div className="px-4 pb-24 pt-28 md:pt-32">
      <div className="container mx-auto">
        <PageHeader
          eyebrow={t.pages.technology.badge}
          title={header.title}
          description={header.description}
        />

        {/* Ficha técnica: nombre, versión y papel. La versión va en mono y
            tabular porque es un dato que se compara, no una etiqueta. */}
        <dl className="mt-16 border-t border-rule md:mt-20">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-8 gap-y-2 border-b border-rule py-6 md:grid-cols-[14rem_6rem_minmax(0,1fr)]"
            >
              <dt className="text-lg font-semibold tracking-tight">{tech.name}</dt>
              <dd className="font-mono text-sm tabular-nums text-selection">{tech.version}</dd>
              <dd className="col-span-2 text-sm leading-relaxed text-muted-foreground md:col-span-1">
                {tech.description}
              </dd>
            </div>
          ))}
        </dl>

        <section className="mt-24 md:mt-28">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.pages.technology.systemRequirementsTitle}
          </h2>
          <ul className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-3">
            {systemRequirements.map((requirement) => (
              <li
                key={requirement}
                className="flex items-start gap-3 border-t border-rule pt-5 text-sm leading-relaxed text-muted-foreground"
              >
                {/* El mismo cuadrado azur que marca los tiradores del héroe. */}
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-selection"
                />
                {requirement}
              </li>
            ))}
          </ul>
        </section>

        <PageCTA description={t.pages.technology.ctaDescription} />
      </div>
    </div>
  );
}

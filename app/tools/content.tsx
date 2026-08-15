"use client";

import { PageHeader } from "@/components/layout";
import { PageCTA } from "@/components/sections";
import { getAnnotationToolsHeader, getAnnotationTools } from "@/data";
import { useLocale } from "@/i18n";

export function ToolsContent() {
  const { locale, t } = useLocale();
  const header = getAnnotationToolsHeader(locale);
  const tools = getAnnotationTools(locale);

  return (
    <div className="px-4 pb-24 pt-28 md:pt-32">
      <div className="container mx-auto">
        <PageHeader
          eyebrow={t.pages.tools.badge}
          title={header.title}
          description={header.description}
        />

        {/* Referencia completa a dos columnas. El icono conserva el chrome del
            botón de la barra flotante, para que se reconozca desde la app. */}
        <div className="mt-16 grid gap-x-12 gap-y-10 md:mt-20 md:grid-cols-2">
          {tools.map((tool) => (
            <article key={tool.title} className="flex gap-5 border-t border-rule pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-rule bg-card">
                <tool.icon className="h-5 w-5 text-selection" />
              </div>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{tool.title}</h2>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <PageCTA description={t.pages.tools.ctaDescription} />
      </div>
    </div>
  );
}

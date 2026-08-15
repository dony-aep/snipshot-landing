"use client";

import { getAdditionalFeaturesHeader, getAdditionalFeatures } from "@/data";
import { useLocale } from "@/i18n";

export function AdditionalFeatures() {
  const { locale } = useLocale();
  const header = getAdditionalFeaturesHeader(locale);
  const features = getAdditionalFeatures(locale);

  return (
    <section className="mt-24 border-t border-rule pt-16 md:mt-28">
      <div className="max-w-xl">
        {header.badge && (
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-selection sm:text-xs">
            {header.badge}
          </p>
        )}
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {header.title}
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {header.description}
        </p>
      </div>

      {/* Entradas cortas: cada una abre con su propia regla, como las filas de
          una ficha, en vez de ir metida en una tarjeta. */}
      <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="border-t border-rule pt-5">
            <div className="flex items-center gap-2.5">
              <feature.icon className="h-4 w-4 shrink-0 text-selection" />
              <h3 className="text-sm font-semibold tracking-tight">{feature.title}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

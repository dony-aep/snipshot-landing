"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout";
import { AdditionalFeatures, PageCTA } from "@/components/sections";
import { getFeaturesHeader, getCaptureFeatures } from "@/data";
import { useLocale } from "@/i18n";

export function FeaturesContent() {
  const { locale, t } = useLocale();
  const header = getFeaturesHeader(locale);
  const features = getCaptureFeatures(locale);

  return (
    <div className="px-4 pb-24 pt-28 md:pt-32">
      <div className="container mx-auto">
        <PageHeader
          eyebrow={t.pages.features.badge}
          title={header.title}
          description={header.description}
        />

        <div className="mt-20 space-y-24 md:mt-24 md:space-y-32">
          {features.map((feature, index) => {
            // El orden se invierte con `order`, no con `direction: rtl`, que
            // además de la columna voltea la bidireccionalidad del texto.
            const flipped = index % 2 === 1;
            return (
              <article
                key={feature.title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {feature.image && (
                  <div
                    className={`overflow-hidden border border-rule bg-card ${
                      flipped ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={1080}
                      height={1080}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                )}
                <div className={flipped ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-rule bg-card">
                      <feature.icon className="h-5 w-5 text-selection" />
                    </div>
                    {feature.badge && <Badge variant="secondary">{feature.badge}</Badge>}
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {feature.title}
                  </h2>
                  <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <AdditionalFeatures />

        <PageCTA description={t.pages.features.ctaDescription} />
      </div>
    </div>
  );
}

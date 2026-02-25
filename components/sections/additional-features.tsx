"use client";

import { Badge } from "@/components/ui/badge";
import { getAdditionalFeaturesHeader, getAdditionalFeatures } from "@/data";
import { useLocale } from "@/i18n";

export function AdditionalFeatures() {
  const { locale } = useLocale();
  const additionalFeaturesHeader = getAdditionalFeaturesHeader(locale);
  const additionalFeatures = getAdditionalFeatures(locale);
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-14">
          {additionalFeaturesHeader.badge && (
            <Badge variant="outline" className="mb-4">
              {additionalFeaturesHeader.badge}
            </Badge>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {additionalFeaturesHeader.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {additionalFeaturesHeader.description}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {additionalFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/8">
                <feature.icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

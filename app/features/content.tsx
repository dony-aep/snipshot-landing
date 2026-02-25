"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/back-button";
import { getFeaturesHeader, getCaptureFeatures } from "@/data";
import { useLocale } from "@/i18n";

export function FeaturesContent() {
  const { locale, t } = useLocale();
  const featuresHeader = getFeaturesHeader(locale);
  const captureFeatures = getCaptureFeatures(locale);

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <BackButton />
        </div>

        <div className="max-w-3xl mb-24">
          <Badge variant="outline" className="mb-4">{t.pages.features.badge}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            {featuresHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {featuresHeader.description}
          </p>
        </div>

        <div className="space-y-28 md:space-y-36">
          {captureFeatures.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <section 
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="aspect-square w-full max-w-2xl mx-auto bg-card/50 rounded-2xl relative overflow-hidden lg:[direction:ltr] border border-border/40">
                  {feature.image ? (
                    <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                      <feature.icon className="h-28 w-28 text-primary/15" />
                    </div>
                  )}
                </div>
                <div className="lg:[direction:ltr] space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    {feature.badge && <Badge variant="secondary">{feature.badge}</Badge>}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{feature.title}</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-28 md:mt-36 text-center py-16 bg-card/50 rounded-2xl border border-border/40">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.common.readyTitle}</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.pages.features.ctaDescription}</p>
          <Button size="lg" className="rounded-full px-8 group" asChild>
            <Link href="/#download">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              {t.common.downloadSnipshot}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { useLocale } from "@/i18n";

export function Hero() {
  const { scrollToSection } = useScrollToSection();
  const { t } = useLocale();

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo */}
          <div className="relative mb-8">
            <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full" />
            <Image
              src="/images/logo-snipshot-app.png"
              alt={`${siteConfig.name} Logo`}
              width={200}
              height={200}
              className="relative h-28 w-28 md:h-36 md:w-36 drop-shadow-lg"
              priority
            />
          </div>

          {/* Badge */}
          <Badge variant="secondary" className="mb-6 font-medium">
            {t.hero.badge}
          </Badge>
          
          {/* Title */}
          <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-[1.1]">
            {t.hero.titleStart}
            <span className="text-primary">{t.hero.titleAccent}</span>
          </h1>
          
          {/* Subtitle */}
          <p className="mb-10 text-lg text-muted-foreground md:text-xl max-w-xl leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA */}
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-base group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" 
            asChild
          >
            <a href="#download" onClick={(e) => scrollToSection("#download", e)}>
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              {t.hero.cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/back-button";
import { getTechStackHeader, getTechnologies, getSystemRequirements } from "@/data";
import { useLocale } from "@/i18n";

export function TechnologyContent() {
  const { locale, t } = useLocale();
  const techStackHeader = getTechStackHeader(locale);
  const technologies = getTechnologies(locale);
  const systemRequirements = getSystemRequirements(locale);

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <BackButton />
        </div>

        <div className="max-w-3xl mb-24">
          <Badge variant="outline" className="mb-4">{t.pages.technology.badge}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            {techStackHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {techStackHeader.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {technologies.map((tech) => (
            <Card 
              key={tech.name}
              className="group border-border/40 bg-card/50 hover:bg-card hover:border-border/80 transition-all duration-300"
            >
              <CardContent className="p-7">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{tech.name}</h3>
                  <Badge variant="secondary" className="text-primary bg-primary/8 group-hover:bg-primary/12 transition-colors">
                    v{tech.version}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/50 border border-border/40 rounded-2xl p-8 md:p-10">
          <h2 className="text-xl font-bold mb-6">{t.pages.technology.systemRequirementsTitle}</h2>
          <ul className="space-y-4">
            {systemRequirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/8 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-muted-foreground">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-28 md:mt-36 text-center py-16 bg-card/50 rounded-2xl border border-border/40">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.common.readyTitle}</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.pages.technology.ctaDescription}</p>
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

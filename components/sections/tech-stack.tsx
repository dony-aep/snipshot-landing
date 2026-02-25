"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getTechStackHeader, getTechnologies } from "@/data";
import { useLocale } from "@/i18n";

export function TechStack() {
  const { locale, t } = useLocale();
  const techStackHeader = getTechStackHeader(locale);
  const technologies = getTechnologies(locale);
  const mainTechnologies = technologies.slice(0, 3);

  return (
    <section id="tech" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {techStackHeader.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {techStackHeader.description}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto">
          {mainTechnologies.map((tech) => (
            <div 
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2 bg-card/60 rounded-full border border-border/40"
            >
              <span className="text-sm font-semibold">{tech.name}</span>
              <Badge variant="secondary" className="text-xs">
                v{tech.version}
              </Badge>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 bg-card/60 rounded-full border border-border/40 text-muted-foreground">
            <span className="text-sm">+{technologies.length - mainTechnologies.length} {t.techSection.more}</span>
          </div>
        </div>

        {/* Ver más link */}
        <div className="text-center">
          <Button variant="ghost" className="group" asChild>
            <Link href="/technology">
              {t.techSection.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

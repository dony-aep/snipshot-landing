"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/back-button";
import { getAnnotationToolsHeader, getAnnotationTools } from "@/data";
import { useLocale } from "@/i18n";

export function ToolsContent() {
  const { locale, t } = useLocale();
  const annotationToolsHeader = getAnnotationToolsHeader(locale);
  const annotationTools = getAnnotationTools(locale);

  return (
    <main className="min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <BackButton />
        </div>

        <div className="max-w-3xl mb-24">
          <Badge variant="outline" className="mb-4">{t.pages.tools.badge}</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            {annotationToolsHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {annotationToolsHeader.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {annotationTools.map((tool) => (
            <Card 
              key={tool.title}
              className="group border-border/40 bg-card/50 hover:bg-card hover:border-border/80 transition-all duration-300"
            >
              <CardContent className="p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8 mb-5 group-hover:bg-primary/12 transition-colors duration-300">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-28 md:mt-36 text-center py-16 bg-card/50 rounded-2xl border border-border/40">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t.common.readyTitle}</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.pages.tools.ctaDescription}</p>
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

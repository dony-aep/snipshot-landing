"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { annotationToolsHeader, annotationTools } from "@/data";

export function AnnotationTools() {
  // Solo mostrar las primeras 4 herramientas en la landing
  const previewTools = annotationTools.slice(0, 4);

  return (
    <section id="tools" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {annotationToolsHeader.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {annotationToolsHeader.description}
          </p>
        </div>

        {/* Preview Icons Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {previewTools.map((tool) => (
            <div 
              key={tool.title}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/50 group-hover:bg-primary/10 transition-colors">
                <tool.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tool.title}
              </span>
            </div>
          ))}
          
          {/* More indicator */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted/50 text-muted-foreground">
              <span className="text-lg font-semibold">+{annotationTools.length - previewTools.length}</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">más</span>
          </div>
        </div>

        {/* Ver más link */}
        <div className="text-center">
          <Button variant="ghost" className="group" asChild>
            <Link href="/tools">
              Ver todas las herramientas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

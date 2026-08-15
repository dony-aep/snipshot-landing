"use client";

import { BackButton } from "@/components/back-button";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

/** Cabecera común de las sub-páginas, con el mismo lenguaje que las secciones
 *  de la home: rótulo en mono, titular display y regla fina de cierre. */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-rule pb-12">
      <BackButton />
      <p className="mt-10 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-selection sm:text-xs">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

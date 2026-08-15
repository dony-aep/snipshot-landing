"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n";

export default function NotFound() {
  const { t } = useLocale();

  const navItems = [
    { title: t.nav.features, href: "/features" },
    { title: t.nav.tools, href: "/tools" },
    { title: t.nav.technology, href: "/technology" },
  ];

  return (
    <div className="flex min-h-[80svh] items-center px-4 py-32">
      <div className="container mx-auto max-w-2xl">
        {/* Una selección vacía: el mismo pill de cotas del héroe, con la medida
            que le corresponde a una página que no existe. */}
        <div className="flex items-center gap-3">
          <span className="rounded-md bg-foreground px-2 py-1 font-mono text-[0.7rem] text-background">
            0 × 0 <span className="opacity-60">px</span>
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
            {t.notFound.label}
          </span>
        </div>

        <h1 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
          {t.notFound.title}
        </h1>

        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
          {t.notFound.description}
        </p>

        <div className="mt-10">
          <Button size="lg" className="group h-12 px-7 text-base" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4.5 w-4.5 transition-transform group-hover:-translate-x-1" />
              {t.notFound.cta}
            </Link>
          </Button>
        </div>

        <ul className="mt-14 space-y-px border-t border-rule">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center justify-between border-b border-rule py-4 text-lg font-semibold tracking-tight transition-colors hover:text-selection"
              >
                {item.title}
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

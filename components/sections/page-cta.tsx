"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n";

/** Cierre común de las sub-páginas. Las tres repetían este bloque palabra por
 *  palabra; solo cambiaba la descripción. Sin recuadro y a dos columnas, igual
 *  que el cierre de la home. */
export function PageCTA({ description }: { description: string }) {
  const { t } = useLocale();

  return (
    <div className="mt-24 border-t border-rule pt-14 md:mt-28 md:pt-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {t.common.readyTitle}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="shrink-0 md:text-right">
          <Button size="lg" className="group h-12 px-7 text-base" asChild>
            <Link href="/#download">
              <Download className="mr-2 h-4.5 w-4.5 transition-transform group-hover:translate-y-0.5" />
              {t.common.downloadSnipshot}
            </Link>
          </Button>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            {t.download.systemWindows}
          </p>
        </div>
      </div>
    </div>
  );
}

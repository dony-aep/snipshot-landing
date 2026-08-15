"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/i18n";

export function BackButton() {
  const { t } = useLocale();
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
      {t.common.home}
    </Link>
  );
}

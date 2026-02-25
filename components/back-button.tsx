"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/i18n";

export function BackButton() {
  const { t } = useLocale();
  return (
    <Link
      href="/"
      className="fixed top-5 left-5 z-40 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-background/70 backdrop-blur-xl border border-border/60 shadow-sm hover:bg-muted transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="hidden sm:inline">{t.common.home}</span>
    </Link>
  );
}

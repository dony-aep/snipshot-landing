"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { getFeaturesHeader, getCaptureFeatures } from "@/data";
import { useLocale } from "@/i18n";

export function Features() {
  const { locale, t } = useLocale();
  const header = getFeaturesHeader(locale);
  const features = getCaptureFeatures(locale);

  return (
    <section id="features" className="px-4 py-20 md:py-24">
      <div className="container mx-auto">
        {/* Cabecera a dos columnas: el enlace se alinea con el titular en vez de
            colgar centrado bajo la rejilla. */}
        <div className="mb-14 flex flex-col gap-6 border-b border-rule pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {header.title}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {header.description}
            </p>
          </div>
          <Link
            href="/features"
            className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.featuresSection.viewAll}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Hoja de contactos. La columna central baja para que la retícula no
            se lea como una tabla de tarjetas. */}
        <div className="grid items-start gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(3n+2)]:mt-16">
          {features.map((feature, index) => (
            <motion.figure
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {feature.image && (
                <div className="overflow-hidden border border-rule bg-card">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={1080}
                    height={1080}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
              )}
              <figcaption className="mt-4">
                <div className="flex items-center gap-2.5">
                  <feature.icon className="h-4 w-4 shrink-0 text-selection" />
                  <h3 className="text-base font-semibold tracking-tight">{feature.title}</h3>
                </div>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

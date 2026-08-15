"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/simple-icon";
import { siteConfig } from "@/config/site";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { useLocale } from "@/i18n";

/** Los ocho tiradores que dibuja la app: cuatro esquinas y cuatro centros de arista.
 *  Se centran con calc() en vez de translate porque motion escribe `transform`
 *  en línea para animar la escala y borraría cualquier translate de clase. */
const HANDLE_POSITIONS = [
  "-top-[5px] -left-[5px]",
  "-top-[5px] -right-[5px]",
  "-bottom-[5px] -left-[5px]",
  "-bottom-[5px] -right-[5px]",
  "-top-[5px] left-[calc(50%-4.5px)]",
  "-bottom-[5px] left-[calc(50%-4.5px)]",
  "-left-[5px] top-[calc(50%-4.5px)]",
  "-right-[5px] top-[calc(50%-4.5px)]",
];

/** Guías que se prolongan desde el centro de cada arista hacia fuera del encuadre. */
const GUIDES = [
  { className: "left-1/2 bottom-full h-[50vh] w-px origin-bottom", axis: "scaleY" },
  { className: "left-1/2 top-full h-[50vh] w-px origin-top", axis: "scaleY" },
  { className: "top-1/2 right-full w-[50vw] h-px origin-right", axis: "scaleX" },
  { className: "top-1/2 left-full w-[50vw] h-px origin-left", axis: "scaleX" },
] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { scrollToSection } = useScrollToSection();
  const { t } = useLocale();
  const reduceMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);

  // El lector de cotas mide el marco de verdad, así que sigue al viewport igual
  // que lo haría sobre una selección real.
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const observer = new ResizeObserver(([entry]) => {
      // borderBoxSize, no contentRect: el rectángulo que se ve es la caja de
      // borde, y contentRect descuenta el padding (que aquí son 160 px).
      const box = entry.borderBoxSize?.[0];
      const rect = box ?? {
        inlineSize: entry.target.getBoundingClientRect().width,
        blockSize: entry.target.getBoundingClientRect().height,
      };
      setSize({ w: Math.round(rect.inlineSize), h: Math.round(rect.blockSize) });
    });
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const riseIn = reduceMotion
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      };

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden px-4 py-28 md:py-32">
      <div className="container mx-auto">
        <motion.div
          ref={frameRef}
          className="capture-frame relative mx-auto max-w-4xl px-6 py-12 sm:px-12 sm:py-14 md:px-14 md:py-16"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
        >
          {GUIDES.map((guide, i) => (
            <motion.span
              key={guide.className}
              aria-hidden="true"
              className={`capture-guide ${guide.className}`}
              initial={reduceMotion ? false : { [guide.axis]: 0 }}
              animate={{ [guide.axis]: 1 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 + i * 0.05 }}
            />
          ))}

          {HANDLE_POSITIONS.map((position, i) => (
            <motion.span
              key={position}
              aria-hidden="true"
              className={`capture-handle ${position}`}
              initial={reduceMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: EASE, delay: 0.45 + i * 0.03 }}
            />
          ))}

          {/* Cotas de la selección. La app las muestra en un pill sobre la esquina
              superior izquierda del área capturada. */}
          <motion.div
            aria-hidden="true"
            className="absolute -top-3.5 left-0 flex items-center gap-1.5 rounded-md bg-foreground px-2 py-1 font-mono text-[0.7rem] text-background shadow-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
          >
            <span className="tabular-nums">
              {size ? `${size.w} × ${size.h}` : "— × —"}
            </span>
            <span className="opacity-60">px</span>
          </motion.div>

          <motion.div
            variants={{
              show: {
                transition: reduceMotion
                  ? {}
                  : { staggerChildren: 0.07, delayChildren: 0.55 },
              },
            }}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={riseIn}
              className="mb-7 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.18em]"
            >
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={riseIn}
              className="marker-heading max-w-3xl text-balance text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
            >
              {t.hero.titleStart}
              <span className="marker-swipe">{t.hero.titleAccent}</span>
            </motion.h1>

            <motion.p
              variants={riseIn}
              className="mt-7 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div variants={riseIn} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group h-12 px-7 text-base" asChild>
                <a href="#download" onClick={(e) => scrollToSection("#download", e)}>
                  <Download className="mr-2 h-4.5 w-4.5 transition-transform group-hover:translate-y-0.5" />
                  {t.hero.cta}
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="h-12 px-6 text-base" asChild>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon className="mr-2 h-4.5 w-4.5" />
                  {t.hero.ctaSecondary}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

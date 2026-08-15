"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getAnnotationToolsHeader, getAnnotationTools } from "@/data";
import { useLocale } from "@/i18n";

const STROKE = "var(--selection)";

/** Una marca por herramienta, en el orden de data/tools.ts. Son trazos a mano
 *  en vez de iconos repetidos: la sección enseña qué hace cada herramienta,
 *  que es justo lo que el icono no cuenta. */
const MARKS = [
  <g key="formas">
    <rect x="40" y="54" width="94" height="68" rx="2" fill="none" stroke={STROKE} strokeWidth="3" />
    <circle cx="216" cy="80" r="33" fill="none" stroke={STROKE} strokeWidth="3" />
    <path d="M146 152 L248 130" stroke={STROKE} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M248 130 l-16 -4 m16 4 l-12 10" stroke={STROKE} strokeWidth="3" strokeLinecap="round" fill="none" />
  </g>,
  <g key="boligrafo">
    <path
      d="M44 130 C72 80, 94 150, 122 102 S170 60, 198 110 S246 150, 276 92"
      fill="none"
      stroke={STROKE}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </g>,
  // Un bloque de texto con el trazo cruzando dos líneas: así se entiende que
  // resalta algo, en vez de ser una mancha suelta.
  <g key="resaltador">
    <g opacity="0.34" stroke="var(--foreground)" strokeWidth="7" strokeLinecap="round">
      <path d="M44 46 H248" />
      <path d="M44 76 H278" />
      <path d="M44 106 H210" />
      <path d="M44 136 H262" />
    </g>
    <rect
      x="34"
      y="62"
      width="218"
      height="58"
      rx="6"
      fill="var(--highlighter)"
      opacity="0.7"
      transform="rotate(-1.2 143 91)"
    />
  </g>,
  <g key="texto">
    <rect x="44" y="58" width="232" height="84" fill="none" stroke={STROKE} strokeWidth="1.5" strokeDasharray="5 5" />
    <text x="62" y="118" className="font-display" fontSize="52" fontWeight="600" fill="var(--foreground)">
      Aa
    </text>
    <rect x="152" y="70" width="3" height="58" fill={STROKE} />
  </g>,
  <g key="emojis">
    <text x="118" y="126" fontSize="66" textAnchor="middle">
      🎯
    </text>
    <text x="206" y="98" fontSize="38" textAnchor="middle">
      ✨
    </text>
  </g>,
  <g key="relleno">
    <rect x="68" y="52" width="184" height="96" rx="3" fill={STROKE} opacity="0.22" />
    <rect x="68" y="52" width="184" height="96" rx="3" fill="none" stroke={STROKE} strokeWidth="3" />
  </g>,
  <g key="recorte">
    <rect x="34" y="36" width="252" height="128" fill="var(--foreground)" opacity="0.07" />
    <rect x="88" y="62" width="144" height="76" fill="none" stroke={STROKE} strokeWidth="2" />
    <path
      d="M88 78 V62 H104 M216 62 H232 V78 M232 122 V138 H216 M104 138 H88 V122"
      fill="none"
      stroke={STROKE}
      strokeWidth="5"
      strokeLinecap="square"
    />
  </g>,
  <g key="rotacion">
    <rect
      x="114"
      y="66"
      width="94"
      height="68"
      rx="2"
      fill="none"
      stroke={STROKE}
      strokeWidth="3"
      transform="rotate(-15 161 100)"
    />
    <path d="M214 56 a60 60 0 0 1 16 44" fill="none" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M230 100 l-8 -14 m8 14 l10 -12" fill="none" stroke={STROKE} strokeWidth="2.5" strokeLinecap="round" />
  </g>,
  <g key="deshacer">
    <rect
      x="62"
      y="58"
      width="88"
      height="62"
      rx="2"
      fill="none"
      stroke="var(--foreground)"
      strokeWidth="2"
      opacity="0.22"
      strokeDasharray="6 6"
    />
    <path d="M238 134 a54 54 0 1 0 -50 -74" fill="none" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
    <path d="M188 60 l-4 -20 m4 20 l20 -6" fill="none" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
  </g>,
];

export function AnnotationTools() {
  const { locale, t } = useLocale();
  const header = getAnnotationToolsHeader(locale);
  const tools = getAnnotationTools(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = tools[activeIndex];
  const reduceMotion = useReducedMotion();

  return (
    <section id="tools" className="px-4 py-20 md:py-24">
      <div className="container mx-auto">
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
            href="/tools"
            className="group inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.toolsSection.viewAll}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-16">
          {/* min-w-0: sin esto el grid item crece con el contenido de la tira y
              el scroll horizontal se lo come la página entera. */}
          <div className="min-w-0">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
              {t.toolsSection.hint}
            </p>

            {/* Hasta lg es una tira horizontal, como la barra flotante de la
                app: en vertical las nueve filas medían 514 px y empujaban el
                lienzo fuera de la pantalla. Sangra hasta el borde para que se
                vea que hay más a la derecha. */}
            <ul className="no-scrollbar -mx-4 mt-5 flex snap-x gap-2 overflow-x-auto px-4 py-1.5 lg:mx-0 lg:block lg:snap-none lg:gap-0 lg:overflow-visible lg:border-t lg:border-rule lg:px-0 lg:py-0">
              {tools.map((tool, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={tool.title} className="shrink-0 snap-start lg:shrink">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className={`flex items-center gap-2 whitespace-nowrap rounded-lg border px-3 py-2 text-left transition-colors lg:w-full lg:gap-3 lg:rounded-none lg:border-x-0 lg:border-b lg:border-t-0 lg:border-rule lg:px-0 lg:py-2.5 ${
                        isActive
                          ? "border-selection bg-selection/10 lg:bg-transparent"
                          : "border-rule"
                      }`}
                    >
                      <span
                        className={`flex shrink-0 items-center justify-center rounded-lg transition-colors lg:h-9 lg:w-9 lg:border ${
                          isActive
                            ? "text-selection lg:border-transparent lg:bg-selection lg:text-primary-foreground"
                            : "text-muted-foreground lg:border-rule"
                        }`}
                      >
                        <tool.icon className="h-4.5 w-4.5" />
                      </span>
                      <span
                        className={`text-sm font-medium transition-colors ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {tool.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            {/* El lienzo. La marca cambia con la herramienta, así que la sección
                muestra el resultado y no solo el nombre. */}
            <div className="capture-surface relative overflow-hidden rounded-lg border border-rule bg-card">
              {/* Las marcas están dibujadas en un lienzo de 320x200 y se centran
                  dentro de uno más ancho: así el conjunto no se estira a lo alto
                  ni engorda los trazos al escalar. */}
              <motion.svg
                key={activeIndex}
                viewBox="0 0 520 236"
                role="img"
                aria-label={active.title}
                className="w-full"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <g transform="translate(100 18)">{MARKS[activeIndex]}</g>
              </motion.svg>

              <span className="absolute left-3 top-3 rounded-md bg-foreground px-2 py-1 font-mono text-[0.7rem] text-background">
                {active.title}
              </span>
            </div>

            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

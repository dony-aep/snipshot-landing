"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ScrollLink } from "@/components/scroll-link";
import { useLocale } from "@/i18n";

const linkClass =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </h2>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();

  const navItems = [
    { title: t.nav.features, href: "/features" },
    { title: t.nav.tools, href: "/tools" },
    { title: t.nav.technology, href: "/technology" },
  ];

  return (
    <footer className="border-t border-rule">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto] md:gap-20">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/logo-snipshot-app.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.site.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 sm:gap-x-16">
            <div>
              <ColumnTitle>{t.footer.navigation}</ColumnTitle>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>{t.footer.resources}</ColumnTitle>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <ScrollLink href="#download" className={linkClass}>
                    {t.footer.download}
                  </ScrollLink>
                </li>
                <li>
                  <a
                    href={siteConfig.links.releases}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {t.footer.releases}
                  </a>
                </li>
                <li>
                  <a
                    href={`${siteConfig.links.github}#readme`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {t.footer.documentation}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ColumnTitle>{t.footer.project}</ColumnTitle>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {t.footer.github}
                  </a>
                </li>
                <li>
                  <a
                    href={`${siteConfig.links.github}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {t.footer.reportBug}
                  </a>
                </li>
                <li>
                  {/* Era un <span> atenuado en una lista de enlaces, así que se
                      leía como un enlace roto. `blob/HEAD` resuelve solo a la
                      rama por defecto del repositorio. */}
                  <a
                    href={`${siteConfig.links.github}/blob/HEAD/LICENSE`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {t.footer.license}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-rule pt-6 md:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} {siteConfig.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {t.footer.madeWith}{" "}
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground transition-colors hover:text-selection"
            >
              {siteConfig.author.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

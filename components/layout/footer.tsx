"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ScrollLink } from "@/components/scroll-link";
import { useLocale } from "@/i18n";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLocale();

  const navItems = [
    { title: t.nav.features, href: "/features" },
    { title: t.nav.tools, href: "/tools" },
    { title: t.nav.technology, href: "/technology" },
  ];

  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-14 md:py-16">
        {/* Main footer content */}
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand section */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <Image 
                src="/images/logo-snipshot-app.png" 
                alt={`${siteConfig.name} Logo`}
                width={32} 
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t.site.description}
            </p>
          </div>

          {/* Links sections */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {/* Navigation */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.footer.navigation}
                </h4>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.footer.resources}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <ScrollLink 
                      href="#download" 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.footer.download}
                    </ScrollLink>
                  </li>
                  <li>
                    <a 
                      href={`${siteConfig.links.github}/releases`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.footer.releases}
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`${siteConfig.links.github}#readme`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.footer.documentation}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Project */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.footer.project}
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href={siteConfig.links.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.footer.github}
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`${siteConfig.links.github}/issues`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t.footer.reportBug}
                    </a>
                  </li>
                  <li>
                    <span className="text-sm text-muted-foreground/70">
                      {t.footer.license}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {currentYear} {siteConfig.name}
            </p>
            <p className="text-xs text-muted-foreground">
              {t.footer.madeWith}{" "}
              <a 
                href={siteConfig.author.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {siteConfig.author.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

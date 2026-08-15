"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSelector } from "@/components/language-selector";
import { GitHubIcon } from "@/components/icons/simple-icon";
import { siteConfig } from "@/config/site";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";
import { useLocale } from "@/i18n";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useScrollToSection();
  const { t } = useLocale();
  const pathname = usePathname();

  const navItems = [
    { title: t.nav.features, href: "/features" },
    { title: t.nav.tools, href: "/tools" },
    { title: t.nav.technology, href: "/technology" },
  ];

  useEffect(() => {
    // Solo se escribe estado cuando el valor cambia de verdad, en vez de una
    // vez por evento de scroll. `passive` deja al navegador desacoplar el
    // listener del desplazamiento.
    const handleScroll = () => {
      const next = window.scrollY > 12;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    closeMobileMenu();
    scrollToSection("#download", e);
  };

  const hasSurface = isScrolled || isMobileMenuOpen;

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className={`flex h-14 items-center gap-4 rounded-xl px-5 transition-all duration-300 ${
            hasSurface
              ? "border border-rule bg-background/85 shadow-sm backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 pl-1"
            onClick={closeMobileMenu}
            aria-label={siteConfig.name}
          >
            <Image
              src="/images/logo-snipshot-app.png"
              alt=""
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="hidden text-lg font-semibold tracking-tight sm:inline">
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden h-5 w-px bg-rule md:block" />

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.title}
                  {/* Marca de página actual: el header ahora sale en todas las
                      rutas, así que sin esto no se sabe dónde estás. */}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-selection"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden h-5 w-px bg-rule md:block" />

          <div className="hidden items-center gap-1 md:flex">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label={t.header.viewOnGithub}
            >
              <GitHubIcon className="h-4.5 w-4.5 transition-all group-hover:scale-75 group-hover:opacity-0" />
              <ExternalLink className="absolute h-4.5 w-4.5 scale-75 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
            </a>

            <LanguageSelector />
            <ModeToggle />

            <Button size="sm" className="ml-1 px-4" asChild>
              <a href="#download" onClick={handleDownloadClick}>
                {t.header.download}
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LanguageSelector />
            <ModeToggle />
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-md"
          onClick={closeMobileMenu}
        />

        <div
          className={`absolute inset-x-0 bottom-0 top-24 flex flex-col transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 border-b border-rule py-5 text-2xl font-semibold tracking-tight transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {isActive && (
                    <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-selection" />
                  )}
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-3 px-8 pb-10">
            <Button size="lg" className="h-13 w-full text-base" asChild>
              <a href="#download" onClick={handleDownloadClick}>
                {t.header.downloadSnipshot}
              </a>
            </Button>

            <Button size="lg" variant="outline" className="h-13 w-full text-base" asChild>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                <GitHubIcon className="mr-2 h-4.5 w-4.5" />
                {t.header.viewOnGithub}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

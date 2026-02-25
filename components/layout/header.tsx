"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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

  const navItems = [
    { title: t.nav.features, href: "/features" },
    { title: t.nav.tools, href: "/tools" },
    { title: t.nav.technology, href: "/technology" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al cambiar de ruta
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    closeMobileMenu();
    scrollToSection("#download", e);
  };

  return (
    <>
      <header 
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div 
          className={`flex h-14 items-center gap-4 px-5 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen
              ? "rounded-full border border-border/60 bg-background/70 backdrop-blur-xl shadow-sm" 
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 pl-2" onClick={closeMobileMenu}>
            <Image 
              src="/images/logo-snipshot-app.png" 
              alt={`${siteConfig.name} Logo`}
              width={28} 
              height={28}
              className="h-7 w-7"
            />
            <span className="text-lg font-bold hidden sm:inline">{siteConfig.name}</span>
          </Link>

          {/* Separador - Desktop */}
          <div className={`h-5 w-px bg-border/50 hidden md:block transition-opacity ${isScrolled ? "opacity-100" : "opacity-40"}`} />

          {/* Navegación - Desktop */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Separador - Desktop */}
          <div className={`h-5 w-px bg-border/50 hidden md:block transition-opacity ${isScrolled ? "opacity-100" : "opacity-40"}`} />

          {/* Acciones - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {/* GitHub */}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label={t.header.viewOnGithub}
            >
              <GitHubIcon className="h-5 w-5 transition-all group-hover:opacity-0 group-hover:scale-75" />
              <ExternalLink className="absolute h-5 w-5 opacity-0 scale-75 transition-all group-hover:opacity-100 group-hover:scale-100" />
            </a>
            
            <LanguageSelector />
            
            <ModeToggle />
            
            <Button size="sm" className="rounded-full px-4" asChild>
              <a href="#download" onClick={handleDownloadClick}>{t.header.download}</a>
            </Button>
          </div>

          {/* Acciones móvil - Preferencias en header */}
          <div className="flex md:hidden items-center gap-1">
            <LanguageSelector />
            <ModeToggle />
            
            {/* Botón menú móvil */}
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-background/90 backdrop-blur-md"
          onClick={closeMobileMenu}
        />
        
        {/* Contenido del menú */}
        <div 
          className={`absolute top-24 left-0 right-0 bottom-0 flex flex-col transition-all duration-300 ${
            isMobileMenuOpen 
              ? "translate-y-0 opacity-100" 
              : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Navegación - centrada verticalmente */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {navItems.map((item, index) => (
              <Link 
                key={item.href}
                href={item.href} 
                onClick={closeMobileMenu}
                className="py-4 text-2xl font-semibold text-center hover:text-primary transition-colors"
                style={{ 
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Acciones - parte inferior */}
          <div className="px-6 pb-8 space-y-3">
            <Button size="lg" className="rounded-full w-full h-14 text-base" asChild>
              <a href="#download" onClick={handleDownloadClick}>
                {t.header.downloadSnipshot}
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full w-full h-14 text-base" 
              asChild
            >
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                <GitHubIcon className="mr-2 h-5 w-5" />
                {t.header.viewOnGithub}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

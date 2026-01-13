"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useScrollToSection } from "@/hooks/use-scroll-to-section";

export function Hero() {
  const { scrollToSection } = useScrollToSection();

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container mx-auto px-4">
        {/* Hero Content - Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-5xl mx-auto">
          {/* Left - Logo */}
          <div className="flex justify-center py-8">
            <div className="relative">
              <div className="absolute -inset-12 bg-primary/15 blur-3xl rounded-full" />
              <Image
                src="/images/logo-snipshot-app.png"
                alt={`${siteConfig.name} Logo`}
                width={280}
                height={280}
                className="relative h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-4">
              Windows 11 • Gratuito • Open Source
            </Badge>
            
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Captura, dibuja y{" "}
              <span className="text-primary">anota</span>
            </h1>
            
            <p className="mb-6 text-base text-muted-foreground md:text-lg max-w-md mx-auto lg:mx-0">
              La herramienta de captura de pantalla moderna para Windows. 
              Diseñada con WinUI 3 para integrarse perfectamente con tu flujo de trabajo profesional.
            </p>
          </div>
        </div>

        {/* Download Button - Centered below */}
        <div className="flex justify-center mt-8">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-base group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25" 
            asChild
          >
            <a href="#download" onClick={(e) => scrollToSection("#download", e)}>
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Descargar SnipShot
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

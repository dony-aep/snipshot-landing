import Link from "next/link";
import Image from "next/image";
import { siteConfig, navItems } from "@/config/site";
import { ScrollLink } from "@/components/scroll-link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand section */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <Image 
                src="/images/logo-snipshot-app.png" 
                alt={`${siteConfig.name} Logo`}
                width={40} 
                height={40}
                className="h-10 w-10 transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-bold">{siteConfig.name}</span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Links sections */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {/* Navigation */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Navegación
                </h4>
                <ul className="space-y-3">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="text-sm hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Recursos
                </h4>
                <ul className="space-y-3">
                  <li>
                    <ScrollLink 
                      href="#download" 
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Descargar
                    </ScrollLink>
                  </li>
                  <li>
                    <a 
                      href={`${siteConfig.links.github}/releases`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Releases
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`${siteConfig.links.github}#readme`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Documentación
                    </a>
                  </li>
                </ul>
              </div>

              {/* Project */}
              <div className="space-y-4">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Proyecto
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href={siteConfig.links.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href={`${siteConfig.links.github}/issues`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm hover:text-primary transition-colors"
                    >
                      Reportar bug
                    </a>
                  </li>
                  <li>
                    <span className="text-sm text-muted-foreground">
                      Licencia MIT
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteConfig.name}.
            </p>
            <p className="text-sm text-muted-foreground">
              Desarrollado con ❤️ por{" "}
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

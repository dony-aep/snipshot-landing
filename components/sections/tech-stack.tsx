import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { techStackHeader, technologies } from "@/data";

export function TechStack() {
  // Mostrar las tecnologías principales
  const mainTechnologies = technologies.slice(0, 3);

  return (
    <section id="tech" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {techStackHeader.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {techStackHeader.description}
          </p>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {mainTechnologies.map((tech) => (
            <div 
              key={tech.name}
              className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full border border-border/50"
            >
              <span className="font-semibold">{tech.name}</span>
              <Badge variant="secondary" className="text-xs">
                v{tech.version}
              </Badge>
            </div>
          ))}
          <div className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-full border border-border/50 text-muted-foreground">
            <span>+{technologies.length - mainTechnologies.length} más</span>
          </div>
        </div>

        {/* Ver más link */}
        <div className="text-center">
          <Button variant="ghost" className="group" asChild>
            <Link href="/technology">
              Ver stack tecnológico completo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

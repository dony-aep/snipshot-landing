import Link from "next/link";
import { CheckCircle2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/back-button";
import { technologies, techStackHeader, systemRequirements } from "@/data";

export const metadata = {
  title: "Technology - SnipShot",
  description: "Learn about the technology behind SnipShot: .NET, WinUI 3, Windows App SDK and more.",
};

export default function TechnologyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="outline" className="mb-4">Tecnología</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {techStackHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {techStackHeader.description}
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technologies.map((tech) => (
            <Card 
              key={tech.name}
              className="group border border-border/50 bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{tech.name}</h3>
                  <Badge variant="secondary" className="text-primary bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    v{tech.version}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* System Requirements */}
        <div className="bg-muted/20 border border-border/50 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8">Requisitos del sistema</h2>
          <ul className="space-y-5">
            {systemRequirements.map((req, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-muted-foreground text-lg">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-32 text-center py-16 bg-muted/20 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para empezar?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Descarga SnipShot gratis y descubre la diferencia.
          </p>
          <Button size="lg" className="rounded-full px-8 group" asChild>
            <Link href="/#download">
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Descargar SnipShot
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

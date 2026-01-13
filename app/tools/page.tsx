import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/back-button";
import { annotationTools, annotationToolsHeader } from "@/data";

export const metadata = {
  title: "Tools - SnipShot",
  description: "Explore all SnipShot annotation tools: shapes, pen, highlighter, text and more.",
};

export default function ToolsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="outline" className="mb-4">Herramientas</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {annotationToolsHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {annotationToolsHeader.description}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {annotationTools.map((tool, index) => (
            <Card 
              key={tool.title}
              className="group border border-border/50 bg-muted/20 hover:bg-muted/40 hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <tool.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center py-16 bg-muted/20 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para empezar?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Descarga SnipShot gratis y descubre todas las herramientas.
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

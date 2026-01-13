import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/back-button";
import { captureFeatures, featuresHeader } from "@/data";

export const metadata = {
  title: "Features - SnipShot",
  description: "Discover all SnipShot features: capture modes, annotations, OCR and more.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <BackButton />
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="outline" className="mb-4">Características</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {featuresHeader.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {featuresHeader.description}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-32">
          {captureFeatures.map((feature, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <section 
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}
              >
                {/* Image */}
                <div className="aspect-square w-full max-w-2xl mx-auto bg-muted/20 rounded-3xl relative overflow-hidden lg:[direction:ltr] border border-border/50">
                  {feature.image ? (
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                      <feature.icon className="h-32 w-32 text-primary/20" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="lg:[direction:ltr] space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary">{feature.badge}</Badge>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center py-16 bg-muted/20 rounded-3xl">
          <h3 className="text-3xl font-bold mb-4">¿Listo para empezar?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Descarga SnipShot gratis y experimenta una nueva forma de capturar.
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

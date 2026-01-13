import { Badge } from "@/components/ui/badge";
import { additionalFeaturesHeader, additionalFeatures } from "@/data";

export function AdditionalFeatures() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          {additionalFeaturesHeader.badge && (
            <Badge variant="outline" className="mb-4">
              {additionalFeaturesHeader.badge}
            </Badge>
          )}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {additionalFeaturesHeader.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {additionalFeaturesHeader.description}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {additionalFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

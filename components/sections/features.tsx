"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuresHeader, captureFeatures } from "@/data";
import { motion } from "framer-motion";

export function Features() {
  // Solo mostrar las primeras 3 features en la landing
  const previewFeatures = captureFeatures.slice(0, 3);

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header con animaciones */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {featuresHeader.title}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {featuresHeader.description}
          </motion.p>
        </div>

        {/* Preview Grid - 3 columnas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {previewFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="h-full border border-border/50 bg-muted/20 hover:bg-muted/40 transition-colors">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    {feature.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Ver más link */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="ghost" className="group" asChild>
            <Link href="/features">
              Ver todas las características
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

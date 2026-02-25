"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Scale, Monitor, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon } from "@/components/icons/simple-icon";
import { useLocale } from "@/i18n";

const architectures = [
  { name: "x64", label: "64-bit" },
  { name: "ARM64", label: "ARM" },
];

export function DownloadCTA() {
  const { t } = useLocale();
  return (
    <section id="download" className="py-28 md:py-36 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-4 px-4 py-1.5">
              <Scale className="mr-2 h-3.5 w-3.5" />
              {t.download.badge}
            </Badge>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              {t.download.titleStart}
              <span className="text-primary">{t.download.titleAccent}</span>
              {t.download.titleEnd}
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              {t.download.description}
            </p>
          </div>

          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm p-8 md:p-10"
          >
            {/* System Requirements */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Monitor className="h-4 w-4" />
                <span>{t.download.systemWindows}</span>
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Cpu className="h-4 w-4" />
                <span>{t.download.architectures}</span>
                <div className="flex gap-1.5">
                  {architectures.map((arch) => (
                    <Badge key={arch.name} variant="secondary" className="text-xs px-2 py-0.5">
                      {arch.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto px-8 h-12 text-base" asChild>
                <a href="https://github.com/dony-aep/SnipShot/releases" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  {t.download.downloadButton}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 h-12 text-base" asChild>
                <a 
                  href="https://github.com/dony-aep/SnipShot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <GitHubIcon className="mr-2 h-5 w-5" />
                  {t.download.githubButton}
                </a>
              </Button>
            </div>

            {/* Version info */}
            <p className="mt-6 text-center text-xs text-muted-foreground">
              {t.download.versionNote}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

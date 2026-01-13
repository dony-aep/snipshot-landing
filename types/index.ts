import { LucideIcon } from "lucide-react";

// Feature item para modos de captura
export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string; // Ruta a imagen del feature
  badge?: string; // Badge opcional (ej: "Próximamente")
}

// Tool item para herramientas de anotación
export interface ToolItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Technology item para tech stack
export interface TechnologyItem {
  name: string;
  version: string;
  description: string;
}

// Sección con título y descripción
export interface SectionHeader {
  title: string;
  description: string;
  badge?: string;
}

// Configuración del sitio
export interface SiteConfig {
  name: string;
  description: string;
  author: {
    name: string;
    github: string;
  };
  links: {
    github: string;
    releases: string;
  };
}

// Navegación
export interface NavItem {
  title: string;
  href: string;
}

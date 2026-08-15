import type { Locale } from "@/i18n/types";
import type { TechnologyItem, SectionHeader } from "@/types";

const translations: Record<Locale, {
  header: SectionHeader;
  items: TechnologyItem[];
  systemRequirements: string[];
}> = {
  es: {
    header: {
      title: "Cómo está construida",
      description: "En C# sobre .NET 10, con WinUI 3 para la interfaz y Win2D para el dibujo.",
    },
    items: [
      { name: ".NET", version: "10.0", description: "Framework de desarrollo" },
      { name: "Windows App SDK", version: "1.8", description: "SDK moderno para aplicaciones Windows" },
      { name: "WinUI", version: "3", description: "Framework de interfaz de usuario" },
      { name: "Win2D", version: "1.3.2", description: "Motor de gráficos 2D de alto rendimiento" },
      { name: "C#", version: "14", description: "Lenguaje de programación" },
    ],
    systemRequirements: [
      "Windows 11 versión 22H2 (build 22621) o superior",
      "Arquitecturas soportadas: x64, ARM64",
      "No compatible con Windows 10 ni versiones anteriores",
    ],
  },
  en: {
    header: {
      title: "How it's built",
      description: "In C# on .NET 10, with WinUI 3 for the interface and Win2D for drawing.",
    },
    items: [
      { name: ".NET", version: "10.0", description: "Development framework" },
      { name: "Windows App SDK", version: "1.8", description: "Modern SDK for Windows applications" },
      { name: "WinUI", version: "3", description: "User interface framework" },
      { name: "Win2D", version: "1.3.2", description: "High-performance 2D graphics engine" },
      { name: "C#", version: "14", description: "Programming language" },
    ],
    systemRequirements: [
      "Windows 11 version 22H2 (build 22621) or higher",
      "Supported architectures: x64, ARM64",
      "Not compatible with Windows 10 or earlier versions",
    ],
  },
};

export function getTechStackHeader(locale: Locale): SectionHeader {
  return translations[locale].header;
}

export function getTechnologies(locale: Locale): TechnologyItem[] {
  return translations[locale].items;
}

export function getSystemRequirements(locale: Locale): string[] {
  return translations[locale].systemRequirements;
}

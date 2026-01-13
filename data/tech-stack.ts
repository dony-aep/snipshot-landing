import { TechnologyItem, SectionHeader } from "@/types";

export const techStackHeader: SectionHeader = {
  title: "Tecnología moderna",
  description: "Construido con las últimas tecnologías de Microsoft para Windows.",
};

export const technologies: TechnologyItem[] = [
  {
    name: ".NET",
    version: "10.0",
    description: "Framework de desarrollo",
  },
  {
    name: "Windows App SDK",
    version: "1.8",
    description: "SDK moderno para aplicaciones Windows",
  },
  {
    name: "WinUI",
    version: "3",
    description: "Framework de interfaz de usuario",
  },
  {
    name: "Win2D",
    version: "1.3.2",
    description: "Motor de gráficos 2D de alto rendimiento",
  },
  {
    name: "C#",
    version: "12",
    description: "Lenguaje de programación",
  },
];

export const systemRequirements: string[] = [
  "Windows 11 versión 22H2 (build 22621) o superior",
  "Arquitecturas soportadas: x64, ARM64",
  "No compatible con Windows 10 ni versiones anteriores",
];

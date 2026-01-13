import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "SnipShot",
  description: "Una aplicación de captura de pantalla moderna para Windows desarrollada con WinUI 3.",
  author: {
    name: "dony.",
    github: "https://github.com/dony-aep",
  },
  links: {
    github: "https://github.com/dony-aep/SnipShot",
    releases: "https://github.com/dony-aep/SnipShot/releases",
  },
};

export const navItems: NavItem[] = [
  {
    title: "Características",
    href: "/features",
  },
  {
    title: "Herramientas",
    href: "/tools",
  },
  {
    title: "Tecnología",
    href: "/technology",
  },
];

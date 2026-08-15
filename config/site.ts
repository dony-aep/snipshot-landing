import { SiteConfig, NavItem } from "@/types";

export const siteConfig: SiteConfig = {
  name: "SnipShot",
  description: "Aplicación de captura de pantalla para Windows 11, gratis y de código abierto.",
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

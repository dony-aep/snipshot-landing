import type { NextConfig } from "next";

const securityHeaders = [
  {
    // Previene ataques de clickjacking
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Previene MIME type sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Controla la información enviada en el header Referer
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Habilita protecciones del navegador (XSS, clickjacking, etc.)
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    // Fuerza HTTPS
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  // React Compiler - Optimización automática de componentes
  reactCompiler: true,

  // Seguridad - Ocultar header x-powered-by
  poweredByHeader: false,

  // Security Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Configuración de imágenes optimizada
  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // Optimizar imports de paquetes grandes (mejor tree-shaking)
    optimizePackageImports: ["lucide-react", "framer-motion", "simple-icons"],
    // Cache de Turbopack para desarrollo más rápido
    turbopackFileSystemCacheForDev: true,
    // View Transitions - Animaciones suaves entre páginas
    viewTransition: true,
  },
};

export default nextConfig;

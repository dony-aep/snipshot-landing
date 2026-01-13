import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // React Compiler - Optimización automática de componentes
  reactCompiler: true,

  // Seguridad - Ocultar header x-powered-by
  poweredByHeader: false,

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

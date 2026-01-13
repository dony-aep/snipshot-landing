"use client";

import { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

interface UseScrollToSectionOptions {
  offset?: number;
}

export function useScrollToSection(options: UseScrollToSectionOptions = {}) {
  const { offset = 25 } = options;
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = useCallback(
    (sectionId: string, e?: React.MouseEvent) => {
      e?.preventDefault();

      const targetId = sectionId.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Actualizar URL sin recargar
        window.history.pushState(null, "", `#${targetId}`);
      } else if (pathname !== "/") {
        // Si no está en la página principal, navegar primero
        router.push(`/#${targetId}`);
      }
    },
    [offset, pathname, router]
  );

  const scrollToTop = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Limpiar hash de la URL
      if (window.location.hash) {
        window.history.pushState(null, "", pathname);
      }
    },
    [pathname]
  );

  return { scrollToSection, scrollToTop };
}

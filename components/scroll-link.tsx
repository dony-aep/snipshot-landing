"use client";

import { useScrollToSection } from "@/hooks/use-scroll-to-section";

interface ScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const { scrollToSection } = useScrollToSection();

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      scrollToSection(href, e);
      onClick?.();
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

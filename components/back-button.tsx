import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <Link
      href="/"
      className="fixed top-5 left-5 z-40 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full bg-background/80 backdrop-blur-md border shadow-lg hover:bg-muted transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="hidden sm:inline">Inicio</span>
    </Link>
  );
}

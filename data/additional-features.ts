import { FileText, Save, Timer, Keyboard, MonitorDown, Power, Frame, Sun, ZoomIn } from "lucide-react";
import type { Locale } from "@/i18n/types";
import type { FeatureItem, SectionHeader } from "@/types";

const featuresMeta = [
  { icon: FileText },
  { icon: Save },
  { icon: Timer },
  { icon: Keyboard },
  { icon: MonitorDown },
  { icon: Power },
  { icon: Frame },
  { icon: Sun },
  { icon: ZoomIn },
];

const translations: Record<Locale, {
  header: SectionHeader;
  items: Array<{ title: string; description: string }>;
}> = {
  es: {
    header: {
      title: "Funciones adicionales",
      description: "Características que hacen de SnipShot una herramienta completa.",
      badge: "Y mucho más...",
    },
    items: [
      { title: "Extracción de texto (OCR)", description: "Extrae texto de las imágenes capturadas automáticamente." },
      { title: "Guardado automático", description: "Guarda automáticamente las capturas en tu carpeta preferida." },
      { title: "Delay configurable", description: "Programa capturas con retraso de 3, 5 o 10 segundos." },
      { title: "Atajos de teclado", description: "Ctrl+Shift+S y Print Screen configurables." },
      { title: "Bandeja del sistema", description: "Minimiza a la bandeja para acceso rápido." },
      { title: "Inicio con Windows", description: "Opción para iniciar automáticamente con el sistema." },
      { title: "Borde personalizable", description: "Añade bordes con color y grosor configurable." },
      { title: "Temas", description: "Soporte para tema claro, oscuro y automático." },
      { title: "Zoom", description: "Acerca y aleja las capturas para edición precisa." },
    ],
  },
  en: {
    header: {
      title: "Additional features",
      description: "Features that make SnipShot a complete tool.",
      badge: "And much more...",
    },
    items: [
      { title: "Text extraction (OCR)", description: "Extract text from captured images automatically." },
      { title: "Auto save", description: "Automatically save captures to your preferred folder." },
      { title: "Configurable delay", description: "Schedule captures with a 3, 5 or 10 second delay." },
      { title: "Keyboard shortcuts", description: "Ctrl+Shift+S and Print Screen configurable." },
      { title: "System tray", description: "Minimize to the tray for quick access." },
      { title: "Start with Windows", description: "Option to start automatically with the system." },
      { title: "Customizable border", description: "Add borders with configurable color and thickness." },
      { title: "Themes", description: "Support for light, dark and automatic themes." },
      { title: "Zoom", description: "Zoom in and out of captures for precise editing." },
    ],
  },
};

export function getAdditionalFeaturesHeader(locale: Locale): SectionHeader {
  return translations[locale].header;
}

export function getAdditionalFeatures(locale: Locale): FeatureItem[] {
  const t = translations[locale];
  return featuresMeta.map((meta, i) => ({
    ...meta,
    ...t.items[i],
  }));
}

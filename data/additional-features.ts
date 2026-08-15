import { FileText, Save, Timer, Keyboard, MonitorDown, Power, Frame, Sun, ZoomIn, ClipboardCopy, RefreshCw, Accessibility } from "lucide-react";
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
  { icon: ClipboardCopy },
  { icon: RefreshCw },
  { icon: Accessibility },
];

const translations: Record<Locale, {
  header: SectionHeader;
  items: Array<{ title: string; description: string }>;
}> = {
  es: {
    header: {
      title: "Funciones adicionales",
      description: "OCR, portapapeles, atajos de teclado, bandeja del sistema y actualizaciones.",
    },
    items: [
      { title: "Extracción de texto (OCR)", description: "Extrae texto de las imágenes capturadas automáticamente." },
      { title: "Guardado automático", description: "Guarda las capturas en tu carpeta preferida, activado por defecto." },
      { title: "Delay configurable", description: "Programa capturas con retraso de 3, 5 o 10 segundos." },
      { title: "Atajos de teclado", description: "Ctrl+Shift+S y Print Screen configurables, con notificación nativa." },
      { title: "Bandeja del sistema", description: "Minimiza a la bandeja para acceso rápido." },
      { title: "Inicio con Windows", description: "Activado por defecto: arranca en segundo plano, oculto en la bandeja." },
      { title: "Borde personalizable", description: "Añade bordes con color y grosor configurable." },
      { title: "Temas", description: "Soporte para tema claro, oscuro y automático." },
      { title: "Zoom", description: "Acerca y aleja con Ctrl+rueda, o ajusta la imagen a la ventana." },
      { title: "Copiar al portapapeles", description: "Copia la captura o el código de color al portapapeles al instante." },
      { title: "Actualizaciones", description: "Comprueba nuevas versiones desde Configuración y abre la descarga en GitHub." },
      { title: "Accesibilidad", description: "Controles con nombres accesibles, listos para lectores de pantalla." },
    ],
  },
  en: {
    header: {
      title: "Additional features",
      description: "OCR, clipboard, keyboard shortcuts, system tray and update checks.",
    },
    items: [
      { title: "Text extraction (OCR)", description: "Extract text from captured images automatically." },
      { title: "Auto save", description: "Save captures to your preferred folder, enabled by default." },
      { title: "Configurable delay", description: "Schedule captures with a 3, 5 or 10 second delay." },
      { title: "Keyboard shortcuts", description: "Ctrl+Shift+S and Print Screen configurable, with native notification." },
      { title: "System tray", description: "Minimize to the tray for quick access." },
      { title: "Start with Windows", description: "Enabled by default: starts in the background, hidden in the tray." },
      { title: "Customizable border", description: "Add borders with configurable color and thickness." },
      { title: "Themes", description: "Support for light, dark and automatic themes." },
      { title: "Zoom", description: "Zoom in and out with Ctrl+wheel, or fit the image to the window." },
      { title: "Copy to clipboard", description: "Copy the capture or the color code to the clipboard instantly." },
      { title: "Updates", description: "Check for new versions from Settings and open the download on GitHub." },
      { title: "Accessibility", description: "Controls with accessible names, ready for screen readers." },
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

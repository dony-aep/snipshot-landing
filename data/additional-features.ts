import { 
  FileText, 
  Save, 
  Timer, 
  Keyboard, 
  MonitorDown,
  Power,
  Frame,
  Sun,
  ZoomIn
} from "lucide-react";
import { FeatureItem, SectionHeader } from "@/types";

export const additionalFeaturesHeader: SectionHeader = {
  title: "Funciones adicionales",
  description: "Características que hacen de SnipShot una herramienta completa.",
  badge: "Y mucho más...",
};

export const additionalFeatures: FeatureItem[] = [
  {
    icon: FileText,
    title: "Extracción de texto (OCR)",
    description: "Extrae texto de las imágenes capturadas automáticamente.",
  },
  {
    icon: Save,
    title: "Guardado automático",
    description: "Guarda automáticamente las capturas en tu carpeta preferida.",
  },
  {
    icon: Timer,
    title: "Delay configurable",
    description: "Programa capturas con retraso de 3, 5 o 10 segundos.",
  },
  {
    icon: Keyboard,
    title: "Atajos de teclado",
    description: "Ctrl+Shift+S y Print Screen configurables.",
  },
  {
    icon: MonitorDown,
    title: "Bandeja del sistema",
    description: "Minimiza a la bandeja para acceso rápido.",
  },
  {
    icon: Power,
    title: "Inicio con Windows",
    description: "Opción para iniciar automáticamente con el sistema.",
  },
  {
    icon: Frame,
    title: "Borde personalizable",
    description: "Añade bordes con color y grosor configurable.",
  },
  {
    icon: Sun,
    title: "Temas",
    description: "Soporte para tema claro, oscuro y automático.",
  },
  {
    icon: ZoomIn,
    title: "Zoom",
    description: "Acerca y aleja las capturas para edición precisa.",
  },
];

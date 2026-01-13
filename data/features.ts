import { 
  Camera, 
  Shapes, 
  Pencil, 
  ScanText, 
  Search,
  Pipette
} from "lucide-react";
import { FeatureItem, SectionHeader } from "@/types";

export const featuresHeader: SectionHeader = {
  title: "Todo lo que necesitas",
  description: "Captura, anota y transforma tus capturas de pantalla con herramientas potentes.",
};

export const captureFeatures: FeatureItem[] = [
  {
    icon: Camera,
    title: "4 modos de captura",
    description: "Pantalla completa, región rectangular, forma libre y ventana específica. Elige el modo perfecto para cada situación y captura exactamente lo que necesitas.",
    image: "/screenshots/capture-modes.png",
  },
  {
    icon: Pipette,
    title: "Selector de color",
    description: "Captura colores de cualquier punto de la pantalla y obtén el código en formato HEX, RGB o HSL para usar en tus diseños.",
    image: "/screenshots/color-picker.png",
  },
  {
    icon: Shapes,
    title: "Formas y emojis",
    description: "Añade formas geométricas, flechas, líneas y emojis para comunicar ideas de forma visual. Personaliza colores, tamaños y estilos según tus necesidades.",
    image: "/screenshots/shapes-emojis.png",
  },
  {
    icon: Pencil,
    title: "Anotaciones completas",
    description: "Escribe texto, dibuja con el bolígrafo, resalta información importante con el resaltador. Todas las herramientas que necesitas para explicar y señalar.",
    image: "/screenshots/annotations.png",
  },
  {
    icon: ScanText,
    title: "Extracción de texto (OCR)",
    description: "Captura el texto de cualquier imagen automáticamente. Copia, edita y reutiliza el texto extraído sin necesidad de escribirlo manualmente.",
    image: "/screenshots/ocr-feature.png",
  },
  {
    icon: Search,
    title: "Búsqueda de imagen",
    description: "Realiza búsquedas inversas de imágenes con Google o Bing directamente desde tu captura. Encuentra información relacionada, fuentes originales y contenido similar.",
    image: "/screenshots/google-search.png",
  },
];

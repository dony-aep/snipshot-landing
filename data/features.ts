import { Camera, Shapes, Pencil, ScanText, Search, Pipette } from "lucide-react";
import type { Locale } from "@/i18n/types";
import type { FeatureItem, SectionHeader } from "@/types";

const featuresMeta = [
  { icon: Camera, image: "/screenshots/capture-modes.png" },
  { icon: Pipette, image: "/screenshots/color-picker.png" },
  { icon: Shapes, image: "/screenshots/shapes-emojis.png" },
  { icon: Pencil, image: "/screenshots/annotations.png" },
  { icon: ScanText, image: "/screenshots/ocr-feature.png" },
  { icon: Search, image: "/screenshots/google-search.png" },
];

const translations: Record<Locale, { header: SectionHeader; items: Array<{ title: string; description: string }> }> = {
  es: {
    header: {
      title: "Todo lo que necesitas",
      description: "Captura, anota y transforma tus capturas de pantalla con herramientas potentes.",
    },
    items: [
      { title: "4 modos de captura", description: "Pantalla completa, región rectangular, forma libre y ventana específica. Elige el modo perfecto para cada situación y captura exactamente lo que necesitas." },
      { title: "Selector de color", description: "Captura colores de cualquier punto de la pantalla y obtén el código en formato HEX, RGB o HSL para usar en tus diseños." },
      { title: "Formas y emojis", description: "Añade formas geométricas, flechas, líneas y emojis para comunicar ideas de forma visual. Personaliza colores, tamaños y estilos según tus necesidades." },
      { title: "Anotaciones completas", description: "Escribe texto, dibuja con el bolígrafo, resalta información importante con el resaltador. Todas las herramientas que necesitas para explicar y señalar." },
      { title: "Extracción de texto (OCR)", description: "Captura el texto de cualquier imagen automáticamente. Copia, edita y reutiliza el texto extraído sin necesidad de escribirlo manualmente." },
      { title: "Búsqueda de imagen", description: "Realiza búsquedas inversas de imágenes con Google o Bing directamente desde tu captura. Encuentra información relacionada, fuentes originales y contenido similar." },
    ],
  },
  en: {
    header: {
      title: "Everything you need",
      description: "Capture, annotate and transform your screenshots with powerful tools.",
    },
    items: [
      { title: "4 capture modes", description: "Full screen, rectangular region, freeform and specific window. Choose the perfect mode for each situation and capture exactly what you need." },
      { title: "Color picker", description: "Capture colors from any point on the screen and get the code in HEX, RGB or HSL format for your designs." },
      { title: "Shapes and emojis", description: "Add geometric shapes, arrows, lines and emojis to communicate ideas visually. Customize colors, sizes and styles to your needs." },
      { title: "Full annotations", description: "Write text, draw with the pen, highlight important information with the highlighter. All the tools you need to explain and point out." },
      { title: "Text extraction (OCR)", description: "Capture text from any image automatically. Copy, edit and reuse the extracted text without having to type it manually." },
      { title: "Image search", description: "Perform reverse image searches with Google or Bing directly from your capture. Find related information, original sources and similar content." },
    ],
  },
};

export function getFeaturesHeader(locale: Locale): SectionHeader {
  return translations[locale].header;
}

export function getCaptureFeatures(locale: Locale): FeatureItem[] {
  const t = translations[locale];
  return featuresMeta.map((meta, i) => ({
    ...meta,
    ...t.items[i],
  }));
}

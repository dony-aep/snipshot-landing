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
      title: "Lo que puedes hacer con una captura",
      description: "Elegir el área, marcarla, sacarle el texto y buscarla en la web.",
    },
    items: [
      { title: "5 modos de captura", description: "Pantalla completa, región rectangular, forma libre, ventana específica y selector de color. El modo se cambia desde la propia barra de captura." },
      { title: "Selector de color", description: "Toma el color de cualquier píxel de la pantalla y devuelve el código en HEX, RGB o HSL." },
      { title: "Formas y emojis", description: "Rectángulos, círculos, líneas, flechas, estrellas y emojis, con color, grosor y relleno configurables." },
      { title: "Texto y dibujo", description: "Escribe texto con estilo y resaltado, dibuja a mano alzada y marca áreas con transparencia ajustable." },
      { title: "Extracción de texto (OCR)", description: "Saca el texto de la imagen capturada para copiarlo o editarlo sin volver a escribirlo." },
      { title: "Búsqueda de imagen", description: "Busca la captura en Google Imágenes o en Bing desde el menú de la propia imagen." },
    ],
  },
  en: {
    header: {
      title: "What you can do with a capture",
      description: "Pick the area, mark it up, pull out its text and search for it on the web.",
    },
    items: [
      { title: "5 capture modes", description: "Full screen, rectangular region, freeform, specific window and color picker. You switch modes from the capture bar itself." },
      { title: "Color picker", description: "Reads the color of any pixel on screen and gives you the code in HEX, RGB or HSL." },
      { title: "Shapes and emojis", description: "Rectangles, circles, lines, arrows, stars and emojis, with configurable color, thickness and fill." },
      { title: "Text and drawing", description: "Write text with styling and highlighting, draw freehand, and mark areas with adjustable transparency." },
      { title: "Text extraction (OCR)", description: "Pulls the text out of the captured image so you can copy or edit it instead of retyping it." },
      { title: "Image search", description: "Search the capture on Google Images or Bing from the image's own menu." },
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

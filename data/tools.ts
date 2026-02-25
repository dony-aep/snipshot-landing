import { Shapes, Pen, Highlighter, Type, Crop, Undo2, Smile, PaintBucket, RotateCw } from "lucide-react";
import type { Locale } from "@/i18n/types";
import type { ToolItem, SectionHeader } from "@/types";

const toolsMeta = [
  { icon: Shapes },
  { icon: Pen },
  { icon: Highlighter },
  { icon: Type },
  { icon: Smile },
  { icon: PaintBucket },
  { icon: Crop },
  { icon: RotateCw },
  { icon: Undo2 },
];

const translations: Record<Locale, { header: SectionHeader; items: Array<{ title: string; description: string }> }> = {
  es: {
    header: {
      title: "Herramientas de anotación",
      description: "Todo lo que necesitas para marcar, resaltar y personalizar tus capturas.",
    },
    items: [
      { title: "Formas", description: "Rectángulos, círculos, líneas, flechas y estrellas para señalar elementos." },
      { title: "Bolígrafo", description: "Dibujo libre con colores y grosores personalizables." },
      { title: "Resaltador", description: "Resalta áreas importantes con transparencia ajustable." },
      { title: "Texto", description: "Añade texto con diferentes estilos, colores y resaltado." },
      { title: "Emojis", description: "Inserta emojis directamente en tus capturas para comunicar mejor." },
      { title: "Relleno", description: "Aplica relleno con color y opacidad a formas cerradas." },
      { title: "Recorte", description: "Recorta la imagen después de capturar para ajustar el área." },
      { title: "Rotación de formas", description: "Rota formas y anotaciones libremente para mejor posicionamiento." },
      { title: "Deshacer/Rehacer", description: "Historial completo de cambios en las anotaciones." },
    ],
  },
  en: {
    header: {
      title: "Annotation tools",
      description: "Everything you need to mark, highlight and customize your captures.",
    },
    items: [
      { title: "Shapes", description: "Rectangles, circles, lines, arrows and stars to point out elements." },
      { title: "Pen", description: "Freehand drawing with customizable colors and thickness." },
      { title: "Highlighter", description: "Highlight important areas with adjustable transparency." },
      { title: "Text", description: "Add text with different styles, colors and highlighting." },
      { title: "Emojis", description: "Insert emojis directly into your captures to communicate better." },
      { title: "Fill", description: "Apply fill with color and opacity to closed shapes." },
      { title: "Crop", description: "Crop the image after capture to adjust the area." },
      { title: "Shape rotation", description: "Rotate shapes and annotations freely for better positioning." },
      { title: "Undo/Redo", description: "Complete change history for annotations." },
    ],
  },
};

export function getAnnotationToolsHeader(locale: Locale): SectionHeader {
  return translations[locale].header;
}

export function getAnnotationTools(locale: Locale): ToolItem[] {
  const t = translations[locale];
  return toolsMeta.map((meta, i) => ({
    ...meta,
    ...t.items[i],
  }));
}

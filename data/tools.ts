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
      description: "Las que aparecen en la barra flotante al terminar una selección.",
    },
    items: [
      { title: "Formas", description: "Rectángulos, círculos, líneas, flechas y estrellas." },
      { title: "Bolígrafo", description: "Dibujo a mano alzada, con color y grosor configurables." },
      { title: "Resaltador", description: "Marca áreas con transparencia ajustable." },
      { title: "Texto", description: "Texto con distintos estilos, colores y resaltado." },
      { title: "Emojis", description: "Inserta emojis sobre la captura." },
      { title: "Relleno", description: "Aplica color y opacidad al interior de las formas cerradas." },
      { title: "Recorte", description: "Ajusta el área de la imagen ya capturada." },
      { title: "Rotación de formas", description: "Gira cualquier forma o anotación." },
      { title: "Deshacer/Rehacer", description: "Historial completo de cambios en las anotaciones." },
    ],
  },
  en: {
    header: {
      title: "Annotation tools",
      description: "The ones that appear in the floating bar once you finish a selection.",
    },
    items: [
      { title: "Shapes", description: "Rectangles, circles, lines, arrows and stars." },
      { title: "Pen", description: "Freehand drawing, with configurable color and thickness." },
      { title: "Highlighter", description: "Mark areas with adjustable transparency." },
      { title: "Text", description: "Text in different styles, colors and highlighting." },
      { title: "Emojis", description: "Drop emojis onto the capture." },
      { title: "Fill", description: "Apply color and opacity inside closed shapes." },
      { title: "Crop", description: "Adjust the area of an image you already captured." },
      { title: "Shape rotation", description: "Rotate any shape or annotation." },
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

import { 
  Shapes, 
  Pen, 
  Highlighter, 
  Type, 
  Crop,
  Undo2,
  Smile,
  PaintBucket,
  RotateCw
} from "lucide-react";
import { ToolItem, SectionHeader } from "@/types";

export const annotationToolsHeader: SectionHeader = {
  title: "Herramientas de anotación",
  description: "Todo lo que necesitas para marcar, resaltar y personalizar tus capturas.",
};

export const annotationTools: ToolItem[] = [
  {
    icon: Shapes,
    title: "Formas",
    description: "Rectángulos, círculos, líneas, flechas y estrellas para señalar elementos.",
  },
  {
    icon: Pen,
    title: "Bolígrafo",
    description: "Dibujo libre con colores y grosores personalizables.",
  },
  {
    icon: Highlighter,
    title: "Resaltador",
    description: "Resalta áreas importantes con transparencia ajustable.",
  },
  {
    icon: Type,
    title: "Texto",
    description: "Añade texto con diferentes estilos, colores y resaltado.",
  },
  {
    icon: Smile,
    title: "Emojis",
    description: "Inserta emojis directamente en tus capturas para comunicar mejor.",
  },
  {
    icon: PaintBucket,
    title: "Relleno",
    description: "Aplica relleno con color y opacidad a formas cerradas.",
  },
  {
    icon: Crop,
    title: "Recorte",
    description: "Recorta la imagen después de capturar para ajustar el área.",
  },
  {
    icon: RotateCw,
    title: "Rotación de formas",
    description: "Rota formas y anotaciones libremente para mejor posicionamiento.",
  },
  {
    icon: Undo2,
    title: "Deshacer/Rehacer",
    description: "Historial completo de cambios en las anotaciones.",
  },
];

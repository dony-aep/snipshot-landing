# SnipShot Landing Page

<p align="center">
  <img src="snipshot-preview.gif" alt="SnipShot Preview" width="100%">
</p>

Landing page oficial de **SnipShot**, una aplicación de captura de pantalla moderna para Windows desarrollada con WinUI 3.

**Aplicación principal:** [github.com/dony-aep/SnipShot](https://github.com/dony-aep/SnipShot)

---

## Sobre SnipShot

SnipShot es una herramienta de captura de pantalla diseñada para integrarse perfectamente con el flujo de trabajo profesional en Windows. Combina una interfaz moderna con potentes funcionalidades de anotación.

### Características principales

| Característica | Descripción |
|----------------|-------------|
| **4 modos de captura** | Pantalla completa, región rectangular, forma libre y ventana específica |
| **Selector de color** | Menú flotante para capturar colores en formato HEX, RGB o HSL |
| **Formas y emojis** | Añade formas geométricas, flechas, líneas, estrellas y emojis |
| **Anotaciones completas** | Texto, bolígrafo, resaltador, relleno y más |
| **Extracción de texto (OCR)** | Captura el texto de cualquier imagen automáticamente |
| **Búsqueda de imagen** | Búsquedas inversas de imágenes con Google o Bing |

### Herramientas de anotación

- **Formas** — Rectángulos, círculos, líneas, flechas y estrellas
- **Bolígrafo** — Dibujo libre con colores personalizables
- **Resaltador** — Resalta áreas con transparencia ajustable
- **Texto** — Diferentes estilos, colores y resaltado
- **Emojis** — Inserta emojis directamente en tus capturas
- **Relleno** — Aplica relleno con color y opacidad a formas
- **Recorte** — Ajusta el área después de capturar
- **Rotación** — Rota formas y anotaciones libremente
- **Deshacer/Rehacer** — Historial completo de cambios

### Stack tecnológico de SnipShot

| Tecnología | Versión |
|------------|---------|
| .NET | 10.0 |
| Windows App SDK | 1.8 |
| WinUI | 3 |
| Win2D | 1.3.2 |
| C# | 12 |

### Requisitos del sistema

- Windows 11 versión 22H2 (build 22621) o superior
- Arquitecturas soportadas: **x64**, **ARM64**
- No compatible con Windows 10 ni versiones anteriores

---

## Sobre esta Landing Page

Esta landing page está construida con tecnologías web modernas para presentar SnipShot.

### Stack tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| [Next.js](https://nextjs.org/) | 16.1.1 | Framework React con App Router |
| [React](https://react.dev/) | 19.2.3 | Biblioteca de UI |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos utility-first |
| [shadcn/ui](https://ui.shadcn.com/) | - | Componentes UI (estilo new-york) |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animaciones |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.x | Tema claro/oscuro |
| [Lucide React](https://lucide.dev/) | - | Iconos |
| TypeScript | 5.x | Tipado estático |

---

## Desarrollo

### Requisitos previos

- Node.js 20.9 o superior
- pnpm, npm, yarn o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/dony-aep/snipshot-landing.git
cd snipshot-landing

# Instalar dependencias
npm install
```

### Comandos disponibles

```bash
# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm run start

# Linting
npm run lint
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

---

## Autor

**dony.**

- GitHub: [@dony-aep](https://github.com/dony-aep)

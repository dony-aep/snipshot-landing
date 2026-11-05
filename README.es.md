# SnipShot landing page

<p align="center">
  <img src="snipshot-preview.gif" alt="SnipShot Preview" width="100%">
</p>

<p align="center">
  <a href="README.md">English</a> · <strong>Español</strong>
</p>

---

Este repositorio es el sitio web de SnipShot, una app de capturas de pantalla para Windows
hecha con WinUI 3. El sitio está publicado en
[snipshotw3.vercel.app](https://snipshotw3.vercel.app/). El código de la app, sus versiones
y sus incidencias están en [dony-aep/SnipShot](https://github.com/dony-aep/SnipShot).

## La app

SnipShot es gratis y de código abierto, con licencia MIT. Necesita Windows 11 versión 22H2
(build 22621) o superior, en x64 o ARM64, y no funciona en Windows 10. Se instala por
sideload con el paquete MSIX de las
[releases de GitHub](https://github.com/dony-aep/SnipShot/releases), no desde la
Microsoft Store.

| Función | Qué hace |
|---------|----------|
| Modos de captura | Captura la pantalla completa, una región rectangular, un área a mano alzada o una sola ventana. El quinto modo es el selector de color. |
| Selector de color | Lee el color de cualquier píxel de la pantalla y devuelve el código en HEX, RGB o HSL. |
| Anotación | Dibuja rectángulos, círculos, líneas, flechas, estrellas, trazos a mano alzada, marcas de resaltador, texto y emojis sobre la captura. Las formas admiten color, grosor y relleno. |
| Edición | Recorta la imagen capturada, gira formas y anotaciones, y guarda un historial para deshacer y rehacer. |
| Extracción de texto (OCR) | Saca el texto de la captura para copiarlo sin volver a escribirlo. |
| Búsqueda de imagen | Busca la captura en Google Imágenes o en Bing desde el menú de la imagen. |
| Atajos y retraso | Ctrl+Shift+S y Print Screen inician una captura, y los dos se pueden cambiar. Una captura también puede esperar 3, 5 o 10 segundos. |

La app está escrita en C# 14 sobre .NET 10, con Windows App SDK 1.8, WinUI 3 para la
interfaz y Win2D 1.3.2 para el dibujo.

Los textos del sitio sobre la app están en `data/` y en `i18n/translations/`. Cuando la app
cambie, actualízalos ahí.

## Stack

| Tecnología | Versión | Para qué se usa |
|------------|---------|-----------------|
| [Next.js](https://nextjs.org/) | 16.4.5 | App Router y rutas prerrenderizadas |
| [React](https://react.dev/) | 19.3.1 | Interfaz, con el React Compiler activado |
| [Tailwind CSS](https://tailwindcss.com/) | v4 | Estilos. No hay archivo de configuración; el tema está en `app/globals.css`. |
| [shadcn/ui](https://ui.shadcn.com/) | - | Componentes con el estilo new-york, en `components/ui/` |
| [Framer Motion](https://www.framer.com/motion/) | 14.x | Animaciones |
| [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.x | Tema claro y oscuro |
| [Lucide React](https://lucide.dev/) | 1.x | Iconos de la interfaz |
| [Simple Icons](https://simpleicons.org/) | 16.x | Iconos de marca |
| TypeScript | 6.x | Tipos, en modo `strict` |

## Desarrollo

Necesitas Node.js 20.9 o superior. El repositorio incluye `package-lock.json`, así que usa
npm.

```bash
git clone https://github.com/dony-aep/snipshot-landing.git
cd snipshot-landing
npm ci
```

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Arranca el servidor de desarrollo con Turbopack en [http://localhost:3000](http://localhost:3000). |
| `npm run build` | Genera el build de producción. Comprueba los tipos y prerrenderiza todas las rutas. El repositorio no tiene tests, así que es la comprobación que hay que pasar antes de hacer push. |
| `npm run lint` | Ejecuta ESLint con `eslint-config-next`. |
| `npm start` | Sirve el build de producción. |
| `npm run clean` | Borra `.next`. Usa `rd /s /q`, así que solo funciona en Windows. |

## Estructura del proyecto

```
app/            Rutas. El alias @/* apunta a la raíz del repositorio.
components/
  sections/     Secciones de la página de inicio
  layout/       Cabecera y pie de página
  ui/           Componentes de shadcn/ui
  icons/        Envoltorio de simple-icons
data/           Contenido de las páginas, una función getX(locale) por sección
i18n/           Contexto de idioma y archivos de traducción
config/site.ts  Metadatos del sitio y elementos de navegación
hooks/, lib/, types/
```

Cada subruta tiene dos archivos. `page.tsx` es un componente de servidor y exporta
`metadata`. `content.tsx` empieza con `"use client"` y renderiza la página. Esta división
mantiene los metadatos en el servidor mientras la página lee el idioma en el cliente.

## Traducciones

El sitio tiene dos idiomas, español (el predeterminado) e inglés. Los textos de la interfaz
están en `i18n/translations/es.ts` y `en.ts`, y los componentes los leen con `useLocale()`.
El tipo `Translations` sale de `es.ts`. Si añades una clave a un archivo y no al otro,
`npm run build` falla con un error de tipos. El idioma elegido se guarda en `localStorage`
con la clave `locale`.

## Despliegue

El sitio está en Vercel, en [snipshotw3.vercel.app](https://snipshotw3.vercel.app/), y
`app/layout.tsx` carga `@vercel/analytics`. El repositorio no tiene `vercel.json`. Las
cabeceras de seguridad que se aplican a todas las rutas están en `next.config.ts`.

## Licencia

[MIT](LICENSE).

## Autor

dony. ([@dony-aep](https://github.com/dony-aep))

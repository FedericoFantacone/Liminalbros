# LIMINAL CODE — Software Development Studio

Landing page institucional para **LIMINAL CODE**, un estudio de desarrollo de software fundado por dos profesionales. Diseño editorial oscuro, acento lima eléctrico, animaciones sutiles y una sección de proyectos pensada como portfolio comercial.

## Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS 3**
- **Lucide Icons**
- Tipografías locales: Space Grotesk, Instrument Serif e IBM Plex Mono

## Empezar

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

### Scripts

```bash
npm run dev      # entorno de desarrollo
npm run build    # build de producción en /dist
npm run preview  # previsualizar el build
npm run lint     # ESLint
```

## Estructura

```text
public/
  projects/              # portadas de los proyectos (SVG, JPG y video MP4)
  favicon.svg
  og-logo.svg           # imagen Open Graph cuadrada (1024x1024)
  robots.txt
  sitemap.xml
src/
  components/
    Navbar.tsx           # navegación sticky + menú mobile
    Hero.tsx             # hero y composición visual
    Services.tsx         # grilla de servicios
    Projects.tsx         # galería de proyectos
    About.tsx            # estudio y perfiles
    Contact.tsx          # formulario + canales de contacto
    Footer.tsx
    Logo.tsx
    Reveal.tsx           # animaciones al hacer scroll
    SectionHeading.tsx
  data/
    site.ts              # TODO el contenido editable
  App.tsx
  index.css
  main.tsx
```

## Configurar el sitio

Casi todo el contenido está centralizado en **`src/data/site.ts`**.

### 1. Datos de contacto

Reemplazar los valores de `site`:

```ts
export const site = {
  emails: ["tino_boschiazzo@hotmail.com", "federicofantacone1@gmail.com"],
  linkedin: "https://www.linkedin.com/in/federico-fantacone/",
  location: "Buenos Aires, Argentina",
  formEndpoint: "",
};
```

- `emails` se muestran en el footer y la sección de contacto; el primero se usa como destino del formulario y de los enlaces `mailto`.
- `linkedin` debe ser la URL pública real del estudio.

### 2. Proyectos

La sección está preparada para agregar, editar o eliminar proyectos sin tocar el componente visual.

El contenido de cada proyecto vive en `src/i18n/es.ts`, `en.ts` y `de.ts` (clave `projects.items`), para que nombre, descripción, categoría y tecnologías se traduzcan en los tres idiomas. El tipo está en `src/i18n/types.ts`.

```ts
{
  id: "nuevo-proyecto",
  slug: "nuevo-proyecto",
  name: "Nombre del proyecto",
  description: "Descripción breve.",
  category: "Web",
  year: "2026",
  technologies: ["Next.js", "TypeScript"],
  image: "/projects/mi-proyecto.jpg",
  video: "/projects/mi-proyecto.mp4", // opcional: portada en video
  imageAlt: "Descripción de la captura",
  href: "https://url-del-proyecto.com",
  external: true, // opcional: abre el enlace en otra pestaña
  kind: "real", // opcional: "real" para proyectos de clientes
  featured: true, // opcional: lo muestra como proyecto principal
  details: { overview: "...", system: "...", features: ["..."] },
}
```

Para agregar uno nuevo:

1. Colocar la portada (y el video, si hay) en `public/projects/`.
2. Agregar el objeto en los tres archivos de `src/i18n/`.
3. Actualizar `href` con la URL real del proyecto.

> **Importante:** `Wiesing` es un proyecto real para la Gemeinde Wiesing (Tirol, Austria) y enlaza a su demo publicada. `Northline`, `Mesa` y `Atlas` son **conceptos de demostración**: sus imágenes son mockups SVG creados para el sitio y sus enlaces apuntan a demos internas. La interfaz distingue ambos casos con la etiqueta `Proyecto de cliente` / `Demo interactiva`.

### 3. Perfiles del estudio

Los perfiles están en `profiles`. Los nombres actuales (`Fundador 01` y `Fundador 02`) son placeholders para no inventar identidades.

```ts
{
  id: "01",
  name: "Nombre real",
  role: "Ingeniero · Máster",
  description: "Descripción profesional.",
  specialties: ["Arquitectura", "Estrategia"],
  image: "/team/fundador-01.jpg", // opcional
}
```

Si se define `image`, la tarjeta muestra la fotografía. Si no, usa una composición gráfica abstracta con el número de perfil.

### 4. Formulario de contacto

El formulario usa **Netlify Forms** (sin backend propio). Los envíos quedan guardados en el panel de Netlify y se reenvían por email a los destinatarios configurados.

1. Valida nombre, email, tipo de proyecto y mensaje.
2. Envía un `POST` a `/` con `form-name=contacto` (formulario estático declarado en `index.html`).
3. Muestra un estado de éxito o, si falla, un email alternativo.

Requisitos y límites:

- Netlify debe detectar el formulario en un **deploy desde Git** (los deploys por CLI no procesan formularios).
- Plan gratuito: 100 envíos por mes.
- Los avisos por email se configuran en **Netlify → Forms → contacto → Notifications**. Hay que crear una notificación por cada destinatario.
- Incluye un honeypot (`bot-field`) para filtrar spam.

Para usar un servicio externo (Formspree, Basin o un endpoint propio), completar `formEndpoint`:

```ts
formEndpoint: "https://formspree.io/f/XXXXXXXX",
```

En ese caso el formulario hace `POST` con JSON y muestra los estados de éxito/error.

### 5. SEO y dominio

Antes de publicar, actualizar el dominio en:

- `index.html`: canonical, Open Graph, Twitter Card y JSON-LD.
- `public/robots.txt`: URL del sitemap.
- `public/sitemap.xml`: `<loc>`.

El sitio incluye title, description, Open Graph, datos estructurados `ProfessionalService` y favicon propio.

## Diseño y decisiones técnicas

- **Identidad:** fondo casi negro, tipografía geométrica, acento lima `#d7ff4f` y serif itálica para los énfasis. La marca aparece con un sistema de brackets + B y un orbe central en el hero.
- **Animaciones:** entrada al hacer scroll con `IntersectionObserver`, hover con spotlight suave, marquee de capacidades y transiciones respetando `prefers-reduced-motion`.
- **Responsive:** navbar con menú overlay en mobile, hero y visual adaptados, proyectos en una columna, formulario apilado y footer reordenado.
- **Accesibilidad:** skip link, foco visible, labels, mensajes de error, `aria-live`, contraste WCAG AA, navegación por teclado y cierre del menú con `Escape`.
- **Performance:** sin librerías de animación ni UI pesadas; fuentes self-hosted; imágenes SVG locales; build estático.

## Calidad verificada

- `npm run build` ✅
- `npm run lint` ✅
- Lighthouse (build local): **Accessibility 100**, **Best Practices 100**, **SEO 100**
- axe-core WCAG 2.1 A/AA: **0 violaciones** en desktop y mobile

## Deploy

El proyecto genera un sitio estático en `dist/`. Compatible con Vercel, Netlify o cualquier hosting estático.

```bash
npm run build
```

Configurar el dominio final y revisar los datos de contacto antes de publicar.

---

**LIMINAL CODE — Building digital solutions.**

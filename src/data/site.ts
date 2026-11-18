export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "layout" | "building" | "workflow" | "plug" | "compass";
  tags: string[];
};

export type Project = {
  id: string;
  name: string;
  description: string;
  category: string;
  year: string;
  technologies: string[];
  image: string;
  /** Optional looping video used as the cover. Falls back to `image`. */
  video?: string;
  imageAlt: string;
  href: string;
  /** External project links open in a new tab. */
  external?: boolean;
  /** `real` marks client work; defaults to a concept demo. */
  kind?: "demo" | "real";
  featured?: boolean;
};

export type Profile = {
  id: string;
  name: string;
  role: string;
  description: string;
  specialties: string[];
  image?: string;
};

export const site = {
  name: "LIMINAL CODE",
  url: "https://liminalcode.pages.dev",
  tagline: "Building digital solutions.",
  emails: ["tino_boschiazzo@hotmail.com", "federicofantacone1@gmail.com"],
  linkedin: "https://www.linkedin.com/in/federico-fantacone/",
  location: "Austria · Argentina",
  availability: "Disponibles para nuevos proyectos",
  /**
   * Endpoint del formulario (Cloudflare Pages Function en /api/contact).
   * Si esta vacio, se usa el fallback de email del cliente.
   */
  formEndpoint: "/api/contact",
};

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export const services: Service[] = [
  {
    id: "01",
    title: "Desarrollo de software a medida",
    description:
      "Diseñamos y construimos soluciones que se adaptan a tu operación, no al revés. Arquitectura sólida, código mantenible y foco en resultados.",
    icon: "code",
    tags: ["Producto", "Arquitectura"],
  },
  {
    id: "02",
    title: "Desarrollo web y landing pages",
    description:
      "Sitios rápidos, accesibles y pensados para convertir. Desde una presencia institucional hasta una experiencia digital completa.",
    icon: "layout",
    tags: ["Web", "Conversión"],
  },
  {
    id: "03",
    title: "Aplicaciones empresariales",
    description:
      "Herramientas internas y plataformas que ordenan procesos, conectan equipos y dan visibilidad real a tu negocio.",
    icon: "building",
    tags: ["Plataformas", "Escalabilidad"],
  },
  {
    id: "04",
    title: "Sistemas de gestión y automatización",
    description:
      "Digitalizamos tareas repetitivas con flujos claros, integraciones y automatizaciones que liberan tiempo para lo importante.",
    icon: "workflow",
    tags: ["Procesos", "Automatización"],
  },
  {
    id: "05",
    title: "Integraciones y APIs",
    description:
      "Conectamos tus sistemas, servicios y datos con integraciones confiables, documentadas y preparadas para crecer.",
    icon: "plug",
    tags: ["APIs", "Datos"],
  },
  {
    id: "06",
    title: "Consultoría tecnológica",
    description:
      "Acompañamos decisiones técnicas con criterio: validamos ideas, definimos alcances y trazamos un camino realista hacia el producto.",
    icon: "compass",
    tags: ["Estrategia", "Producto"],
  },
];

/**
 * PLACEHOLDERS: reemplazar por proyectos reales antes de publicar.
 * Cada proyecto abre su propia URL externa en una pestaña nueva.
 */
export const projects: Project[] = [
  {
    id: "wiesing",
    name: "Wiesing",
    description:
      "Rediseño del sitio web de la Gemeinde Wiesing (Tirol, Austria): 61 páginas estáticas, búsqueda propia y accesibilidad integrada.",
    category: "Sitio institucional",
    year: "2026",
    technologies: ["HTML5", "CSS3", "JavaScript", "Sin dependencias"],
    image: "/projects/wiesing-cover.jpg",
    video: "/projects/wiesing-cover.mp4",
    imageAlt: "Portada del sitio web de la Gemeinde Wiesing con el paisaje del Tirol",
    href: "https://wiesing-tirol.pages.dev/",
    external: true,
    kind: "real",
    featured: true,
  },
  {
    id: "northline",
    name: "Northline",
    description:
      "Plataforma de analítica para equipos que necesitan convertir datos dispersos en decisiones claras. Un dashboard modular, veloz y fácil de leer.",
    category: "SaaS · Data",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/northline.svg",
    imageAlt: "Vista previa conceptual de Northline, dashboard de analítica",
    href: "/demo/northline",
  },
  {
    id: "mesa",
    name: "Mesa",
    description:
      "E-commerce editorial para un restaurante de autor: reservas, menú estacional y una experiencia de compra simple.",
    category: "E-commerce",
    year: "2026",
    technologies: ["React", "Tailwind CSS", "Stripe"],
    image: "/projects/mesa.svg",
    imageAlt: "Vista previa conceptual de Mesa, sitio de restaurante",
    href: "/demo/mesa",
  },
  {
    id: "atlas",
    name: "Atlas",
    description:
      "Sistema de gestión operativa que centraliza proyectos, equipos y documentación en una interfaz clara.",
    category: "Aplicación web",
    year: "2025",
    technologies: ["React", "Node.js", "Prisma"],
    image: "/projects/atlas.svg",
    imageAlt: "Vista previa conceptual de Atlas, panel de gestión operativa",
    href: "/demo/atlas",
  },
];

export const profiles: Profile[] = [
  {
    id: "01",
    // Reemplazar por el nombre real del fundador.
    name: "Fundador 01",
    role: "Ingeniero · Máster",
    description:
      "Estrategia, arquitectura y dirección técnica. Traduce objetivos de negocio en sistemas claros, escalables y bien construidos.",
    specialties: ["Arquitectura", "Estrategia", "Ingeniería"],
  },
  {
    id: "02",
    // Reemplazar por el nombre real del fundador.
    name: "Fundador 02",
    role: "Software Developer SSR",
    description:
      "Desarrollo backend, frontend, APIs, bases de datos y tecnologías cloud. Obsesión por el detalle y por el software que se siente simple.",
    specialties: ["Backend", "Frontend", "Cloud"],
  },
];

export const projectTypes = [
  "Desarrollo web / landing page",
  "Software a medida",
  "Aplicación empresarial",
  "Sistema de gestión",
  "E-commerce",
  "Integración / API",
  "Consultoría tecnológica",
  "Otro",
];

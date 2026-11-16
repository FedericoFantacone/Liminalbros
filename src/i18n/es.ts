import type { Translations } from "./types";

export const es: Translations = {
  meta: {
    title: "LIMINAL BROS — Estudio de software y productos digitales",
    description:
      "LIMINAL BROS es un estudio de software que diseña y desarrolla productos digitales, aplicaciones web y sistemas a medida para negocios que quieren crecer.",
  },
  ui: {
    skipToContent: "Saltar al contenido",
    languageLabel: "Seleccionar idioma",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    menuLabel: "Navegación principal",
    externalLink: "Enlace externo",
    placeholder: "Placeholder",
    contactCta: "Hablemos de tu proyecto",
    nav: [
      { id: "inicio", label: "Inicio" },
      { id: "servicios", label: "Servicios" },
      { id: "proyectos", label: "Proyectos" },
      { id: "nosotros", label: "Nosotros" },
      { id: "contacto", label: "Contacto" },
    ],
  },
  hero: {
    eyebrow: "Estudio independiente de software",
    title: "Transformamos ideas en soluciones digitales.",
    titleLines: ["Transformamos", "ideas en", "soluciones", "digitales."],
    subtitle:
      "Desarrollamos software, aplicaciones y experiencias digitales diseñadas para impulsar negocios y resolver problemas reales.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Contactanos",
    meta: {
      strategy: "Estrategia",
      design: "Diseño",
      engineering: "Ingeniería",
    },
  },
  services: {
    label: "Capacidades",
    title: "Soluciones digitales para llevar tu negocio más lejos.",
    titleHighlight: "más lejos.",
    description:
      "Combinamos estrategia, diseño y desarrollo para construir herramientas que resuelven problemas concretos y sostienen el crecimiento.",
    cta: "Contanos tu idea",
    items: [
      {
        id: "01",
        title: "Desarrollo de software a medida",
        description:
          "Diseñamos y construimos soluciones que se adaptan a tu operación, no al revés. Arquitectura sólida, código mantenible y foco en resultados.",
        tags: ["Producto", "Arquitectura"],
      },
      {
        id: "02",
        title: "Desarrollo web y landing pages",
        description:
          "Sitios rápidos, accesibles y pensados para convertir. Desde una presencia institucional hasta una experiencia digital completa.",
        tags: ["Web", "Conversión"],
      },
      {
        id: "03",
        title: "Aplicaciones empresariales",
        description:
          "Herramientas internas y plataformas que ordenan procesos, conectan equipos y dan visibilidad real a tu negocio.",
        tags: ["Plataformas", "Escalabilidad"],
      },
      {
        id: "04",
        title: "Sistemas de gestión y automatización",
        description:
          "Digitalizamos tareas repetitivas con flujos claros, integraciones y automatizaciones que liberan tiempo para lo importante.",
        tags: ["Procesos", "Automatización"],
      },
      {
        id: "05",
        title: "Integraciones y APIs",
        description:
          "Conectamos tus sistemas, servicios y datos con integraciones confiables, documentadas y preparadas para crecer.",
        tags: ["APIs", "Datos"],
      },
      {
        id: "06",
        title: "Consultoría tecnológica",
        description:
          "Acompañamos decisiones técnicas con criterio: validamos ideas, definimos alcances y trazamos un camino realista hacia el producto.",
        tags: ["Estrategia", "Producto"],
      },
    ],
  },
  projects: {
    label: "Trabajo seleccionado",
    title: "Proyectos que hablan por nosotros.",
    titleHighlight: "por nosotros.",
    subtitle: "Explorá algunos de nuestros desarrollos y soluciones digitales.",
    disclaimer:
      "Los proyectos de esta selección son conceptos de demostración y se identifican como placeholders. Próximamente se reemplazarán por casos reales.",
    count: "03 / Demo",
    external: "Enlace externo",
    view: "Ver proyecto",
    nextTitle: "Tu proyecto podría ser el próximo.",
    nextCta: "Empezar un proyecto",
    items: [
      {
        id: "northline",
        slug: "northline",
        name: "Northline",
        description:
          "Plataforma de analítica para equipos que necesitan convertir datos dispersos en decisiones claras. Un dashboard modular, veloz y fácil de leer.",
        category: "SaaS · Data",
        year: "2026",
        technologies: ["Next.js", "TypeScript", "PostgreSQL"],
        image: "/projects/northline.svg",
        imageAlt: "Vista previa conceptual de Northline, dashboard de analítica",
        href: "https://example.com",
        featured: true,
        details: {
          overview:
            "Northline organiza métricas, eventos y fuentes de datos en una interfaz clara para equipos que toman decisiones todos los días.",
          system:
            "Arquitectura modular con ingestión de datos, API tipada, capa de visualización y permisos por equipo. Pensada para escalar sin perder legibilidad.",
          features: [
            "Dashboard configurable por equipo",
            "Métricas en tiempo real y comparativas",
            "Exportación de reportes",
            "Integración con fuentes SQL y APIs externas",
          ],
        },
      },
      {
        id: "mesa",
        slug: "mesa",
        name: "Mesa",
        description:
          "E-commerce editorial para un restaurante de autor: reservas, menú estacional y una experiencia de compra simple.",
        category: "E-commerce",
        year: "2026",
        technologies: ["React", "Tailwind CSS", "Stripe"],
        image: "/projects/mesa.svg",
        imageAlt: "Vista previa conceptual de Mesa, sitio de restaurante",
        href: "https://example.com",
        details: {
          overview:
            "Mesa combina reservas, menú y compra en una experiencia editorial cálida, pensada para restaurantes con identidad fuerte.",
          system:
            "Frontend React con catálogo de productos, flujo de reserva, integración de pagos y panel simple para la cocina.",
          features: [
            "Reservas online",
            "Menú estacional editable",
            "Checkout con Stripe",
            "Panel de pedidos",
          ],
        },
      },
      {
        id: "atlas",
        slug: "atlas",
        name: "Atlas",
        description:
          "Sistema de gestión operativa que centraliza proyectos, equipos y documentación en una interfaz clara.",
        category: "Aplicación web",
        year: "2025",
        technologies: ["React", "Node.js", "Prisma"],
        image: "/projects/atlas.svg",
        imageAlt: "Vista previa conceptual de Atlas, panel de gestión operativa",
        href: "https://example.com",
        details: {
          overview:
            "Atlas da visibilidad a proyectos, tareas y equipos en una sola herramienta, reduciendo el trabajo disperso en múltiples apps.",
          system:
            "Backend Node con Prisma, frontend React y modelo de permisos por equipo. Incluye tablero Kanban, actividad y métricas de velocidad.",
          features: [
            "Tablero Kanban por sprint",
            "Gestión de equipos",
            "Actividad y auditoría",
            "Métricas de velocidad",
          ],
        },
      },
    ],
  },
  about: {
    label: "El estudio",
    title: "Dos profesionales. Una misma visión.",
    titleHighlight: "Una misma visión.",
    description:
      "Somos un equipo de profesionales apasionados por la tecnología y el desarrollo de software. Combinamos experiencia académica, conocimientos técnicos y una visión orientada a construir soluciones digitales de calidad.",
    approach: "Trabajamos directo con vos: pensamos, diseñamos y construimos el producto sin intermediarios.",
    approachItems: [
      { label: "Equipo", value: "Directo y senior" },
      { label: "Enfoque", value: "Producto end-to-end" },
      { label: "Compromiso", value: "Calidad técnica" },
    ],
    contactCta: "Hablemos de tu proyecto",
    profilesLabel: "Perfiles",
    items: [
      {
        id: "01",
        name: "José Valentino Boschiazzo",
        role: "Co-Fundador & CEO",
        description:
          "Ingeniero electrónico con experiencia en automatización industrial, validación en campo y desarrollo de software. Ha trabajado en Europa inspeccionando motores de combustión, diseñando herramientas internas en Python y programando PLCs y microcontroladores. Combina mecánica, electrónica y software para construir soluciones técnicas robustas.",
        specialties: ["Automatización", "Embedded", "Python", "E-Plan", "TIA Portal"],
        image: "/team/jose.png",
        linkedin: "https://www.linkedin.com/in/jvbosch/",
      },
      {
        id: "02",
        name: "Federico Fantacone",
        role: "Co-Fundador & CEO",
        description:
          "Desarrollador Full Stack Semi-Senior especializado en .NET, C# y Microsoft Azure. Trabaja en Accenture diseñando y manteniendo aplicaciones empresariales, APIs, bases de datos e infraestructura cloud, con foco en arquitectura limpia y soluciones escalables.",
        specialties: ["Backend", ".NET", "Azure", "Arquitectura", "APIs"],
        image: "/team/federico.jpg",
        linkedin: "https://www.linkedin.com/in/federico-fantacone/",
      },
    ],
    steps: [
      { number: "01", title: "Entendemos", copy: "El problema antes de la solución." },
      { number: "02", title: "Construimos", copy: "Con foco en claridad y calidad." },
      { number: "03", title: "Evolucionamos", copy: "Iteramos junto a tu negocio." },
    ],
  },
  contact: {
    label: "Contacto",
    title: "¿Tenés una idea? Hagámosla realidad.",
    subtitle: "Contanos qué necesitás y encontremos juntos la mejor solución tecnológica.",
    availability: "Disponibles para nuevos proyectos",
    channels: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      linkedinValue: "Federico Fantacone",
    },
    responseTime: "Austria · GMT+1 / Argentina · GMT-3 · Respuesta en 1–2 días hábiles",
    briefTitle: "Brief inicial",
    briefSubtitle: "Contanos sobre tu proyecto",
    briefIndex: "/ 01",
    fields: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "vos@empresa.com",
      company: "Empresa",
      companyOptional: "(opcional)",
      companyPlaceholder: "Nombre de tu empresa",
      projectType: "Tipo de proyecto",
      projectTypePlaceholder: "Seleccioná una opción",
      message: "Mensaje",
      messagePlaceholder: "Contanos qué querés construir, qué problema querés resolver o qué idea tenés en mente.",
    },
    projectTypes: [
      "Desarrollo web / landing page",
      "Software a medida",
      "Aplicación empresarial",
      "Sistema de gestión",
      "E-commerce",
      "Integración / API",
      "Consultoría tecnológica",
      "Otro",
    ],
    privacy: "Tus datos son solo para responder a tu consulta.",
    errors: {
      name: "Contanos tu nombre (mínimo 2 caracteres).",
      email: "Ingresá un email válido.",
      projectType: "Seleccioná el tipo de proyecto.",
      message: "Contanos un poco más (mínimo 10 caracteres).",
    },
    submit: "Enviar mensaje",
    sending: "Enviando...",
    readyTitle: "Tu mensaje está listo.",
    readyBody: "Abrimos tu cliente de correo para que puedas enviarlo. Si no se abrió,",
    readyLink: "usá este enlace",
    sentTitle: "Mensaje enviado. Gracias por escribirnos.",
    sentBody: "Te vamos a responder a la brevedad.",
    error: "No pudimos enviar el formulario. Escribinos directamente a",
  },
  footer: {
    description:
      "Estudio independiente de software. Diseñamos y construimos productos digitales con criterio, detalle y una mirada de largo plazo.",
    navLabel: "Navegación",
    contactLabel: "Contacto",
    availability: "Disponibles para nuevos proyectos",
    copyright: "Todos los derechos reservados.",
    final: "LIMINAL BROS — Building digital solutions.",
    backToTop: "Volver arriba",
    cta: "¿Construimos algo?",
  },
  projectDetail: {
    back: "Volver a proyectos",
    overview: "Resumen",
    system: "Sistema planteado",
    features: "Funcionalidades clave",
    technologies: "Tecnologías",
    category: "Categoría",
    year: "Año",
    external: "Abrir proyecto externo",
    cta: "Empezar un proyecto",
    notFound: "Proyecto no encontrado",
    notFoundBody: "El proyecto que buscás no existe o todavía no está publicado.",
  },
};

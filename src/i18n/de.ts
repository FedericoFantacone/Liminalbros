import type { Translations } from "./types";

export const de: Translations = {
  meta: {
    title: "LIMINAL BROS — Software-Studio und digitale Produkte",
    description:
      "LIMINAL BROS ist ein Software-Studio, das digitale Produkte, Webanwendungen und individuelle Systeme für Unternehmen entwickelt, die wachsen wollen.",
  },
  ui: {
    skipToContent: "Zum Inhalt springen",
    languageLabel: "Sprache auswählen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    menuLabel: "Hauptnavigation",
    externalLink: "Externer Link",
    placeholder: "Platzhalter",
    contactCta: "Sprechen wir über Ihr Projekt",
    nav: [
      { id: "inicio", label: "Start" },
      { id: "servicios", label: "Leistungen" },
      { id: "proyectos", label: "Projekte" },
      { id: "nosotros", label: "Über uns" },
      { id: "contacto", label: "Kontakt" },
    ],
  },
  hero: {
    eyebrow: "Unabhängiges Software-Studio",
    title: "Wir verwandeln Ideen in digitale Lösungen.",
    titleLines: ["Wir verwandeln", "Ideen in", "digitale", "Lösungen."],
    subtitle:
      "Wir entwickeln Software, Anwendungen und digitale Erlebnisse, die Unternehmen stärken und echte Probleme lösen.",
    primaryCta: "Projekte ansehen",
    secondaryCta: "Kontakt aufnehmen",
    meta: {
      strategy: "Strategie",
      design: "Design",
      engineering: "Engineering",
    },
  },
  services: {
    label: "Leistungen",
    title: "Digitale Lösungen, die Ihr Geschäft weiterbringen.",
    titleHighlight: "weiterbringen.",
    description:
      "Wir verbinden Strategie, Design und Entwicklung, um Werkzeuge zu bauen, die konkrete Probleme lösen und Wachstum unterstützen.",
    cta: "Erzählen Sie uns Ihre Idee",
    items: [
      {
        id: "01",
        title: "Individuelle Softwareentwicklung",
        description:
          "Wir entwerfen und bauen Lösungen, die sich an Ihre Abläufe anpassen – nicht umgekehrt. Solide Architektur, wartbarer Code und Fokus auf Ergebnisse.",
        tags: ["Produkt", "Architektur"],
      },
      {
        id: "02",
        title: "Webentwicklung und Landingpages",
        description:
          "Schnelle, barrierefreie Websites, die konvertieren. Von der Unternehmenspräsenz bis zum kompletten digitalen Erlebnis.",
        tags: ["Web", "Conversion"],
      },
      {
        id: "03",
        title: "Unternehmensanwendungen",
        description:
          "Interne Werkzeuge und Plattformen, die Prozesse ordnen, Teams verbinden und Ihrem Geschäft echte Sichtbarkeit geben.",
        tags: ["Plattformen", "Skalierbarkeit"],
      },
      {
        id: "04",
        title: "Management-Systeme und Automatisierung",
        description:
          "Wir digitalisieren repetitive Aufgaben mit klaren Workflows, Integrationen und Automatisierungen, die Zeit für das Wesentliche freigeben.",
        tags: ["Prozesse", "Automatisierung"],
      },
      {
        id: "05",
        title: "Integrationen und APIs",
        description:
          "Wir verbinden Ihre Systeme, Dienste und Daten mit zuverlässigen, dokumentierten Integrationen, die mitwachsen.",
        tags: ["APIs", "Daten"],
      },
      {
        id: "06",
        title: "Technologieberatung",
        description:
          "Wir begleiten technische Entscheidungen mit Urteilskraft: Ideen validieren, Umfang definieren und einen realistischen Weg zum Produkt zeichnen.",
        tags: ["Strategie", "Produkt"],
      },
    ],
  },
  projects: {
    label: "Ausgewählte Arbeit",
    title: "Projekte, die für uns sprechen.",
    titleHighlight: "für uns sprechen.",
    subtitle: "Entdecken Sie einige unserer Entwicklungen und digitalen Lösungen.",
    disclaimer:
      "Die Projekte in dieser Auswahl sind Demonstrationskonzepte und als Platzhalter gekennzeichnet. Sie werden bald durch echte Fälle ersetzt.",
    count: "03 / Demo",
    external: "Externer Link",
    view: "Projekt ansehen",
    nextTitle: "Ihr Projekt könnte das nächste sein.",
    nextCta: "Projekt starten",
    items: [
      {
        id: "northline",
        slug: "northline",
        name: "Northline",
        description:
          "Analyseplattform für Teams, die verstreute Daten in klare Entscheidungen verwandeln müssen. Ein modulares, schnelles und leicht lesbares Dashboard.",
        category: "SaaS · Daten",
        year: "2026",
        technologies: ["Next.js", "TypeScript", "PostgreSQL"],
        image: "/projects/northline.svg",
        imageAlt: "Konzeptionelle Vorschau von Northline, einem Analyse-Dashboard",
        href: "https://example.com",
        featured: true,
        details: {
          overview:
            "Northline ordnet Metriken, Ereignisse und Datenquellen in einer klaren Oberfläche für Teams, die täglich Entscheidungen treffen.",
          system:
            "Modulare Architektur mit Daten-Ingestion, typisierter API, Visualisierungsschicht und Team-Berechtigungen. Für Skalierung ohne Lesbarkeitsverlust konzipiert.",
          features: [
            "Konfigurierbares Dashboard pro Team",
            "Echtzeit-Metriken und Vergleiche",
            "Report-Export",
            "Integration mit SQL-Quellen und externen APIs",
          ],
        },
      },
      {
        id: "mesa",
        slug: "mesa",
        name: "Mesa",
        description:
          "Editorialer E-Commerce für ein Autor-Restaurant: Reservierungen, saisonale Karte und ein einfaches Kauferlebnis.",
        category: "E-Commerce",
        year: "2026",
        technologies: ["React", "Tailwind CSS", "Stripe"],
        image: "/projects/mesa.svg",
        imageAlt: "Konzeptionelle Vorschau von Mesa, einer Restaurant-Website",
        href: "https://example.com",
        details: {
          overview:
            "Mesa verbindet Reservierungen, Karte und Kauf in einem warmen, editorialen Erlebnis für Restaurants mit starker Identität.",
          system:
            "React-Frontend mit Produktkatalog, Reservierungsflow, Zahlungsintegration und einfachem Küchenpanel.",
          features: [
            "Online-Reservierungen",
            "Bearbeitbare saisonale Karte",
            "Stripe-Checkout",
            "Bestellpanel",
          ],
        },
      },
      {
        id: "atlas",
        slug: "atlas",
        name: "Atlas",
        description:
          "Betriebsmanagementsystem, das Projekte, Teams und Dokumentation in einer klaren Oberfläche zentralisiert.",
        category: "Webanwendung",
        year: "2025",
        technologies: ["React", "Node.js", "Prisma"],
        image: "/projects/atlas.svg",
        imageAlt: "Konzeptionelle Vorschau von Atlas, einem Betriebsmanagement-Panel",
        href: "https://example.com",
        details: {
          overview:
            "Atlas gibt Projekten, Aufgaben und Teams in einem Werkzeug Sichtbarkeit und reduziert Arbeit, die sonst über mehrere Apps verstreut ist.",
          system:
            "Node-Backend mit Prisma, React-Frontend und teambasierten Berechtigungen. Inklusive Kanban-Board, Aktivität und Velocity-Metriken.",
          features: [
            "Kanban-Board pro Sprint",
            "Team-Management",
            "Aktivität und Audit-Trail",
            "Velocity-Metriken",
          ],
        },
      },
    ],
  },
  about: {
    label: "Das Studio",
    title: "Zwei Fachleute. Eine gemeinsame Vision.",
    titleHighlight: "Eine gemeinsame Vision.",
    description:
      "Wir sind ein Team von Fachleuten mit Leidenschaft für Technologie und Softwareentwicklung. Wir verbinden akademische Erfahrung, technisches Wissen und eine Vision, die auf qualitativ hochwertige digitale Lösungen ausgerichtet ist.",
    approach: "Wir arbeiten direkt mit Ihnen: Wir denken, gestalten und bauen das Produkt ohne Zwischenhändler.",
    approachItems: [
      { label: "Team", value: "Direkt und senior" },
      { label: "Fokus", value: "End-to-End-Produkt" },
      { label: "Engagement", value: "Technische Qualität" },
    ],
    contactCta: "Sprechen wir über Ihr Projekt",
    profilesLabel: "Profile",
    items: [
      {
        id: "01",
        name: "José Valentino Boschiazzo",
        role: "Co-Founder & CEO",
        description:
          "Elektronikingenieur mit Erfahrung in industrieller Automatisierung, Feldvalidierung und Softwareentwicklung. Er hat in Europa Verbrennungsmotoren inspiziert, interne Python-Werkzeuge entwickelt und PLCs sowie Mikrocontroller programmiert. Er verbindet Mechanik, Elektronik und Software zu robusten technischen Lösungen.",
        specialties: ["Automatisierung", "Embedded", "Python", "E-Plan", "TIA Portal"],
        image: "/team/jose-dark.jpg",
        linkedin: "https://www.linkedin.com/in/jvbosch/",
      },
      {
        id: "02",
        name: "Federico Fantacone",
        role: "Co-Founder & CEO",
        description:
          "Semi-Senior Full Stack Developer mit Schwerpunkt auf .NET, C# und Microsoft Azure. Er arbeitet bei Accenture an der Entwicklung und Pflege von Unternehmensanwendungen, APIs, Datenbanken und Cloud-Infrastruktur mit Fokus auf saubere Architektur und skalierbare Lösungen.",
        specialties: ["Backend", ".NET", "Azure", "Architektur", "APIs"],
        image: "/team/federico.jpg",
        linkedin: "https://www.linkedin.com/in/federico-fantacone/",
      },
    ],
    steps: [
      { number: "01", title: "Verstehen", copy: "Das Problem vor der Lösung." },
      { number: "02", title: "Bauen", copy: "Mit Klarheit und Qualität." },
      { number: "03", title: "Weiterentwickeln", copy: "Gemeinsam mit Ihrem Geschäft." },
    ],
  },
  contact: {
    label: "Kontakt",
    title: "Haben Sie eine Idee? Lassen Sie sie Wirklichkeit werden.",
    subtitle: "Erzählen Sie uns, was Sie brauchen, und finden wir gemeinsam die beste technologische Lösung.",
    availability: "Verfügbar für neue Projekte",
    channels: {
      email: "E-Mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      linkedinValue: "Federico Fantacone",
    },
    responseTime: "Österreich · GMT+1 / Argentinien · GMT-3 · Antwort innerhalb von 1–2 Werktagen",
    briefTitle: "Erstes Briefing",
    briefSubtitle: "Erzählen Sie uns von Ihrem Projekt",
    briefIndex: "/ 01",
    fields: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "sie@unternehmen.de",
      company: "Unternehmen",
      companyOptional: "(optional)",
      companyPlaceholder: "Name Ihres Unternehmens",
      projectType: "Projekttyp",
      projectTypePlaceholder: "Option auswählen",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie uns, was Sie bauen möchten, welches Problem Sie lösen wollen oder welche Idee Sie haben.",
    },
    projectTypes: [
      "Webentwicklung / Landingpage",
      "Individuelle Software",
      "Unternehmensanwendung",
      "Managementsystem",
      "E-Commerce",
      "Integration / API",
      "Technologieberatung",
      "Sonstiges",
    ],
    privacy: "Ihre Daten werden nur verwendet, um auf Ihre Anfrage zu antworten.",
    errors: {
      name: "Bitte geben Sie Ihren Namen ein (mindestens 2 Zeichen).",
      email: "Bitte geben Sie eine gültige E-Mail ein.",
      projectType: "Bitte wählen Sie einen Projekttyp.",
      message: "Erzählen Sie uns etwas mehr (mindestens 10 Zeichen).",
    },
    submit: "Nachricht senden",
    sending: "Wird gesendet...",
    readyTitle: "Ihre Nachricht ist bereit.",
    readyBody: "Wir haben Ihren E-Mail-Client geöffnet, damit Sie sie senden können. Falls er sich nicht geöffnet hat,",
    readyLink: "nutzen Sie diesen Link",
    sentTitle: "Nachricht gesendet. Danke für Ihre Anfrage.",
    sentBody: "Wir antworten in Kürze.",
    error: "Das Formular konnte nicht gesendet werden. Schreiben Sie uns direkt an",
  },
  footer: {
    description:
      "Unabhängiges Software-Studio. Wir entwerfen und bauen digitale Produkte mit Urteilskraft, Liebe zum Detail und langfristigem Blick.",
    navLabel: "Navigation",
    contactLabel: "Kontakt",
    availability: "Verfügbar für neue Projekte",
    copyright: "Alle Rechte vorbehalten.",
    final: "LIMINAL BROS — Building digital solutions.",
    backToTop: "Nach oben",
    cta: "Bauen wir etwas zusammen?",
  },
  projectDetail: {
    back: "Zurück zu den Projekten",
    overview: "Überblick",
    system: "Geplantes System",
    features: "Wichtige Funktionen",
    technologies: "Technologien",
    category: "Kategorie",
    year: "Jahr",
    external: "Externes Projekt öffnen",
    cta: "Projekt starten",
    notFound: "Projekt nicht gefunden",
    notFoundBody: "Das gesuchte Projekt existiert nicht oder wurde noch nicht veröffentlicht.",
  },
};

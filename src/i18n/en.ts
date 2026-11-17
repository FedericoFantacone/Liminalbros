import type { Translations } from "./types";

export const en: Translations = {
  meta: {
    title: "LIMINAL CODE — Software studio and digital products",
    description:
      "LIMINAL CODE is a software studio that designs and builds digital products, web applications and custom systems for businesses that want to grow.",
  },
  ui: {
    skipToContent: "Skip to content",
    languageLabel: "Select language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuLabel: "Main navigation",
    externalLink: "External link",
    placeholder: "Demo",
    contactCta: "Let's talk about your project",
    nav: [
      { id: "inicio", label: "Home" },
      { id: "servicios", label: "Services" },
      { id: "proyectos", label: "Projects" },
      { id: "nosotros", label: "About" },
      { id: "contacto", label: "Contact" },
    ],
  },
  hero: {
    eyebrow: "Independent software studio",
    title: "We turn ideas into digital solutions.",
    titleLines: ["We turn", "ideas into", "digital", "solutions."],
    subtitle:
      "We build software, applications and digital experiences designed to grow businesses and solve real problems.",
    primaryCta: "View projects",
    secondaryCta: "Contact us",
    meta: {
      strategy: "Strategy",
      design: "Design",
      engineering: "Engineering",
    },
  },
  services: {
    label: "Capabilities",
    title: "Digital solutions to take your business further.",
    titleHighlight: "further.",
    description:
      "We combine strategy, design and development to build tools that solve concrete problems and support growth.",
    cta: "Tell us your idea",
    items: [
      {
        id: "01",
        title: "Custom software development",
        description:
          "We design and build solutions that adapt to your operation, not the other way around. Solid architecture, maintainable code and a focus on results.",
        tags: ["Product", "Architecture"],
      },
      {
        id: "02",
        title: "Web development and landing pages",
        description:
          "Fast, accessible sites built to convert. From an institutional presence to a complete digital experience.",
        tags: ["Web", "Conversion"],
      },
      {
        id: "03",
        title: "Enterprise applications",
        description:
          "Internal tools and platforms that organize processes, connect teams and give your business real visibility.",
        tags: ["Platforms", "Scalability"],
      },
      {
        id: "04",
        title: "Management systems and automation",
        description:
          "We digitize repetitive tasks with clear workflows, integrations and automations that free up time for what matters.",
        tags: ["Processes", "Automation"],
      },
      {
        id: "05",
        title: "Integrations and APIs",
        description:
          "We connect your systems, services and data with reliable, documented integrations built to grow.",
        tags: ["APIs", "Data"],
      },
      {
        id: "06",
        title: "Technology consulting",
        description:
          "We support technical decisions with judgment: we validate ideas, define scope and map a realistic path to the product.",
        tags: ["Strategy", "Product"],
      },
    ],
  },
  projects: {
    label: "Selected work",
    title: "Projects that speak for us.",
    titleHighlight: "for us.",
    subtitle: "Explore some of our developments and digital solutions.",
    disclaimer:
      "Each project opens an interactive demo built by LIMINAL CODE: a working single-view concept.",
    count: "03 / Demo",
    demo: "Interactive demo",
    view: "View project",
    nextTitle: "Your project could be next.",
    nextCta: "Start a project",
    items: [
      {
        id: "northline",
        slug: "northline",
        name: "Northline",
        description:
          "Analytics platform for teams that need to turn scattered data into clear decisions. A modular, fast and easy-to-read dashboard.",
        category: "SaaS · Data",
        year: "2026",
        technologies: ["Next.js", "TypeScript", "PostgreSQL"],
        image: "/projects/northline.svg",
        imageAlt: "Conceptual preview of Northline, an analytics dashboard",
        href: "/demo/northline",
        featured: true,
        details: {
          overview:
            "Northline organizes metrics, events and data sources into a clear interface for teams that make decisions every day.",
          system:
            "Modular architecture with data ingestion, typed API, visualization layer and team permissions. Built to scale without losing readability.",
          features: [
            "Configurable dashboard per team",
            "Real-time metrics and comparisons",
            "Report exports",
            "Integration with SQL sources and external APIs",
          ],
        },
      },
      {
        id: "mesa",
        slug: "mesa",
        name: "Mesa",
        description:
          "Editorial e-commerce for an author restaurant: reservations, seasonal menu and a simple buying experience.",
        category: "E-commerce",
        year: "2026",
        technologies: ["React", "Tailwind CSS", "Stripe"],
        image: "/projects/mesa.svg",
        imageAlt: "Conceptual preview of Mesa, a restaurant website",
        href: "/demo/mesa",
        details: {
          overview:
            "Mesa combines reservations, menu and purchase in a warm editorial experience built for restaurants with a strong identity.",
          system:
            "React frontend with product catalog, reservation flow, payment integration and a simple kitchen panel.",
          features: [
            "Online reservations",
            "Editable seasonal menu",
            "Stripe checkout",
            "Order panel",
          ],
        },
      },
      {
        id: "atlas",
        slug: "atlas",
        name: "Atlas",
        description:
          "Operations management system that centralizes projects, teams and documentation in a clear interface.",
        category: "Web application",
        year: "2025",
        technologies: ["React", "Node.js", "Prisma"],
        image: "/projects/atlas.svg",
        imageAlt: "Conceptual preview of Atlas, an operations management panel",
        href: "/demo/atlas",
        details: {
          overview:
            "Atlas gives visibility to projects, tasks and teams in one tool, reducing work scattered across multiple apps.",
          system:
            "Node backend with Prisma, React frontend and team-based permissions. Includes Kanban board, activity and velocity metrics.",
          features: [
            "Sprint Kanban board",
            "Team management",
            "Activity and audit trail",
            "Velocity metrics",
          ],
        },
      },
    ],
  },
  about: {
    label: "The studio",
    title: "Two professionals. One shared vision.",
    titleHighlight: "One shared vision.",
    description:
      "We are a team of professionals passionate about technology and software development. We combine academic experience, technical knowledge and a vision focused on building quality digital solutions.",
    approach: "We work directly with you: we think, design and build the product without intermediaries.",
    approachItems: [
      { label: "Team", value: "Direct and senior" },
      { label: "Focus", value: "End-to-end product" },
      { label: "Commitment", value: "Technical quality" },
    ],
    contactCta: "Let's talk about your project",
    profilesLabel: "Profiles",
    items: [
      {
        id: "01",
        name: "José Valentino Boschiazzo",
        role: "Co-Founder & CEO",
        description:
          "Electronics engineer with experience in industrial automation, field validation and software development. He has worked across Europe inspecting combustion engines, designing internal Python tools and programming PLCs and microcontrollers. He bridges mechanics, electronics and software to build robust technical solutions.",
        specialties: ["Automation", "Embedded", "Python", "E-Plan", "TIA Portal"],
        image: "/team/federico.jpg",
        linkedin: "https://www.linkedin.com/in/jvbosch/",
      },
      {
        id: "02",
        name: "Federico Fantacone",
        role: "Co-Founder & CEO",
        description:
          "Semi-Senior Full Stack Developer specialized in .NET, C# and Microsoft Azure. He works at Accenture designing and maintaining enterprise applications, APIs, databases and cloud infrastructure, with a focus on clean architecture and scalable solutions.",
        specialties: ["Backend", ".NET", "Azure", "Architecture", "APIs"],
        image: "/team/jose-dark.jpg",
        linkedin: "https://www.linkedin.com/in/federico-fantacone/",
      },
    ],
    steps: [
      { number: "01", title: "Understand", copy: "The problem before the solution." },
      { number: "02", title: "Build", copy: "With clarity and quality." },
      { number: "03", title: "Evolve", copy: "Iterating with your business." },
    ],
  },
  contact: {
    label: "Contact",
    title: "Got an idea? Let's make it real.",
    subtitle: "Tell us what you need and let's find the best technological solution together.",
    availability: "Available for new projects",
    channels: {
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      linkedinValue: "Federico Fantacone",
    },
    responseTime: "Austria · GMT+1 / Argentina · GMT-3 · Reply within 1–2 business days",
    briefTitle: "Initial brief",
    briefSubtitle: "Tell us about your project",
    briefIndex: "/ 01",
    fields: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      companyOptional: "(optional)",
      companyPlaceholder: "Your company name",
      projectType: "Project type",
      projectTypePlaceholder: "Select an option",
      message: "Message",
      messagePlaceholder: "Tell us what you want to build, what problem you want to solve or what idea you have in mind.",
    },
    projectTypes: [
      "Web development / landing page",
      "Custom software",
      "Enterprise application",
      "Management system",
      "E-commerce",
      "Integration / API",
      "Technology consulting",
      "Other",
    ],
    privacy: "Your data is only used to reply to your inquiry.",
    errors: {
      name: "Please enter your name (at least 2 characters).",
      email: "Please enter a valid email.",
      projectType: "Please select a project type.",
      message: "Tell us a bit more (at least 10 characters).",
    },
    submit: "Send message",
    sending: "Sending...",
    readyTitle: "Your message is ready.",
    readyBody: "We opened your email client so you can send it. If it did not open,",
    readyLink: "use this link",
    sentTitle: "Message sent. Thanks for reaching out.",
    sentBody: "We will reply shortly.",
    error: "We could not send the form. Write to us directly at",
  },
  footer: {
    description:
      "Independent software studio. We design and build digital products with judgment, attention to detail and a long-term view.",
    navLabel: "Navigation",
    contactLabel: "Contact",
    availability: "Available for new projects",
    copyright: "All rights reserved.",
    final: "LIMINAL CODE — Building digital solutions.",
    backToTop: "Back to top",
    cta: "Shall we build something?",
  },
  projectDetail: {
    back: "Back to projects",
    overview: "Overview",
    system: "Planned system",
    features: "Key features",
    technologies: "Technologies",
    category: "Category",
    year: "Year",
    openProject: "Open project",
    demoNote: "Navigable demo. Includes the first view of the product.",
    cta: "Start a project",
    notFound: "Project not found",
    notFoundBody: "The project you are looking for does not exist or has not been published yet.",
  },
};

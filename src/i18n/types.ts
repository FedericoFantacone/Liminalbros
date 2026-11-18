export type Locale = "es" | "en" | "de";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface ProjectDetail {
  overview: string;
  system: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
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
  details: ProjectDetail;
}

export interface ProfileItem {
  id: string;
  name: string;
  /** Short name used in compact labels (e.g. social links). */
  shortName?: string;
  role: string;
  description: string;
  specialties: string[];
  image?: string;
  linkedin?: string;
}

export interface StepItem {
  number: string;
  title: string;
  copy: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  ui: {
    skipToContent: string;
    languageLabel: string;
    menuOpen: string;
    menuClose: string;
    menuLabel: string;
    externalLink: string;
    placeholder: string;
    contactCta: string;
    nav: { id: string; label: string }[];
  };
  hero: {
    eyebrow: string;
    title: string;
    titleLines: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    meta: {
      strategy: string;
      design: string;
      engineering: string;
    };
  };
  services: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    cta: string;
    items: ServiceItem[];
  };
  projects: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    disclaimer: string;
    count: string;
    demo: string;
    real: string;
    view: string;
    nextLabel: string;
    nextTitle: string;
    nextCta: string;
    items: ProjectItem[];
  };
  about: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    approach: string;
    approachItems: { label: string; value: string }[];
    contactCta: string;
    profilesLabel: string;
    items: ProfileItem[];
    steps: StepItem[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    availability: string;
    channels: {
      email: string;
      linkedin: string;
    };
    responseTime: string;
    briefTitle: string;
    briefSubtitle: string;
    briefIndex: string;
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyOptional: string;
      companyPlaceholder: string;
      projectType: string;
      projectTypePlaceholder: string;
      message: string;
      messagePlaceholder: string;
    };
    projectTypes: string[];
    privacy: string;
    errors: {
      name: string;
      email: string;
      projectType: string;
      message: string;
    };
    submit: string;
    sending: string;
    sentTitle: string;
    sentBody: string;
    error: string;
  };
  footer: {
    description: string;
    navLabel: string;
    contactLabel: string;
    availability: string;
    copyright: string;
    final: string;
    backToTop: string;
    cta: string;
  };
  projectDetail: {
    back: string;
    overview: string;
    system: string;
    features: string;
    technologies: string;
    category: string;
    year: string;
    openProject: string;
    demoNote: string;
    cta: string;
    notFound: string;
    notFoundBody: string;
  };
}

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
  imageAlt: string;
  href: string;
  featured?: boolean;
  details: ProjectDetail;
}

export interface ProfileItem {
  id: string;
  name: string;
  role: string;
  description: string;
  specialties: string[];
  image?: string;
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
    external: string;
    view: string;
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
      whatsapp: string;
      linkedin: string;
      linkedinValue: string;
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
    readyTitle: string;
    readyBody: string;
    readyLink: string;
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
    external: string;
    cta: string;
    notFound: string;
    notFoundBody: string;
  };
}

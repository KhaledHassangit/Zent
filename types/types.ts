export type Locale = "en" | "ar";

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    services: string;
    works: string;
    faqs: string;
    contact: string;
    language: string;
  };
  hero: {
    heading: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
    social_label: string;
  };
  brands: {
    tagline: string;
  };
  about: {
    label: string;
    heading: string;
    description: string;
    cta: string;
    stats: {
      experience_value: string;
      experience_label: string;
      clients_value: string;
      clients_label: string;
    };
  };
  services: {
    label: string;
    heading: string;
    description: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
    }>;
  };
  why: {
    label: string;
    heading: string;
    description: string;
    checklist: Array<{
      title: string;
      description: string;
    }>;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
    stat_value: string;
    stat_label: string;
  };
  projects: {
    label: string;
    heading: string;
    description: string;
    cta: string;
    items: Array<{
      type: string;
      title: string;
      description: string;
      tags: string[];
      cta: string;
    }>;
  };
  testimonials: {
    label: string;
    heading: string;
    description: string;
    items: Array<{
      quote: string;
      name: string;
      role: string;
    }>;
  };
  faq: {
    label: string;
    heading: string;
    description: string;
    still_questions_title: string;
    still_questions_body: string;
    cta: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    copyright: string;
  };
}

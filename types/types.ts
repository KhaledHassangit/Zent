export type Locale = "en" | "ar";

export interface SectionProps {
  dict: Dictionary;
}

export interface LocaleSectionProps {
  dict: Dictionary;
  locale: Locale;
}

export interface SocialLinkItem {
  name: string;
  href: string;
  platform: "instagram" | "linkedin" | "behance";
}

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
    heading?: string;
    description?: string;
  };
  about: {
    label: string;
    heading: string;
    description: string;
    cta: string;
    body_para1: string;
    body_para2: string;
    stats: {
      experience_value: string;
      experience_label: string;
      experience_desc: string;
      clients_value: string;
      clients_label: string;
      clients_desc: string;
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
    view_project: string; // ADDED MISSING TYPE
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
    tagline: string;
    social_links: SocialLinkItem[];
  };
  
  pixels_example: {
    label: string;
    heading_start: string;
    heading_accent: string;
    cta_main: string;
    email: string;
  };
}

// types/projects.ts content
export interface Category {
  slug: string;
  label: string;
  projectCount: number;
}

export interface CategoriesResponse {
  data: Category[];
  meta: {
    total: number;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  year: number;
  duration: string;

  category: {
    slug: string;
    label: string;
  };

  description: string;
  longDescription: string;

  services: string[];
  technologies: string[];

  thumbnail: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };

  gallery: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];

  url: string;
  featured: boolean;
  publishedAt: string;
}

export interface ProjectsResponse {
  data: Project[];

  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface ProjectsSectionProps extends LocaleSectionProps {
  projects: Project[];
}



export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { label: string; href: string }[];
    active: string;
    onSelect: (href: string) => void;
    locale: Locale;
    contactLabel: string;
    dict: Dictionary;
}


export interface LangSwitcherProps {
  locale: Locale;
  className?: string;
}
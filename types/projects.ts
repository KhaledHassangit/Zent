// types/projects.ts

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
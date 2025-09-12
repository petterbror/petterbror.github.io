export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface TechInterest {
  category: string;
  technologies: string[];
  description: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
}

export interface HeroInfo {
  title: string;
  subtitle: string;
  description: string;
}

export interface Title {
  title: string;
  subtitle: string;
}
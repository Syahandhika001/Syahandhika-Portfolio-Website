export interface ExperienceItem {
  id: string;
  position: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'volunteer';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'design' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
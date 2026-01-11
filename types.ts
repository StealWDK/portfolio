import { IconType } from 'react-icons';

export interface Project {
  id: number;
  title: string;
  category: 'Frontend' | 'Full Stack' | 'Mobile' | 'UI/UX';
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: IconType;
  category: 'frontend' | 'backend' | 'tools';
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

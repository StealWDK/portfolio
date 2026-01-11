import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGithub, FaLinkedin, FaTwitter, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiGraphql } from 'react-icons/si';
import { Project, Skill, Experience, SocialLink } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: FaGithub },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: FaLinkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: FaTwitter },
];

export const PROJECTS = {
  en: [
    {
      id: 1,
      title: "Neon Nexus",
      category: "Full Stack",
      description: "A futuristic dashboard for managing IoT devices with real-time WebSocket data visualization.",
      image: "/images/neon-nexus.png",
      tech: ["Next.js", "TypeScript", "Socket.io", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Aura Commerce",
      category: "Frontend",
      description: "High-performance e-commerce storefront with 3D product previews and headless CMS integration.",
      image: "/images/aura-commerce.png",
      tech: ["React", "Three.js", "Shopify API", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "TaskFlow Pro",
      category: "Mobile",
      description: "Collaborative project management app with offline capabilities and biometric security.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1600&auto=format&fit=crop",
      tech: ["React Native", "Firebase", "Redux"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "CryptoVibe",
      category: "UI/UX",
      description: "DeFi portfolio tracker featuring complex data graphing and a neon-glassmorphism aesthetic.",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1600&auto=format&fit=crop",
      tech: ["Vue", "D3.js", "CSS Modules"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ] as Project[],
  ro: [
    {
      id: 1,
      title: "Neon Nexus",
      category: "Full Stack",
      description: "Un panou de control futurist pentru gestionarea dispozitivelor IoT cu vizualizare de date în timp real prin WebSocket.",
      image: "/images/neon-nexus.png",
      tech: ["Next.js", "TypeScript", "Socket.io", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Aura Commerce",
      category: "Frontend",
      description: "Magazin online de înaltă performanță cu previzualizări de produse 3D și integrare CMS headless.",
      image: "/images/aura-commerce.png",
      tech: ["React", "Three.js", "Shopify API", "Framer Motion"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "TaskFlow Pro",
      category: "Mobile",
      description: "Aplicație de management de proiect colaborativ cu capabilități offline și securitate biometrică.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1600&auto=format&fit=crop",
      tech: ["React Native", "Firebase", "Redux"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "CryptoVibe",
      category: "UI/UX",
      description: "Tracker de portofoliu DeFi cu grafice de date complexe și o estetică neon-glassmorphism.",
      image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1600&auto=format&fit=crop",
      tech: ["Vue", "D3.js", "CSS Modules"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ] as Project[]
};

export const SKILLS: Skill[] = [
  { name: "React", level: 95, icon: FaReact, category: "frontend" },
  { name: "Next.js", level: 90, icon: SiNextdotjs, category: "frontend" },
  { name: "TypeScript", level: 85, icon: SiTypescript, category: "frontend" },
  { name: "Tailwind", level: 95, icon: SiTailwindcss, category: "frontend" },
  { name: "Node.js", level: 80, icon: FaNodeJs, category: "backend" },
  { name: "PostgreSQL", level: 75, icon: SiPostgresql, category: "backend" },
  { name: "GraphQL", level: 70, icon: SiGraphql, category: "backend" },
  { name: "AWS", level: 65, icon: FaAws, category: "tools" },
  { name: "Docker", level: 70, icon: FaDocker, category: "tools" },
  { name: "Figma", level: 85, icon: FaFigma, category: "tools" },
];

export const EXPERIENCE = {
  en: [
    {
      id: 1,
      company: "TechNova Solutions",
      role: "Senior Frontend Engineer",
      period: "2021 - Present",
      description: [
        "Led migration of legacy dashboard to Next.js 14.",
        "Improved site performance by 40% using code splitting and lazy loading.",
        "Mentored 3 junior developers."
      ]
    },
    {
      id: 2,
      company: "Creative Pulse",
      role: "Full Stack Developer",
      period: "2019 - 2021",
      description: [
        "Developed custom e-commerce solutions for high-end fashion brands.",
        "Integrated Stripe and PayPal payment gateways.",
        "Built a custom headless CMS using Node.js and MongoDB."
      ]
    },
    {
      id: 3,
      company: "StartUp Inc",
      role: "Junior Web Developer",
      period: "2017 - 2019",
      description: [
        "Assisted in developing the MVP for a fintech application.",
        "Maintained and updated company website content.",
        "Wrote unit tests achieving 80% code coverage."
      ]
    }
  ] as Experience[],
  ro: [
    {
      id: 1,
      company: "TechNova Solutions",
      role: "Inginer Frontend Senior",
      period: "2021 - Prezent",
      description: [
        "Am condus migrarea panoului de control legacy la Next.js 14.",
        "Am îmbunătățit performanța site-ului cu 40% folosind code splitting și încărcare leneșă.",
        "Am mentorat 3 dezvoltatori juniori."
      ]
    },
    {
      id: 2,
      company: "Creative Pulse",
      role: "Dezvoltator Full Stack",
      period: "2019 - 2021",
      description: [
        "Am dezvoltat soluții de comerț electronic personalizate pentru branduri de modă de lux.",
        "Am integrat procesatoarele de plăți Stripe și PayPal.",
        "Am construit un CMS headless personalizat folosind Node.js și MongoDB."
      ]
    },
    {
      id: 3,
      company: "StartUp Inc",
      role: "Dezvoltator Web Junior",
      period: "2017 - 2019",
      description: [
        "Am asistat la dezvoltarea MVP-ului pentru o aplicație fintech.",
        "Am menținut și actualizat conținutul site-ului web al companiei.",
        "Am scris teste unitare obținând o acoperire a codului de 80%."
      ]
    }
  ] as Experience[]
};
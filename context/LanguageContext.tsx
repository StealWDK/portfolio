import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ro';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      letsTalk: "Let's Talk"
    },
    hero: {
      available: "Available for new projects",
      greeting: "Hello, I'm",
      build: "I build",
      typed: ['Full Stack Developer', 'UI/UX Enthusiast', 'Creative Problem Solver'],
      viewWork: "View My Work",
      contactMe: "Contact Me",
      scroll: "Scroll"
    },
    about: {
      title: "About Me",
      heading: "Designing the",
      headingHighlight: "Digital Future",
      description1: "I don't just write code; I engineer digital ecosystems. My journey is fueled by a relentless pursuit of performance and aesthetic perfection, building scalable solutions for",
      descriptionHighlight: "disruptors and visionaries",
      description2: "Currently architecting next-gen experiences at",
      stats: {
        experience: "Years Experience",
        projects: "Projects Shipped",
        clients: "Happy Clients"
      }
    },
    skills: {
      title: "Technical Arsenal",
      subtitle: "The tools and technologies I use to bring ideas to life."
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Selected works from my portfolio.",
      categories: {
        all: "All",
        frontend: "Frontend",
        fullstack: "Full Stack",
        mobile: "Mobile",
        uiux: "UI/UX"
      },
      links: {
        source: "Source",
        demo: "Live Demo"
      }
    },
    experience: {
      title: "Work Experience"
    },
    contact: {
      heading: "Let's create something extraordinary together.",
      subtitle: "Have a project in mind or just want to say hi? I'm currently open for new opportunities.",
      email: "Email Me",
      location: "Location",
      follow: "Follow Me",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        placeholderName: "John Doe",
        placeholderEmail: "john@example.com",
        placeholderSubject: "Project Proposal",
        placeholderMessage: "Tell me about your project..."
      }
    },
    footer: {
      copyright: "Built with"
    }
  },
  ro: {
    nav: {
      home: 'Acasă',
      about: 'Despre',
      skills: 'Abilități',
      projects: 'Proiecte',
      contact: 'Contact',
      letsTalk: "Discută"
    },
    hero: {
      available: "Disponibil pentru proiecte noi",
      greeting: "Salut, sunt",
      build: "Construiesc",
      typed: ['Dezvoltator Full Stack', 'Entuziast UI/UX', 'Rezolvator Creativ'],
      viewWork: "Portofoliu",
      contactMe: "Contact",
      scroll: "Derulează"
    },
    about: {
      title: "Despre Mine",
      heading: "Proiectând",
      headingHighlight: "Viitorul Digital",
      description1: "Nu scriu doar cod; proiectez ecosisteme digitale. Călătoria mea este alimentată de o căutare neobosită a performanței și perfecțiunii estetice, construind soluții scalabile pentru",
      descriptionHighlight: "vizionari și inovatori",
      description2: "În prezent proiectez experiențe de ultimă generație la",
      stats: {
        experience: "Ani de Experiență",
        projects: "Proiecte Livrate",
        clients: "Clienți Mulțumiți"
      }
    },
    skills: {
      title: "Arsenal Tehnic",
      subtitle: "Instrumentele și tehnologiile pe care le folosesc pentru a da viață ideilor."
    },
    projects: {
      title: "Proiecte Recente",
      subtitle: "Lucrări selectate din portofoliul meu.",
      categories: {
        all: "Toate",
        frontend: "Frontend",
        fullstack: "Full Stack",
        mobile: "Mobile",
        uiux: "UI/UX"
      },
      links: {
        source: "Sursă",
        demo: "Demo Live"
      }
    },
    experience: {
      title: "Experiență"
    },
    contact: {
      heading: "Hai să creăm ceva extraordinar împreună.",
      subtitle: "Ai un proiect în minte sau vrei doar să saluți? Sunt deschis pentru noi oportunități.",
      email: "Trimite Email",
      location: "Locație",
      follow: "Urmărește-mă",
      form: {
        name: "Nume",
        email: "Email",
        subject: "Subiect",
        message: "Mesaj",
        send: "Trimite Mesaj",
        placeholderName: "Ion Popescu",
        placeholderEmail: "ion@exemplu.com",
        placeholderSubject: "Propunere Proiect",
        placeholderMessage: "Spune-mi despre proiectul tău..."
      }
    },
    footer: {
      copyright: "Construit cu"
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ro' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
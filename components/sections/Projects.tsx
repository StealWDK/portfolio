import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useLanguage } from '../../context/LanguageContext';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { key: 'All', label: t.projects.categories.all },
    { key: 'Frontend', label: t.projects.categories.frontend },
    { key: 'Full Stack', label: t.projects.categories.fullstack },
    { key: 'Mobile', label: t.projects.categories.mobile },
    { key: 'UI/UX', label: t.projects.categories.uiux },
  ];

  const currentProjects = PROJECTS[language];

  const filteredProjects = filter === 'All' 
    ? currentProjects 
    : currentProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-2">{t.projects.title.split(' ')[0]} <span className="text-secondary">{t.projects.title.split(' ')[1]}</span></h2>
            <p className="text-white/60">{t.projects.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.key 
                    ? 'bg-white text-black' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout 
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedImage(project.image)}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-colors duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <span className="text-primary font-mono text-xs mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 text-sm mb-4 line-clamp-2 max-w-md">
                      {project.description}
                    </p>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 bg-white/10 backdrop-blur-sm rounded border border-white/5 text-white/80">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100" onClick={(e) => e.stopPropagation()}>
                      <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        <FaGithub /> {t.projects.links.source}
                      </a>
                      <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                        <FaExternalLinkAlt /> {t.projects.links.demo}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 md:-top-10 md:-right-10 text-white hover:text-primary transition-colors bg-black/50 rounded-full p-2"
              >
                <IoClose size={30} />
              </button>
              <img
                src={selectedImage}
                alt="Full Preview"
                className="rounded-lg shadow-2xl max-h-[85vh] max-w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

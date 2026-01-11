import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: t.about.stats.experience, value: "05+" },
    { label: t.about.stats.projects, value: "50+" },
    { label: t.about.stats.clients, value: "30+" },
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image Side */}
          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-primary rounded-2xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500 blur-lg opacity-60"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-square border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
               <img 
                 src="https://picsum.photos/800/800?grayscale" 
                 alt="Profile" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
               <div className="absolute bottom-6 left-6 border-l-4 border-primary pl-4">
                 <p className="font-mono text-primary text-sm mb-1 uppercase tracking-widest">Mike Dev</p>
                 <h3 className="text-2xl font-bold text-white">System Architect</h3>
               </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-4 mb-6">
               <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
               <span className="text-primary font-mono uppercase tracking-widest text-sm font-bold">{t.about.title}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {t.about.heading} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.about.headingHighlight}</span>.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {t.about.description1}
              <span className="text-primary font-medium"> {t.about.descriptionHighlight}</span>.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              {t.about.description2} <span className="text-secondary font-medium">TechNova</span>.
            </p>

            {/* Futuristic Stats HUD */}
            <div className="grid grid-cols-3 gap-6 border-t border-primary/20 pt-8 relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary"></div>
              
              {stats.map((stat, index) => (
                <div key={index} className="group cursor-default">
                  <h4 className="text-4xl font-bold font-mono text-white group-hover:text-primary transition-colors duration-300 mb-1">{stat.value}</h4>
                  <p className="text-xs font-mono uppercase tracking-wider text-white/40 group-hover:text-white/80 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../constants';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../context/LanguageContext';

const Experience: React.FC = () => {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const currentExperience = EXPERIENCE[language];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.experience.title.split(' ')[0]} <span className="text-primary">{t.experience.title.split(' ')[1]}</span></h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          {currentExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              } pl-8 md:pl-0`}
            >
              {/* Dot */}
              <div className="absolute left-[-4px] md:left-auto md:right-[-5px] top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#00ffff]"
                   style={{ right: index % 2 === 0 ? '-5px' : 'auto', left: index % 2 !== 0 ? '-5px' : '' }} 
              />
              
              <div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-2">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <h4 className="text-secondary font-medium mb-4">{exp.company}</h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-white/60 text-sm flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/40" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
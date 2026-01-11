import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../../constants';
import { scaleIn, staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../context/LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">{t.skills.title.split(' ')[0]} <span className="text-primary">{t.skills.title.split(' ')[1]}</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl text-white/80 group-hover:text-primary transition-colors duration-300">
                <skill.icon />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-white mb-1">{skill.name}</h3>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-2 w-16 mx-auto">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
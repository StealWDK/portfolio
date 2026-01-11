import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

const Navbar: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: t.nav.home, href: '#hero' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-mono tracking-tighter group">
            MIKE<span className="text-primary group-hover:text-secondary transition-colors">.DEV</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors hover:shadow-[0_2px_0_0_currentColor]"
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono font-bold text-primary hover:bg-white/10 transition-colors uppercase tracking-widest"
            >
              {language === 'en' ? 'RO' : 'EN'}
            </button>

            <div className="scale-75 origin-right">
              <Button onClick={() => scrollToSection('#contact')}>
                {t.nav.letsTalk}
              </Button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono font-bold text-primary"
            >
              {language === 'en' ? 'RO' : 'EN'}
            </button>
            <button 
              className="text-2xl text-white"
              onClick={() => setIsOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-8 right-8 text-3xl text-white/50 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </button>
            
            <div className="flex flex-col items-center space-y-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-3xl font-bold hover:text-primary transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-background border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Mike Dev. {t.footer.copyright} <span className="text-primary">React</span>, <span className="text-secondary">Tailwind</span> & <span className="text-tertiary">Motion</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
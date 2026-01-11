import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.contact.heading}</h2>
            <p className="text-white/60 text-lg mb-12">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-white/40 uppercase tracking-wider">{t.contact.email}</h4>
                  <a href="mailto:hello@mikedev.com" className="text-xl font-medium hover:text-primary transition-colors">hello@mikedev.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-white/40 uppercase tracking-wider">{t.contact.location}</h4>
                  <p className="text-xl font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-sm text-white/40 uppercase tracking-wider mb-4">{t.contact.follow}</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/60">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t.contact.form.placeholderName}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/60">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t.contact.form.placeholderEmail}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/60">{t.contact.form.subject}</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder={t.contact.form.placeholderSubject}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/60">{t.contact.form.message}</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder={t.contact.form.placeholderMessage}
                />
              </div>

              <Button className="w-full" icon={<FaPaperPlane />}>
                {t.contact.form.send}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
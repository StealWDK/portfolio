import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

// Add type definition for gtag
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log for debugging
    console.log('Form submitted:', formData);

    // Send event to Google Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Contact',
        event_label: formData.subject || 'General Inquiry',
      });
    }

    alert('Message sent! (Tracked in Google Analytics)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleWhatsApp = () => {
    const { name, email, subject, message } = formData;
    
    // Construct the message
    const text = `*New Contact Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
    
    // Encode for URL
    const encodedText = encodeURIComponent(text);
    
    // WhatsApp URL (Moldova format: 373...)
    const whatsappUrl = `https://wa.me/37376856195?text=${encodedText}`;
    
    // Track click in Analytics
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Contact',
        event_label: 'WhatsApp Button',
      });
    }

    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

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
                  <a href="mailto:stylehtml.dev@gmail.com" className="text-xl font-medium hover:text-primary transition-colors">stylehtml.dev@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm text-white/40 uppercase tracking-wider">{t.contact.location}</h4>
                  <p className="text-xl font-medium">Chisinau, Moldova</p>
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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/60">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t.contact.form.placeholderName}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/60">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t.contact.form.placeholderEmail}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-white/60">{t.contact.form.subject}</label>
                <input 
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder={t.contact.form.placeholderSubject}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/60">{t.contact.form.message}</label>
                <textarea 
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder={t.contact.form.placeholderMessage}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button className="w-full" icon={<FaPaperPlane />} type="submit">
                  {t.contact.form.send}
                </Button>
                
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 bg-[#25D366] text-white hover:bg-[#128C7E]"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

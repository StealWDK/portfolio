import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '', icon }) => {
  const baseStyle = "px-8 py-4 rounded-lg font-mono font-bold text-sm transition-all duration-300 flex items-center justify-center gap-3 group relative overflow-hidden uppercase tracking-widest";
  
  const variants = {
    primary: "bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] backdrop-blur-sm",
    outline: "bg-transparent border border-white/20 text-white hover:border-secondary hover:text-secondary hover:shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:bg-secondary/5 backdrop-blur-sm",
    ghost: "text-white/70 hover:text-primary hover:bg-white/5"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform duration-300">{icon}</span>}
      </span>
      
      {/* Glitch/Shine effect lines */}
      {variant === 'primary' && (
        <>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 translate-x-[-100%] group-hover:animate-[shine_1.5s_infinite]" />
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-50 translate-x-[100%] group-hover:animate-[shine_1.5s_infinite_reverse]" />
        </>
      )}
    </motion.button>
  );
};

export default Button;
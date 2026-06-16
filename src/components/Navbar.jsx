import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-dark/60 backdrop-blur-md border-b border-white/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Logo */}
          <a href="#home" className="text-2xl font-black tracking-tight text-white flex items-baseline">
            SUMIT<span className="w-2 h-2 rounded-full bg-accent inline-block ml-0.5 animate-pulse"></span>
          </a>

          {/* Center Navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="relative text-[14px] font-medium text-white/80 hover:text-white transition-colors duration-300 py-1"
              >
                {item.name}
                {/* Underline grow left-to-right */}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </a>
            ))}
          </div>

          {/* Right: Contact CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group inline-block"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 group-hover:border-accent/40 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,42,42,0.3)]" />
              <span className="relative z-10">Hire Me</span>
            </a>
          </div>

          {/* Hamburger Menu Icon (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white hover:text-accent p-1 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Slide-down Red Navigation Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-full h-screen bg-accent z-40 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col space-y-5">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + idx * 0.04, duration: 0.4 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-extrabold text-white tracking-tight hover:text-black transition-colors duration-300"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="pt-6 border-t border-white/20"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block w-full py-4 text-center bg-black text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                >
                  Hire Me
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

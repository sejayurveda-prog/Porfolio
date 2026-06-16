import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Globe, Clock } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  // Live updating clock in the user's local timezone for that high-end agency feel
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata', // Sumit is in IST (+05:30) as seen in metadata
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTime(formatter.format(new Date()));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white pt-28 pb-10 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* 1. Large CTA Banner section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-4">
              Next Step
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-[1.05] max-w-xl">
              Have a project in mind? <br />
              <span className="text-[#a0a0a0]">Let’s collaborate.</span>
            </h2>
          </div>
          
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between h-full text-left lg:text-right space-y-6">
            <a
              href="mailto:Sumitkumar.analysis@gmail.com"
              className="group flex items-center space-x-3 text-2xl md:text-4xl font-black tracking-tight text-white hover:text-accent transition-colors duration-300"
            >
              <span>Contact</span>
              <ArrowUpRight size={28} className="text-[#a0a0a0] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </a>
            <p className="text-xs font-mono tracking-wider text-white/40 uppercase">
              Based in India / Available Worldwide
            </p>
          </div>
        </div>

        {/* 2. Directory & Meta Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16 text-left border-b border-white/5">
          {/* Col 1: Brand details */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="text-xl font-black tracking-tight text-white flex items-baseline">
              SUMIT KUMAR<span className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-0.5" />
            </a>
            <p className="text-xs text-[#a0a0a0] max-w-xs leading-relaxed font-light">
              Crafting premium data systems, MIS report automations, and custom solutions with top-tier optimization.
            </p>
            {/* Live Clock / Location details */}
            <div className="flex flex-col space-y-2 pt-2">
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-wider text-white/50">
                <Globe size={12} className="text-accent" />
                <span>IST (UTC+5:30)</span>
              </div>
              <div className="flex items-center space-x-2 text-[11px] font-mono tracking-wider text-white/50">
                <Clock size={12} className="text-accent" />
                <span className="tabular-nums">{time || '10:48 AM'}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 lg:col-start-6 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase block">
              Navigation
            </span>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono tracking-wide uppercase text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase block">
              Core Capabilities
            </span>
            <ul className="text-xs font-mono text-[#a0a0a0] space-y-2 uppercase tracking-wide">
              <li>MIS Reporting & Automation</li>
              <li>ETL Database Pipelines</li>
              <li>React Executive Dashboards</li>
              <li>Backend API Engineering</li>
            </ul>
          </div>
        </div>

        {/* 3. Center Giant Text Layer */}
        <div className="w-full text-center py-6 select-none relative overflow-hidden group">
          <h1 
            className="text-[15vw] font-black tracking-tighter text-[#161616] group-hover:text-accent/10 transition-colors duration-700 uppercase leading-none"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            sumit.
          </h1>
        </div>

        {/* 4. Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs font-mono text-white/30 tracking-wider uppercase text-left order-2 md:order-1">
            © {new Date().getFullYear()} SUMIT. All Rights Reserved. Built with React & Tailwind CSS.
          </div>
          
          <div className="flex items-center space-x-6 order-1 md:order-2">
            <a
              href="#privacy"
              className="text-xs font-mono text-white/40 hover:text-white uppercase tracking-wider transition-colors"
            >
              Privacy Policy
            </a>
            
            {/* Scroll back to top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

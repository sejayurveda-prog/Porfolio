import React from 'react';
import { motion } from 'framer-motion';

// Custom SVG Icons for Skills to ensure pixel-perfect rendering and zero network dependencies
const ReactLogo = () => (
  <svg className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="3" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="3" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="38" ry="14" stroke="currentColor" strokeWidth="3" transform="rotate(120 50 50)" />
  </svg>
);

const NodeLogo = () => (
  <svg className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 15L20 32.3v34.7L50 85l30-18V32.3L50 15z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M50 15v70M20 32.3L50 50m30-17.7L50 50"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeDasharray="4 4"
      opacity="0.5"
    />
    <path
      d="M38 42c0-3.3 2.7-6 6-6s6 2.7 6 6v16c0 3.3-2.7 6-6 6s-6-2.7-6-6V42z"
      fill="currentColor"
      opacity="0.8"
    />
  </svg>
);

const MongoLogo = () => (
  <svg className="w-16 h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 12C50 12 30 35 30 55C30 70 39 80 50 85C61 80 70 70 70 55C70 35 50 12 50 12Z"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M50 12v73"
      stroke="currentColor"
      strokeWidth="2"
      opacity="0.6"
    />
    <path
      d="M40 50c3-5 7-10 10-14c3 4 7 9 10 14"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

export default function About() {
  return (
    <section id="about" className="relative w-full min-h-screen bg-accent text-white flex flex-col justify-between pt-24 overflow-hidden">
      
      {/* Floating Decorative Stars */}
      <StarIcon className="absolute top-20 left-10 w-8 h-8 text-black/20 animate-pulse-slow" />
      <StarIcon className="absolute top-1/2 left-[45%] w-12 h-12 text-black/10 animate-bounce-slow" />
      <StarIcon className="absolute bottom-40 right-12 w-6 h-6 text-black/20 animate-pulse-slow" />

      {/* Main Two-Column Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center flex-grow">
        
        {/* Left Column: Lanyard & Employee ID Badge */}
        <div className="lg:col-span-5 flex flex-col items-center justify-start relative pt-12 min-h-[500px]">
          
          {/* Lanyard Strap hanging from top */}
          <div className="absolute top-[-96px] left-1/2 -translate-x-1/2 w-6 h-40 border-l-[3px] border-r-[3px] border-black/80 rounded-b-md z-10" />
          
          {/* Lanyard metal clip */}
          <div className="absolute top-[44px] left-1/2 -translate-x-1/2 w-10 h-6 bg-zinc-700 border border-zinc-600 rounded flex flex-col items-center justify-center shadow-md z-20">
            <div className="w-4 h-1.5 bg-zinc-400 rounded-full" />
          </div>
          
          {/* Floating ID Pass Card */}
          <motion.div
            initial={{ y: 20, rotate: -3 }}
            whileHover={{ y: 5, rotate: -1, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            className="relative w-72 h-[420px] bg-dark-card border border-white/10 rounded-2xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col justify-between z-10 select-none mt-14"
          >
            {/* Slot hole punch design at the top */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-black rounded-full" />

            {/* Pass Header */}
            <div className="text-center pt-2">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block">
                ANNUAL PASSPORT
              </span>
              <span className="text-xs font-black tracking-widest text-accent uppercase block mt-0.5">
                CREATIVE CREW
              </span>
            </div>

            {/* Profile Avatar Frame */}
            <div className="w-36 h-36 mx-auto mt-4 rounded-xl border border-white/10 overflow-hidden bg-dark shadow-inner p-1 group">
              <img
                src="/profile.png"
                alt="Sumit Profile"
                className="w-full h-full object-cover rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* User Info */}
            <div className="text-center mt-3">
              <h3 className="text-lg font-black tracking-tight text-white uppercase leading-none">
                SUMIT KUMAR
              </h3>
              <p className="text-[9px] font-mono text-white/50 tracking-wider mt-1.5 uppercase">
                DATA SPECIALIST & DEVELOPER
              </p>
            </div>

            {/* Barcode & Tech Specs footer */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between">
              {/* Left detail */}
              <div className="text-left">
                <span className="text-[8px] font-mono text-white/30 block">ID NO</span>
                <span className="text-[9px] font-mono text-white/80 font-bold block">SM-94021</span>
              </div>

              {/* Barcode representation */}
              <div className="flex flex-col items-end">
                <div className="flex space-x-[2px] h-6 items-end">
                  <div className="w-[2px] h-full bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[3px] h-5 bg-white" />
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[2px] h-4 bg-white" />
                  <div className="w-[4px] h-full bg-white" />
                  <div className="w-[1px] h-6 bg-white" />
                  <div className="w-[2px] h-full bg-white" />
                </div>
                <span className="text-[8px] font-mono text-white/40 mt-0.5">AUTH_MIS_X9</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Text & Skills */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[12vw] md:text-[6vw] font-[900] text-black leading-none tracking-tight uppercase"
          >
            Hello!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base md:text-lg text-white leading-relaxed font-light"
          >
            I'm <span className="font-extrabold text-black uppercase">SUMIT KUMAR</span>, a specialized technologist operating at the intersection of complex data pipelines, system automation, and premium web application design.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm md:text-base text-white/85 leading-relaxed font-light"
          >
            With years of automation experience, I design high-performance systems that consolidate large-scale databases into responsive analytical layouts, optimizing business logic and building robust server infrastructure.
          </motion.p>

          {/* Technology Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10"
          >
            <span className="text-xs font-mono tracking-[0.25em] text-black/60 uppercase block mb-4">
              Core Tech Stack
            </span>
            <div className="flex items-center space-x-8">
              {/* React Skill Card */}
              <motion.div
                whileHover={{ scale: 1.15, y: -5 }}
                className="cursor-pointer"
                title="React.js"
              >
                <ReactLogo />
              </motion.div>

              {/* Node Skill Card */}
              <motion.div
                whileHover={{ scale: 1.15, y: -5 }}
                className="cursor-pointer"
                title="Node.js"
              >
                <NodeLogo />
              </motion.div>

              {/* Mongo Skill Card */}
              <motion.div
                whileHover={{ scale: 1.15, y: -5 }}
                className="cursor-pointer"
                title="MongoDB"
              >
                <MongoLogo />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Divider - Torn Paper Edge SVG Transition (overlaps with next section) */}
      <div className="w-full relative z-20 translate-y-[2px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80h1440V33.6c-48 6.4-96 11.2-144 14.4-48 3.2-96 4.8-144 1.6-48-3.2-96-11.2-144-16-48-4.8-96-6.4-144-3.2-48 3.2-96 11.2-144 14.4-48 3.2-96 1.6-144-4.8-48-6.4-96-17.6-144-24-48-6.4-96-8-144-3.2-48 4.8-96 14.4-144 17.6-48 3.2-96 0-144-9.6S48 8 0 0v80z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

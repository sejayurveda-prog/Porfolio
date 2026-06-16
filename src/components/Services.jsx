import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const processSteps = [
  {
    id: '01',
    title: 'Define',
    description: 'We unpack your automation needs, define system architectures, and establish key data models to streamline workflows.',
    position: 'right', // desktop position
    rotation: 'rotate-3',
    activeRotation: 'rotate-1',
  },
  {
    id: '02',
    title: 'Design',
    description: 'We wireframe analytical dashboards and model high-performance databases for intuitive visual representation of complex metrics.',
    position: 'left',
    rotation: '-rotate-3',
    activeRotation: '-rotate-1',
  },
  {
    id: '03',
    title: 'Build',
    description: 'Writing high-quality React components, setting up robust Node.js pipelines, and wiring fast MIS background automations.',
    position: 'right',
    rotation: 'rotate-2',
    activeRotation: 'rotate-0',
  },
  {
    id: '04',
    title: 'Launch',
    description: 'Deploying secure production pipelines, running optimizations, and delivering complete dashboard modules to end-users.',
    position: 'left',
    rotation: '-rotate-4',
    activeRotation: '-rotate-2',
  },
];

export default function Services() {
  const containerRef = useRef(null);

  // Set up scroll tracker for the timeline SVG path
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // Transform scroll progress to SVG path length
  const pathLength = useTransform(scrollYProgress, [0.05, 0.85], [0, 1]);

  return (
    <section 
      ref={containerRef}
      id="skills" // Maps to Navbar 'Skills' link
      className="relative w-full py-24 bg-white text-dark overflow-hidden grid-pattern"
    >
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-20">
        <span className="inline-block px-4 py-1.5 border border-dark/10 bg-white shadow-sm rounded-full text-xs font-mono tracking-wider uppercase mb-6 text-dark/70">
          How we work
        </span>
        
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl mx-auto">
            Let us show you how we drive your brand to new heights
          </h2>
          
          {/* Sketchy SVG Arrow decoration */}
          <svg className="absolute right-[-60px] bottom-[-40px] w-14 h-14 hidden md:block text-accent" viewBox="0 0 100 100" fill="none">
            <path
              d="M10 20 C 30 10, 60 15, 75 45 C 80 55, 85 75, 55 85 C 45 90, 35 70, 50 65 C 65 60, 80 85, 90 70"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            <path
              d="M75 60 L90 70 L70 85"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="mt-6 text-sm md:text-base text-dark/60 max-w-lg mx-auto font-light leading-relaxed">
          Our workflow merges thorough initial mapping with modern development paradigms, assuring high performance and robust systems.
        </p>
      </div>

      {/* Main Process Timeline Container */}
      <div className="max-w-6xl mx-auto px-6 relative min-h-[1200px] flex flex-col items-center">
        
        {/* SVG Timeline Path (Desktop S-Curve) */}
        <div className="absolute inset-0 w-full h-full hidden md:block pointer-events-none">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 1000 1200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Background thin dashed curve */}
            <path
              d="M 500 50 C 850 200, 850 450, 500 600 C 150 750, 150 1000, 500 1150"
              stroke="rgba(17, 17, 17, 0.08)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 8"
            />
            {/* Animated drawing curve */}
            <motion.path
              d="M 500 50 C 850 200, 850 450, 500 600 C 150 750, 150 1000, 500 1150"
              stroke="#ff2a2a"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 8"
              style={{ pathLength }}
            />
          </svg>
        </div>

        {/* SVG Timeline Path (Mobile straight line down center) */}
        <div className="absolute top-0 bottom-0 left-8 w-1 block md:hidden pointer-events-none">
          <div className="w-full h-full border-r border-dashed border-dark/15 relative">
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="absolute top-0 left-0 w-full h-full bg-accent origin-top"
            />
          </div>
        </div>

        {/* Process Cards Stack */}
        <div className="w-full relative flex flex-col space-y-16 md:space-y-0 md:block min-h-[1100px] pt-12">
          {processSteps.map((step, idx) => {
            // Compute vertical offset positioning for desktop cards
            const topOffset = idx * 260; // stagger vertically
            const sideClass = step.position === 'right' 
              ? 'md:left-[55%] md:right-0' 
              : 'md:right-[55%] md:left-0';

            return (
              <motion.div
                key={step.id}
                initial="inactive"
                whileInView="active"
                viewport={{ once: false, amount: 0.5 }}
                className={`w-full md:w-[42%] md:absolute pl-14 md:pl-0 ${sideClass}`}
                style={{ top: `${topOffset}px` }}
              >
                {/* Scroll activation connector point on desktop */}
                <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white bg-dark hidden md:block z-10 transition-colors duration-500 ${
                  step.position === 'right' ? '-left-8' : '-right-8'
                }`} />

                {/* Card representation */}
                <motion.div
                  variants={{
                    inactive: {
                      scale: 0.95,
                      opacity: 0.6,
                      backgroundColor: '#ffffff',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    },
                    active: {
                      scale: 1.02,
                      opacity: 1,
                      backgroundColor: '#ff2a2a',
                      boxShadow: '0 20px 40px rgba(255,42,42,0.3)',
                    }
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className={`relative rounded-[2rem] p-8 md:p-10 border border-dark/5 flex flex-col select-none ${step.rotation} transition-colors duration-500`}
                >
                  
                  {/* Luggage Tag Hole punch detail */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white md:bg-white border border-dark/5 shadow-inner flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-dark/10" />
                  </div>

                  {/* Top card metadata */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-serif italic text-4xl md:text-5xl font-black tracking-tight text-dark/15 group-active:text-white/20 transition-colors duration-300">
                      {step.id}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest opacity-40 uppercase pt-2">
                      workflow.process
                    </span>
                  </div>

                  {/* Active Card Text Color Control */}
                  <motion.div 
                    variants={{
                      inactive: { color: '#111111' },
                      active: { color: '#ffffff' }
                    }}
                    className="flex flex-col"
                  >
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase leading-none mb-4">
                      {step.title}
                    </h3>
                    
                    <motion.p 
                      variants={{
                        inactive: { color: 'rgba(17, 17, 17, 0.6)' },
                        active: { color: 'rgba(255, 255, 255, 0.85)' }
                      }}
                      className="text-xs md:text-sm font-light leading-relaxed"
                    >
                      {step.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Section: Sketchy closing text */}
      <div className="w-full text-center mt-20 relative z-10">
        <motion.p
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif italic font-black text-accent drop-shadow-sm select-none"
        >
          "Ready to be delivered!"
        </motion.p>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code, Play, ExternalLink, FileText } from 'lucide-react';

// Custom Google Icon SVG for the Drive/Document link
const GoogleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-6.887 4.114-4.694 0-8.503-3.809-8.503-8.503s3.809-8.503 8.503-8.503c2.25 0 4.18.847 5.65 2.22l3.225-3.225C18.914 1.34 15.86 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c7.056 0 11.725-4.962 11.725-11.933 0-.74-.067-1.48-.198-2.22H12.24z" />
  </svg>
);

const projectsList = [
  {
    title: 'FMS (Flow Management System)',
    category: 'MIS & Reporting',
    tag: 'React / Node.js',
    image: '/projects/mis-reporting.jpg',
    desc: 'Consolidated distributed enterprise databases into a single automated pipeline, reducing manual reporting cycles by 92%.',
    googleLink: 'https://docs.google.com',
    dashboardLink: 'https://dashboard.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Order to Delivery Flow Management System',
    category: 'Data Engineering',
    tag: 'Python / MongoDB',
    image: '/projects/etl-sync.jpg',
    desc: 'Developed a full-cycle Order-to-Delivery Flow Management System for a garment manufacturing business that digitizes every stage from order intake to final delivery — covering stock check, estimation, payment collection, invoice generation, packing, dispatch, and delivery confirmation. The system features a dual-channel WhatsApp automation layer (CloudWhatsApp API) that simultaneously notifies internal assignees at each stage transition and keeps customers updated with real-time order status — eliminating manual follow-ups on both ends. Built on Google Apps Script with a Google Sheets backend and a custom web-based interface with role-based access control.',
    googleLink: 'https://drive.google.com',
    dashboardLink: 'https://analytics.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Real-time Inventory Monitor',
    category: 'Logistics Analytics',
    tag: 'React / WebSockets',
    image: '/projects/inventory.jpg',
    desc: 'Interactive map displaying warehouse status updates, delivery schedules, and inventory alerts with custom data visualizers.',
    googleLink: 'https://docs.google.com',
    dashboardLink: 'https://map.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Customer Churn Predictor',
    category: 'Predictive Analytics',
    tag: 'Python / SQL',
    image: '/projects/churn.jpg',
    desc: 'Built custom models assessing user engagement parameters, successfully predicting account cancellations with 88% precision.',
    googleLink: 'https://drive.google.com',
    dashboardLink: 'https://churn-detector.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Google Sheets API Sync Engine',
    category: 'Automation Scripting',
    tag: 'Apps Script / REST',
    image: '/projects/sheets-sync.jpg',
    desc: 'Configured scheduled background tasks that automatically synchronize web analytics metrics directly into Google Sheets dashboards.',
    googleLink: 'https://docs.google.com',
    dashboardLink: 'https://sheets.google.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Enterprise Payroll Compiler',
    category: 'Financial Automations',
    tag: 'Node.js / ExcelJS',
    image: '/projects/payroll.jpg',
    desc: 'Consolidated attendance logs and tax structures to auto-generate customized salary slips in formatted Excel files within seconds.',
    googleLink: 'https://drive.google.com',
    dashboardLink: 'https://payroll-portal.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Microservices Sync Manager',
    category: 'Infrastructure',
    tag: 'Express / PostgreSQL',
    image: '/projects/sync-manager.jpg',
    desc: 'Maintained status records of background automation bots, triggering warning notifications in Slack if a script halts.',
    googleLink: 'https://docs.google.com',
    dashboardLink: 'https://console.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Retail Performance Visualizer',
    category: 'Business Intelligence',
    tag: 'React / Chart.js',
    image: '/projects/retail-bi.jpg',
    desc: 'Visualized regional sales trends, brand performances, and profit margins, optimizing stock configurations for retail partners.',
    googleLink: 'https://drive.google.com',
    dashboardLink: 'https://bi.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'Sales Lead Automated Dispatcher',
    category: 'Workflow Automation',
    tag: 'Node.js / Twilio',
    image: '/projects/dispatcher.jpg',
    desc: 'Monitored landing page submissions and auto-routed leads to sales representatives based on availability, increasing reply times.',
    googleLink: 'https://drive.google.com',
    dashboardLink: 'https://leads.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'E-commerce Live Control Board',
    category: 'Analytics Hub',
    tag: 'React / Tailwind',
    image: '/projects/ecommerce.jpg',
    desc: 'Maintained real-time logs of active cart additions, checkouts, and promotional code redemptions in a clean modular layout.',
    googleLink: 'https://docs.google.com',
    dashboardLink: 'https://store-admin.example.com',
    videoLink: 'https://youtube.com'
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const containerRef = useRef(null);

  // Responsive: Adjust visible cards on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = projectsList.length;
  const maxIndex = totalSlides - visibleCards;

  // Autoplay Logic
  useEffect(() => {
    if (isAutoplayPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 1500); // Rotate every 1.5 seconds

    return () => clearInterval(interval);
  }, [isAutoplayPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  // Progress Bar scale
  const progressPercent = ((currentIndex + visibleCards) / totalSlides) * 100;

  return (
    <section 
      id="projects" 
      className="relative w-full py-28 bg-[#0a0a0a] text-white overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-transparent grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header with Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3 animate-pulse">
              Portfolio Showcase
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
              Featured Work
            </h2>
          </div>
          
          {/* Slideshow Controls */}
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <span className="text-[10px] font-mono text-white/30 uppercase mr-2 tracking-widest hidden sm:inline-block">
              Autoplay {isAutoplayPaused ? 'Paused' : 'Active'}
            </span>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? 'border-white/10 text-white/20 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-white hover:text-black hover:scale-105'
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${
                currentIndex >= maxIndex
                  ? 'border-white/10 text-white/20 cursor-not-allowed'
                  : 'border-white/20 text-white hover:bg-white hover:text-black hover:scale-105'
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div 
          ref={containerRef} 
          className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
        >
          <motion.div
            animate={{ x: `-${currentIndex * (100 / totalSlides)}%` }}
            transition={{ type: 'spring', stiffness: 220, damping: 26 }}
            className="flex"
            style={{ width: `${(totalSlides / visibleCards) * 100}%` }}
          >
            {projectsList.map((project, idx) => (
              <div
                key={idx}
                className="px-4"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative bg-[#121212] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col h-[500px] justify-between shadow-2xl transition-all duration-300 hover:border-white/10"
                >
                  {/* Top Image Frame */}
                  <div className="relative w-full h-[220px] bg-dark overflow-hidden border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback graphic if local image doesn't exist
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback Graphic */}
                    <div style={{ display: 'none' }} className="w-full h-full bg-gradient-to-br from-accent/20 to-dark flex-col items-center justify-center space-y-2 text-white/40">
                      <Code size={40} className="text-accent/60" />
                      <span className="text-[10px] font-mono tracking-widest uppercase">IMAGE PLACEHOLDER</span>
                    </div>

                    {/* Category Overlay Tag */}
                    <span className="absolute top-4 left-4 px-3.5 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-mono tracking-wider text-white uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Text & Link Content */}
                  <div className="p-8 flex flex-col justify-between flex-grow text-left">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-2">
                        {project.tag}
                      </span>
                      <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tight leading-tight group-hover:text-accent transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed font-light line-clamp-3">
                        {project.desc}
                      </p>
                    </div>

                    {/* Footer Row: Meta & Interactive link buttons */}
                    <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between">
                      {/* Interactive Link Icons */}
                      <div className="flex items-center space-x-2.5">
                        {/* Google Doc/Drive Link */}
                        {project.googleLink && (
                          <a
                            href={project.googleLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                            title="Project Documentation"
                          >
                            <GoogleIcon className="w-3.5 h-3.5" />
                          </a>
                        )}

                        {/* Live Dashboard/Web link */}
                        {project.dashboardLink && (
                          <a
                            href={project.dashboardLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                            title="Live Dashboard / Site"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}

                        {/* Video Walkthrough/Demo */}
                        {project.videoLink && (
                          <a
                            href={project.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
                            title="Video Walkthrough / Demo"
                          >
                            <Play size={12} className="fill-white/70 hover:fill-white translate-x-[0.5px]" />
                          </a>
                        )}
                      </div>

                      {/* Right Detail */}
                      <span className="text-[10px] font-mono text-white/30 uppercase">
                        INDEX / 0{idx + 1}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Navigation Line at the bottom */}
        <div className="mt-12 max-w-xl mx-auto w-full h-[2px] bg-white/10 rounded-full relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent rounded-full origin-left"
            style={{ width: `${progressPercent}%` }}
            transition={{ type: 'spring', stiffness: 220, damping: 26 }}
          />
        </div>

        {/* Dynamic Tip for User */}
        <div className="mt-6 text-center">
         
        </div>

      </div>
    </section>
  );
}

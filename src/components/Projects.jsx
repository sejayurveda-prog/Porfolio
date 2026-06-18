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
    title: 'IMS Inventory management system',
    category: 'Inventory Management',
    tag: 'HTML / CSS / JavaScript / Google appscript',
    image: '/projects/Screenshot 2026-06-17 151209.jpg',
    desc: 'Developed a web-based Inventory Management System using Google Apps Script, Google Sheets, HTML, CSS, and JavaScript to manage 5,000+ inventory records and 1,000+ SKUs. Automated stock tracking, reporting, and inventory analytics, reducing manual effort by 70% and improving inventory accuracy to 98%+ through real-time dashboards and process automation.',
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
    googleLink: 'https://docs.google.com/spreadsheets/d/1xTvMhLGNuRJ0H63EZHPL0s4oQD_LrT5JigFD_EPUXww/edit?usp=sharing',
    dashboardLink: 'https://script.google.com/macros/s/AKfycbze4INUPBaa44Yin6RXkMAD5vqdoPIAKmXE5kUEWos-GMCt8pS69wWaLIgSKfFvqGLE/exec',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'PRODUCTION MANAGEMENT SYSTEM',
    category: 'PRODUCTION MANAGEMENT',
    tag: 'GOOGLE APPSCRIPT / GOOGLE SHEETS / HTML / CSS / JAVASCRIPT',
    image: '/projects/Screenshot 2026-06-17 152121.jpg',
    desc: 'Interactive map displaying warehouse status updates, delivery schedules, and inventory alerts with custom data visualizers.',
    googleLink: 'https://docs.google.com/spreadsheets/d/1ZtZQL043DL-Xqf5ErU4b5hJ_CBecFGbMp0lbYGbqurE/edit?usp=sharing',
    dashboardLink: 'https://script.google.com/macros/s/AKfycbwPb6K9ql6xYKVvBMzN7TdJxUxb0_F3y8xmulClpbit-S2dAifCVz9nNn5xA-WzHwpMWg/exec',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'CRM',
    category: 'SALES LEAD MANAGEMENT',
    tag: 'Python / SQL',
    image: '/projects/crm.png',
    desc: 'Designed and developed a web-based CRM Lead Management System using Google Sheets, Google Apps Script, HTML, CSS, and JavaScript to streamline lead tracking and customer relationship management. The system centralized lead data, automated lead assignment and follow-ups, tracked lead status across the sales pipeline, and provided real-time dashboards for monitoring conversions and team performance. Automated workflows reduced manual effort, improved response time, and enhanced lead conversion efficiency through better visibility and management of customer interactions.',
    googleLink: 'https://drive.google.com',
    dashboardLink: 'https://churn-detector.example.com',
    videoLink: 'https://youtube.com'
  },
  {
    title: 'SEJ AYURVEDA - E-COMMERCE and CONSULTATION WEBSITE',
    category: 'WEB DEVELOPMENT',
    tag: 'HTML / JAVASCRIPT / CSS / NODEJS / EXPRESS / GOOGLE SHEETS',
    image: '/projects/Screenshot 2026-06-18 112430.png',
    desc: 'Developed a modern and user-friendly Ayurveda website for SEJ Ayurveda to showcase Ayurvedic products, wellness solutions, and healthcare services. The platform provides detailed product information, online inquiries, customer engagement features, and a responsive design for seamless access across devices. The website enhances brand visibility, improves customer experience, and supports digital growth through an organized and informative online presence.',
    googleLink: 'https://docs.google.com',
    dashboardLink: 'https://idyllic-taffy-36d984.netlify.app/',
    videoLink: 'https://youtube.com'
  },
  //{
    //title: 'Enterprise Payroll Compiler',
    //category: 'Financial Automations',
    //tag: 'Node.js / ExcelJS',
    //image: '/projects/payroll.jpg',
    //desc: 'Consolidated attendance logs and tax structures to auto-generate customized salary slips in formatted Excel files within seconds.',
    //googleLink: 'https://drive.google.com',
    //dashboardLink: 'https://payroll-portal.example.com',
    //videoLink: 'https://youtube.com'
  //},
  {
    title: 'E-COMMERCE SUMMARY SYSTEM',
    category: 'Analytics SUMMARY',
    tag: 'GOOGLE SHEETS / GOOGLE APPSCRIPT / HTML / CSS / JAVASCRIPT',
    image: '/projects/Screenshot 2026-06-18 150839.png',
    desc: 'Designed and developed a web-based E-Commerce Website Report Summary Maker System to automate the generation of business and sales reports from e-commerce data. The system collects and processes order, sales, customer, inventory, and revenue data, transforming it into interactive dashboards and summarized reports. It provides real-time insights into sales performance, product trends, customer behavior, and inventory status through automated analytics and visualizations. The solution significantly reduces manual reporting effort, improves data accuracy, and enables faster business decision-making by delivering comprehensive reports in a user-friendly interface.',
    googleLink: 'https://docs.google.com/spreadsheets/d/1XXe0b6Bw2UN59AhyZDhsh4YTj0YKC0NS8GTBuyYnobM/edit?usp=sharing',
    videoLink: 'https://youtube.com'
  }
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState(null);
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
    }, 5000); // Rotate every 5 seconds

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
            {projectsList.filter(p => p.title !== 'Order to Delivery Flow Management System').map((project, idx) => (
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
                      <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tight leading-tight group-hover:text-accent transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>
                        {/* Description with toggle */}
                        <p className={`text-xs text-white/60 leading-relaxed font-light ${expandedIdx === idx ? '' : 'line-clamp-2'}`}>
                          {project.desc}
                          {expandedIdx !== idx && (
                            <button className="text-accent underline ml-1" onClick={() => setExpandedIdx(idx)}>
                              Know more
                            </button>
                          )}
                          {expandedIdx === idx && (
                            <button className="text-accent underline ml-1" onClick={() => setExpandedIdx(null)}>
                              Hide
                            </button>
                          )}
                        </p>
                    </div>

                    {/* Footer Row: Meta & Interactive link buttons */}
                    <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between">
                      {/* Interactive Link Icons */}
                      <div className="flex items-center space-x-2.5">
                        {/* Google Doc/Drive Link (omit for SEJ AYURVEDA) */}
                        {project.googleLink && project.title !== 'SEJ AYURVEDA - E-COMMERCE and CONSULTATION WEBSITE' && (
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
                        {/* Video Walkthrough/Demo (omit for SEJ AYURVEDA) */}
                        {project.videoLink && project.title !== 'SEJ AYURVEDA - E-COMMERCE and CONSULTATION WEBSITE' && (
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

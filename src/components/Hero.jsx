import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoSrc, setVideoSrc] = useState('https://www.w3schools.com/html/mov_bbb.mp4');
  const [isMobile, setIsMobile] = useState(false);

  // Responsive check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        videoRef.current.play().catch((err) => console.log('Video play error:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  // When the video ends naturally, reset state so text grows back automatically
  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const handleVideoError = () => {
    setVideoSrc('https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-32128-large.mp4');
  };

  // Parent animation container for staggering children
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 2.2,
      },
    },
  };

  const itemVariants = {
    initial: { y: 40, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const playBtnVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: 2.5,
      },
    },
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center bg-black">
      
      {/* Background Video (Opacity increases when playing, resets on ended) */}
      <video
        ref={videoRef}
        loop={false} // Allow video to end so handleVideoEnded can trigger
        
        playsInline
        onError={handleVideoError}
        onEnded={handleVideoEnded}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isPlaying ? 'opacity-85' : 'opacity-40'
        }`}
        src={videoSrc}
      />

      {/* Dark Overlay (Fade opacity when video plays, resets on ended) */}
      <div 
        className="absolute inset-0 bg-black z-1 transition-opacity duration-1000 pointer-events-none" 
        style={{ opacity: isPlaying ? 0.25 : 0.75 }}
      />

      {/* Grid Overlay for subtle premium detail */}
      <div className="absolute inset-0 bg-transparent grid-pattern opacity-10 z-1 pointer-events-none" />

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full">
        
        {/* Left Side: Copywriting — shrinks in place when video plays, full size when paused/ended */}
        <motion.div
          animate={{
            scale: isPlaying ? 0.72 : 1,
            opacity: isPlaying ? 0.6 : 1,
          }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'bottom left' }}
          className="col-span-1 md:col-span-8 flex flex-col justify-center text-left pointer-events-auto pt-28 md:pt-0"
        >
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
            className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-accent mb-4 block"
          >
            Digital Portfolio
          </motion.span>
          
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.37 }}
            className="text-[8vw] md:text-[4.8vw] font-[900] leading-[0.95] tracking-tighter text-white uppercase"
          >
            Hi, I'm a <br />
            <span className="text-stroke font-black block mt-2.5 text-white">
              Data Analyst And
            </span>
            <span className="text-stroke font-black block text-white">
              MIS Automation Specialist
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.54 }}
            className="mt-6 text-sm md:text-base text-light-muted max-w-lg leading-relaxed font-light drop-shadow-sm"
          >
            Specializing in high-performance React.js dashboards, complex MIS automations, Node.js microservices, and Tailwind CSS. Crafting ultra-scalable data systems and elegant web applications.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="px-8 py-3.5 bg-white text-black font-bold rounded-full text-sm hover:scale-105 hover:bg-light transition-all duration-300 shadow-lg hover:shadow-white/10"
            >
              View My Work
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="px-8 py-3.5 glass text-white font-bold rounded-full text-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Play Reel Control */}
        <div className="col-span-1 md:col-span-4 flex flex-col items-center justify-end md:justify-center h-full pb-20 md:pb-0 z-20">
          <motion.div
            variants={playBtnVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center group cursor-pointer"
            onClick={handlePlayToggle}
          >
            {/* Play Button Outer Ring */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center glass transition-all duration-500 group-hover:scale-110 group-hover:border-accent/40 group-hover:shadow-[0_0_40px_rgba(255,42,42,0.4)]">
              {/* Inner Pulsing Circle */}
              <div className="absolute inset-2 rounded-full bg-dark/80 group-hover:bg-dark border border-white/5 transition-all duration-300" />
              
              {/* Play/Pause Icon */}
              <div className="relative z-10 text-white transition-transform duration-300 group-hover:scale-105">
                {isPlaying ? (
                  <Pause size={28} className="fill-white" />
                ) : (
                  <Play size={28} className="fill-white translate-x-0.5" />
                )}
              </div>
            </div>
            
            {/* Reel label */}
            <span className="mt-4 text-[10px] md:text-xs font-mono tracking-[0.25em] text-white/60 group-hover:text-accent transition-colors duration-300 uppercase">
              {isPlaying ? 'PAUSE' : 'PLAY REEL'}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Center Scroll Indicator (Desktop only) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-10 pointer-events-none">
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: isPlaying ? 0 : 1, // Hide scroll indicator during play for cinematic immersion
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center cursor-pointer pointer-events-auto"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] font-mono tracking-[0.25em] text-white/40 uppercase mb-2">
            Scroll Down
          </span>
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

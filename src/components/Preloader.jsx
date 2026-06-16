import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }) {
  useEffect(() => {
    // Disable scrolling when preloader is active
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  // Framer Motion variants for the shutter exit
  const containerVariants = {
    initial: {
      y: 0,
    },
    exit: {
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1], // Premium easing
      },
    },
  };

  const logoVariants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0.85,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const fillVariants = {
    initial: {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    },
    animate: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      transition: {
        duration: 1.6,
        ease: [0.42, 0, 0.58, 1], // Smooth easing for water fill
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 w-full h-full bg-[#ff2a2a] z-[100000] flex items-center justify-center select-none overflow-hidden"
    >
      <motion.div
        variants={logoVariants}
        className="relative flex items-center justify-center"
      >
        {/* Background Layer - Dark transparent text */}
        <h1 className="text-[12vw] md:text-[9vw] font-[900] tracking-tighter uppercase text-black/15 select-none leading-none">
          SUMIT KUMAR.
        </h1>

        {/* Foreground Layer - White text with clip-path water fill */}
        <motion.h1
          variants={fillVariants}
          initial="initial"
          animate="animate"
          onAnimationComplete={() => {
            // Wait briefly after water fill completes, then notify parent to trigger exit slide
            setTimeout(() => {
              onComplete && onComplete();
            }, 600);
          }}
          className="absolute text-[12vw] md:text-[9vw] font-[900] tracking-tighter uppercase text-white select-none leading-none"
          style={{
            WebkitClipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
          }}
        >
          SUMIT KUMAR.
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}

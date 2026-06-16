import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageSquare, Copy, Check, ExternalLink } from 'lucide-react';

// Custom LinkedIn SVG Icon to avoid library version mismatches
const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactTabs = [
  {
    id: 'email',
    label: 'Send Email',
    icon: Mail,
    value: 'Sumitkumar.analysis@gmail.com',
    actionText: 'Compose Mail',
    actionUrl: 'mailto:Sumitkumar.analysis@gmail.com',
    description: 'Direct inquiries, consulting requests, or corporate project invitations.',
    accentColor: 'rgba(255, 42, 42, 0.15)'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: LinkedInIcon,
    value: 'linkedin.com/in/sumitk-da/',
    actionText: 'Connect Profile',
    actionUrl: 'https://linkedin.com',
    description: 'Let’s network professionally, discuss data pipelines, or automation scopes.',
    accentColor: 'rgba(0, 119, 181, 0.15)'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: MessageSquare,
    value: '+91 98765 43210',
    actionText: 'Start Chat',
    actionUrl: 'https://wa.me/919876543210',
    description: 'For instant messages, quick updates, or direct project alignments.',
    accentColor: 'rgba(37, 211, 102, 0.15)'
  },
  {
    id: 'call',
    label: 'Call Direct',
    icon: Phone,
    value: '+91 98765 43210',
    actionText: 'Dial Number',
    actionUrl: 'tel:+919876543210',
    description: 'For urgent consultation calls or critical business automation syncs.',
    accentColor: 'rgba(255, 255, 255, 0.1)'
  }
];

export default function Contact() {
  const [activeTab, setActiveTab] = useState('email');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTab = contactTabs.find(tab => tab.id === activeTab);

  return (
    <section id="contact" className="relative w-full py-28 bg-[#101010] text-white overflow-hidden border-t border-white/5">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-transparent grid-pattern opacity-5" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3 animate-pulse">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
            Let's Start A Project
          </h2>
          <p className="mt-4 text-sm md:text-base text-light-muted max-w-md mx-auto font-light leading-relaxed">
            Choose your preferred communication channel below to connect with me instantly.
          </p>
        </div>

        {/* Tab Panel Widget */}
        <div className="max-w-4xl mx-auto">
          {/* Tab selectors */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {contactTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setCopied(false);
                  }}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-black border-white shadow-lg'
                      : 'bg-white/5 border-white/5 hover:border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive display card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative bg-dark-card border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Background Glow */}
              <div 
                className="absolute inset-0 transition-colors duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${currentTab.accentColor} 0%, transparent 50%)`
                }}
              />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Column Left: Text info */}
                <div className="md:col-span-8 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-3">
                    Contact Protocol
                  </span>
                  
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight break-all mb-4">
                    {currentTab.value}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-light-muted font-light leading-relaxed max-w-md">
                    {currentTab.description}
                  </p>
                </div>

                {/* Column Right: Action Buttons */}
                <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end w-full">
                  
                  {/* Action Link Button */}
                  <a
                    href={currentTab.actionUrl}
                    target={currentTab.id !== 'email' && currentTab.id !== 'call' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-6 py-4 bg-white hover:bg-light text-black font-bold rounded-2xl text-sm transition-all duration-300 w-full hover:scale-[1.02]"
                  >
                    <span>{currentTab.actionText}</span>
                    <ExternalLink size={14} />
                  </a>

                  {/* Copy Button */}
                  <button
                    onClick={() => handleCopy(currentTab.value)}
                    className="flex items-center justify-center space-x-2 px-6 py-4 glass text-white font-bold rounded-2xl text-sm transition-all duration-300 w-full hover:bg-white/10"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Value</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

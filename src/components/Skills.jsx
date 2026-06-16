import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code, Cpu, BarChart2, Globe, FileSpreadsheet, GitBranch, GitMerge } from 'lucide-react';

const skillsList = [
  {
    name: 'Power BI',
    category: 'Business Intelligence',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
    defIcon: BarChart2,
  },
  {
    name: 'Business Intelligence',
    category: 'Analytics',
    icon: 'https://cdn.simpleicons.org/tableau/E97627',
    defIcon: BarChart2,
  },
  {
    name: 'API Integration',
    category: 'Backend',
    icon: 'https://cdn.simpleicons.org/postman/FF6C37',
    defIcon: Terminal,
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    defIcon: Code,
  },
  {
    name: 'HTML',
    category: 'Frontend',
    icon: 'https://cdn.simpleicons.org/html5/E34F26',
    defIcon: Globe,
  },
  {
    name: 'Microsoft Excel',
    category: 'Data Tools',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
    defIcon: FileSpreadsheet,
  },
  {
    name: 'Google Sheets',
    category: 'Data Tools',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Google_Sheets_2020_Logo.svg',
    defIcon: FileSpreadsheet,
  },
  {
    name: 'VBA Excel',
    category: 'Automation',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg',
    defIcon: Cpu,
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    icon: 'https://cdn.simpleicons.org/github/ffffff',
    defIcon: GitBranch,
  },
  {
    name: 'Git',
    category: 'Version Control',
    icon: 'https://cdn.simpleicons.org/git/F05032',
    defIcon: GitMerge,
  },
  {
    name: 'Python',
    category: 'Language',
    icon: 'https://cdn.simpleicons.org/python/3776AB',
    defIcon: Terminal,
  },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="skills" className="relative w-full py-28 bg-dark text-white overflow-hidden border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-transparent grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3 animate-pulse">
            Technical Arsenal
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
            Skills & Expertise
          </h2>
          
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, idx) => {
            const FallbackIcon = skill.defIcon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -6 }}
                className="relative bg-dark-card border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-between min-h-[160px] select-none transition-all duration-300 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)]"
              >
                {/* Glowing accent spot on hover */}
                {isHovered && (
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                )}

                {/* Skill Icon Frame */}
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
                  {/* Skill logo with fail-safe fallback rendering */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      // If the logo image doesn't exist in public/skills/ yet, hide image and show fallback icon
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback Icon */}
                  <div style={{ display: 'none' }} className="text-white/60">
                    <FallbackIcon size={24} />
                  </div>
                </div>

                {/* Skill Name & Tag */}
                <div className="text-center mt-4">
                  <h3 className="text-sm font-bold tracking-tight text-white uppercase leading-none mb-1.5">
                    {skill.name}
                  </h3>
                  <span className="text-[9px] font-mono tracking-widest text-[#a0a0a0] uppercase">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Tip for User */}
        <div className="mt-12 text-center">
          
        </div>
      </div>
    </section>
  );
}

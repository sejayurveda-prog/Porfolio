import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'MIS Automation Specialist & Data Analyst',
    company: 'NUTEX APPAREL LIMITED',
    period: '2023 - Present',
    details: [
      'Developed and maintained automated MIS dashboards and reporting systems using Microsoft Excel, Google Sheets, and Google Apps Script.',
      'Analyzed large datasets to identify business trends, performance metrics, and actionable insights for management decision-making.',
      'Automated manual reporting processes, reducing turnaround time and improving operational efficiency through workflow optimization.',
      'Created dynamic reports, KPI trackers, and data visualization dashboards to monitor productivity, sales, inventory, and business performance.',
      'Collaborated with cross-functional teams to gather requirements, ensure data accuracy, and implement data-driven solutions that enhanced business operations.',
    ],
    skills: ['Google Sheets', 'HTML', 'GOOGLE APPS SCRIPT', 'ARRAY FORMULAS', 'PIVOT TABLES', 'DATA ANALYSIS']
  },
  //{//
  //  role: 'MIS & Automation Specialist',
  //  company: 'Apex Solutions Group',
  //  period: '2021 - 2023',
  //  details: [
   //   'Developed custom scripts in Python and JS to parse, consolidate, and clean large-scale weekly business metrics.',
  //    'Transitioned legacy Excel-based reporting tools to fully automated web dashboards using Tailwind CSS and Node.js.',
  //    'Saved approximately 40 hours of manual labor per week by optimizing database queries and indexes.'
  //  ],
  //  skills: ['Node.js', 'SQL Optimization', 'Tailwind CSS', 'Automation Scripting']
 // },//
  {
    role: 'MIS Executive',
    company: 'GODIVA BIOADVANCES',
    period: '2023 - 2025',
    details: [
      'Prepared and maintained daily, weekly, and monthly MIS reports to support management decision-making and business operations.',
      'Developed automated dashboards and reports using Microsoft Excel, Google Sheets, Pivot Tables, and advanced formulas.',
      'Analyzed operational data to detect workflow bottlenecks, increasing team speed by 15%.',
      'Analyzed large datasets to identify trends, generate actionable insights, and improve operational performance.',
      'Automated reporting processes using Google Apps Script and Excel-based solutions, significantly reducing manual effort and turnaround time.',
      'Coordinated with cross-functional teams to ensure data accuracy, streamline workflows, and deliver timely business reports to stakeholders.'
    ],
    skills: ['Data Analysis', 'PowerBI', 'SQL Server', 'Google Sheets', 'Excel VBA', 'Dashboard Automation']
  }
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="relative w-full py-28 bg-[#151515] text-white overflow-hidden border-t border-white/5">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-transparent grid-pattern opacity-5" />
      
      {/* Decorative red glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-left mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent uppercase block mb-3 animate-pulse">
            Career Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
            Work Experience
          </h2>
        </div>

        {/* Experience Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Interactive Role Selector */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative px-6 py-5 rounded-2xl text-left border transition-all duration-500 flex items-center justify-between group overflow-hidden ${
                  activeIndex === idx
                    ? 'bg-accent border-accent text-white shadow-[0_10px_30px_rgba(255,42,42,0.25)]'
                    : 'bg-dark/40 border-white/5 hover:border-white/10 text-white/70 hover:text-white'
                }`}
              >
                <div className="relative z-10">
                  <h3 className="font-bold tracking-tight text-sm uppercase leading-none">
                    {exp.company}
                  </h3>
                  <span className="text-[10px] font-mono opacity-60 mt-1 block">
                    {exp.period}
                  </span>
                </div>
                <ChevronRight 
                  size={18} 
                  className={`relative z-10 transition-transform duration-300 ${
                    activeIndex === idx ? 'translate-x-1' : 'group-hover:translate-x-1 opacity-50'
                  }`} 
                />
              </button>
            ))}
          </div>

          {/* Right Side: Tab Details Display */}
          <div className="lg:col-span-8 bg-dark-card border border-white/5 rounded-3xl p-8 md:p-10 min-h-[400px] flex flex-col justify-between shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full justify-between"
              >
                {/* Header detail */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
                    <div className="text-left">
                      <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-tight">
                        {experiences[activeIndex].role}
                      </h3>
                      <p className="text-sm font-bold text-accent mt-1">
                        @ {experiences[activeIndex].company}
                      </p>
                    </div>
                    
                    {/* Period tag */}
                    <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
                      <Calendar size={13} className="text-accent" />
                      <span className="text-xs font-mono text-white/80">{experiences[activeIndex].period}</span>
                    </div>
                  </div>

                  {/* Duties description list */}
                  <ul className="mt-8 space-y-4 text-left">
                    {experiences[activeIndex].details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start text-xs md:text-sm text-light-muted leading-relaxed font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack badge tags */}
                <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap gap-2 justify-start">
                  {experiences[activeIndex].skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono uppercase tracking-wider text-white/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

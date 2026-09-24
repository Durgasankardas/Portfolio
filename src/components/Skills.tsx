import React from 'react';
import { Code2, Database, Brain, LayoutGrid } from 'lucide-react';
import { motion } from 'motion/react';
import { SkillCategory } from '../types/portfolio';

interface SkillsProps {
  skills: SkillCategory[];
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ skills, isDark }) => {
  const getIcon = (type: SkillCategory['icon']) => {
    switch (type) {
      case 'code':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'grid':
        return <LayoutGrid className="w-5 h-5 text-cyan-400" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-indigo-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header matching screenshot */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-500 mb-2 block">
              SKILLS & TECH STACK
            </span>
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Skills & Expertise
            </h2>
          </div>

          <p className={`max-w-md text-sm md:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A diverse toolkit of programming languages, frameworks, and technologies I use to build data-driven solutions.
          </p>
        </div>

        {/* 4 Category Columns matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                isDark
                  ? 'bg-[#090c14]/80 border-white/5 hover:border-blue-500/30 hover:bg-[#0d121f]'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              {/* Icon Container matching circular badge in screenshot */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform hover:scale-110 ${
                  isDark
                    ? 'bg-blue-950/40 border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                    : 'bg-blue-50 border-blue-100 shadow-sm'
                }`}
              >
                {getIcon(category.icon)}
              </div>

              {/* Category Title */}
              <h3 className={`text-base font-bold tracking-tight mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {category.title}
              </h3>

              {/* Skill Bullet List matching screenshot */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`flex items-center gap-2.5 text-sm font-medium transition-colors hover:translate-x-1 duration-200 ${
                      isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-blue-400" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

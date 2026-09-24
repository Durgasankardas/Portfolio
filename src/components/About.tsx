import React from 'react';
import { GraduationCap, Crosshair, Sparkles, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { UserProfile } from '../types/portfolio';

interface AboutProps {
  profile: UserProfile;
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ profile, isDark }) => {
  const details = [
    {
      icon: <GraduationCap className="w-4 h-4 text-blue-400" />,
      label: 'Education',
      value: profile.details.education,
    },
    {
      icon: <Crosshair className="w-4 h-4 text-indigo-400" />,
      label: 'Focus',
      value: profile.details.focus,
    },
    {
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      label: 'Interests',
      value: profile.details.interests,
    },
    {
      icon: <Target className="w-4 h-4 text-cyan-400" />,
      label: 'Goal',
      value: profile.details.goal,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Bio Prose & Numeric Stats (col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-500 mb-2 block">
                ABOUT ME
              </span>
              <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Background
              </h2>
            </div>

            <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {profile.aboutBio}
            </p>

            {/* Numeric Stats matching screenshot (2+, 1+, 100+) */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/5">
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-blue-500 tracking-tight">
                  {profile.stats.projects}
                </div>
                <div className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Projects Completed
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-blue-500 tracking-tight">
                  {profile.stats.leetcodeSolved}
                </div>
                <div className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  LeetCode Solved
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-blue-500 tracking-tight">
                  {profile.stats.codingHours}
                </div>
                <div className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Hours of Coding
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Spec Rows matching screenshot (col-span-6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 space-y-3"
          >
            {details.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                  isDark
                    ? 'bg-[#0a0d16] border-white/5 hover:border-blue-500/25 hover:bg-[#0e1220]'
                    : 'bg-white border-slate-200 hover:border-blue-300 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-[130px]">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {item.label}
                  </span>
                </div>

                <div className={`text-xs sm:text-sm text-right font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

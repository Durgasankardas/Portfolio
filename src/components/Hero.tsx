import React from 'react';
import { Download, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { UserProfile } from '../types/portfolio';
import { HeroPortrait } from './HeroPortrait';

interface HeroProps {
  profile: UserProfile;
  onDownloadResume: () => void;
  isDark: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onDownloadResume,
  isDark,
}) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parse name into lines if needed for exact typographic impact
  const nameParts = profile.name.trim().split(' ');
  const firstName = nameParts[0] || 'DURGA';
  const middleName = nameParts.length > 2 ? nameParts.slice(1, -1).join(' ') : (nameParts[1] || 'SANKAR');
  const lastNameWithDot = nameParts.length > 1 ? nameParts[nameParts.length - 1] : 'DAS.';

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typography & CTAs (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Kicker: "DATA SCIENTIST" */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-blue-500">
                {profile.kicker}
              </span>
            </div>

            {/* Oversized Signature Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black tracking-tight leading-[0.92] select-none">
              <span className={`block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {firstName}
              </span>
              <span className={`block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {middleName}
              </span>
              <span className="block">
                <span className={isDark ? 'text-white' : 'text-slate-900'}>
                  {lastNameWithDot.replace(/\.$/, '')}
                </span>
                <span className="text-blue-500 font-black">.</span>
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p
              className={`max-w-xl text-base md:text-lg leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {profile.heroBio}
            </p>

            {/* CTAs matching screenshot */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* DOWNLOAD RESUME Button */}
              <button
                onClick={onDownloadResume}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer active:translate-y-0"
              >
                <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </button>

              {/* CONTACT ME Button */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className={`group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 ${
                  isDark
                    ? 'border-white/15 bg-white/5 hover:bg-white/10 text-white hover:border-white/30'
                    : 'border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:border-slate-400 shadow-xs'
                }`}
              >
                <span>CONTACT ME</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue-400" />
              </a>
            </div>

            {/* Connect Section matching screenshot */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400">
                CONNECT
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait & Ambient Data Sphere (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center lg:items-end"
          >
            {/* Top Right Tagline: "DATA INSIGHT IMPACT" matching screenshot */}
            <div className="hidden lg:flex flex-col items-end gap-1 mb-4 select-none pr-2">
              <span className="text-[11px] font-mono tracking-[0.25em] text-slate-500 uppercase">DATA</span>
              <span className="text-[11px] font-mono tracking-[0.25em] text-slate-500 uppercase">INSIGHT</span>
              <span className="text-[11px] font-mono tracking-[0.25em] text-blue-500 font-semibold uppercase">IMPACT</span>
            </div>

            <HeroPortrait
              avatarUrl={profile.avatarUrl}
              isDark={isDark}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

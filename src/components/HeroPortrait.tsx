import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroPortraitProps {
  avatarUrl?: string;
  isDark: boolean;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  avatarUrl,
  isDark,
}) => {

  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:mx-0 flex items-center justify-center select-none">
      {/* Background Data Insight Graph Lines matching screenshot */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle Bar Chart / Analytics Silhouette in the background */}
        <div className="absolute top-12 right-12 flex items-end gap-1.5 opacity-25">
          <div className="w-1.5 h-8 bg-blue-400 rounded-t-sm" />
          <div className="w-1.5 h-14 bg-blue-400 rounded-t-sm" />
          <div className="w-1.5 h-20 bg-blue-400 rounded-t-sm" />
          <div className="w-1.5 h-16 bg-blue-400 rounded-t-sm" />
          <div className="w-1.5 h-24 bg-blue-400 rounded-t-sm" />
        </div>

        {/* Subtle trend line */}
        <svg
          className="absolute top-16 right-4 w-48 h-20 opacity-35"
          viewBox="0 0 160 60"
          fill="none"
        >
          <path
            d="M 10,48 L 45,35 L 85,42 L 120,20 L 150,15"
            stroke="#60a5fa"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <circle cx="150" cy="15" r="2.5" fill="#93c5fd" />
        </svg>
      </div>

      {/* Orbit Ring with Pulsing Blue Data Nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[115%] h-[115%] -top-[7.5%] -left-[7.5%] absolute"
          viewBox="0 0 500 500"
          fill="none"
        >
          {/* Outer glowing orbit ellipse */}
          <ellipse
            cx="250"
            cy="250"
            rx="210"
            ry="230"
            stroke="url(#orbitGradient)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            className="animate-spin"
            style={{ animationDuration: '40s' }}
          />

          {/* Inner orbit accent arc */}
          <path
            d="M 120,70 A 210,230 0 0,1 460,220"
            stroke="#3b82f6"
            strokeWidth="1.5"
            strokeOpacity="0.8"
          />

          {/* Orbit gradient definition */}
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.7" />
            </linearGradient>
            <radialGradient id="portraitBackdrop" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#0b0f19" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#08090d" stopOpacity="1" />
            </radialGradient>
          </defs>

          {/* Data Points on the Arc */}
          <circle cx="280" cy="24" r="5" fill="#3b82f6" className="animate-pulse" />
          <circle cx="280" cy="24" r="10" fill="#3b82f6" fillOpacity="0.25" />
          <circle cx="452" cy="190" r="4" fill="#60a5fa" />
          <circle cx="100" cy="380" r="3.5" fill="#6366f1" />
        </svg>
      </div>

      {/* Main Portrait Frame with Dark Mask */}
      <div className="relative z-10 w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
        {/* Soft Radial Backlight */}
        <div
          className="absolute inset-0 z-0"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(37,99,235,0.28) 0%, rgba(10,14,26,0.9) 75%, #08090d 100%)' }}
        />

        {/* Visual Content: Custom Uploaded Image or Illustrated Data Scientist */}
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt="Durga Sankar Das - Data Scientist"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full relative z-10 flex flex-col justify-end items-center">
            {/* High-fidelity Vector Representation of Durga Sankar Das matching the screenshot portrait */}
            <svg
              viewBox="0 0 380 475"
              className="w-full h-full object-cover"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c58c65" />
                  <stop offset="50%" stopColor="#b37851" />
                  <stop offset="100%" stopColor="#8c5838" />
                </linearGradient>
                <linearGradient id="shirt" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e2430" />
                  <stop offset="60%" stopColor="#121620" />
                  <stop offset="100%" stopColor="#08090d" />
                </linearGradient>
                <linearGradient id="rimLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Ambient Torso / Shirt */}
              <path
                d="M 80,475 C 80,360 120,330 150,320 L 190,345 L 230,320 C 260,330 300,360 300,475 Z"
                fill="url(#shirt)"
              />
              {/* Collar & Buttons */}
              <path d="M 150,320 L 190,355 L 230,320 L 210,310 L 190,325 L 170,310 Z" fill="#29303d" />
              <line x1="190" y1="355" x2="190" y2="475" stroke="#0a0c12" strokeWidth="2.5" />
              <circle cx="190" cy="385" r="2" fill="#475569" />
              <circle cx="190" cy="425" r="2" fill="#475569" />

              {/* Neck with shadow */}
              <path d="M 165,260 L 165,325 C 175,335 205,335 215,325 L 215,260 Z" fill="#9e6642" />
              <path d="M 165,260 C 180,275 200,275 215,260 L 215,280 C 200,290 180,290 165,280 Z" fill="#7a4b2f" opacity="0.6" />

              {/* Head / Jaw */}
              <path
                d="M 140,165 C 135,210 148,275 190,275 C 232,275 245,210 240,165 C 238,125 142,125 140,165 Z"
                fill="url(#skin)"
              />

              {/* Ears */}
              <ellipse cx="137" cy="180" rx="7" ry="14" fill="#a8714b" />
              <ellipse cx="243" cy="180" rx="7" ry="14" fill="#a8714b" />

              {/* Hair - neat, modern parted black hair matching photo */}
              <path
                d="M 134,165 C 130,135 145,100 190,95 C 235,95 250,135 246,165 C 240,140 230,118 190,118 C 150,118 140,140 134,165 Z"
                fill="#0f141c"
              />
              <path
                d="M 140,135 C 155,105 210,102 245,128 C 248,110 230,90 190,90 C 150,90 135,115 140,135 Z"
                fill="#161d28"
              />

              {/* Eyebrows */}
              <path d="M 152,158 Q 168,153 178,158" stroke="#111827" strokeWidth="3" strokeLinecap="round" />
              <path d="M 202,158 Q 212,153 228,158" stroke="#111827" strokeWidth="3" strokeLinecap="round" />

              {/* Eyes */}
              <ellipse cx="165" cy="169" rx="6.5" ry="3.5" fill="#ffffff" />
              <circle cx="166" cy="169" r="3" fill="#1e1815" />
              <circle cx="167" cy="168" r="1" fill="#ffffff" />

              <ellipse cx="215" cy="169" rx="6.5" ry="3.5" fill="#ffffff" />
              <circle cx="214" cy="169" r="3" fill="#1e1815" />
              <circle cx="215" cy="168" r="1" fill="#ffffff" />

              {/* Stylish Modern Glasses matching photo */}
              {/* Left Lens Frame */}
              <rect x="150" y="160" width="30" height="20" rx="5" fill="none" stroke="#000000" strokeWidth="2.5" />
              {/* Right Lens Frame */}
              <rect x="200" y="160" width="30" height="20" rx="5" fill="none" stroke="#000000" strokeWidth="2.5" />
              {/* Bridge */}
              <path d="M 180,166 Q 190,163 200,166" fill="none" stroke="#000000" strokeWidth="2.5" />
              {/* Temples */}
              <line x1="150" y1="166" x2="137" y2="170" stroke="#000000" strokeWidth="2" />
              <line x1="230" y1="166" x2="243" y2="170" stroke="#000000" strokeWidth="2" />
              {/* Subtle glass reflection */}
              <line x1="155" y1="164" x2="172" y2="176" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
              <line x1="205" y1="164" x2="222" y2="176" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />

              {/* Nose */}
              <path d="M 190,168 L 187,196 L 194,196" fill="none" stroke="#8c5838" strokeWidth="1.8" strokeLinecap="round" />

              {/* Mustache / subtle stubble & Smile */}
              <path d="M 172,216 Q 190,224 208,216" fill="none" stroke="#6b3a20" strokeWidth="2" strokeLinecap="round" />
              <path d="M 178,218 Q 190,223 202,218" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.7" />

              {/* Blue Rim Lighting along shoulder & cheek */}
              <path
                d="M 138,150 C 136,190 148,255 170,270"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="2"
                strokeOpacity="0.45"
              />
            </svg>
          </div>
        )}

        {/* Bottom dark gradient blend */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08090d] via-[#08090d]/80 to-transparent z-20 pointer-events-none" />
      </div>

      {/* Floating Status Card: "AVAILABLE FOR OPPORTUNITIES ↗" matching screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute -bottom-4 right-0 lg:-right-4 z-30"
      >
        <a
          href="#contact"
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-xl ${
            isDark
              ? 'bg-[#121624]/90 border-white/10 hover:border-blue-500/40 text-slate-200'
              : 'bg-white/95 border-slate-200 hover:border-blue-400 text-slate-800'
          }`}
        >
          {/* Pulsing indicator */}
          <div className="relative flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute opacity-75" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 relative" />
          </div>

          <div className="text-left">
            <div className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 dark:text-slate-400">
              AVAILABLE FOR
            </div>
            <div className="text-xs font-bold tracking-tight flex items-center gap-1">
              OPPORTUNITIES
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 ml-0.5" />
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

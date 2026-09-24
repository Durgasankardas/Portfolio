import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t py-12 transition-colors duration-300 ${
        isDark ? 'bg-[#06080d] border-white/5 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        {/* Brand matching screenshot */}
        <div className="flex items-center gap-1 font-black text-lg tracking-tight">
          <span className={isDark ? 'text-white' : 'text-slate-900'}>DSD</span>
          <span className="text-blue-500 font-black">.</span>
        </div>

        {/* Copyright notice matching screenshot */}
        <div className="text-center font-mono">
          © {new Date().getFullYear()} Durga Sankar Das. All rights reserved.
        </div>

        {/* Right Attribution matching screenshot */}
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5 font-medium">
            Designed & Built with <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" /> Passion
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`p-2 rounded-lg border transition-all hover:scale-110 cursor-pointer ${
              isDark ? 'border-white/10 hover:bg-white/10 text-slate-300' : 'border-slate-300 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onDownloadResume: () => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onDownloadResume,
}) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${isScrolled
            ? isDark
              ? 'bg-[#08090d]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl shadow-black/20'
              : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-md'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo Zone: DSD. matching screenshot */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="group flex items-center gap-1 text-2xl font-extrabold tracking-tighter transition-transform hover:scale-105"
          >
            <span className={isDark ? 'text-white' : 'text-slate-900'}>DSD</span>
            <span className="text-blue-500 font-black">.</span>
          </a>

          {/* Desktop Navigation Links matching screenshot */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 cursor-pointer ${isActive
                      ? isDark
                        ? 'text-white'
                        : 'text-blue-600 font-semibold'
                      : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  {item.label}
                  {/* Glowing active dot matching screenshot under "Home" */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavDot"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Zone: Theme Toggle & Controls */}
          <div className="flex items-center gap-2.5">
            {/* Quick Resume Button */}
            <button
              onClick={onDownloadResume}
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition-all duration-200 ${isDark
                  ? 'border-white/10 text-slate-300 hover:text-white hover:bg-white/5'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              title="Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-blue-500" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Mode Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className={`p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${isDark
                  ? 'border-white/10 text-slate-300 hover:text-amber-400 hover:bg-white/5 hover:border-amber-400/30'
                  : 'border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`md:hidden p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${isDark
                  ? 'border-white/10 text-slate-300 hover:text-white hover:bg-white/5'
                  : 'border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with backdrop blur */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-x-0 top-[72px] z-30 md:hidden border-b px-6 py-8 shadow-2xl backdrop-blur-xl ${isDark
                ? 'bg-[#08090d]/95 border-white/10'
                : 'bg-white/95 border-slate-200'
              }`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between py-2 text-base font-medium rounded-lg text-left transition-colors ${isActive
                        ? isDark
                          ? 'text-white font-semibold'
                          : 'text-blue-600 font-semibold'
                        : isDark
                          ? 'text-slate-400 hover:text-white'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                    )}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onDownloadResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/30 transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

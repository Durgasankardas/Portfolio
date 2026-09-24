/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialProfile, initialProjects, initialSkills } from './data/initialData';
import { UserProfile, Project } from './types/portfolio';
import { AmbientCursor } from './components/AmbientCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  // Theme state: defaults to dark matching screenshot
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('dsd_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  // Profile data from source code (read-only for production)
  const [profile] = useState<UserProfile>(initialProfile);
  const [projects] = useState<Project[]>(initialProjects);
  const [skills] = useState(initialSkills);

  // Resume download
  const handleDownloadResume = () => {
  const link = document.createElement('a');

  link.href = `${import.meta.env.BASE_URL}Durga_Sankar_Das_Resume.pdf`;
  link.download = 'Durga_Sankar_Das_Resume.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  // Sync theme class on <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('dsd_portfolio_theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-300 selection:bg-blue-600/30 selection:text-blue-200 ${isDark ? 'bg-[#08090d] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
        }`}
    >
      {/* Background Subtle Grid Pattern */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />

      {/* Minimal Aesthetic Ambient Cursor Trail */}
      <AmbientCursor isDark={isDark} />

      {/* Navigation Bar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          profile={profile}
          onDownloadResume={handleDownloadResume}
          isDark={isDark}
        />

        <Projects projects={projects} isDark={isDark} />

        <Skills skills={skills} isDark={isDark} />

        <About profile={profile} isDark={isDark} />

        <Contact profile={profile} isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />


    </div>
  );
}

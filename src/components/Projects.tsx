import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Github, X, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types/portfolio';
import { ProjectGraphic } from './ProjectGraphic';

interface ProjectsProps {
  projects: Project[];
  isDark: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, isDark }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [isAllProjectsOpen, setIsAllProjectsOpen] = useState(false);

  const categories = ['all', 'MACHINE LEARNING', 'DATA ANALYSIS', 'DEEP LEARNING', 'NATURAL LANGUAGE PROCESSING'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-blue-500 mb-2 block">
              FEATURED PROJECTS
            </span>
            <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Selected Work
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAllProjectsOpen(true)}
              className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors cursor-pointer ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <span>View all projects</span>
              <div className="w-7 h-7 rounded-full border border-current flex items-center justify-center transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Project Cards Grid matching screenshot layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              onClick={() => setSelectedProject(project)}
              className={`group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer ${
                isDark
                  ? 'bg-[#0b0e17] border-white/10 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/40'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10'
              }`}
            >
              {/* Card Header: 01 and Category matching screenshot */}
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="font-mono font-bold text-slate-500 text-sm tracking-wider">
                  {project.number}
                </span>
                <span className="font-mono text-[11px] tracking-wider text-slate-500 uppercase font-medium">
                  {project.category}
                </span>
              </div>

              {/* Dynamic Visual Banner */}
              <div className="mb-5 overflow-hidden rounded-xl">
                <ProjectGraphic type={project.graphicType} title={project.title} />
              </div>

              {/* Title & Description */}
              <div className="space-y-2 mb-6 grow">
                <h3 className={`text-xl font-bold tracking-tight transition-colors group-hover:text-blue-500 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech Tags & Circular Arrow Button matching screenshot */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                        isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white ${
                    isDark ? 'border-white/15 text-slate-400' : 'border-slate-300 text-slate-600'
                  }`}
                >
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Project Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className={`relative w-full max-w-3xl my-8 rounded-2xl border p-6 md:p-8 shadow-2xl overflow-hidden ${
                  isDark ? 'bg-[#0d111c] border-white/15 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`absolute top-6 right-6 p-2 rounded-xl border transition-colors cursor-pointer ${
                    isDark ? 'border-white/10 hover:bg-white/10 text-slate-400 hover:text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest">
                    {selectedProject.number} · {selectedProject.category}
                  </span>
                </div>
                <h3 className={`text-2xl md:text-3xl font-extrabold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {selectedProject.title}
                </h3>

                {/* Visual Graphic */}
                <div className="mb-6 rounded-xl overflow-hidden border border-white/5">
                  <ProjectGraphic type={selectedProject.graphicType} title={selectedProject.title} />
                </div>

                {/* Key Metrics Banner */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-blue-600/5 border border-blue-500/15">
                    {selectedProject.metrics.map((m, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl md:text-2xl font-bold font-mono text-blue-500">{m.value}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Detailed Breakdown */}
                {selectedProject.caseStudy && (
                  <div className="space-y-5 text-sm leading-relaxed mb-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Executive Overview</h4>
                      <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>{selectedProject.caseStudy.overview}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5" /> Technical Challenge
                        </h4>
                        <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {selectedProject.caseStudy.challenge}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-1.5 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" /> Deployed Architecture
                        </h4>
                        <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                          {selectedProject.caseStudy.solution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Key Outcomes & Impact</h4>
                      <ul className="space-y-1.5">
                        {selectedProject.caseStudy.impact.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.caseStudy.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs font-mono px-3 py-1 rounded-md border ${
                              isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Modal Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    {selectedProject.caseStudy?.repoUrl && (
                      <a
                        href={selectedProject.caseStudy.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {selectedProject.caseStudy?.liveDemoUrl && (
                      <a
                        href={selectedProject.caseStudy.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-2"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* "View All Projects" Filterable Catalogue Modal */}
        <AnimatePresence>
          {isAllProjectsOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
              onClick={() => setIsAllProjectsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className={`relative w-full max-w-5xl my-8 rounded-2xl border p-6 md:p-8 shadow-2xl ${
                  isDark ? 'bg-[#090c14] border-white/15' : 'bg-white border-slate-200'
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div>
                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      All Projects & Research
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Explore complete portfolio of data science implementations</p>
                  </div>
                  <button
                    onClick={() => setIsAllProjectsOpen(false)}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      isDark ? 'border-white/10 hover:bg-white/10 text-slate-400 hover:text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
                    }`}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                        filter === cat
                          ? 'bg-blue-600 text-white font-semibold'
                          : isDark
                          ? 'bg-white/5 text-slate-400 hover:text-white'
                          : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {cat === 'all' ? 'All Domains' : cat}
                    </button>
                  ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                  {filteredProjects.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsAllProjectsOpen(false);
                        setSelectedProject(p);
                      }}
                      className={`p-4 rounded-xl border transition-all cursor-pointer hover:border-blue-500/50 ${
                        isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-1">
                        <span>{p.number}</span>
                        <span className="text-[10px] text-blue-400">{p.category}</span>
                      </div>
                      <h4 className={`text-base font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{p.title}</h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-3">{p.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-mono">{p.tags.join(' · ')}</span>
                        <span className="text-blue-400 font-semibold flex items-center gap-1">Details ➔</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

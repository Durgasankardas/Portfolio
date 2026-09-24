import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { UserProfile, Project } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  projects: Project[];
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
  projects,
  isDark,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const content = `
=====================================================
${profile.name}
${profile.kicker} | ${profile.email} | ${profile.location}
GitHub: ${profile.github} | LinkedIn: ${profile.linkedin}
=====================================================

PROFESSIONAL SUMMARY
${profile.heroBio}

EDUCATION
${profile.details.education}
Focus: ${profile.details.focus}

KEY PROJECTS
${projects
  .map(
    (p) => `
* ${p.title} (${p.category})
  ${p.description}
  Technologies: ${p.tags.join(', ')}
  Highlights: ${p.metrics ? p.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ') : 'N/A'}
`
  )
  .join('\n')}

TECHNICAL SKILLS
- Programming: Python, SQL, R, JavaScript, C++
- Data & Analytics: Pandas, NumPy, SciPy, Matplotlib, Seaborn, Tableau
- Machine Learning: Scikit-learn, XGBoost, Statsmodels, TensorFlow, Keras, PyTorch
- Tools: Jupyter, VS Code, Git, Docker, Kaggle, Linux
    `.trim();

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.name.replace(/\s+/g, '_')}_Resume.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={`relative w-full max-w-4xl my-6 rounded-2xl border shadow-2xl overflow-hidden flex flex-col max-h-[90vh] ${
          isDark ? 'bg-[#0d1019] border-white/10 text-slate-200' : 'bg-white border-slate-200 text-slate-800'
        }`}
      >
        {/* Header Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold font-mono text-blue-500 uppercase">Curriculum Vitae</span>
            <span className="text-xs text-slate-400">· Durga Sankar Das</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
              title="Download Plaintext Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-8 md:p-12 overflow-y-auto space-y-8 print:p-0 print:m-0 bg-white text-slate-900 dark:bg-[#090b12] dark:text-slate-100">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                {profile.name.replace(/\.$/, '')}
              </h1>
              <p className="text-sm font-semibold font-mono text-blue-600 dark:text-blue-400 mt-1">
                {profile.kicker} · MACHINE LEARNING & ANALYTICS
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-500" />
                <span>{profile.github}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {profile.heroBio} {profile.aboutBio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Education & Academic Foundation
            </h2>
            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 space-y-1">
              <div className="flex justify-between items-center text-sm font-bold">
                <span>{profile.details.education}</span>
                <span className="text-xs font-mono text-slate-500">Graduating 2026</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400">
                Core Specialization: <strong className="text-slate-800 dark:text-slate-200">{profile.details.focus}</strong>
              </div>
              <div className="text-xs text-slate-500">
                Interests: {profile.details.interests}
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-4">
              Featured Data Science & ML Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl border border-slate-200 dark:border-white/10 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{proj.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                        {proj.category}
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500">{proj.tags.join(' · ')}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>
                  {proj.metrics && (
                    <div className="flex flex-wrap gap-3 pt-1 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                      {proj.metrics.map((m, i) => (
                        <span key={i} className="flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <strong>{m.label}:</strong> {m.value}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold font-mono tracking-widest uppercase text-blue-600 dark:text-blue-400 mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="font-semibold block mb-1">Languages:</span>
                <span className="text-slate-600 dark:text-slate-400">Python, SQL, R, JavaScript, C++</span>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="font-semibold block mb-1">Data & Analytics:</span>
                <span className="text-slate-600 dark:text-slate-400">Pandas, NumPy, SciPy, Matplotlib, Seaborn, Tableau</span>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="font-semibold block mb-1">Machine & Deep Learning:</span>
                <span className="text-slate-600 dark:text-slate-400">Scikit-learn, XGBoost, TensorFlow, Keras, PyTorch</span>
              </div>
              <div className="p-3 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="font-semibold block mb-1">Tools & Dev:</span>
                <span className="text-slate-600 dark:text-slate-400">Jupyter, VS Code, Git, Docker, Kaggle, Linux</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

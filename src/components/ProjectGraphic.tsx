import React from 'react';

interface ProjectGraphicProps {
  type: 'churn' | 'sales' | 'vision' | 'nlp' | 'finance';
  title: string;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ type, title }) => {
  return (
    <div className="relative w-full h-44 overflow-hidden rounded-xl bg-[#090b12] border border-white/5 flex items-center justify-center">
      {type === 'churn' && (
        <svg
          viewBox="0 0 400 180"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          preserveAspectRatio="xMidYMid slice"
          aria-label={title}
        >
          <defs>
            <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#090b12" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="churnOrb" cx="50%" cy="60%" r="50%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="200" cy="110" r="120" fill="url(#churnOrb)" />

          {/* Undulating 3D Mesh Ribbons matching screenshot */}
          {[-20, -10, 0, 10, 20, 30].map((offset, i) => (
            <path
              key={i}
              d={`M-20,${110 + offset} Q60,${80 - offset * 1.2} 140,${125 + offset} T280,${85 - offset * 0.8} T420,${115 + offset}`}
              fill="none"
              stroke="url(#purpleGlow)"
              strokeWidth={1.2 - i * 0.1}
              strokeOpacity={0.8 - i * 0.1}
            />
          ))}

          {/* Cross mesh lines for the 3D topology effect */}
          {[20, 60, 100, 140, 180, 220, 260, 300, 340, 380].map((x, idx) => {
            const y1 = 90 + Math.sin(idx * 0.7) * 25;
            const y2 = y1 + 45;
            return (
              <line
                key={idx}
                x1={x}
                y1={y1}
                x2={x + 12}
                y2={y2}
                stroke="#c084fc"
                strokeWidth="0.8"
                strokeOpacity="0.45"
                strokeDasharray="2 3"
              />
            );
          })}

          {/* Glowing particle data points */}
          {[
            { cx: 70, cy: 92, r: 2.2 },
            { cx: 140, cy: 124, r: 2.8 },
            { cx: 210, cy: 98, r: 2.4 },
            { cx: 280, cy: 84, r: 3 },
            { cx: 330, cy: 104, r: 2.2 },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.cx} cy={pt.cy} r={pt.r * 2.5} fill="#a855f7" fillOpacity="0.25" />
              <circle cx={pt.cx} cy={pt.cy} r={pt.r} fill="#ffffff" />
            </g>
          ))}
        </svg>
      )}

      {type === 'sales' && (
        <svg
          viewBox="0 0 400 180"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          preserveAspectRatio="xMidYMid slice"
          aria-label={title}
        >
          <defs>
            <linearGradient id="cyanBar" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="salesRadial" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow */}
          <circle cx="200" cy="90" r="110" fill="url(#salesRadial)" />

          {/* Soundwave/Sales Frequency Spectrum Bars matching screenshot */}
          {Array.from({ length: 48 }).map((_, i) => {
            const x = 16 + i * 8;
            // Generate bell-curved analytical spike distribution
            const distFromCenter = Math.abs(24 - i);
            const heightFactor = Math.max(12, 110 - distFromCenter * 3.4 + Math.sin(i * 1.2) * 22);
            const y = 90 - heightFactor / 2;
            const isHighlighted = i >= 20 && i <= 30;

            return (
              <g key={i}>
                <rect
                  x={x}
                  y={y}
                  width="3"
                  height={heightFactor}
                  rx="1.5"
                  fill="url(#cyanBar)"
                  opacity={isHighlighted ? 0.95 : 0.45}
                />
                {isHighlighted && i % 2 === 0 && (
                  <circle cx={x + 1.5} cy={y} r="1.5" fill="#e0f2fe" />
                )}
              </g>
            );
          })}

          {/* Horizontal Trendline */}
          <path
            d="M 20,90 Q 120,60 200,85 T 380,70"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
        </svg>
      )}

      {type === 'vision' && (
        <svg
          viewBox="0 0 400 180"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          preserveAspectRatio="xMidYMid slice"
          aria-label={title}
        >
          <defs>
            <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Deep ambient neural glow */}
          <circle cx="200" cy="90" r="100" fill="url(#neuralGlow)" />

          {/* Neural Synapses lines */}
          {[
            [50, 60, 130, 45],
            [50, 60, 130, 95],
            [50, 120, 130, 95],
            [50, 120, 130, 140],
            [130, 45, 210, 35],
            [130, 45, 210, 85],
            [130, 95, 210, 85],
            [130, 95, 210, 135],
            [130, 140, 210, 135],
            [210, 35, 290, 60],
            [210, 85, 290, 60],
            [210, 85, 290, 115],
            [210, 135, 290, 115],
            [290, 60, 360, 90],
            [290, 115, 360, 90],
          ].map(([x1, y1, x2, y2], idx) => (
            <line
              key={idx}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#60a5fa"
              strokeWidth="0.9"
              strokeOpacity="0.45"
            />
          ))}

          {/* Convolution Layer Nodes */}
          {[
            { cx: 50, cy: 60, r: 4 },
            { cx: 50, cy: 120, r: 4 },
            { cx: 130, cy: 45, r: 4.5 },
            { cx: 130, cy: 95, r: 5 },
            { cx: 130, cy: 140, r: 4.5 },
            { cx: 210, cy: 35, r: 5 },
            { cx: 210, cy: 85, r: 6 },
            { cx: 210, cy: 135, r: 5 },
            { cx: 290, cy: 60, r: 5 },
            { cx: 290, cy: 115, r: 5 },
            { cx: 360, cy: 90, r: 6.5 },
          ].map((node, i) => (
            <g key={i}>
              <circle cx={node.cx} cy={node.cy} r={node.r * 2} fill="#3b82f6" fillOpacity="0.25" />
              <circle cx={node.cx} cy={node.cy} r={node.r} fill="#93c5fd" />
              <circle cx={node.cx} cy={node.cy} r={node.r * 0.4} fill="#ffffff" />
            </g>
          ))}
        </svg>
      )}

      {type === 'nlp' && (
        <svg
          viewBox="0 0 400 180"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          preserveAspectRatio="xMidYMid slice"
          aria-label={title}
        >
          <defs>
            <radialGradient id="nlpGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="90" r="100" fill="url(#nlpGlow)" />
          {/* Attention matrix & embeddings */}
          {[30, 75, 120, 165, 210, 255, 300, 345].map((x, i) => (
            <line
              key={i}
              x1={x}
              y1={20}
              x2={200 + (x - 200) * 0.4}
              y2={160}
              stroke="#818cf8"
              strokeWidth="0.8"
              strokeOpacity="0.3"
              strokeDasharray="3 3"
            />
          ))}
          {[
            { x: 120, y: 70, label: 'tokens' },
            { x: 200, y: 55, label: 'attention' },
            { x: 280, y: 75, label: 'vectors' },
            { x: 200, y: 125, label: 'intent' },
          ].map((pt, i) => (
            <g key={i}>
              <circle cx={pt.x} cy={pt.y} r="18" fill="#4f46e5" fillOpacity="0.3" stroke="#818cf8" strokeWidth="1" />
              <circle cx={pt.x} cy={pt.y} r="3" fill="#ffffff" />
            </g>
          ))}
        </svg>
      )}
    </div>
  );
};

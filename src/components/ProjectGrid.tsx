import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FEATURED_PROJECTS, 
  OTHER_PROJECTS, 
  Project 
} from "../data/portfolioData";
import { 
  ExternalLink, 
  Award, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  X, 
  Search,
  BookOpen
} from "lucide-react";

type FilterType = "all" | "luxury" | "professional" | "health";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showSecondaryIndex, setShowSecondaryIndex] = useState(false);

  const filteredProjects = activeFilter === "all" 
    ? FEATURED_PROJECTS 
    : FEATURED_PROJECTS.filter(p => p.category === activeFilter);

  const categoryLabels: { value: FilterType; label: string }[] = [
    { value: "all", label: "All Engineering" },
    { value: "luxury", label: "Luxury Storefronts" },
    { value: "professional", label: "B2B & Enterprise" },
    { value: "health", label: "Health & Specialized" }
  ];

  return (
    <div id="projects" className="py-12">
      {/* Filters and Search Bar Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:flex-wrap w-[calc(100%+3rem)] md:w-auto">
          {categoryLabels.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                activeFilter === cat.value
                  ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-lg shadow-emerald-500/5"
                  : "bg-zinc-900/40 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:bg-zinc-900/80"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Floating Secondary Index Button */}
        <button
          onClick={() => setShowSecondaryIndex(true)}
          className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer shadow-md"
        >
          <BookOpen className="h-4 w-4 text-emerald-400" />
          <span>Secondary Brands Index ({OTHER_PROJECTS.length})</span>
        </button>
      </div>

      {/* Main Bento Project Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {filteredProjects.map((project, idx) => {
          // Give various layout sizes based on index or highlights to establish rhythm
          const isLargeCard = idx === 0 || idx === 1;
          const colSpan = isLargeCard ? "md:col-span-8" : "md:col-span-4";
          
          return (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`${colSpan} group relative rounded-2xl glass-panel p-6 border border-zinc-800/80 flex flex-col justify-between transition-all duration-500 hover:scale-[1.01] hover:border-zinc-700 cursor-pointer shadow-lg overflow-hidden`}
            >
              {/* Card glowing visual accent */}
              <div 
                className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none blur-3xl"
                style={{
                  background: project.category === "luxury" 
                    ? "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)" 
                    : project.category === "professional" 
                      ? "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)" 
                      : "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)"
                }}
              />

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                      {project.category}
                    </span>
                    {project.highlight && (
                      <span className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400 font-mono px-1.5 py-0.5 rounded-full">
                        <Sparkles className="h-2.5 w-2.5 text-emerald-400" /> Featured Core
                      </span>
                    )}
                  </div>
                  
                  <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">
                    <ExternalLink className="h-4.5 w-4.5" />
                  </span>
                </div>

                <h3 className="font-display font-semibold text-xl text-white group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Performance Metrics preview */}
                {project.metrics && (
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-zinc-800/50 pt-4">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{m.label}</div>
                        <div className="text-sm font-bold font-mono text-emerald-400 mt-0.5">{m.value}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[9px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[9px] font-mono text-zinc-500 px-1 py-1">
                    +{project.techStack.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Slide-over Side Drawer Panel for Selected Project Architecture */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />

            {/* Slider Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-zinc-950 border-l border-zinc-800 shadow-2xl z-50 overflow-y-auto flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-zinc-800 bg-zinc-900/40 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">ENG CASE STUDY</span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 space-y-8 flex-1">
                {/* Metrics Highlights Section */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-4 bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl">
                    {selectedProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">{m.label}</span>
                        <span className="text-lg font-bold font-mono text-emerald-400 mt-1 block">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem Statement */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 font-display font-semibold text-white">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span>The Technical Constraint (Problem)</span>
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Architecture Solution */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 font-display font-semibold text-white">
                    <Layers className="h-4 w-4 text-emerald-500" />
                    <span>Engineered Solution & Architecture</span>
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Full Stack Tech Details */}
                <div className="space-y-3">
                  <h4 className="flex items-center gap-2 font-display font-semibold text-white">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    <span>Engineered Stack</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {selectedProject.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-zinc-800 bg-zinc-900/20 flex gap-4">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-100 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] text-zinc-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Side Drawer for Secondary Project Index */}
      <AnimatePresence>
        {showSecondaryIndex && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSecondaryIndex(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xl bg-zinc-950 border-l border-zinc-800 shadow-2xl z-50 overflow-y-auto flex flex-col"
            >
              <div className="p-6 border-b border-zinc-800 bg-zinc-900/40 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">ADDITIONAL RECORDS</span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">Secondary Brand Index</h3>
                </div>
                <button
                  onClick={() => setShowSecondaryIndex(false)}
                  className="p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Index List scrollable container */}
              <div className="p-6 space-y-4 overflow-y-auto flex-1">
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  Here is a comprehensive index of additional enterprise-level storefronts, custom applications, and global e-commerce platforms Muhammad Usama has engineered, optimized, or remediated for international clients:
                </p>

                <div className="space-y-3">
                  {OTHER_PROJECTS.map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl border border-zinc-900 bg-zinc-900/45 hover:bg-zinc-900 hover:border-zinc-800/80 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <h4 className="font-display font-semibold text-white text-sm">{item.name}</h4>
                        <p className="text-xs text-zinc-400">{item.description}</p>
                      </div>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold tracking-wider text-emerald-400 hover:text-emerald-300 uppercase shrink-0"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-zinc-800 bg-zinc-900/20">
                <button
                  onClick={() => setShowSecondaryIndex(false)}
                  className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all border border-zinc-800 hover:border-zinc-700"
                >
                  Close Architecture Index
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

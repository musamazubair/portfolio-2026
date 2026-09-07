import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FEATURED_PROJECTS, 
  OTHER_PROJECTS, 
  Project 
} from "../data/portfolioData";
import { 
  ExternalLink, 
  Layers, 
  ShieldAlert, 
  Sparkles, 
  X, 
  BookOpen,
  CheckCircle2,
  Wrench,
  TrendingUp,
  ArrowUpRight,
  FileCode2,
  FolderGit2
} from "lucide-react";

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showSecondaryIndex, setShowSecondaryIndex] = useState(false);

  return (
    <div id="projects" className="py-12">
      {/* Section Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <FolderGit2 className="h-4 w-4 text-emerald-400" />
          <span>Showing {FEATURED_PROJECTS.length} Featured Technical Case Studies</span>
        </div>

        {/* Secondary Brands Index Drawer Trigger */}
        <button
          onClick={() => setShowSecondaryIndex(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer shadow-md self-start sm:self-auto"
        >
          <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
          <span>Secondary Agency Brands ({OTHER_PROJECTS.length})</span>
        </button>
      </div>

      {/* Main 2-Column Clean Case Studies Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {FEATURED_PROJECTS.map((project, idx) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="rounded-3xl glass-panel p-7 sm:p-8 border border-zinc-800/90 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-2xl relative overflow-hidden group"
          >
            {/* Top Glowing Ambient Blob */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

            <div>
              {/* Header Badging */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                    {project.client}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {project.category === "audit" ? "Architecture Audit" : "Theme Engineering"}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                  <Sparkles className="h-3 w-3 text-emerald-400" />
                  <span>Real-World Production</span>
                </div>
              </div>

              {/* Title & Overview */}
              <h3 className="font-display font-bold text-2xl text-white group-hover:text-emerald-300 transition-colors leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">
                {project.description}
              </p>

              {/* Metric Highlights Banner */}
              {project.metrics && (
                <div className="mt-6 grid grid-cols-3 gap-2.5 bg-zinc-950/60 border border-zinc-800/80 p-3.5 rounded-xl">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-wider block truncate">
                        {m.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 mt-1 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Structured Section 1: Problem */}
              <div className="mt-6 pt-5 border-t border-zinc-800/60">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  <span>Problem</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/40 border border-zinc-800/50 p-3.5 rounded-xl">
                  {project.problem}
                </p>
              </div>

              {/* Structured Section 2: Tech Stack */}
              <div className="mt-5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2.5">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Structured Section 3: Execution */}
              <div className="mt-5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  <Wrench className="h-3.5 w-3.5" />
                  <span>Execution</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/40 border border-zinc-800/50 p-3.5 rounded-xl">
                  {project.execution}
                </p>
              </div>

              {/* Structured Section 4: Outcome */}
              <div className="mt-5">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-300 uppercase tracking-wider mb-2">
                  <TrendingUp className="h-3.5 w-3.5" />
                  <span>Outcome</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed bg-emerald-950/20 border border-emerald-500/20 p-3.5 rounded-xl">
                  {project.outcome}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-5 border-t border-zinc-800/60 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider cursor-pointer"
              >
                <span>Inspect Technical Breakdown</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white transition-all"
              >
                Discuss Scope
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Slide-over Side Drawer for Deep Technical Inspection */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />

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
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
                      {selectedProject.client}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">Architecture Deep Dive</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-6 space-y-7 flex-1">
                {/* Metrics */}
                {selectedProject.metrics && (
                  <div className="grid grid-cols-3 gap-3 bg-zinc-900/60 border border-zinc-800 p-4 rounded-xl">
                    {selectedProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                          {m.label}
                        </span>
                        <span className="text-base font-bold font-mono text-emerald-400 mt-1 block">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Problem Breakdown */}
                <div className="space-y-2.5">
                  <h4 className="flex items-center gap-2 font-display font-semibold text-white text-sm">
                    <ShieldAlert className="h-4 w-4 text-amber-400" />
                    <span>Problem Statement & Architectural Bottleneck</span>
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Tech Stack Breakdown */}
                <div className="space-y-2.5">
                  <h4 className="flex items-center gap-2 font-display font-semibold text-white text-sm">
                    <Layers className="h-4 w-4 text-cyan-400" />
                    <span>Engineered Technology Stack</span>
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

                {/* Execution Detail */}
                <div className="space-y-2.5">
                  <h4 className="flex items-center gap-2 font-display font-semibold text-white text-sm">
                    <Wrench className="h-4 w-4 text-emerald-400" />
                    <span>Technical Execution & Implementation</span>
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                    {selectedProject.execution}
                  </p>
                </div>

                {/* Outcome Detail */}
                <div className="space-y-2.5">
                  <h4 className="flex items-center gap-2 font-display font-semibold text-white text-sm">
                    <TrendingUp className="h-4 w-4 text-emerald-300" />
                    <span>Measured Outcome & Delivery</span>
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed pl-6">
                    {selectedProject.outcome}
                  </p>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-zinc-800 bg-zinc-900/20 flex gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-zinc-100 hover:bg-emerald-400 text-zinc-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  <span>Inquire for Agency Overflow</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Secondary Projects Directory Drawer */}
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
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                    ADDITIONAL AGENCY WORK
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mt-1">
                    Secondary Brands Directory
                  </h3>
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
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  Additional enterprise Shopify storefronts, B2B portals, and brand implementations engineered or remediated across agency client portfolios:
                </p>

                <div className="space-y-3">
                  {OTHER_PROJECTS.map((item, index) => (
                    <div 
                      key={index}
                      className="p-4 rounded-xl border border-zinc-900 bg-zinc-900/45 hover:bg-zinc-900 hover:border-zinc-800 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <h4 className="font-display font-semibold text-white text-sm">{item.name}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
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
                  Close Directory
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

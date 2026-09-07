import React from "react";
import { motion } from "motion/react";
import { 
  GitMerge, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  Sparkles 
} from "lucide-react";
import { SERVICES_DATA, ServiceItem } from "../data/portfolioData";

export default function ServicesGrid() {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "checkout-extensibility":
        return <GitMerge className="h-6 w-6 text-emerald-400" />;
      case "headless-commerce":
        return <Layers className="h-6 w-6 text-cyan-400" />;
      case "performance-ada":
        return <ShieldCheck className="h-6 w-6 text-indigo-400" />;
      default:
        return <Sparkles className="h-6 w-6 text-emerald-400" />;
    }
  };

  const getAccentBorder = (id: string) => {
    switch (id) {
      case "checkout-extensibility":
        return "hover:border-emerald-500/40 hover:shadow-emerald-500/5";
      case "headless-commerce":
        return "hover:border-cyan-500/40 hover:shadow-cyan-500/5";
      case "performance-ada":
        return "hover:border-indigo-500/40 hover:shadow-indigo-500/5";
      default:
        return "hover:border-emerald-500/40";
    }
  };

  return (
    <section id="services" className="py-16 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold mb-3">
            <span>Specialized Engineering Services</span>
          </div>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-white">
            Agency Overflow & Technical Capabilities
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            High-velocity, white-label engineering capacity engineered for Technical Directors at Shopify Plus agencies. Zero onboarding friction, strict Git workflows, and production-grade delivery.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/60 border border-zinc-800 px-3.5 py-2 rounded-xl shrink-0">
          <Clock className="h-4 w-4 text-emerald-400" />
          <span>Sprint & Retainer Capacity Active</span>
        </div>
      </div>

      {/* 3-Column Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {SERVICES_DATA.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className={`rounded-2xl glass-panel p-7 border border-zinc-800/80 flex flex-col justify-between transition-all duration-500 group shadow-xl ${getAccentBorder(service.id)}`}
          >
            <div>
              {/* Header with Icon & Badge */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 shadow-inner group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.id)}
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                  {service.badge}
                </span>
              </div>

              {/* Service Title */}
              <h3 className="font-display font-semibold text-xl text-white group-hover:text-emerald-300 transition-colors">
                {service.title}
              </h3>

              {/* Technical Description */}
              <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                {service.description}
              </p>

              {/* Compliance Highlight / Callout */}
              {service.complianceHighlight && (
                <div className="mt-4 p-3 rounded-xl bg-zinc-900/70 border border-zinc-800/70 flex items-start gap-2.5">
                  <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] font-mono text-zinc-300 leading-snug">
                    {service.complianceHighlight}
                  </p>
                </div>
              )}

              {/* Core Capabilities List */}
              <div className="mt-6 pt-5 border-t border-zinc-800/50">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-3 font-semibold">
                  Technical Deliverables:
                </span>
                <ul className="space-y-2.5">
                  {service.coreCapabilities.map((item, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-normal">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Tech Stack Tags & Action */}
            <div className="mt-8 pt-5 border-t border-zinc-800/50">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 font-semibold">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono bg-zinc-900/90 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider group/link"
              >
                <span>Request Scope Evaluation</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

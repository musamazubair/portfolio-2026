import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Menu, 
  X, 
  Sparkles, 
  Clock, 
  Briefcase,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

import { 
  PERSONAL_INFO, 
  CAREER_TIMELINE 
} from "./data/portfolioData";
import ServicesGrid from "./components/ServicesGrid";
import ProjectGrid from "./components/ProjectGrid";
import PDPSimulator from "./components/PDPSimulator";
import ContactForm from "./components/ContactForm";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "pdp-lab", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-mesh min-h-screen text-zinc-300 relative selection:bg-emerald-500/20 selection:text-emerald-300 overflow-x-hidden">
      
      {/* Decorative Top Glowing Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-40 glass-panel border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center text-zinc-950 font-display font-bold text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-all">
              USZ
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-wide text-white group-hover:text-emerald-400 transition-all">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 group-hover:text-emerald-400 transition-all">
                Senior Shopify Developer • Agency Overflow
              </span>
            </div>
          </a>

          {/* Desktop Navigation Anchors */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "home", label: "Overview" },
              { id: "services", label: "Services" },
              { id: "projects", label: "Case Studies" },
              { id: "pdp-lab", label: "PDP Lab" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Agency Inquiries" }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeSection === link.id
                    ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                    : "text-zinc-400 hover:text-zinc-200 border border-transparent hover:bg-zinc-900/45"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action Trigger */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-zinc-100 hover:bg-emerald-400 text-zinc-950 font-bold hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] text-xs tracking-wider uppercase hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>Agency Overflow</span>
            </a>
          </div>

          {/* Mobile Hamburger trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900/60 border border-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-zinc-800 bg-zinc-950/95"
            >
              <div className="px-6 py-6 space-y-3">
                {[
                  { id: "home", label: "Overview" },
                  { id: "services", label: "Services" },
                  { id: "projects", label: "Case Studies" },
                  { id: "pdp-lab", label: "PDP Lab" },
                  { id: "experience", label: "Experience" },
                  { id: "contact", label: "Agency Inquiries" }
                ].map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-colors ${
                      activeSection === link.id
                        ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-zinc-900">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-emerald-400 text-zinc-950 font-bold uppercase text-xs tracking-wider transition-all"
                  >
                    <Briefcase className="h-4 w-4" />
                    <span>Inquire for Agency Overflow</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto px-6">

        {/* 1. Hero Section */}
        <section id="home" className="py-20 md:py-28 flex flex-col items-center text-center relative">
          
          {/* Subtle Accent Badging */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
            <span>Senior Shopify Plus Agency Overflow Specialist</span>
          </motion.div>

          {/* Core Headline: Focus on 6 years of experience specializing in Checkout Extensibility, Headless Commerce, and ADA Compliance */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight max-w-5xl"
          >
            Senior Shopify Developer with 6 Years Specializing in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-400">Checkout Extensibility</span>, Headless Commerce, and ADA Compliance.
          </motion.h1>

          {/* Sub-headline: Highlight availability for agency overflow, white-label development, and retainer contracts */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-300 text-sm md:text-base lg:text-lg max-w-3xl mt-6 leading-relaxed"
          >
            Available for agency overflow, white-label development, and retainer contracts. Delivering production-ready Shopify Plus storefronts, August 2026 deprecation migrations, and decoupled Next.js/Hydrogen architectures with zero ramp-up overhead.
          </motion.p>

          {/* Call to Action: Point directly to the contact form aimed at Technical Directors */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-100 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all text-zinc-950 font-bold text-xs tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <Briefcase className="h-4 w-4" />
              <span>Contact for Agency Overflow Capacity</span>
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <span>Explore Technical Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Key Engineering Benchmarks Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl glass-panel border border-zinc-800/60 shadow-xl"
          >
            {[
              { label: "Engineering Practice", value: "6 Years" },
              { label: "August 2026 Deprecations", value: "Ready" },
              { label: "WCAG Remediation (WAVE)", value: "100% Pass" },
              { label: "Agency Onboarding Lag", value: "0 Days" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-5 text-center flex flex-col justify-center border-zinc-800/40 odd:border-r border-r-0 md:border-r md:last:border-r-0"
              >
                <div className="font-display font-bold text-2xl md:text-3xl text-emerald-400 tracking-tight">{stat.value}</div>
                <div className="text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </section>

        {/* 2. Services Grid Section (3-Column Grid) */}
        <ServicesGrid />

        {/* 3. Project Showcase Section (Problem, Tech Stack, Execution, Outcome) */}
        <section id="case-studies" className="py-16 border-t border-zinc-900">
          <div className="mb-4">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">PRODUCTION ARCHITECTURES</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mt-1">Real-World Case Studies</h2>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Technical case studies highlighting prototype implementations, Contentful/Supabase data modeling, Liquid AJAX cart drawer mechanics, and advanced frontend UI execution.
            </p>
          </div>

          <ProjectGrid />
        </section>

        {/* 4. Interactive PDP Lab / Simulator */}
        <section id="pdp-lab" className="py-16 border-t border-zinc-900">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">INTERACTIVE PROTOTYPING</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mt-1">Custom PDP Buy-Box Lab</h2>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              Interactive demonstration of accessibility-compliant variant selectors, dynamic inventory state reconciliation, and screen-reader ARIA live region updates.
            </p>
          </div>

          <PDPSimulator />
        </section>

        {/* 5. Professional Timeline */}
        <section id="experience" className="py-16 border-t border-zinc-900">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">CHRONOLOGY OF WORK</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mt-1">Professional Experience</h2>
            <p className="text-xs md:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              6-year track record delivering enterprise-grade Shopify Plus themes, checkout extensions, and headless frontend architecture for global clients and digital agencies.
            </p>
          </div>

          <div className="relative border-l border-zinc-800 pl-6 sm:pl-10 space-y-12 ml-4">
            {CAREER_TIMELINE.map((exp, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
                className="relative"
              >
                {/* Glowing Node Point */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-emerald-500 shadow-md shadow-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {exp.role}
                    </h3>
                    <div className="text-xs text-zinc-400 font-semibold mt-0.5">
                      {exp.company} • <span className="text-zinc-500 font-normal">{exp.location}</span>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-emerald-400 uppercase font-semibold h-fit self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-3 pl-4">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="list-disc text-xs text-zinc-400 leading-relaxed marker:text-emerald-500">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Education Card */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl glass-panel p-6 border border-zinc-800/60 shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-2">AGENCY INTEGRATION SPEC</span>
                <h3 className="font-display font-semibold text-base text-white">Workflow & Collaboration Tooling</h3>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  Directly integrates into agency environments utilizing Jira/Linear, Figma design token translation, GitHub flow/PR reviews, and automated CI/CD deployment pipelines on Vercel, Netlify, or Shopify CLI.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Shopify CLI 3.x", "Theme Check", "GitHub Actions", "Vercel CI", "Figma", "Linear / Jira"].map((tool) => (
                    <span key={tool} className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/30 text-[10px] font-mono text-zinc-500">
                Zero onboarding friction for active agency sprint cycles.
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl glass-panel p-6 border border-zinc-800/60 shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-2">ACADEMIC FOUNDATION</span>
                <h3 className="font-display font-semibold text-base text-white">BS, Software Engineering</h3>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  Rigorous grounding in software architecture patterns, data structures, relational database normalization, and distributed system design.
                </p>
                <div className="mt-5 space-y-1.5">
                  <div className="text-sm font-semibold text-white">Abasyn University</div>
                  <div className="text-xs text-zinc-400">Islamabad Campus, Pakistan</div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/30 text-[10px] font-mono text-zinc-500 flex justify-between">
                <span>Graduated 2018</span>
                <span className="text-emerald-400 font-semibold">4-Year Degree</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 6. Contact Section aimed at Technical Directors */}
        <section id="contact" className="py-20 border-t border-zinc-900">
          <ContactForm />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950/80 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display font-bold text-base text-white">{PERSONAL_INFO.name}</div>
            <p className="text-xs text-zinc-500 mt-1">
              Senior Shopify Developer • Checkout Extensibility, Headless Commerce & ADA Compliance
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="Email direct"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center text-[10px] text-zinc-600 mt-8 font-mono border-t border-zinc-900/40 pt-6">
          © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()} • SENIOR SHOPIFY DEVELOPER FOR SHOPIFY PLUS AGENCIES
        </div>
      </footer>

    </div>
  );
}

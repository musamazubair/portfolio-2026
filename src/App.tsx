import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  Sparkles, 
  Clock, 
  Laptop, 
  Accessibility, 
  Copy, 
  Check,
  ShoppingBag,
  Code,
  Cpu,
  Workflow,
  ExternalLink,
  MessageSquare
} from "lucide-react";

import { 
  PERSONAL_INFO, 
  SKILL_CATEGORIES, 
  CAREER_TIMELINE 
} from "./data/portfolioData";
import PDPSimulator from "./components/PDPSimulator";
import ProjectGrid from "./components/ProjectGrid";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");

  // Copy email utility
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Real-time Clock for Lahore, Pakistan
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setCurrentTime(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "pdp-lab", "projects", "experience", "contact"];
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

  // Icon mapping function for skills
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingBag": return <ShoppingBag className="h-6 w-6" />;
      case "Code": return <Code className="h-6 w-6" />;
      case "Accessibility": return <Accessibility className="h-6 w-6" />;
      case "Cpu": return <Cpu className="h-6 w-6" />;
      case "Workflow": return <Workflow className="h-6 w-6" />;
      default: return <Laptop className="h-6 w-6" />;
    }
  };

  return (
    <div className="bg-mesh min-h-screen text-zinc-300 relative selection:bg-emerald-500/20 selection:text-emerald-300 overflow-x-hidden">
      
      {/* Decorative Top Glowing Blob */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Sticky Premium Navigation */}
      <nav className="sticky top-0 z-40 glass-panel border-b border-white/5 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 flex items-center justify-center text-zinc-950 font-display font-bold text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-all">
              USZ
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-wide text-white group-hover:text-emerald-400 transition-all">
                M. Usama Zubair
              </span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-500 group-hover:text-emerald-400 transition-all">
                Shopify Frontend Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Anchors */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: "home", label: "Overview" },
              { id: "skills", label: "Skills" },
              { id: "pdp-lab", label: "PDP Lab" },
              { id: "projects", label: "Case Studies" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Contact" }
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
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
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Inquire Storefront</span>
            </a>
          </div>

          {/* Mobile Hamburguer trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-xl bg-zinc-900/60 border border-zinc-800 transition-colors"
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
                  { id: "skills", label: "Skills" },
                  { id: "pdp-lab", label: "Shopify PDP Lab" },
                  { id: "projects", label: "Case Studies" },
                  { id: "experience", label: "Experience" },
                  { id: "contact", label: "Contact" }
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
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-zinc-100 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] text-zinc-950 font-bold uppercase text-xs tracking-wider transition-all"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Inquire Storefront</span>
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
            <span>High-Performance Custom Storefront Specialist</span>
          </motion.div>

          {/* Core Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-none max-w-4xl"
          >
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-emerald-400">Shopify Experiences</span> with Zero Compromise.
          </motion.h1>

          {/* Subtitle details */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-sm md:text-base lg:text-lg max-w-2xl mt-6 leading-relaxed"
          >
            {PERSONAL_INFO.profileSummary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10"
          >
            <a
              href="#pdp-lab"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all text-zinc-950 font-bold text-xs tracking-wider uppercase shadow-xl"
            >
              Launch Custom PDP Lab
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all text-zinc-300 hover:text-white font-semibold text-xs tracking-wider uppercase"
            >
              Explore Case Studies
            </a>
          </motion.div>

          {/* Key Achievements Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl glass-panel border border-zinc-800/60 shadow-xl"
          >
            {[
              { label: "Engineering Practice", value: "6+ Years" },
              { label: "Storefronts Shipped", value: "50+" },
              { label: "ADA Compliance Rate", value: "100%" },
              { label: "Avg PDP Load Time Reduction", value: "-35%" }
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


        {/* 2. Skills Section - Bento Grid */}
        <section id="skills" className="py-16 border-t border-zinc-900">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">CORE COMPETENCIES</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mt-1">Asymmetric Architecture Grid</h2>
            <p className="text-xs text-zinc-400 mt-2 max-w-xl">
              Categorized skills representing a blend of standard Shopify themes, bespoke performance components, and strict WCAG/ADA accessibility compliances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => {
              // Determine Bento sizes
              let sizeClass = "md:col-span-4";
              if (category.size === "large") sizeClass = "md:col-span-6";
              if (category.size === "medium") sizeClass = "md:col-span-6";
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={category.key}
                  className={`${sizeClass} rounded-2xl glass-panel p-6 border border-zinc-800/80 flex flex-col justify-between hover:border-zinc-700/80 hover:shadow-xl transition-all duration-500 group`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:text-emerald-300 transition-colors`}>
                        {getSkillIcon(category.icon)}
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                        {category.size} card
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-white group-hover:text-emerald-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Bullet Sub-Skills */}
                  <div className="mt-6 pt-5 border-t border-zinc-800/40">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">Core Scope Includes:</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>


        {/* 3. Shopify PDP Lab / Playground */}
        <section id="pdp-lab" className="py-16 border-t border-zinc-900">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">INTERACTIVE PROTOTYPING</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mt-1">Live Custom Buy-Box Lab</h2>
            <p className="text-xs text-zinc-400 mt-2 max-w-xl">
              Interact with the custom product selector below. Enable the <strong>WCAG Assist Mode</strong> to visualize computed ARIA structures and simulated screen-reader log streams.
            </p>
          </div>

          <PDPSimulator />
        </section>


        {/* 4. Featured Projects */}
        <section id="case-studies" className="py-16 border-t border-zinc-900">
          <div className="mb-4">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">CLIENT CASE ARCHITECTURES</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mt-1">Featured Production Work</h2>
            <p className="text-xs text-zinc-400 mt-2 max-w-xl">
              Real-world engineering case studies focusing on performance optimizations, accessibility remediation, and bespoke theme features.
            </p>
          </div>

          <ProjectGrid />
        </section>


        {/* 5. Career Path Timeline */}
        <section id="experience" className="py-16 border-t border-zinc-900">
          <div className="mb-12">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">CHRONOLOGY OF WORK</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white mt-1">Professional Trajectory</h2>
            <p className="text-xs text-zinc-400 mt-2 max-w-xl">
              Muhammad Usama has directed engineering delivery across leading agencies, e-commerce stores, and high-growth brands.
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

          {/* Education & Additional Background Segment */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Additional Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl glass-panel p-6 border border-zinc-800/60 shadow-lg flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold block mb-2">ADDITIONAL BACKGROUND</span>
                <h3 className="font-display font-semibold text-base text-white">Earlier Industry Contributions</h3>
                <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                  WordPress, PHP/MySQL, and early-career native Android application engineering across specialized tech agencies (2016 – 2019):
                </p>
                <div className="mt-4 space-y-2.5">
                  <div className="text-xs text-zinc-300 font-semibold flex justify-between">
                    <span>Web Application Developer</span>
                    <span className="text-zinc-500 font-mono text-[10px]">T-Horizon</span>
                  </div>
                  <div className="text-xs text-zinc-300 font-semibold flex justify-between">
                    <span>Web Developer</span>
                    <span className="text-zinc-500 font-mono text-[10px]">SoftVillas</span>
                  </div>
                  <div className="text-xs text-zinc-300 font-semibold flex justify-between">
                    <span>Web & Android Developer</span>
                    <span className="text-zinc-500 font-mono text-[10px]">Swarm IT Solutions</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-800/30 text-[10px] font-mono text-zinc-500">
                Foundational full-stack and mobile client competencies.
              </div>
            </motion.div>

            {/* Education Card */}
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
                  Comprehensive grounding in computer science foundations, algorithm architectures, design patterns, and full-stack system implementation.
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


        {/* 6. Contact / Call to Action */}
        <section id="contact" className="py-20 border-t border-zinc-900">
          <div className="rounded-3xl glass-panel border border-zinc-800/80 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            
            {/* Visual background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 via-zinc-900/5 to-zinc-950 pointer-events-none" />
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">GET IN TOUCH</span>
              <h2 className="font-display font-medium text-3xl md:text-5xl text-white">Let&apos;s Build Something Uncompromising.</h2>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                Seeking a senior specialist to remediate ADA accessibility compliance, optimize core storefront web vitals, or architect high-traffic bespoke Shopify custom checkout/PDP themes?
              </p>

              {/* Real-time Pakistan Clock */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 max-w-full overflow-hidden whitespace-nowrap">
                <Clock className="h-3.5 w-3.5 text-emerald-400 animate-pulse shrink-0" />
                <span className="font-mono text-[9px] sm:text-[10px] whitespace-nowrap">CURRENT TIME IN LAHORE: <strong className="text-white">{currentTime || "--:--:--"}</strong></span>
              </div>

              {/* Direct Action triggers */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer hover:scale-[1.01]"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-zinc-400" />}
                  <span>{copiedEmail ? "Copied usamazubair149@gmail.com" : "Copy Email Address"}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all text-xs font-semibold uppercase tracking-wider text-zinc-950 font-bold"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send Direct Message</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Details */}
      <footer className="border-t border-zinc-900 bg-zinc-950/80 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="font-display font-bold text-base text-white">Muhammad Usama Zubair</div>
            <p className="text-xs text-zinc-500 mt-1">Shopify Frontend Developer • Custom Storefronts, Accessibility & App Integrations</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:usamazubair149@gmail.com"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-usama-zubair/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center text-[10px] text-zinc-600 mt-8 font-mono border-t border-zinc-900/40 pt-6">
          © {new Date().getFullYear()} MUHAMMAD USAMA ZUBAIR. ALL RIGHTS RESERVED. HANDCRAFTED IN VITE & TAILWIND CSS v4.
        </div>
      </footer>

    </div>
  );
}

import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  Building2, 
  Briefcase,
  Terminal
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    agency: "",
    email: "",
    engagementType: "agency-overflow",
    timeline: "immediate",
    scope: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Live time display for agency overlap
  React.useEffect(() => {
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const mailtoSubject = encodeURIComponent(
    `[Technical Director Inquiry] ${formData.agency || "Agency"} - ${formData.engagementType}`
  );
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nAgency: ${formData.agency}\nEmail: ${formData.email}\nEngagement Type: ${formData.engagementType}\nTarget Timeline: ${formData.timeline}\n\nTechnical Requirements / Scope:\n${formData.scope}`
  );

  return (
    <div className="rounded-3xl glass-panel border border-zinc-800/90 p-6 sm:p-10 md:p-12 relative overflow-hidden shadow-2xl">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 via-zinc-900/5 to-zinc-950 pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
            <span>DIRECT AGENCY INQUIRY PIPELINE</span>
          </div>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-white">
            Hire Senior Overflow Capacity
          </h2>
          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
            Directly available for Technical Directors requiring senior-level Shopify Plus, Checkout Extensibility, Headless (Next.js/Hydrogen), and WCAG remediation overflow.
          </p>

          {/* Timezone / Availability Pill */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-[10px] font-mono text-zinc-400">
              <Clock className="h-3 w-3 text-emerald-400 animate-pulse" />
              <span>CURRENT LOCAL TIME (UTC+5): <strong className="text-white">{currentTime || "--:--:--"}</strong></span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span>US / EU AGENCY SPRINT OVERLAP</span>
            </div>
          </div>
        </div>

        {/* Contact Form Container */}
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-2xl bg-zinc-900/80 border border-emerald-500/30 text-center space-y-5"
          >
            <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="font-display font-semibold text-xl text-white">Inquiry Details Captured</h3>
            <p className="text-xs text-zinc-300 max-w-lg mx-auto leading-relaxed">
              Thank you for reaching out. You can send the formatted brief directly via email client or copy the direct address below for immediate coordination.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-100 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" />
                <span>Open in Email Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs uppercase tracking-wider text-white font-mono flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-zinc-400" />}
                <span>{copiedEmail ? "Copied" : PERSONAL_INFO.email}</span>
              </button>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 underline uppercase tracking-wider"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Technical Director Name */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Technical Director / Lead Name *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              {/* Agency Name */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Building2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Agency Name & Website *</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.agency}
                  onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                  placeholder="e.g. Acme Commerce (acme.agency)"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Work Email */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Mail className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Work Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@acme.agency"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              {/* Engagement Type */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Engagement Structure *</span>
                </label>
                <select
                  value={formData.engagementType}
                  onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white text-xs focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer"
                >
                  <option value="agency-overflow">Agency Overflow Sprints (Flexible Senior Hours)</option>
                  <option value="checkout-migration">Checkout Extensibility Migration (August 2026 Deadline)</option>
                  <option value="headless-implementation">Headless Commerce Architecture (Next.js / Hydrogen)</option>
                  <option value="ada-remediation">ADA / WCAG Accessibility Remediation</option>
                  <option value="white-label-retainer">White-Label Dedicated Monthly Retainer</option>
                </select>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                <span>Target Commencement / Sprint Timeline</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "immediate", label: "Immediate (Current Sprint)" },
                  { value: "two-weeks", label: "Within 2 Weeks" },
                  { value: "planned-retainer", label: "Monthly Retainer (Q3/Q4)" }
                ].map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: t.value })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-mono text-center border transition-all cursor-pointer ${
                      formData.timeline === t.value
                        ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/40"
                        : "bg-zinc-950/70 text-zinc-400 border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Scope / Tech Requirements */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 uppercase tracking-wider">
                <span>Technical Scope / Stack Requirements</span>
              </label>
              <textarea
                rows={4}
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                placeholder="Briefly describe the client project, repository setup, tech stack (e.g. Liquid, Checkout UI Extensions, Next.js, Contentful), or specific deliverables needed..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-950/70 border border-zinc-800 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-emerald-500/50 transition-colors leading-relaxed"
              />
            </div>

            {/* Form Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-100 hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] text-zinc-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit Technical Director Brief</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>Direct Inquiries:</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-emerald-400 hover:text-emerald-300 underline font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>{PERSONAL_INFO.email}</span>
                  {copiedEmail ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

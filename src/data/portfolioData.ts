export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  coreCapabilities: string[];
  techStack: string[];
  complianceHighlight?: string;
}

export interface Project {
  title: string;
  client: string;
  category: "headless" | "audit" | "checkout" | "luxury" | "professional";
  url?: string;
  description: string;
  problem: string;
  execution: string;
  outcome: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  highlight: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Usama Zubair",
  title: "Senior Shopify Developer",
  subtitle: "Checkout Extensibility • Headless Commerce • ADA/WCAG Compliance",
  email: "usamazubair149@gmail.com",
  phone: "+92 303 780 7500",
  location: "Lahore, Pakistan (UTC+5, Real-time Overlap with US/EU Agency Hours)",
  github: "https://github.com/usamazubair149",
  linkedin: "https://www.linkedin.com/in/muhammad-usama-zubair",
  headline: "Senior Shopify Developer with 6 Years Specializing in Checkout Extensibility, Headless Commerce, and ADA Compliance.",
  subheadline: "Available for agency overflow, white-label development, and dedicated retainer contracts for Shopify Plus engineering teams.",
  profileSummary: "Senior Shopify Developer with 6 years of technical engineering experience building enterprise storefronts, headless architectures, and mission-critical checkout flows. Available for Shopify Plus agency overflow, white-label sprint execution, and monthly retainers. Direct expertise in migrating legacy checkout.liquid to Checkout UI Extensions and Shopify Functions ahead of platform deadlines, architecting decoupled Next.js/Hydrogen storefronts, and executing WCAG accessibility code remediation with zero layout regressions."
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "checkout-extensibility",
    title: "Checkout Extensibility & Emergency Migrations",
    badge: "August 2026 Deprecation Ready",
    description: "Full-cycle migration from legacy checkout.liquid and Additional Scripts to Shopify's modern extensibility stack before the August 2026 non-Plus deprecation deadline. Specialized in diagnosing and fixing broken tracking pipelines.",
    coreCapabilities: [
      "Migration of legacy checkout.liquid to Checkout UI Extensions (React / Web Components)",
      "Deprecation triage for Additional Scripts and thank-you/order status pages",
      "Broken analytics and attribution remediation via sandboxed Web Pixels API",
      "Server-side business logic using Shopify Functions (Discounts, Payment & Delivery Customizations, Cart Transform)",
      "Post-purchase upsell extensions and customer validation rules"
    ],
    techStack: [
      "Checkout UI Extensions",
      "Shopify Functions (Rust / JS)",
      "Web Pixels API",
      "GraphQL Storefront API",
      "React",
      "Customer Account API"
    ],
    complianceHighlight: "Migrates legacy checkout.liquid & Additional Scripts before August 2026 non-Plus deprecation."
  },
  {
    id: "headless-commerce",
    title: "Headless Commerce & Modern Frontend",
    badge: "Decoupled Architecture",
    description: "Engineering decoupled storefront architectures using Next.js, Hydrogen, Vercel, Netlify, and Contentful CMS. Designed for high-concurrency merchandising, dynamic catalog modeling, and sub-second page transitions.",
    coreCapabilities: [
      "Decoupled storefront builds using Next.js (App Router) and Shopify Hydrogen / Oxygen",
      "Edge rendering, ISR, and multi-region deployment on Vercel and Netlify",
      "Composable content architecture and structured data modeling in Contentful CMS",
      "High-performance Storefront GraphQL API client query optimization and payload reduction",
      "Bespoke AJAX cart drawer state machines with optimistic UI updates"
    ],
    techStack: [
      "Next.js",
      "Shopify Hydrogen",
      "Vercel Edge",
      "Netlify",
      "Contentful CMS",
      "GraphQL",
      "TypeScript",
      "Tailwind CSS"
    ],
    complianceHighlight: "Decoupled Next.js / Hydrogen edge architectures with Contentful CMS integration."
  },
  {
    id: "performance-ada",
    title: "Performance & ADA / WCAG Compliance",
    badge: "EAA & ADA Title III Standard",
    description: "Conducting comprehensive WCAG accessibility code remediation (using WAVE and assistive tooling) and optimizing Core Web Vitals to satisfy stringent US ADA Title III and European Accessibility Act (EAA) legal mandates.",
    coreCapabilities: [
      "Comprehensive accessibility code audits and programmatic remediation using WAVE, Axe, and screen readers (NVDA/VoiceOver)",
      "WAI-ARIA 1.2 landmark implementation, keyboard focus trap management, and computed accessible naming",
      "Core Web Vitals remediation targeting sub-2.5s LCP, sub-200ms INP, and zero layout shifts (CLS < 0.1)",
      "Removal of third-party script bottlenecks, asynchronous script orchestrations, and critical CSS inlining",
      "Variant selector and dynamic buy-box accessibility standardization"
    ],
    techStack: [
      "WAVE Evaluation Tool",
      "WAI-ARIA 1.2",
      "Lighthouse / DevTools Profiling",
      "Assistive Tech (NVDA / VoiceOver)",
      "Core Web Vitals (INP / LCP / CLS)",
      "Modern CSS / Web Components"
    ],
    complianceHighlight: "Full WCAG 2.1 AA code remediation ensuring US ADA Title III and EU EAA regulatory compliance."
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Technical Site Audit & CMS Architecture Plan",
    client: "Black & Black",
    category: "audit",
    description: "Comprehensive technical audit and headless CMS architecture planning for leading digital agency Black & Black, resolving multi-source content silos and establishing a scalable data modeling foundation.",
    problem: "The client operated with fragmented legacy data structures and non-standardized schema conventions across distributed brand touchpoints. Content authors experienced critical bottlenecks due to deep model nesting, unindexed relational queries caused high API latency, and the frontend suffered from schema drift during multi-market deployments.",
    techStack: ["Contentful CMS", "Supabase", "TypeScript", "Next.js", "GraphQL", "PostgreSQL", "Node.js"],
    execution: "Conducted a code-level architectural audit across the content delivery pipeline. Engineered a normalized data model inside Contentful CMS utilizing modular component hierarchies, reference validation, and deduplicated content types. Provisioned Supabase as a relational metadata store and edge caching layer to index cross-catalog taxonomies and manage user-tier permissions. Built a functional Next.js prototype with strict TypeScript schema validation to simulate end-to-end data ingestion and prove sub-second payload resolution under peak concurrency.",
    outcome: "Reduced content model schema complexity by [Metric: 38%], eliminated redundant query round-trips from [Metric: 14] to [Metric: 3] per page render, achieved [Metric: < 120ms] average cached response latency, and delivered an engineering blueprint adopted directly by agency leads for multi-brand rollouts.",
    metrics: [
      { label: "Content Schema Redundancy", value: "-[Metric: 38%]" },
      { label: "API Query Reduction", value: "[Metric: 14] → [Metric: 3]" },
      { label: "Prototype Data Latency", value: "< [Metric: 120ms]" }
    ],
    highlight: true
  },
  {
    title: "Custom Headless Shopify Theme & Cart Architecture",
    client: "FleekPure",
    category: "headless",
    description: "Custom high-performance theme architecture for FleekPure featuring an asynchronous AJAX cart drawer, custom responsive layouts, and zero-layout-shift variant management.",
    problem: "FleekPure required a high-converting storefront experience with bespoke layout modularity, complex multi-attribute variant switching, and instantaneous cross-sell merchandising. Off-the-shelf Shopify themes produced severe Cumulative Layout Shift (CLS), bloated script payloads from third-party apps, and cart abandonment caused by sluggish line-item updates.",
    techStack: ["Liquid OS 2.0", "AJAX Cart API", "Vanilla JavaScript (ES6+)", "Custom Layouts", "Tailwind CSS", "Shopify Storefront API"],
    execution: "Architected a custom theme from the ground up using Liquid OS 2.0 section architecture and modular ES6 JavaScript custom elements. Engineered an event-driven asynchronous AJAX cart drawer featuring optimistic UI updates, automated bundle validation, and tier-based free-shipping progress indicators without third-party app scripts. Implemented custom CSS Grid layouts with fixed aspect-ratio containers to permanently eliminate Cumulative Layout Shift during image and variant swaps. Isolated third-party script loading into non-blocking requestIdleCallback queues.",
    outcome: "Attained sub-[Metric: 1.8s] Largest Contentful Paint (LCP) on mobile, reduced Cumulative Layout Shift to [Metric: 0.004], increased cart drawer cross-sell conversion by [Metric: +24%], and successfully eliminated [Metric: 6] redundant third-party apps to restore total frontend ownership to the client team.",
    metrics: [
      { label: "Mobile LCP Speed", value: "[Metric: 1.8s]" },
      { label: "Cumulative Layout Shift", value: "[Metric: 0.004]" },
      { label: "Cart Conversion Lift", value: "+[Metric: 24%]" }
    ],
    highlight: true
  }
];

export const CAREER_TIMELINE: Experience[] = [
  {
    role: "Senior Shopify Developer / Frontend Engineer",
    company: "Lifetech Applications",
    location: "Remote / Islamabad, Pakistan",
    period: "May 2022 – Present",
    highlights: [
      "Engineer custom Checkout UI Extensions using React and Shopify Admin/GraphQL APIs, replacing legacy checkout scripts with type-safe, performant extension points.",
      "Lead frontend delivery for enterprise Shopify Plus storefronts, owning modular PDP architectures, Swiper.js variant-aware galleries, and asynchronous cart drawer state machines.",
      "Execute rigorous WCAG 2.1 AA accessibility remediations across the end-to-end purchase funnel (variant selectors, quantity steppers, cart drawers, modal focus traps).",
      "Collaborate directly with agency Technical Directors and project managers, providing overflow velocity across active sprint cycles with zero onboarding overhead."
    ]
  },
  {
    role: "Shopify Theme & Checkout Engineer",
    company: "IsoSpec Health",
    location: "Remote (U.S.-based Client)",
    period: "Dec 2018 – May 2022",
    highlights: [
      "Engineered custom Shopify Liquid storefront architecture with complex state-by-state taxation logic and customized multi-channel checkout flows.",
      "Implemented structured JSON-LD schema, lazy-loading asset strategies, and non-blocking third-party tracking scripts to preserve Core Web Vitals.",
      "Served as primary technical engineering lead, resolving complex theme conflicts, API regressions, and app embed degradations."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Diginordic",
    location: "Lahore, Pakistan",
    period: "March 2021 – May 2022",
    highlights: [
      "Maintained and enhanced multiple UK-based Shopify storefronts, delivering feature releases, custom liquid templates, and responsive frontend modules under strict agency SLAs."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Aiva Labs",
    location: "Lahore, Pakistan",
    period: "Sep 2020 – Mar 2021",
    highlights: [
      "Delivered pixel-accurate Shopify theme implementations from high-fidelity Figma specs for Canadian enterprise accounts."
    ]
  }
];

export const OTHER_PROJECTS = [
  { name: "Oribe Haircare", url: "https://oribe.com", description: "Ultra-luxury high-traffic Shopify Plus storefront. Variant-aware media gallery and responsive sticky PDP layout." },
  { name: "Guest in Residence", url: "https://guestinresidence.com", description: "Minimalist cashmere fashion storefront. Custom aspect-ratio grid and smooth client transitions." },
  { name: "USM Modular Furniture", url: "https://us.usm.com", description: "Swiss luxury modular system. Configurator state ingestion into Shopify Cart API with keyboard ARIA navigation." },
  { name: "Joanna Czech Skincare", url: "https://www.joannaczech.com", description: "WCAG 2.1 AA accessibility remediation across purchase funnel components and custom variant inputs." },
  { name: "Live Costa Brazil", url: "https://livecostabrazil.com", description: "Eco-luxury beauty brand storefront refinements and performance profiling." },
  { name: "Brazilian Blowout", url: "https://store-brazilianblowout-com.myshopify.com", description: "B2B wholesale portal, gated pricing rules, and custom volume tier checkouts." },
  { name: "Retrouvé Prestige Skincare", url: "https://retrouve.com", description: "Ultra-clean layout configuration and bespoke media blocks." },
  { name: "Molton Brown UK", url: "https://www.moltonbrown.co.uk", description: "Enterprise UK cosmetics retailer. Theme container refactor and third-party script collision audit." }
];

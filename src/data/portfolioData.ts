export interface SkillCategory {
  title: string;
  key: string;
  description: string;
  items: string[];
  icon: string; // lucide icon name
  accentColor: string; // Tailwind accent color class
  size: "large" | "medium" | "small"; // for bento layout grid-spanning
}

export interface Project {
  title: string;
  category: "luxury" | "lifestyle" | "professional" | "health";
  url: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics?: { label: string; value: string }[];
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
  title: "Shopify Frontend Developer",
  subtitle: "Custom Storefronts, Accessibility & App Integrations",
  email: "usamazubair149@gmail.com",
  phone: "+92 303 780 7500",
  location: "Lahore, Pakistan",
  github: "https://github.com/usamazubair149", // updated for standard format
  linkedin: "https://www.linkedin.com/in/muhammad-usama-zubair", // updated premium format
  profileSummary: "Senior Shopify frontend developer with 6+ years of experience building custom, accessibility-compliant storefronts and product detail page (PDP) experiences. Specializes in Checkout Extensions (React, Shopify Admin/Liquid/GraphQL APIs), Liquid theme architecture, JavaScript custom elements (Swiper.js media galleries, variant-aware components), and WCAG/ADA-compliant UI patterns. Proven track record integrating third-party apps and platform extensions (CRM, checkout, tax, review, and live-chat systems) into Shopify themes for U.S. and Canadian e-commerce clients."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Shopify Development",
    key: "shopify",
    description: "Deep expertise in custom checkout extensions, Liquid theme architecture (OS 2.0), section/block patterns, administrative & GraphQL APIs, and advanced theme speed/Web Vitals optimization.",
    items: [
      "Checkout Extensions (React)",
      "Liquid Templating & OS 2.0 Architecture",
      "Custom Sections & Blocks Schema",
      "Shopify Admin & Storefront GraphQL APIs",
      "Theme Performance Optimization",
      "Theme App Extensions & Metafields"
    ],
    icon: "ShoppingBag",
    accentColor: "text-emerald-400 border-emerald-500/20 shadow-emerald-500/5",
    size: "large"
  },
  {
    title: "Frontend Engineering",
    key: "frontend",
    description: "Building production-grade, highly interactive layouts and bespoke reactive storefront interfaces with pure ES6+ JavaScript, custom elements, and modern React patterns.",
    items: [
      "JavaScript (ES6+) & TypeScript",
      "React Frontend Framework",
      "Web Components / Custom Elements",
      "HTML5 & Semantic Elements",
      "CSS3 (Flexbox, Grid, Aspect-Ratio)",
      "Responsive & Sticky Layout Solutions"
    ],
    icon: "Code",
    accentColor: "text-cyan-400 border-cyan-500/20 shadow-cyan-500/5",
    size: "large"
  },
  {
    title: "Accessibility (ADA/WCAG)",
    key: "accessibility",
    description: "Expertise in auditing and implementing inclusive storefront layouts complying strictly with WCAG 2.1 AA & ADA compliance criteria across the entire purchase funnel.",
    items: [
      "Screen-Reader-Compliant Markup",
      "WAI-ARIA Pattern Integration",
      "Keyboard-Navigable UI Design",
      "Accessible Interactive Controls",
      "ADA Compliance Remediation Audits",
      "Color Contrast & Fluid Typography Scales"
    ],
    icon: "Accessibility",
    accentColor: "text-indigo-400 border-indigo-500/20 shadow-indigo-500/5",
    size: "medium"
  },
  {
    title: "App & Extension Integration",
    key: "integration",
    description: "Integrating enterprise CRM systems, third-party payment gateways, state taxes, and chat scripts safely with zero script crashes or speed regression.",
    items: [
      "Third-party App Embeddings",
      "CRM Connectors (Creatio CRM, etc.)",
      "Custom Fields App Configurations",
      "State-by-State Taxation Logic",
      "Reviews & Live-chat Deployments",
      "Script Conflict Debugging"
    ],
    icon: "Cpu",
    accentColor: "text-purple-400 border-purple-500/20 shadow-purple-500/5",
    size: "medium"
  },
  {
    title: "Tooling & Modern Workflows",
    key: "workflow",
    description: "Professional design-to-code translation and deployment workflows that ensure robust, scalable, and cross-browser compliant storefront code.",
    items: [
      "Git & Collaborative Workflows",
      "Figma-to-Code Implementation",
      "Cross-Browser Compatibility Debugging",
      "SEO Fundamentals & Rich Schema Data",
      "Tailwind CSS & Bundlers (Vite)"
    ],
    icon: "Workflow",
    accentColor: "text-amber-400 border-amber-500/20 shadow-amber-500/5",
    size: "small"
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Oribe Haircare",
    category: "luxury",
    url: "https://oribe.com",
    description: "Ultra-premium, high-traffic Shopify Plus storefront representing a leading global luxury hair care brand, requiring meticulous UI execution and variant-syncing media layouts.",
    problem: "The enterprise storefront had complex product detail pages (PDPs) that loaded slowly and lacked responsive variant-aware media filtering across device viewports.",
    solution: "Architected a custom PDP using Liquid and Web Components, developing a variant-aware media gallery mimicking Swiper.js that filters slides and thumbnails by selected variant with zero layout shift.",
    techStack: ["Liquid OS 2.0", "Web Components", "Swiper.js Custom Elements", "Tailwind CSS", "Shopify Storefront APIs"],
    metrics: [
      { label: "PDP Speed Index", value: "+35%" },
      { label: "Add-To-Bag Click Rate", value: "+12%" },
      { label: "Accessibility Rate", value: "99%" }
    ],
    highlight: true
  },
  {
    title: "Guest in Residence",
    category: "luxury",
    url: "https://guestinresidence.com",
    description: "Minimalist, luxury e-commerce platform for Gigi Hadid's premium cashmere brand, built on custom designs with fluid animation layers.",
    problem: "The client needed a tailored Shopify theme with high-performance aspect-ratio elements, bespoke page transitions, and a sophisticated product grid system.",
    solution: "Engineered responsive grid sections with custom-controlled aspect-ratio bounding boxes, optimizing asset delivery and script execution for flawless mobile performance.",
    techStack: ["Liquid OS 2.0", "Vanilla JS (ES6)", "Modern CSS Grid", "Web Vitals Speed Tuning", "Bespoke Themes"],
    metrics: [
      { label: "Mobile Speed Index", value: "+42%" },
      { label: "Page Weight Reduced", value: "1.2MB" },
      { label: "Responsiveness Rating", value: "5/5" }
    ],
    highlight: true
  },
  {
    title: "USM Modular Furniture",
    category: "professional",
    url: "https://us.usm.com",
    description: "World-class Swiss luxury modular furniture brand, utilizing complex product configurators and custom checkout meta-data mappings.",
    problem: "Integrating a rich product configurator with standard Shopify checkout operations and custom line-item attributes without deteriorating page performance.",
    solution: "Built custom elements with modular JavaScript to ingest configurator states, mapping them instantly to Cart API payloads, and configured dynamic keyboard-navigable ARIA descriptions.",
    techStack: ["Liquid Frameworks", "Cart & Checkout APIs", "ARIA Label Customizer", "Bespoke Web Components", "Vite Tools"],
    metrics: [
      { label: "Configurator Ingestion", value: "Real-time" },
      { label: "Remediation Errors", value: "0" },
      { label: "Cart Speed Increase", value: "+28%" }
    ],
    highlight: true
  },
  {
    title: "Joanna Czech",
    category: "luxury",
    url: "https://www.joannaczech.com",
    description: "Prestige skincare and beauty brand storefront, remediated fully for strict ADA and WCAG 2.1 AA accessibility guidelines.",
    problem: "The core purchasing funnel contained nested markup and non-standard form components that rendered options unnavigable for screen-reader users.",
    solution: "Refactored variant selectors, quantity inputs, and CTA nodes. Replaced nested structures with clean computed ARIA tags and manual keyboard focus hooks.",
    techStack: ["Liquid OS 2.0", "ADA/WCAG 2.1 AA Remediation", "WAI-ARIA Specifications", "Focus Traps & Keyboard Hooks"],
    metrics: [
      { label: "ADA Compliance", value: "100%" },
      { label: "Checkout Bounce Rate", value: "-15%" },
      { label: "Lighthouse Accessibility", value: "100/100" }
    ],
    highlight: false
  },
  {
    title: "IsoSpec Health",
    category: "health",
    url: "https://isospechealth.com",
    description: "Bespoke U.S. CBD e-commerce brand storefront. Programmed from scratch with full checkout configurations and tax calculations.",
    problem: "The brand required state-by-state compliant taxation logic, multiple checkout flows, and dynamic reviews/chat embeds that did not slow the initial page speed.",
    solution: "Programmed a custom theme from scratch, using dynamic Liquid templates, state taxation hooks, and customized non-blocking scripts execution rules.",
    techStack: ["Bespoke Liquid Theme", "WordPress Migration", "SEO Metadata Schemas", "Taxation Webhooks", "Lazy-loading Layer"],
    metrics: [
      { label: "Development Speed", value: "3 Weeks" },
      { label: "Organic Ingress", value: "+80%" },
      { label: "First Contentful Paint", value: "1.1s" }
    ],
    highlight: false
  },
  {
    title: "Molton Brown",
    category: "luxury",
    url: "https://www.moltonbrown.co.uk",
    description: "Enterprise UK cosmetics and fine fragrance retailer. Optimized theme extensions, responsive fluid components, and scripts synchronization.",
    problem: "Adapting legacy Liquid structures to modern mobile fluid layouts while debuging script collisions caused by outdated third-party tracking embeds.",
    solution: "Refactored theme containers using responsive CSS grid and flex patterns, establishing a unified, non-blocking lazy loading layout for analytics tags.",
    techStack: ["Liquid Engine Refactoring", "ES6 JavaScript", "Theme Performance Profiling", "Lazy Scripts Loading"],
    metrics: [
      { label: "Mobile Exit Rate", value: "-22%" },
      { label: "Third-party Delays", value: "-60%" }
    ],
    highlight: false
  }
];

export const CAREER_TIMELINE: Experience[] = [
  {
    role: "Senior Shopify Developer / Frontend Engineer",
    company: "Lifetech Applications",
    location: "Islamabad, Pakistan",
    period: "May 2022 – Present",
    highlights: [
      "Develop Checkout Extensions using React and JavaScript, integrating with Shopify's Admin, Liquid, and GraphQL APIs to ship custom, high-performance checkout experiences.",
      "Lead frontend development for a Shopify Plus storefront, owning custom PDP architecture including a Swiper.js-based media gallery component that filters slides and thumbnails by selected product variant.",
      "Built and shipped a two-column sticky PDP layout (media + info columns) using modern CSS (aspect-ratio, Grid) to solve cross-viewport layout issues on tall screens.",
      "Led an ADA/WCAG accessibility remediation across core purchase-flow components — variant radio buttons, Add to Cart button, and quantity input — resolving screen-reader issues caused by nested markup and replacing them with clean, computed ARIA labels.",
      "Helped launch a Shopify Wholesale Channel, integrating Creatio CRM and a Custom Fields App into the theme and checkout flow."
    ]
  },
  {
    role: "Freelance Shopify & WordPress Developer",
    company: "IsoSpec Health",
    location: "Remote (U.S.-based client)",
    period: "Dec 2018 – May 2022",
    highlights: [
      "Built a Shopify theme from scratch for a U.S. CBD e-commerce brand, including multiple checkout configurations and state-by-state taxation logic.",
      "Integrated third-party apps for product reviews and live chat, and implemented an SEO keyword/tag structure to support organic growth.",
      "Acted as primary technical point of contact, providing guidance to other team members on recurring theme and app integration issues."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Diginordic",
    location: "Lahore, Pakistan",
    period: "March 2021 – May 2022",
    highlights: [
      "Developed and maintained multiple UK-based Shopify stores, shipping new features and design updates on an ongoing basis."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Aiva Labs",
    location: "Lahore, Pakistan",
    period: "Sep 2020 – Mar 2021",
    highlights: [
      "Built and launched Shopify stores for Canadian clients from Figma designs across four separate projects."
    ]
  },
  {
    role: "Development Team Lead",
    company: "Itio City",
    location: "Islamabad, Pakistan",
    period: "Aug 2019 – Sep 2020",
    highlights: [
      "Led frontend delivery across multiple client websites, coordinating daily with designers, backend developers, and marketers.",
      "Directed a small team on concurrent design and development projects, setting technical direction and reviewing output."
    ]
  }
];

export const OTHER_PROJECTS = [
  { name: "Live Costa Brazil", url: "https://livecostabrazil.com", description: "Eco-luxury cosmetic brand custom storefront refinements." },
  { name: "Jevar Co Portfolio", url: "https://jevar.co/portfolio", description: "High-end design showcase and portfolio integration." },
  { name: "Leaf & Flower", url: "https://www.leafandflower.com", description: "Premium CBD hair treatment brand. App integrations and design enhancements." },
  { name: "Brazilian Blowout", url: "https://store-brazilianblowout-com.myshopify.com", description: "Complex B2B wholesale setup and checkout configurations." },
  { name: "Christine Valmy Skincare", url: "https://shop.christinevalmy.com", description: "Legacy Shopify theme refactoring and performance tweaks." },
  { name: "Retrouvé Prestige Skincare", url: "https://retrouve.com", description: "Clean, ultra-minimalist layout configuration and custom media blocks." },
  { name: "Buy Nicotine Pouches UK", url: "https://www.buynicotinepouches.co.uk", description: "Regulated niche market e-commerce with age-verification checkouts." },
  { name: "Little Canadian", url: "https://littlecanadian.ca", description: "Baby product store. Registry configurations and custom collections filters." },
  { name: "ECig Wizard & Vape Shop UK", url: "https://www.ecigwizard.com", description: "Multi-domain UK e-commerce sites. Theme optimizations and loyalty rewards programs integration." }
];

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
  title: "Senior Shopify Frontend Engineer",
  subtitle: "Custom Storefronts, Accessibility Remediation & App Architectures",
  email: "usamazubair149@gmail.com",
  phone: "0303 780 7500",
  location: "Lahore, Pakistan",
  github: "https://github.com", // standard profile link
  linkedin: "https://linkedin.com", // standard profile link
  profileSummary: `Shopify frontend engineer with 6+ years of experience building custom, accessibility-compliant storefronts and high-performance product detail page (PDP) experiences. Specializing in Liquid theme architecture, JavaScript custom elements, and WCAG/ADA-compliant UI patterns with a proven track record of integrating enterprise CRM, checkout, and live-chat systems for premier international brands.`
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Shopify Theme Architecture",
    key: "shopify",
    description: "Deep mastery of Liquid theme architecture, custom sections/blocks, Shopify Online Store 2.0 specs, performance optimization, and custom metafield structures.",
    items: [
      "Liquid Templating Engine",
      "Online Store 2.0 Architecture",
      "Shopify Admin & Storefront APIs",
      "Sections & Blocks Schema",
      "Performance Optimization (Lighthouse/Web Vitals)",
      "Theme App Extensions"
    ],
    icon: "ShoppingBag",
    accentColor: "text-emerald-400 border-emerald-500/20 shadow-emerald-500/5",
    size: "large"
  },
  {
    title: "Advanced Frontend Engineering",
    key: "frontend",
    description: "Building modern, hyper-interactive interfaces and robust client-side components with custom elements and reactive frameworks.",
    items: [
      "JavaScript (ES6+) & TypeScript",
      "Web Components / Custom Elements",
      "React & Next.js Basics",
      "Modern CSS3 (Grid, Flexbox, Aspect-Ratio)",
      "Responsive & Fluid Layout Design",
      "Dynamic Libraries (Swiper.js, Framer Motion)"
    ],
    icon: "Code",
    accentColor: "text-cyan-400 border-cyan-500/20 shadow-cyan-500/5",
    size: "large"
  },
  {
    title: "Accessibility & WCAG/ADA Remediation",
    key: "accessibility",
    description: "Engineering inclusive web applications. Auditing and remediating complex purchase flows to comply with WCAG 2.1 AA and ADA standards.",
    items: [
      "Screen Reader Optimization",
      "Semantic HTML5 & WAI-ARIA Specs",
      "Keyboard Navigation & Focus Traps",
      "Accessible Forms & Interactive Controls",
      "ADA Compliance Remediation Audits",
      "Color Contrast & Fluid Typography Scaling"
    ],
    icon: "Accessibility",
    accentColor: "text-indigo-400 border-indigo-500/20 shadow-indigo-500/5",
    size: "medium"
  },
  {
    title: "App & Platform Integration",
    key: "integration",
    description: "Embedding third-party architectures and enterprise-level tools into standard flows with zero performance degradation or scripts collision.",
    items: [
      "CRM Systems (Creatio CRM, etc.)",
      "Checkout Extensions & Custom Fields",
      "State-by-State Taxation Logic",
      "Reviews & Rating Systems Integration",
      "Live Chat & Customer Engagement",
      "Third-party Scripts Conflict Debugging"
    ],
    icon: "Cpu",
    accentColor: "text-purple-400 border-purple-500/20 shadow-purple-500/5",
    size: "medium"
  },
  {
    title: "Tooling & Modern Workflow",
    key: "workflow",
    description: "A continuous integration pipeline ensuring flawless deployments and design system translation.",
    items: [
      "Git / Version Control Systems",
      "Figma-to-Code Pixel-Perfect Translation",
      "Cross-Browser Compatibility Debugging",
      "SEO Keyword & Structured Data Schemes",
      "Tailwind CSS & Webpack/Vite"
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
    description: "Ultra-premium, high-traffic Shopify storefront representing a leading brand in luxury hair care, requiring meticulous UI execution and modern interactive galleries.",
    problem: "High-traffic storefront had custom complex product detail pages (PDPs) that loaded slowly and lacked responsive visual synchronization across multiple product variations.",
    solution: "Architected custom product pages using Liquid and Web Components, developing an innovative variant-filtering Swiper.js gallery that dynamically syncs active slides and thumbnails to the selected product variant with zero layout shift.",
    techStack: ["Liquid (OS 2.0)", "Web Components", "Swiper.js Custom Elements", "Tailwind CSS", "Shopify Theme API"],
    metrics: [
      { label: "PDP Load Time", value: "-35%" },
      { label: "Conversion Rate", value: "+12%" },
      { label: "Accessibility Score", value: "98/100" }
    ],
    highlight: true
  },
  {
    title: "Guest in Residence",
    category: "luxury",
    url: "https://guestinresidence.com",
    description: "Sleek, minimalist e-commerce platform for Gigi Hadid's cashmere brand, emphasizing high performance and high-fidelity transitions.",
    problem: "The client needed a highly customized Shopify theme with bespoke page transitions, high-fidelity media presentation, and an eye-catching interactive grid layout.",
    solution: "Engineered responsive grid sections with custom-controlled aspect-ratio boxes, optimizing visual assets and liquid scripts to maintain ultra-fast performance on mobile devices.",
    techStack: ["Liquid OS 2.0", "Vanilla JS (ES6)", "Modern CSS Grid", "Web Vitals Tuning", "Custom Sections"],
    metrics: [
      { label: "Mobile Speed Index", value: "+42%" },
      { label: "Page Weight Reduced", value: "1.2MB" }
    ],
    highlight: true
  },
  {
    title: "USM Modular Furniture",
    category: "professional",
    url: "https://us.usm.com",
    description: "World-class Swiss modular furniture brand, utilizing complex product configurators and custom-engineered storefront patterns.",
    problem: "Integrating a complex 3D configurator with standard Shopify checkout and custom product metadata without degrading storefront performance.",
    solution: "Built theme-level event listeners to catch state outputs from the product configurator, mapping custom elements directly to checkout payloads and dynamically computing ARIA labels for screen reader navigability.",
    techStack: ["Shopify Admin API", "Custom Elements", "ARIA Label Systems", "Third-Party App Integrations", "Vite Tools"],
    metrics: [
      { label: "Configurator Ingestion", value: "Real-time" },
      { label: "Remediation Errors", value: "0" }
    ],
    highlight: true
  },
  {
    title: "Joanna Czech",
    category: "luxury",
    url: "https://www.joannaczech.com",
    description: "Prestige skincare and beauty brand storefront, built with accessibility-first parameters and custom e-commerce integrations.",
    problem: "Existing purchasing funnel suffered from nested markup and non-standard input components that failed screen-reader accessibility tests.",
    solution: "Conducted WCAG/ADA accessibility remediation. Cleaned nested DOM nodes, replaced them with computed ARIA labels, implemented keyboard-navigable focus traps in quantity selectors, and enhanced the overall checkout experience.",
    techStack: ["Liquid Templating", "ADA/WCAG 2.1 AA Compliance", "WAI-ARIA Specifications", "Keyboard Trap JS"],
    metrics: [
      { label: "ADA Compliance", value: "100%" },
      { label: "Abandon Rate", value: "-15%" }
    ],
    highlight: false
  },
  {
    title: "IsoSpec Health",
    category: "health",
    url: "https://isospechealth.com",
    description: "Premium U.S.-based CBD wellness brand. Built complete Shopify experience from scratch.",
    problem: "Required state-by-state compliant taxation logic, multiple shipping configurations, and dynamic integrations with review and live-chat scripts.",
    solution: "Coded a custom theme from the ground up, utilizing dynamic liquid templates and structured meta-objects. Handled complex checkout script overrides and set up dynamic script loading to prevent live chat and reviews from slowing page speed.",
    techStack: ["Liquid", "WordPress Migration", "SEO Structured Data", "Taxation Customizations", "Page Speed Tuning"],
    metrics: [
      { label: "Launch Speed", value: "3 Weeks" },
      { label: "Organic Reach", value: "+80%" }
    ],
    highlight: false
  },
  {
    title: "Molton Brown",
    category: "luxury",
    url: "https://www.moltonbrown.co.uk",
    description: "Enterprise-grade UK cosmetics and fragrance retailer. Implemented key interactive elements and internationalized theme extensions.",
    problem: "Adapting an old, rigid liquid layout to modern mobile standards and resolving conflicting scripts from legacy third-party marketing embeds.",
    solution: "Refactored legacy template layouts with CSS Flexbox/Grid, and implemented a non-blocking lazy loading system for third-party widgets and marketing tracking layers.",
    techStack: ["Legacy Liquid Refactoring", "Vanilla ES6", "Performance Profiling", "Lazy Loading Architectures"],
    metrics: [
      { label: "Mobile Bounce Rate", value: "-22%" },
      { label: "Third-party Delay", value: "-60%" }
    ],
    highlight: false
  }
];

export const CAREER_TIMELINE: Experience[] = [
  {
    role: "Senior Shopify Frontend Engineer",
    company: "Remote (U.S. / Canadian Client Storefronts)",
    location: "Lahore, Pakistan (Remote)",
    period: "May 2022 – Present",
    highlights: [
      "Lead frontend engineering for highly visible Shopify stores, owning complex product detail page (PDP) architectures, swiper media components, and custom variants filtering.",
      "Shipped custom sticky layouts and web components utilizing aspect-ratio and modern CSS Grid to solve layout constraints on taller high-resolution screens.",
      "Engineered comprehensive ADA/WCAG accessibility remediation across key purchase-flow nodes (variant select, add-to-cart, cart flyout, inputs) with automated calculated ARIA labels.",
      "Architected the launch of dynamic Wholesale Channels, embedding CRM connectors (Creatio CRM) and custom field app integration into checkout liquid flows."
    ]
  },
  {
    role: "Freelance Shopify & WordPress Architect",
    company: "IsoSpec Health",
    location: "Remote (U.S. Based Client)",
    period: "2020 – Present",
    highlights: [
      "Engineered a bespoke Shopify theme from scratch for a premium wellness brand, optimizing loading states and configuring state-by-state custom checkout tax calculations.",
      "Wrote structured SEO architectures and custom tagging rules boosting organic presence, combined with optimal integrations of live customer support and product reviews.",
      "Operated as primary technical authority guiding standard design-to-code translations, resolving script collisions, and managing client-side deployment cycles."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Diginordic",
    location: "Lahore, Pakistan",
    period: "March 2021 – May 2022",
    highlights: [
      "Developed, maintained, and continually iterated custom features for multiple United Kingdom-based Shopify storefronts.",
      "Collaborated with brand designers to implement pixel-perfect Figma layouts and responsive, lightweight theme templates."
    ]
  },
  {
    role: "Shopify Developer",
    company: "Aiva Labs",
    location: "Lahore, Pakistan",
    period: "September 2019 – March 2021",
    highlights: [
      "Wrote and launched bespoke Shopify stores for Canadian client brands, ensuring high fluid layout fidelity across four distinct projects.",
      "Maintained modular codebases enabling painless ongoing brand design adjustments and third-party API configurations."
    ]
  },
  {
    role: "Development Team Lead",
    company: "Itio City",
    location: "Islamabad, Pakistan",
    period: "August 2018 – September 2019",
    highlights: [
      "Directed the technical delivery of interactive, high-fidelity frontend sites for premium client agencies, managing a team of backend engineers, web developers, and UI designers.",
      "Orchestrated cross-browser testing routines, peer code reviews, and architectural patterns of client Web and WordPress solutions."
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

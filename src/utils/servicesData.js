// src/utils/servicesData.js
export const servicesData = {
  "web-development": {
    name: "Web Development",
    slug: "web-development",
    gradient: "radial-gradient(ellipse at 30% 50%, rgba(0,229,255,0.12), transparent 60%)",
    accent: "text-accent-1",
    bgAccent: "bg-accent-1",
    borderAccent: "border-accent-1",
    icon: "Globe",
    tagline: "High-performance, scalable web applications.",
    overview: {
      problem: "In today's digital landscape, a slow or unresponsive website directly translates to lost revenue and diminished brand trust. Modern businesses require platforms that are not just beautiful, but lightning-fast and structurally sound.",
      approach: "We utilize modern JavaScript frameworks like React and Next.js, headless CMS architectures, and robust APIs to build web solutions that scale flawlessly while delivering an unmatched user experience.",
      stats: [
        { label: "Uptime guarantee", value: 99.9, suffix: "%" },
        { label: "Core Web Vitals", value: 100, suffix: "" },
        { label: "Faster loads", value: 3, suffix: "x" }
      ]
    },
    offerings: [
      { id: "w1", title: "Custom Web Apps", desc: "Complex SaaS platforms and portals solving unique business logic.", features: ["React / Vue", "Serverless", "API-first"] },
      { id: "w2", title: "E-Commerce", desc: "High-converting bespoke storefronts tailored for massive scale.", features: ["Shopify Plus", "Next.js Comm", "Stripe"] },
      { id: "w3", title: "Headless CMS", desc: "Decoupled architectures giving marketing teams supreme flexibility.", features: ["Sanity", "Contentful", "Strapi"] },
      { id: "w4", title: "UI/UX Migration", desc: "Revamping legacy systems into modern, performant interfaces.", features: ["Audit", "Refactor", "Optimization"] },
      { id: "w5", title: "Progressive Web Apps", desc: "App-like experiences running natively inside the mobile browser.", features: ["Offline Mode", "Push Notifs", "Fast"] },
      { id: "w6", title: "API Development", desc: "Secure, scalable backend services to power your web frontend.", features: ["GraphQL", "REST", "Microservices"] }
    ],
    techStack: [
      { name: "React", logo: "react", category: "Frontend", usage: "Core library for building dynamic user interfaces." },
      { name: "Next.js", logo: "nextjs", category: "Frontend", usage: "Server-side rendering and static generation." },
      { name: "Node.js", logo: "nodejs", category: "Backend", usage: "High-performance JavaScript backend environment." },
      { name: "AWS", logo: "aws", category: "Cloud", usage: "Scalable hosting and serverless infrastructure." },
      { name: "Tailwind CSS", logo: "tailwind", category: "Tools", usage: "Utility-first CSS framework for rapid styling." }
    ],
    process: [
      { title: "Discovery", desc: "Deep dive into requirements and KPIs." },
      { title: "Architecture", desc: "System design and database planning." },
      { title: "Development", desc: "Agile sprints with continuous integration." },
      { title: "QA Testing", desc: "Rigorous automation and manual checks." },
      { title: "Deployment", desc: "Zero-downtime launch and monitoring." }
    ],
    pricing: [
      { name: "Basic", price: "$5k", features: ["Landing Pages", "CMS Setup", "Standard SEO"] },
      { name: "Professional", price: "$12k", popular: true, features: ["Custom Web App", "E-Commerce", "API Integrations", "Advanced SEO"] },
      { name: "Enterprise", price: "Custom", features: ["Microservices", "Scalable Infrastructure", "Dedicated Team", "24/7 SLA"] }
    ],
    projects: [
      { id: "w1", title: "Wall Design Hub", link: "https://walldesignhub.com/", desc: "Interior design platform with custom catalog.", thumb: "https://images.unsplash.com/photo-1618221195710-dd6b41faeaa6?auto=format&fit=crop&q=80&w=800" },
      { id: "w2", title: "The Calcutta Heritage", link: "https://thecalcuttaheritage.com/", desc: "Travel and heritage exploration portal.", thumb: "https://images.unsplash.com/photo-1558434023-95583f70737a?auto=format&fit=crop&q=80&w=800" },
      { id: "w3", title: "Lingashtakam", link: "https://lingashtakam.org/", desc: "Spiritual & Puja Path Website.", thumb: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" },
      { id: "w4", title: "Reav Stone Hub", link: "https://reavstonehub.com/", desc: "E-commerce for industrial stone products.", thumb: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800" }
    ],
    faqs: [
      { q: "How long does a custom web app take?", a: "Typically 8-12 weeks depending on complexity." },
      { q: "Do you provide hosting?", a: "We deploy on scalable cloud providers like AWS or Vercel tailored to your needs." },
      { q: "What stack do you primarily use?", a: "React, Next.js, Node.js, and MongoDB/PostgreSQL." },
      { q: "Can you migrate our legacy app?", a: "Yes, we specialize in modernizing outdated architectures with zero downtime." }
    ]
  },
  "mobile-app": {
    name: "Mobile App Development",
    slug: "mobile-app",
    gradient: "radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.12), transparent 60%)",
    accent: "text-purple-500",
    bgAccent: "bg-purple-500",
    borderAccent: "border-purple-500",
    icon: "Smartphone",
    tagline: "Native and cross-platform mobile experiences.",
    overview: {
      problem: "Mobile usage dominates digital consumption, yet many apps struggle with poor retention due to clunky interfaces, massive battery drain, or slow load times on weak networks.",
      approach: "We engineer fluid, highly optimized mobile applications using premium frameworks like Flutter and React Native. Our apps feel native, run incredibly fast, and are designed for maximum user retention.",
      stats: [
        { label: "App Store ratings", value: 4.8, suffix: "/5" },
        { label: "Crash-free sessions", value: 99.8, suffix: "%" },
        { label: "Avg Retention", value: 40, suffix: "%" }
      ]
    },
    offerings: [
      { id: "m1", title: "iOS Native Apps", desc: "Swift-based applications optimized for the Apple ecosystem.", features: ["SwiftUI", "CoreData", "ARKit"] },
      { id: "m2", title: "Android Native Apps", desc: "Kotlin-powered apps tailored to massive Android heterogeneity.", features: ["Kotlin", "Jetpack", "Material"] },
      { id: "m3", title: "Cross-platform (Flutter)", desc: "Build once, deploy everywhere with near-native performance.", features: ["Dart", "Custom Widgets", "Fast"] },
      { id: "m4", title: "React Native", desc: "Leverage web skills to build powerful mobile apps efficiently.", features: ["JS/TS", "OTA Updates", "Expo"] },
      { id: "m5", title: "App Revitalization", desc: "Auditing and fixing existing apps for better UX and stability.", features: ["Audit", "UI Refresh", "Bug Fixes"] },
      { id: "m6", title: "Wearable Integrations", desc: "Extending app functionalities to Apple Watch and WearOS.", features: ["WatchOS", "HealthKit", "IoT"] }
    ],
    techStack: [
      { name: "Flutter", logo: "flutter", category: "Frontend", usage: "High-performance cross-platform development." },
      { name: "React Native", logo: "react", category: "Frontend", usage: "JavaScript-driven mobile UI rendering." },
      { name: "Swift", logo: "apple", category: "Frontend", usage: "Native iOS development." },
      { name: "Kotlin", logo: "android", category: "Frontend", usage: "Native Android development." },
      { name: "Firebase", logo: "firebase", category: "Cloud", usage: "Auth, push notifications, and real-time DB." }
    ],
    process: [
      { title: "Concept mapping", desc: "User flows and feature prioritization." },
      { title: "UI/UX Prototyping", desc: "Interactive Figma mockups of the app." },
      { title: "Core Development", desc: "Building the engine and integrating APIs." },
      { title: "Beta Testing", desc: "Testflight deployments and QA." },
      { title: "App Store Launch", desc: "Approval handling and release management." }
    ],
    pricing: [
      { name: "MVP Concept", price: "$8k", features: ["1 Platform", "Core Features", "UI/UX Design"] },
      { name: "Cross-Platform Platform", price: "$18k", popular: true, features: ["iOS & Android", "API Backend", "Push Notifs", "Analytics"] },
      { name: "Enterprise App", price: "Custom", features: ["Native Development", "Hardware Integration", "Complex Auth", "SLA Support"] }
    ],
    projects: [
      { id: "m1", title: "Duoo: Streaming App", link: "https://play.google.com/store/apps/details?id=com.melot.meta", desc: "Global social interaction & streaming app.", thumb: "https://images.unsplash.com/photo-1521931961826-fe48677230a5?auto=format&fit=crop&q=80&w=800" },
      { id: "m2", title: "EdgeProp: Agent App", link: "https://play.google.com/store/apps/details?id=com.edgeprop.agent", desc: "Real estate agent productivity tool.", thumb: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" }
    ],
    faqs: [
      { q: "Do you specialize in iOS or Android?", a: "Both. We recommend Flutter for cross-platform speed, but offer native Swift/Kotlin for specific heavy requirements." },
      { q: "Will you help us get approved on the App Store?", a: "Absolutely. We handle all compliance, guidelines, and submission processes." },
      { q: "Can an app work offline?", a: "Yes, we implement localized caching databases like SQLite or Hive for offline mode." },
      { q: "Do you offer post-launch support?", a: "Yes, we provide ongoing maintenance packages for OS updates and feature expansions." }
    ]
  },
  "custom-software": {
    name: "Custom Software",
    slug: "custom-software",
    gradient: "radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.12), transparent 60%)",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500",
    borderAccent: "border-emerald-500",
    icon: "Code2",
    tagline: "Enterprise-grade bespoke software solutions.",
    overview: {
      problem: "Off-the-shelf software often forces businesses to adapt their workflows to the tool, resulting in inefficiencies, data silos, and a lack of competitive edge.",
      approach: "We engineer custom, scalable software architectures tailored explicitly to your operational logic. Our solutions eliminate bottlenecks, automate processes, and evolve alongside your business.",
      stats: [
        { label: "Efficiency boost", value: 3.5, suffix: "x" },
        { label: "System Uptime", value: 99.99, suffix: "%" },
        { label: "Systems Integrated", value: 50, suffix: "+" }
      ]
    },
    offerings: [
      { id: "c1", title: "ERP Systems", desc: "Centralized platforms for managing resources and workflows.", features: ["Finance", "HR", "Supply Chain"] },
      { id: "c2", title: "CRM Platforms", desc: "Custom customer relationship trackers built for your specific sales funnel.", features: ["Pipelines", "Analytics", "Automation"] },
      { id: "c3", title: "SaaS Development", desc: "Building scalable, multi-tenant architectures for your next big product.", features: ["Multi-tenant", "Billing", "Dashboards"] },
      { id: "c4", title: "Legacy Modernization", desc: "Refactoring and migrating outdated codebases to modern stacks.", features: ["Cloud Migrations", "Refactoring", "Security"] },
      { id: "c5", title: "Data Pipelines", desc: "Complex ETL processes handling large-scale data analytics.", features: ["ETL", "Warehousing", "Real-time"] },
      { id: "c6", title: "IoT Integrations", desc: "Connecting physical hardware to web-based command systems.", features: ["Protocols", "Firmware Bridge", "Monitoring"] }
    ],
    techStack: [
      { name: "Python", logo: "python", category: "Backend", usage: "Data processing, ML, and robust backend logic." },
      { name: "Docker", logo: "docker", category: "Tools", usage: "Containerization for consistent deployment." },
      { name: "PostgreSQL", logo: "postgres", category: "Backend", usage: "Advanced relational database management." },
      { name: "Go", logo: "go", category: "Backend", usage: "Ultra-fast microservices and high-concurrency." },
      { name: "Kubernetes", logo: "kubernetes", category: "Cloud", usage: "Orchestration for massive scaling." }
    ],
    process: [
      { title: "System Audit", desc: "Evaluating current workflows and bottlenecks." },
      { title: "Blueprint", desc: "Detailed software architecture plans." },
      { title: "Iterative Builds", desc: "Delivering functional increments." },
      { title: "UAT", desc: "User Acceptance Testing with stakeholders." },
      { title: "Handoff", desc: "Full documentation and training." }
    ],
    pricing: [
      { name: "Internal Tool", price: "$15k", features: ["1 Workflow", "Basic Auth", "Database Setup"] },
      { name: "Bespoke System", price: "$35k", popular: true, features: ["Multi-module", "Complex Logic", "API Integrations", "Custom Dashboards"] },
      { name: "Enterprise SaaS", price: "Custom", features: ["Microservices", "Multi-tenant", "Compliance Audits", "Dedicated Pod"] }
    ],
    projects: [
      { id: "p6", title: "EBilling System", link: "https://ebilling.walldesign.co.in/", desc: "Cloud-based billing & POS for retail.", thumb: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800" },
      { id: "p7", title: "Freedom Sales Mgt", link: "https://freedom.skydreamix.co.in/", desc: "Enterprise sales tracking & automation.", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
      { id: "p8", title: "Lawful Work Mgt", link: "https://lawfulwork.skydreamix.co.in/", desc: "Legal case management & documentation.", thumb: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800" }
    ],
    faqs: [
      { q: "Who owns the code?", a: "You do. Upon project completion, 100% of the IP and source code is transferred to you." },
      { q: "Can you guarantee security?", a: "We build to OWASP standards and offer third-party penetration testing for enterprise apps." },
      { q: "How do you handle scope creep?", a: "We use agile methodology; changes are welcomed and estimated as new sprint items." },
      { q: "What if we need to scale tremendously?", a: "Our architectures (like Kubernetes/Serverless) are designed to horizontally scale to millions of users." }
    ]
  },
  "digital-marketing": {
    name: "Digital Marketing",
    slug: "digital-marketing",
    gradient: "radial-gradient(ellipse at 40% 60%, rgba(245,158,11,0.12), transparent 60%)",
    accent: "text-orange-500",
    bgAccent: "bg-orange-500",
    borderAccent: "border-orange-500",
    icon: "Search",
    tagline: "Data-driven strategies to amplify your brand.",
    overview: {
      problem: "In a noisy digital space, getting noticed is harder than ever. Many businesses bleed money on generic ads with poor targeting and unoptimized conversion funnels.",
      approach: "We deploy aggressive, data-backed marketing strategies. By combining technical SEO, highly targeted PPC, and relentless A/B testing, we turn ad spend into measurable, compounding revenue.",
      stats: [
        { label: "Avg ROI increase", value: 300, suffix: "%" },
        { label: "Leads Generated", value: 50, suffix: "k+" },
        { label: "Search Rank", value: 1, suffix: "st Pg" }
      ]
    },
    offerings: [
      { id: "d1", title: "Technical SEO", desc: "Optimizing codebase and site architecture for rapid Google indexing.", features: ["Audits", "Core Web Vitals", "Schema"] },
      { id: "d2", title: "Content Strategy", desc: "High-quality, intent-driven content that ranks and converts.", features: ["Blogs", "Copywriting", "Backlinks"] },
      { id: "d3", title: "PPC Campaigns", desc: "Hyper-targeted Google and LinkedIn ads driving immediate ROI.", features: ["Google Ads", "Retargeting", "A/B Testing"] },
      { id: "d4", title: "Social Media Mgt", desc: "Building brand authority and engagement across major networks.", features: ["Instagram", "LinkedIn", "TikTok"] },
      { id: "d5", title: "Email Automation", desc: "Nurture sequences turning cold leads into loyal customers.", features: ["Drip Campaigns", "Klaviyo", "Newsletters"] },
      { id: "d6", title: "CRO", desc: "Conversion Rate Optimization to squeeze more sales from existing traffic.", features: ["Heatmaps", "Split Testing", "UX Tweaks"] }
    ],
    techStack: [
      { name: "Google Analytics", logo: "ga", category: "Tools", usage: "Traffic and demographic tracking." },
      { name: "Ahrefs", logo: "ahrefs", category: "Tools", usage: "SEO keyword and backlink research." },
      { name: "Meta Ads", logo: "meta", category: "Tools", usage: "Social media advertising ecosystem." },
      { name: "HubSpot", logo: "hubspot", category: "Tools", usage: "CRM and marketing automation." },
      { name: "Mailchimp", logo: "mailchimp", category: "Tools", usage: "Email marketing pipelines." }
    ],
    process: [
      { title: "Audit & Analysis", desc: "Reviewing current analytics and competitors." },
      { title: "Strategy Alignment", desc: "Setting clear KPIs and campaign goals." },
      { title: "Campaign Setup", desc: "Building landing pages and ad creatives." },
      { title: "Launch & Monitor", desc: "Pushing live and tracking initial metrics." },
      { title: "Scale & Optimize", desc: "Doubling down on winning channels." }
    ],
    pricing: [
      { name: "SEO Starter", price: "$2k/mo", features: ["On-page optimization", "4 Blog Posts", "Monthly Report"] },
      { name: "Growth Engine", price: "$5k/mo", popular: true, features: ["Advanced SEO", "PPC Management", "Social Media", "Bi-weekly sync"] },
      { name: "Market Domination", price: "$10k+/mo", features: ["Omnichannel approach", "Dedicated Account Mgr", "Custom Dashboards", "CRO & Email"] }
    ],
    projects: [
      { id: "p9", title: "Meta Messaging Ads", link: "#", desc: "Generated 600+ high-quality leads in 30 days.", thumb: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
      { id: "p10", title: "SEO Growth Case", link: "#", desc: "800% traffic increase for global retail client.", thumb: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" }
    ],
    faqs: [
      { q: "How long until we see SEO results?", a: "SEO is a long-term play. Initial improvements show in 2-3 months, with compounding results by month 6." },
      { q: "Do you guarantee #1 ranking?", a: "No one can guarantee Google rankings. However, we guarantee best practices that consistently yield top-tier results." },
      { q: "Is ad spend included in your pricing?", a: "No, our retainer covers management and strategy. Ad spend is billed directly by the platform." },
      { q: "Do you do B2B or B2C?", a: "We specialize heavily in B2B SaaS and service companies, leveraging LinkedIn and intent-based Search." }
    ]
  },
  "graphics-video": {
    name: "Graphics & Video",
    slug: "graphics-video",
    gradient: "radial-gradient(ellipse at 60% 40%, rgba(236,72,153,0.12), transparent 60%)",
    accent: "text-pink-500",
    bgAccent: "bg-pink-500",
    borderAccent: "border-pink-500",
    icon: "Gamepad2",
    tagline: "Cinematic branding and stunning visual identity.",
    overview: {
      problem: "Inconsistent branding, generic stock images, and poorly produced videos subconsciously signal cheapness to high-ticket clients, reducing trust and conversion rates.",
      approach: "We craft visually stunning, cohesive brand identities. From sleek 3D animations to premium corporate video production, our assets elevate your brand's perceived value instantly.",
      stats: [
        { label: "Assets Delivered", value: 10, suffix: "k+" },
        { label: "Video Views", value: 50, suffix: "M+" },
        { label: "Brand Awards", value: 12, suffix: "" }
      ]
    },
    offerings: [
      { id: "g1", title: "Brand Identity", desc: "Logos, typography, and visual guidelines.", features: ["Logo Design", "Style Guides", "Brand Book"] },
      { id: "g2", title: "3D Animation", desc: "Abstract tech visuals and product renders.", features: ["Cinema 4D", "Blender", "Motion Graphics"] },
      { id: "g3", title: "Promo Videos", desc: "High-impact commercials and SaaS explainers.", features: ["Scripting", "Voiceovers", "Editing"] },
      { id: "g4", title: "UI/UX Prototyping", desc: "Beautiful interface designs for web and app.", features: ["Figma", "Interaction Design", "Wireframes"] },
      { id: "g5", title: "Print & Packaging", desc: "Physical merchandising and premium packaging.", features: ["Brochures", "Merch", "Print Ready"] },
      { id: "g6", title: "Social Assets", desc: "Reels, carousels, and thumb-stopping ad creatives.", features: ["Templates", "Short-form", "Static Ads"] }
    ],
    techStack: [
      { name: "Figma", logo: "figma", category: "Tools", usage: "UI/UX and collaborative vector design." },
      { name: "After Effects", logo: "ae", category: "Tools", usage: "Motion graphics and visual effects." },
      { name: "Premiere Pro", logo: "premiere", category: "Tools", usage: "Non-linear video editing." },
      { name: "Blender", logo: "blender", category: "Tools", usage: "3D modeling and product rendering." },
      { name: "Illustrator", logo: "illustrator", category: "Tools", usage: "Vector logo and icon creation." }
    ],
    process: [
      { title: "Creative Brief", desc: "Understanding the brand voice and target audience." },
      { title: "Storyboarding", desc: "Sketching concepts and writing scripts." },
      { title: "Production", desc: "Designing, rendering, and filming." },
      { title: "Post-Production", desc: "Editing, color grading, and SFX." },
      { title: "Final Delivery", desc: "Handover of raw and exported files." }
    ],
    pricing: [
      { name: "Brand Starter", price: "$3k", features: ["Logo System", "Typography", "Color Palette"] },
      { name: "Explainer Video", price: "$6k", popular: true, features: ["60s 2D/3D Animation", "Voiceover", "Scripting", "SFX"] },
      { name: "Enterprise Retainer", price: "Custom", features: ["Unlimited UX Requests", "Monthly Videos", "Dedicated Designer"] }
    ],
    projects: [
      { id: "p11", title: "Brand Identity Hub", link: "#", desc: "Complete visual rebranding for tech firms.", thumb: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
      { id: "p12", title: "SaaS Explainer Reel", link: "#", desc: "3D motion design for enterprise products.", thumb: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" }
    ],
    faqs: [
      { q: "How many revisions do we get?", a: "We typically offer 3 rounds of revisions for video and design projects to ensure perfect alignment." },
      { q: "Do you provide source files?", a: "Yes, fully layered .PSD, .AE, and .FIG files are provided upon final payment." },
      { q: "Can you shoot live-action?", a: "Yes, we partner with top-tier cinematographers globally for live-action corporate shoots." },
      { q: "Is 3D animation expensive?", a: "It varies. Simple 3D product spins are cost-effective, while complex character animations require higher budgets." }
    ]
  },
  "it-academy": {
    name: "IT Academy",
    slug: "it-academy",
    gradient: "radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.12), transparent 60%)",
    accent: "text-blue-500",
    bgAccent: "bg-blue-500",
    borderAccent: "border-blue-500",
    icon: "GraduationCap",
    tagline: "Empowering the next generation of tech talent.",
    overview: {
      problem: "Traditional education often leaves graduates ill-prepared for modern tech roles, creating a massive skills gap between theory and actual enterprise requirements.",
      approach: "Our academy delivers intensive, project-based bootcamps led by senior industry practitioners. We don't teach theory; we teach exactly what we use to build massive SaaS products.",
      stats: [
        { label: "Graduates", value: 2000, suffix: "+" },
        { label: "Placement Rate", value: 94, suffix: "%" },
        { label: "Avg Salary Hike", value: 150, suffix: "%" }
      ]
    },
    offerings: [
      { id: "i1", title: "Full-Stack Bootcamp", desc: "Master MERN stack and Next.js from scratch.", features: ["React", "Node.js", "MongoDB"] },
      { id: "i2", title: "UI/UX Masterclass", desc: "Learn Figma, design systems, and user psychology.", features: ["Figma", "Wireframing", "Prototyping"] },
      { id: "i3", title: "DevOps & Cloud", desc: "Automate everything with AWS, Docker, and CI/CD.", features: ["AWS", "Docker", "Jenkins"] },
      { id: "i4", title: "Data Science", desc: "Python, Pandas, and Machine Learning algorithms.", features: ["Python", "TensorFlow", "SQL"] },
      { id: "i5", title: "Corporate Training", desc: "Upskill your existing team with tailored curricula.", features: ["On-site", "Custom Syllabus", "Assessments"] },
      { id: "i6", title: "Job Placement", desc: "Resume building, mock interviews, and direct hiring networks.", features: ["Resume Prep", "Interviews", "Alumni Network"] }
    ],
    techStack: [
      { name: "MERN Stack", logo: "react", category: "Frontend", usage: "Full journey from frontend to database." },
      { name: "Python Basics", logo: "python", category: "Backend", usage: "Intro to programming and data structures." },
      { name: "AWS Cloud Practitioner", logo: "aws", category: "Cloud", usage: "Cloud foundational concepts." },
      { name: "Figma Pro", logo: "figma", category: "Tools", usage: "Mastering the industry standard design tool." },
      { name: "Git Workflow", logo: "github", category: "Tools", usage: "Version control for team environments." }
    ],
    process: [
      { title: "Enrollment", desc: "Skill assessment and batch allocation." },
      { title: "Core Modules", desc: "Live lectures and recorded sessions." },
      { title: "Capstone Project", desc: "Building a real-world, portfolio-ready app." },
      { title: "Career Prep", desc: "Soft skills and technical interview practice." },
      { title: "Placement", desc: "Introduction to our hiring partners." }
    ],
    pricing: [
      { name: "Self-Paced", price: "$499", features: ["120 Hrs Video", "Discord Access", "Certificate"] },
      { name: "Live Bootcamp", price: "$1,499", popular: true, features: ["Live Mentorship", "Code Reviews", "Capstone Project", "Job Guarantee*"] },
      { name: "Corporate Track", price: "Custom", features: ["Team Dashboards", "Tailored Curriculum", "On-site Workshops", "Dedicated Trainer"] }
    ],
    projects: [
      { id: "p13", title: "LMS Portal", link: "#", desc: "Project-based learning platform for thousands.", thumb: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800" }
    ],
    faqs: [
      { q: "Is the job guarantee real?", a: "Yes, for our Live Bootcamp students who complete all assignments, we guarantee placement or a full tuition refund." },
      { q: "Do I need prior coding experience?", a: "No, our full-stack curriculum starts from absolute zero." },
      { q: "Are classes online or offline?", a: "We offer completely remote synchronous classes, with an optional hybrid space in India." },
      { q: "How long is the bootcamp?", a: "16 weeks of intensive weekend and evening classes." }
    ]
  }
};

export const blogData = [
  {
    id: "b01",
    slug: "modern-react-server-components",
    title: "Mastering React Server Components",
    excerpt: "A deep dive into how RSCs fundamentally redefine the mental model of rendering and scaling Next.js applications in enterprise environments.",
    category: "Web Dev",
    author: {
      name: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    date: "Mar 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070",
    featured: true,
    content: `
      <h2>The Paradigm Shift</h2>
      <p>React Server Components (RSC) represent the most significant architectural shift in the React ecosystem since Hooks. By moving the rendering equation entirely back to the server, we unlock zero-bundle-size components and direct backend integrations.</p>
      
      <h3>Why Client Components Still Matter</h3>
      <p>It's crucial to understand that RSCs don't deprecate client rendering. Instead, they complement it. Interactivity—like handling <code>onClick</code> events or managing <code>useState</code>—still strictly requires a <code>'use client'</code> directive.</p>
      
      <pre><code>
// This is a Server Component by default in Next.js App Router
import db from './db';

export default async function UserList() {
  const users = await db.query('SELECT * FROM users');
  
  return (
    &lt;ul&gt;
      {users.map(u =&gt; &lt;li key={u.id}&gt;{u.name}&lt;/li&gt;)}
    &lt;/ul&gt;
  );
}
      </code></pre>
      
      <h2>Scaling in the Enterprise</h2>
      <p>For large organizations, RSCs mean smaller JS bundles shipped over the wire, drastically improving interaction-to-next-paint (INP) metrics and overall core web vitals. We've seen an average of 40% reduction in TTI on heavy dashboards.</p>
    `
  },
  {
    id: "b02",
    slug: "design-system-typography",
    title: "Typography Rules for Modern SaaS",
    excerpt: "How to structure heading hierarchies and fluid typography scales to create interfaces that feel effortlessly premium.",
    category: "Design",
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    date: "Mar 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000",
    featured: false,
    content: `
      <h2>The Golden Ratio</h2>
      <p>Premium SaaS design doesn't rely on dozens of colors; it relies on masterful typography. Establishing a fluid type scale based on the golden ratio ensures that your H1s mathematically relate to your paragraph tags across every breakpoint.</p>
      
      <h3>Implementing Fluid Clamp</h3>
      <p>Using CSS <code>clamp()</code> allows for perfectly scaling text that never requires complex media query breakpoints.</p>

      <pre><code>
/* Example Fluid Typography in CSS */
h1 {
  font-size: clamp(2.5rem, 5vw + 1rem, 5rem);
  line-height: 1.1;
  letter-spacing: -0.04em;
}
      </code></pre>

      <h2>Whitespace as a Typographic Element</h2>
      <p>Never underestimate the power of line-height and margin. A dense block of text fails regardless of how beautiful the typeface is. Maintain a minimum line-height of 1.6 for body copy.</p>
    `
  },
  {
    id: "b03",
    slug: "rust-microservices-2026",
    title: "Why Rust is Dominating Backend Microservices",
    excerpt: "Memory safety, fearless concurrency, and zero-cost abstractions are pushing Go out of the spotlight for high-performance finance tech.",
    category: "Software",
    author: {
      name: "Marcus Thorne",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    date: "Feb 28, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    featured: false,
    content: `
      <h2>The Concurrency Problem</h2>
      <p>Scaling microservices traditionally meant battling race conditions. Rust alters this dynamic by enforcing thread safety at compile time via its strict borrowing rules.</p>
      
      <h3>Actix-Web Benchmarks</h3>
      <p>In our latest stress tests modeling high-frequency trading sockets, Actix routinely processed over 500k requests per second on standard AWS compute, outperforming equivalent Go setups by 30%.</p>
    `
  },
  {
    id: "b04",
    slug: "ai-marketing-automation",
    title: "Programmatic SEO Strategy",
    excerpt: "How to leverage Large Language Models to generate thousands of contextual landing pages that rank natively.",
    category: "Marketing",
    author: {
      name: "Elena Rostova",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b"
    },
    date: "Feb 22, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
    featured: false,
    content: `
      <h2>The Shift in Search</h2>
      <p>Keyword stuffing is dead. Semantic topical authority is the only metric that matters. Programmatic SEO allows you to target micro-niches at scale.</p>
      
      <h3>Structuring Data Models</h3>
      <p>By defining exact JSON schemas for geographical or industry variables, we can programmatically stitch highly relevant content that genuinely answers intent.</p>
    `
  },
  {
    id: "b05",
    slug: "framer-motion-orchestration",
    title: "Advanced Framer Motion Orchestrators",
    excerpt: "Building highly complex staggered load animations using layoutIds and AnimatePresence intelligently.",
    category: "Web Dev",
    author: {
      name: "Alex Rivera",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    date: "Feb 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=2070",
    featured: false,
    content: `
      <h2>Layout Animation Deep Dive</h2>
      <p>Framer Motion's true magic lies in the <code>layoutId</code> prop, which elegantly morphs sibling components into each other across entirely different DOM trees.</p>
      
      <h3>Staggers</h3>
      <p>A staggering container can dramatically enhance perceived UX.</p>
      <pre><code>
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
      </code></pre>
    `
  },
  {
    id: "b06",
    slug: "building-zero-trust",
    title: "Zero Trust Architecture Models",
    excerpt: "Never trust, always verify. Security perimeters no longer exist in modern remote workforces.",
    category: "Software",
    author: {
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d"
    },
    date: "Jan 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=2069",
    featured: false,
    content: `
      <h2>Beyond the VPN</h2>
      <p>The traditional castle-and-moat security design is fundamentally broken. Zero Trust assumes the breach has already occurred.</p>
    `
  },
  {
    id: "b07",
    slug: "tailwind-4-preview",
    title: "What's Coming in Tailwind v4",
    excerpt: "An exclusive look at the new zero-config engine and massive performance boosts in the upcoming Tailwind CSS compiler.",
    category: "Web Dev",
    author: {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    date: "Jan 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=1964",
    featured: false,
    content: `
      <h2>The Rust Compiler</h2>
      <p>Tailwind v4 abandons Node.js processors for a custom built Rust engine, resulting in compilation speeds that are effectively instantaneous.</p>
    `
  },
  {
    id: "b08",
    slug: "color-theory-dark-mode",
    title: "Color Theory for Dark Mode UIs",
    excerpt: "Why you shouldn't just invert your colors. Designing accessible dark themes requiring nuanced desaturation.",
    category: "Design",
    author: {
      name: "Marcus Thorne",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    date: "Jan 05, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070",
    featured: false,
    content: `
      <h2>The Problem with Pure Black</h2>
      <p>Never use #000000. It causes severe eye strain when contrasted with white text due to high halation. Instead, use a very dark gray or slate.</p>
    `
  }
];

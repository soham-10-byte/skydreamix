import React, { useEffect, useRef } from 'react';
import { ArrowRight, Clock, User, Calendar } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2026',
    category: 'Engineering',
    author: 'Aarav Sharma',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Why AI-Driven UI/UX is the New Standard',
    category: 'Design',
    author: 'Meera Patel',
    date: 'Oct 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Securing Cloud Architectures Like a Pro',
    category: 'Security',
    author: 'Vikram Singh',
    date: 'Sep 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const BlogPreview = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      // Stagger reveal animation
      gsap.fromTo(cardsRef.current, 
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 bg-[#020206] relative z-10"
    >
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6 text-center lg:text-left items-center lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-[#00E5FF] font-black uppercase tracking-[0.3em] text-sm mb-4">
              Insights & News
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter">
              Latest<br/>Articles
            </h2>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center gap-4 group interactive">
              <span className="text-white font-bold uppercase tracking-[0.15em] text-sm border-b border-white/20 pb-1 group-hover:border-[#00E5FF] transition-colors">
                Read All Articles
              </span>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#00E5FF] group-hover:bg-[#00E5FF]/10">
                <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#00E5FF]" />
              </div>
            </button>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article 
              key={post.id}
              ref={el => cardsRef.current[i] = el}
              className="group flex flex-col bg-white/[0.03] rounded-3xl overflow-hidden border border-white/10 hover:border-[#00E5FF]/40 hover:shadow-[0_0_40px_rgba(0,229,255,0.1)] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-56 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[#00E5FF] text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-[#8892A4] text-[12px] font-semibold tracking-wider mb-4 uppercase">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug mb-6 group-hover:text-[#00E5FF] transition-colors">
                  {post.title}
                </h3>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-[#8892A4]">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-colors group-hover:bg-[#00E5FF]/10 group-hover:border-[#00E5FF]/30">
                    <ArrowRight className="w-4 h-4 text-white group-hover:text-[#00E5FF] transition-colors" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="md:hidden mt-12 flex justify-center">
          <button className="flex items-center gap-4 group interactive">
            <span className="text-white font-bold uppercase tracking-[0.15em] text-sm border-b border-[#00E5FF] pb-1">
              Read All Articles
            </span>
            <ArrowRight className="w-5 h-5 text-[#00E5FF] animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

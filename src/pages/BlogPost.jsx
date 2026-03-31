import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Clock, Calendar, ArrowLeft, Copy, Check } from 'lucide-react';
import { blogData } from '../utils/blogData';
import TableOfContents from '../components/blog/TableOfContents';
import BlogCard from '../components/blog/BlogCard';

const BlogPost = () => {
  const { slug } = useParams();
  const contentRef = useRef(null);
  
  const post = blogData.find(p => p.slug === slug);
  const relatedPosts = blogData.filter(p => p.id !== post?.id).slice(0, 3);

  // Scroll Progress logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Code Copy Hook logic injection
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-40 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-[#00E5FF] hover:underline">Return to Blog</Link>
      </div>
    );
  }

  // Handle Coping code blocks natively parsing the HTML
  const handleCopy = (codeContent) => {
    navigator.clipboard.writeText(codeContent);
    setCopiedCode(codeContent);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020206] text-white selection:bg-[#00E5FF] selection:text-black">
      
      {/* Top Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#00E5FF] origin-left z-[200]" 
        style={{ scaleX }}
      />

      <main className="pt-24 lg:pt-32 pb-32 xl:max-w-[1920px] mx-auto">
        
        {/* Back Link */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Directory</span>
          </Link>
        </div>

        {/* Hero Plate */}
        <article className="max-w-[1280px] mx-auto px-6 sm:px-12 w-full">
          
          <div className="max-w-[900px]">
            <span className="bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full inline-block mb-6">
              {post.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-8 border-t border-white/5 pt-8 mb-12">
              <div className="flex items-center gap-4">
                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-white/20"/>
                <div>
                  <div className="text-sm font-bold text-white tracking-wide">{post.author.name}</div>
                  <div className="text-xs text-gray-500 font-medium tracking-widest uppercase">Author</div>
                </div>
              </div>

              <div className="w-px h-8 bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
                <span className="flex items-center gap-2"><Calendar size={16} className="text-[#00E5FF]"/> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={16} className="text-[#00E5FF]"/> {post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden mb-16 relative">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
          </div>

          {/* Content & Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16 lg:gap-24">
            
            {/* Main Content Body */}
            <div>
              {/* Note: We dangerouslySetInnerHTML, but apply custom Tailwind Prose styling via wrapper class. */}
              {/* In a real app we'd parse the HTML directly and inject Copy buttons onto PRE tags. */}
              {/* For simulation, we'll render it and let CSS handle the styling. */}
              <div 
                ref={contentRef}
                className="prose prose-invert prose-lg max-w-none 
                  prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-4xl prose-h2:mb-6 prose-h2:mt-16 prose-h3:text-2xl
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                  prose-a:text-[#00E5FF] prose-a:no-underline hover:prose-a:underline
                  prose-pre:bg-[#0A0A0A] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl prose-pre:p-6
                  prose-code:text-[#00E5FF] prose-code:before:content-none prose-code:after:content-none
                  prose-img:rounded-2xl prose-img:border prose-img:border-white/5"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <TableOfContents contentRef={contentRef} />
            </aside>
          </div>

        </article>

        {/* Related Posts */}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12 mt-32 border-t border-white/5 pt-20">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-black text-white tracking-tighter">
              Keep Reading
            </h2>
            <Link to="/blog" className="text-[#00E5FF] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map(p => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default BlogPost;

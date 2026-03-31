import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Search } from 'lucide-react';
import { blogData } from '../utils/blogData';

import BlogCard from '../components/blog/BlogCard';
import FeaturedBlogCard from '../components/blog/FeaturedBlogCard';

const CATEGORIES = ["All", "Web Dev", "Marketing", "Design", "Software"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Initial load GSAP SplitText reveal
    if (headerRef.current) {
      const chars = headerRef.current.querySelectorAll('.char');
      gsap.fromTo(chars,
        { y: 50, opacity: 0, rotateX: -90 },
        { 
          y: 0, 
          opacity: 1, 
          rotateX: 0, 
          stagger: 0.05, 
          duration: 0.8, 
          ease: "back.out(1.7)",
          delay: 0.2
        }
      );
    }
  }, []);

  // Filter Logic
  const filteredPosts = blogData.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(p => p.featured);
  const regularPosts = filteredPosts.filter(p => !p.featured || (p.featured && p.id !== featuredPost?.id));

  return (
    <div className="pt-32 pb-32 px-6 sm:px-12 xl:max-w-[1920px] mx-auto min-h-screen">
      
      {/* Search & Hero Container */}
      <div className="max-w-[1280px] mx-auto mb-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* GSAP Heading */}
        <h1 
          ref={headerRef} 
          className="text-5xl md:text-7xl font-black text-white tracking-tighter w-full md:w-auto text-center md:text-left flex"
        >
          {"Latest Insights".split("").map((char, i) => (
            <span key={i} className={`inline-block char ${char === " " ? "w-4" : ""}`}>{char}</span>
          ))}
        </h1>

        {/* Animated Search Input */}
        <div className="w-full md:w-[400px] relative">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#0070F3] transition-opacity duration-500 blur-md ${isFocused ? 'opacity-50' : 'opacity-0'}`} />
          <div className="relative flex items-center bg-white/[0.05] border border-white/10 rounded-full px-6 py-4 focus-within:border-[#00E5FF]/50 transition-colors bg-clip-padding backdrop-filter backdrop-blur-md">
            <Search size={20} className={`mr-3 transition-colors ${isFocused ? 'text-[#00E5FF]' : 'text-gray-500'}`} />
            <input 
              type="text" 
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="bg-transparent border-none outline-none text-white w-full placeholder:text-gray-500 font-medium"
            />
          </div>
        </div>

      </div>

      <div className="max-w-[1280px] mx-auto">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-16 pb-6 border-b border-white/5 scrollbar-hide overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all shrink-0 ${
                activeCategory === cat 
                  ? 'bg-white text-black snap-start' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Orchestrator */}
        <AnimatePresence mode="popLayout">
          {filteredPosts.length > 0 ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12 sm:space-y-16"
            >
              {/* Featured Top Row */}
              {featuredPost && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
                >
                  <FeaturedBlogCard post={featuredPost} />
                </motion.div>
              )}

              {/* standard 3-col Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {regularPosts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    layout // Animate sorting/filtering physically
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: i * 0.1, duration: 0.5 } }}
                    exit={{ scale: 0.9, opacity: 0 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
             <motion.div 
               key="empty"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               className="py-32 text-center"
             >
               <h3 className="text-2xl font-bold text-white mb-4">No insights found</h3>
               <p className="text-gray-500">We couldn't find any articles matching your search criteria.</p>
             </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Blog;

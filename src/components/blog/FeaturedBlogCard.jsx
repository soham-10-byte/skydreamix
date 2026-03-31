import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';

const FeaturedBlogCard = ({ post }) => {
  if (!post) return null;

  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <motion.div 
        whileHover={{ y: -4 }}
        className="w-full rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 flex flex-col lg:flex-row transition-colors duration-500 group-hover:border-[#00E5FF]/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_20px_60px_rgba(0,229,255,0.08)]"
      >
        {/* Left: Huge Image */}
        <div className="w-full lg:w-3/5 h-[300px] sm:h-[400px] lg:h-auto relative overflow-hidden shrink-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
        </div>

        {/* Right: Content */}
        <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-black/40 backdrop-blur-sm lg:bg-transparent -mt-20 lg:mt-0 z-10">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-[#00E5FF] text-black text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full">
              {post.category}
            </span>
            <span className="text-xs font-bold tracking-widest text-white/40 uppercase hidden sm:block">
              Featured Insight
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-[1.15] group-hover:text-[#00E5FF] transition-colors tracking-tight">
            {post.title}
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto">
            {/* Author Map */}
            <div className="flex items-center gap-4">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div>
                <p className="text-sm font-bold text-white mb-0.5">{post.author.name}</p>
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                  <span className="flex items-center gap-1.5"><Calendar size={12}/>{post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12}/>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Read Btn */}
            <div className="hidden sm:flex items-center gap-2 text-[#00E5FF] font-bold text-sm tracking-widest uppercase">
              Read Article <ArrowUpRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default FeaturedBlogCard;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block h-full group">
      <motion.div 
        whileHover={{ y: -8 }}
        className="h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden flex flex-col transition-colors duration-500 group-hover:bg-white/[0.04] group-hover:border-[#00E5FF]/30 group-hover:shadow-[0_10px_40px_rgba(0,229,255,0.05)]"
      >
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-[#00E5FF] text-black text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex flex-col flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#00E5FF] transition-colors line-clamp-2">
            {post.title}
          </h3>
          
          <p className="text-sm text-gray-400 mb-6 flex-1 line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* Meta Footer */}
          <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-8 h-8 rounded-full border border-white/20"
              />
              <span className="text-xs font-bold text-white">{post.author.name}</span>
            </div>

            <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default BlogCard;

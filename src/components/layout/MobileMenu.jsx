import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from '../../animations/gsap.config';
import { ArrowUpRight, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';

const MobileMenu = ({ navLinks, onClose }) => {
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background reveal
      gsap.fromTo(menuRef.current, 
        { x: '100%' }, 
        { x: 0, duration: 0.8, ease: 'power4.inOut' }
      );

      // Staggered links reveal
      gsap.fromTo(linksRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'power3.out' }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={menuRef}
      className="fixed inset-0 bg-black z-[200] flex flex-col justify-between p-12 overflow-hidden"
    >
      <div className="flex flex-col gap-12 mt-20">
        {navLinks.map((link, i) => (
          <a
            key={link.name}
            ref={el => linksRef.current[i] = el}
            href={link.href}
            onClick={onClose}
            className="text-4xl font-black uppercase tracking-tighter flex items-center justify-between group hover:text-accent-1 transition-colors"
          >
            {link.name}
            <ArrowUpRight size={32} className="opacity-20 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-6">
          <button className="flex-1 bg-white/5 border border-white/10 p-5 rounded-2xl flex items-center justify-between group hover:border-accent-1/50 transition-colors">
            <div className="flex items-center gap-4">
              <Phone size={20} className="text-accent-1" />
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-white/50">Call Us</p>
                <p className="text-sm font-bold">+1 (234) 567-890</p>
              </div>
            </div>
            <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <div className="flex gap-4">
            {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-1 hover:text-black transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest text-white/30">SkyDreamix 2026</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import logo from '../../assets/logo.webp';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageSquare,
  Globe,
  Smartphone,
  Code2,
  Search,
  Palette
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const watermarkRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Watermark parallax
      gsap.fromTo(watermarkRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 0.03, 
          duration: 2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top bottom',
            scrub: 1
          }
        }
      );

      // Stagger sections
      gsap.from('.footer-section', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=100',
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      className="bg-[#020206] pt-32 pb-12 px-6 sm:px-12 relative overflow-hidden border-t border-white/5"
    >
      {/* 1. BACKGROUND MONOLITH WATERMARK */}
      <div 
        ref={watermarkRef}
        className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 select-none pointer-events-none"
      >
        <h2 className="text-[15vw] font-black text-white tracking-[-0.05em] leading-none whitespace-nowrap opacity-5">
          SKYDREAMIX
        </h2>
      </div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        
        {/* TOP CTA / PRE-FOOTER */}
        <div className="footer-section mb-24 border-b border-white/5 pb-24 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-2xl">
            <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
              READY TO <span className="text-[#00E5FF]">SCALE</span> YOUR <br /> DIGITAL VISION?
            </h3>
            <p className="text-white/40 text-sm tracking-wide max-w-lg">
              Partner with SkyDreamix to engineer high-performance systems and elite brand experiences that dominate your market.
            </p>
          </div>
          <Link 
            to="/contact" 
            className="group px-10 py-5 bg-white text-black rounded-full font-black text-xs tracking-[0.2em] uppercase hover:bg-[#00E5FF] transition-all flex items-center gap-4"
          >
            Start a Project
            <span className="w-8 h-px bg-black group-hover:w-12 transition-all" />
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-24">
          
          {/* Column 1: Brand & Tagline */}
          <div className="footer-section space-y-10">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="SKYDREAMIX Logo" className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <p className="text-white/40 text-xs leading-relaxed font-medium uppercase tracking-widest max-w-[280px]">
              Your trusted technology partner offering web development, mobile apps, custom software, digital marketing, and SEO to drive business growth.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1.5 border border-white/10 rounded-md text-[9px] font-black uppercase tracking-widest text-white/30 backdrop-blur-md">ISO 9001:2015</span>
              <span className="px-3 py-1.5 border border-white/10 rounded-md text-[9px] font-black uppercase tracking-widest text-white/30 backdrop-blur-md">MSME</span>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="footer-section">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 mb-10">Our Services</h4>
            <ul className="space-y-5">
              {[
                { name: 'Web Development', icon: Globe },
                { name: 'Mobile App Development', icon: Smartphone },
                { name: 'Custom Software', icon: Code2 },
                { name: 'SEO & Digital Marketing', icon: Search },
                { name: 'Graphics & Video Editing', icon: Palette }
              ].map((s, i) => (
                <li key={i} className="group flex items-center gap-4 text-[11px] font-bold text-white/50 hover:text-[#00E5FF] transition-colors cursor-pointer">
                  <s.icon size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                  <span className="uppercase tracking-widest">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-section">
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 mb-10">Quick Links</h4>
            <ul className="space-y-5">
              {['About Us', 'Portfolio', 'Blog', 'Team', 'Contact'].map((l, i) => (
                <li key={i}>
                  <Link 
                    to={`/${l.toLowerCase().replace(' ', '')}`} 
                    className="text-[11px] font-black uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#00E5FF] transition-colors" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Studio */}
          <div className="footer-section space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30 mb-10">Contact Info</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-[#00E5FF] shrink-0" />
                  <div className="text-[11px] font-bold tracking-wider text-white/60">
                    <p className="uppercase opacity-40 mb-1 font-black">Headquarters</p>
                    <p>India</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone size={18} className="text-[#00E5FF] shrink-0" />
                  <div className="text-[11px] font-bold tracking-wider text-white/60">
                    <p className="uppercase opacity-40 mb-1 font-black">Call Us</p>
                    <a href="tel:+919433277194" className="hover:text-white">+91 9433277194</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={18} className="text-[#00E5FF] shrink-0" />
                  <div className="text-[11px] font-bold tracking-wider text-white/60">
                    <p className="uppercase opacity-40 mb-1 font-black">Inquiries</p>
                    <a href="mailto:contact@skydreamix.co.in" className="hover:text-white">contact@skydreamix.co.in</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Socials Group */}
            <div className="flex gap-4">
              {[Linkedin, Facebook, Instagram, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:bg-[#00E5FF] hover:text-black hover:border-[#00E5FF] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM LEGAL BAR */}
        <div className="footer-section pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
            © 2026 SkyDreamix Tech Solutions • All rights reserved • Crafted for the Future
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/20">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>

      {/* FLOATING ACTION HUB (WhatsApp & Top) */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919433277194" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageSquare className="group-hover:rotate-12 transition-transform" />
        </a>

        {/* Scroll Top Button */}
        <button 
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-[#00E5FF] hover:text-black transition-all group"
        >
          <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

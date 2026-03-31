import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDown, ChevronDown } from 'lucide-react';
import Hero3D from '../components/three/Hero3D';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import WhyChooseUs from '../components/home/WhyChooseUs';
import PortfolioPreview from '../components/home/PortfolioPreview';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import HomeCTA from '../components/home/HomeCTA';
import { fadeUp, staggerContainer } from '../animations/variants';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  useEffect(() => {
    // Bouncing scroll indicator
    gsap.to('.scroll-indicator', {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  const companyTag = "GLOBAL • PREMIER • TECHNOLOGY • PARTNER";
  const h1Text = "Transform Your Digital Future";
  const sublineText = "Enterprise-grade IT solutions engineered for global scale — bridging the gap between imagination and world-class execution.";

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen">
      {/* ═══ 3D BACKGROUND ═══ */}
      <div className="fixed inset-0 z-0">
        <Hero3D />
      </div>

      {/* ═══ HERO CONTENT ═══ */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative z-10 h-screen flex flex-col justify-center container mx-auto px-6 sm:px-12 lg:px-24 w-full max-w-[1920px]"
      >
        <div className="max-w-7xl 2xl:max-w-full flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0">
          {/* Company Tag */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[10px] sm:text-xs font-black tracking-[0.4em] text-accent-1 uppercase mb-6 flex items-center gap-2"
          >
            <span className="w-8 h-px bg-accent-1/50" />
            {companyTag}
          </motion.p>

          {/* H1 Char Reveal with Word Wrapping & Gradient Styling */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            {h1Text.split(" ").map((word, wordIndex) => {
              const isGradient = wordIndex >= 2; // "Digital Future"
              return (
                <span 
                  key={wordIndex} 
                  className={`inline-block whitespace-nowrap mr-[0.2em] ${
                    isGradient ? 'gradient-text' : 'text-white'
                  }`}
                >
                  {word.split("").map((char, charIndex) => {
                    const globalIndex = h1Text.split(" ").slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0) + charIndex;
                    return (
                      <motion.span
                        key={charIndex}
                        initial={{ y: "110%", opacity: 0, filter: "blur(15px)" }}
                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        whileHover={{ 
                          y: -5,
                          x: Math.random() * 4 - 2,
                          color: "#00E5FF",
                          transition: { duration: 0.1 }
                        }}
                        transition={{ 
                          y: { duration: 1.2, delay: 0.5 + globalIndex * 0.02, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 1.2, delay: 0.5 + globalIndex * 0.02 },
                          filter: { duration: 1.5, delay: 0.5 + globalIndex * 0.02 }
                        }}
                        className="inline-block cursor-default"
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                  {/* Force a break after "Your" to match the 2-line structure in the image */}
                  {wordIndex === 1 && <br />}
                </span>
              );
            })}
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-white/60 max-w-2xl mb-12 flex flex-wrap justify-center lg:justify-start gap-x-2 overflow-hidden">
            {sublineText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.5 + index * 0.05,
                  ease: "power2.out"
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-6 mb-20"
          >
            <button className="px-10 py-4 bg-accent-1 text-black font-black uppercase tracking-widest text-xs rounded-full hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all interactive">
              Get Started
            </button>
            <button className="px-10 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all interactive">
              View Our Work
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-black">Explore</span>
          <div className="scroll-indicator text-accent-1 opacity-50">
            <ChevronDown size={24} />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <Services />

      {/* Stats & Partners Section */}
      <Stats />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Portfolio Preview Section */}
      <PortfolioPreview />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* CTA Section */}
      <HomeCTA />
    </div>
  );
};

export default Home;

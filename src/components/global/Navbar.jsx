import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Globe, Smartphone, Code2, Search, Gamepad2, GraduationCap, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { servicesData } from '../../utils/servicesData';
import logo from '../../assets/logo.webp';


const getIcon = (iconName) => {
  switch (iconName) {
    case 'Globe': return <Globe size={20} />;
    case 'Smartphone': return <Smartphone size={20} />;
    case 'Code2': return <Code2 size={20} />;
    case 'Search': return <Search size={20} />;
    case 'Gamepad2': return <Gamepad2 size={20} />;
    case 'GraduationCap': return <GraduationCap size={20} />;
    default: return <Code2 size={20} />;
  }
};

const serviceKeys = Object.keys(servicesData);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);

    // Initial entrance animation
    gsap.fromTo(navRef.current,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out' }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-6 sm:px-12 ${isScrolled
          ? 'bg-white/5 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="SKYDREAMIX Logo" className="h-16 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10 text-[10px] uppercase tracking-[0.25em] font-bold">
            <Link to="/" className="hover:text-accent-1 transition-colors relative group">
              Home
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-1 transition-all group-hover:w-full" />
            </Link>
            <Link to="/about" className="hover:text-accent-1 transition-colors relative group">
              About
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-1 transition-all group-hover:w-full" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-accent-1 transition-colors focus:outline-none uppercase">
                Services <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-black/90 backdrop-blur-3xl border border-white/10 rounded-2xl p-8 grid grid-cols-2 gap-8 shadow-2xl"
                  >
                    {serviceKeys.map((key) => {
                      const service = servicesData[key];
                      return (
                        <Link
                          key={key}
                          to={`/services/${service.slug}`}
                          className={`group/item flex gap-4 p-4 rounded-xl transition-colors hover:bg-white/5 border border-transparent hover:${service.borderAccent}/20`}
                        >
                          <div className={`transition-transform duration-300 group-hover/item:scale-110 ${service.accent}`}>
                            {getIcon(service.icon)}
                          </div>
                          <div>
                            <h4 className={`text-xs font-bold mb-1 tracking-wider uppercase transition-colors text-white group-hover/item:${service.accent}`}>
                              {service.name}
                            </h4>
                            <p className="text-[10px] text-gray-500 lowercase leading-relaxed line-clamp-2">{service.tagline}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/portfolio" className="hover:text-accent-1 transition-colors relative group">
              Portfolio
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-1 transition-all group-hover:w-full" />
            </Link>
            <Link to="/blog" className="hover:text-accent-1 transition-colors relative group">
              Blog
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-1 transition-all group-hover:w-full" />
            </Link>
            <Link to="/contact" className="hover:text-accent-1 transition-colors relative group">
              Contact
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-accent-1 transition-all group-hover:w-full" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/contact"
              className="px-6 py-3 border border-accent-1 text-accent-1 text-[10px] uppercase tracking-widest font-black rounded-full hover:bg-accent-1 hover:text-black transition-all duration-500 overflow-hidden relative group"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-accent-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black flex flex-col justify-center items-center gap-12 text-center p-12 z-[101]"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-6 md:gap-8 overflow-y-auto w-full px-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-4xl sm:text-5xl font-black uppercase tracking-tighter hover:text-accent-1 transition-colors block py-2"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-6 sm:mt-8 bg-accent-1 text-black px-12 py-4 sm:py-5 rounded-full font-black uppercase tracking-widest text-sm w-full max-w-xs mx-auto"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

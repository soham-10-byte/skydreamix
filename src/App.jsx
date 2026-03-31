import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { initSmoothScroll } from './utils/smoothScroll'

// Global Components
import NoiseOverlay from './components/global/NoiseOverlay'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'
import ScrollProgress from './components/ui/ScrollProgress'

// Page Components
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <main className="bg-primary text-white min-h-screen selection:bg-accent-1 selection:text-black">
        <NoiseOverlay />
        <ScrollProgress />
        <Navbar />
        
        <AnimatedRoutes />
        
        <Footer />
      </main>
    </Router>
  )
}

export default App

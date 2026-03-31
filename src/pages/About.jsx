import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import MissionVision from '../components/about/MissionVision';
import Team from '../components/about/Team';
import Certifications from '../components/about/Certifications';
import HomeCTA from '../components/home/HomeCTA'; // Reusing the CTA from home

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="relative bg-primary">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <Team />
      <Certifications />
      
      {/* Reusing HomeCTA to end the page strongly */}
      <HomeCTA />
    </div>
  );
};

export default About;

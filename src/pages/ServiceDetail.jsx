import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../utils/servicesData';
import ServiceHero from '../components/services/detail/ServiceHero';
import LeftRail from '../components/services/detail/LeftRail';
import OverviewSection from '../components/services/detail/sections/OverviewSection';
import OfferingsGrid from '../components/services/detail/sections/OfferingsGrid';
import TechStackPills from '../components/services/detail/sections/TechStackPills';
import ProcessTimeline from '../components/services/detail/sections/ProcessTimeline';
import PricingTiers from '../components/services/detail/sections/PricingTiers';
import ServiceFAQ from '../components/services/detail/sections/ServiceFAQ';
import ProjectsCarousel from '../components/services/detail/sections/ProjectsCarousel';

const ServiceDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Scroll to top automatically when slug changes
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  useEffect(() => {
    if (servicesData[slug]) {
      setData(servicesData[slug]);
    } else {
      setData("not-found");
    }
  }, [slug]);

  if (data === "not-found") return <Navigate to="/services" replace />;
  if (!data || (data !== "not-found" && data.slug !== slug)) {
    return <div className="min-h-screen bg-[#02040A]" />; // loading/sync state
  }

  return (
    <div key={slug} className="bg-[#02040A] min-h-screen text-white text-left selection:bg-white/20">
      <div className="flex flex-col md:flex-row w-full max-w-[1920px] mx-auto min-h-screen">
        
        {/* LEFT RAIL (Desktop/Tablet) */}
        <LeftRail data={data} />

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 flex flex-col min-w-0 pb-32">
          
          {/* HERO BANNER */}
          <ServiceHero data={data} />

          {/* PAGE CONTENT CONTAINER (Constrained for reading width) */}
          <div className="w-full xl:max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-24">
            
            <OverviewSection data={data} />
            <OfferingsGrid data={data} />
            <ProjectsCarousel data={data} />
            <TechStackPills data={data} />
            <ProcessTimeline data={data} />
            <PricingTiers data={data} />
            <ServiceFAQ data={data} />

          </div>
        </main>
      </div>
    </div>
  );
};

export default ServiceDetail;

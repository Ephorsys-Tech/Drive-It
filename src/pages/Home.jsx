import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import QuickSearchWidget from '../components/home/QuickSearchWidget';
import ParallaxComponent from '../components/ui/parallax-scrolling';
import CarModelBrandsScroll from '../components/home/CarModelBrandsScroll';
import FeaturedFleet from '../components/home/FeaturedFleet';
import WhyChooseUs from '../components/home/WhyChooseUs';
import CarStoryScroll from '../components/home/CarStoryScroll';
import HowItWorks from '../components/home/HowItWorks';
import ServicesPreview from '../components/home/ServicesPreview';
import CustomerReviews from '../components/home/CustomerReviews';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';
import CarSpecsModal from '../components/cars/CarSpecsModal';

export default function Home() {
  const [activeCarModal, setActiveCarModal] = useState(null);

  return (
    <div className="flex flex-col">
      {/* Hero with dynamic automotive graphics */}
      <HeroSection />

      {/* Quick Booking Search Bar */}
      <QuickSearchWidget />

      {/* 3D Multi-Layer Horizon Parallax with Modern Car */}
      {/* <ParallaxComponent /> */}

      {/* Featured Fleet with Filter Tabs */}
      <FeaturedFleet onQuickView={(car) => setActiveCarModal(car)} />

      {/* Why Choose DriveIT */}
      <WhyChooseUs />

      {/* Cinematic Automotive Story Scroll (GSAP Pinning & Unpeeling) */}
      <CarStoryScroll />

      {/* Easy 3-Step Process */}
      <HowItWorks />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Real Customer Testimonials */}
      <CustomerReviews />

      {/* Interactive FAQ Accordion */}
      <FaqSection />

      {/* Call to action & booking banner */}
      <CtaBanner />

      {/* Quick vehicle specs modal */}
      {activeCarModal && (
        <CarSpecsModal
          car={activeCarModal}
          onClose={() => setActiveCarModal(null)}
        />
      )}
    </div>
  );
}

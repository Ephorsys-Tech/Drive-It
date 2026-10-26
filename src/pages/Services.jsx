import React from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import AirportServiceGuide from '../components/services/AirportServiceGuide';
import ServiceInquiry from '../components/services/ServiceInquiry';
import FaqSection from '../components/home/FaqSection';

export default function Services() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesList />
      <AirportServiceGuide />
      <ServiceInquiry />
      <FaqSection />
    </div>
  );
}

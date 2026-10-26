import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import StatsCounter from '../components/about/StatsCounter';
import FleetComparison from '../components/about/FleetComparison';
import AboutPolaroidRoadtrips from '../components/about/AboutPolaroidRoadtrips';
import CoreValues from '../components/about/CoreValues';
import CustomerReviews from '../components/home/CustomerReviews';
import CtaBanner from '../components/home/CtaBanner';

export default function About() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutStory />
      <StatsCounter />
      <FleetComparison />
      <AboutPolaroidRoadtrips />
      <CoreValues />
      <CustomerReviews />
      <CtaBanner />
    </div>
  );
}

import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactForm from '../components/contact/ContactForm';
import MapEmbed from '../components/contact/MapEmbed';
import FaqSection from '../components/home/FaqSection';

export default function Contact() {
  return (
    <div className="flex flex-col bg-slate-50">
      <ContactHero />
      <ContactInfoCards />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="reveal-left lg:col-span-7">
            <ContactForm />
          </div>
          <div className="reveal-right delay-100 lg:col-span-5">
            <MapEmbed />
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}

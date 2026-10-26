import React from 'react';
import FaqSections from '@/components/ui/faq-sections';
import { faqData } from '../../data/reviewsData';
import { Phone } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function FaqSection() {
  const formattedFaqs = faqData.map((item) => ({
    question: item.q,
    answer: item.a,
  }));

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Side-by-Side FAQ Component */}
        <FaqSections
          badge="Got Questions?"
          title="Frequently Asked Questions"
          description="Everything you need to know about renting a sanitized self-drive car in Bhubaneswar with DriveIT. Transparent policies, zero hidden surcharges."
          image="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
          faqs={formattedFaqs}
        />

        {/* Quick Help Strip Below FAQ */}
        <div className="reveal-on-scroll delay-150 max-w-4xl mx-auto mt-14 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xs">
          <div>
            <h4 className="text-base sm:text-lg font-black text-slate-900">
              Have another question not answered above?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Our 24/7 Bhubaneswar support desk is ready on WhatsApp and direct phone.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917008732102"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4 text-red-500" />
              <span>Call +91 7008732102</span>
            </a>

            <a
              href="https://wa.me/917008732102?text=Hello%20DriveIT,%20I%20have%20a%20question%20regarding%20car%20rental"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

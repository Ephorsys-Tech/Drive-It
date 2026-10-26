import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import TextReveal from '../common/TextReveal';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqSectionsProps {
  badge?: string;
  title?: string;
  description?: string;
  image?: string;
  faqs?: FaqItem[];
  className?: string;
}

const defaultFaqs: FaqItem[] = [
  {
    question: "What documents are required to rent a car?",
    answer: "You only need a valid Original Indian Driving License (minimum 1 year old) and a Government ID proof (Aadhaar Card or Passport). International Driving Permit (IDP) is accepted for foreign travelers.",
  },
  {
    question: "What is the security deposit and refund timeline?",
    answer: "We offer zero to minimal security deposit options depending on vehicle segment. Deposits are refunded instantly to your bank account / UPI within 2 hours of post-trip vehicle inspection.",
  },
  {
    question: "Is doorstep delivery available at Bhubaneswar Airport?",
    answer: "Yes! We provide 24/7 instant airport delivery right outside BBI arrivals terminal, Bhubaneswar Railway Station, or directly at your hotel or residence across Bhubaneswar, Cuttack, and Puri.",
  },
  {
    question: "Are kilometers unlimited or capped?",
    answer: "We have both flexible unlimited kilometer packages and standard daily packages with generous allowances, giving you total freedom for your roadtrip.",
  },
  {
    question: "What if the car breaks down during the trip?",
    answer: "All our vehicles are backed by 24/7 Roadside Assistance across Odisha. In case of mechanical issues, our support team dispatches emergency help or provides vehicle replacement immediately.",
  },
];

export const FaqSections = ({
  badge = "FAQ's",
  title = "Looking for answers?",
  description = "Everything you need to know about renting a self-drive car in Bhubaneswar with DriveIT. Transparent policies, zero hidden charges.",
  image = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  faqs = defaultFaqs,
  className,
}: FaqSectionsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("max-w-5xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8", className)}>
      {/* Visual Image - Compact Height Matching Accordion */}
      <div className="reveal-left w-full md:w-5/12 shrink-0">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 h-[280px] sm:h-[360px] lg:h-[420px] w-full">
          <img
            className="w-full h-full object-cover object-bottom rounded-3xl transition-transform duration-500 hover:scale-105"
            src={image}
            alt="Customer assistance and roadtrip"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white text-[11px] sm:text-xs font-semibold bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
            <span>24/7 Support Assistance Available Across Odisha</span>
          </div>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="reveal-right delay-100 w-full md:w-7/12 text-left">
        <p className="text-red-600 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
          {badge}
        </p>
        <TextReveal
          text={title}
          as="h2"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
        />
        <p className="text-xs sm:text-sm text-slate-500 mt-2 pb-4 leading-relaxed font-normal">
          {description}
        </p>

        <div className="divide-y divide-slate-200/80 border-t border-slate-200/80">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className="py-4 cursor-pointer select-none group"
                key={index}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`text-sm sm:text-base font-bold transition-colors ${isOpen ? 'text-red-600' : 'text-slate-800 group-hover:text-red-600'}`}>
                    {faq.question}
                  </h3>
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0",
                    isOpen ? "bg-red-50 text-red-600 rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                  )}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out text-xs sm:text-sm text-slate-600 leading-relaxed",
                    isOpen ? "max-h-60 opacity-100 pt-3" : "max-h-0 opacity-0"
                  )}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FaqSections;

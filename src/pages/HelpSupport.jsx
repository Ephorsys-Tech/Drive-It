import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  ChevronDown,
  Send,
  CheckCircle,
  LifeBuoy,
  Car,
  CreditCard,
  Calendar,
  Sparkles
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/BrandIcons';

export default function HelpSupport() {
  const [activeFaqCategory, setActiveFaqCategory] = useState('booking');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    topic: 'Booking Inquiry',
    message: ''
  });

  const faqCategories = [
    { id: 'booking', label: 'Booking & Eligibility', icon: Car },
    { id: 'deposit', label: 'Deposit & Payments', icon: CreditCard },
    { id: 'pickup', label: 'Pickup & Delivery', icon: MapPin },
    { id: 'trip', label: 'On-Road & Emergency', icon: LifeBuoy },
  ];

  const faqs = {
    booking: [
      {
        q: 'What documents do I need to rent a self-drive car with DriveIT?',
        a: 'You need an original Indian Driving License (valid for at least 1 year) and a valid Government Photo ID (Aadhaar Card, Passport, or Voter ID). International travelers can present their passport and an International Driving Permit (IDP).'
      },
      {
        q: 'What is the minimum age requirement?',
        a: 'The minimum age to rent and drive any DriveIT car is 21 years with a valid driving license.'
      },
      {
        q: 'Can a friend or family member drive the car?',
        a: 'Only individuals who have submitted their KYC documents and are approved during booking are legally authorized to drive. You can add a co-driver during booking free of charge by submitting their license.'
      },
      {
        q: 'How early should I book my self-drive car?',
        a: 'We recommend booking at least 1 to 2 days in advance, especially during weekends, festive seasons (like Durga Puja or Rath Yatra), and holidays to secure your preferred car model.'
      }
    ],
    deposit: [
      {
        q: 'How does the Security Deposit refund process work?',
        a: 'Refundable security deposits range from ₹0 (under verified zero-deposit plans) up to ₹3,000–₹5,000 depending on vehicle segment. Once you return the car and the return inspection is completed, the remaining deposit is refunded directly to your original bank/UPI account within 24 to 48 hours.'
      },
      {
        q: 'What payment modes are accepted?',
        a: 'We accept Google Pay, PhonePe, Paytm, all UPI apps, Net Banking, Credit Cards, Debit Cards, and direct bank transfers.'
      },
      {
        q: 'Are Fastag tolls and fuel included in the rental price?',
        a: 'All cars come with pre-fitted Fastag. Toll plaza charges are tracked digitally and adjusted at checkout. Fuel follows our transparent "Same-to-Same" policy — return the vehicle with the same fuel level you received.'
      },
      {
        q: 'Will I get an official GST tax invoice for company reimbursement?',
        a: 'Yes, absolutely! We provide formal GST invoices upon request with your company’s GSTIN for seamless corporate expense reimbursement.'
      }
    ],
    pickup: [
      {
        q: 'Do you deliver cars directly to Bhubaneswar Airport (BBI)?',
        a: 'Yes! We offer 24/7 doorstep and airport delivery. Our delivery representative will hand over the keys and assist you right outside Bhubaneswar Airport Arrival terminal.'
      },
      {
        q: 'Can I pick up the car from Bhubaneswar Railway Station?',
        a: 'Yes, we provide instant car handovers at Master Canteen, Bhubaneswar Railway Station Platform 1 & Platform 4 exits, and other prime city hubs like Patia, Khandagiri, and Jaydev Vihar.'
      },
      {
        q: 'What happens during vehicle handover inspection?',
        a: 'Our representative performs a 3-minute joint walkaround recording odometer reading, fuel level, and taking 360° photos/videos of any existing scratches on our digital checklist so you are never held accountable for pre-existing marks.'
      }
    ],
    trip: [
      {
        q: 'What should I do in case of a breakdown or flat tire?',
        a: 'Call our dedicated 24/7 emergency roadside assistance team immediately at +91 7008732102. We provide statewide roadside mechanics, tire puncture support, or vehicle replacement anywhere across Odisha.'
      },
      {
        q: 'Can I extend my trip while on the road?',
        a: 'Yes! As long as the vehicle is not booked for another customer immediately after your slot, you can extend your trip by notifying us via WhatsApp or phone at least 4 hours before your scheduled return.'
      },
      {
        q: 'Is there a speed limit on DriveIT cars?',
        a: 'Yes, as mandated by the Ministry of Road Transport and Highways (MoRTH) and Odisha RTO, cars are fitted with speed governors capped at 100 km/h to ensure your safety on expressways.'
      },
      {
        q: 'Can I take the car out of Odisha?',
        a: 'Yes! Our commercial fleet comes with valid All-India Tourist Permits. Please notify our team prior to departure so we can ensure inter-state road tax formalities are in order for seamless state border crossings.'
      }
    ]
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Hero Section */}
      <section className="relative text-white pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/egf3yql9/image/upload/v1793099904/slider-1.jpg"
            alt="DriveIT Support Desk"
            className="w-full h-full object-cover object-center pointer-events-none opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-red-400 font-bold">Help & Support</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Help & <span className="text-red-500">Support Center</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Need assistance with your booking, vehicle handover, or on-trip support in Bhubaneswar? We are here to help you 24 hours a day, 7 days a week.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+917008732102"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: +91 7008732102</span>
            </a>
            <a
              href="https://wa.me/917008732102?text=Hi%20DriveIT,%20I%20need%20help%20with%20a%20car%20rental"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4 Quick Support Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-red-300 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <LifeBuoy className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">24/7 Roadside Rescue</h3>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Flat tire, towing assistance, or battery jumpstart anywhere across Odisha.
            </p>
            <a href="tel:+917008732102" className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1">
              <span>Emergency Call</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-emerald-300 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Booking Modifications</h3>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Change pickup dates, extend trip duration, or switch vehicle models easily.
            </p>
            <a
              href="https://wa.me/917008732102?text=Hi%20DriveIT,%20I%20want%20to%20modify%20or%20extend%20my%20booking"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1"
            >
              <span>Modify on WhatsApp</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-blue-300 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Deposit & Refunds</h3>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Check status of your security deposit refund or request Fastag statement breakdown.
            </p>
            <a href="mailto:driveitcarandbike@gmail.com" className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
              <span>Track Refund</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-amber-300 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">Airport & City Hub</h3>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Bhubaneswar Airport Terminal 1 & 2 meet-up point, Master Canteen & Patia.
            </p>
            <Link to="/contact" className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1">
              <span>View Hub Locations</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Main FAQ & Contact Support Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FAQ Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Knowledge Base</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Find quick answers to common questions about rentals, payments, policies, and requirements.
              </p>
            </div>

            {/* Category Navigation Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {faqCategories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeFaqCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFaqCategory(cat.id);
                      setExpandedFaq(null);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-red-600 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-3 pt-2">
              {faqs[activeFaqCategory].map((faq, index) => {
                const isExpanded = expandedFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedFaq(isExpanded ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base hover:text-red-600 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-red-600' : ''
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Helpful Links Box */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-sm text-slate-900">Looking for our official policies?</h4>
                <p className="text-xs text-slate-500 mt-0.5">Read our complete legal documents and driver safeguards.</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Link
                  to="/terms"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy"
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

          </div>

          {/* Quick Support / Message Ticket Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg sticky top-24">
              
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prompt Response Desk</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Submit Support Request</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details and our Bhubaneswar coordinator will call you back within 15 minutes.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Request Submitted Successfully!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you <strong>{formData.name}</strong>. Ticket ref #DRV-{Math.floor(1000 + Math.random() * 9000)} has been logged. Our support desk will reach out to you at <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', topic: 'Booking Inquiry', message: '' });
                    }}
                    className="mt-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Mohapatra"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                        Topic
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all bg-white"
                      >
                        <option value="Booking Inquiry">Booking Inquiry</option>
                        <option value="Trip Extension">Trip Extension</option>
                        <option value="Deposit Refund">Deposit Refund</option>
                        <option value="Roadside Emergency">Roadside Emergency</option>
                        <option value="Corporate / GST Invoice">Corporate / GST Invoice</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">
                      How Can We Help? *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your query or trip requirement..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Support</span>
                  </button>
                </form>
              )}

              {/* Direct Contacts Mini Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>24x7 Customer Desk</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Bhubaneswar Hub</span>
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

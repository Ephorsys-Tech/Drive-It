import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Database,
  ChevronRight,
  Clock,
  Mail,
  Phone,
  Server,
  UserCheck
} from 'lucide-react';

export default function Privacy() {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: '1. Introduction & Commitment' },
    { id: 'collection', title: '2. Information We Collect' },
    { id: 'telematics', title: '3. Vehicle GPS & Telematics' },
    { id: 'usage', title: '4. How We Use Your Information' },
    { id: 'sharing', title: '5. Information Sharing & Disclosure' },
    { id: 'security', title: '6. Data Security & Storage' },
    { id: 'cookies', title: '7. Cookies & Tracking' },
    { id: 'retention', title: '8. Data Retention & Archival' },
    { id: 'rights', title: '9. Your Privacy Rights' },
    { id: 'grievance', title: '10. Grievance Officer & Contact' },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Page Hero Header */}
      <section className="relative text-white pt-28 sm:pt-36 pb-14 sm:pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/egf3yql9/image/upload/v1793098915/01.jpg"
            alt="Privacy policy background"
            className="w-full h-full object-cover object-center pointer-events-none opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-red-400 font-bold">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Privacy <span className="text-red-500">Policy</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Your trust is our utmost priority. Learn how DriveIT collects, protects, uses, and safeguards your personal information and documents.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              Effective Date: October 2026
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              256-Bit SSL Encrypted
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              DPDP Act & IT Act Compliant
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <h3 className="font-bold text-slate-900 text-sm tracking-tight">Privacy Topics</h3>
              </div>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      activeSection === section.id
                        ? 'bg-red-50 text-red-600 font-bold border-l-2 border-red-600'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span className="truncate">{section.title}</span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      activeSection === section.id ? 'text-red-500 translate-x-0.5' : 'text-slate-400'
                    }`} />
                  </button>
                ))}
              </nav>

              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-xs mb-1">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Strict Zero-Spam Promise</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal">
                  We never sell, trade, or share your phone number or KYC documents with marketing advertisers or telemarketers.
                </p>
              </div>
            </div>
          </aside>

          {/* Document Content */}
          <main className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm text-slate-700 leading-relaxed space-y-10">
            
            {/* Preamble */}
            <div className="border-b border-slate-100 pb-6">
              <p className="text-sm sm:text-base text-slate-600">
                DriveIT Self-Drive Cars ("DriveIT", "we", "our", or "us") operates the car rental platform and customer desk in Bhubaneswar, Odisha. We value the privacy of our users ("you", "customer", or "renter") and are committed to maintaining the highest degree of confidentiality and data security in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023.
              </p>
            </div>

            {/* Section 1 */}
            <section id="intro" className="space-y-3 scroll-mt-24">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">1</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Introduction & Commitment</h2>
              </div>
              <p className="text-sm">
                This Privacy Policy describes how we collect, store, process, transfer, and protect your personal identification information and telemetry data when you visit our website, communicate via WhatsApp, reserve a self-drive car, or sign our rental agreements. By booking or interacting with our services, you consent to the data practices described in this policy.
              </p>
            </section>

            {/* Section 2 */}
            <section id="collection" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">2</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Information We Collect</h2>
              </div>
              <p className="text-sm">
                To facilitate legitimate vehicle bookings, ensure passenger safety, and comply with state transport regulations in Odisha, we collect the following categories of information:
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-red-500" />
                    <span>Personal & Contact Identifiers</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Your full name, mobile phone number, WhatsApp contact, active email address, and permanent/current residential address.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Statutory Driver KYC Documents</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    A copy of your original Indian Motor Driving License (or International Driving Permit for foreign nationals), and Government Photo ID (Aadhaar Card, Passport, or Voter ID). These documents are required by RTO norms to verify driving authorization.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-600" />
                    <span>Payment & Billing Data</span>
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Transaction references, UPI UTR numbers, payment method tokens, and billing addresses. We <strong>do not store</strong> your 16-digit credit/debit card numbers, CVV codes, or net banking passwords. All online payments are handled directly via PCI-DSS compliant payment gateways.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="telematics" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">3</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Vehicle GPS & Telematics</h2>
              </div>
              <p className="text-sm">
                In strict compliance with statutory commercial vehicle security requirements in India, all DriveIT vehicles are fitted with secure in-vehicle telematics units and GPS transponders.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-2">
                <p><strong>What is tracked:</strong> Real-time geographic coordinates (latitude/longitude), vehicle speed, ignition status, engine diagnostics, and distance traveled.</p>
                <p><strong>Purpose of telemetry:</strong> GPS tracking is utilized exclusively for:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li>Dispatching prompt roadside emergency rescue or mechanical towing in case of breakdowns.</li>
                  <li>Monitoring speed governor compliance to protect passenger safety.</li>
                  <li>Theft prevention, vehicle recovery, and geofence boundary safety.</li>
                </ul>
                <p className="text-xs">We do not employ audio or in-cabin video surveillance. Your personal privacy inside the car is 100% respected.</p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="usage" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">4</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">How We Use Your Information</h2>
              </div>
              <p className="text-sm">We process customer data solely for legitimate business purposes:</p>
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong>Booking & Fulfillment:</strong> Reserving the requested vehicle, confirming schedule, and coordinating doorstep or airport delivery in Bhubaneswar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong>Trip Communications:</strong> Sending booking vouchers, pickup representative details, Fastag toll receipts, and security deposit refund confirmations via SMS/WhatsApp.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong>Legal & Insurance Compliance:</strong> Processing insurance claims in the event of an accident, verifying authorized driver validity, and assisting law enforcement with accident investigations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong>Platform Enhancement:</strong> Analyzing aggregate website performance to optimize loading times, fleet availability, and user experience.</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="sharing" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">5</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Information Sharing & Disclosure</h2>
              </div>
              <p className="text-sm">
                DriveIT does not rent, sell, or monetize your personal information to third-party data brokers or marketing firms. We only share information with:
              </p>
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span><strong>Authorized Service Partners:</strong> Trusted roadside assistance providers, airport pickup coordinators, and payment gateway partners under strict confidentiality agreements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span><strong>Insurance Surveyors:</strong> Certified insurance loss assessors in the event of accidental damage or claims processing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span><strong>Law Enforcement & Judicial Authorities:</strong> Only when legally required by a court order, police notice under Section 91 CrPC, or in connection with criminal investigation or hit-and-run incidents.</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="security" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">6</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Data Security & Storage</h2>
              </div>
              <p className="text-sm">
                We implement robust technical, organizational, and physical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of your data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900">
                    <Lock className="w-4 h-4 text-emerald-600" />
                    <span>SSL/TLS Encryption</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">All data transmission between your browser and our servers is secured with 256-bit HTTPS encryption.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-semibold text-xs text-slate-900">
                    <Server className="w-4 h-4 text-blue-600" />
                    <span>Role-Based Access Control</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1">Only authorized verification personnel have restricted access to uploaded Driving Licenses and Aadhaar copies.</p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="cookies" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">7</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Cookies & Tracking</h2>
              </div>
              <p className="text-sm">
                Our website utilizes minimal, essential cookies to remember your vehicle filter preferences, booking session data, and smooth navigation. You can adjust your browser settings to block or delete cookies; however, some interactive features like booking previews may require cookies to function correctly.
              </p>
            </section>

            {/* Section 8 */}
            <section id="retention" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">8</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Data Retention & Archival</h2>
              </div>
              <p className="text-sm">
                We retain your personal identification and booking history only for as long as necessary to fulfill the purposes outlined in this policy or as required by applicable tax (GST), motor vehicle, and accounting statutes (typically 3 to 7 years for financial and rental records). Once the statutory retention period lapses, customer documents are securely shredded or permanently deleted from our servers.
              </p>
            </section>

            {/* Section 9 */}
            <section id="rights" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">9</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Your Privacy Rights</h2>
              </div>
              <p className="text-sm">
                Under Indian data protection laws, you possess the right to:
              </p>
              <ul className="space-y-1.5 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>Request a summary of personal information held about you by DriveIT.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>Request correction of outdated or inaccurate personal details.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>Opt-out of any non-essential promotional SMS or newsletters.</span>
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="grievance" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">10</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Grievance Officer & Contact</h2>
              </div>
              <p className="text-sm">
                In accordance with the Information Technology Act, 2000 and rules made thereunder, if you have any questions, concerns, or grievances regarding our privacy practices, please contact our designated Grievance Officer:
              </p>
              
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2">
                <p className="font-bold text-slate-900">Data Protection & Grievance Cell</p>
                <p className="text-slate-700"><strong>Entity:</strong> DriveIT Self Drive Cars</p>
                <p className="text-slate-700"><strong>Hub Location:</strong> Biju Patnaik International Airport Hub & Master Canteen, Bhubaneswar, Odisha 751020</p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs">
                  <a href="mailto:driveitcarandbike@gmail.com" className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold">
                    <Mail className="w-3.5 h-3.5" />
                    <span>driveitcarandbike@gmail.com</span>
                  </a>
                  <a href="tel:+917008732102" className="inline-flex items-center gap-1.5 text-slate-700 hover:text-red-600 font-semibold">
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 7008732102</span>
                  </a>
                </div>
              </div>
            </section>

          </main>

        </div>
      </div>

    </div>
  );
}

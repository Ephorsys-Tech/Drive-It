import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Clock,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Phone,
  ArrowRight,
  Fuel,
  Gauge,
  CreditCard
} from 'lucide-react';

export default function Terms() {
  const [activeSection, setActiveSection] = useState('eligibility');

  const sections = [
    { id: 'eligibility', title: '1. Eligibility & Driver Requirements' },
    { id: 'documentation', title: '2. KYC & Document Verification' },
    { id: 'booking-deposit', title: '3. Booking, Payment & Security Deposit' },
    { id: 'handover', title: '4. Vehicle Pickup, Inspection & Return' },
    { id: 'fuel-policy', title: '5. Fuel & Kilometers Policy' },
    { id: 'speed-limit', title: '6. Speed Limits & Safe Driving' },
    { id: 'tolls-challans', title: '7. Fastag, Tolls & Traffic Challans' },
    { id: 'prohibited-use', title: '8. Prohibited Vehicle Uses' },
    { id: 'breakdown-damage', title: '9. Accidents, Damage & Insurance' },
    { id: 'cancellation', title: '10. Cancellation & Refund Policy' },
    { id: 'extension', title: '11. Trip Extension & Late Return' },
    { id: 'jurisdiction', title: '12. Governing Law & Jurisdiction' },
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
            src="https://res.cloudinary.com/egf3yql9/image/upload/v1793099904/slider-1.jpg"
            alt="Terms and conditions background"
            className="w-full h-full object-cover object-center pointer-events-none opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <nav className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-black/40 px-3.5 py-1 rounded-full backdrop-blur-xs mb-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-red-400 font-bold">Terms & Conditions</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Terms & <span className="text-red-500">Conditions</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Please read these terms and conditions carefully before booking or renting a self-drive vehicle with DriveIT in Bhubaneswar and Odisha.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-red-400" />
              Last Updated: October 2026
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Motor Vehicles Act Compliant
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Table of Contents Sidebar */}
          <aside className="lg:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100">
                <FileText className="w-4 h-4 text-red-600" />
                <h3 className="font-bold text-slate-900 text-sm tracking-tight">Table of Contents</h3>
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
                  <HelpCircle className="w-4 h-4 text-red-500" />
                  <span>Need quick clarification?</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-normal mb-3">
                  Our Bhubaneswar customer desk is available round-the-clock for any questions regarding rentals.
                </p>
                <Link
                  to="/help"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <span>Visit Help & Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Legal Text Document Content */}
          <main className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-sm text-slate-700 leading-relaxed space-y-10">
            
            {/* Preamble */}
            <div className="border-b border-slate-100 pb-6">
              <p className="text-sm sm:text-base text-slate-600">
                This Rental Agreement and Terms & Conditions ("Agreement") is entered into between <strong className="text-slate-900">DriveIT Self-Drive Cars</strong> ("Company", "we", "us", or "our") and the person making the booking ("User", "Renter", "you", or "customer"). By accessing our website, booking via WhatsApp, or taking delivery of a vehicle in Odisha, you acknowledge that you have read, understood, and agreed to be bound by all the terms set forth herein.
              </p>
            </div>

            {/* Section 1 */}
            <section id="eligibility" className="space-y-3 scroll-mt-24">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">1</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Eligibility & Driver Requirements</h2>
              </div>
              <p className="text-sm">
                To rent and operate a self-drive vehicle from DriveIT, the primary driver and any authorized secondary driver must satisfy the following mandatory conditions:
              </p>
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Minimum Age:</strong> The driver must be at least 21 years of age at the time of commencement of the trip.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Valid Driving License:</strong> A valid original Indian Light Motor Vehicle (LMV) Driving License held for a minimum of 1 year. Learner licenses or expired licenses are strictly not accepted.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>International Customers:</strong> Non-Indian residents must carry a valid original passport, valid Indian tourist or business visa, and an International Driving Permit (IDP) alongside their domestic license.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 shrink-0" />
                  <span><strong>Authorized Driving Only:</strong> Only the person(s) registered and verified during booking are permitted to drive the vehicle. Sub-renting or handing over the keys to an unverified third party voids all insurance coverage immediately.</span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="documentation" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">2</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">KYC & Document Verification</h2>
              </div>
              <p className="text-sm">
                In compliance with statutory law enforcement and Odisha state transport directives, all renters must provide authentic identification prior to vehicle handover:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wide">Government Photo ID</h4>
                  <p className="text-xs text-slate-600 mt-1">Aadhaar Card, Passport, or Voter ID. Original physical card must be presented for physical inspection upon delivery.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-semibold text-xs text-slate-900 uppercase tracking-wide">Original Driving License</h4>
                  <p className="text-xs text-slate-600 mt-1">Must match the registered name. DigiLocker / mParivahan verification is accepted for initial online confirmation.</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic">
                * Note: If fraudulent, manipulated, or mismatching documents are submitted, DriveIT reserves the right to decline handover without any refund.
              </p>
            </section>

            {/* Section 3 */}
            <section id="booking-deposit" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">3</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Booking, Payment & Security Deposit</h2>
              </div>
              <p className="text-sm">
                Bookings can be reserved via our website, phone call, or official WhatsApp desk (+91 7008732102).
              </p>
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                  <span><strong>Full Rental Payment:</strong> 100% of the calculated rental tariff must be paid prior to or at the time of vehicle delivery. Accepted modes include UPI, Net Banking, Credit/Debit Cards, and verified Bank Transfer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                  <span><strong>Refundable Security Deposit:</strong> A refundable security deposit (ranging from ₹0 for select zero-deposit plans up to ₹3,000–₹5,000 depending on vehicle model and verification score) is collected prior to handover.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-red-500 mt-1 shrink-0" />
                  <span><strong>Deposit Refund Timeline:</strong> Upon vehicle return and physical inspection, after adjusting for any pending toll charges, fuel deficit, or damage fees, the remaining deposit is processed back to the customer's source account within <strong>24 to 48 hours</strong>.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="handover" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">4</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Vehicle Pickup, Inspection & Return</h2>
              </div>
              <p className="text-sm">
                DriveIT delivers sanitized vehicles to Bhubaneswar Airport (BBI), Bhubaneswar Railway Station, Master Canteen, Patia, or directly to your doorstep.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
                <strong>Mandatory Joint Inspection:</strong> At the time of pickup, both the DriveIT delivery representative and the customer will record an inspection checklist, including high-definition walk-around photos and a 360° video noting existing scratches, tire condition, fuel level, and odometer reading. You must review and sign the digital handover form before departure.
              </div>
              <p className="text-sm">
                Vehicles must be returned in reasonably clean condition with all accessories, spare tire, toolkit, vehicle documentation (RC copy, insurance certificate, PUC), and key fob intact.
              </p>
            </section>

            {/* Section 5 */}
            <section id="fuel-policy" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">5</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Fuel & Kilometers Policy</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-2">
                    <Fuel className="w-4 h-4 text-red-600" />
                    <span>Same-to-Same Fuel Policy</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Vehicles are supplied with a specific fuel level (e.g., quarter, half, or full tank). The renter is required to return the car with the exact same fuel level. If returned with less fuel, the differential amount will be charged at current market fuel prices plus a ₹200 refueling service charge. No refund is granted for excess fuel returned.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm mb-2">
                    <Gauge className="w-4 h-4 text-red-600" />
                    <span>Kilometer Allowance</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Choose between standard daily allowances (typically 250–300 km/day) or our Unlimited Kilometers package. Any kilometers driven in excess of the booked package quota will be billed upon return at ₹9 to ₹15 per extra km depending on the vehicle category (Hatchback/Sedan/SUV).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="speed-limit" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">6</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Speed Limits & Safe Driving</h2>
              </div>
              <p className="text-sm">
                Safety is our highest priority. All DriveIT fleet cars are equipped with Government-certified telematics and GPS tracking units in compliance with Central Motor Vehicle Rules (CMVR).
              </p>
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong>Speed Governor:</strong> The maximum allowable speed on national and state highways is capped at <strong>100 km/h</strong> (or the prevailing speed signpost, whichever is lower).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span><strong>Speed Violation Penalty:</strong> Exceeding 100 km/h triggers an automated alert. First violation incurs a verbal warning; repeated speeding (more than 3 alerts) incurs a statutory penalty of ₹1,500 and may result in immediate trip termination.</span>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="tolls-challans" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">7</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Fastag, Tolls & Traffic Challans</h2>
              </div>
              <p className="text-sm">
                All DriveIT vehicles have active NHAI Fastag tags affixed to the windshield for seamless travel across toll plazas:
              </p>
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span><strong>Fastag Toll Deductions:</strong> The exact toll amounts incurred during your rental duration will be deducted from your security deposit or billed at checkout based on electronic Fastag statements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                  <span><strong>E-Challans & Traffic Fines:</strong> Any e-challan issued by traffic police or RTO (speeding, jumping red lights, wrong-side driving, illegal parking, seatbelt violations) incurred during the rental booking timeframe is the sole responsibility of the renter. If notified later, DriveIT reserves the right to bill the customer or recover the dues via registered contact details.</span>
                </li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="prohibited-use" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">8</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Prohibited Vehicle Uses</h2>
              </div>
              <p className="text-sm">
                Vehicles must only be used for personal, legitimate, and safe travel. The following acts are strictly prohibited:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50/60 text-red-900 border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Driving under the influence of alcohol, narcotics, or drugs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50/60 text-red-900 border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Sub-leasing, lending, or letting unauthorized persons drive</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50/60 text-red-900 border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Commercial transportation of goods or paid passenger carriage</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50/60 text-red-900 border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Vehicle racing, rallies, drifting, stunts, or off-road testing</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50/60 text-red-900 border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Transporting illicit substances, arms, or contraband</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-red-50/60 text-red-900 border border-red-100">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Driving into unauthorized zones or crossing international borders</span>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="breakdown-damage" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">9</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Accidents, Damage & Insurance Coverage</h2>
              </div>
              <p className="text-sm">
                Every vehicle in the DriveIT fleet is protected under comprehensive commercial insurance covering third-party liability and own damage as mandated by Indian law.
              </p>
              <ul className="space-y-2 text-sm pl-2">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <span><strong>Immediate Incident Reporting:</strong> In the event of an accident, collision, or mechanical issue, you must inform DriveIT immediately via our 24/7 hotline (+91 7008732102) before moving the vehicle or agreeing to private settlements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <span><strong>Maximum Customer Liability:</strong> In insured claims where driving under influence or reckless illegal conduct is ruled out, customer liability is capped up to the insurance deductible amount (typically ₹5,000 to ₹10,000). Negligent driving, clutch burning, water ingression, or underbody damage caused by reckless off-roading is not covered by insurance and must be borne by the renter.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                  <span><strong>Police Complaint (FIR):</strong> In case of third-party property damage or bodily injury, lodging a Police FIR is legally mandatory and the customer must fully cooperate with police and insurance survey proceedings.</span>
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="cancellation" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">10</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Cancellation & Refund Policy</h2>
              </div>
              <p className="text-sm">
                We understand plans can change. Cancellations are handled transparently according to the following schedule:
              </p>
              <div className="border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                <div className="grid grid-cols-2 bg-slate-100 font-semibold text-slate-800 p-3 border-b border-slate-200">
                  <span>Cancellation Timeline</span>
                  <span>Refund Amount</span>
                </div>
                <div className="grid grid-cols-2 p-3 border-b border-slate-100 text-slate-700">
                  <span>More than 24 hours prior to scheduled pickup</span>
                  <span className="text-emerald-600 font-medium">100% Full Refund (Zero deduction)</span>
                </div>
                <div className="grid grid-cols-2 p-3 border-b border-slate-100 text-slate-700">
                  <span>Between 12 to 24 hours prior to pickup</span>
                  <span className="text-slate-800 font-medium">75% Refund (25% cancellation fee)</span>
                </div>
                <div className="grid grid-cols-2 p-3 border-b border-slate-100 text-slate-700">
                  <span>Between 6 to 12 hours prior to pickup</span>
                  <span className="text-slate-800 font-medium">50% Refund</span>
                </div>
                <div className="grid grid-cols-2 p-3 text-slate-700 bg-slate-50">
                  <span>Less than 6 hours prior or No-Show</span>
                  <span className="text-red-600 font-medium">No Refund applicable</span>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section id="extension" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">11</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Trip Extension & Late Return</h2>
              </div>
              <p className="text-sm">
                If you wish to extend your rental, please notify DriveIT at least <strong>4 hours prior</strong> to your original scheduled return time. Extensions are granted subject to vehicle availability and payment of the additional rental charges.
              </p>
              <p className="text-sm">
                We provide a <strong>30-minute complimentary grace period</strong>. Returning the car beyond this grace period without confirmed extension will attract late return charges at ₹300 per hour for hatchback/sedan and ₹500 per hour for SUVs.
              </p>
            </section>

            {/* Section 12 */}
            <section id="jurisdiction" className="space-y-3 scroll-mt-24 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">12</span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Governing Law & Jurisdiction</h2>
              </div>
              <p className="text-sm">
                This Agreement shall be governed by and construed in accordance with the laws of the Republic of India. Any dispute, controversy, or claim arising out of or relating to this Agreement or the breach thereof shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Bhubaneswar, Odisha</strong>.
              </p>
            </section>

            {/* Contact / Support Footer Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base">Questions about our Terms?</h4>
                <p className="text-xs text-slate-300 mt-1">Our support team is happy to assist you before you hit the road.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+917008732102"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 7008732102</span>
                </a>
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  Contact Desk
                </Link>
              </div>
            </div>

          </main>

        </div>
      </div>

    </div>
  );
}

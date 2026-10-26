import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from '../common/BrandIcons';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle generic text fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  // Block any non-numeric character entry on keydown (prevents typing any text/letters)
  const handleKeyDownOnlyDigits = (e) => {
    const allowedKeys = ['Backspace', 'Tab', 'Delete', 'ArrowLeft', 'ArrowRight', 'Enter', 'Home', 'End'];
    if (allowedKeys.includes(e.key)) return;
    if ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x'].includes(e.key.toLowerCase())) return;
    // Disallow anything other than digits 0-9
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Sanitize phone number to strictly numbers only and cap at 10 digits
  const handlePhoneChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, phone: numericValue }));
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      return 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!formData.phone || formData.phone.length !== 10) {
      return 'Phone number must be exactly 10 digits (numbers only, maximum 10 digits).';
    }
    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      return 'Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 5) {
      return 'Please enter a message (at least 5 characters).';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    // Direct WhatsApp redirection as requested by user
    const text = `*New DriveIT Website Inquiry* 🚗
*Name:* ${formData.name.trim()}
*Phone:* +91 ${formData.phone}
*Email:* ${formData.email.trim()}
*Subject:* ${formData.subject.trim() || 'Car Rental Inquiry'}
*Message:* ${formData.message.trim()}`;
    const waUrl = `https://wa.me/917008732102?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  const handleWhatsAppSend = () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    const text = `*New DriveIT Website Inquiry* 🚗
*Name:* ${formData.name.trim()}
*Phone:* +91 ${formData.phone}
*Email:* ${formData.email.trim()}
*Subject:* ${formData.subject.trim() || 'Car Rental Inquiry'}
*Message:* ${formData.message.trim()}`;
    window.open(`https://wa.me/917008732102?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-10">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-3 py-1 rounded-full">
          Send Us A Message
        </span>
        <h3 className="text-2xl font-black text-slate-900 mt-2">
          How Can We Help You Today?
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Fill out the form below or message us directly on WhatsApp for lightning-fast answers.
        </p>
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-emerald-900">
            Thank you, {formData.name}!
          </h4>
          <p className="text-sm text-emerald-700 max-w-md mx-auto">
            Your inquiry has been received. Our team will contact you at <strong>{formData.email}</strong> or phone shortly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleWhatsAppSend}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Forward to WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
              }}
              className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Mishra"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rahul@example.com"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-slate-700 block">
                  WhatsApp Phone Number <span className="text-red-500">*</span>
                </label>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${formData.phone.length === 10 ? 'bg-emerald-100 text-emerald-700 font-extrabold' : 'bg-slate-100 text-slate-500'}`}>
                  {formData.phone.length}/10 digits
                </span>
              </div>
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 select-none">
                  +91
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handleKeyDownOnlyDigits}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                  placeholder="7008732102"
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 font-medium tracking-wider"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Numbers only • No letters or text allowed • Max 10 digits
              </p>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Outstation Trip to Puri"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-700 block mb-1">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us your car rental requirements, dates, or inquiries..."
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-glow px-8 py-3.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold rounded-xl shadow-lg transition-all active:scale-95 text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{loading ? 'Sending Inquiry...' : 'Send Inquiry'}</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200/80 font-bold text-xs transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Direct WhatsApp Inquiry</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

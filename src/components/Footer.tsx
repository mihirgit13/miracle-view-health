import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronUp, Printer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MVH_CONFIG } from '../utils/mvhConfig';
import { logConsent } from '../utils/supabaseClient';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [consentNewsletter, setConsentNewsletter] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && consentNewsletter) {
      logConsent({
        patientName: "Newsletter Subscriber",
        patientEmail: email,
        patientPhone: "N/A",
        healthcareConsent: consentNewsletter,
        smsConsent: false,
        disclosureText: "Terms: Acknowledged newsletter subscription, medical resource updates, and Privacy Policy.",
        formType: 'newsletter'
      });

      setSubscribed(true);
      setEmail('');
      setConsentNewsletter(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-[#102d24] text-white pt-16 pb-8 border-t-2 border-[#1c4c3e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Newsletter */}
          <div id="footer-newsletter-col" className="space-y-4">
            <h3 className="text-lg font-bold font-display tracking-tight text-white/95 border-b border-[#1c4c3e] pb-2">
              Newsletter Signup
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sign up for our mental and behavioral wellness newsletters, expert guide releases, and clinic updates.
            </p>
            {subscribed ? (
              <div id="news-success" className="bg-[#1c4c3e]/50 border border-emerald-500 rounded-xl p-3 flex items-start space-x-2 text-sm text-emerald-300">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Thank you! You have been subscribed for medical resource releases.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3 mt-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full bg-white/10 text-white placeholder-gray-400 text-sm py-3 pl-4 pr-10 rounded-xl border border-white/15 focus:outline-none focus:border-[#c39b3d] focus:ring-1 focus:ring-[#c39b3d] transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 p-1.5 rounded-lg bg-[#c39b3d] hover:bg-[#b08b33] text-white transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-start space-x-2.5">
                  <input
                    type="checkbox"
                    id="newsletter-consent"
                    required
                    checked={consentNewsletter}
                    onChange={(e) => setConsentNewsletter(e.target.checked)}
                    className="mt-1 h-3.5 w-3.5 rounded border-white/20 bg-white/10 text-[#c39b3d] focus:ring-[#c39b3d] cursor-pointer"
                  />
                  <label htmlFor="newsletter-consent" className="text-[11px] text-gray-300 leading-tight cursor-pointer selection:bg-transparent text-left">
                    I consent to receive wellness updates and clinic announcements in accordance with the{' '}
                    <Link to="/privacy-policy" className="underline text-[#c39b3d] hover:text-[#b08b33] transition-colors">
                      Privacy Policy
                    </Link>. <span className="text-red-400">*</span>
                  </label>
                </div>
              </form>
            )}
          </div>

          {/* Column 2: Quick Links */}
          <div id="footer-quick-links-col" className="space-y-4">
            <h3 className="text-lg font-bold font-display tracking-tight text-white/95 border-b border-[#1c4c3e] pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link 
                  to="/"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  About Us & Story
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  Services Overview
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  Patient Resources Hub
                </Link>
              </li>
              <li>
                <Link 
                  to="/careers"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  Careers & Positions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Shortlist */}
          <div id="footer-services-col" className="space-y-4">
            <h3 className="text-lg font-bold font-display tracking-tight text-white/95 border-b border-[#1c4c3e] pb-2">
              Specialties & Innovative Care
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link 
                  to="/services/tms-therapy"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  TMS Therapy
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/individual-counselling"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  Individual Counselling
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/behavioral-health"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  Behavioral Health
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/telehealth-consultation"
                  className="hover:text-[#c39b3d] hover:underline transition-all text-left block"
                >
                  Tele Health Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Brand */}
          <div id="footer-contact-col" className="space-y-4">
            <h3 className="text-lg font-bold font-display tracking-tight text-white/95 border-b border-[#1c4c3e] pb-2">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-gray-300 pt-1">
              <p className="flex items-start space-x-2.5">
                <Phone className="w-4.5 h-4.5 text-[#c39b3d] mt-0.5" />
                <span>
                  <a href={`tel:${MVH_CONFIG.telephony.officePhone}`} className="hover:underline">
                    {MVH_CONFIG.telephony.officePhoneFormatted}
                  </a>
                </span>
              </p>
              <p className="flex items-start space-x-2.5">
                <Printer className="w-4.5 h-4.5 text-[#c39b3d] mt-0.5" />
                <span>{MVH_CONFIG.telephony.officeFaxFormatted}</span>
              </p>
              <p className="flex items-start space-x-2.5">
                <Mail className="w-4.5 h-4.5 text-[#c39b3d] mt-0.5" />
                <span>
                  <a href={`mailto:${MVH_CONFIG.formSubmissions.supportEmail}`} className="hover:underline">
                    {MVH_CONFIG.formSubmissions.supportEmail}
                  </a>
                </span>
              </p>
              <p className="flex items-start space-x-2.5">
                <MapPin className="w-4.5 h-4.5 text-[#c39b3d] mt-0.5 flex-shrink-0" />
                <span>
                  <a
                    href={MVH_CONFIG.address.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-white transition-colors"
                  >
                    {MVH_CONFIG.address.full}
                  </a>
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-gray-400 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <span>© 2026 Miracle View Health LLC. All rights reserved.</span>
            <span className="text-white/10">|</span>
            <span className="text-gray-500 font-mono"> HIPAA Compliant & ADHS Accredited</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-center md:text-right">
            <Link 
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Medical Service
            </Link>
            <Link 
              to="/notice-of-privacy-practices"
              className="hover:text-white transition-colors"
            >
              Notice of Privacy Practices
            </Link>
            <Link 
              to="/accessibility-statement"
              className="hover:text-white transition-colors"
            >
              Accessibility & Disclaimer
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all shadow-md focus:outline-none"
              title="Scroll to Top"
            >
              <ChevronUp className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

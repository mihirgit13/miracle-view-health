import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldAlert, 
  Globe
} from 'lucide-react';
import { MVH_CONFIG } from '../utils/mvhConfig';
import { logConsent } from '../utils/supabaseClient';

import { setPageSeo } from '../utils/seoUtils';

export default function ContactPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Contact & Locations | Miracle View Health - Reach Out Today',
      description: 'Contact Miracle View Health LLC at 4801 S. Lakeshore Dr, Suite 102, Tempe, AZ. Call (520) 274-1251 or submit a secure online inquiry.',
      canonicalPath: '/contact'
    });
  }, []);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [consentHealthcare, setConsentHealthcare] = useState(false);
  const [consentSms, setConsentSms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !consentHealthcare) return;

    setLoading(true);

    try {
      const endpoint = MVH_CONFIG.insuranceVerification.appsScriptUrl;

      // Run Supabase logConsent and Apps Script fetch concurrently in parallel
      const tasks: Promise<any>[] = [
        logConsent({
          patientName: fullName,
          patientEmail: email,
          patientPhone: phone || "N/A",
          healthcareConsent: consentHealthcare,
          smsConsent: consentSms,
          disclosureText: "Terms: Acknowledged Privacy Policy & scheduling use. SMS: Acknowledged optional SMS consent for reminders, scheduling updates, and clinical notifications.",
          formType: 'contact'
        })
      ];

      if (endpoint && endpoint.startsWith("http")) {
        const formData = new URLSearchParams();
        formData.append("formType", "contact");
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("phoneNumber", phone);
        formData.append("message", message);
        formData.append("timestamp", new Date().toISOString());

        tasks.push(
          fetch(endpoint, {
            method: "POST",
            mode: "no-cors",
            body: formData
          })
        );
      }

      await Promise.allSettled(tasks);

      setSuccess(true);

      // clear fields
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setConsentHealthcare(false);
      setConsentSms(false);
    } catch (err) {
      console.error("Inquiry submission error:", err);
      alert("We encountered an issue submitting your inquiry. Please contact our office directly by phone.");
    } finally {
      setLoading(false);
    }
  };



  return (
    <div id="contact-us-page" className="bg-white">
      
      {/* 1. Page Hero - Simplified & Clean */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span>Secure Communications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Integrated Support for Your Wellness Journey
          </p>
        </div>
      </section>

      {/* 2. Main split view layout (Form left, Maps/Hours right) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-stretch">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-6 bg-white border border-gray-150 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-extrabold text-[#1e463c] font-display">Patient Inquiry</h2>
                <p className="text-xs text-gray-400">Complete the details below for safe evaluation options.</p>
              </div>

              {success ? (
                <div id="form-success-alert" className="bg-emerald-50 border border-emerald-250 p-6 rounded-2xl text-center space-y-4 animate-in zoom-in-95 leading-normal">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div>
                    <h4 className="font-extrabold text-[#114234] text-sm">Inquiry Successfully Transmitted!</h4>
                    <p className="text-xs text-emerald-700 max-w-xs mx-auto pt-1">
                      Our intake coordinator will reach out via email or telephone within 2 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="text-xs font-bold text-[#1e463c] hover:underline"
                  >
                    Submit New Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:bg-white focus:outline-none focus:border-[#1e463c] transition-all placeholder-gray-400 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. email@domain.com"
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:bg-white focus:outline-none focus:border-[#1e463c] transition-all placeholder-gray-400 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (520) 555-0199"
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:bg-white focus:outline-none focus:border-[#1e463c] transition-all placeholder-gray-400 font-sans"
                    />
                  </div>



                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Message</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can our team help you? (e.g. billing questions, office hours, or request a callback). Please do not include clinical medical details or symptoms."
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:bg-white focus:outline-none focus:border-[#1e463c] transition-all placeholder-gray-400 font-sans"
                    ></textarea>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="flex items-start space-x-2.5">
                      <input
                        type="checkbox"
                        id="contact-consent-healthcare"
                        required
                        checked={consentHealthcare}
                        onChange={(e) => setConsentHealthcare(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 bg-gray-50 text-[#1e463c] focus:ring-[#1e463c] cursor-pointer"
                      />
                      <label htmlFor="contact-consent-healthcare" className="text-xs text-gray-500 leading-normal cursor-pointer selection:bg-transparent text-left">
                        I acknowledge and agree that my information will be used for appointment scheduling, care coordination, and responding to service requests in accordance with the{' '}
                        <Link to="/privacy-policy" className="underline text-[#c39b3d] hover:text-[#b08b33] transition-colors">
                          Privacy Policy
                        </Link>. <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="flex items-start space-x-2.5">
                      <input
                        type="checkbox"
                        id="contact-consent-sms"
                        checked={consentSms}
                        onChange={(e) => setConsentSms(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 bg-gray-50 text-[#1e463c] focus:ring-[#1e463c] cursor-pointer"
                      />
                      <label htmlFor="contact-consent-sms" className="text-xs text-gray-500 leading-normal cursor-pointer selection:bg-transparent text-left">
                        I consent to receive text messages, appointment reminders, scheduling updates, customer care, and clinical notifications from Miracle View Health LLC. Message and data rates may apply. Message frequency varies. Text HELP for help or assistance. Reply STOP to unsubscribe or opt out at any time. Mobile information will not be shared with third parties for marketing purposes. View our{' '}
                        <Link to="/privacy-policy" className="underline text-[#c39b3d] hover:text-[#b08b33] transition-colors">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link to="/terms-of-service" className="underline text-[#c39b3d] hover:text-[#b08b33] transition-colors">
                          Terms of Service
                        </Link>. <span className="text-gray-400 font-mono text-[10px] uppercase font-bold">(Optional)</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1e463c] hover:bg-[#15342d] text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                  </button>

                </form>
              )}
            </div>

            <div className="pt-6 border-t border-gray-50 mt-6 text-center text-[10px] text-gray-400 font-mono flex items-center justify-center space-x-1">
              <Globe className="w-4 h-4 text-gray-300" />
              <span>Transmitted through secure, encrypted data networks</span>
            </div>
          </div>

          {/* Right Column: Maps, Hours, Contact details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Interactive Embedded Google Map */}
            <div className="bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex-1 min-h-[300px] relative">
              <iframe
                title="Miracle View Health LLC Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.673468210399!2d-111.9227686!3d33.3795899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0722f8087bad%3A0x82c716278801e1e9!2sMiracle%20View%20Health%20LLC!5e0!3m2!1sen!2sus!4v1720970000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[300px] block"
              ></iframe>
            </div>

            {/* Address and details */}
            <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6.5 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-extrabold text-[#13372e] text-sm flex items-start space-x-2">
                    <MapPin className="w-4.5 h-4.5 text-[#c39b3d] mt-0.5 flex-shrink-0" />
                    <span>{MVH_CONFIG.address.full}</span>
                  </h3>
                </div>
                <a
                  href={MVH_CONFIG.address.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1e463c] hover:bg-[#15342d] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-sm space-x-1.5 flex-shrink-0"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                {/* Hours of Operation */}
                <div className="space-y-2 bg-white px-4 py-3 rounded-2xl border border-gray-150 shadow-inner">
                  <p className="font-bold text-[#1e463c] flex items-center space-x-1 text-[10px] uppercase tracking-wider font-mono">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Hours of Operation:</span>
                  </p>
                  <ul className="text-gray-500 font-medium text-[11px] leading-relaxed">
                    <li>Mon-Fri: <span className="font-semibold text-gray-805">9am - 5pm</span></li>
                    <li>Sat & Sun: <span className="font-semibold text-gray-805">Closed</span></li>
                  </ul>
                </div>

                {/* Secure phone and email */}
                <div className="space-y-2 bg-white px-4 py-3 rounded-2xl border border-gray-150 shadow-inner">
                  <p className="font-bold text-[#1e463c] flex items-center space-x-1 text-[10px] uppercase tracking-wider font-mono">
                    <Phone className="w-4.5 h-4.5 text-gray-400" />
                    <span>Direct Access:</span>
                  </p>
                  <div className="text-gray-500 font-medium text-[11px] leading-relaxed">
                    <p className="font-semibold text-gray-800">
                      Phone: <a href={`tel:${MVH_CONFIG.telephony.officePhone}`} className="hover:underline text-[#c39b3d] font-bold">{MVH_CONFIG.telephony.officePhoneFormatted}</a>
                    </p>
                    <p className="pt-1 font-semibold text-gray-800">
                      Fax: <span className="text-[#c39b3d] font-bold">{MVH_CONFIG.telephony.officeFaxFormatted}</span>
                    </p>
                    <p className="pt-1">
                      Email: <a href={`mailto:${MVH_CONFIG.formSubmissions.supportEmail}`} className="hover:underline text-[#c39b3d]">{MVH_CONFIG.formSubmissions.supportEmail}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Red emergency notice panel */}
      <section id="crisis-emergency-notice" className="py-10 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="flex justify-center">
            <div className="p-3 bg-white/10 rounded-full animate-bounce">
              <ShieldAlert className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-extrabold font-display leading-tight uppercase tracking-wider shadow-sm">
            Emergency Notice
          </h2>
          <p className="text-xs text-white/95 max-w-xl mx-auto leading-relaxed">
            If you are experiencing a medical emergency or behavioral health crisis, please call <span className="font-bold underline text-white">911</span> or go to the nearest emergency room immediately. You can also call or text the Suicide & Crisis Lifeline at <span className="font-bold underline text-white">988</span> for free, confidential, 24/7 support.
          </p>
        </div>
      </section>

    </div>
  );
}

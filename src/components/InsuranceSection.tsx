import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  Lock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { insuranceProviders } from '../data/insuranceProviders';
import { MVH_CONFIG } from '../utils/mvhConfig';
import { logConsent } from '../utils/supabaseClient';

export default function InsuranceSection() {
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [memberId, setMemberId] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [consentInsurance, setConsentInsurance] = useState<boolean>(false);
  const [consentSms, setConsentSms] = useState<boolean>(false);
  
  // Simulation states
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Basic Client Validation
    if (!selectedProvider || !memberId.trim() || !fullName.trim() || !phoneNumber.trim() || !consentInsurance) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      const endpoint = MVH_CONFIG.insuranceVerification.appsScriptUrl;

      // Run Supabase logConsent and Apps Script fetch concurrently in parallel
      const tasks: Promise<any>[] = [
        logConsent({
          patientName: fullName,
          patientEmail: "N/A", // Email not collected on this form
          patientPhone: phoneNumber,
          healthcareConsent: consentInsurance,
          smsConsent: consentSms,
          disclosureText: "Terms: Acknowledged eligibility verification purpose and Privacy Policy. SMS: Acknowledged optional SMS consent for reminders and verification updates.",
          formType: 'insurance'
        })
      ];

      if (endpoint && endpoint.startsWith("http")) {
        const formData = new URLSearchParams();
        formData.append("fullName", fullName);
        formData.append("phoneNumber", phoneNumber);
        formData.append("selectedProvider", selectedProvider);
        formData.append("memberId", memberId);
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
      setStatus('success');
    } catch (err) {
      console.error("Insurance verification submit error:", err);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSelectedProvider('');
    setMemberId('');
    setFullName('');
    setPhoneNumber('');
    setConsentInsurance(false);
    setConsentSms(false);
    setStatus('idle');
  };

  return (
    <section id="insurance-coverage" className="py-12 md:py-16 bg-gray-50/50 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Heading of the Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-mono font-bold text-[#c39b3d] uppercase tracking-wider block">
            Insurance & Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950 leading-tight">
            Insurance Information & Coverage
          </h2>
          <div className="w-16 h-1 bg-[#1e463c] mx-auto rounded"></div>
        </div>

        {/* Top Section - Two Columns: Description Left, Accepted Networks Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Insurance Info & Description */}
          <div className="space-y-6 text-left">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We believe premium mental healthcare should be accessible. Miracle View Health works with a variety of major insurance providers to cover counseling, general psychiatry, telemedicine sessions, and specialized wellness programs. 
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Our intake coordinators work directly with your insurer to verify benefits, determine copays, and estimate out-of-pocket costs before your first consultation.
            </p>
          </div>

          {/* Right Column - Accepted Networks list aligned with description */}
          <div className="space-y-6 text-left lg:pt-0">
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm text-gray-900 uppercase tracking-wider">
                Major Accepted Networks:
              </h4>
              <div className="flex flex-wrap gap-2">
                {insuranceProviders.map((provider) => (
                  <span 
                    key={provider.id} 
                    className="text-xs font-semibold text-[#1e463c] bg-[#1e463c]/5 border border-[#1e463c]/10 px-3 py-1.5 rounded-full"
                  >
                    {provider.name}
                  </span>
                ))}
                <span className="text-xs font-semibold text-gray-505 text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1.5 rounded-full">
                  & many other regional plans
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              * Coverage varies depending on your specific policy and employer group options. We recommend verifying details with your insurer directly using the member services line located on your insurance card.
            </p>
          </div>

        </div>

        {/* Bottom Section - Full Width Premium Verification Card */}
        <div id="insurance-verification-form" className="w-full max-w-4xl mx-auto">
          <div className="bg-white border border-gray-150 shadow-xl rounded-[32px] p-6 sm:p-8 lg:p-10 relative overflow-hidden text-left">
            
            {/* Form Secure Header */}
            <div className="flex items-center space-x-3 pb-6 border-b border-gray-100 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-base">Coverage Verification</h3>
                <p className="text-xs text-gray-400 flex items-center space-x-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>HIPAA Compliant & Secure</span>
                </p>
              </div>
            </div>

            {status === 'success' ? (
              <div className="space-y-6 py-4 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="text-center space-y-2">
                  <h4 className="font-bold text-lg text-gray-900">Verification Request Submitted</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    We have received your insurance information. A patient coordinator will review your coverage and contact you within 24 hours with details on your copays and deductibles.
                  </p>
                </div>
                <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl text-xs text-emerald-800 space-y-1.5 leading-relaxed">
                  <p className="font-bold">What happens next?</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>We check benefits with your chosen provider.</li>
                    <li>We calculate estimated out-of-pocket costs.</li>
                    <li>We call or email you with the coverage summary.</li>
                  </ol>
                </div>
                <button
                  onClick={resetForm}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3.5 rounded-2xl text-sm font-bold transition-all cursor-pointer"
                >
                  Verify Another Plan
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start space-x-3 text-red-800 text-xs animate-in fade-in duration-200">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-0.5">Missing Required Fields</span>
                      Please fill in all required fields (Full Name, Phone Number, Provider, and Member ID) before proceeding.
                    </div>
                  </div>
                )}

                {/* Form Input Fields Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 1. Full Name Input */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="full-name" 
                      className="block text-sm font-extrabold text-gray-700 uppercase tracking-wider mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      placeholder="e.g. John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#1e463c] focus:ring-1 focus:ring-[#1e463c]/20 rounded-2xl px-4 py-3.5 text-sm text-gray-800 outline-none transition-all"
                    />
                  </div>

                  {/* 2. Phone Number Input */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="phone-number" 
                      className="block text-sm font-extrabold text-gray-700 uppercase tracking-wider mb-1.5"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      placeholder="e.g. 555-0199"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      className="w-full bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#1e463c] focus:ring-1 focus:ring-[#1e463c]/20 rounded-2xl px-4 py-3.5 text-sm text-gray-800 outline-none transition-all"
                    />
                  </div>

                  {/* 3. Insurance Provider Select */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="provider-select" 
                      className="block text-sm font-extrabold text-gray-700 uppercase tracking-wider mb-1.5"
                    >
                      Insurance Provider <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="provider-select"
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                        required
                        className="w-full bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#1e463c] focus:ring-1 focus:ring-[#1e463c]/20 rounded-2xl px-4 py-3.5 text-sm text-gray-800 outline-none transition-all cursor-pointer appearance-none animate-none"
                      >
                        <option value="" disabled>Select Provider</option>
                        {insuranceProviders.map((provider) => (
                          <option key={provider.id} value={provider.id}>
                            {provider.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* 4. Policy / Member ID Input */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="member-id" 
                      className="block text-sm font-extrabold text-gray-700 uppercase tracking-wider mb-1.5"
                    >
                      Policy / Member ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="member-id"
                      placeholder="e.g. ABC123456"
                      value={memberId}
                      onChange={(e) => setMemberId(e.target.value)}
                      required
                      className="w-full bg-gray-50 border border-gray-200 hover:border-gray-300 focus:border-[#1e463c] focus:ring-1 focus:ring-[#1e463c]/20 rounded-2xl px-4 py-3.5 text-sm text-gray-800 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Consent Section - Structured side-by-side on desktop */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-2.5">
                      <input
                        type="checkbox"
                        id="insurance-consent"
                        required
                        checked={consentInsurance}
                        onChange={(e) => setConsentInsurance(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 bg-gray-50 text-[#1e463c] focus:ring-[#1e463c] cursor-pointer"
                      />
                      <label htmlFor="insurance-consent" className="text-xs text-gray-500 leading-normal cursor-pointer selection:bg-transparent text-left">
                        I acknowledge and consent that my submitted information will be used solely for insurance eligibility verification and standard service-related communication in accordance with the{' '}
                        <Link to="/privacy-policy" className="underline text-[#c39b3d] hover:text-[#b08b33] transition-colors">
                          Privacy Policy
                        </Link>. <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="flex items-start space-x-2.5">
                      <input
                        type="checkbox"
                        id="insurance-consent-sms"
                        checked={consentSms}
                        onChange={(e) => setConsentSms(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 bg-gray-50 text-[#1e463c] focus:ring-[#1e463c] cursor-pointer"
                      />
                      <label htmlFor="insurance-consent-sms" className="text-xs text-gray-500 leading-normal cursor-pointer selection:bg-transparent text-left">
                        I agree to receive appointment reminders and verification status updates via SMS. Standard message and data rates may apply. <span className="text-gray-400 font-mono text-[10px] uppercase font-bold">(Optional)</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* HIPAA compliance and Submit button CTA in a balanced bottom row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-gray-100">
                  <div className="text-[10px] text-gray-400 leading-relaxed flex items-start space-x-2 md:max-w-xl text-left">
                    <Lock className="w-3.5 h-3.5 text-gray-300 flex-shrink-0 mt-0.5" />
                    <span>
                      Your privacy is protected. Info is sent through an encrypted channel to verify eligibility under standard HIPAA guidelines.
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto md:px-10 bg-[#1e463c] hover:bg-[#15342d] disabled:bg-[#1e463c]/70 text-white py-4 rounded-2xl text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Verifying Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Verify Coverage</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

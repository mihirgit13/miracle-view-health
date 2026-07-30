import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  Clock,
  UserCheck,
  MapPin,
  Download,
  ShieldCheck
} from 'lucide-react';
import InsuranceSection from '../components/InsuranceSection';
import { MVH_CONFIG } from '../utils/mvhConfig';


import { setPageSeo } from '../utils/seoUtils';

export default function ResourcesHubPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Patient Resources Hub | Miracle View Health - Clinical Guides',
      description: 'Access patient onboarding guides, verify insurance coverage online, and view clinical FAQs for Miracle View Health LLC in Tempe, AZ.',
      canonicalPath: '/resources'
    });
  }, []);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What should I bring to my first appointment?',
      a: 'Please bring a valid photo ID and a list of all your current prescription medications. If you have copies of previous psychiatric evaluations or diagnostic printouts, those are also helpful. We recommend arriving 15 minutes early to complete your intake process.'
    },
    {
      q: 'How do I request medical records?',
      a: `To request secure, HIPAA-compliant medical records, please contact our medical records department directly at ${MVH_CONFIG.formSubmissions.supportEmail} or call our main office at ${MVH_CONFIG.telephony.officePhoneFormatted}. Our team will verify your identity and process the request within 3-5 business days.`
    },
    {
      q: 'Do you offer telehealth services?',
      a: 'Yes! We conduct secure, HIPAA-compliant virtual telemedicine consultations for general psychiatry, counseling, and routine medication management sessions. You can connect from the comfort of your home using a smartphone or computer.'
    },
    {
      q: 'How do I schedule a follow-up appointment?',
      a: 'Follow-up appointments can be scheduled immediately after your current session at the front desk, or by using our online booking portal. We recommend scheduling several weeks in advance to ensure your preferred time slot is available.'
    }
  ];

  const handleDownload = (formName: string) => {
    alert(`Downloading form template: ${formName}. Please check your browser files folder.`);
  };

  return (
    <div id="resources-hub" className="bg-white">
      
      {/* 1. Page Hero - Simplified & Clean */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span>Patient Services Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Resources Hub
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Explore guides and tools for your wellness journey
          </p>
        </div>
      </section>

      {/* 2. Topic Cards Shortcut Row - Optimized for 3 Columns */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <a href="#patient-guides" className="bg-white border border-gray-150 p-8 rounded-[32px] hover:border-[#1e463c] transition-all group shadow-sm flex items-start space-x-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-gray-900 group-hover:text-[#1e463c] transition-colors mb-2">New Patient Guides</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Step-by-step instructions for onboarding, intakes, and what to expect on your first visit.</p>
            </div>
          </a>

          <a href="#insurance-coverage" className="bg-white border border-gray-150 p-8 rounded-[32px] hover:border-[#1e463c] transition-all group shadow-sm flex items-start space-x-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-gray-900 group-hover:text-[#1e463c] transition-colors mb-2">Insurance & Coverage</h4>
              <p className="text-sm text-gray-500 leading-relaxed">Verify your plan eligibility and check accepted commercial or government plans instantly.</p>
            </div>
          </a>

          <a href="#faq" className="bg-white border border-gray-150 p-8 rounded-[32px] hover:border-[#1e463c] transition-all group shadow-sm flex items-start space-x-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-extrabold text-lg text-gray-900 group-hover:text-[#1e463c] transition-colors mb-2">Comprehensive FAQ</h4>
              <p className="text-sm text-gray-500 leading-relaxed">In-depth answers to typical inquiries regarding clinical treatments, sessions, and billing.</p>
            </div>
          </a>

        </div>
      </section>

      {/* 3. New Patient Guides Section - Refactored for Horizontal Layout */}
      <section id="patient-guides" className="py-12 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono font-bold text-[#c39b3d] uppercase tracking-wider">Your First Visit</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950">
              New Patient Onboarding Guide
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Starting your mental health journey can feel overwhelming. We've designed a clear onboarding process and provide digital forms to ensure your experience at Miracle View Health is seamless and supportive from day one.
            </p>
            <div className="w-16 h-1 bg-[#1e463c] mx-auto rounded"></div>
          </div>

          {/* Horizontal Highlights Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center space-x-4 bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#1e463c] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Time Required</p>
                <p className="text-sm font-bold text-gray-800">60 Min Initial Consult</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#1e463c] flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Intake Status</p>
                <p className="text-sm font-bold text-gray-800">Clinical Evaluation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white p-6 rounded-[28px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#1e463c] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</p>
                <p className="text-sm font-bold text-gray-800">In-Person or Virtual</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Essential Forms Sidebar */}
            <div className="lg:col-span-4 h-full">
              <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6 h-full flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-[#1e463c]">
                    <Download className="w-6 h-6" />
                    <h4 className="font-bold text-lg">Essential Forms</h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">Download and complete your intake form prior to your first visit to save time at the clinic.</p>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleDownload('New Patient Intake Form')}
                      className="w-full flex items-center justify-center space-x-2 bg-[#1e463c] text-white py-4 rounded-2xl text-sm font-bold hover:bg-[#15342d] transition-all shadow-md active:scale-95"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Intake Form</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Onboarding Steps Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  title: 'Step 1: Clinical Intake', 
                  desc: 'A comprehensive dialogue about your history, goals, and current health status with our specialists.',
                  icon: '01'
                },
                { 
                  title: 'Step 2: Diagnostic Review', 
                  desc: 'Reviewing clinical assessments to identify the most effective therapeutic pathways for you.',
                  icon: '02'
                },
                { 
                  title: 'Step 3: Personalized Treatment Plan', 
                  desc: 'Collaboratively designing a treatment schedule that fits your lifestyle and clinical needs.',
                  icon: '03'
                },
                { 
                  title: 'Step 4: Care Coordination', 
                  desc: 'Beginning your sessions with continuous monitoring and protocol adjustments as you progress.',
                  icon: '04'
                }
              ].map((item) => (
                <div key={item.icon} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl font-black font-display text-black mb-6 block">{item.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Insurance Information & Coverage Section */}
      <InsuranceSection />

      {/* 5. FAQ Accordion Section */}
      <section id="faq" className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-mono font-bold text-[#c39b3d] uppercase tracking-widest">Common Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-[#1e463c] mx-auto rounded"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-gray-50/50 border border-gray-150 rounded-2xl overflow-hidden transition-all hover:bg-white hover:border-[#1e463c]"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-6 flex justify-between items-center text-left text-sm font-bold text-gray-900 focus:outline-none transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#c39b3d] transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                {activeFaq === idx && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-500 leading-relaxed font-sans border-t border-gray-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 bg-[#1e463c] rounded-[32px] text-center text-white space-y-4 shadow-xl">
            <h3 className="text-xl font-bold font-display">Still have questions?</h3>
            <p className="text-sm text-teal-100">Our patient coordinators are here to help you navigate your care options.</p>
            <div className="pt-2">
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-[#c39b3d] hover:bg-[#b08b33] text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-md active:scale-95 flex items-center space-x-2 mx-auto"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

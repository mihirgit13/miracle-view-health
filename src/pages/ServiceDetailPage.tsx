import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  ArrowLeft, 
  Calendar, 
  ShieldCheck, 
  HelpCircle,
  Laptop,
  Wifi,
  Lock
} from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailPageProps {
  service: Service;
  onBack: () => void;
  onBookNow: () => void;
}

import { setPageSeo } from '../utils/seoUtils';

export default function ServiceDetailPage({ service, onBack, onBookNow }: ServiceDetailPageProps) {
  useEffect(() => {
    setPageSeo({
      title: `${service.title} | Miracle View Health Specialty Care`,
      description: `${service.shortDesc} Outpatient psychiatric care in Tempe, AZ.`,
      canonicalPath: `/services/${service.id}`
    });
  }, [service]);

  return (
    <div id="service-detail-view" className="bg-white">
      
      {/* Back button header line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-500 hover:text-[#1e463c] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL SERVICES</span>
        </button>
      </div>

      {/* 1. Page Hero - Simplified & Clean */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span>Specialty Care - {service.id.toUpperCase()}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            {service.title}
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* 2. Detail Body Grid (What is, Conditions, Benefits) */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content column: What is */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <h2 className="text-2xl font-extrabold font-display text-gray-900 flex items-center space-x-2">
                  <HelpCircle className="w-6 h-6 text-[#1e463c]" />
                  <span>What is {service.title}?</span>
                </h2>
                <div className="w-12 h-1 bg-[#1e463c] rounded"></div>
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {service.fullContent || service.longDesc}
                </p>
              </div>

              {/* Conditions Treated checklist/pills */}
              {service.conditions && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-display text-gray-900">
                    Conditions Treated with {service.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.conditions.map((condition) => (
                      <div 
                        key={condition} 
                        className="flex items-center space-x-3 bg-gray-50 border border-gray-100 p-3.5 rounded-xl hover:bg-[#ecf3f0] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#1e463c] text-white flex items-center justify-center font-bold text-xs">
                          ✓
                        </div>
                        <span className="text-xs font-bold text-gray-800">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right column: Image and Benefits checklist */}
            <div className="lg:col-span-5 space-y-6">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#fcfdfd] border border-gray-200/50 rounded-3xl p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-display text-gray-950">
                    Benefits of {service.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-[#c39b3d] mt-1.5"></div>
                </div>

                <ul className="space-y-4">
                  {service.benefits?.map((benefit) => (
                    <li key={benefit} className="flex items-start space-[#124237] space-x-3 text-xs leading-relaxed text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#c39b3d] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-amber-50 border border-amber-200/50 p-4 rounded-2xl flex items-start space-x-3 text-xs text-amber-800">
                  <ShieldCheck className="w-5 h-5 text-[#c39b3d] mt-0.5 flex-shrink-0" />
                  <span>Always customized to individual clinical evaluation and history under physician authority.</span>
                </div>

                <div className="pt-4 border-t border-gray-150">
                  <button
                    onClick={onBookNow}
                    className="w-full bg-[#c39b3d] hover:bg-[#b08b33] text-white text-xs font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule a Consultation</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dynamic Telemedicine Supported Platforms Section */}
      {service.id === 'telemedicine' && (
        <section className="py-12 border-b border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <h2 className="text-xl font-bold font-display text-gray-900 tracking-tight text-center">
              Supported Platforms
            </h2>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              We utilize secure, fully encrypted, and HIPAA-compliant platforms for all virtual clinical appointments.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-2">
              {/* Zoom Widget */}
              <div className="flex items-center space-x-3 bg-blue-50/50 border border-blue-100 px-8 py-3.5 rounded-2xl w-full sm:w-auto justify-center">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-extrabold font-serif">Z</span>
                <span className="font-semibold text-blue-900 tracking-tight text-sm font-display">Zoom Healthcare</span>
              </div>

              {/* Teams Widget */}
              <div className="flex items-center space-x-3 bg-purple-50/50 border border-purple-100 px-8 py-3.5 rounded-2xl w-full sm:w-auto justify-center">
                <span className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-extrabold font-serif">T</span>
                <span className="font-semibold text-purple-900 tracking-tight text-sm font-display">Microsoft Teams</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Steps / Process Timeline Section */}
      {service.process && (
        <section className="py-16 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c39b3d]">Clinical Guidance</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-900 tracking-tight">
                How It Works: The {service.title} Treatment Process
              </h2>
              <div className="w-16 h-1 bg-[#1e463c] mx-auto rounded"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, idx) => (
                <div 
                  key={step.step}
                  className="bg-white border border-gray-100 rounded-2xl p-6.5 flex flex-col justify-between shadow-sm relative hover:shadow-md transition-shadow"
                >
                  {/* Decorative arrows */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-[#1e463c]/30">
                      →
                    </div>
                  )}

                  <div className="space-y-4">
                    <span className="w-10 h-10 rounded-xl bg-[#ecf3f0] border border-teal-50 text-[#1e463c] font-extrabold font-display text-base flex items-center justify-center shadow-inner">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold font-display text-gray-950">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Dynamic Telemedicine Technical Requirements Section */}
      {service.id === 'telemedicine' && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-teal-50/30 border border-[#ecf3f0] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-extrabold font-display text-[#1e463c]">
                Technical Requirements
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                To ensure high visual and auditory clarity during telemedicine consults, patients must prepare:
              </p>
              <ul className="space-y-2.5 text-xs text-gray-700 font-medium">
                <li className="flex items-center space-x-2">
                  <Wifi className="w-4 h-4 text-[#c39b3d]" />
                  <span>Stable internet connection (above 15 Mbps download recommendation)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Laptop className="w-4 h-4 text-[#c39b3d]" />
                  <span>Compatible laptop, tablet, or smartphone device with camera and microphone</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-[#c39b3d]" />
                  <span>Private and quiet space to ensure complete comfort and HIPAA communication rules</span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-56 flex-shrink-0 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center space-y-3">
              <Lock className="w-10 h-10 text-[#c39b3d]" />
              <h4 className="font-bold text-xs tracking-tight text-gray-800">HIPAA Compliant</h4>
              <p className="text-[10px] text-gray-400 leading-relaxed">
                Sessions are fully point-to-point encrypted as required by federal healthcare standards.
              </p>
            </div>

          </div>
        </section>
      )}

      {/* 4. Take the first step CTA block element */}
      <section className="py-16 bg-gradient-to-tr from-[#1e463c] to-[#257d66] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
            Take the First Step Towards Better Mental Health
          </h2>
          <p className="text-xs text-teal-100 max-w-md mx-auto leading-relaxed">
            Verify benefits or reserve your diagnostic mapping session. Our medical intake practitioners are ready of service in Tempe.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onBookNow}
              className="bg-[#c39b3d] hover:bg-[#b08b33] text-white text-xs font-extrabold px-8 py-3.5 rounded-full active:scale-95 transition-all outline-none"
            >
              Get Started with {service.title}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

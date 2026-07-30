import { useEffect } from 'react';
import { Eye, ChevronRight } from 'lucide-react';

import { setPageSeo } from '../utils/seoUtils';

export default function AccessibilityDisclaimerPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Accessibility Statement & Disclaimer | Miracle View Health',
      description: 'Web Content Accessibility Guidelines (WCAG 2.1 AA) statement and medical disclaimer for Miracle View Health LLC.',
      canonicalPath: '/accessibility-statement'
    });
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'purpose', title: '1. Purpose' },
    { id: 'accessibility', title: '2. Accessibility Commitment' },
    { id: 'info', title: '3. Website Information' },
    { id: 'emergency', title: '4. Emergency Medical Services' },
    { id: 'relationship', title: '5. No Patient-Provider Relationship' },
    { id: 'third-party', title: '6. Third-Party Websites' },
    { id: 'changes', title: '7. Changes to this Statement' },
    { id: 'contact', title: '8. Contact Information' },
  ];

  return (
    <div id="accessibility-statement-page" className="bg-gray-50 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <Eye className="w-4.5 h-4.5 text-[#c39b3d]" />
            <span>Compliance & Security Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Accessibility Statement & Disclaimer
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Our commitment to digital inclusion and terms governing website information
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation - Left */}
          <aside className="lg:col-span-4 sticky top-24 hidden lg:block bg-white p-6 rounded-[32px] border border-gray-150 shadow-sm max-h-[calc(100vh-120px)] overflow-y-auto">
            <h4 className="text-md font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Table of Contents</h4>
            <nav className="space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center text-xs font-semibold text-gray-500 hover:text-[#1e463c] py-2 px-3 rounded-lg hover:bg-gray-50 transition-all group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-gray-300 group-hover:text-[#c39b3d] transition-colors" />
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Text Area - Right */}
          <article className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-[32px] border border-gray-150 shadow-sm space-y-10 text-gray-600 text-sm leading-relaxed font-sans">
            
            <section id="purpose" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">1. Purpose</h2>
              <p>Miracle View Health LLC ("Miracle View Health," "we," "our," or "us") is committed to providing an accessible, user-friendly, and informative website for patients, caregivers, and visitors. This Accessibility Statement and Website Disclaimer outline our commitment to accessibility and the terms governing the use of information available through our website.</p>
            </section>

            <section id="accessibility" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">2. Accessibility Commitment</h2>
              <p>Miracle View Health strives to ensure that our website is accessible to all users, including individuals with disabilities. We are committed to continually improving the accessibility and usability of our website to provide an inclusive experience for all visitors.</p>
              <p>If you experience difficulty accessing any part of our website or require reasonable accommodation to access our services or information, please contact us using the details provided below. We will make reasonable efforts to provide the requested information or assistance in an accessible manner.</p>
            </section>

            <section id="info" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">3. Website Information</h2>
              <p>The information provided on this website is intended solely for general educational and informational purposes regarding our healthcare services. The content is not intended to replace professional medical advice, diagnosis, or treatment and should not be relied upon as a substitute for consultation with a qualified healthcare provider.</p>
              <p className="font-semibold text-gray-950">Patients should seek professional medical advice regarding any healthcare concerns or treatment decisions.</p>
            </section>

            <section id="emergency" className="space-y-4 bg-red-50/50 p-6 rounded-2xl border border-red-100">
              <h2 className="text-2xl font-extrabold font-display text-red-950 border-b border-red-100 pb-2">4. Emergency Medical Services</h2>
              <p className="font-bold text-red-900">This website is not intended for medical emergencies or urgent healthcare needs.</p>
              <p>If you are experiencing a medical emergency, a psychiatric emergency, or a life-threatening condition, immediately call 911 or visit the nearest emergency department. Website forms, email communications, or online appointment requests should not be used for emergency situations.</p>
            </section>

            <section id="relationship" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">5. No Patient-Provider Relationship</h2>
              <p>Accessing this website, reviewing its content, submitting an inquiry, or requesting an appointment does not establish a patient-provider relationship with Miracle View Health. Such a relationship is established only after acceptance by Miracle View Health and the provision of appropriate healthcare services.</p>
            </section>

            <section id="third-party" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">6. Third-Party Websites</h2>
              <p>Our website may contain links to third-party websites or external resources for your convenience. Miracle View Health does not control or assume responsibility for the content, availability, security, or privacy practices of third-party websites. Users are encouraged to review the privacy policies and terms applicable to those websites before providing personal information.</p>
            </section>

            <section id="changes" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">7. Changes to this Statement</h2>
              <p>Miracle View Health reserves the right to modify this Accessibility Statement and Website Disclaimer at any time to reflect changes in applicable laws, technology, website functionality, or organizational practices. The most current version will be available on our website.</p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">8. Contact Information</h2>
              <p>For questions regarding this Policy or our healthcare services, please contact:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-1 text-xs">
                <p className="font-bold text-gray-900 text-sm">Miracle View Health LLC</p>
                <p><span className="font-semibold text-gray-700">Address:</span> 4801 S. Lakeshore Drive, Suite 102, Tempe, Arizona 85282</p>
                <p><span className="font-semibold text-gray-700">Phone:</span> (520) 274-1251</p>
                <p><span className="font-semibold text-gray-700">Fax number:</span> (520) 322-9814</p>
                <p><span className="font-semibold text-gray-700">Email:</span> <a href="mailto:info@miracleviewhealthllc.com" className="text-[#c39b3d] hover:underline font-bold">info@miracleviewhealthllc.com</a></p>
              </div>
            </section>

          </article>
        </div>
      </section>
    </div>
  );
}

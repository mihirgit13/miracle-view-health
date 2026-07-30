import { useEffect } from 'react';
import { Landmark, ChevronRight } from 'lucide-react';

import { setPageSeo } from '../utils/seoUtils';

export default function NoticeOfPrivacyPracticesPage() {
  useEffect(() => {
    setPageSeo({
      title: 'HIPAA Notice of Privacy Practices | Miracle View Health',
      description: 'HIPAA Notice of Privacy Practices (NPP) outlining patient health information privacy rights under 45 CFR Parts 160 and 164.',
      canonicalPath: '/notice-of-privacy-practices'
    });
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'purpose', title: '1. Purpose' },
    { id: 'phi', title: '2. Protected Health Information (PHI)' },
    { id: 'uses-disclosures', title: '3. Uses & Disclosures of PHI' },
    { id: 'authorization', title: '4. Uses Requiring Written Authorization' },
    { id: 'privacy-rights', title: '5. Your Privacy Rights' },
    { id: 'children-rep', title: '6. Children & Representatives' },
    { id: 'responsibilities', title: '7. Our Responsibilities' },
    { id: 'electronic-comm', title: '8. Website & Electronic Comm.' },
    { id: 'complaints', title: '9. Complaints' },
    { id: 'changes', title: '10. Changes to this Notice' },
    { id: 'contact', title: '11. Contact Information' },
    { id: 'availability', title: '12. Notice Availability' },
  ];

  return (
    <div id="notice-of-privacy-practices-page" className="bg-gray-50 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <Landmark className="w-4.5 h-4.5 text-[#c39b3d]" />
            <span>Compliance & Security Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            HIPAA Notice of Privacy Practices
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Your rights and our responsibilities regarding your Protected Health Information (PHI)
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
              <p>Miracle View Health LLC ("Miracle View Health", "we", "our", or "us") is committed to protecting the privacy and confidentiality of your Protected Health Information (PHI). This Notice of Privacy Practices ("Notice") describes how your PHI may be used and disclosed, your rights regarding your health information, and our responsibilities for safeguarding that information.</p>
              <p>This Notice applies to all Protected Health Information created, received, maintained, or transmitted by Miracle View Health in connection with the healthcare services we provide.</p>
              <p className="font-semibold text-gray-900">By receiving healthcare services from Miracle View Health, you acknowledge that this Notice has been made available to you.</p>
            </section>

            <section id="phi" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">2. Protected Health Information (PHI)</h2>
              <p>Protected Health Information (PHI) refers to individually identifiable information relating to your physical health, mental or behavioral health, healthcare services received, diagnosis, treatment, medications, laboratory results, appointment history, insurance information, billing records, payment information, and any other information maintained as part of your medical record.</p>
            </section>

            <section id="uses-disclosures" className="space-y-6">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">3. Uses and Disclosures of Protected Health Information</h2>
              <p>Miracle View Health may use or disclose your Protected Health Information without your written authorization where permitted or required by applicable law.</p>

              <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                <h3 className="text-base font-bold text-gray-900">3.1 Treatment</h3>
                <p>Your Protected Health Information may be used or disclosed for the purpose of providing, coordinating, or managing your healthcare services. This may include communication with physicians, psychiatrists, therapists, nurses, pharmacies, laboratories, diagnostic facilities, referral providers, case managers, and other healthcare professionals involved in your care.</p>

                <h3 className="text-base font-bold text-gray-900 pt-2">3.2 Payment</h3>
                <p>Your Protected Health Information may be used or disclosed to obtain reimbursement for healthcare services provided. This may include insurance verification, eligibility determination, prior authorization, claims processing, billing, payment collection, coordination of benefits, payment audits, and healthcare financing activities.</p>

                <h3 className="text-base font-bold text-gray-900 pt-2">3.3 Healthcare Operations</h3>
                <p>Your Protected Health Information may be used or disclosed to support the operation and management of Miracle View Health. This may include quality improvement activities, clinical supervision, workforce training, internal auditing, accreditation activities, licensing, compliance monitoring, risk management, peer review, business planning, information security, and administrative operations.</p>

                <h3 className="text-base font-bold text-gray-900 pt-2">3.4 Appointment and Care Communications</h3>
                <p>We may use your contact information to communicate with you regarding appointment scheduling, appointment reminders, follow-up care, treatment coordination, billing notifications, insurance matters, and other healthcare-related administrative communications. Communications may be provided by telephone, voicemail, email, text message, patient portal, or other appropriate communication methods.</p>

                <h3 className="text-base font-bold text-gray-900 pt-2">3.5 Individuals Involved in Your Care</h3>
                <p>Protected Health Information may be disclosed to a parent, legal guardian, authorized representative, family member, caregiver, or other individual involved in your care or payment for healthcare, where permitted by applicable law or authorized by you.</p>

                <h3 className="text-base font-bold text-gray-900 pt-2">3.6 Public Interest and Legal Requirements</h3>
                <p>Protected Health Information may be disclosed where required or permitted by law for public health activities, health oversight activities, judicial or administrative proceedings, law enforcement purposes, regulatory investigations, reporting obligations, abuse or neglect reporting, public safety, national security, or other legally authorized purposes.</p>

                <h3 className="text-base font-bold text-gray-900 pt-2">3.7 Business Associates</h3>
                <p>Miracle View Health may disclose Protected Health Information to authorized Business Associates performing services on our behalf. Such organizations are contractually required to maintain appropriate safeguards to protect the confidentiality, integrity, and security of your Protected Health Information.</p>
              </div>
            </section>

            <section id="authorization" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">4. Uses Requiring Your Written Authorization</h2>
              <p>Uses or disclosures of Protected Health Information not otherwise permitted by applicable law will be made only with your written authorization.</p>
              <p>Where applicable, written authorization is required for marketing communications, the sale of Protected Health Information, certain uses or disclosures of psychotherapy notes, and other activities requiring individual authorization under applicable healthcare privacy laws. You may revoke your authorization at any time in writing, except where action has already been taken in reliance upon your authorization.</p>
            </section>

            <section id="privacy-rights" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">5. Your Privacy Rights</h2>
              <p>Subject to applicable legal requirements, you have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access and obtain copies of your Protected Health Information.</li>
                <li>Request amendment or correction of your medical records.</li>
                <li>Request restrictions on certain uses or disclosures of your information.</li>
                <li>Request confidential communications through alternative methods or locations.</li>
                <li>Receive an accounting of certain disclosures of your Protected Health Information.</li>
                <li>Receive a paper or electronic copy of this Notice of Privacy Practices.</li>
                <li>File a complaint regarding our privacy practices without fear of retaliation.</li>
              </ul>
              <p className="text-xs text-gray-500 italic">Requests may be subject to identity verification and applicable legal limitations.</p>
            </section>

            <section id="children-rep" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">6. Children and Individuals with Authorized Representatives</h2>
              <p>Where healthcare services are provided to children or individuals who are unable to provide informed consent or independently manage their healthcare decisions, Miracle View Health may collect, use, maintain, and disclose information relating to both the patient and the parent, legal guardian, or other legally authorized representative, as necessary to facilitate treatment, payment, healthcare operations, care coordination, consent management, and compliance with applicable legal requirements.</p>
            </section>

            <section id="responsibilities" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">7. Our Responsibilities</h2>
              <p>Miracle View Health is committed to protecting the privacy of your Protected Health Information and will:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Maintain appropriate administrative, technical, and physical safeguards.</li>
                <li>Use and disclose Protected Health Information only as permitted or required by applicable law.</li>
                <li>Limit the use and disclosure of Protected Health Information to the minimum necessary, where applicable.</li>
                <li>Maintain workforce awareness regarding privacy and confidentiality responsibilities.</li>
                <li>Notify affected individuals following a reportable breach of unsecured Protected Health Information, where required by applicable law.</li>
                <li>Make this Notice available to patients and comply with the terms of the currently effective Notice.</li>
              </ul>
            </section>

            <section id="electronic-comm" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">8. Website and Electronic Communications</h2>
              <p>Information submitted through our website, including appointment requests, contact forms, insurance verification requests, career applications, and newsletter subscriptions, is governed by our Website Privacy Policy.</p>
              <p>Where information submitted through the website becomes part of your medical record, such information shall thereafter be treated as Protected Health Information and managed in accordance with this Notice. Electronic communications may involve inherent security risks. While Miracle View Health implements reasonable safeguards to protect electronic communications, complete security cannot be guaranteed.</p>
            </section>

            <section id="complaints" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">9. Complaints</h2>
              <p>If you believe your privacy rights have been violated, you may submit a complaint to Miracle View Health or directly to the U.S. Department of Health and Human Services, Office for Civil Rights. Miracle View Health will not retaliate against any individual for filing a complaint regarding privacy practices.</p>
            </section>

            <section id="changes" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">10. Changes to this Notice</h2>
              <p>Miracle View Health reserves the right to amend this Notice at any time. Any revised Notice shall apply to all Protected Health Information maintained by Miracle View Health and will be made available through our website, at our facility, and upon request.</p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">11. Contact Information</h2>
              <p>For questions regarding this Notice or our healthcare services, please contact:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-1 text-xs">
                <p className="font-bold text-gray-900 text-sm">Miracle View Health LLC</p>
                <p><span className="font-semibold text-gray-700">Address:</span> 4801 S. Lakeshore Drive, Suite 102, Tempe, Arizona 85282</p>
                <p><span className="font-semibold text-gray-700">Phone:</span> (520) 274-1251</p>
                <p><span className="font-semibold text-gray-700">Fax number:</span> (520) 322-9814</p>
                <p><span className="font-semibold text-gray-700">Email:</span> <a href="mailto:info@miracleviewhealthllc.com" className="text-[#c39b3d] hover:underline font-bold">info@miracleviewhealthllc.com</a></p>
              </div>
            </section>

            <section id="availability" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">12. Notice Availability</h2>
              <p>This Notice of Privacy Practices is made available to all patients and website users in accordance with applicable healthcare privacy requirements. By accessing our website or receiving healthcare services from Miracle View Health LLC, you acknowledge that this Notice has been made available to you. Continued use of our website or healthcare services signifies your understanding of the privacy practices described herein, to the extent permitted by applicable law.</p>
            </section>

          </article>
        </div>
      </section>
    </div>
  );
}

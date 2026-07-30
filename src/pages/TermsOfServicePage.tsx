import { useEffect } from 'react';
import { FileText, ChevronRight } from 'lucide-react';

import { setPageSeo } from '../utils/seoUtils';

export default function TermsOfServicePage() {
  useEffect(() => {
    setPageSeo({
      title: 'Terms of Medical Service | Miracle View Health',
      description: 'Official Terms of Medical Service and treatment guidelines for patients of Miracle View Health LLC.',
      canonicalPath: '/terms-of-service'
    });
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'intro', title: '1. Introduction' },
    { id: 'scope', title: '2. Scope of Medical Services' },
    { id: 'disclaimer', title: '3. Medical Disclaimer' },
    { id: 'emergency', title: '4. Emergency Situations' },
    { id: 'appointment', title: '5. Appointment Requests' },
    { id: 'patient-resp', title: '6. Patient Responsibilities' },
    { id: 'clinical-eval', title: '7. Clinical Evaluations' },
    { id: 'telehealth', title: '8. Telehealth Services' },
    { id: 'insurance', title: '9. Insurance Verification' },
    { id: 'fees', title: '10. Fees & Payments' },
    { id: 'cancellation', title: '11. Cancellation & No-Show' },
    { id: 'prescription', title: '12. Prescription Management' },
    { id: 'electronic-comm', title: '13. Electronic Communications' },
    { id: 'privacy', title: '14. Privacy & Confidentiality' },
    { id: 'intellectual-prop', title: '15. Intellectual Property' },
    { id: 'acceptable-use', title: '16. Acceptable Use' },
    { id: 'accessibility', title: '17. Accessibility & Non-Discrimination' },
    { id: 'availability', title: '18. Website Availability' },
    { id: 'third-party', title: '19. Third-Party Websites' },
    { id: 'liability', title: '20. Limitation of Liability' },
    { id: 'force-majeure', title: '21. Force Majeure' },
    { id: 'changes-services', title: '22. Changes to Services' },
    { id: 'changes-terms', title: '23. Changes to Terms' },
    { id: 'governing-law', title: '24. Governing Law' },
    { id: 'contact', title: '25. Contact Information' },
    { id: 'acceptance', title: '26. Acceptance of Terms' },
  ];

  return (
    <div id="terms-of-service-page" className="bg-gray-50 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <FileText className="w-4.5 h-4.5 text-[#c39b3d]" />
            <span>Compliance & Security Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Terms of Medical Service
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Rules, responsibilities, and expectations for patients and visitors
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
                  className="flex items-center text-xs font-semibold text-gray-500 hover:text-[#1e463c] py-1.5 px-3 rounded-lg hover:bg-gray-50 transition-all group"
                >
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-gray-300 group-hover:text-[#c39b3d] transition-colors" />
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Text Area - Right */}
          <article className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-[32px] border border-gray-150 shadow-sm space-y-10 text-gray-600 text-sm leading-relaxed font-sans">
            
            <section id="intro" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">1. Introduction</h2>
              <p>Welcome to Miracle View Health LLC ("Miracle View Health," "we," "our," or "us").</p>
              <p>These Terms of Medical Service ("Terms") govern your access to and use of our website, online services, appointment scheduling platform, telehealth services (where applicable), and the healthcare services provided by Miracle View Health.</p>
              <p>Our mission is to provide compassionate, high-quality behavioral healthcare while protecting the privacy, dignity, and rights of every patient. These Terms are intended to establish a clear understanding of the responsibilities and expectations of both Miracle View Health and individuals who access our website or receive our services.</p>
              <p>By accessing our website, requesting an appointment, communicating with our clinic, using our online services, or receiving healthcare services from Miracle View Health, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
              <p>These Terms should be read together with our Privacy Policy and Notice of Privacy Practices, which describe how your personal information and Protected Health Information (PHI) are collected, used, disclosed, and protected. If you do not agree with these Terms, you should discontinue use of our website and online services.</p>
            </section>

            <section id="scope" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">2. Scope of Medical Services</h2>
              <p>Miracle View Health provides outpatient behavioral and mental healthcare services designed to support the emotional, psychological, and overall well-being of our patients. Our services may include, but are not limited to:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5">
                <li>Psychiatric Evaluation</li>
                <li>Medication Management</li>
                <li>Individual & Family Therapy</li>
                <li>Group Counseling</li>
                <li>Telehealth Consultations</li>
                <li>Transcranial Magnetic Stimulation (TMS) Therapy</li>
                <li>Drug and Alcohol Recovery Programs</li>
                <li>Case Management & Assessments</li>
                <li>Insurance Verification Assistance</li>
              </ul>
              <p>Healthcare services are provided only after appropriate clinical evaluation and are subject to provider availability, clinical appropriateness, licensing requirements, and applicable federal and state laws. Not every treatment or service may be appropriate for every patient, and treatment recommendations remain solely within the professional judgment of our licensed healthcare providers.</p>
            </section>

            <section id="disclaimer" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">3. Medical Disclaimer</h2>
              <p>The information available on this website is intended solely for general educational and informational purposes.</p>
              <p className="font-semibold text-gray-900">Website content should not be considered medical advice, diagnosis, treatment recommendations, or a substitute for consultation with a qualified healthcare professional.</p>
              <p>Healthcare decisions should always be made after consultation with an appropriately licensed provider. Reliance upon information available on this website is solely at your own discretion.</p>
            </section>

            <section id="emergency" className="space-y-4 bg-red-50/50 p-6 rounded-2xl border border-red-100">
              <h2 className="text-2xl font-extrabold font-display text-red-950 border-b border-red-100 pb-2">4. Emergency Medical Situations</h2>
              <p className="font-bold text-red-900">Miracle View Health does not provide emergency medical services through this website.</p>
              <p>If you are experiencing: a medical emergency, a psychiatric emergency, suicidal thoughts, thoughts of harming yourself or others, severe emotional distress, or any life-threatening condition:</p>
              <p className="font-extrabold text-red-700 text-base">Immediately call 911, contact your local emergency services, or visit the nearest emergency department.</p>
              <p className="text-xs text-red-800">Website forms, emails, voicemail messages, appointment requests, or online communications should never be used for emergency situations, as they may not be reviewed immediately.</p>
            </section>

            <section id="appointment" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">5. Appointment Requests and Scheduling</h2>
              <p>Appointments requested through our website are considered appointment requests only and do not constitute confirmed appointments. An appointment is considered confirmed only after required information has been received, clinical appropriateness has been reviewed, insurance verification has been completed (if applicable), availability has been confirmed, and confirmation has been communicated by Miracle View Health.</p>
              <p>We reserve the right to reschedule, postpone, or cancel appointments due to provider availability, unforeseen circumstances, operational requirements, or clinical considerations.</p>
            </section>

            <section id="patient-resp" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">6. Patient Responsibilities</h2>
              <p>Patients play an important role in ensuring safe and effective healthcare. Patients are expected to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Provide complete, accurate, and truthful information.</li>
                <li>Inform us promptly of any changes to contact information, insurance, medications, allergies, or medical history.</li>
                <li>Participate actively in treatment planning and follow agreed treatment recommendations.</li>
                <li>Attend scheduled appointments or provide timely notice if rescheduling is necessary.</li>
                <li>Treat healthcare professionals, staff members, and other patients with courtesy and respect.</li>
                <li>Refrain from disruptive, abusive, threatening, discriminatory, or inappropriate behavior.</li>
              </ul>
              <p className="text-xs text-gray-500 italic">Failure to provide accurate information may affect the quality, safety, or availability of healthcare services.</p>
            </section>

            <section id="clinical-eval" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">7. Clinical Evaluation and Treatment Decisions</h2>
              <p>Healthcare services are provided following professional clinical evaluation and assessment. Treatment recommendations are based upon clinical findings, medical history, current symptoms, evidence-based practices, professional judgment, and patient goals.</p>
              <p>Patients are encouraged to ask questions and participate in decisions regarding their treatment. While Miracle View Health strives to provide the highest quality care, healthcare outcomes vary among individuals and no specific treatment result or medical outcome can be guaranteed.</p>
            </section>

            <section id="telehealth" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">8. Telehealth Services</h2>
              <p>Where telehealth services are available, patients acknowledge that telehealth consultations may differ from traditional in-person visits. Patients agree to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Participate from a private and secure location whenever possible.</li>
                <li>Ensure adequate internet connectivity and verify identity when requested.</li>
                <li>Provide accurate location information at the beginning of each session.</li>
                <li>Follow provider instructions regarding technology requirements.</li>
              </ul>
              <p>Telehealth services may be interrupted due to technical issues beyond our control. Healthcare providers may determine that an in-person consultation is clinically necessary and may discontinue or reschedule telehealth appointments accordingly.</p>
            </section>

            <section id="insurance" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">9. Insurance Verification</h2>
              <p>Miracle View Health may assist patients by verifying insurance eligibility and benefits as a courtesy.</p>
              <p className="font-semibold text-gray-900">Insurance verification does not constitute a guarantee of coverage, payment, medical necessity determination, authorization, or reimbursement.</p>
              <p>Final determination of benefits remains the responsibility of the patient's insurance provider. Patients remain responsible for understanding their insurance coverage and for payment of any deductibles, co-payments, coinsurance, or services not covered by insurance.</p>
            </section>

            <section id="fees" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">10. Fees and Payment Responsibilities</h2>
              <p>Patients are responsible for payment of healthcare services not covered by insurance or other third-party payers. Financial responsibility may include co-payments, coinsurance, deductibles, self-pay services, outstanding balances, and charges for non-covered services. Payment policies may change periodically to reflect operational or regulatory requirements.</p>
            </section>

            <section id="cancellation" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">11. Appointment Cancellation and No-Show Policy</h2>
              <p>Patients who need to cancel or reschedule an appointment should notify Miracle View Health as early as reasonably possible.</p>
              <p>Repeated missed appointments, excessive late cancellations, or repeated failure to attend scheduled appointments may result in:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cancellation fees, where permitted by law</li>
                <li>Reduced scheduling priority or modification of future availability</li>
                <li>Discontinuation of non-emergency services where clinically appropriate</li>
              </ul>
            </section>

            <section id="prescription" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">12. Prescription and Medication Management</h2>
              <p>Prescription decisions remain solely within the professional judgment of licensed healthcare providers. Submission of an appointment request does not guarantee prescription issuance, medication refill approval, or controlled substance prescriptions.</p>
              <p>Providers may require additional evaluation, laboratory testing, follow-up visits, or consultation before prescribing or renewing medications. Patients should take medications only as directed and promptly report any adverse reactions or concerns.</p>
            </section>

            <section id="electronic-comm" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">13. Electronic Communications</h2>
              <p>By providing your telephone number or email address, you consent to receive communications related to appointment confirmations, reminders, scheduling changes, billing notifications, insurance verification, care coordination, and administrative updates.</p>
              <p>While we use reasonable safeguards to protect communications, patients should understand that standard email and text messaging may not always be fully secure. Sensitive medical information should be shared only through approved communication methods whenever possible. Patients may opt out of non-essential communications where permitted by law.</p>
            </section>

            <section id="privacy" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">14. Privacy and Confidentiality</h2>
              <p>Miracle View Health respects the confidentiality of patient information. Personal information and Protected Health Information (PHI) are collected, used, stored, and disclosed in accordance with our Privacy Policy, Notice of Privacy Practices, and applicable healthcare privacy requirements, including HIPAA principles where applicable.</p>
              <p>Access to patient information is limited to authorized individuals who require such information to perform legitimate healthcare, administrative, operational, or legal functions.</p>
            </section>

            <section id="intellectual-prop" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">15. Intellectual Property</h2>
              <p>All website content, including but not limited to logos, trademarks, graphics, photographs, educational materials, website design, videos, text, and documents, is the property of Miracle View Health or its licensors and is protected by applicable intellectual property laws.</p>
              <p>No content may be copied, reproduced, distributed, modified, or commercially exploited without prior written authorization.</p>
            </section>

            <section id="acceptable-use" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">16. Acceptable Use of the Website</h2>
              <p>Users agree to use the website lawfully and responsibly. Users shall not attempt unauthorized access to our systems, introduce malicious software, interfere with website functionality, misrepresent their identity, submit false or misleading information, or use the website for unlawful or fraudulent purposes. Violation of these Terms may result in suspension or restriction of website access.</p>
            </section>

            <section id="accessibility" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">17. Accessibility and Non-Discrimination</h2>
              <p>Miracle View Health is committed to providing healthcare services in a respectful, inclusive, and accessible manner. We do not discriminate in the provision of healthcare services based on race, color, national origin, age, disability, sex, religion, or any other characteristic protected by applicable law.</p>
              <p>Patients requiring reasonable accommodations or language assistance are encouraged to contact our office in advance so appropriate arrangements can be made whenever reasonably possible.</p>
            </section>

            <section id="availability" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">18. Website Availability</h2>
              <p>Although we strive to maintain continuous website availability, uninterrupted access cannot be guaranteed. Temporary interruptions may occur due to scheduled maintenance, software updates, technical failures, internet disruptions, cybersecurity events, or circumstances beyond our reasonable control. Miracle View Health shall not be liable for temporary interruptions in website availability.</p>
            </section>

            <section id="third-party" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">19. Third-Party Websites</h2>
              <p>Our website may contain links to external websites operated by third parties. Such links are provided solely for convenience and informational purposes. Miracle View Health does not endorse or assume responsibility for the content, security, privacy practices, or availability of third-party websites. Users access third-party websites at their own discretion and risk.</p>
            </section>

            <section id="liability" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">20. Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, Miracle View Health shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from: use of the website, website interruptions, technical failures, delayed appointment requests, reliance on website content, unauthorized access beyond our reasonable control, or events outside our reasonable control.</p>
            </section>

            <section id="force-majeure" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">21. Force Majeure</h2>
              <p>Miracle View Health shall not be responsible for delays, interruptions, or inability to provide services resulting from events beyond our reasonable control, including but not limited to natural disasters, public health emergencies, utility failures, internet or telecommunications outages, cyber incidents, governmental actions, labor disputes, or other unforeseen circumstances.</p>
            </section>

            <section id="changes-services" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">22. Changes to Medical Services</h2>
              <p>Miracle View Health reserves the right to modify, expand, suspend, or discontinue healthcare services, treatment programs, provider availability, appointment procedures, website functionality, or operational practices as necessary to support patient care, comply with legal obligations, or improve service quality.</p>
            </section>

            <section id="changes-terms" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">23. Changes to these Terms</h2>
              <p>These Terms may be updated periodically to reflect changes in healthcare practices, applicable laws, regulatory guidance, accreditation requirements, operational processes, and technology. Updated Terms become effective immediately upon publication on our website unless otherwise stated.</p>
            </section>

            <section id="governing-law" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">24. Governing Law</h2>
              <p>These Terms shall be governed by and interpreted in accordance with the laws of the State of Arizona, together with applicable federal laws of the United States. Any disputes arising from these Terms shall be subject to the jurisdiction of the appropriate courts located within the State of Arizona, unless otherwise required by applicable law.</p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">25. Contact Information</h2>
              <p>For questions regarding these Terms of Medical Service or our healthcare services, please contact:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-1 text-xs">
                <p className="font-bold text-gray-900 text-sm">Miracle View Health LLC</p>
                <p><span className="font-semibold text-gray-700">Address:</span> 4801 S. Lakeshore Drive, Suite 102, Tempe, Arizona 85282</p>
                <p><span className="font-semibold text-gray-700">Phone:</span> (520) 274-1251</p>
                <p><span className="font-semibold text-gray-700">Fax number:</span> (520) 322-9814</p>
                <p><span className="font-semibold text-gray-700">Email:</span> <a href="mailto:info@miracleviewhealthllc.com" className="text-[#c39b3d] hover:underline font-bold">info@miracleviewhealthllc.com</a></p>
              </div>
            </section>

            <section id="acceptance" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">26. Acceptance of Terms</h2>
              <p>By accessing or using this website, requesting appointments, participating in telehealth consultations, communicating with Miracle View Health, or receiving healthcare services from our organization, you acknowledge that you have read, understood, and agree to these Terms of Medical Service.</p>
              <p>If you are acting on behalf of a child or an individual who is unable to provide informed consent, you represent that you are a parent, legal guardian, or other legally authorized representative with the authority to accept these Terms on their behalf.</p>
              <p>Your continued use of our website and services constitutes your ongoing acceptance of these Terms, as they may be updated from time to time.</p>
            </section>

          </article>
        </div>
      </section>
    </div>
  );
}

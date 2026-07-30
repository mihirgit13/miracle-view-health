import { useEffect } from 'react';
import { Shield, ChevronRight } from 'lucide-react';

import { setPageSeo } from '../utils/seoUtils';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Website Privacy Policy | Miracle View Health',
      description: 'Read the official Privacy Policy for Miracle View Health LLC detailing how we protect patient privacy, handle PHI, and maintain HIPAA compliance.',
      canonicalPath: '/privacy-policy'
    });
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'scope', title: '2. Scope' },
    { id: 'info-collect', title: '3. Information We Collect' },
    { id: 'how-collect', title: '4. How We Collect Information' },
    { id: 'how-use', title: '5. How We Use Your Information' },
    { id: 'phi', title: '6. Protected Health Information (PHI)' },
    { id: 'legal-basis', title: '7. Legal Basis' },
    { id: 'sharing', title: '8. Sharing Information' },
    { id: 'cookies', title: '9. Cookies' },
    { id: 'security', title: '10. Data Security' },
    { id: 'retention', title: '11. Data Retention' },
    { id: 'rights', title: '12. Your Rights' },
    { id: 'third-party', title: '13. Third-Party Websites' },
    { id: 'children', title: '14. Children & Representatives' },
    { id: 'international', title: '15. International Visitors' },
    { id: 'changes', title: '16. Changes to this Policy' },
    { id: 'contact', title: '17. Contact Information' },
    { id: 'consent', title: '18. Consent' },
  ];

  return (
    <div id="privacy-policy-page" className="bg-gray-50 min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <Shield className="w-4.5 h-4.5 text-[#c39b3d]" />
            <span>Compliance & Security Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Website Privacy Policy
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            How we protect and manage the information you share with us
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
            
            <section id="introduction" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">1. Introduction</h2>
              <p>Welcome to Miracle View Health LLC ("Miracle View Health," "we," "our," or "us").</p>
              <p>Your privacy is important to us. We are committed to protecting the confidentiality, integrity, and security of the personal information you share with us through our website and online services.</p>
              <p>As a healthcare provider, we recognize the importance of safeguarding patient information and maintaining trust. We implement appropriate administrative, technical, and physical safeguards to protect the information entrusted to us and strive to maintain practices consistent with applicable healthcare privacy and security requirements, including the principles of the Health Insurance Portability and Accountability Act (HIPAA), where applicable.</p>
              <p>This Privacy Policy explains:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>What information we collect;</li>
                <li>How we collect and use your information;</li>
                <li>When we may share your information;</li>
                <li>How we protect your information;</li>
                <li>Your privacy choices and rights; and</li>
                <li>How you can contact us regarding this Privacy Policy.</li>
              </ul>
              <p>By using our website, you acknowledge that you have read and understood this Privacy Policy.</p>
            </section>

            <section id="scope" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">2. Scope</h2>
              <p>This Privacy Policy applies to information collected through:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Our official website;</li>
                <li>Online appointment scheduling;</li>
                <li>Insurance verification requests;</li>
                <li>Contact forms;</li>
                <li>Career application submissions;</li>
                <li>Newsletter subscriptions; and</li>
                <li>Communications made through our website.</li>
              </ul>
              <p>This Privacy Policy applies only to information collected through our website and does not replace our separate Notice of Privacy Practices that applies to Protected Health Information (PHI) created or maintained as part of your medical care.</p>
            </section>

            <section id="info-collect" className="space-y-6">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">3. Information We Collect</h2>
              <p>Depending on how you interact with our website, we may collect different categories of personal information.</p>

              <div className="space-y-4 pl-4 border-l-2 border-gray-100">
                <h3 className="text-base font-bold text-gray-900">3.1 Personal Identification Information</h3>
                <p>We may collect information such as:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Mailing Address (if voluntarily provided)</li>
                </ul>

                <h3 className="text-base font-bold text-gray-900 pt-4">3.2 Appointment Scheduling Information</h3>
                <p>When you request an appointment through our website, we may collect:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Patient Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Preferred appointment date and time</li>
                  <li>Treatment selection</li>
                  <li>Comments or additional notes</li>
                  <li>Medical reports or supporting documents voluntarily uploaded</li>
                </ul>
                <p className="text-xs text-gray-500 italic">This information is used solely to coordinate appointments and communicate regarding your requested services.</p>

                <h3 className="text-base font-bold text-gray-900 pt-4">3.3 Contact Form Information</h3>
                <p>When you submit an inquiry through our Contact Us page, we may collect: Full Name, Email Address, Phone Number, and Message content. This information allows us to respond to your questions and service requests.</p>

                <h3 className="text-base font-bold text-gray-900 pt-4">3.4 Insurance Verification Information</h3>
                <p>If you request insurance eligibility verification, we may collect: Full Name, Phone Number, Insurance Provider, and Policy Number or Member ID. This information is used exclusively to verify insurance eligibility and coverage prior to providing healthcare services.</p>

                <h3 className="text-base font-bold text-gray-900 pt-4">3.5 Career Application Information</h3>
                <p>When you apply for employment opportunities through our website, we may collect: Full Name, Email Address, Phone Number, Position Applied For, Resume, Cover Letter, and employment-related information voluntarily submitted. This is used solely for recruitment, candidate evaluation, interview scheduling, and employment consideration.</p>

                <h3 className="text-base font-bold text-gray-900 pt-4">3.6 Newsletter Subscription</h3>
                <p>When you subscribe to receive updates, we collect your Email Address. You may unsubscribe at any time using the unsubscribe link included in our emails.</p>

                <h3 className="text-base font-bold text-gray-900 pt-4">3.7 Automatically Collected Information</h3>
                <p>When you visit our website, certain technical information may automatically be collected, including IP Address, Browser Type, Device Information, Operating System, Internet Service Provider, Date and Time of Visit, Pages Viewed, Website Navigation, Referral Source, Session Information, Cookies and Similar Technologies. This information helps us improve website functionality, security, usability, and performance.</p>
              </div>
            </section>

            <section id="how-collect" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">4. How We Collect Information</h2>
              <p>Information is collected through website forms, appointment requests, insurance verification requests, contact forms, career applications, newsletter subscriptions, cookies, analytics technologies and communications you voluntarily send to us.</p>
            </section>

            <section id="how-use" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">5. How We Use Your Information</h2>
              <p>We collect and process information only for legitimate healthcare and business purposes.</p>
              <p>Your information may be used to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Schedule and manage appointments</li>
                <li>Coordinate patient consultations</li>
                <li>Verify insurance eligibility</li>
                <li>Respond to inquiries</li>
                <li>Process employment applications</li>
                <li>Deliver newsletters and requested communications</li>
                <li>Improve our website and services</li>
                <li>Monitor website performance and security</li>
                <li>Prevent fraud and unauthorized activities</li>
                <li>Meet legal, regulatory, accreditation, and compliance obligations</li>
                <li>Protect the safety and security of our patients, staff, and systems</li>
              </ul>
              <p>We do not collect more information than reasonably necessary for these purposes.</p>
            </section>

            <section id="phi" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">6. Protected Health Information (PHI)</h2>
              <p>Certain information submitted through our website may qualify as Protected Health Information (PHI) when connected with healthcare services.</p>
              <p>Where applicable, Miracle View Health manages such information in accordance with applicable healthcare privacy requirements, including HIPAA. Health-related information is accessed only by authorized personnel with a legitimate business or clinical need.</p>
              <p className="font-semibold text-gray-900">Submitting information through this website does not automatically establish a patient-provider relationship.</p>
            </section>

            <section id="legal-basis" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">7. Legal Basis</h2>
              <p>We process personal information where necessary to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Provide requested healthcare-related services;</li>
                <li>Respond to your requests;</li>
                <li>Fulfill contractual obligations;</li>
                <li>Comply with applicable legal requirements;</li>
                <li>Protect legitimate organizational interests; and</li>
                <li>Obtain your consent where required.</li>
              </ul>
            </section>

            <section id="sharing" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">8. Sharing Information</h2>
              <p>We respect your privacy and do not sell, rent, or trade your personal information.</p>
              <p>Information may be shared only when necessary with:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Healthcare professionals involved in your care</li>
                <li>Insurance providers</li>
                <li>Laboratory or diagnostic partners (where applicable)</li>
                <li>Authorized third-party service providers supporting our operations</li>
                <li>Technology service providers maintaining our website</li>
                <li>Legal authorities when required by law</li>
                <li>Regulatory or accreditation bodies during authorized reviews</li>
                <li>Successor organizations in the event of a merger, acquisition, or business transfer</li>
              </ul>
              <p>All service providers are expected to maintain appropriate confidentiality and security protections.</p>
            </section>

            <section id="cookies" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">9. Cookies</h2>
              <p>We use cookies and similar technologies to improve website functionality, security, analytics and user experience. Users may modify browser settings to reject cookies. Certain website features may not function properly if cookies are disabled.</p>
            </section>

            <section id="security" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">10. Data Security</h2>
              <p>Protecting your information is one of our highest priorities.</p>
              <p>We maintain administrative, technical, and physical safeguards designed to reduce the risk of unauthorized access, disclosure, alteration, or destruction of personal information. Security measures include, where appropriate:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Encrypted website communications (HTTPS)</li>
                <li>Access controls based on business need</li>
                <li>Secure hosting environments</li>
                <li>Authentication mechanisms</li>
                <li>Network security monitoring</li>
                <li>Routine software updates</li>
                <li>Malware protection</li>
                <li>Secure storage practices</li>
                <li>Employee confidentiality obligations</li>
                <li>Periodic security assessments</li>
              </ul>
              <p className="text-xs text-gray-500 italic">Although reasonable safeguards are implemented, no electronic transmission or storage system can be guaranteed to be completely secure.</p>
            </section>

            <section id="retention" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">11. Data Retention</h2>
              <p>Personal information is retained only for as long as necessary to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Provide requested services;</li>
                <li>Maintain healthcare records where applicable;</li>
                <li>Meet legal, contractual, accreditation, regulatory, and operational requirements;</li>
                <li>Resolve disputes; and</li>
                <li>Enforce agreements.</li>
              </ul>
              <p>When information is no longer required, it is securely deleted or destroyed using appropriate methods.</p>
            </section>

            <section id="rights" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">12. Your Rights</h2>
              <p>Subject to applicable laws, you may request to:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Update your contact information</li>
                <li>Withdraw consent for optional communications</li>
                <li>Request deletion of eligible personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request information regarding our privacy practices</li>
              </ul>
              <p>Requests may be subject to identity verification and applicable legal limitations.</p>
            </section>

            <section id="third-party" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">13. Third-Party Websites</h2>
              <p>Our website may contain links to external websites or services. These websites operate independently from Miracle View Health. We are not responsible for the privacy, security, or content of third-party websites. Users are encouraged to review their respective privacy policies before providing personal information.</p>
            </section>

            <section id="children" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">14. Children and Individuals Requiring Assistance</h2>
              <p>Miracle View Health provides services to individuals of varying ages and abilities. Where services are requested for children or for individuals who are unable to provide informed consent or manage their own healthcare decisions, a parent, legal guardian, or other legally authorized representative may provide consent, complete required documentation, and communicate with us on the individual's behalf, as permitted by applicable law.</p>
              <p>In such circumstances, we may collect personal information relating to both the patient and the parent, legal guardian, or authorized representative, including contact information and any other information reasonably necessary to facilitate treatment, appointment scheduling, insurance verification, care coordination, or other healthcare-related services. We are committed to protecting the privacy of both patients and their authorized representatives and will use such information only for legitimate healthcare, administrative, and legal purposes.</p>
            </section>

            <section id="international" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">15. International Visitors</h2>
              <p>Although our services are primarily intended for individuals located within the United States, visitors accessing our website from other jurisdictions acknowledge that their information may be processed and stored in the United States in accordance with applicable laws.</p>
            </section>

            <section id="changes" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">16. Changes to this Policy</h2>
              <p>We may revise this Privacy Policy from time to time to reflect changes in: Applicable laws, Regulatory guidance, Technology, Business operations, and Healthcare services. The revised Privacy Policy will become effective upon posting on this website.</p>
            </section>

            <section id="contact" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">17. Contact Information</h2>
              <p>For questions regarding the Privacy Policy or our healthcare services, please contact:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-1 text-xs">
                <p className="font-bold text-gray-900 text-sm">Miracle View Health LLC</p>
                <p><span className="font-semibold text-gray-700">Address:</span> 4801 S. Lakeshore Drive, Suite 102, Tempe, Arizona 85282</p>
                <p><span className="font-semibold text-gray-700">Phone:</span> (520) 274-1251</p>
                <p><span className="font-semibold text-gray-700">Fax number:</span> (520) 322-9814</p>
                <p><span className="font-semibold text-gray-700">Email:</span> <a href="mailto:info@miracleviewhealthllc.com" className="text-[#c39b3d] hover:underline font-bold">info@miracleviewhealthllc.com</a></p>
              </div>
            </section>

            <section id="consent" className="space-y-4">
              <h2 className="text-2xl font-extrabold font-display text-gray-950 border-b border-gray-100 pb-2">18. Consent</h2>
              <p>By accessing or using this website and voluntarily submitting information through our online forms, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.</p>
            </section>

          </article>
        </div>
      </section>
    </div>
  );
}

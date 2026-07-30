import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Target, Compass, Award, CheckCircle, MapPin, Heart } from 'lucide-react';
import { MVH_CONFIG } from '../utils/mvhConfig';
const coreValues = [
  { title: 'Compassion', desc: 'We treat every individual with dignity, respect, and empathy.' },
  { title: 'Integrity', desc: 'We uphold ethical standards and accountability in all services.' },
  { title: 'Excellence', desc: 'We deliver evidence-based, high-quality clinical care.' },
  { title: 'Collaboration', desc: 'We work with clients, families, and providers to support recovery.' },
  { title: 'Empowerment', desc: 'We equip individuals with tools to build resilience and independence.' },
  { title: 'Community Integration', desc: 'We support recovery within real-life environments to promote lasting change.' },
];

import { setPageSeo } from '../utils/seoUtils';

export default function AboutPage() {
  useEffect(() => {
    setPageSeo({
      title: 'About Us | Miracle View Health - Our Story and Mission',
      description: 'Learn about Miracle View Health LLC, an outpatient behavioral health and psychiatric care clinic in Tempe, Arizona founded on compassion, integrity, and excellence.',
      canonicalPath: '/about'
    });
  }, []);

  return (
    <div id="about-us-container" className="bg-white">
      
      {/* 1. Page Hero - Simplified & Clean */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span>Our Commitment to You</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            About Us
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Our Commitment to Your Wellness Journey
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section id="our-story" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 lg:col-start-2 relative group w-full max-w-[360px] mx-auto lg:max-w-none">
              {/* Decorative premium glow in background */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#c39b3d]/30 to-teal-700/30 rounded-[36px] blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-teal-900/10 bg-gradient-to-br from-[#1e463c] via-[#14322a] to-[#0c1d19] flex items-center justify-center p-8 sm:p-10">
                {/* Micro-textured background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Soft golden radial spotlight behind logo */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(195,155,61,0.18),transparent_60%)]" />
                
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  src="/logo2.png"
                  alt="Miracle View Health Logo"
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                />
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-6">
              <div className="space-y-2">
                <a
                  href={MVH_CONFIG.address.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-150 hover:bg-gray-100 hover:border-gray-200 text-gray-700 text-xs px-3.5 py-1.5 rounded-xl shadow-sm mb-2 transition-all cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-[#c39b3d]" />
                  <span>Miracle View Health Arizona Main Facility</span>
                </a>
                <div className="block">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#c39b3d] uppercase">Empathetic Origins</span>
                </div>
                <h2 className="text-3xl font-extrabold font-display leading-tight text-gray-900">
                  Our Story
                </h2>
                <div className="w-12 h-1 bg-[#1e463c]"></div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  Our Outpatient Treatment Center founded in 2026 is dedicated to providing compassionate, evidence-based counseling and behavioral health services to individuals facing mental health and substance use challenges. Through individualized counseling, group therapy, psychoeducation, and relapse prevention support, we help clients develop healthy coping skills, manage emotional triggers, and build lasting stability within their communities.                 </p>
                <p>
                  We offer a safe, supportive, and recovery-focused environment where individuals are empowered to actively participate in their healing journey while maintaining engagement in daily life responsibilities. Our experienced behavioral health professionals utilize a whole-person approach that promotes emotional wellness, symptom management, and personal growth.                 </p>
                <p>
                  At the heart of our program is the belief that recovery is strengthened through connection and support. By fostering meaningful peer relationships and involving family and natural supports when appropriate, we help individuals build resilience, restore hope, and achieve long-term recovery and improved quality of life.                 </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mission, Vision, and Core Values Grid */}
      <section id="values-mission" className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest font-bold text-[#c39b3d] uppercase">Our Alignment</span>
            <h2 className="text-3xl font-extrabold font-display text-gray-900">Mission, Vision & Core Values</h2>
            <div className="w-16 h-1 bg-[#1e463c] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200/50 rounded-2xl p-8 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#ecf3f0] flex items-center justify-center text-[#1e463c]">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1e463c]">Our Mission</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our mission is to provide accessible, high-quality behavioral health and substance use treatment services that empower individuals to achieve recovery, stability, and improved quality of life within their communities.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200/50 rounded-2xl p-8 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#ecf3f0] flex items-center justify-center text-[#1e463c]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1e463c]">Our Vision</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our vision is to be a trusted provider of outpatient behavioral health services, recognized for clinical excellence, compassionate care, and commitment to long-term recovery outcomes.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200/50 rounded-2xl p-8 shadow-sm space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#ecf3f0] flex items-center justify-center text-[#1e463c]">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-display text-[#1e463c]">Our Core Values</h3>
              <ul className="grid grid-cols-2 gap-2 text-xs text-gray-700 font-medium">
                {coreValues.map(v => (
                  <li key={v.title} className="flex items-center space-x-1.5">
                    <CheckCircle className="w-4 h-4 text-[#c39b3d] flex-shrink-0" />
                    <span>{v.title}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-gray-400">
                Guided by empathy, transparency, and HIPAA-compliant privacy standards.
              </p>
            </motion.div>

          </div>
        </div>
      </section>



      {/* 5. Certifications & Accreditations (Joint Commission) */}
      <section id="certifications-logos" className="py-16 bg-[#ecf3f0] border-t border-teal-100/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold font-display text-[#1e463c]">
              Our Certifications & Accreditations
            </h3>
            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              Proudly HIPAA compliant and state accredited, ensuring clinical standards are held to the absolute highest levels.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-4">
            
            {/* HIPAA Badge */}
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-emerald-100 w-full sm:w-auto justify-center">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono font-bold text-emerald-800">HIPAA COMPLIANT</p>
                <p className="text-[10px] text-gray-400">Encrypted Patient Records</p>
              </div>
            </div>

            {/* ADHS Badge */}
            <div className="flex items-center space-x-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-[#c39b3d]/20 w-full sm:w-auto justify-center">
              <div className="w-10 h-10 rounded-full bg-[#fdf9ef] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-6 h-6" fill="currentColor">
                  {/* Outer Shield */}
                  <path d="M50,5 L85,22 L85,55 C85,73 70,88 50,93 C30,88 15,73 15,55 L15,22 Z" fill="#1e463c" />
                  {/* Inner Shield */}
                  <path d="M50,10 L80,25 L80,53 C80,68 68,81 50,86 C32,81 20,68 20,53 L20,25 Z" fill="#ffffff" />
                  {/* Arizona copper star */}
                  <polygon points="50,22 54,36 68,36 57,45 61,59 50,50 39,59 43,45 32,36 46,36" fill="#c39b3d" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-xs font-mono font-bold text-[#1e463c]">ADHS ACCREDITED</p>
                <p className="text-[10px] text-gray-400">Arizona Department of Health Services (ADHS) accredited</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

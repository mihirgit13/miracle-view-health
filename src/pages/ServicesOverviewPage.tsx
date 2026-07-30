import { motion } from 'motion/react';
import { 
  Activity, 
  Brain, 
  Users, 
  FlaskConical, 
  Shuffle, 
  Syringe, 
  Video,
  ArrowRight,
  ShieldAlert,
  Zap
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Service } from '../types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { setPageSeo } from '../utils/seoUtils';

export default function ServicesOverviewPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setPageSeo({
      title: 'Services Overview | Miracle View Health - Integrated Clinical Care',
      description: 'Explore psychiatric and behavioral health services at Miracle View Health LLC, including TMS Therapy, medication management, individual counselling, and telehealth.',
      canonicalPath: '/services'
    });
  }, []);

  const categories = [
    {
      id: 'innovative',
      title: 'Advance Therapies',
      desc: 'Cutting-edge biological, and neuro-therapeutic diagnostic screenings and brain stimulations.',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'behavioral',
      title: 'Mental Health & Wellness',
      desc: 'Psychiatric medication management, case coordination, outpatient drug/alcohol treatment, and clinical counseling programs.',
      icon: <Brain className="w-5 h-5" />
    },
    {
      id: 'medical',
      title: 'Other Services',
      desc: 'Secure telehealth consultations, proactive remote health monitoring, and structured goal coaching routines.',
      icon: <Activity className="w-5 h-5" />
    }
  ];

  // Logic to catch any services that might not belong to the defined categories
  const definedCategoryIds = categories.map(c => c.id);
  const otherServices = servicesData.filter(s => !definedCategoryIds.includes(s.category));
  
  const getIcon = (id: string) => {
    const cls = "w-8 h-8 text-[#1e463c]";
    if (id.includes('tms')) return <Activity className={cls} />;
    if (id.includes('behavioral')) return <Brain className={cls} />;
    if (id.includes('counselling')) return <Users className={cls} />;
    if (id.includes('medication')) return <FlaskConical className={cls} />;
    if (id.includes('crisis')) return <Shuffle className={cls} />;
    if (id.includes('addiction')) return <Users className={cls} />;
    if (id.includes('telehealth') || id.includes('remote') || id.includes('telemedicine')) return <Video className={cls} />;
    if (id.includes('life')) return <Zap className={cls} />;
    return <Activity className={cls} />;
  };

  return (
    <div id="services-hub-container" className="bg-white min-h-screen">
      
      {/* 1. Page Hero - Simplified & Clean */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span>Our Service Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Our Services
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Integrated Care for Your Wellness Journey
          </p>
        </div>
      </section>

      {/* Program Description Section */}
      <section id="program-description-section" className="py-12 bg-[#f8faf9]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-150/40 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* Left Column: Video Visual Accent */}
              <div className="lg:col-span-4 flex flex-col justify-start">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-[#1e463c] border border-white/10 group">
                  <video 
                    src="https://miracleviewhealth.com/wp-content/uploads/2025/05/vecteezy_medical-assistant-preparing-hospital-ward-bed-for-patient_4551804.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute inset-x-6 bottom-6 text-white z-10 space-y-2">
                    <span className="inline-block bg-white/15 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] font-bold uppercase tracking-wider text-teal-200">
                      Outpatient Programs
                    </span>
                    <h3 className="text-lg font-bold font-display leading-tight">
                      Empowering Your Journey To Recovery
                    </h3>
                  </div>
                </div>

                {/* Program Highlights under the video to balance blank space - Compact and Optimized */}
                <div className="mt-6 space-y-5">
                  <div className="flex items-start space-x-3.5 text-gray-700">
                    <Brain className="w-5 h-5 text-[#c39b3d] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">Evidence-Based Treatment</h4>
                      <p className="text-[11px] text-gray-550 leading-relaxed mt-0.5">Compassionate clinical counseling and individual therapy programs.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 text-gray-700 border-t border-gray-100 pt-4">
                    <Activity className="w-5 h-5 text-[#1e463c] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">Relapse Prevention</h4>
                      <p className="text-[11px] text-gray-550 leading-relaxed mt-0.5">Practical life skills and structured, ongoing aftercare planning.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3.5 text-gray-700 border-t border-gray-100 pt-4">
                    <Users className="w-5 h-5 text-teal-650 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">Peer Support & Connection</h4>
                      <p className="text-[11px] text-gray-550 leading-relaxed mt-0.5">Engaging group counseling and family involvement support.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Program Description Text (Restored to vertical stack as originally requested) */}
              <div className="lg:col-span-8 flex flex-col justify-start space-y-6">
                <div className="space-y-3">
                  <span className="text-[#c39b3d] text-xs font-mono font-bold uppercase tracking-widest block">
                    Clinical Overview
                  </span>
                  <h2 className="text-3xl font-extrabold font-display text-gray-950 tracking-tight">
                    Program Description
                  </h2>
                  <div className="w-16 h-1 bg-[#1e463c] rounded"></div>
                </div>

                <div className="space-y-4 text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                  <p className="font-semibold text-gray-900 border-l-4 border-[#1e463c] pl-4 py-1.5 bg-[#ecf3f0]/30 rounded-r-lg">
                    Miracle View Health LLC is an outpatient behavioral health treatment program committed to providing compassionate, evidence-based counseling and recovery support to individuals facing mental health and substance use challenges. Our mission is to empower clients to regain control of their lives, achieve emotional stability, and build a strong foundation for lasting recovery.
                  </p>
                  <p>
                    Through a combination of engaging group therapy, individualized counseling, and person-centered treatment planning, our experienced clinicians help clients develop insight into the underlying factors contributing to addiction and behavioral health concerns. We provide a supportive and therapeutic environment where individuals can safely address emotional struggles, strengthen coping abilities, and develop healthier patterns of living.
                  </p>
                  <p>
                    Because recovery extends beyond treatment sessions, our program places a strong emphasis on relapse prevention, life-skills development, emotional wellness, and aftercare planning. Clients are equipped with practical tools to manage triggers, navigate daily stressors, and maintain long-term stability within the community.
                  </p>
                  <p>
                    At Miracle View Health LLC, we believe healing is strengthened through connection and support. Through peer engagement, group counseling, and family involvement when appropriate, clients are encouraged to rebuild relationships, strengthen support systems, and rediscover purpose and direction in life.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Categorized Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {categories.map((category) => (
          <section key={category.id} id={`category-${category.id}`} className="space-y-12">
            
            {/* Category Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8 gap-6">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center space-x-2 text-[#c39b3d] mb-1">
                  {category.icon}
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">{category.id} category</span>
                </div>
                <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight">
                  {category.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {category.desc}
                </p>
              </div>
              <div className="text-[11px] font-mono text-gray-400 font-bold uppercase">
                {servicesData.filter(s => s.category === category.id).length} treatments available
              </div>
            </div>

            {/* Service Grid for Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData
                .filter((s) => s.category === category.id)
                .map((service, idx) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="group bg-gray-50/50 border border-gray-100 rounded-[32px] p-8 hover:bg-white hover:shadow-xl hover:border-teal-100/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                        {getIcon(service.id)}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold font-display text-gray-950 group-hover:text-[#1e463c] transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8 mt-4">
                      <button
                        onClick={() => navigate(`/services/${service.id}`)}
                        className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-200 text-gray-700 hover:bg-[#1e463c] hover:text-white hover:border-[#1e463c] text-xs font-bold py-3.5 rounded-2xl transition-all shadow-sm"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}

        {/* 2.5 Fallback Section for other services (if any exist) */}
        {otherServices.length > 0 && (
          <section id="category-others" className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8 gap-6">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center space-x-2 text-[#c39b3d] mb-1">
                  <Activity className="w-5 h-5" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">Additional specialized support</span>
                </div>
                <h2 className="text-3xl font-extrabold font-display text-gray-900 tracking-tight">
                  Additional Clinical Programs
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Supporting treatments and healthcare programs integrated across our clinical pathways.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherServices.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group bg-gray-50/50 border border-gray-100 rounded-[32px] p-8 hover:bg-white hover:shadow-xl hover:border-teal-100/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                      {getIcon(service.id)}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold font-display text-gray-950 group-hover:text-[#1e463c] transition-colors leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 mt-4">
                    <button
                      onClick={() => navigate(`/services/${service.id}`)}
                      className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-200 text-gray-700 hover:bg-[#1e463c] hover:text-white hover:border-[#1e463c] text-xs font-bold py-3.5 rounded-2xl transition-all shadow-sm"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* 3. Emergency Support Section */}
        <section className="bg-red-50 border border-red-100 rounded-[40px] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="bg-red-600 w-20 h-20 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-200 text-white">
            <ShieldAlert className="w-10 h-10" />
          </div>
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold font-display text-red-900 tracking-tight uppercase">Emergency Crisis Notice</h2>
            <p className="text-red-700 leading-relaxed text-sm">
              If you or someone you know is in immediate danger or experiencing a life-threatening behavioral crisis, please call <strong>911</strong> or go to your local Emergency Room immediately. You can also call or text the Suicide & Crisis Lifeline at <strong>988</strong> for free, confidential, 24/7 support. Professional help is available 24/7.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';
import { 
  Brain, 
  Activity, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  User,
  ArrowRight,
  Zap,
  Leaf
} from 'lucide-react';
import { testimonialsData, whyChooseUsData, processJourney } from '../data/jobsData';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const conditions = [
  {
    title: 'Depressive Disorders',
    subtitle: 'Major & Treatment-Resistant Depression',
    desc: 'Rapid and long-lasting relief from persistent sadness, treatment-resistant states, and mood disruptions using advanced TMS and somatic care.',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=600',
    icon: <Brain className="w-5 h-5 text-[#c39b3d]" />
  },
  {
    title: 'Anxiety & Social Panic',
    subtitle: 'Panic, Phobias, & Severe Anxiety',
    desc: 'Calm the overstimulated nervous system and learn adaptive cognitive strategies with customized clinical counseling and functional care.',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=600',
    icon: <Activity className="w-5 h-5 text-[#c39b3d]" />
  },
  {
    title: 'Trauma & PTSD Recovery',
    subtitle: 'Complex PTSD & Traumatic Triggers',
    desc: 'Process difficult memories and retrain survival responses in a compassionate environment blending neuro-therapeutics and talk therapy.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600',
    icon: <Heart className="w-5 h-5 text-[#c39b3d]" />
  },
  {
    title: 'Obsessive-Compulsive (OCD)',
    subtitle: 'OCD Loops & Intrusive Thoughts',
    desc: 'Break free from exhausting behavioral routines and distressing cognitive patterns using targeted neuro-modulation (TMS) and behavioral plans.',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=600',
    icon: <Sparkles className="w-5 h-5 text-[#c39b3d]" />
  },
  {
    title: 'ADHD & Focus Management',
    subtitle: 'Inattention, Executive Function, & Focus',
    desc: 'Overcome executive blockages, design productive structures, and reclaim clinical attention spans with functional coaching.',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=600',
    icon: <Zap className="w-5 h-5 text-[#c39b3d]" />
  },
  {
    title: 'Stress & Modern Burnout',
    subtitle: 'Chronic Fatigue & Boundary Fatigue',
    desc: 'Rebuild physiological vitality and emotional capacity using targeted stress regulation, lifestyle mapping, and somatic therapy.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600',
    icon: <Leaf className="w-5 h-5 text-[#c39b3d]" />
  }
];

import { setPageSeo } from '../utils/seoUtils';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCondition, setActiveCondition] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    setPageSeo({
      title: 'Home | Miracle View Health - Integrated Behavioral Healthcare',
      description: 'Miracle View Health LLC in Tempe, AZ offers integrated outpatient psychiatry, TMS therapy, Spravato, Ketamine infusions, counseling, and telehealth.',
      canonicalPath: '/'
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextCondition();
    }, 4500); // Transition slides every 4.5 seconds
    return () => clearInterval(timer);
  }, [activeCondition]);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const nextCondition = () => {
    setActiveCondition((prev) => (prev === conditions.length - 1 ? 0 : prev + 1));
  };

  const prevCondition = () => {
    setActiveCondition((prev) => (prev === 0 ? conditions.length - 1 : prev - 1));
  };

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const itemWidth = 290 + 20; // 290px card width + 20px gap (gap-5)
    const index = Math.round(scrollLeft / itemWidth);
    if (index >= 0 && index < conditions.length && index !== activeCondition) {
      setActiveCondition(index);
    }
  };

  const getCardStyles = (index: number) => {
    let offset = index - activeCondition;
    const count = conditions.length;
    if (offset < -count / 2) offset += count;
    if (offset > count / 2) offset -= count;
    
    const absOffset = Math.abs(offset);
    
    if (absOffset > 2) {
      return {
        opacity: 0,
        transform: 'translateX(0) scale(0.6) rotateY(0deg)',
        zIndex: 0,
        pointerEvents: 'none' as const,
      };
    }
    
    const translateX = offset * 310; // 310px spacing
    const scale = 1 - absOffset * 0.12; 
    const rotateY = offset * -15; 
    const zIndex = 10 - absOffset;
    const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.65 : 0.25;
    const pointerEvents = absOffset <= 1 ? ('auto' as const) : ('none' as const); // Allow clicks on active & neighboring cards to focus them
    
    return {
      opacity,
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      pointerEvents,
    };
  };

  const getWhyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6 text-white" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-white" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-white" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div id="home-view-container" className="overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section 
        id="home-hero" 
        className="relative bg-gradient-to-br from-[#124237] via-[#1c5547] to-[#163c32] text-white py-16 lg:py-24 rounded-b-[40px] shadow-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 lg:pr-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300"
              >
                <Sparkles className="w-4.5 h-4.5 text-[#c39b3d] animate-pulse" />
                <span>Transforming Lives & Wellness</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight"
              >
                Transforming Lives With <span className="text-[#dfb453]">Personalised</span> Healthcare
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg text-teal-50/90 leading-relaxed max-w-lg"
              >
                Compassionate behavioral health and innovative therapies for your wellness journey. Discover a happier, grounded version of yourself.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link
                  id="hero-services-btn"
                  to="/services"
                  className="bg-[#c39b3d] text-white hover:bg-[#b08b33] active:scale-95 font-bold tracking-wide py-4 px-8 rounded-full shadow-lg transition-all flex items-center space-x-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </Link>
                <Link
                  id="hero-appointment-btn"
                  to="/book-appointment"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 font-bold py-4 px-8 rounded-full active:scale-95 transition-all"
                >
                  Schedule Consultation
                </Link>
              </motion.div>
            </div>

            {/* Right Image Mask Column */}
            <div className="lg:col-span-6 relative flex justify-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg lg:max-w-none"
              >
                {/* Decorative glows */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white/15 bg-white/5 transition-transform hover:scale-[1.01] duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                    alt="Miracle View Medical Team"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badge Overlay */}
                <div className="absolute -bottom-6 -left-6 md:left-6 bg-white text-gray-800 p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-gray-100 max-w-[280px]">
                  <div className="p-3.5 bg-emerald-50 rounded-xl text-[#1e463c]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Specialized Care - Flagship Treatments */}
      <section id="home-featured-services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <p className="text-[#c39b3d] text-xs font-mono font-bold uppercase tracking-widest">
                Flagship Treatments
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-gray-950 tracking-tight leading-tight">
                Specialized Care <span className="text-[#1e463c]">Spotlights</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover our most sought-after clinical interventions designed for deep recovery and neural revitalization.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-[#1e463c] font-bold border-b-2 border-[#1e463c]/20 hover:border-[#1e463c] pb-1 transition-all group h-fit"
            >
              <span>Explore Complete Catalog</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Featured 1: TMS Therapy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => navigate('/services/tms-therapy')}
            >
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                  alt="TMS Therapy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e463c] via-[#1e463c]/40 to-transparent opacity-90"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="bg-white/15 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">TMS Therapy</h3>
                <p className="text-sm text-teal-50/80 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Non-invasive magnetic stimulation targeting underactive brain areas responsible for mood regulation.
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#dfb453]">
                  <span>View Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Featured 2: Behavioral Health */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group cursor-pointer"
              onClick={() => navigate('/services/behavioral-health')}
            >
              <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=800" 
                  alt="Behavioral Health" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e463c] via-[#1e463c]/40 to-transparent opacity-90"></div>
              </div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="bg-white/15 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-teal-300" />
                </div>
                <h3 className="text-2xl font-bold font-display mb-2">Behavioral Health</h3>
                <p className="text-sm text-teal-50/80 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Evidence-based approaches for complex mood conditions, ADHD, and life adjustments.
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#dfb453]">
                  <span>View Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Care Pathways - Categorization */}
      <section id="home-care-pathways" className="py-24 bg-[#f8faf9] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <p className="text-[#c39b3d] text-xs font-mono font-bold uppercase tracking-widest">
              Strategic Categorization
            </p>
            <h2 className="text-4xl font-extrabold font-display text-gray-950 tracking-tight">
              Comprehensive Care <span className="text-[#1e463c]">Pathways</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed">
              We group our treatments into logical healthcare clusters to help you find the exact level of support you need.
            </p>
            <div className="w-16 h-1.5 bg-[#1e463c] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category: Advance Therapies */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ecf3f0] flex items-center justify-center mb-8 shadow-inner">
                <Zap className="w-8 h-8 text-[#1e463c]" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-950 mb-4">Advance Therapies</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                Cutting-edge neuro-therapeutic diagnostics and non-invasive brain stimulation.
              </p>
              <ul className="space-y-3 mb-10">
                {['Evidence-Based Innovation', 'Non-Invasive Treatment Options', 'Advanced Neuro-Modulation'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c39b3d]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/services')}
                className="w-full py-4 rounded-2xl bg-gray-50 text-[#1e463c] font-bold text-sm hover:bg-[#1e463c] hover:text-white transition-all border border-gray-100"
              >
                View Innovative Care
              </button>
            </motion.div>
 
            {/* Category: Mental Health & Wellness */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-[#1e463c] rounded-[40px] p-10 shadow-xl flex flex-col h-full text-white"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-8 shadow-inner">
                <Heart className="w-8 h-8 text-teal-300" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Mental Health & Wellness</h3>
              <p className="text-teal-50/70 text-sm leading-relaxed mb-8 flex-grow">
                Foundational behavioral health and psychiatric programs targeting the emotional and psychological facets of vitality.
              </p>
              <ul className="space-y-3 mb-10">
                {['Personalized Care Plans', 'Emotional Wellbeing Support', 'Behavioral Health Programs', 'Ongoing Care Management'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-sm font-medium text-teal-50/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c39b3d]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/services')}
                className="w-full py-4 rounded-2xl bg-[#c39b3d] text-white font-bold text-sm hover:bg-[#b08b33] transition-all shadow-lg"
              >
                View Wellness Programs
              </button>
            </motion.div>
 
            {/* Category: Other Services */}
            <motion.div 
              whileHover={{ y: -8 }}
              className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ecf3f0] flex items-center justify-center mb-8 shadow-inner">
                <Activity className="w-8 h-8 text-[#1e463c]" />
              </div>
              <h3 className="text-2xl font-bold font-display text-gray-950 mb-4">Other Services</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                Convenient telehealth consultations, proactive remote health monitoring, and habit planning coaching.
              </p>
              <ul className="space-y-3 mb-10">
                {['Flexible Care Access', 'Virtual Consultations', 'Remote Support Services'].map(item => (
                  <li key={item} className="flex items-center space-x-3 text-sm font-medium text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c39b3d]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => navigate('/services/telehealth-consultation')}
                className="w-full py-4 rounded-2xl bg-gray-50 text-[#1e463c] font-bold text-sm hover:bg-[#1e463c] hover:text-white transition-all border border-gray-100"
              >
                Access Virtual Care
              </button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2.5 Conditions We Help Treat Section (3D Carousel) */}
      <section id="home-conditions" className="py-22 bg-teal-50/15 overflow-hidden border-t border-b border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="text-[#c39b3d] text-xs font-mono font-bold uppercase tracking-widest">
              Specialized Care
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Conditions We Help Treat
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              We specialize in resolving complex, treatment-resistant emotional and behavioral challenges through proven clinical protocols.
            </p>
            <div className="w-16 h-1 bg-[#1e463c] mx-auto mt-2 rounded"></div>
          </div>

          {/* Carousel Area */}
          <div className="relative">
            {/* Desktop Carousel Area (md and up) */}
            <div className="hidden md:flex flex-col items-center justify-center py-8">
              <div 
                className="relative w-full h-[410px] flex items-center justify-center"
                style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
              >
                {conditions.map((item, idx) => {
                  const style = getCardStyles(idx);
                  const isActive = idx === activeCondition;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (isActive) {
                          navigate('/book-appointment');
                        } else {
                          setActiveCondition(idx);
                        }
                      }}
                      className={`absolute w-[350px] h-[390px] bg-white rounded-[32px] shadow-xl hover:shadow-2xl border border-gray-100/80 overflow-hidden flex flex-col transition-all duration-500 ease-out cursor-pointer select-none`}
                      style={{
                        transform: style.transform,
                        opacity: style.opacity,
                        zIndex: style.zIndex,
                        pointerEvents: style.pointerEvents,
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      {/* Image section */}
                      <div className="h-44 w-full overflow-hidden relative">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        {/* Icon Medallion */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                          {item.icon}
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div className="space-y-1.5 text-left">
                          <span className="text-[9px] font-mono tracking-widest text-[#c39b3d] font-bold uppercase block leading-none">
                            {item.subtitle}
                          </span>
                          <h3 className="text-xl font-bold font-display text-gray-900 tracking-tight leading-snug">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-xs leading-relaxed mt-2 line-clamp-3">
                            {item.desc}
                          </p>
                        </div>
                        
                        <div className="mt-4 flex items-center space-x-1.5 text-xs font-bold text-[#1e463c] hover:text-[#c39b3d] transition-colors leading-none group-hover:text-[#c39b3d]">
                          <span>Learn more & Book</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Pagination controls */}
              <div className="flex items-center space-x-6 mt-6">
                <button
                  onClick={prevCondition}
                  className="p-2.5 rounded-full bg-white hover:bg-[#ecf3f0] text-[#1e463c] border border-gray-150 shadow-sm hover:shadow active:scale-95 transition-all"
                  aria-label="Previous condition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                {/* Visual bullet indicators */}
                <div className="flex space-x-2">
                  {conditions.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCondition(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        idx === activeCondition ? 'bg-[#c39b3d] w-6' : 'bg-gray-200'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextCondition}
                  className="p-2.5 rounded-full bg-white hover:bg-[#ecf3f0] text-[#1e463c] border border-gray-150 shadow-sm hover:shadow active:scale-95 transition-all"
                  aria-label="Next condition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Swipeable Carousel Area (md:hidden) */}
            <div className="md:hidden flex flex-col space-y-6">
              <div 
                onScroll={handleMobileScroll}
                className="flex overflow-x-auto gap-5 px-4 pb-6 snap-x snap-mandatory scrollbar-none"
              >
                {conditions.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[290px] flex-shrink-0 bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col snap-center"
                  >
                    {/* Image section */}
                    <div className="h-36 w-full overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                      <div className="space-y-1.5 text-left">
                        <span className="text-[9px] font-mono tracking-widest text-[#c39b3d] font-bold uppercase block leading-none">
                          {item.subtitle}
                        </span>
                        <h3 className="text-lg font-bold font-display text-gray-900 tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                      
                      <Link 
                        to="/book-appointment" 
                        className="flex items-center space-x-1 text-xs font-bold text-[#1e463c] hover:text-[#c39b3d] transition-colors pt-2 leading-none"
                      >
                        <span>Book Appointment</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Simple dot page indicator for mobile */}
              <div className="flex justify-center space-x-1.5">
                {conditions.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeCondition ? 'bg-[#c39b3d] w-5' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section id="home-why-choose" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="text-[#c39b3d] text-xs font-mono font-bold uppercase tracking-widest">
              Clinic Distinction
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Why Choose Miracle View Health?
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Our interdisciplinary protocols bring standard medication, behavioral practices, and high-tech diagnostics together.
            </p>
            <div className="w-16 h-1 bg-[#1e463c] mx-auto mt-2 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {whyChooseUsData.map((choice, idx) => (
              <motion.div
                key={choice.title}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 border border-gray-100/50 rounded-2xl p-6.5 flex space-x-5 hover:bg-[#ecf3f0]/40 transition-colors"
              >
                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#c39b3d] flex items-center justify-center p-2.5 shadow-md">
                  {getWhyIcon(choice.iconName)}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display text-gray-900">
                    {choice.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {choice.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Treatment Journey Section */}
      <section id="home-journey" className="py-20 bg-[#f4f7f6] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <p className="text-[#c39b3d] text-xs font-mono font-bold uppercase tracking-widest">
              Recovery Pathways
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              4-Step Treatment Journey
            </h2>
            <div className="w-16 h-1 bg-[#1e463c] mx-auto mt-2 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting arrows helper for large screens */}
            <div className="hidden lg:block absolute top-12 left-1/4 right-[5%] h-0.5 border-t border-dashed border-[#1e463c]/20 z-0"></div>
            
            {processJourney.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative bg-white border border-gray-200/50 rounded-2xl p-6 shadow-sm flex flex-col items-start z-10 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1e463c] text-white flex items-center justify-center font-bold text-lg font-display mb-4 shadow-md">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold font-display text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Patient Testimonial Section */}
      <section id="home-testimonials" className="py-22 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <p className="text-[#c39b3d] text-xs font-mono font-bold uppercase tracking-widest">
              Real Impact
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-900 tracking-tight">
              Patient Testimonials
            </h2>
            <div className="w-16 h-1 bg-[#1e463c] mx-auto mt-2 rounded"></div>
          </div>

          {/* Testimonial Active Slider Box */}
          <div id="testimonial-slider-box" className="relative bg-teal-50/30 border border-[#ecf3f0] rounded-[32px] p-8 md:p-12 shadow-sm">
            
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0 bg-gradient-to-tr from-[#1e463c] to-[#31705f] flex items-center justify-center text-white">
                <User className="w-10 h-10 text-white/95" />
              </div>

              <div className="flex-1 space-y-4">
                <p className="text-gray-700 text-lg italic leading-relaxed font-serif">
                  {testimonialsData[activeTestimonial].text}
                </p>

                <div className="pt-2">
                  <h4 className="font-extrabold text-base text-[#1e463c]">
                    {testimonialsData[activeTestimonial].author}
                  </h4>
                </div>
              </div>
            </div>

            {/* Slider Switch Triggers */}
            <div className="absolute right-6 bottom-6 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-white hover:bg-[#ecf3f0] text-[#1e463c] border border-gray-100 shadow-sm active:scale-90 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-white hover:bg-[#ecf3f0] text-[#1e463c] border border-gray-100 shadow-sm active:scale-90 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bullet Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-[#c39b3d] w-6' : 'bg-gray-200'
                }`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Direct CTA Banner - Urgent Support & Appointments */}
      <section id="cta-enrollment-banner" className="py-16 bg-[#1e463c] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#c39b3d]/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Take Your First Structural Step Towards Mental Health
          </h2>
          <p className="text-teal-100 text-sm max-w-lg mx-auto">
            Benefit verification is immediate and completely secure. Connect with an intake therapist today for clinical evaluation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/book-appointment"
              className="w-full sm:w-auto bg-[#c39b3d] text-white hover:bg-[#b08b33] active:scale-95 font-bold px-8 py-4 rounded-full shadow-lg transition-all"
            >
              Request Free Consultation
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/50 text-white font-bold px-8 py-4 rounded-full active:scale-95 transition-all"
            >
              Locate Our Physical Clinics
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

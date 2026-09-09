import React, { useState, useRef, useEffect } from 'react';
import { 
  Briefcase, 
  MapPin, 
  CheckCircle, 
  Send, 
  Search, 
  UploadCloud,
  CheckCircle2
} from 'lucide-react';
import { jobsData, officePhotos } from '../data/jobsData';
import { MVH_CONFIG } from '../utils/mvhConfig';
import { Link } from 'react-router-dom';
import { logConsent } from '../utils/supabaseClient';

import { setPageSeo } from '../utils/seoUtils';

export default function CareersPage() {
  useEffect(() => {
    setPageSeo({
      title: 'Careers | Join the Miracle View Health Team',
      description: 'Explore clinical and administrative employment opportunities at Miracle View Health LLC in Tempe, AZ. Apply online for therapist, psychiatrist, and technician positions.',
      canonicalPath: '/careers'
    });
  }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  
  // Application Form States
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionApplied, setPositionApplied] = useState('Licensed Therapist (LCSW, LPC, LMFT)');
  const [coverNote, setCoverNote] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [consentRecruitment, setConsentRecruitment] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (jobTitle: string) => {
    setPositionApplied(jobTitle);
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileError('');
    if (file) {
      const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB limit
      const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

      if (!isPdf) {
        setFileName('');
        setUploadedFile(null);
        setFileError('Please select a valid PDF document.');
        e.target.value = '';
        return;
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        setFileName('');
        setUploadedFile(null);
        setFileError('File size exceeds the 10MB limit. Please upload a smaller PDF resume.');
        e.target.value = '';
        return;
      }

      setFileName(file.name);
      setUploadedFile(file);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !consentRecruitment) return;
    if (fileError) return;

    setLoading(true);

    try {
      const tasks: Promise<any>[] = [
        logConsent({
          patientName: fullName,
          patientEmail: email,
          patientPhone: phone || "N/A",
          healthcareConsent: consentRecruitment,
          smsConsent: false, // SMS marketing not collected for applicants
          disclosureText: "Terms: Acknowledged recruitment data use, application evaluation, and Privacy Policy.",
          formType: 'careers'
        })
      ];

      // 1. Google Apps Script endpoint submission (Primary: management@miracleviewhealthllc.com, CC: team@advancecarehealthconnect.org)
      const endpoint = MVH_CONFIG.insuranceVerification.appsScriptUrl;
      if (endpoint && endpoint.startsWith("http")) {
        const appsScriptData = new URLSearchParams();
        appsScriptData.append("formType", "careers");
        appsScriptData.append("fullName", fullName);
        appsScriptData.append("email", email);
        appsScriptData.append("phone", phone);
        appsScriptData.append("positionApplied", positionApplied);
        appsScriptData.append("coverNote", coverNote);
        appsScriptData.append("timestamp", new Date().toISOString());

        if (uploadedFile) {
          appsScriptData.append("hasFile", uploadedFile.name);
          appsScriptData.append("fileName", uploadedFile.name);
          appsScriptData.append("fileType", uploadedFile.type || "application/pdf");
          try {
            const base64Data = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result as string);
              reader.onerror = reject;
              reader.readAsDataURL(uploadedFile);
            });
            appsScriptData.append("fileData", base64Data);
          } catch (fileErr) {
            console.error("File base64 encoding error:", fileErr);
          }
        }

        tasks.push(
          fetch(endpoint, {
            method: "POST",
            mode: "no-cors",
            body: appsScriptData
          })
        );
      }

      // 2. Web3Forms submission (Primary: management@miracleviewhealthllc.com, CC: team@advancecarehealthconnect.org)
      if (MVH_CONFIG.formSubmissions.accessKey && MVH_CONFIG.formSubmissions.accessKey !== "your-web3forms-access-key-here") {
        const formData = new FormData();
        formData.append("access_key", MVH_CONFIG.formSubmissions.accessKey);
        formData.append("to", MVH_CONFIG.formSubmissions.careersEmail);
        formData.append("cc", MVH_CONFIG.formSubmissions.careersCcEmail);
        formData.append("name", fullName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("position", positionApplied);
        formData.append("cover_note", coverNote);
        formData.append("subject", `New Job Application: ${positionApplied} - ${fullName}`);
        
        if (uploadedFile) {
          formData.append("attachment", uploadedFile);
        }

        tasks.push(
          fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          })
        );
      } else {
        console.warn("Web3Forms accessKey not configured. Simulating mock job application submission.");
      }

      await Promise.allSettled(tasks);

      setAppliedSuccess(true);
      
      // Clear fields
      setFullName('');
      setEmail('');
      setPhone('');
      setCoverNote('');
      setFileName('');
      setUploadedFile(null);
      setFileError('');
      setConsentRecruitment(false);
    } catch (err) {
      console.error("Job application error:", err);
      alert(`We encountered an issue submitting your application. Please email your resume directly to ${MVH_CONFIG.formSubmissions.careersEmail} or ${MVH_CONFIG.formSubmissions.careersCcEmail}.`);
    } finally {
      setLoading(false);
    }
  };

  // Filter jobs logic
  const filteredJobs = jobsData.filter((job) => {
    const matchSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept = 
      selectedDept === 'All' || 
      job.department === selectedDept || 
      job.category === selectedDept;

    return matchSearch && matchDept;
  });

  const clinicalJobs = filteredJobs.filter(j => j.category === 'Clinical');
  const adminJobs = filteredJobs.filter(j => j.category === 'Administrative');

  return (
    <div id="careers-page" className="bg-white">
      
      {/* 1. Page Hero - Simplified & Clean */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span>Join Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Careers
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Be part of a mission-driven team dedicated to holistic wellness
          </p>
        </div>
      </section>

       {/* 2. Life at Miracle View */}
      <section id="life-miracle-view" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro Section (Centered Heading and Description Content) */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#c39b3d] uppercase tracking-widest">
                Our Workplace
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-gray-950 tracking-tight">
                Life at Miracle View
              </h2>
              <div className="w-12 h-1 bg-[#1e463c] mx-auto rounded"></div>
            </div>
            
            <div className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans space-y-4 text-center max-w-2xl mx-auto">
              <p>
                At Miracle View Health, we believe our employees are our greatest asset. We foster an environment of collaboration, respect, and continuous learning. Our team is passionate about mental health and behavioral wellness, and we support each other in delivering the best possible care to our community.
              </p>
              <p>
                Whether you’re in our physical Tempe office or facilitating virtual care remotely, your well-being matters as much as that of our patients. We integrate mind, science, and operational diligence under one unified roof.
              </p>
            </div>
          </div>

          {/* Main Photo & Highlights Card Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Broad main office image */}
            <div className="lg:col-span-8 aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-gray-100/50">
              <img 
                src={officePhotos[0]} 
                alt="Miracle View Main Office Space" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>

            {/* Cultural highlights panel next to the main photo */}
            <div className="lg:col-span-4 bg-[#1e463c] text-white p-7 sm:p-8 rounded-2xl shadow-md flex flex-col justify-center border border-[#1e463c]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1e463c]/20 group text-left">
              <div className="space-y-3">
                <span className="inline-block text-[9px] font-mono font-bold text-[#dfb453] uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-md">
                  Culture & Perks
                </span>
                <h3 className="text-xl font-bold font-display leading-tight tracking-tight text-white group-hover:text-[#dfb453] transition-colors duration-300">
                  Why Miracle View?
                </h3>
                <p className="text-xs text-teal-100/90 leading-relaxed font-sans">
                  We designed our Tempe facility to inspire healing, professional pride, and clinical excellence for both patients and staff.
                </p>
              </div>

              <div className="space-y-4 pt-5 mt-5 border-t border-white/10">
                <div className="flex items-start space-x-3 group/item">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#dfb453]/15 flex items-center justify-center transition-all group-hover/item:bg-[#dfb453]/25">
                    <CheckCircle className="w-3 h-3 text-[#dfb453]" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-teal-50 font-medium font-sans leading-snug">
                    Professional Development & clinical supervision support
                  </span>
                </div>
                <div className="flex items-start space-x-3 group/item">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#dfb453]/15 flex items-center justify-center transition-all group-hover/item:bg-[#dfb453]/25">
                    <CheckCircle className="w-3 h-3 text-[#dfb453]" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-teal-50 font-medium font-sans leading-snug">
                    Collaborative multidisciplinary medical & therapy ecosystem
                  </span>
                </div>
                <div className="flex items-start space-x-3 group/item">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#dfb453]/15 flex items-center justify-center transition-all group-hover/item:bg-[#dfb453]/25">
                    <CheckCircle className="w-3 h-3 text-[#dfb453]" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-teal-50 font-medium font-sans leading-snug">
                    Structured hybrid schedule boundaries & wellness hours
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Three supporting photos below */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100/50">
              <img 
                src={officePhotos[1]} 
                alt="Miracle View Consultation Room" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100/50">
              <img 
                src={officePhotos[2]} 
                alt="Miracle View Office Workspaces" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-gray-100/50">
              <img 
                src={officePhotos[3]} 
                alt="Miracle View Patient Lounge" 
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Open Positions Index (Search & categories list) */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-[#c39b3d] uppercase tracking-wider">Opportunities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-gray-950">
              Open Clinical & Administrative Positions
            </h2>
            <div className="w-12 h-1 bg-[#1e463c] mx-auto rounded"></div>
          </div>

          {/* Search filters widget */}
          <div className="bg-gray-50 p-4 rounded-2xl flex flex-col sm:flex-row gap-4 mb-10 border border-gray-150/60 shadow-inner">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-3 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search jobs..."
                className="w-full text-xs bg-white pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-[#1e463c]"
              />
            </div>
            <div className="sm:w-56">
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="w-full text-xs bg-white px-3 py-2.5 rounded-xl border border-gray-200 outline-none focus:border-[#1e463c] cursor-pointer"
              >
                <option value="All">All Categories</option>
                <option value="Clinical">Clinical Roles</option>
                <option value="Administrative">Administrative Roles</option>
              </select>
            </div>
          </div>

          {/* Clinical list */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-bold font-display text-[#1e463c] border-b border-gray-100 pb-2 mb-6 uppercase tracking-wider text-[11px] font-mono">
                Clinical Positions
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {clinicalJobs.map((job) => (
                  <div key={job.id} className="bg-white border border-gray-200/50 rounded-2xl p-6 shadow-sm hover:border-teal-500 hover:shadow duration-200 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-sm text-gray-950 font-display leading-tight">{job.title}</h4>
                        <span className="text-[9px] bg-teal-50 text-teal-800 font-mono uppercase tracking-wider px-2 py-0.5 rounded font-bold">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{job.location} • {job.department}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">{job.description}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-gray-50 flex justify-end">
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="bg-[#1e463c] hover:bg-[#15342d] text-white text-[11px] font-bold px-4 py-2 rounded-xl transition-all"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
                {clinicalJobs.length === 0 && (
                  <div className="text-xs text-gray-450 italic">No clinical openings match your search criteria.</div>
                )}
              </div>
            </div>

            {/* Admin list */}
            <div>
              <h3 className="text-lg font-bold font-display text-[#1e463c] border-b border-gray-100 pb-2 mb-6 uppercase tracking-wider text-[11px] font-mono">
                Administrative Positions
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {adminJobs.map((job) => (
                  <div key={job.id} className="bg-white border border-gray-200/50 rounded-2xl p-6 shadow-sm hover:border-teal-500 hover:shadow duration-200 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-bold text-sm text-gray-950 font-display leading-tight">{job.title}</h4>
                        <span className="text-[9px] bg-blue-50 text-blue-850 font-mono uppercase tracking-wider px-2 py-0.5 rounded font-bold">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{job.location} • {job.department}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">{job.description}</p>
                    </div>
                    <div className="pt-4 mt-4 border-t border-gray-50 flex justify-end">
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="bg-[#1e463c] hover:bg-[#15342d] text-white text-[11px] font-bold px-4 py-2 rounded-xl transition-all"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
                {adminJobs.length === 0 && (
                  <div className="text-xs text-gray-455 italic">No administrative openings match your search criteria.</div>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Apply Now Form (Simple Application) */}
      <section ref={formSectionRef} id="application-form" className="py-16 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="bg-white border border-gray-150 rounded-[32px] p-8 md:p-12 shadow-md space-y-5">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-extrabold font-display text-gray-950">
                Apply Now
              </h3>
              <div className="w-12 h-0.5 bg-[#c39b3d] mx-auto mt-1"></div>
            </div>

            {appliedSuccess ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-in zoom-in-95 leading-normal">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-emerald-900 font-display">Application Received!</h4>
                  <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                    Thank you for applying for the <span className="font-semibold">"{positionApplied}"</span> position. We have securely logged your candidate credentials.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setAppliedSuccess(false)}
                    className="text-xs font-bold text-[#1e463c] hover:underline"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                
                {/* Inputs grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Miller"
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] focus:bg-white transition-all placeholder-gray-400 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] focus:bg-white transition-all placeholder-gray-400 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Phone Number</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. (520) 555-0199"
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] focus:bg-white transition-all placeholder-gray-400 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Position Applied For</label>
                    <select
                      value={positionApplied}
                      onChange={(e) => setPositionApplied(e.target.value)}
                      className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] cursor-pointer font-sans"
                    >
                      {jobsData.map(j => (
                        <option key={j.id} value={j.title}>{j.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* File Upload drag/drop simulator */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 font-bold">Upload Resume</label>
                  <div className={`relative border-2 border-dashed rounded-2xl p-6.5 text-center transition-all ${fileError ? 'border-red-300 bg-red-50/30' : 'border-gray-200 hover:bg-gray-50/50 hover:border-[#1e463c]'}`}>
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="space-y-2 flex flex-col items-center">
                      <UploadCloud className={`w-8 h-8 ${fileError ? 'text-red-400' : 'text-gray-400'}`} />
                      <div className="text-xs text-gray-600 font-sans">
                        {fileName ? (
                          <span className="text-[#1e463c] font-bold">Selected file: {fileName}</span>
                        ) : fileError ? (
                          <span className="text-red-600 font-bold">{fileError}</span>
                        ) : (
                          <span>Drag & drop or <span className="text-[#1e463c] font-bold underline">Choose File</span> to upload</span>
                        )}
                      </div>
                      <p className={`text-[10px] uppercase font-mono font-bold ${fileError ? 'text-red-500' : 'text-gray-400'}`}>ACCEPTED EXTENSIONS: PDF ONLY (MAX 5MB)</p>
                    </div>
                  </div>
                </div>

                {/* Cover Notes text parameters */}
                <div>
                  <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Cover Letter / Additional Notes</label>
                  <textarea
                    rows={4}
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    placeholder="Briefly state your qualifications and available calendar days..."
                    className="w-full text-xs p-3.5 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] focus:bg-white transition-all placeholder-gray-400 font-sans"
                  ></textarea>
                </div>

                <div className="flex items-start space-x-2.5 pt-2">
                  <input
                    type="checkbox"
                    id="careers-consent-recruitment"
                    required
                    checked={consentRecruitment}
                    onChange={(e) => setConsentRecruitment(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 bg-gray-50 text-[#1e463c] focus:ring-[#1e463c] cursor-pointer"
                  />
                  <label htmlFor="careers-consent-recruitment" className="text-xs text-gray-500 leading-normal cursor-pointer selection:bg-transparent text-left">
                    I acknowledge and consent that the submitted information and documents will be used solely for recruitment, application evaluation, and employment consideration purposes in accordance with the{' '}
                    <Link to="/privacy-policy" className="underline text-[#c39b3d] hover:text-[#b08b33] transition-colors">
                      Privacy Policy
                    </Link>. <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit application trigger */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1e463c] hover:bg-[#15342d] text-white text-xs font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Submitting..." : "Submit Application"}</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  CheckCircle2, 
  ShieldCheck,
  Sparkles,
  Calendar,
  FileUp,
  FileText,
  Video,
  MapPin,
  Clock,
  Loader2
} from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { MVH_CONFIG } from '../utils/mvhConfig';
import { logConsent } from '../utils/supabaseClient';
import { setPageSeo } from '../utils/seoUtils';

// Helper functions for timezone-aware date & slot management
const getLocalDateString = (d: Date = new Date()): string => {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getTomorrowLocalDateString = (d: Date = new Date()): string => {
  const tomorrow = new Date(d);
  tomorrow.setDate(tomorrow.getDate() + 1);
  return getLocalDateString(tomorrow);
};

const getUserTimeZoneInfo = () => {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local Time';
    const formatter = new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' });
    const parts = formatter.formatToParts(new Date());
    const tzPart = parts.find(p => p.type === 'timeZoneName');
    const shortOffset = tzPart ? tzPart.value : '';
    return { timeZone, shortOffset };
  } catch {
    return { timeZone: 'Local Time', shortOffset: '' };
  }
};

const parseSlotToMinutes = (slotStr: string): number => {
  const [time, period] = slotStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours < 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

const isSlotDisabled = (slotStr: string, selectedDateStr: string, now: Date = new Date()): boolean => {
  const todayStr = getLocalDateString(now);
  if (selectedDateStr < todayStr) return true;
  if (selectedDateStr > todayStr) return false;
  
  // For today: disable slots that are in the past or current time
  const slotMinutes = parseSlotToMinutes(slotStr);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return slotMinutes <= currentMinutes;
};

const timeslots = [
  '09:30 AM',
  '10:30 AM',
  '11:45 AM',
  '01:15 PM',
  '02:45 PM',
  '04:00 PM'
];

const getInitialBookingDate = (now: Date = new Date(), slots: string[] = timeslots): string => {
  const todayStr = getLocalDateString(now);
  const hasAvailableSlotToday = slots.some(slot => !isSlotDisabled(slot, todayStr, now));
  return hasAvailableSlotToday ? todayStr : getTomorrowLocalDateString(now);
};

export default function BookNowPage() {
  const location = useLocation();

  // Dynamic real-time clock state (updates every 30s to keep slot availability strictly accurate)
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const userTz = getUserTimeZoneInfo();
  const todayStr = getLocalDateString(now);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceId, setServiceId] = useState('tms-therapy');
  const [selectedDate, setSelectedDate] = useState(() => getInitialBookingDate(new Date(), timeslots));
  const [selectedSlot, setSelectedSlot] = useState('');
  const [notes, setNotes] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [consentHealthcare, setConsentHealthcare] = useState(false);
  const [consentSms, setConsentSms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [confirmedApp, setConfirmedApp] = useState<any | null>(null);
  const [currentStep, setCurrentStep] = useState(1);

  // Auto-select first available slot whenever selectedDate or time updates,
  // and auto-advance to tomorrow if all of today's slots have passed
  useEffect(() => {
    const todayStr = getLocalDateString(now);
    const todayHasAvailableSlots = timeslots.some(slot => !isSlotDisabled(slot, todayStr, now));

    if (selectedDate === todayStr && !todayHasAvailableSlots) {
      setSelectedDate(getTomorrowLocalDateString(now));
      return;
    }

    const availableSlots = timeslots.filter(slot => !isSlotDisabled(slot, selectedDate, now));
    if (selectedSlot && isSlotDisabled(selectedSlot, selectedDate, now)) {
      setSelectedSlot(availableSlots.length > 0 ? availableSlots[0] : '');
    } else if (!selectedSlot && availableSlots.length > 0) {
      setSelectedSlot(availableSlots[0]);
    }
  }, [selectedDate, now, selectedSlot]);

  useEffect(() => {
    setPageSeo({
      title: 'Book Appointment | Miracle View Health Secure Patient Portal',
      description: 'Schedule an outpatient psychiatric appointment, TMS consultation, or virtual telehealth session with Miracle View Health LLC in Tempe, AZ.',
      canonicalPath: '/book-appointment'
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !consentHealthcare || isSubmitting) return;

    if (!selectedSlot || isSlotDisabled(selectedSlot, selectedDate, now)) {
      alert('The selected time slot is unavailable or has already passed in your local time zone. Please select an available slot.');
      return;
    }

    setIsSubmitting(true);

    try {
      const matchedService = servicesData.find(s => s.id === serviceId);
      const serviceTitle = matchedService ? matchedService.title : 'General Consultation';

      // Helper to convert File to Base64 string for email attachment
      let fileData = "";
      let fileName = "";
      let fileType = "";

      if (uploadedFile) {
        try {
          fileData = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(uploadedFile);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
          });
          fileName = uploadedFile.name;
          fileType = uploadedFile.type;
        } catch (fileReadErr) {
          console.error("Error reading file attachment:", fileReadErr);
        }
      }

      const endpoint = MVH_CONFIG.insuranceVerification.appsScriptUrl;

      // Prepare Supabase logConsent and Google Apps Script fetch to run concurrently in parallel
      const tasks: Promise<any>[] = [
        logConsent({
          patientName: fullName,
          patientEmail: email,
          patientPhone: phone || "N/A",
          healthcareConsent: consentHealthcare,
          smsConsent: consentSms,
          disclosureText: "Terms: Acknowledged clinic terms, Privacy Policy, scheduling coordination consent. SMS: Acknowledged optional SMS consent for reminders, scheduling alerts, and coordination updates.",
          formType: 'booking'
        })
      ];

      if (endpoint && endpoint.startsWith("http")) {
        const formData = new URLSearchParams();
        formData.append("formType", "booking");
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("phoneNumber", phone);
        formData.append("serviceTitle", serviceTitle);
        formData.append("selectedDate", selectedDate);
        formData.append("selectedSlot", selectedSlot);
        formData.append("notes", notes || "None");
        formData.append("hasFile", uploadedFile ? uploadedFile.name : "None");
        formData.append("fileName", fileName);
        formData.append("fileType", fileType);
        formData.append("fileData", fileData);
        formData.append("timestamp", new Date().toISOString());

        tasks.push(
          fetch(endpoint, {
            method: "POST",
            mode: "no-cors",
            body: formData
          })
        );
      }

      // Execute network tasks concurrently in parallel for ultra-fast response time
      await Promise.allSettled(tasks);

      const newBooking = {
        fullName,
        email,
        phone,
        serviceTitle,
        date: selectedDate,
        timeSlot: selectedSlot,
        notes,
        hasFile: !!uploadedFile
      };

      setConfirmedApp(newBooking);
      setCurrentStep(1);

      // reset fields
      setFullName('');
      setEmail('');
      setPhone('');
      setNotes('');
      setUploadedFile(null);
      setConsentHealthcare(false);
      setConsentSms(false);
    } catch (err) {
      console.error("Booking submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="booking-portal" className="bg-white">
      
      {/* 1. Page Hero - Simplified & Clean */}
      <section className="bg-gradient-to-br from-[#124237] to-[#1e463c] py-12 text-white rounded-b-[40px] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-teal-300">
            <span>Secure Patient Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight">
            Book Appointment
          </h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Reserve your clinical consultation in complete confidence
          </p>
        </div>
      </section>

      <div className="py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* LEFT: Booking Form */}
          <div className="lg:col-span-7 bg-white border border-gray-150 rounded-[32px] p-8 shadow-sm space-y-8">
            
            {MVH_CONFIG.elation.isEnabled ? (
              <div className="space-y-4">
                <div className="bg-[#ecf3f0] border border-teal-100 p-5 rounded-2xl space-y-2">
                  <div className="flex items-center space-x-2 text-[#1e463c]">
                    <ShieldCheck className="w-5 h-5" />
                    <h4 className="font-bold text-sm">Secure Portal: Elation Health Scheduler</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">
                    Please use the secure interface below to book your appointment. Your data is protected by industry-standard encryption and fully HIPAA-compliant workflows.
                  </p>
                </div>
                <iframe
                  src={MVH_CONFIG.elation.selfSchedulingUrl}
                  title="Elation Online Scheduling"
                  className="w-full h-[600px] border border-gray-150 rounded-2xl"
                  allow="geolocation; camera; microphone"
                />
              </div>
            ) : confirmedApp ? (
              <div className="space-y-6 animate-in zoom-in-95 duration-200">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-[#1a4437] font-display">Request Submitted!</h3>
                    <p className="text-xs text-emerald-700 font-sans max-w-sm mx-auto">
                      Thank you <span className="font-bold">{confirmedApp.fullName}</span>, your consultation request has been received. Our clinical coordinator will contact you to confirm final details.
                    </p>
                  </div>
                </div>

                {/* Receipt Board */}
                <div className="border border-gray-150 rounded-2xl p-6 space-y-4 font-sans text-xs">
                  <p className="font-bold uppercase tracking-wider text-[11px] text-[#1e463c] border-b pb-2">Consultation Request Details</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400">CLINICAL TREATMENT:</p>
                      <p className="font-bold text-gray-950">{confirmedApp.serviceTitle}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-400">PREFERRED DATE & TIME SLOT *:</p>
                      <p className="font-bold text-gray-950">{confirmedApp.date} @ {confirmedApp.timeSlot}</p>
                      <p className="text-[10px] text-gray-400 mt-1">* Subject to clinical availability</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#ecf3f0] border border-teal-100 p-5 rounded-2xl space-y-3">
                  <div className="flex items-center space-x-2 text-[#1e463c]">
                    <ShieldCheck className="w-5 h-5" />
                    <h4 className="font-bold text-sm">Next Steps: Clinical Coordination</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Following your request, a **Miracle View clinical coordinator** will contact you via phone or email to confirm your diagnostic details, verify insurance (if applicable), and finalize your visit logistics.
                  </p>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setConfirmedApp(null)}
                    className="bg-[#1e463c] hover:bg-[#15342d] text-white text-xs font-bold py-3 px-6 rounded-xl transition-all"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-6">
                
                {/* Visual Step Indicator Stepper */}
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 mb-6">
                  {[
                    { number: 1, label: 'Treatment' },
                    { number: 2, label: 'Schedule' },
                    { number: 3, label: 'Patient Info' }
                  ].map((step, idx) => (
                    <React.Fragment key={step.number}>
                      <div className="flex items-center space-x-2">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-mono font-bold transition-all duration-300 ${
                          currentStep === step.number 
                            ? 'bg-[#1e463c] text-white shadow-sm' 
                            : currentStep > step.number
                              ? 'bg-[#c39b3d] text-white'
                              : 'bg-gray-100 text-gray-455'
                        }`}>
                          {step.number}
                        </div>
                        <span className={`text-[11px] font-medium hidden sm:inline ${
                          currentStep === step.number 
                            ? 'text-[#1e463c] font-bold' 
                            : 'text-gray-400'
                        }`}>
                          {step.label}
                        </span>
                      </div>
                      {idx < 2 && (
                        <div className={`flex-1 h-0.5 mx-2 transition-all duration-500 ${
                          currentStep > step.number ? 'bg-[#c39b3d]' : 'bg-gray-150/60'
                        }`} />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Step 1: Select Treatment */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold font-display text-[#1e463c]">1. Select Treatment</h3>
                      <p className="text-[11px] text-gray-400">Assign your clinical care path.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Clinical Service</label>
                        <select
                          value={serviceId}
                          onChange={(e) => setServiceId(e.target.value)}
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c]"
                        >
                          <optgroup label="Advance Therapies">
                            {servicesData.filter(s => s.category === 'innovative').map(s => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Mental Health & Wellness">
                            {servicesData.filter(s => s.category === 'behavioral').map(s => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                          </optgroup>
                          <optgroup label="Other Services">
                            {servicesData.filter(s => s.category === 'medical').map(s => (
                              <option key={s.id} value={s.id}>{s.title}</option>
                            ))}
                          </optgroup>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end pt-4 border-t border-gray-50">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="bg-[#1e463c] hover:bg-[#15342d] text-white text-xs font-bold py-3 px-6 rounded-xl transition-all"
                      >
                        Next: Select Schedule
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Select Date & Hour */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold font-display text-[#1e463c]">2. Select Date & Hour</h3>
                      <p className="text-[11px] text-gray-400">Configure clinic schedules aligned with our medical operations.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Choose Date</label>
                        <input
                          type="date"
                          required
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          min={todayStr}
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] font-mono cursor-pointer"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Preferable Time Slots *</label>
                        <div className="flex flex-wrap gap-1.5">
                          {timeslots.map((slot) => {
                            const disabled = isSlotDisabled(slot, selectedDate, now);
                            const isSelected = selectedSlot === slot;

                            return (
                              <button
                                key={slot}
                                type="button"
                                disabled={disabled}
                                onClick={() => !disabled && setSelectedSlot(slot)}
                                className={`text-[9px] font-mono font-bold px-2.5 py-1.5 border rounded-lg transition-all ${
                                  disabled
                                    ? 'bg-gray-100 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed line-through'
                                    : isSelected 
                                      ? 'bg-[#1e463c] border-transparent text-white shadow-sm' 
                                      : 'bg-white border-gray-200 text-gray-600 hover:bg-[#ecf3f0] hover:text-[#1e463c]'
                                }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                        <p className="text-[9px] text-gray-400 mt-1.5">* Final scheduling will be confirmed by phone/email.</p>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 border-t border-gray-50">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold py-3 px-6 rounded-xl transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        disabled={!selectedSlot || isSlotDisabled(selectedSlot, selectedDate, now)}
                        onClick={() => setCurrentStep(3)}
                        className="bg-[#1e463c] hover:bg-[#15342d] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold py-3 px-6 rounded-xl transition-all"
                      >
                        Next: Patient Info
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Patient Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold font-display text-[#1e463c]">3. Patient Information</h3>
                      <p className="text-[11px] text-gray-400">Supply credentials and confirm privacy parameters.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Patient Full Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Sarah Miller"
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] placeholder-gray-400 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. sarah@example.com"
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] placeholder-gray-400 font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Contact Number</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. (520) 555-0199"
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] placeholder-gray-400 font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Comments</label>
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Additional details..."
                          className="w-full text-xs p-3 bg-gray-50 border border-gray-150 rounded-xl focus:outline-none focus:border-[#1e463c] placeholder-gray-400 font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-sans uppercase tracking-wider text-gray-700 mb-1.5 font-bold">Upload Reports (Optional)</label>
                      <div className="relative group">
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                        />
                        <label
                          htmlFor="file-upload"
                          className="flex items-center justify-center space-x-2 w-full p-3 border border-dashed border-gray-200 rounded-xl cursor-pointer group-hover:border-[#1e463c] group-hover:bg-gray-50 transition-all"
                        >
                          <FileUp className="w-4.5 h-4.5 text-gray-400 group-hover:text-[#1e463c]" />
                          <span className="text-[11px] text-gray-500 group-hover:text-[#1e463c] font-medium">
                            {uploadedFile ? uploadedFile.name : 'Choose PDF or Image reports'}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-[#f8faf9] border border-gray-100 p-3.5 rounded-xl flex items-start space-x-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#c39b3d] mt-[2px] flex-shrink-0" />
                      <p className="text-[10px] text-gray-500 leading-normal font-sans">
                        <strong>Coordination Policy:</strong> Clinical coordinators verify benefits and confirm scheduling within 24 business hours.
                      </p>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="booking-consent-healthcare"
                          required
                          checked={consentHealthcare}
                          onChange={(e) => setConsentHealthcare(e.target.checked)}
                          className="mt-1 h-3.5 w-3.5 rounded border-gray-300 bg-gray-50 text-[#1e463c] focus:ring-[#1e463c] cursor-pointer"
                        />
                        <label htmlFor="booking-consent-healthcare" className="text-[10px] text-gray-400 leading-normal cursor-pointer text-left">
                          I agree to scheduling, coordination, and handling in accordance with the{' '}
                          <Link to="/privacy-policy" className="underline text-[#c39b3d] hover:text-[#b08b33] transition-colors">
                            Privacy Policy
                          </Link>. <span className="text-red-500">*</span>
                        </label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="booking-consent-sms"
                          checked={consentSms}
                          onChange={(e) => setConsentSms(e.target.checked)}
                          className="mt-1 h-3.5 w-3.5 rounded border-gray-300 bg-gray-50 text-[#1e463c] focus:ring-[#1e463c] cursor-pointer"
                        />
                        <label htmlFor="booking-consent-sms" className="text-[10px] text-gray-400 leading-normal cursor-pointer text-left">
                          I consent to receive text messages, scheduling alerts, and coordination notifications from Miracle View Health. Message and data rates may apply. Message frequency varies. Reply STOP to cancel at any time. Mobile information will not be shared with third parties for marketing purposes. (Optional)
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold py-3 px-6 rounded-xl transition-all"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[#1e463c] hover:bg-[#15342d] disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Submitting Request...</span>
                          </>
                        ) : (
                          <>
                            <Activity className="w-4 h-4 text-white" />
                            <span>Submit Consultation Request</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}

          </div>

          {/* RIGHT: Safety Tips & Preparation */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Preparation guide blocks */}
            <div className="bg-[#ecf3f0]/60 border border-teal-100 rounded-[32px] p-6.5 space-y-4">
              <h4 className="font-display font-extrabold text-sm text-[#1e463c] flex items-center space-x-1.5">
                <Sparkles className="w-4.5 h-4.5 text-[#c39b3d]" />
                <span>Consultation Preparation Tips</span>
              </h4>
              
              <ul className="space-y-3 text-xs text-gray-600 leading-normal font-sans">
                <li className="flex items-start space-x-2">
                  <span className="w-5 h-5 rounded-full bg-white text-emerald-800 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
                  <span>Please arrange arrival at least 15 minutes before slot times for insurance validation check-ins.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-5 h-5 rounded-full bg-white text-emerald-800 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
                  <span>Bring copies of prior psychological records or psychiatric prescription logs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-5 h-5 rounded-full bg-white text-emerald-800 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">•</span>
                  <span>Outpatient diagnostics and TMS treatment mapping elements typically require 35-45 minutes mapping duration.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
      </div>
    </div>
  );
}

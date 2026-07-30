/**
 * Miracle View Health (MVH) Backend Configuration Constants
 * 
 * Update these operational parameters once procured by the client.
 */
export const MVH_CONFIG = {
  // 🏥 Elation EHR Integration
  elation: {
    // Replace this placeholder with the secure booking widget URL provided by Elation representative
    selfSchedulingUrl: "https://elation-booking-placeholder-url.com", 
    isEnabled: false, // Set to true once the selfSchedulingUrl is active
  },

  // 🗄️ Supabase Database (for consent logs audit trail)
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || "https://ymgmhnjifnwndlffbfzw.supabase.co",
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZ21obmppZm53bmRsZmZiZnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5NzUzNjQsImV4cCI6MjEwMDU1MTM2NH0.GXhksfgzQt9jLqewSV7tQ3btsRtPPJJ6k_bAMHwQ1Zs",
  },

  // 📞 Calling System (RingCentral or MightyCall)
  telephony: {
    officePhone: "+15202741251", // Main clinic call number
    officePhoneFormatted: "(520) 274-1251", // Patient-friendly text
    officeFax: "+15203229814", // Clinic Fax number
    officeFaxFormatted: "(520) 322-9814", // Patient-friendly Fax text
    officeSms: "+15202741251", // Direct SMS text line
  },

  // 📍 Physical Clinic Address
  address: {
    full: "4801 S. Lakeshore Dr, Suite 102, Tempe, AZ 85282",
    street: "4801 S. Lakeshore Dr, Suite 102",
    cityStateZip: "Tempe, AZ 85282",
    googleMapsLink: "https://maps.app.goo.gl/qCZSFpJc3Ex3un9K6",
  },

  // 🛡️ HIPAA-Compliant Google Workspace Endpoint for Insurance Verification
  insuranceVerification: {
    appsScriptUrl: import.meta.env.VITE_INSURANCE_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbxZhtIfb8HdXVpArKv_zJznTeTpVdcBb3aP95pmVkjFPeljni_uJDVddUldq_-sQ2IN/exec",
    recipients: [
      "schedule@miracleviewhealthllc.com",
      "schedule@advancecarehealthconnect.org"
    ]
  },

  // ✉️ Direct Form Email Routing
  formSubmissions: {
    accessKey: "0aa774ea-8ee5-4f36-b3c4-999f59001344",
    supportEmail: "info@miracleviewhealthllc.com",
    careersEmail: "management@miracleviewhealthllc.com",
    careersCcEmail: "team@advancecarehealthconnect.org",
  }
};
export type MvhConfigType = typeof MVH_CONFIG;

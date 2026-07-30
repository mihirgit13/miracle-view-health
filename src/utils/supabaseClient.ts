import { createClient } from '@/utils/supabase/client';
import { MVH_CONFIG } from './mvhConfig';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || MVH_CONFIG.supabase.url;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || MVH_CONFIG.supabase.anonKey;

const hasValidKeys = Boolean(supabaseUrl && supabaseKey && !supabaseUrl.includes("placeholder") && !supabaseUrl.includes("your-supabase-url"));

export const supabase = hasValidKeys ? createClient() : null;

export interface ConsentLogData {
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  healthcareConsent: boolean;
  smsConsent: boolean;
  disclosureText: string;
  formType: 'contact' | 'booking' | 'careers' | 'insurance' | 'newsletter';
}

/**
 * Inserts a verifiable consent log record into Supabase PostgreSQL.
 * If Supabase is not configured, it fails gracefully with a console warning.
 */
export async function logConsent(data: ConsentLogData) {
  if (!supabase) {
    console.warn("Supabase is not configured. Skipping database consent log.");
    return { success: false, error: "Supabase not configured" };
  }

  try {
    const { error } = await supabase
      .from('consent_audit_logs')
      .insert([
        {
          patient_name: data.patientName,
          patient_email: data.patientEmail,
          patient_phone: data.patientPhone,
          healthcare_consent: data.healthcareConsent,
          sms_consent: data.smsConsent,
          disclosure_text: data.disclosureText,
          form_type: data.formType,
          user_agent: window.navigator.userAgent,
          referrer_url: window.location.href,
        }
      ]);

    if (error) {
      console.error("Error logging consent to Supabase:", error);
      return { success: false, error };
    }
    return { success: true };
  } catch (err) {
    console.error("Failed to log consent to Supabase:", err);
    return { success: false, error: err };
  }
}

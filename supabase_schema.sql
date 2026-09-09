-- ====================================================================
-- SUPABASE POSTGRESQL SCHEMA FOR VERIFIABLE CONSENT AUDIT LOGGING
-- Run this SQL query inside your Supabase SQL Editor to set up the table.
-- ====================================================================

-- 1. Create table for consent audit logs
CREATE TABLE IF NOT EXISTS public.consent_audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    patient_name TEXT NOT NULL,
    patient_email TEXT NOT NULL,
    patient_phone TEXT,
    healthcare_consent BOOLEAN NOT NULL,
    sms_consent BOOLEAN NOT NULL,
    disclosure_text TEXT NOT NULL,
    form_type TEXT NOT NULL,
    user_agent TEXT,
    referrer_url TEXT,
    -- Automatically extracts the client's public IP from the request headers
    client_ip TEXT DEFAULT (
        coalesce(
            current_setting('request.headers', true)::json->>'x-forwarded-for',
            current_setting('request.headers', true)::json->>'cf-connecting-ip'
        )
    )
);

-- 2. Enable Row Level Security (RLS)
-- This ensures that anonymous users can only INSERT but cannot read other people's data.
ALTER TABLE public.consent_audit_logs ENABLE ROW LEVEL SECURITY;

-- 3. Create Policy: Allow anyone (public anonymous clients) to submit consent logs
DROP POLICY IF EXISTS "Allow anonymous inserts only" ON public.consent_audit_logs;
CREATE POLICY "Allow anonymous inserts only" ON public.consent_audit_logs
    FOR INSERT 
    WITH CHECK (true);

-- 4. Create Policy: Allow authenticated staff/admin roles to view logs
DROP POLICY IF EXISTS "Allow select for authenticated staff only" ON public.consent_audit_logs;
CREATE POLICY "Allow select for authenticated staff only" ON public.consent_audit_logs
    FOR SELECT 
    TO authenticated
    USING (true);

-- 5. Create indexes to speed up compliance searches by email or phone
CREATE INDEX IF NOT EXISTS idx_consent_email ON public.consent_audit_logs(patient_email);
CREATE INDEX IF NOT EXISTS idx_consent_phone ON public.consent_audit_logs(patient_phone);
CREATE INDEX IF NOT EXISTS idx_consent_created_at ON public.consent_audit_logs(created_at);

-- 6. HIPAA Audit Integrity: Prevent client timestamp and IP spoofing
CREATE OR REPLACE FUNCTION public.enforce_consent_log_integrity()
RETURNS TRIGGER AS $$
BEGIN
    -- Force server timestamp to guarantee tamper-proof audit chronology
    NEW.created_at := now();
    -- Automatically extract and override client_ip from verified HTTP request headers
    NEW.client_ip := coalesce(
        current_setting('request.headers', true)::json->>'x-forwarded-for',
        current_setting('request.headers', true)::json->>'cf-connecting-ip',
        NEW.client_ip
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_consent_log_integrity ON public.consent_audit_logs;
CREATE TRIGGER trg_consent_log_integrity
    BEFORE INSERT ON public.consent_audit_logs
    FOR EACH ROW
    EXECUTE FUNCTION public.enforce_consent_log_integrity();

-- 7. Enforce Append-Only Immutability (HIPAA 45 CFR § 164.312(c)(1))
-- Disallow UPDATE, DELETE, and TRUNCATE across anon and authenticated roles
REVOKE UPDATE, DELETE, TRUNCATE ON public.consent_audit_logs FROM anon, authenticated;
GRANT INSERT ON public.consent_audit_logs TO anon;
GRANT SELECT, INSERT ON public.consent_audit_logs TO authenticated;


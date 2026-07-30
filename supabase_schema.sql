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
CREATE POLICY "Allow anonymous inserts only" ON public.consent_audit_logs
    FOR INSERT 
    WITH CHECK (true);

-- 4. Create Policy: Allow authenticated staff/admin roles to view logs
CREATE POLICY "Allow select for authenticated staff only" ON public.consent_audit_logs
    FOR SELECT 
    TO authenticated
    USING (true);

-- 5. Create indexes to speed up compliance searches by email or phone
CREATE INDEX IF NOT EXISTS idx_consent_email ON public.consent_audit_logs(patient_email);
CREATE INDEX IF NOT EXISTS idx_consent_phone ON public.consent_audit_logs(patient_phone);
CREATE INDEX IF NOT EXISTS idx_consent_created_at ON public.consent_audit_logs(created_at);

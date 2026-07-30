import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || "https://ymgmhnjifnwndlffbfzw.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltZ21obmppZm53bmRsZmZiZnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5NzUzNjQsImV4cCI6MjEwMDU1MTM2NH0.GXhksfgzQt9jLqewSV7tQ3btsRtPPJJ6k_bAMHwQ1Zs";

export const createClient = () =>
  createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );

import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || "https://bwnlxcdonavmnacjkwtf.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bmx4Y2RvbmF2bW5hY2prd3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MzA5NjIsImV4cCI6MjEwNDUwNjk2Mn0.0JY6W_xj67aLjpSrNiZKEcBaFlOv_n91LowxYQwqgwY";

export const createClient = () =>
  createBrowserClient(
    supabaseUrl,
    supabaseKey,
  );

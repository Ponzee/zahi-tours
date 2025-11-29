import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Support both new (publishable) and legacy (anon) key names for compatibility
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY 
  || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Fallback to legacy name

if (!supabaseUrl || !supabasePublishableKey) {
  console.warn('Missing Supabase environment variables. Auth features will not work.');
}

export const supabase = supabaseUrl && supabasePublishableKey
  ? createClient(supabaseUrl, supabasePublishableKey)
  : null;

// Server-side client with secret key (bypasses RLS - use only in API routes)
export const createServerClient = () => {
  // Support both new (secret) and legacy (service_role) key names for compatibility
  const secretKey = process.env.SUPABASE_SECRET_KEY 
    || process.env.SUPABASE_SERVICE_ROLE_KEY; // Fallback to legacy name
  
  if (!supabaseUrl || !secretKey) {
    throw new Error('Missing Supabase server environment variables');
  }
  return createClient(supabaseUrl, secretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};


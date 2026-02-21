import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  {
    auth: {
      // Persist session in localStorage so it survives page refresh
      persistSession: true,
      // Auto-refresh the access token before it expires using the refresh token
      autoRefreshToken: true,
      // Detect the session from the URL after OAuth / magic link redirects
      detectSessionInUrl: true,
    }
  }
)
import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ─────────────────────────────────────────────────────────────────
    // CORRECT Supabase v2 session initialisation pattern:
    //
    // onAuthStateChange fires immediately with an INITIAL_SESSION event
    // that contains the fully-refreshed session (Supabase will auto-use
    // the refresh token if the access token is expired).
    //
    // We rely ONLY on this listener to set the user and clear loading,
    // instead of calling getSession() separately, which can return a
    // stale / expired token before the refresh has completed and causes
    // a race condition on page refresh.
    // ─────────────────────────────────────────────────────────────────
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        // This fires for: INITIAL_SESSION, SIGNED_IN, SIGNED_OUT,
        // TOKEN_REFRESHED, USER_UPDATED, PASSWORD_RECOVERY
        setUser(session?.user ?? null)

        // Only clear the loading spinner once we have the initial answer
        // (INITIAL_SESSION or SIGNED_IN are the first events on mount)
        if (loading) setLoading(false)
      }
    )

    // Safety fallback: if for some reason onAuthStateChange never fires
    // (e.g., network issues) stop the spinner after 3 seconds so the
    // user isn't stuck on a blank screen forever.
    const fallbackTimer = setTimeout(() => {
      if (loading) setLoading(false)
    }, 3000)

    return () => {
      subscription.unsubscribe()
      clearTimeout(fallbackTimer)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const signUp = async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: username
        }
      }
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  // Always fetch a fresh session so we get a valid (auto-refreshed) token.
  // Supabase will silently exchange the refresh token if the access token
  // has expired, so the returned token is guaranteed to be usable.
  const getToken = async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error || !session) return null
    return session.access_token
  }

  // Loading UI — shown while Supabase resolves the initial session.
  // Uses theme-safe classes so it works in both dark and light mode.
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="flex flex-col items-center gap-4">
          <div className="size-10 rounded-full border-4 border-accent-teal/30 border-t-accent-teal animate-spin" />
          <p className="text-sm text-slate-500 dark:text-slate-400">Restoring your session…</p>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUp, signIn, signOut, getToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Moon, Sparkles, Sun, Eye, EyeOff } from "lucide-react";
import { useTheme } from '../context/ThemeContext';

export default function Signup() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { isDark, toggleTheme } = useTheme();

  const handleSignUp = async () => {
    setError("")
    if (!username.trim()) return setError("Username is required")
    if (username.length < 3) return setError("Username must be at least 3 characters")

    setLoading(true)
    const { error } = await signUp(email, password, username)
    setLoading(false)

    if (error) setError(error.message)
    else setSuccess(true)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark transition-colors duration-300 p-6">
        <div className="rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 shadow-xl p-10 w-full max-w-sm text-center transition-colors duration-300">
          <div className="text-5xl mb-5">📧</div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Check your email!</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            We sent a confirmation link to <strong className="text-slate-700 dark:text-slate-200">{email}</strong>
          </p>
          <a href="/login" className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-teal text-white font-semibold hover:bg-teal-500 transition-colors text-sm">
            Back to Login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-background-dark/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-accent-teal rounded-lg flex items-center justify-center text-white">
                <Sparkles size={18} fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-accent-teal">Breifly.ai</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {['Features', 'Integrations', 'Languages'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent-teal dark:hover:text-accent-teal transition-colors">{item}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Signup Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">

          {/* Card */}
          <div className="rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 shadow-xl dark:shadow-slate-900/50 p-8 transition-colors duration-300">

            {/* Card Header */}
            <div className="text-center mb-8">
              <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-accent-teal/10 dark:bg-accent-teal/20 mb-4">
                <Sparkles size={28} className="text-accent-teal" />
              </div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Create your account</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Join Breifly.ai and start briefing smarter</p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Username */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Username</label>
                <input
                  type="text"
                  placeholder="your_username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 focus:border-accent-teal transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 focus:border-accent-teal transition-colors"
                />
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password <span className="text-slate-400 dark:text-slate-500 font-normal">(min. 6 characters)</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && handleSignUp()}
                    className="w-full px-4 py-2.5 pr-11 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-accent-teal/50 focus:border-accent-teal transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(v => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm">
                  {error}
                </div>
              )}

              {/* Submit */}
              <button
                onClick={handleSignUp}
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-accent-teal hover:bg-teal-500 disabled:opacity-50 text-white font-semibold transition-all duration-200 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>

              {/* Footer link */}
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{" "}
                <a href="/login" className="text-accent-teal hover:underline font-medium">Sign in</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from '../context/ThemeContext';

export default function Signup() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const { isDark, toggleTheme } = useTheme();


  const handleSignUp = async () => {
  setError("")
  if (!username.trim()) return setError("Username is required")
  if (username.length < 3) return setError("Username must be at least 3 characters")

  setLoading(true)
  const { error } = await signUp(email, password, username)  // ← pass username
  setLoading(false)

  if (error) setError(error.message)
  else setSuccess(true)
}

  if (success) {
    return (
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm text-center">
          <div className="text-4xl mb-4">📧</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Check your email!</h2>
          <p className="text-gray-500 text-sm">We sent a confirmation link to <strong>{email}</strong></p>
          <a href="/login" className="mt-4 inline-block text-blue-500 hover:underline text-sm">
            Back to login
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-background-dark/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-accent-teal rounded-lg flex items-center justify-center text-white">
                <Sparkles size={18} fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-accent-teal">Breifly.ai</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {['Features', 'Integrations', 'Languages'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium hover:text-accent-teal dark:hover:text-accent-teal transition-colors">{item}</a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4 ">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
          </div>
        </div>
      </header>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

        <div className="flex flex-col gap-3">
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSignUp()}
            className="border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white py-2 rounded-lg font-medium transition"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-green-500 hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles, Moon, Sun, FileText,
  Lightbulb, Languages, History, Link as LinkIcon,
  GitGraph, Share2, Globe, LogOut, User, Bell, Settings,
  TrendingUp, BookOpen, Zap, ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user, signOut, getToken } = useAuth()
  const navigate = useNavigate()
  const username = user?.user_metadata?.display_name
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  const testJWT = async () => {
    const token = await getToken()
    const res = await fetch(`${API_URL}/api/me`, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
    const data = await res.json()
    console.log(data)
  }

  const stats = [
    { label: 'Documents Briefed', value: '0', icon: FileText, color: 'text-accent-teal', bg: 'bg-teal-500/10' },
    { label: 'Words Saved', value: '0', icon: TrendingUp, color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { label: 'Summaries', value: '0', icon: BookOpen, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Quick Briefs', value: '0', icon: Zap, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  ];

  const quickActions = [
    { label: 'Summarize a Document', icon: FileText, desc: 'Upload and instantly get a clear, concise brief', color: 'from-teal-500 to-cyan-600' },
    { label: 'Key Insights', icon: Lightbulb, desc: 'Extract the most important points from any text', color: 'from-violet-500 to-purple-600' },
    { label: 'Translate & Brief', icon: Languages, desc: 'Summarize content in your preferred language', color: 'from-amber-500 to-orange-600' },
    { label: 'Share Summary', icon: Share2, desc: 'Collaborate by sharing your brief with others', color: 'from-rose-500 to-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-background-dark/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-8 bg-accent-teal rounded-lg flex items-center justify-center text-white">
              <Sparkles size={18} fill="white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-accent-teal">Breifly.ai</span>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 transition-colors">
              <div className="size-7 rounded-full bg-accent-teal flex items-center justify-center text-white text-xs font-bold">
                {username?.[0]?.toUpperCase() ?? 'U'}
              </div>
              <span className="text-sm font-medium hidden sm:block">{username ?? 'User'}</span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/10 text-rose-500 dark:text-rose-400 hover:bg-rose-500/20 transition-colors text-sm font-medium cursor-pointer"
            >
              <LogOut size={16} />
              <span className="hidden sm:block">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        {/* Welcome Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-teal/20 via-teal-500/10 to-violet-500/10 dark:from-accent-teal/10 dark:via-teal-500/5 dark:to-violet-500/10 border border-teal-500/20 dark:border-teal-500/10 p-8 transition-colors duration-300">
          <div className="absolute -top-12 -right-12 size-64 rounded-full bg-accent-teal/10 dark:bg-accent-teal/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 size-48 rounded-full bg-violet-500/10 dark:bg-violet-500/5 blur-2xl pointer-events-none" />

          <div className="relative">
            <p className="text-sm font-semibold text-accent-teal uppercase tracking-widest mb-2">Dashboard</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-1">
              Welcome back, <span className="text-accent-teal">{username ?? 'User'}</span>! 👋
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">{user?.email}</p>
            <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-lg">
              Ready to turn long documents into sharp, clear briefs? Start by uploading a document or try one of your quick actions below.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-teal text-white font-semibold hover:bg-teal-500 transition-colors shadow-lg shadow-teal-500/20 cursor-pointer">
              <Sparkles size={18} />
              Start Briefing
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <div
              key={label}
              className="rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 hover:-translate-y-0.5"
            >
              <div className={`inline-flex p-2.5 rounded-xl ${bg} mb-3`}>
                <Icon size={22} className={color} />
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-5">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map(({ label, icon: Icon, desc, color }) => (
              <button
                key={label}
                className="group text-left rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 p-6 hover:shadow-xl dark:hover:shadow-slate-900/70 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{label}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity + Getting Started */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Recent Activity */}
          <div className="rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 p-6 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-6">
              <History size={20} className="text-accent-teal" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h2>
            </div>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="size-16 rounded-2xl bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center mb-4 transition-colors">
                <FileText size={28} className="text-slate-400 dark:text-slate-500" />
              </div>
              <p className="font-medium text-slate-600 dark:text-slate-300">No activity yet</p>
              <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Your recent briefs will appear here</p>
            </div>
          </div>

          {/* Getting Started */}
          <div className="rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 p-6 transition-colors duration-300">
            <div className="flex items-center gap-2 mb-6">
              <Zap size={20} className="text-accent-teal" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Getting Started</h2>
            </div>
            <div className="space-y-3">
              {[
                { step: '1', title: 'Upload your document', desc: 'PDF, Word, or paste text directly', done: false },
                { step: '2', title: 'Choose brief type', desc: 'Summary, key points, or translation', done: false },
                { step: '3', title: 'Get your brief', desc: 'Instant AI-powered summary ready to share', done: false },
              ].map(({ step, title, desc, done }) => (
                <div key={step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 transition-colors">
                  <div className={`shrink-0 size-8 rounded-full flex items-center justify-center text-sm font-bold ${done ? 'bg-accent-teal text-white' : 'bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-300'} transition-colors`}>
                    {step}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white text-sm">{title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Debug Row (dev only) */}
        {import.meta.env.DEV && (
          <div className="rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-4 flex items-center gap-4 transition-colors">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Dev tools:</span>
            <button
              onClick={testJWT}
              className="text-xs px-3 py-1.5 rounded-lg bg-accent-teal/10 text-accent-teal hover:bg-accent-teal/20 transition-colors font-medium cursor-pointer"
            >
              Test JWT
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
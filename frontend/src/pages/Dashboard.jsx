import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { 
  Sparkles, Moon, Sun, FileText, MoveRight, 
  Lightbulb, Languages, History, Link as LinkIcon,
  GitGraph, Share2, Globe
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';


export default function Dashboard() {
  const { getToken } = useAuth()
   const API_URL = import.meta.env.VITE_API_URL;
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const username = user?.user_metadata?.display_name  // ← directly from user
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  const testJWT = async () => {
  const token = await getToken()
  
  const res = await fetch(`${API_URL}/api/me`, {
    headers: { 
      'Authorization': `Bearer ${token}` 
    }
  })
  
  const data = await res.json()
  console.log(data)
}

  return (

    <div className="relative min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Logout
          </button>
           <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-600">
            Welcome back, <strong>{username.toUpperCase()}</strong>!
          </p>
          <p className="text-gray-400 text-sm mt-1">{user?.email}</p>
          <button onClick={testJWT} className="bg-blue-500 text-white px-4 py-2 rounded">
  Test JWT
</button>
        </div>
      </div>
    </div>
    </div>
  )
}
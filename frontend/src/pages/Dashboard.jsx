import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const username = user?.user_metadata?.display_name  // ← directly from user

  const handleLogout = async () => {
    await signOut()
    navigate('/login')
  }

  return (
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
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-gray-600">
            Welcome back, <strong>{username.toUpperCase()}</strong>!
          </p>
          <p className="text-gray-400 text-sm mt-1">{user?.email}</p>
        </div>
      </div>
    </div>
  )
}
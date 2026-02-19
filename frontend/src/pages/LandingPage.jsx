import { useNavigate } from "react-router-dom"

export default function LandingPage() {
    const navigate = useNavigate()


    return (
       <>
        <p>landing Page</p>
        <button
        onClick={()=>navigate('/login')}
         className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white py-2 px-4 rounded-lg font-medium transition">
            get started 
        </button></>
    )
}
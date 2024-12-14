import useStore from '../store/useStore'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const { user, setUser } = useStore()
  const navigation = useNavigate()
  return (
    <div className="p-5">
      <h2 className="text-2xl">Login Page</h2>
      <button
        onClick={() => {
          setUser(user ? null : 'User123')
          navigation('/')
        }}
        className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        Login
      </button>

      <Link to="/register" className="hover:underline">
        Register
      </Link>
    </div>
  )
}

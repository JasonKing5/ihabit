import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="p-5">
      <h2 className="text-2xl">Register Page</h2>
      <Link to="/login" className="hover:underline">
        Login
      </Link>
    </div>
  )
}

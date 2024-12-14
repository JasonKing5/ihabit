import { Outlet, Link } from 'react-router-dom'
import useStore from '../store/useStore'

export default function MainLayout() {
  const { user } = useStore()
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/tags" className="hover:underline">
            Tags
          </Link>
          {user ?? 'Guest'}
          <Link to="/login" className="hover:underline">
            {user ? 'Logout' : 'Login'}
          </Link>
        </nav>
      </header>
      <main className="flex-grow p-5">
        <Outlet />
      </main>
      <footer className="bg-gray-200 text-center p-4">
        © 2024 My Technical Blog
      </footer>
    </div>
  )
}

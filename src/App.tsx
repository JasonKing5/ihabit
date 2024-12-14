import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getUsers } from './api/user'
import useStore from './store/useStore'

function App() {
  const [count, setCount] = useState(0)
  const { user, setUser } = useStore()

  const fetchData = async () => {
    const response = await getUsers()
    console.log('page app: ', response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="p-5">
        <h1 className="text-xl font-bold">Welcome {user || 'Guest'}</h1>
        <button
          className="mt-2 p-2 bg-blue-500 text-white"
          onClick={() => setUser(user ? null : 'User123')}
        >
          {user ? 'Logout' : 'Login'}
        </button>
      </div>
      <div className="flex justify-center items-center h-64">
        <img
          src={viteLogo}
          alt="Vite Logo"
          className="w-32 h-32 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="w-32 h-32 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="text-center p-110">
        <h1 className="text-4xl font-bold text-blue-500">Hello TailwindCSS!</h1>
      </div>
      <div className="mt-8">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          {`Count ${count}`}
        </button>
      </div>
    </>
  )
}

export default App

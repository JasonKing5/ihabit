import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center items-center h-64">
        <img src={viteLogo} alt="Vite Logo" className="w-32 h-32 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
        <img src={reactLogo} alt="React Logo" className="w-32 h-32 object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out" />
      </div>
      <div className="text-center p-110">
        <h1 className="text-4xl font-bold text-blue-500">Hello TailwindCSS!</h1>
      </div>
      <div className='mt-8'>
        <button onClick={() => setCount(count+1)} className='px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
          {`Count ${count}`}
        </button>
      </div>
    </>
  )
}

export default App

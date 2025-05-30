import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-center gap-6 items-center  min-h-screen bg-gray-900 text-gray-100'>
      <div className="w-full max-w-xl p-8 rounded-xl shadow-lg bg-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-center">My Todo App</h1>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}

export default App

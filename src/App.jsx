import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='flex flex-col justify-center gap-6 items-center my-10'>
  <TodoInput/>
  <TodoList/>
  </div>
  )
}

export default App

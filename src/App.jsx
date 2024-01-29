import { useState } from 'react'
import Eightball from './Eightball'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Eightball/>
    </>
  )
}

export default App

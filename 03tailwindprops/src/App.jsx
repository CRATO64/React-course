import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 my-4 rounded-xl'>Tailwind Css</h1>
      <Card username="Ayush Gupta" btnText="Click Me"/>
      <Card username="Hitesh Chaudhary"/>
    </>
  )
}

export default App

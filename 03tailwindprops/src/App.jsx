import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Hritik",
    age:21
  }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-blue-500 text-2xl text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card  username="RVcoding" btnText="click me" />
      <Card  username="Hritik" btnText="visit me"/>
    </>
  )
}

export default App

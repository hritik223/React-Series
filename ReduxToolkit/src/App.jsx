import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

import './App.css'

function App() {
 

  return (
    <>
   <h1>Starting a New Toolkit Redux </h1>
   <AddTodo />
   <Todos />
    </>
  )
}

export default App

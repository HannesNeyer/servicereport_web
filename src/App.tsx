import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'
import LetterOfAcceptance from './components/LetterOfAcceptance'

function App() {
  const [count, setCount] = useState(0)

  return (
   
    <>
      <LoginPage/>
      <LetterOfAcceptance/>
    </>
  )
}

export default App

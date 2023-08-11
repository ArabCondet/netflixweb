import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/header'
import Body from './Componets/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
        <Header/>
        <Body/>
    </div>
    </>
  )
}

export default App

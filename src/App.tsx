import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainHome from './pages/mainHome'
import { useSelector } from 'react-redux'


function App() {
  console.log(useSelector((root)=> root))
  return (
    <div className="App">
      <MainHome />
    </div>
  )
}

export default App

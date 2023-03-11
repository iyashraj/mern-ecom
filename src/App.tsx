import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainHome from './pages/mainHome'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'
import Navbar from './components/navbar'


function App() {
  // console.log(useSelector((root)=> root))
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Signup />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

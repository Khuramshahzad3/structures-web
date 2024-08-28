import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import ContactUs from './Components/ContactUs/ContactUs'
import About from './Components/AboutUs/About'
import ServicePage from './Components/ServicesPages/ServicePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/aboutus" element={<About/>} />
        <Route path="/services" element={<ServicePage/>} />
      </Routes>


    </BrowserRouter>

  )
}

export default App

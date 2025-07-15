// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Home from './Component/Home/Home'
import Footer from './Layout/Footer'
import HowItWorks from './Component/Pages/Howitworks'
import Pricing from './Component/Pages/Pricing'
import Contact from './Component/Pages/Contact'
import Features from './Component/Pages/Features'
import Aboutus from './Component/Pages/Aboutus'






export default function App() {
  const location = useLocation()

  // Hide navbar/footer for these routes
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/features" element={<Features />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/aboutus" element={<Aboutus />} />
        
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

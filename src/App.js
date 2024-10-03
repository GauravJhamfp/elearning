import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/Home'
import ContactUs from './components/ContactUs'
import Courses from './components/Courses'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contactus' element={<ContactUs />} />
          <Route exact path='/Courses' element={<Courses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

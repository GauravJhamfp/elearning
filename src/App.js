import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Courses from './components/home/Courses'
import Contact from './pages/Contact'
import About from './components/home/About'
import Faculty from './components/home/Faculty'
import Testimonial from './components/home/Testimonial'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/Courses' element={<Courses />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/team' element={<Faculty />} />
          <Route exact path='/testimonial' element={<Testimonial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

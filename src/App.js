import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contactus' element={<ContactUs />}/>
      </Routes>
    </>
  )
}

export default App

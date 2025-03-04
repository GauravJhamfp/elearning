import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//about faculty testimonials
import Navbar from './components/Navbar'
import Home from './components/home/Home'
import About from './components/home/About'
import Courses from './components/course/Courses'
import CourseDetail from './components/course/courseDetail'
//pages
import Faculty from './components/home/Users/Faculty'
import Testimonial from './components/home/Users/Testimonial'

import ContactUs from './components/home/ContactUs'
import Login from './components/registrationLogin/Login'
import Registration from './components/registrationLogin/Registration'
import Footer from './components/home/Footer'

//import video 

import video from './images/Sample Video.mp4'
const App = () => {

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn to build full stack applications using modern web technologies.",
      price: "Rs.20,000",
      rating: 5,
      students: 30,
      hours: "1.49 Hrs",
      instructor: "Ronit Singh",
      image: "img/course-1.jpg",
      videoEmbed: video, // example video link
    },
    {
      id: 2,
      title: "Data Science and Machine Learning",
      description: "Master data analysis and machine learning algorithms.",
      price: "Rs.15,000",
      rating: 5,
      students: 30,
      hours: "2.30 Hrs",
      instructor: "Rahul Shaw",
      image: "img/course-2.jpg",
      videoEmbed: video, // example video link
    },
    {
      id: 3,
      title: "Graphic Design Essentials",
      description: "Explore the fundamentals of graphic design.",
      price: "Rs.10,000",
      rating: 5,
      students: 20,
      hours: "3.00 Hrs",
      instructor: "Gaurav Jha",
      image: "img/course-3.jpg",
      videoEmbed: video, // example video link
    },
    {
      id: 4,
      title: "React Native App Development",
      description: "Build native mobile applications using React Native.",
      price: "Rs.18,000",
      rating: 4,
      students: 40,
      hours: "3.30 Hrs",
      instructor: "Ditipriya Sen",
      image: "img/course-3.jpg",
      videoEmbed: video, // example video link
    },
    {
      id: 5,
      title: "UI/UX Design",
      description: "Design engaging user interfaces and experiences.",
      price: "Rs.12,000",
      rating: 5,
      students: 25,
      hours: "2.45 Hrs",
      instructor: "Anjali Sharma",
      image: "img/course-2.jpg",
      videoEmbed: video, // example video link
    },
    {
      id: 6,
      title: "Android App Development",
      description: "Learn to build Android applications from scratch.",
      price: "Rs.25,000",
      rating: 4,
      students: 15,
      hours: "5.00 Hrs",
      instructor: "Prasenjit Sarkar",
      image: "img/course-2.jpg",
      videoEmbed: video, // example video link
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/courses' element={<Courses courses={courses} />} />
          <Route path="/course/join/:id" element={<CourseDetail courses={courses} />} />
          <Route exact path='/faculty' element={<Faculty />} />
          <Route exact path='/testimonial' element={<Testimonial />} />
          <Route exact path='/contactus' element={<ContactUs />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import About from './About';
import Courses from './Courses';
import CourseCategorie from './CourseCategorie';
import Service from './Service';
import Faculty from './Faculty';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';


const Home = () => {
  return (
    <>
        <Navbar/>
        <Slider/>
        <Service/>
        <About/>
        <CourseCategorie/>
        <Courses/>
        <Faculty/>
        <Testimonial/>
        <ContactUs/>
        <Footer />
    </>
  );
}

export default Home
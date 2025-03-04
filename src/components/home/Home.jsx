import React from 'react'
import Slider from './Slider';
import About from './About';
import CourseCategorie from '../course/CourseCategorie';
import Service from './Service';
import Faculty from './Users/Faculty';
import Testimonial from './Users/Testimonial';


const Home = () => {
  return (
    <>
      <Slider />
      <Service />
      <About />
      <CourseCategorie />
      <Faculty />
      <Testimonial />
    </>
  );
}

export default Home
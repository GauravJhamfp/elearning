import React from 'react'
import Slider from './Slider';
import About from './About';
import Courses from './Courses';
import Service from './Service';
import Faculty from './Faculty';
import Testimonial from './Testimonial';


const Home = () => {
  return (
    <>
      <Slider />
      <Service />
      <About />
      <Courses />
      <Faculty />
      <Testimonial />
    </>
  );
}

export default Home
import React from 'react'
import Slider from './../components/home/Slider';
import About from './../components/home/About';
import Courses from './../components/home/Courses';
import Service from './../components/home/Service';
import Faculty from './../components/home/Faculty';
import Testimonial from './../components/home/Testimonial';


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
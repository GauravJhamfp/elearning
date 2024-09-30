import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    const SliderStyle = {
        background: 'rgba(24, 29, 56, 0.7)',
    };

    return (
        <div className="container-fluid p-0 mb-5">
            <Carousel className="header-carousel">
                {/* First Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/carousel-1.jpg"
                        alt="First slide"
                    />
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={SliderStyle}
                    >
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-sm-10 col-lg-8">
                                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                                        Best Online Courses
                                    </h5>
                                    <h1 className="display-3 text-white animated slideInDown">
                                        The Best Online Learning Platform
                                    </h1>
                                    <p className="fs-5 text-white mb-4 pb-2">
                                        Unlock your potential with our wide range of courses designed
                                        to help you achieve your career goals. Whether you're a beginner
                                        or looking to advance your skills, we offer the perfect learning
                                        path tailored just for you.
                                    </p>
                                    <Link
                                        to=""
                                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                    >
                                        Read More
                                    </Link>
                                    <Link
                                        to=""
                                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                                    >
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Second Slide */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/carousel-2.jpg"
                        alt="Second slide"
                    />
                    <div
                        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={SliderStyle}
                    >
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-sm-10 col-lg-8">
                                    <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                                        Best Online Courses
                                    </h5>
                                    <h1 className="display-3 text-white animated slideInDown">
                                        Empower Your Future with Our Expert-Led Courses
                                    </h1>
                                    <p className="fs-5 text-white mb-4 pb-2">
                                        Unlock your potential with our wide range of courses designed
                                        to help you achieve your career goals. Whether you're a beginner
                                        or looking to advance your skills, we offer the perfect learning
                                        path tailored just for you.
                                    </p>
                                    <Link
                                        to=""
                                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                                    >
                                        Read More
                                    </Link>
                                    <Link
                                        to=""
                                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                                    >
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;

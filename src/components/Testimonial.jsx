import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonial = () => {
    const TestimonialStyle = {
        width: "100px",
        height: "100px"
    };

    return (
        <div>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="text-center">
                        <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                        <h1 className="mb-5">Our Students Say!</h1>
                    </div>
                    <Carousel className="testimonial-carousel position-relative">
                        <Carousel.Item>
                            <div className="testimonial-item text-center">
                                <img
                                    className="border rounded-circle p-2 mx-auto mb-3"
                                    src="img/gaurav.jpg"
                                    alt="Gaurav Jha"
                                    style={TestimonialStyle}
                                />
                                <h5 className="mb-0">Gaurav Jha</h5>
                                <p>Web Developer</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">
                                        Don't just take our word for it! Hear from our learners about how our courses have helped them achieve their goals. Their success stories are a testament to the quality of education we strive to provide.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-item text-center">
                                <img
                                    className="border rounded-circle p-2 mx-auto mb-3"
                                    src="img/gaurav.jpg"
                                    alt="Ronit Singh"
                                    style={TestimonialStyle}
                                />
                                <h5 className="mb-0">Ronit Singh</h5>
                                <p>Full Stack Developer</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">
                                        Don't just take our word for it! Hear from our learners about how our courses have helped them achieve their goals. Their success stories are a testament to the quality of education we strive to provide.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-item text-center">
                                <img
                                    className="border rounded-circle p-2 mx-auto mb-3"
                                    src="img/gaurav.jpg"
                                    alt="Shubhangi Roy"
                                    style={TestimonialStyle}
                                />
                                <h5 className="mb-0">Shubhangi Roy</h5>
                                <p>Web Developer</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">
                                        Don't just take our word for it! Hear from our learners about how our courses have helped them achieve their goals. Their success stories are a testament to the quality of education we strive to provide.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="testimonial-item text-center">
                                <img
                                    className="border rounded-circle p-2 mx-auto mb-3"
                                    src="img/gaurav.jpg"
                                    alt="Ditipriya"
                                    style={TestimonialStyle}
                                />
                                <h5 className="mb-0">Ditipriya</h5>
                                <p>Developer</p>
                                <div className="testimonial-text bg-light text-center p-4">
                                    <p className="mb-0">
                                        Don't just take our word for it! Hear from our learners about how our courses have helped them achieve their goals. Their success stories are a testament to the quality of education we strive to provide.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;
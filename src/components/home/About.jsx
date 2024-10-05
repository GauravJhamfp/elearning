import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" >
                        <div className="position-relative h-100">
                            <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                        <h1 className="mb-4">Welcome to eLEARNING</h1>
                        <p className="mb-4">Our Mission: Quality Education for All.</p>
                        <p className="mb-4">We are dedicated to making high-quality education accessible to everyone. Our platform brings together industry experts and experienced educators to create courses that are not only informative but also engaging and practical. Our goal is to empower learners to succeed in their personal and professional lives.</p>
                        <div className="row gy-2 gx-4 mb-4">
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online class</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online class</p>
                            </div>
                            <div className="col-sm-6">
                                <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                            </div>
                        </div>
                        <Link className="btn btn-primary py-3 px-5 mt-2" to="">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default About
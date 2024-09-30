import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
    const courseStyle = {
        borderRadius:"0 30px 30px 0",
    }
return (
    <div>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                    <h1 className="mb-5">Popular Courses</h1>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-1.jpg" alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <Link to="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={courseStyle}>Read More</Link>
                                    <Link to="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={courseStyle}>Join Now</Link>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">Rs.2000</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">Full Stack Web Development</h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>Ronit Singh</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-2.jpg" alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <Link to="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={courseStyle}>Read More</Link>
                                    <Link to="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={courseStyle}>Join Now</Link>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">Rs.15,000</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">Data Science and Machine Learning</h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>Rahul Shaw</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>2.30 Hrs</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="course-item bg-light">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="img/course-3.jpg" alt="" />
                                <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                    <Link to="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={courseStyle}>Read More</Link>
                                    <Link to="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={courseStyle}>Join Now</Link>
                                </div>
                            </div>
                            <div className="text-center p-4 pb-0">
                                <h3 className="mb-0">Rs.10,000</h3>
                                <div className="mb-3">
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small className="fa fa-star text-primary"></small>
                                    <small>(123)</small>
                                </div>
                                <h5 className="mb-4">Graphic Design Essentials</h5>
                            </div>
                            <div className="d-flex border-top">
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>Gaurav Jha</small>
                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>3.00 Hrs</small>
                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>20 Students</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Courses;
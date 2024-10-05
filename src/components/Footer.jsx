import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-3">Quick Link</h4>
                            <Link className="btn btn-link" to="about">About Us</Link>
                            <Link className="btn btn-link" to="contact">Contact Us</Link>
                            <Link className="btn btn-link" to="">Privacy Policy</Link>
                            <Link className="btn btn-link" to="">Terms & Condition</Link>
                            <Link className="btn btn-link" to="contact">FAQs & Help</Link>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Serampore, Hooghly, West Bengal</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+917370857827</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="text-white mb-3">Gallery</h4>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/course-2.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/course-3.jpg" alt="" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid bg-light p-1" src="img/course-1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <Link className="border-bottom" to="#"> eLEARNING </Link>, All Right Reserved.
                                Designed By <Link className="border-bottom" to="">Gaurav Jha</Link><br /><br />
                                Distributed By <Link className="border-bottom" to="">Techno College Hooghly</Link>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <Link to="">Home</Link>
                                    <Link to="">Cookies</Link>
                                    <Link to="contactus">Help</Link>
                                    <Link to="">FQAs</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
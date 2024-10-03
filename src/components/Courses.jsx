import React, { useState } from 'react';
import CourseCategorie from './CourseCategorie';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState(null); // State to manage the selected course
    const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

    const courses = [
        {
            id: 1,
            title: "Full Stack Web Development",
            description: "Learn to build full stack applications using modern web technologies.",
            price: "Rs.2000",
            rating: 5,
            students: 30,
            hours: "1.49 Hrs",
            instructor: "Ronit Singh",
            image: "img/course-1.jpg",
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
        },
    ];

    const itemsPerPage = 3;
    const totalSlides = Math.ceil(courses.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const openModal = (course) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCourse(null);
    };

    const styles = {
        container: {
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            margin: '0 auto',
        },
        carouselWrapper: {
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`,
        },
        carouselContent: {
            minWidth: '33.33%', // Each course takes 1/3 of the width
            boxSizing: 'border-box',
        },
        carouselControl: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            fontSize: '2rem',
            padding: '0.5rem',
            cursor: 'pointer',
            zIndex: 10,
        },
        prevButton: {
            left: '10px',
        },
        nextButton: {
            right: '10px',
        },
        courseStyle: {
            borderRadius: '0 30px 30px 0',
        },
        modal: {
            display: isModalOpen ? 'block' : 'none',
            position: 'fixed',
            zIndex: 1000,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            overflow: 'auto',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: '20px',
        },
        modalContent: {
            backgroundColor: 'white',
            margin: '15% auto',
            padding: '20px',
            border: '1px solid #888',
            width: '80%',
        },
    };

    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Popular Courses</h1>
                    </div>
                    <div style={styles.container}>
                        <div style={styles.carouselWrapper}>
                            {courses.map((course) => (
                                <div style={styles.carouselContent} key={course.id}>
                                    <div className="course-item bg-light">
                                        <div className="position-relative overflow-hidden">
                                            <img className="img-fluid" src={course.image} alt={course.title} />
                                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                                <button
                                                    onClick={() => openModal(course)} // Open modal on click
                                                    className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
                                                >
                                                    Read More
                                                </button>
                                                <Link
                                                    to={`/course/join/${course.id}`}
                                                    className="flex-shrink-0 btn btn-sm btn-primary px-3"
                                                >
                                                    Join Now
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="text-center p-4 pb-0">
                                            <h3 className="mb-0">{course.price}</h3>
                                            <div className="mb-3">
                                                {[...Array(course.rating)].map((_, i) => (
                                                    <small key={i} className="fa fa-star text-primary"></small>
                                                ))}
                                                <small>({course.rating * 24})</small>
                                            </div>
                                            <h5 className="mb-4">{course.title}</h5>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2">
                                                <i className="fa fa-user-tie text-primary me-2"></i>
                                                {course.instructor}
                                            </small>
                                            <small className="flex-fill text-center border-end py-2">
                                                <i className="fa fa-clock text-primary me-2"></i>
                                                {course.hours}
                                            </small>
                                            <small className="flex-fill text-center py-2">
                                                <i className="fa fa-user text-primary me-2"></i>
                                                {course.students} Students
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button
                            style={{ ...styles.carouselControl, ...styles.prevButton }}
                            onClick={prevSlide}
                        >
                            &#10094;
                        </button>
                        <button
                            style={{ ...styles.carouselControl, ...styles.nextButton }}
                            onClick={nextSlide}
                        >
                            &#10095;
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal for Course Description */}
            {isModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>{selectedCourse?.title}</h2>
                        <p>{selectedCourse?.description}</p>
                        <button onClick={closeModal} className="btn btn-danger">Close</button>
                    </div>
                </div>
            )}
            <CourseCategorie />
        </>
    );
};

export default Courses;

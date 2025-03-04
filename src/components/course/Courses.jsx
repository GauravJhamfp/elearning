// import React, { useState } from 'react';
// import CourseCategorie from './CourseCategorie';
// import { Link } from 'react-router-dom';
// import bannerImage from './Banner_image.png';

// const Courses = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const courses = [
//         {
//             id: 1,
//             title: "Full Stack Web Development",
//             description: "Learn to build full stack applications using modern web technologies.",
//             price: "Rs.20,000",
//             rating: 5,
//             students: 30,
//             hours: "1.49 Hrs",
//             instructor: "Ronit Singh",
//             image: "img/course-1.jpg",
//         },
//         {
//             id: 2,
//             title: "Data Science and Machine Learning",
//             description: "Master data analysis and machine learning algorithms.",
//             price: "Rs.15,000",
//             rating: 5,
//             students: 30,
//             hours: "2.30 Hrs",
//             instructor: "Rahul Shaw",
//             image: "img/course-2.jpg",
//         },
//         {
//             id: 3,
//             title: "Graphic Design Essentials",
//             description: "Explore the fundamentals of graphic design.",
//             price: "Rs.10,000",
//             rating: 5,
//             students: 20,
//             hours: "3.00 Hrs",
//             instructor: "Gaurav Jha",
//             image: "img/course-3.jpg",
//         },
//         {
//             id: 4,
//             title: "React Native App Development",
//             description: "Build native mobile applications using React Native.",
//             price: "Rs.18,000",
//             rating: 4,
//             students: 40,
//             hours: "3.30 Hrs",
//             instructor: "Ditipriya Sen",
//             image: "img/course-3.jpg",
//         },
//         {
//             id: 5,
//             title: "UI/UX Design",
//             description: "Design engaging user interfaces and experiences.",
//             price: "Rs.12,000",
//             rating: 5,
//             students: 25,
//             hours: "2.45 Hrs",
//             instructor: "Anjali Sharma",
//             image: "img/course-2.jpg",
//         },
//         {
//             id: 6,
//             title: "Android App Development",
//             description: "Learn to build Android applications from scratch.",
//             price: "Rs.25,000",
//             rating: 4,
//             students: 15,
//             hours: "5.00 Hrs",
//             instructor: "Prasenjit Sarkar",
//             image: "img/course-2.jpg",
//         },
//     ];

//     const itemsPerPage = 3;
//     const totalSlides =courses.length / itemsPerPage;

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? totalSlides : prevIndex
//         );
//     };

//     const openModal = (course) => {
//         setSelectedCourse(course);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedCourse(null);
//     };

//     const styles = {
//         container: {
//             width: '100%',
//             overflow: 'hidden',
//             position: 'relative',
//             margin: '0 auto',
//         },
//         carouselWrapper: {
//             display: 'flex',
//             transition: 'transform 0.5s ease-in-out',
//             transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
//         },
//         carouselContent: {
//             minWidth: `${100 / itemsPerPage}%`, // Each course takes 1/3 of the width
//             boxSizing: 'border-box',
//             padding: '10px',
//         },
//         carouselControl: {
//             position: 'absolute',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             color: 'white',
//             border: 'none',
//             fontSize: '2rem',
//             padding: '0.5rem',
//             cursor: 'pointer',
//             zIndex: 10,
//         },
//         prevButton: {
//             left: '10px',
//         },
//         nextButton: {
//             right: '10px',
//         },
//         courseStyle: {
//             borderRadius: '0 30px 30px 0',
//             backgroundColor: '#f8f9fa',
//             padding: '20px',
//             boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//         },
//         modal: {
//             display: isModalOpen ? 'block' : 'none',
//             position: 'fixed',
//             zIndex: 1000,
//             left: 0,
//             top: 0,
//             width: '100%',
//             height: '100%',
//             overflow: 'auto',
//             backgroundColor: 'rgba(0,0,0,0.7)',
//             padding: '20px',
//         },
//         modalContent: {
//             backgroundColor: 'white',
//             margin: '15% auto',
//             padding: '20px',
//             border: '1px solid #888',
//             width: '80%',
//         },
//         banner: {
//             width: '100%',
//             height: '300px',
//             backgroundImage: `url(${bannerImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             color: 'white',
//             textAlign: 'center',
//             padding: '20px',
//         },
//     };

//     return (
//         <>
//             <div style={styles.banner}>
//                 <p>
//                     Create your own elearning library with our courses, that come with source files
//                     and save tons of time on research and development.
//                 </p>
//             </div>

//             <div style={{ padding: '50px 0' }}>
//                 <div style={{ textAlign: 'center', marginBottom: '30px' }}>
//                     <h1 style={{ margin: '20px 0' }}>Popular Courses</h1>
//                 </div>
//                 <div style={styles.container}>
//                     <div style={styles.carouselWrapper}>
//                         {courses.map((course) => (
//                             <div style={styles.carouselContent} key={course.id}>
//                                 <div style={styles.courseStyle}>
//                                     <div style={{ position: 'relative', overflow: 'hidden' }}>
//                                         <img style={{ width: '100%', height: 'auto' }} src={course.image} alt={course.title} />
//                                         <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', bottom: '10px', left: '0', right: '0' }}>
//                                             <button
//                                                 onClick={() => openModal(course)}
//                                                 style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' }}
//                                             >
//                                                 Read More
//                                             </button>
//                                             <button
//                                                 style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' }}
//                                             >
//                                                 Buy Now
//                                             </button>

//                                             <Link
//                                                 to={`/course/join/${course.id}`}
//                                                 style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', textDecoration: 'none', border: 'none', cursor: 'pointer' }}
//                                             >
//                                                 Join Now
//                                             </Link>

//                                         </div>
//                                     </div>
//                                     <div style={{ textAlign: 'center', padding: '10px 0' }}>
//                                         <h3 style={{ margin: '0' }}>{course.price}</h3>
//                                         <div style={{ margin: '10px 0' }}>
//                                             {[...Array(course.rating)].map((_, i) => (
//                                                 <small key={i} className="fa fa-star text-primary" style={{ color: 'gold' }}></small>
//                                             ))}
//                                             <small>({course.rating * 24})</small>
//                                         </div>
//                                         <h5 style={{ margin: '10px 0' }}>{course.title}</h5>
//                                     </div>
//                                     <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
//                                         <small style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
//                                             <i className="fa fa-user-tie" style={{ color: 'blue', marginRight: '5px' }}></i>
//                                             {course.instructor}
//                                         </small>
//                                         <small style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
//                                             <i className="fa fa-clock" style={{ color: 'blue', marginRight: '5px' }}></i>
//                                             {course.hours}
//                                         </small>
//                                         <small style={{ flex: 1, textAlign: 'center', padding: '10px' }}>
//                                             <i className="fa fa-user" style={{ color: 'blue', marginRight: '5px' }}></i>
//                                             {course.students} Students
//                                         </small>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <button
//                         style={{ ...styles.carouselControl, ...styles.prevButton }}
//                         onClick={prevSlide}
//                     >
//                         &#10094;
//                     </button>
//                     <button
//                         style={{ ...styles.carouselControl, ...styles.nextButton }}
//                         onClick={nextSlide}
//                     >
//                         &#10095;
//                     </button>
//                 </div>
//             </div>

//             {isModalOpen && (
//                 <div style={styles.modal}>
//                     <div style={styles.modalContent}>
//                         <h2>{selectedCourse?.title}</h2>
//                         <p>{selectedCourse?.description}</p>
//                         <button onClick={closeModal} style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Close</button>
//                     </div>
//                 </div>
//             )}

//             <CourseCategorie />
//         </>
//     );
// };

// export default Courses;.

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCategorie from './CourseCategorie';
import { Link } from 'react-router-dom';
import bannerImage from './Banner_image.png';

const Courses = ({ courses }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    // const courses = [
    //     {
    //         id: 1,
    //         title: "Full Stack Web Development",
    //         description: "Learn to build full stack applications using modern web technologies.",
    //         price: "Rs.20,000",
    //         rating: 5,
    //         students: 30,
    //         hours: "1.49 Hrs",
    //         instructor: "Ronit Singh",
    //         image: "img/course-1.jpg",
    //     },
    //     {
    //         id: 2,
    //         title: "Data Science and Machine Learning",
    //         description: "Master data analysis and machine learning algorithms.",
    //         price: "Rs.15,000",
    //         rating: 5,
    //         students: 30,
    //         hours: "2.30 Hrs",
    //         instructor: "Rahul Shaw",
    //         image: "img/course-2.jpg",
    //     },
    //     {
    //         id: 3,
    //         title: "Graphic Design Essentials",
    //         description: "Explore the fundamentals of graphic design.",
    //         price: "Rs.10,000",
    //         rating: 5,
    //         students: 20,
    //         hours: "3.00 Hrs",
    //         instructor: "Gaurav Jha",
    //         image: "img/course-3.jpg",
    //     },
    //     {
    //         id: 4,
    //         title: "React Native App Development",
    //         description: "Build native mobile applications using React Native.",
    //         price: "Rs.18,000",
    //         rating: 4,
    //         students: 40,
    //         hours: "3.30 Hrs",
    //         instructor: "Ditipriya Sen",
    //         image: "img/course-3.jpg",
    //     },
    //     {
    //         id: 5,
    //         title: "UI/UX Design",
    //         description: "Design engaging user interfaces and experiences.",
    //         price: "Rs.12,000",
    //         rating: 5,
    //         students: 25,
    //         hours: "2.45 Hrs",
    //         instructor: "Anjali Sharma",
    //         image: "img/course-2.jpg",
    //     },
    //     {
    //         id: 6,
    //         title: "Android App Development",
    //         description: "Learn to build Android applications from scratch.",
    //         price: "Rs.25,000",
    //         rating: 4,
    //         students: 15,
    //         hours: "5.00 Hrs",
    //         instructor: "Prasenjit Sarkar",
    //         image: "img/course-2.jpg",
    //     },
    // ];

    useEffect(() => {
        // Check for JWT token in local storage or cookie
        const token = localStorage.getItem('token');
        if (!token) {
            // Redirect to login if token is not present
            navigate('/login');
        }
        // Optional: You can add additional validation for the token here
    }, [navigate]);


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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '40px',
            padding: '20px',
        },
        courseStyle: {
            borderRadius: '0 30px 30px 0',
            backgroundColor: '#f8f9fa',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
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
        banner: {
            width: '100%',
            height: '300px',
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '20px',
        },
    };

    return (
        <>
            <div style={styles.banner}>
                <p>
                    Create your own elearning library with our courses, that come with source files
                    and save tons of time on research and development.
                </p>
            </div>

            <div style={{ padding: '50px 0' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ margin: '20px 0' }}>Popular Courses</h1>
                </div>
                <div style={styles.container}>
                    {courses.map((course) => (
                        <div style={styles.courseStyle} key={course.id}>
                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <img style={{ width: '100%', height: 'auto' }} src={course.image} alt={course.title} />
                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                                    <button
                                        onClick={() => openModal(course)}
                                        style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                    >
                                        Read More
                                    </button>
                                    <button
                                        style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer', marginRight: '10px' }}
                                    >
                                        Enroll Now

                                    </button>
                                    <Link
                                        to={`/course/join/${course.id}`}
                                        style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', textDecoration: 'none', cursor: 'pointer' }}
                                    >
                                        Join Now
                                    </Link>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                <h3 style={{ margin: '0' }}>{course.price}</h3>
                                <div style={{ margin: '10px 0' }}>
                                    {[...Array(course.rating)].map((_, i) => (
                                        <small key={i} className="fa fa-star text-primary" style={{ color: 'gold' }}></small>
                                    ))}
                                    <small>({course.rating * 24})</small>
                                </div>
                                <h5 style={{ margin: '10px 0' }}>{course.title}</h5>
                            </div>
                            <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
                                <small style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
                                    <i className="fa fa-user-tie" style={{ color: 'blue', marginRight: '5px' }}></i>
                                    {course.instructor}
                                </small>
                                <small style={{ flex: 1, textAlign: 'center', borderRight: '1px solid #ccc', padding: '10px' }}>
                                    <i className="fa fa-clock" style={{ color: 'blue', marginRight: '5px' }}></i>
                                    {course.hours}
                                </small>
                                <small style={{ flex: 1, textAlign: 'center', padding: '10px' }}>
                                    <i className="fa fa-user" style={{ color: 'blue', marginRight: '5px' }}></i>
                                    {course.students} Students
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>{selectedCourse?.title}</h2>
                        <p>{selectedCourse?.description}</p>
                        <button onClick={closeModal} style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', cursor: 'pointer' }}>Close</button>
                    </div>
                </div>
            )}

            <CourseCategorie />
        </>
    );
};

export default Courses;

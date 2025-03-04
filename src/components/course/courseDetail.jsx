import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = ({ courses }) => {
    const { id } = useParams();
    const course = courses.find((course) => course.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            
            {/* Video element added above the image */}
            {/* {course.video && (
                <video 
                    src={course.video} 
                    controls 
                    style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
                >
                    Your browser does not support the video tag.
                </video>
            )} */}

            {/* Alternatively, if embedding a video, use an iframe */}
            {course.videoEmbed && (
                <iframe
                    src={course.videoEmbed}
                    title="Course Video"
                    style={{ width: '100%', height: '400px', marginBottom: '20px' }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
            <h1>{course.title}</h1>


            {/* <img
                src={course.image}
                alt={course.title}
                style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
            /> */}
            <p>{course.description}</p>
            {/* <h3>Price: {course.price}</h3> */}
            <p><strong>Instructor:</strong> {course.instructor}</p>
            <p><strong>Duration:</strong> {course.hours}</p>
            <p><strong>Students Enrolled:</strong> {course.students}</p>
        </div>
    );
};

export default CourseDetail;

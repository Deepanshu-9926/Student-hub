import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { coursesData } from './Courses';
import './CourseDetail.css';

function CourseDetail() {
    const { courseId } = useParams();
    const [showForm, setShowForm] = useState(false);
    const [enrolled, setEnrolled] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        studentId: '',
        phone: '',
        college: ''
    });

    const course = coursesData.find(c => c.path === courseId);

    if (!course) {
        return <Navigate to="/courses" replace />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleEnrollClick = () => {
        setShowForm(true);
    };

    const handleCancelClick = () => {
        setShowForm(false);
        setFormData({
            fullName: '',
            email: '',
            studentId: '',
            phone: '',
            college: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowForm(false);
        setEnrolled(true);
    };

    return (
        <div className="page-container course-detail-container">
            <div className="course-detail-card">
                <div className="course-icon-large">{course.icon}</div>
                <h1>{course.title}</h1>
                <p className="course-description">{course.description}</p>

                <div className="course-content">
                    <h3>Features:</h3>
                    <ul className="course-topics">
                        {course.details.map((detail, index) => (
                            <li key={index}>✅ {detail}</li>
                        ))}
                    </ul>
                </div>

                {enrolled ? (
                    <div className="enroll-success-message">
                        Enrollment Successful! You have been enrolled in {course.title}.
                    </div>
                ) : showForm ? (
                    <div className="enrollment-form-container">
                        <h3>Enroll in {course.title}</h3>
                        <form className="enrollment-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="studentId">Student ID</label>
                                <input type="text" id="studentId" name="studentId" required value={formData.studentId} onChange={handleChange} placeholder="Enter your Student ID" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="college">College/Institute (Optional)</label>
                                <input type="text" id="college" name="college" value={formData.college} onChange={handleChange} placeholder="Enter your college" />
                            </div>
                            <div className="course-actions">
                                <button type="button" className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Enroll Now</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="course-actions">
                        <Link to="/courses" className="btn btn-secondary">
                            Back to Courses
                        </Link>
                        <button className="btn btn-primary" onClick={handleEnrollClick}>
                            Enroll Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CourseDetail;

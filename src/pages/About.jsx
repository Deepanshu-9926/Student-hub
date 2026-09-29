import './About.css';

function About() {
    return (
        <div className="page-container about-container">
            <h1>About Student Hub</h1>
            <p className="about-intro">Empowering students worldwide through accessible and high-quality education.</p>

            <div className="about-content">
                <h2>What this website offers</h2>
                <ul className="offerings-list">
                    <li><strong>Diverse Courses:</strong> From Web Development to Cyber Security, we cover it all.</li>
                    <li><strong>Accessible Learning:</strong> High-quality learning materials accessible to all students.</li>
                    <li><strong>Career Growth:</strong> Practical knowledge that helps you land your dream job.</li>
                    <li><strong>Community Support:</strong> Connect with fellow learners and instructors.</li>
                </ul>
            </div>
        </div>
    );
}

export default About;

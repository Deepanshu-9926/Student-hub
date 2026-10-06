import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container page-container">
            <section className="hero-section">
                <h1>Welcome to Student Hub</h1>
                <p>Your ultimate destination for learning and growth. Join us to unlock your true potential and achieve greatness.</p>
                <div className="hero-buttons">
                    <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
                    <Link to="/about" className="btn btn-secondary">Learn More</Link>
                </div>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <div className="feature-card-icon">👨‍🏫</div>
                    <h3>Expert Instructors</h3>
                    <p>Learn from industry professionals with years of real-world experience and deep domain knowledge.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-card-icon">🚀</div>
                    <h3>Flexible Learning</h3>
                    <p>Study at your own pace from anywhere in the world, perfectly tailored to your busy schedule.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-card-icon">💻</div>
                    <h3>Modern Curriculum</h3>
                    <p>Stay up to date with the latest industry standards, technologies, and best practices.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;

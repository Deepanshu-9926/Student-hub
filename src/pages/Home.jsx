import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1>Welcome to Student Hub</h1>
                <p>Your ultimate destination for learning and growth. Join us to unlock your potential.</p>
                <Link to="/courses" className="btn btn-primary">Explore Pages</Link>
            </section>

            <section className="features-section">
                <div className="feature-card">
                    <h3>Expert Instructors</h3>
                    <p>Learn from industry professionals with years of experience.</p>
                </div>
                <div className="feature-card">
                    <h3>Flexible Learning</h3>
                    <p>Study at your own pace from anywhere in the world.</p>
                </div>
                <div className="feature-card">
                    <h3>Modern Curriculum</h3>
                    <p>Stay up to date with the latest industry standards and practices.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;

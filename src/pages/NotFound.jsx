import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    return (
        <div className="page-container not-found-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
    );
}

export default NotFound;

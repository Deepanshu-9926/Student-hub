import { Link } from 'react-router-dom';
import './Courses.css';

export const coursesData = [
    {
        path: 'web-development',
        title: 'Web Development',
        description: 'Learn to build modern web applications using HTML, CSS, JavaScript, and React.',
        details: [
            'HTML5, CSS3, and Modern JavaScript',
            'React framework fundamentals',
            'State management and hooks',
            'Responsive design and CSS Grid/Flexbox'
        ],
        icon: '🌐'
    },
    {
        path: 'database-management',
        title: 'Database Management',
        description: 'Master SQL and NoSQL databases to efficiently store and manage data.',
        details: [
            'Relational databases (MySQL, PostgreSQL)',
            'NoSQL databases (MongoDB)',
            'Schema design and optimization',
            'Database integration with apps'
        ],
        icon: '🗄️'
    },
    {
        path: 'java-programming',
        title: 'Java Programming',
        description: 'Dive deep into Object-Oriented Programming and enterprise app development.',
        details: [
            'Core Java concepts',
            'Object-Oriented Programming principles',
            'Data structures in Java',
            'Exception handling and threads'
        ],
        icon: '☕'
    },
    {
        path: 'cyber-security',
        title: 'Cyber Security',
        description: 'Understand network security, ethical hacking, and protect digital assets.',
        details: [
            'Network fundamentals',
            'Vulnerability scanning',
            'Web application security',
            'Cryptography basics'
        ],
        icon: '🔒'
    },
    {
        path: 'flutter-development',
        title: 'Flutter Development',
        description: 'Create beautiful, natively compiled applications for mobile, web, and desktop.',
        details: [
            'Dart programming language',
            'Flutter widgets and layouts',
            'State management in Flutter',
            'API integration'
        ],
        icon: '📱'
    },
    {
        path: 'data-structures',
        title: 'Data Structures',
        description: 'Learn efficient algorithms and data structures to optimize code performance.',
        details: [
            'Arrays, Linked Lists, and Stacks',
            'Trees and Graphs',
            'Sorting and searching algorithms',
            'Time complexity optimization'
        ],
        icon: '🌳'
    }
];

function Courses() {
    return (
        <div className="page-container courses-container">
            <h1>Our Courses</h1>
            <p className="courses-intro">Explore our wide range of courses designed to elevate your skills.</p>

            <div className="courses-grid">
                {coursesData.map(course => (
                    <div key={course.path} className="course-card">
                        <div className="course-icon">{course.icon}</div>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <Link to={`/courses/${course.path}`} className="btn btn-secondary">View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Courses;

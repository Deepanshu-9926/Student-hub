import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate successful form submission
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="page-container contact-container">
            <h1>Contact Us</h1>
            <p className="contact-intro">Have a question or want to learn more? Send us a message!</p>

            <div className="contact-form-wrapper">
                {submitted ? (
                    <div className="success-message">
                        Thank you! Your message has been submitted.
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="How can we help you?"
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Contact;

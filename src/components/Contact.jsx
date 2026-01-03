import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span>Get In Touch</span>
                </motion.h2>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="contact-heading">Let's Connect</h3>
                        <p className="contact-text">
                            I am currently open to opportunities in Finance, Investment Compliance, and Business Analytics.
                            Feel free to reach out!
                        </p>

                        <div className="contact-details">
                            <a href="mailto:priyanjalikadam1@gmail.com" className="contact-item">
                                <div className="contact-icon"><FaEnvelope /></div>
                                <div>
                                    <span className="label">Email</span>
                                    <span className="value">priyanjalikadam1@gmail.com</span>
                                </div>
                            </a>

                            <a href="tel:+917067614411" className="contact-item">
                                <div className="contact-icon"><FaPhone /></div>
                                <div>
                                    <span className="label">Phone</span>
                                    <span className="value">+91 70676 14411</span>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/priyanjali-kadam" target="_blank" rel="noopener noreferrer" className="contact-item">
                                <div className="contact-icon"><FaLinkedin /></div>
                                <div>
                                    <span className="label">LinkedIn</span>
                                    <span className="value">priyanjali-kadam</span>
                                </div>
                            </a>

                            <div className="contact-item">
                                <div className="contact-icon"><FaMapMarkerAlt /></div>
                                <div>
                                    <span className="label">Location</span>
                                    <span className="value">India</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Simple Decorative Form Area (Visual Only) */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" className="form-input" />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" className="form-input" />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" className="form-input" rows="5"></textarea>
                            </div>
                            <button className="btn btn-primary form-btn">Send Message</button>
                        </form>
                    </motion.div>
                </div>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} Priyanjali S Kadam. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;

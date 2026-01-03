import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import './Hero.css';
import profileImg from '../assets/profile.jpg';


const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-greeting">Hello, I'm</span>
          <h1 className="hero-name">Priyanjali S Kadam</h1>
          <h2 className="hero-role">
            I am a{' '}
            <span className="hero-typing">
              <Typewriter
                words={['MBA Aspirant', 'Financial Analyst', 'Compliance Specialist']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="hero-description">
            Versatile professional with strong accounting fundamentals and internship experience at Bank of New York.
            Blending creativity with financial acumen to deliver structured, innovative solutions.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              <FaEnvelope className="btn-icon" /> Contact Me
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              <FaFileDownload className="btn-icon" /> Resume
            </a>
            <a href="https://www.linkedin.com/in/priyanjali-kadam" target="_blank" rel="noopener noreferrer" className="btn btn-icon-only">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-image-wrapper"
        >
          <div className="hero-image-placeholder">
            <img src={profileImg} alt="Priyanjali S Kadam" className="hero-image" />
          </div>
        </motion.div>
      </div>

      <div className="hero-background-glow"></div>
    </section>
  );
};

export default Hero;

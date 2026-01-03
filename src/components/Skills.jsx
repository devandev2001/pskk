import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaUsers, FaChartLine, FaMicrosoft } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const technicalSkills = [
        { name: 'Financial Modelling', level: 90, icon: <FaChartLine /> },
        { name: 'Business Valuation', level: 85, icon: <FaChartLine /> },
        { name: 'Power BI', level: 80, icon: <FaChartLine /> },
        { name: 'Microsoft Package', level: 95, icon: <FaMicrosoft /> },
        { name: 'Business Analytics', level: 85, icon: <FaLaptopCode /> },
    ];

    const professionalSkills = [
        'Leadership',
        'Public Speaking',
        'Communication',
        'Team Management',
        'Strategic Planning',
        'Problem Solving'
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    <span>Skill Set</span>
                </motion.h2>

                <div className="skills-grid">
                    {/* Technical Skills */}
                    <div className="skills-category">
                        <h3 className="category-title">
                            <FaLaptopCode className="category-icon" /> Technical Expertise
                        </h3>
                        <div className="skills-list">
                            {technicalSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar-bg">
                                        <motion.div
                                            className="skill-bar-fill"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div className="skills-category">
                        <h3 className="category-title">
                            <FaUsers className="category-icon" /> Professional Skills
                        </h3>
                        <div className="tags-container">
                            {professionalSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="skill-tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: '#000' }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>

                        {/* Certifications Box */}
                        <motion.div
                            className="certifications-box"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <h4>Certifications</h4>
                            <ul>
                                <li>Financial Derivatives, Futures, and Options (Udemy)</li>
                                <li>Introduction to Business Analytics (Coursera)</li>
                                <li>Private Equity and Venture Capital (Coursera)</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

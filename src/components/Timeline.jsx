import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Timeline.css';

const timelineData = [
    {
        id: 1,
        type: 'work',
        date: 'April - June 2025',
        title: 'Investment Compliance Intern',
        subtitle: 'Bank of New York | Pune',
        description: [
            'Conducted post-trade investment compliance and performed timely scheduling of reports.',
            'Extracted reports from in-house application and conducted trade verifications.',
            'Created an AI Chatbot leveraging BNY’s proprietary AI agent to assist new employees and a team of 30+.'
        ],
        icon: <FaBriefcase />
    },
    {
        id: 2,
        type: 'education',
        date: '2024 - 2026',
        title: 'Master of Business Administration',
        subtitle: 'BML Munjal University',
        description: [
            'CGPA: 7.57',
            'Scholarships: Secured 25% MBA Merit Scholarship worth ₹1.68L'
        ],
        icon: <FaGraduationCap />
    },
    {
        id: 3,
        type: 'education',
        date: '2020 - 2023',
        title: 'B.Com (Hons.)',
        subtitle: 'Prestige Institute of Management & Research',
        description: [
            'Percentage: 84.3%',
            'Scholarship: Undergraduate Scholarship worth ₹1.6L'
        ],
        icon: <FaGraduationCap />
    },
    {
        id: 4,
        type: 'education',
        date: '2020',
        title: '12th Grade (Commerce)',
        subtitle: 'Gwalior Glory High School',
        description: [
            'Percentage: 89.4%',
            'Academic Excellence Award (Class XI)'
        ],
        icon: <FaGraduationCap />
    }
];

const Timeline = () => {
    return (
        <section id="experience" className="timeline-section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    <span>Experience & Education</span>
                </motion.h2>

                <div className="timeline-container">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="timeline-icon">
                                {item.icon}
                            </div>
                            <div className="timeline-content">
                                <span className="timeline-date">{item.date}</span>
                                <h3 className="timeline-title">{item.title}</h3>
                                <h4 className="timeline-subtitle">{item.subtitle}</h4>
                                <div className="timeline-body">
                                    {item.description.map((desc, i) => (
                                        <p key={i}>{desc}</p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    <div className="timeline-line"></div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

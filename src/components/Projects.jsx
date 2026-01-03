import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaCalculator, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Business Analysis Project',
            subtitle: 'Auto Loan Defaulters Analysis',
            icon: <FaChartBar />,
            tags: ['Business Analytics', 'Predictive Modelling', 'Strategy'],
            description: 'Performed Diagnostic, Predictive, and Prescriptive Analysis on a dataset of Automobile Loan Defaulters.',
            highlights: [
                'Identified key trends and root causes of defaults',
                'Reduced projected defaulters from 9% to 7%',
                'Improved ROI by 3% through strategic decision support'
            ]
        },
        {
            id: 2,
            title: 'Business Valuation',
            subtitle: 'SJVN Ltd. Valuation',
            icon: <FaCalculator />,
            tags: ['Financial Modelling', 'DCF', 'Equity Research'],
            description: 'Conducted comprehensive financial modelling and business valuation for SJVN Ltd.',
            highlights: [
                'Utilized Discounted Cash Flow (DCF) and Relative Valuation methods',
                'Analyzed financial statements and capital structure',
                'Estimated intrinsic value tailored to growth assumptions'
            ]
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span>Projects</span>
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="card-header">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-titles">
                                    <h3>{project.title}</h3>
                                    <h4>{project.subtitle}</h4>
                                </div>
                            </div>

                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="project-tag">{tag}</span>
                                ))}
                            </div>

                            <p className="project-description">{project.description}</p>

                            <ul className="project-highlights">
                                {project.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>

                            <div className="card-overlay"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

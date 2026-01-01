"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '10+' },
        { label: 'Projects Delivered', value: '150+' },
        { label: 'Team Members', value: '50+' },
        { label: 'Happy Clients', value: '100%' },
    ];

    const technologies = [
        'React', 'Node.js', 'Python', 'AWS', 'Flutter', 'Docker', 'Kubernetes', 'TypeScript'
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                        <span style={{ color: 'var(--color-accent)', marginRight: '10px', fontSize: '1.5rem' }}></span>
                        About Us
                        <span style={{ height: '1px', backgroundColor: 'var(--color-text-light)', flex: 1, marginLeft: '20px', opacity: 0.3 }}></span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            We are a team of passionate developers, designers, and strategists dedicated to building cutting-edge software solutions.
                            Founded in 2015, we have grown from a small startup to a full-service software house.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            Our expertise spans across the entire software development lifecycle, from concept to deployment.
                            We believe in writing clean, maintainable code and designing intuitive user interfaces.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '2.5rem', color: 'var(--color-text-light)', fontWeight: 'bold' }}>Our Tech Stack</h3>
                        <ul style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                            gap: '12px',
                            listStyle: 'none',
                            marginTop: '1.2rem'
                        }}>
                            {technologies.map((tech) => (
                                <li key={tech} style={{ display: 'flex', alignItems: 'center', fontSize: '0.95rem' }}>
                                    <span style={{ color: 'var(--color-accent)', marginRight: '10px' }}>▹</span>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {/* Stats Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
                            {stats.map((stat, index) => (
                                <div key={index} style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                    borderRadius: '12px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    transition: 'all 0.3s ease',
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--color-accent)';
                                        e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.02)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                                    }}
                                >
                                    <div style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

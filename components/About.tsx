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
        <section id="about" className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            We are a team of passionate developers, designers, and strategists dedicated to building cutting-edge software solutions.
                            Founded in 2015, we have grown from a small startup to a full-service software house.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Our expertise spans across the entire software development lifecycle, from concept to deployment.
                            We believe in writing clean, maintainable code and designing intuitive user interfaces.
                        </p>

                        <h3 style={{ fontSize: '1.2rem', marginTop: '2rem', color: 'var(--color-text-light)' }}>Our Tech Stack</h3>
                        <ul style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(140px, 1fr))',
                            gap: '10px',
                            listStyle: 'none',
                            marginTop: '1rem'
                        }}>
                            {technologies.map((tech) => (
                                <li key={tech} style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}>
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
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                            {stats.map((stat, index) => (
                                <div key={index} style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'var(--color-bg)',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                    border: '1px solid transparent',
                                    transition: 'border-color 0.3s ease',
                                }}
                                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-accent)'}
                                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'transparent'}
                                >
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '0.9rem' }}>{stat.label}</div>
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

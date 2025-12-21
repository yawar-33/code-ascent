"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Layers, Users, Server } from 'lucide-react';

const Services = () => {
    const services = [
        {
            title: 'Software Development',
            description: 'Custom software solutions tailored to your business needs. We build scalable and robust applications.',
            icon: <Code size={40} />,
        },
        {
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps for iOS and Android using Flutter and React Native.',
            icon: <Smartphone size={40} />,
        },
        {
            title: 'Web Applications',
            description: 'Modern, responsive, and high-performance web applications using React, Next.js, and Node.js.',
            icon: <Globe size={40} />,
        },
        {
            title: 'ERP Solutions',
            description: 'Comprehensive ERP systems to streamline your business operations and improve efficiency.',
            icon: <Layers size={40} />,
        },
        {
            title: 'Dedicated Teams',
            description: 'Extend your in-house team with our skilled developers. Flexible engagement models.',
            icon: <Users size={40} />,
        },
        {
            title: 'Cloud Infrastructure',
            description: 'Secure and scalable cloud architecture design and migration services (AWS, Azure, GCP).',
            icon: <Server size={40} />,
        },
    ];

    return (
        <section id="services" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', marginBottom: '3rem' }}>
                        <span style={{ color: 'var(--color-accent)', marginRight: '10px', fontSize: '1.5rem' }}></span>
                        What We Do
                        <span style={{ height: '1px', backgroundColor: 'var(--color-text-light)', flex: 1, marginLeft: '20px', opacity: 0.3 }}></span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: 'var(--color-primary-light)',
                                padding: '2rem',
                                borderRadius: '8px',
                                cursor: 'default',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                            }}
                        >
                            <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
                                {service.title}
                            </h3>
                            <p style={{ fontSize: '1rem' }}>
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

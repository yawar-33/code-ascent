"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
    const descriptions = [
        "We are a software development company specializing in building exceptional digital experiences. From mobile apps to enterprise ERP solutions, we transform ideas into reality.",
        "Empowering businesses with scalable cloud infrastructure and dedicated development teams that integrate seamlessly with your vision.",
        "Crafting intuitive mobile applications and robust web platforms using cutting-edge technologies like React, Flutter, and Node.js.",
        "Delivering custom ERP solutions that streamline operations and drive efficiency for enterprises worldwide."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        }, 5000); // Change text every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="section"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '0', // Override section padding for full height
            }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h4 style={{ color: 'var(--color-accent)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Hi, we are
                    </h4>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(40px, 8vw, 80px)',
                        fontWeight: 'bold',
                        color: 'var(--color-text-light)',
                        lineHeight: 1.1,
                        marginBottom: '1rem'
                    }}>
                        Code Ascent.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h2 style={{
                        fontSize: 'clamp(30px, 6vw, 60px)',
                        fontWeight: 'bold',
                        color: 'var(--color-text)',
                        lineHeight: 1.1,
                        marginBottom: '2rem'
                    }}>
                        We build digital experiences.
                    </h2>
                </motion.div>

                <div style={{ maxWidth: '600px', minHeight: '100px', marginBottom: '3rem' }}>
                    <AnimatePresence mode='wait'>
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            style={{ fontSize: '1.1rem' }}
                        >
                            {descriptions[index]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href="#contact"
                        style={{
                            display: 'inline-block',
                            padding: '1.25rem 1.75rem',
                            border: '1px solid var(--color-accent)',
                            borderRadius: '4px',
                            color: 'var(--color-accent)',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            textDecoration: 'none',
                            transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
                        }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = 'rgba(100, 255, 218, 0.1)'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                    >
                        Check out our work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

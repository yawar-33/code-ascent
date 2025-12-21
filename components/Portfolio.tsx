"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/data';

const Portfolio = () => {
    return (
        <section id="portfolio" className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '2rem', marginBottom: '3rem' }}>
                        <span style={{ color: 'var(--color-accent)', marginRight: '10px', fontSize: '1.5rem' }}></span>
                        Featured Projects
                        <span style={{ height: '1px', backgroundColor: 'var(--color-text-light)', flex: 1, marginLeft: '20px', opacity: 0.3 }}></span>
                    </h2>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                backgroundColor: 'var(--color-bg)',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                                transition: 'transform 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                            whileHover={{ y: -10 }}
                        >
                            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                        onMouseEnter={(e) => (e.target as HTMLElement).style.transform = 'scale(1.1)'}
                                        onMouseLeave={(e) => (e.target as HTMLElement).style.transform = 'scale(1)'}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'var(--color-text-light)' }}>Image Coming Soon</span>
                                    </div>
                                )}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(10, 25, 47, 0.5)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.opacity = '0'}
                                >
                                    <Link href={`/project/${project.id}`} style={{ color: 'var(--color-secondary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        View Details <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.3rem', color: 'var(--color-text-light)', margin: 0 }}>
                                        {project.title}
                                    </h3>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <a href="#" style={{ color: 'var(--color-text-light)' }}><Github size={20} /></a>
                                        <a href="#" style={{ color: 'var(--color-text-light)' }}><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--color-text)', flex: 1 }}>
                                    {project.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} style={{ fontSize: '0.8rem', color: 'var(--color-accent)', fontFamily: 'var(--font-mono)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

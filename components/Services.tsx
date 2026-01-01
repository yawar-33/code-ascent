"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Layers, Users, Server, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data/data';

const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={36} />,
    Smartphone: <Smartphone size={36} />,
    Globe: <Globe size={36} />,
    Layers: <Layers size={36} />,
    Users: <Users size={36} />,
    Server: <Server size={36} />,
};

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 style={{ display: 'flex', alignItems: 'center', fontSize: '2.5rem', marginBottom: '4rem', fontWeight: 'bold' }}>
                        Our Services
                        <span style={{ height: '1px', backgroundColor: 'var(--color-accent)', flex: 1, marginLeft: '30px', opacity: 0.2 }}></span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem'
                }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: 'var(--color-primary-light)',
                                padding: '2.5rem',
                                borderRadius: '12px',
                                transition: 'all 0.3s ease',
                                border: '1px solid rgba(255,255,255,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                                {iconMap[service.iconName] || <Code size={36} />}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1rem', fontWeight: '700' }}>
                                {service.title}
                            </h3>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '2rem', flex: 1 }}>
                                {service.description}
                            </p>
                            
                            <Link 
                                href={`/services/${service.id}`}
                                style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '8px', 
                                    color: 'var(--color-accent)', 
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    transition: 'gap 0.3s ease'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                                onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                            >
                                Learn More <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

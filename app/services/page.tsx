"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Code, Smartphone, Globe, Layers, Users, Server } from 'lucide-react';
import { services } from '@/data/data';

const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={40} />,
    Smartphone: <Smartphone size={40} />,
    Globe: <Globe size={40} />,
    Layers: <Layers size={40} />,
    Users: <Users size={40} />,
    Server: <Server size={40} />,
};

export default function ServicesPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '100px', minHeight: '100vh' }}
        >
            <div className="container">
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                    <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
                </Link>

                <h1 style={{ fontSize: '3rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>Our Services</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            id={service.id}
                            style={{
                                backgroundColor: 'var(--color-primary-light)',
                                padding: '3rem',
                                borderRadius: '8px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1.5rem'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ color: 'var(--color-accent)' }}>
                                    {iconMap[service.iconName as string]}
                                </div>
                                <h2 style={{ fontSize: '2rem', color: 'var(--color-text-light)', margin: 0 }}>{service.title}</h2>
                            </div>
                            <p style={{ fontSize: '1.2rem', maxWidth: '800px' }}>{service.description}</p>
                            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', width: '100%' }}></div>
                            <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>{service.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

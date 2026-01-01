"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Code, Smartphone, Globe, Layers, Users, Server } from 'lucide-react';
import { services } from '@/data/data';
import { notFound } from 'next/navigation';

const iconMap: Record<string, React.ReactNode> = {
    Code: <Code size={48} />,
    Smartphone: <Smartphone size={48} />,
    Globe: <Globe size={48} />,
    Layers: <Layers size={48} />,
    Users: <Users size={48} />,
    Server: <Server size={48} />,
};

type Props = {
    params: Promise<{ id: string }>;
};

export default function ServiceDetail({ params }: Props) {
    const { id } = use(params);
    const service = services.find((s) => s.id === id);

    if (!service) {
        notFound();
    }

    return (
        <div style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '100px' }}>
            <div className="container">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link 
                        href="/#services" 
                        style={{ 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            marginBottom: '3rem', 
                            color: 'var(--color-text-light)',
                            transition: 'color 0.3s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}
                    >
                        <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Services
                    </Link>
                </motion.div>

                {/* Header Section */}
                <div style={{ marginBottom: 'clamp(3rem, 10vw, 5rem)' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}
                    >
                        {iconMap[service.iconName] || <Code size={48} />}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ 
                            fontSize: 'clamp(2rem, 8vw, 4.5rem)', 
                            color: 'var(--color-text-light)', 
                            marginBottom: '1.5rem', 
                            fontWeight: 'bold',
                            lineHeight: 1.1 
                        }}
                    >
                        {service.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{ 
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
                            color: 'var(--color-text)', 
                            maxWidth: '800px', 
                            lineHeight: 1.6 
                        }}
                    >
                        {service.fullDescription}
                    </motion.p>
                </div>

                {/* Content Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 8vw, 4rem)' }}>
                    {/* Features List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-light)', marginBottom: '2rem', fontWeight: '700' }}>
                            Key Features
                        </h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {service.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                                >
                                    <CheckCircle2 size={24} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                                    <span style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.4 }}>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.02)', 
                            padding: 'clamp(2rem, 5vw, 3rem)', 
                            borderRadius: '16px', 
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            textAlign: 'center',
                            alignSelf: 'start'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1rem', fontWeight: '700' }}>
                            Ready to get started?
                        </h3>
                        <p style={{ color: 'var(--color-text)', marginBottom: '2rem', fontSize: '1rem' }}>
                            Transform your business with our {service.title.toLowerCase()} expertise.
                        </p>
                        <Link 
                            href="/#contact" 
                            className="btn-filled"
                            style={{ width: '100%', textAlign: 'center', padding: '1rem' }}
                        >
                            Get a Consultation
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

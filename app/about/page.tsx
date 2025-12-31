"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { aboutData } from '@/data/data';
// import WhyChooseUs from '@/components/WhyChooseUs';

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem' }}
        >
            <div className="container">
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                    <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
                </Link>

                <h1 style={{ fontSize: '3rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>About Code Ascent</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>Our Story</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>{aboutData.story}</p>
                    </div>
                    <div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                            {aboutData.stats.map((stat, index) => (
                                <div key={index} style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'var(--color-primary-light)',
                                    borderRadius: '8px',
                                    textAlign: 'center',
                                }}>
                                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: '0.9rem' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-light)', marginBottom: '2rem' }}>Our Core Values</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                    {aboutData.values.map((value, index) => (
                        <div key={index} style={{ padding: '2rem', backgroundColor: 'var(--color-primary-light)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.3rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* <WhyChooseUs /> */}
        </motion.div>
    );
}

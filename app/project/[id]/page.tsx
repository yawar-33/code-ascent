
"use client";

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/data';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';

type Props = {
  params: Promise<{ id: string }>;
};

export default function ProjectDetail({ params }: Props) {
  const { id } = use(params);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const project = projects[currentIndex];

  if (!project) {
    notFound();
  }

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '2rem', color: 'var(--color-text-light)', transition: 'color 0.3s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}>
                    <ArrowLeft size={20} style={{ marginRight: '0.5rem' }} /> Back to Home
                </Link>
            </motion.div>

            <div style={{ marginBottom: '3rem' }}>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', color: 'var(--color-text-light)', marginBottom: '1.5rem', fontWeight: 'bold' }}
                >
                    {project.title}
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}
                >
                    {project.tags.map((tag) => (
                        <span key={tag} style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', border: '1px solid var(--color-accent)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.9rem' }}>
                            {tag}
                        </span>
                    ))}
                </motion.div>
            </div>

            {project.image && (
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    style={{ marginBottom: '5rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 30px 60px -12px rgba(2, 12, 27, 0.7)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                    <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block', transform: 'scale(1.01)' }} />
                </motion.div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-accent)', paddingBottom: '0.5rem', display: 'inline-block' }}>Overview</h3>
                    <p style={{ marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>{project.fullDescription}</p>

                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href={project.link} className="btn-primary" style={{ display: 'flex', alignItems: 'center', color: 'var(--color-accent)', fontWeight: 'bold', gap: '8px', border: '1px solid var(--color-accent)', padding: '10px 20px', borderRadius: '4px', transition: 'all 0.3s ease' }}>
                            Live Demo <ExternalLink size={18} />
                        </a>
                        <a href="#" style={{ display: 'flex', alignItems: 'center', color: 'var(--color-text-light)', gap: '8px', transition: 'color 0.3s ease' }}>
                            View Code <Github size={18} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>01. The Challenge</h3>
                        <p style={{ lineHeight: '1.7' }}>{project.challenge}</p>
                    </div>
                    <div style={{ padding: '2rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-accent)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>02. The Solution</h3>
                        <p style={{ lineHeight: '1.7' }}>{project.solution}</p>
                    </div>
                </motion.div>
            </div>

            {/* Next Project Link */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}
            >
                <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>Up Next</p>
                <Link href={`/project/${nextProject.id}`} style={{ textDecoration: 'none' }}>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-text-light)', marginBottom: '2rem', transition: 'color 0.3s ease' }} onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')} onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-light)')}>
                        {nextProject.title} <ArrowRight size={40} style={{ verticalAlign: 'middle', marginLeft: '10px' }} />
                    </h2>
                </Link>
            </motion.div>
        </div>
    </div>
  );
}

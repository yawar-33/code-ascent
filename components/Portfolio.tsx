"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { projects } from '../data/data';

const categories = ['All', 'Finance', 'E-Commerce', 'Healthcare', 'Enterprise', 'Logistics', 'Education'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '3rem' }}
        >
          <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
            OUR WORK
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--color-text-light)', lineHeight: 1.2, margin: 0 }}>
              Featured Projects &<br />
              <span style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Case Studies
              </span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text)', maxWidth: '360px', lineHeight: 1.7, margin: 0 }}>
              Real projects. Real results. Built for clients across the globe.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '50px',
                border: `1px solid ${activeCategory === cat ? 'var(--color-accent)' : 'rgba(255,255,255,0.1)'}`,
                backgroundColor: activeCategory === cat ? 'rgba(100,255,218,0.1)' : 'transparent',
                color: activeCategory === cat ? 'var(--color-accent)' : 'var(--color-text)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-sans)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {filtered.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                style={{
                  backgroundColor: 'var(--color-primary-light)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(100,255,218,0.25)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Project visual */}
                <div style={{ height: '180px', background: project.gradient, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                  {/* Category badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.3rem 0.75rem',
                    backgroundColor: 'rgba(10,25,47,0.8)',
                    borderRadius: '50px',
                    fontSize: '0.72rem',
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    border: '1px solid rgba(100,255,218,0.2)',
                    backdropFilter: 'blur(6px)',
                  }}>
                    {project.category}
                  </div>

                  {/* Hover overlay with link */}
                  <Link
                    href={`/project/${project.id}`}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0,0,0,0.4)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      textDecoration: 'none',
                      gap: '8px',
                      color: 'var(--color-text-light)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      backdropFilter: 'blur(2px)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0'; }}
                  >
                    View Case Study <ExternalLink size={16} />
                  </Link>

                  {/* Abstract pattern overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(100,255,218,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(77,217,240,0.06) 0%, transparent 50%)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-light)', margin: '0 0 0.6rem', fontWeight: 700 }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: '1.65', marginBottom: '1.25rem', flex: 1 }}>
                    {project.description}
                  </p>

                  {/* Result highlight */}
                  {project.results && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      backgroundColor: 'rgba(100,255,218,0.05)',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      marginBottom: '1.25rem',
                      borderLeft: '3px solid var(--color-accent)',
                    }}>
                      <TrendingUp size={14} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>
                        {project.results}
                      </p>
                    </div>
                  )}

                  {/* Tags + link */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={{
                          fontSize: '0.72rem',
                          color: 'var(--color-accent)',
                          fontFamily: 'var(--font-mono)',
                          border: '1px solid rgba(100,255,218,0.25)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(100,255,218,0.04)',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/project/${project.id}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.82rem',
                        color: 'var(--color-accent)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        transition: 'gap 0.2s ease',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.gap = '8px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.gap = '4px'; }}
                    >
                      Details <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Portfolio;

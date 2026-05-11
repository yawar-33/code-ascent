"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '@/data/data';

const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#68a063' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Python', color: '#ffd43b' },
  { name: 'Flutter', color: '#54c5f8' },
  { name: 'React Native', color: '#61dafb' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Kubernetes', color: '#326ce5' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'GraphQL', color: '#e535ab' },
];

const values = [
  {
    emoji: '🚀',
    title: 'Innovation First',
    description: 'We stay ahead of the curve, adopting the right technologies to deliver forward-thinking solutions.',
  },
  {
    emoji: '💎',
    title: 'Uncompromising Quality',
    description: 'Code reviews, automated tests, and design audits are built into every project — not bolted on.',
  },
  {
    emoji: '🤝',
    title: 'Transparent Partnership',
    description: 'Daily updates, open backlogs, and direct access to your team. No black boxes, ever.',
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
            WHO WE ARE
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--color-text-light)', lineHeight: 1.2, marginBottom: '1rem' }}>
            A Software Company Built<br />on Results, Not Promises
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ height: '2px', width: '60px', background: 'var(--color-accent)', borderRadius: '2px' }} />
            <span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>Since 2015</span>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}
        >
          {aboutData.stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                padding: '1.75rem 1.5rem',
                backgroundColor: 'rgba(255,255,255,0.02)',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.06)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(100,255,218,0.4)';
                e.currentTarget.style.backgroundColor = 'rgba(100,255,218,0.03)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '0.4rem', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Story + Values */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '1.25rem' }}>
              Our Story
            </h3>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text)', marginBottom: '1.25rem' }}>
              Founded in 2015, Code Ascent started as a small team of engineers with one mission: build software that actually solves problems. Today, we are a 50+ person company with a <strong style={{ color: 'var(--color-text-light)' }}>global client base spanning multiple continents</strong>.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text)' }}>
              We operate as a true technology partner — not just a vendor. We embed ourselves in your goals, challenge assumptions, and ship high-quality products that move the needle for your business.
            </p>

            {/* Global highlights row */}
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {['Remote-First', 'All Time Zones', 'Worldwide Clients', 'Agile & Async'].map((tag) => (
                <span key={tag} style={{
                  padding: '0.3rem 0.8rem',
                  backgroundColor: 'rgba(100,255,218,0.06)',
                  border: '1px solid rgba(100,255,218,0.2)',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  color: 'var(--color-accent)',
                  fontWeight: 500,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '1.25rem' }}>
              Our Values
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {values.map((value) => (
                <div
                  key={value.title}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.25rem',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(100,255,218,0.25)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                >
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{value.emoji}</span>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '0.35rem' }}>
                      {value.title}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.6 }}>
                      {value.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>&#9644;</span>
            Our Technology Stack
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {techStack.map((tech) => (
              <span
                key={tech.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.45rem 1rem',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  color: 'var(--color-text-light)',
                  fontWeight: 500,
                  transition: 'all 0.2s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color + '50';
                  e.currentTarget.style.backgroundColor = tech.color + '10';
                  e.currentTarget.style.color = tech.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.color = 'var(--color-text-light)';
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: tech.color, flexShrink: 0 }} />
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

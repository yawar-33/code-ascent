"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Layers, Users, Server, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { services } from '@/data/data';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={32} />,
  Smartphone: <Smartphone size={32} />,
  Globe: <Globe size={32} />,
  Layers: <Layers size={32} />,
  Users: <Users size={32} />,
  Server: <Server size={32} />,
};

const gradients = [
  'linear-gradient(135deg, rgba(100,255,218,0.08) 0%, transparent 100%)',
  'linear-gradient(135deg, rgba(77,217,240,0.08) 0%, transparent 100%)',
  'linear-gradient(135deg, rgba(130,170,255,0.08) 0%, transparent 100%)',
  'linear-gradient(135deg, rgba(100,255,218,0.08) 0%, transparent 100%)',
  'linear-gradient(135deg, rgba(77,217,240,0.08) 0%, transparent 100%)',
  'linear-gradient(135deg, rgba(130,170,255,0.08) 0%, transparent 100%)',
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '4rem' }}
        >
          <p style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
            WHAT WE DO
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--color-text-light)', lineHeight: 1.2, margin: 0 }}>
              Services That Drive<br />
              <span style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Business Growth
              </span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--color-text)', maxWidth: '380px', lineHeight: 1.7, margin: 0 }}>
              End-to-end software solutions tailored to your industry — delivered on time, on budget.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              style={{
                backgroundColor: 'var(--color-primary-light)',
                backgroundImage: gradients[index % gradients.length],
                padding: '2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(100,255,218,0.3)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Stat badge */}
              <span style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                fontSize: '0.72rem',
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-mono)',
                backgroundColor: 'rgba(100,255,218,0.08)',
                padding: '3px 10px',
                borderRadius: '50px',
                border: '1px solid rgba(100,255,218,0.2)',
              }}>
                {service.stat}
              </span>

              {/* Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                backgroundColor: 'rgba(100,255,218,0.08)',
                border: '1px solid rgba(100,255,218,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-accent)',
                marginBottom: '1.5rem',
                flexShrink: 0,
              }}>
                {iconMap[service.iconName] ?? <Code size={32} />}
              </div>

              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', marginBottom: '0.75rem', fontWeight: 700, paddingRight: '80px' }}>
                {service.title}
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--color-text)', marginBottom: '1.5rem', flex: 1 }}>
                {service.description}
              </p>

              {/* Top features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {service.features.slice(0, 3).map((feature) => (
                  <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text)' }}>
                    <CheckCircle size={13} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${service.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--color-accent)',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  marginTop: 'auto',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = '10px'; }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = '6px'; }}
              >
                Explore Service <ArrowRight size={15} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem 2rem', backgroundColor: 'rgba(100,255,218,0.03)', borderRadius: '20px', border: '1px solid rgba(100,255,218,0.1)' }}
        >
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', color: 'var(--color-text-light)', marginBottom: '0.75rem', fontWeight: 700 }}>
            Not sure which service fits your needs?
          </h3>
          <p style={{ color: 'var(--color-text)', marginBottom: '1.75rem', fontSize: '1rem' }}>
            Let&#39;s have a free 30-minute consultation to understand your goals and recommend the right approach.
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.9rem 2.25rem',
              background: 'linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)',
              color: 'var(--color-primary)',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 20px rgba(100,255,218,0.2)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(100,255,218,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(100,255,218,0.2)'; }}
          >
            Book a Free Consultation <ArrowRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;

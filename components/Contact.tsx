"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@codeascent.dev',
    href: 'mailto:hello@codeascent.dev',
    sub: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+92 341 5630267',
    href: 'tel:+923415630267',
    sub: 'Mon–Sat, 9am–6pm PKT',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Sat, 9am – 6pm',
    href: null,
    sub: 'Pakistan Standard Time (UTC+5)',
  },
  {
    icon: MapPin,
    label: 'Worldwide Delivery',
    value: 'Remote-first, globally available',
    href: null,
    sub: 'We work across all time zones',
  },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', service: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1rem',
    backgroundColor: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    color: 'var(--color-text-light)',
    outline: 'none',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    transition: 'border-color 0.2s ease, background-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    color: 'var(--color-text-light)',
    fontSize: '0.85rem',
    fontWeight: 600,
  };

  return (
    <section id="contact" className="section">
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
            GET IN TOUCH
          </p>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: 'var(--color-text-light)', lineHeight: 1.2, marginBottom: '1rem' }}>
            Let&#39;s Build Something{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Great Together
            </span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', maxWidth: '560px', lineHeight: 1.7 }}>
            Tell us about your project and we&#39;ll schedule a free 30-minute consultation to explore how we can help.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(100,255,218,0.08)',
                      border: '1px solid rgba(100,255,218,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-accent)',
                      flexShrink: 0,
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--color-text-light)', fontWeight: 600, marginBottom: '2px' }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--color-text)' }}>{item.sub}</div>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', textDecoration: 'none', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', transition: 'border-color 0.2s ease', backgroundColor: 'rgba(255,255,255,0.01)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(100,255,218,0.25)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; }}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Availability note */}
            <div style={{
              padding: '1.25rem',
              backgroundColor: 'rgba(100,255,218,0.05)',
              border: '1px solid rgba(100,255,218,0.15)',
              borderRadius: '12px',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start',
            }}>
              <CheckCircle size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '1px' }} />
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-light)', marginBottom: '4px' }}>
                  Currently accepting new projects
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text)' }}>
                  Typical response time: within 4 business hours
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                backgroundColor: 'rgba(255,255,255,0.02)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name *</label>
                  <input
                    type="text" id="name" name="name" required
                    value={formState.name} onChange={handleChange}
                    placeholder="John Smith"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'rgba(100,255,218,0.02)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address *</label>
                  <input
                    type="email" id="email" name="email" required
                    value={formState.email} onChange={handleChange}
                    placeholder="john@company.com"
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'rgba(100,255,218,0.02)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" style={labelStyle}>Service of Interest</label>
                <select
                  id="service" name="service"
                  value={formState.service} onChange={handleChange}
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  <option value="" style={{ backgroundColor: '#0a192f' }}>Select a service...</option>
                  <option value="software" style={{ backgroundColor: '#0a192f' }}>Custom Software Development</option>
                  <option value="mobile" style={{ backgroundColor: '#0a192f' }}>Mobile App Development</option>
                  <option value="web" style={{ backgroundColor: '#0a192f' }}>Web Application Development</option>
                  <option value="erp" style={{ backgroundColor: '#0a192f' }}>ERP &amp; Business Solutions</option>
                  <option value="teams" style={{ backgroundColor: '#0a192f' }}>Dedicated Development Teams</option>
                  <option value="cloud" style={{ backgroundColor: '#0a192f' }}>Cloud &amp; DevOps Services</option>
                  <option value="other" style={{ backgroundColor: '#0a192f' }}>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Tell Us About Your Project *</label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formState.message} onChange={handleChange}
                  placeholder="Describe your project goals, timeline, and any technical requirements..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-accent)'; e.target.style.backgroundColor = 'rgba(100,255,218,0.02)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.backgroundColor = 'rgba(255,255,255,0.03)'; }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.95rem',
                  background: isSubmitted ? 'rgba(100,255,218,0.15)' : 'linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)',
                  color: isSubmitted ? 'var(--color-accent)' : 'var(--color-primary)',
                  border: isSubmitted ? '1px solid var(--color-accent)' : 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: isSubmitting || isSubmitted ? 'default' : 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '0.25rem',
                  boxShadow: isSubmitted ? 'none' : '0 4px 20px rgba(100,255,218,0.2)',
                }}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? (
                  <><CheckCircle size={18} /> Message Sent! We&#39;ll be in touch soon.</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </button>

              <p style={{ fontSize: '0.78rem', color: 'var(--color-text)', textAlign: 'center', margin: 0 }}>
                By submitting, you agree we may use your information to respond to your inquiry.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

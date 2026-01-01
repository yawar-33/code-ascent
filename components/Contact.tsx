"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>Get In Touch</h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Have a project in mind or just want to say hi? We'd love to hear from you.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{ marginBottom: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1.5rem', fontWeight: 'bold' }}>Contact Info</h3>
                            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                                <MapPin size={20} style={{ color: 'var(--color-accent)', marginRight: '1rem', marginTop: '0.2rem', flexShrink: 0 }} />
                                <span style={{ lineHeight: '1.5' }}>123 Tech Avenue, Silicon Valley, CA 94025</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
                                <Mail size={20} style={{ color: 'var(--color-accent)', marginRight: '1rem', flexShrink: 0 }} />
                                <a href="mailto:yawarali339@gmail.com" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}>yawarali339@gmail.com</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.2rem' }}>
                                <Phone size={20} style={{ color: 'var(--color-accent)', marginRight: '1rem', flexShrink: 0 }} />
                                <a href="tel:+923415630267" style={{ color: 'var(--color-text)', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text)'}>+92 341 5630267</a>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div style={{
                            width: '100%',
                            height: '240px',
                            backgroundColor: 'rgba(255, 255, 255, 0.02)',
                            borderRadius: '12px',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-text)',
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-mono)'
                        }}>
                            Map Integration
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '1.5rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.02)',
                            padding: '1.5rem',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.05)'
                        }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        backgroundColor: 'var(--color-primary-light)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-light)',
                                        outline: 'none',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        (e.target as HTMLElement).style.borderColor = 'var(--color-accent)';
                                        (e.target as HTMLElement).style.backgroundColor = 'rgba(100, 255, 218, 0.01)';
                                    }}
                                    onBlur={(e) => {
                                        (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        (e.target as HTMLElement).style.backgroundColor = 'var(--color-primary-light)';
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        backgroundColor: 'var(--color-primary-light)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-light)',
                                        outline: 'none',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        (e.target as HTMLElement).style.borderColor = 'var(--color-accent)';
                                        (e.target as HTMLElement).style.backgroundColor = 'rgba(100, 255, 218, 0.01)';
                                    }}
                                    onBlur={(e) => {
                                        (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        (e.target as HTMLElement).style.backgroundColor = 'var(--color-primary-light)';
                                    }}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-light)', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem 1rem',
                                        backgroundColor: 'var(--color-primary-light)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-light)',
                                        outline: 'none',
                                        transition: 'all 0.3s ease',
                                        resize: 'none',
                                    }}
                                    onFocus={(e) => {
                                        (e.target as HTMLElement).style.borderColor = 'var(--color-accent)';
                                        (e.target as HTMLElement).style.backgroundColor = 'rgba(100, 255, 218, 0.01)';
                                    }}
                                    onBlur={(e) => {
                                        (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        (e.target as HTMLElement).style.backgroundColor = 'var(--color-primary-light)';
                                    }}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-filled"
                                style={{
                                    padding: '0.875rem',
                                    fontSize: '1rem',
                                    gap: '0.5rem',
                                    marginTop: '0.5rem'
                                }}
                            >
                                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

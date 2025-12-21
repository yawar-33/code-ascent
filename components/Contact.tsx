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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div style={{ marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>Contact Info</h3>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <MapPin style={{ color: 'var(--color-accent)', marginRight: '1rem' }} />
                                <span>123 Tech Avenue, Silicon Valley, CA 94025</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <Mail style={{ color: 'var(--color-accent)', marginRight: '1rem' }} />
                                <a href="mailto:yawarali339@gmail.com" style={{ color: 'var(--color-text)' }}>yawarali339@gmail.com</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                                <Phone style={{ color: 'var(--color-accent)', marginRight: '1rem' }} />
                                <a href="tel:+923415630267" style={{ color: 'var(--color-text)' }}>+92 341 5630267</a>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div style={{
                            width: '100%',
                            height: '250px',
                            backgroundColor: 'var(--color-primary-light)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-text)'
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
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        backgroundColor: 'var(--color-primary-light)',
                                        border: '1px solid transparent',
                                        borderRadius: '4px',
                                        color: 'var(--color-text-light)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = 'var(--color-accent)'}
                                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = 'transparent'}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        backgroundColor: 'var(--color-primary-light)',
                                        border: '1px solid transparent',
                                        borderRadius: '4px',
                                        color: 'var(--color-text-light)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s ease',
                                    }}
                                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = 'var(--color-accent)'}
                                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = 'transparent'}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-light)' }}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        backgroundColor: 'var(--color-primary-light)',
                                        border: '1px solid transparent',
                                        borderRadius: '4px',
                                        color: 'var(--color-text-light)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s ease',
                                        resize: 'vertical',
                                    }}
                                    onFocus={(e) => (e.target as HTMLElement).style.borderColor = 'var(--color-accent)'}
                                    onBlur={(e) => (e.target as HTMLElement).style.borderColor = 'transparent'}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                style={{
                                    padding: '1rem',
                                    backgroundColor: 'transparent',
                                    border: '1px solid var(--color-accent)',
                                    borderRadius: '4px',
                                    color: 'var(--color-accent)',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.3s ease',
                                    opacity: isSubmitting ? 0.7 : 1,
                                }}
                                onMouseEnter={(e) => !isSubmitting && ((e.target as HTMLElement).style.backgroundColor = 'rgba(100, 255, 218, 0.1)')}
                                onMouseLeave={(e) => !isSubmitting && ((e.target as HTMLElement).style.backgroundColor = 'transparent')}
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

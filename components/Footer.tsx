import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <a href="#" style={{ color: 'var(--color-text-light)' }}><Github size={20} /></a>
                    <a href="#" style={{ color: 'var(--color-text-light)' }}><Linkedin size={20} /></a>
                    <a href="#" style={{ color: 'var(--color-text-light)' }}><Twitter size={20} /></a>
                    <a href="#" style={{ color: 'var(--color-text-light)' }}><Instagram size={20} /></a>
                </div>
                <p style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Code Ascent. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

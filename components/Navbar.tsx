"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        handleScroll();
        handleResize();
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', hash: '#home' },
        { name: 'About', path: '/about', hash: '#about' },
        { name: 'Services', path: '/services', hash: '#services' },
        { name: 'Portfolio', path: '/', hash: '#portfolio' },
        // { name: 'Contact', path: '/', hash: '#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent, link: { path: string; hash: string }) => {
        setIsOpen(false);
        if (link.path === '/') {
            if (pathname !== '/') {
                // If not on home, navigate to home then scroll
                e.preventDefault();
                router.push(link.path);
                // We rely on the page loading to handle the hash or we try after timeout
                setTimeout(() => {
                    const element = document.querySelector(link.hash);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 500); // Increased timeout slightly
            } else {
                // Already on home, just scroll
                const element = document.querySelector(link.hash);
                if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav
            className={`navbar ${ (scrolled || isMobile) ? 'navbar-solid' : 'navbar-transparent' } ${ isOpen ? 'navbar-open' : '' }`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                padding: scrolled ? '0.75rem 0' : '1.25rem 0',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', fontWeight: 'bold', color: 'var(--color-accent)' }}>
                    Code Ascent
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link)}
                                style={{
                                    marginLeft: '2rem',
                                    color: 'var(--color-text-light)',
                                    fontSize: '0.85rem',
                                    fontWeight: '500',
                                    transition: 'color 0.3s ease',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a 
                            href="#contact" 
                            className="btn-primary" 
                            style={{ marginLeft: '2.5rem', fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                            onClick={(e) => handleNavClick(e, { path: '/', hash: '#contact' })}
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" onClick={toggleMenu} style={{ cursor: 'pointer', color: 'var(--color-accent)', padding: '5px' }}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: 'min(85vw, 320px)',
                            backgroundColor: '#112240', // Hardcoded solid navy
                            padding: '3rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '-10px 0 30px -15px rgba(2, 12, 27, 0.9)',
                            zIndex: 999,
                            borderLeft: '1px solid rgba(100, 255, 218, 0.2)',
                        }}
                    >
                        <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', cursor: 'pointer', color: 'var(--color-accent)' }} onClick={toggleMenu}>
                            <X size={28} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={(e) => handleNavClick(e, link)}
                                    style={{
                                        margin: '1.25rem 0',
                                        fontSize: '1.2rem',
                                        color: 'var(--color-text-light)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        transition: 'color 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-light)'}
                                >
                                    <span style={{ color: 'var(--color-accent)', marginBottom: '5px', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}> {link.name}</span>
                                   
                                </Link>
                            ))}
                            <a 
                                href="#contact" 
                                className="btn-primary" 
                                style={{ marginTop: '2.5rem', width: '80%', textAlign: 'center' }}
                                onClick={(e) => handleNavClick(e, { path: '/', hash: '#contact' })}
                            >
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .navbar-solid {
            background-color: #0a192f !important;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.9);
            border-bottom: 1px solid rgba(100, 255, 218, 0.2);
        }

        .navbar-transparent {
            background-color: transparent;
        }

        @media (max-width: 1023px) {
            .navbar {
                background-color: #0a192f !important;
                box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.9);
                border-bottom: 1px solid rgba(100, 255, 218, 0.2);
            }
        }

        @media (min-width: 1024px) {
          .desktop-menu { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;

"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'Custom Software', href: '/services/software-development' },
    { label: 'Mobile Apps', href: '/services/mobile-app-development' },
    { label: 'Web Applications', href: '/services/web-applications' },
    { label: 'ERP Solutions', href: '/services/erp-solutions' },
    { label: 'Dedicated Teams', href: '/services/dedicated-teams' },
    { label: 'Cloud & DevOps', href: '/services/cloud-infrastructure' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/#portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/#contact' },
  ],
  Markets: [
    { label: 'Software Company USA', href: '/#contact' },
    { label: 'Software Company Canada', href: '/#contact' },
    { label: 'Software Company Austria', href: '/#contact' },
    { label: 'Software House Pakistan', href: '/#contact' },
  ],
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const socials = [
  { Icon: GitHubIcon, href: 'https://github.com/codeascent', label: 'GitHub' },
  { Icon: LinkedInIcon, href: 'https://linkedin.com/company/codeascent', label: 'LinkedIn' },
  { Icon: XIcon, href: 'https://twitter.com/codeascent', label: 'X (Twitter)' },
  { Icon: InstagramIcon, href: 'https://instagram.com/codeascent', label: 'Instagram' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '5rem', paddingBottom: '2.5rem' }}>
      <div className="container">

        {/* Top: Brand + Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1', minWidth: '220px' }}>
            <Link
              href="/"
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '1rem',
              }}
            >
              Code Ascent
            </Link>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '240px' }}>
              Full-service software development company delivering world-class digital products for clients across the globe since 2015.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
              <a
                href="mailto:hello@codeascent.dev"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
              >
                <Mail size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                hello@codeascent.dev
              </a>
              <a
                href="tel:+923415630267"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-text)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
              >
                <Phone size={14} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                +92 341 5630267
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text)',
                    transition: 'all 0.2s ease',
                    backgroundColor: 'rgba(255,255,255,0.02)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.color = 'var(--color-accent)';
                    e.currentTarget.style.backgroundColor = 'rgba(100,255,218,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'var(--color-text)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-accent)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text)'; }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{
          padding: '2.5rem',
          backgroundColor: 'rgba(100,255,218,0.04)',
          border: '1px solid rgba(100,255,218,0.12)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-light)', marginBottom: '0.4rem' }}>
              Ready to start your next project?
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', margin: 0 }}>
              Get a free consultation with our senior engineers — no strings attached.
            </p>
          </div>
          <a
            href="/#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.8rem 1.75rem',
              background: 'linear-gradient(135deg, var(--color-accent) 0%, #4dd9f0 100%)',
              color: 'var(--color-primary)',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 16px rgba(100,255,218,0.2)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(100,255,218,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(100,255,218,0.2)'; }}
          >
            Start a Project <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--color-text)', margin: 0 }}>
            &copy; {year} Code Ascent. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
